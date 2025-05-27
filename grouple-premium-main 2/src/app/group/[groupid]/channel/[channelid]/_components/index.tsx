"use client"

import { useChannelPage } from "@/hooks/channels"

type TestComponentProps = {
    channelid: string
}

export const TestComponent = ({ channelid }: TestComponentProps) => {
    const { data, isError } = useChannelPage(channelid)

    if (isError) {
        return <div>Refetching</div>
    }

    return <div>posts: {channelid}</div>
}
