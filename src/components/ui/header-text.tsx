import React from 'react';
import { HeaderText as UtilHeaderText } from '@/utils/normalBold';

interface HeaderTextProps {
  children: React.ReactNode;
  className?: string;
}

export const HeaderText: React.FC<HeaderTextProps> = ({ children, className = '' }) => {
  return (
    <UtilHeaderText className={className}>
      {children}
    </UtilHeaderText>
  );
};

export default HeaderText;
