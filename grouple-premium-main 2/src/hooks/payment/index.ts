import { onCreateNewGroup } from "@/actions/groups"
import { onGetStripeClientSecret } from "@/actions/payments"
import { CreateGroupSchema } from "@/components/form/create-group/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { StripeCardElement, loadStripe } from "@stripe/stripe-js"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

export const useStripeElements = () => {
    const StripePromise = async () =>
        await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY as string)

    return { StripePromise }
}

export const usePayments = (userId: string) => {
    const stripe = useStripe()
    const elements = useElements()
    const [isCategory, setIsCategory] = useState<string | undefined>(undefined)
    const {
        reset,
        handleSubmit,
        formState: { errors },
        register,
        watch,
    } = useForm<z.infer<typeof CreateGroupSchema>>({
        resolver: zodResolver(CreateGroupSchema),
        defaultValues: {
            category: "",
        },
    })

    useEffect(() => {
        const category = watch(({ category }) => {
            if (category) {
                setIsCategory(category)
            }
        })
        return () => category.unsubscribe()
    }, [watch])

    const router = useRouter()

    const { data: Intent, isPending: creatingIntent } = useQuery({
        queryKey: ["payment-intent"],
        queryFn: () => onGetStripeClientSecret(),
    })

    const { mutateAsync: createGroup, isPending } = useMutation({
        mutationFn: async (data: z.infer<typeof CreateGroupSchema>) => {
            if (!stripe || !elements || !Intent) {
                return null
            }

            const { error, paymentIntent } = await stripe.confirmCardPayment(
                Intent.secret!,
                {
                    payment_method: {
                        card: elements.getElement(
                            CardElement,
                        ) as StripeCardElement,
                    },
                },
            )

            if (error) {
                return toast("Error", {
                    description: "Oops! something went wrong, try again later",
                })
            }

            if (paymentIntent?.status === "succeeded") {
                const created = await onCreateNewGroup(userId, data)
                if (created && created.status === 200) {
                    toast("Success", {
                        description: created.message,
                    })
                    router.push(`/group/${created.data?.group[0].id}`)
                }
                if (created && created.status !== 200) {
                    reset()
                    return toast("Error", {
                        description: created.message,
                    })
                }
            }
        },
    })

    const onCreateGroup = handleSubmit(async (values) => createGroup(values))

    return {
        onCreateGroup,
        isPending,
        register,
        errors,
        isCategory,
        creatingIntent,
    }
}
