'use client';

import React, { useState, useCallback } from 'react';

interface FormField {
  value: string;
  error?: string;
  required?: boolean;
  validator?: (value: string) => string | undefined;
}

interface FormConfig {
  [key: string]: FormField;
}

interface UseFormReturn<T> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  isValid: boolean;
  isSubmitting: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (onSubmit: (values: T) => Promise<void> | void) => (e: React.FormEvent) => Promise<void>;
  setFieldValue: (field: keyof T, value: string) => void;
  setFieldError: (field: keyof T, error: string) => void;
  clearErrors: () => void;
  reset: () => void;
  validateField: (field: keyof T) => boolean;
  validateForm: () => boolean;
}

// Common validators
export const validators = {
  required: (value: string) => {
    return value.trim() === '' ? 'This field is required' : undefined;
  },

  email: (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !emailRegex.test(value)) {
      return 'Please enter a valid email address';
    }
    return undefined;
  },

  minLength: (min: number) => (value: string) => {
    if (value && value.length < min) {
      return `Must be at least ${min} characters long`;
    }
    return undefined;
  },

  maxLength: (max: number) => (value: string) => {
    if (value && value.length > max) {
      return `Must be no more than ${max} characters long`;
    }
    return undefined;
  },

  phone: (value: string) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (value && !phoneRegex.test(value.replace(/\s/g, ''))) {
      return 'Please enter a valid phone number';
    }
    return undefined;
  },

  url: (value: string) => {
    try {
      if (value) new URL(value);
      return undefined;
    } catch {
      return 'Please enter a valid URL';
    }
  },

  // Combine multiple validators
  combine: (...validators: Array<(value: string) => string | undefined>) => (value: string) => {
    for (const validator of validators) {
      const error = validator(value);
      if (error) return error;
    }
    return undefined;
  }
};

export function useForm<T extends Record<string, any>>(
  initialValues: T,
  config?: Partial<Record<keyof T, { required?: boolean; validator?: (value: string) => string | undefined }>>
): UseFormReturn<T> {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = useCallback((field: keyof T): boolean => {
    const value = String(values[field] || '');
    const fieldConfig = config?.[field];

    let error: string | undefined;

    // Check required
    if (fieldConfig?.required && validators.required(value)) {
      error = validators.required(value);
    }

    // Check custom validator
    if (!error && fieldConfig?.validator) {
      error = fieldConfig.validator(value);
    }

    setErrors(prev => ({
      ...prev,
      [field]: error
    }));

    return !error;
  }, [values, config]);

  const validateForm = useCallback(): boolean => {
    if (!config) return true;

    let isValid = true;
    const newErrors: Partial<Record<keyof T, string>> = {};

    Object.keys(config).forEach(field => {
      const fieldKey = field as keyof T;
      const value = String(values[fieldKey] || '');
      const fieldConfig = config[fieldKey];

      let error: string | undefined;

      // Check required
      if (fieldConfig?.required && validators.required(value)) {
        error = validators.required(value);
      }

      // Check custom validator
      if (!error && fieldConfig?.validator) {
        error = fieldConfig.validator(value);
      }

      if (error) {
        newErrors[fieldKey] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [values, config]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof T]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  }, [errors]);

  const setFieldValue = useCallback((field: keyof T, value: string) => {
    setValues(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  const setFieldError = useCallback((field: keyof T, error: string) => {
    setErrors(prev => ({
      ...prev,
      [field]: error
    }));
  }, []);

  const clearErrors = useCallback(() => {
    setErrors({});
  }, []);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setIsSubmitting(false);
  }, [initialValues]);

  const handleSubmit = useCallback((onSubmit: (values: T) => Promise<void> | void) => {
    return async (e: React.FormEvent) => {
      e.preventDefault();

      if (!validateForm()) {
        return;
      }

      setIsSubmitting(true);
      try {
        await onSubmit(values);
      } catch (error) {
        console.error('Form submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    };
  }, [values, validateForm]);

  const isValid = Object.keys(errors).length === 0 && Object.values(errors).every(error => !error);

  return {
    values,
    errors,
    isValid,
    isSubmitting,
    handleChange,
    handleSubmit,
    setFieldValue,
    setFieldError,
    clearErrors,
    reset,
    validateField,
    validateForm,
  };
}
