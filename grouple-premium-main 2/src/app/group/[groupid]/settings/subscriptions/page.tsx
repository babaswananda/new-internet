import SelectSubscription from "./_components/select-subscription"

const page = () => {
    return (
        <div className="p-8">
            <div className="flex flex-col gap-2">
                <h3 className="text-3xl font-bold">Group Subscriptions</h3>
                <p className="text-sm text-themeTextGray">
                    Adjust your group Subscriptions here.
                </p>
            </div>
            <SelectSubscription />
        </div>
    )
}

export default page
