"use client"

import { StripeElements } from "@/components/global/stripe/elements"
import { PaymentForm } from "./payment-form"

type PaymentFormProps = {
    userId: string
}

export const CreateGroup = ({ userId }: PaymentFormProps) => {
    return (
        <StripeElements>
            <PaymentForm userId={userId} />
        </StripeElements>
    )
}
