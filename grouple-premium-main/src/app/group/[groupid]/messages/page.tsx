import { onGetGroupInfo } from "@/actions/groups"
import {
    HydrationBoundary,
    QueryClient,
    dehydrate,
} from "@tanstack/react-query"

const GroupMessagesPage = async ({
    params,
}: {
    params: { groupid: string; userid: string }
}) => {
    const query = new QueryClient()

    await query.prefetchQuery({
        queryKey: ["group-info"],
        queryFn: () => onGetGroupInfo(params.groupid),
    })

    return (
        <HydrationBoundary state={dehydrate(query)}>
            <div className="flex flex-col w-full h-full gap-10 px-16 py-10 overflow-auto">
                <div className="flex flex-col">
                    <h3 className="text-3xl font-bold">Group Messages</h3>
                </div>
            </div>
        </HydrationBoundary>
    )
}

export default GroupMessagesPage
