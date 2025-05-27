import { onGetChannelInfo } from "@/actions/channel"
import { inGetChannelPosts } from "@/actions/groups"
import {
    HydrationBoundary,
    QueryClient,
    dehydrate,
} from "@tanstack/react-query"
import ChannelPosts from "../../_components/channel-posts"
import NewPost from "../../_components/new-post"
import { TestComponent } from "./_components"

type GroupChannelPageProps = {
    params: { channelid: string }
}

const GroupChannelPage = async ({ params }: GroupChannelPageProps) => {
    const client = new QueryClient()

    await client.prefetchQuery({
        queryKey: ["channel-info"],
        queryFn: () => onGetChannelInfo(params.channelid),
    })

    await client.prefetchQuery({
        queryKey: ["channel-posts", params.channelid],
        queryFn: () => inGetChannelPosts(params.channelid),
    })

    return (
        <HydrationBoundary state={dehydrate(client)}>
            <TestComponent channelid={params.channelid} />
            <div className="px-8 py-6 flex flex-col gap-5">
                <NewPost />
                <ChannelPosts slug={params.channelid} />
            </div>
        </HydrationBoundary>
    )
}

export default GroupChannelPage
