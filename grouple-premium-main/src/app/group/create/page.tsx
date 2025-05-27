import { onAuthenticatedUser } from "@/actions/auth"
import { CreateGroup } from "@/components/form/create-group"
import { redirect } from "next/navigation"

const GroupCreatePage = async () => {
    const user = await onAuthenticatedUser()

    if (!user || !user.id) redirect("/sign-in")
    return (
        <>
            <div className="px-7 flex flex-col">
                <h5 className="font-bold text-base text-themeTextWhite">
                    Payment Method
                </h5>
                <p className="text-themeTextGray leading-tight">
                    Free for 14 days, then $98/month. Cancel anytime.All
                    features. Unlimited everything. No hidden fees.
                </p>
            </div>
            <CreateGroup userId={user.id} />
        </>
    )
}

export default GroupCreatePage
