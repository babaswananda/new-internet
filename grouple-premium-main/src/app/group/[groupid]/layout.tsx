import { onAuthenticatedUser } from "@/actions/auth"
import { onGetGroupChannels } from "@/actions/channel"
import { onGetGroupInfo, onGetUserGroups } from "@/actions/groups"
import { SideBar } from "@/components/global/sidebar"
import {
    HydrationBoundary,
    QueryClient,
    dehydrate,
} from "@tanstack/react-query"
import { redirect } from "next/navigation"
import React from "react"
import { Navbar } from "../_components/navbar"

type GroupLayoutProps = {
    children: React.ReactNode
    params: {
        groupid: string
    }
}

const GroupLayout = async ({ children, params }: GroupLayoutProps) => {
    const query = new QueryClient()

    //prefetch all our group data in the layout file
    const user = await onAuthenticatedUser()

    if (!user.id) redirect("/sign-in")

    await query.prefetchQuery({
        queryKey: ["group-info"],
        queryFn: () => onGetGroupInfo(params.groupid),
    })

    await query.prefetchQuery({
        queryKey: ["user-groups"],
        queryFn: () => onGetUserGroups(user.id as string),
    })

    await query.prefetchQuery({
        queryKey: ["group-channels"],
        queryFn: () => onGetGroupChannels(params.groupid),
    })

    return (
        <HydrationBoundary state={dehydrate(query)}>
            <div className="flex min-h-screen pt-5">
                <SideBar groupid={params.groupid} userid={user.id} />
                <div className="md:ml-[300px] flex flex-col ml-[70px] flex-1 bg-[#101011] rounded-tl-xl overflow-hidden border-l-[1px] border-t-[1px] border-[#28282D]">
                    <Navbar />
                    {children}
                </div>
            </div>
        </HydrationBoundary>
    )
}

export default GroupLayout
