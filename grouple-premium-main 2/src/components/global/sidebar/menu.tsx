"use client"

import { Input } from "@/components/ui/input"
import { useChannelInfo } from "@/hooks/channels"
import { cn } from "@/lib/utils"
import { Trash } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { IChannels } from "."
import { IconRenderer } from "../icon-renderer"
import { IconDropDown } from "./icon-dropdown"

type SideBarMenuProps = {
    channels: IChannels[]
    optimisticChannel:
        | {
              id: string
              name: string
              icon: string
              createdAt: Date
              groupId: string | null
          }
        | undefined
    loading: boolean
}

export const SideBarMenu = ({
    channels,
    optimisticChannel,
    loading,
}: SideBarMenuProps) => {
    const pathname = usePathname()
    const currentPage = pathname.split("/").pop()
    const {
        channel: current,
        onEditChannel,
        channelRef,
        inputRef,
        variables,
        isPending,
        edit,
        triggerRef,
        onSetIcon,
        icon,
        onChannelDetele,
        deleteVariables,
    } = useChannelInfo()
    if (currentPage === "settings") {
        return <div>Settings sidebar</div>
    }

    //side menu component for channels
    //in the link tag we destructor the jsx element attributes to conditionally pass ref to elements we want
    //this eliminates the need for duplicates for different states
    //under the loop/map we add our optimistic ui
    return (
        <div className="flex flex-col">
            {channels && channels.length > 0 ? (
                <>
                    {channels.map(
                        (channel) =>
                            channel.id !== deleteVariables?.id && (
                                <Link
                                    id="channel-link"
                                    key={channel.id}
                                    className={cn(
                                        "flex justify-between hover:bg-themeGray p-2 group rounded-lg items-center",
                                        channel.id === current &&
                                            edit &&
                                            "bg-themeGray",
                                    )}
                                    href={`/group/${channel.groupId}/channel/${channel.id}`}
                                    {...(channel.name !== "general" &&
                                        channel.name !== "announcements" && {
                                            onDoubleClick: () =>
                                                onEditChannel(channel.id),
                                            ref: channelRef,
                                        })}
                                >
                                    <div className="flex gap-x-2 items-center">
                                        {channel.id === current && edit ? (
                                            <IconDropDown
                                                ref={triggerRef}
                                                page={currentPage}
                                                onSetIcon={onSetIcon}
                                                channelid={channel.id}
                                                icon={channel.icon}
                                                currentIcon={icon}
                                            />
                                        ) : (
                                            <IconRenderer
                                                icon={channel.icon}
                                                mode={
                                                    currentPage === channel.id
                                                        ? "LIGHT"
                                                        : "DARK"
                                                }
                                            />
                                        )}
                                        {channel.id === current && edit ? (
                                            <Input
                                                type="text"
                                                ref={inputRef}
                                                className="bg-transparent p-0 text-lg m-0 h-full"
                                            />
                                        ) : (
                                            <p
                                                className={cn(
                                                    "text-lg capitalize",
                                                    currentPage === channel.id
                                                        ? "text-white"
                                                        : "text-themeTextGray",
                                                )}
                                            >
                                                {isPending &&
                                                variables &&
                                                current === channel.id
                                                    ? variables.name
                                                    : channel.name}
                                            </p>
                                        )}
                                    </div>
                                    {channel.name !== "general" &&
                                        channel.name !== "announcement" && (
                                            <Trash
                                                onClick={() =>
                                                    onChannelDetele(channel.id)
                                                }
                                                className="group-hover:inline hidden content-end text-themeTextGray hover:text-gray-400"
                                                size={16}
                                            />
                                        )}
                                </Link>
                            ),
                    )}
                    {loading && optimisticChannel && (
                        <Link
                            href={`/group/${optimisticChannel.groupId}/channel/${optimisticChannel.id}`}
                            ref={channelRef}
                            onDoubleClick={() =>
                                onEditChannel(optimisticChannel.id)
                            }
                            className={cn(
                                "flex gap-x-2 hover:bg-themeGray p-2 rounded-lg items-center",
                            )}
                        >
                            <IconRenderer
                                icon={optimisticChannel.icon}
                                mode="DARK"
                            />

                            <p
                                className={cn(
                                    "text-lg capitalize",
                                    currentPage === optimisticChannel.id
                                        ? "text-white"
                                        : "text-themeTextGray",
                                )}
                            >
                                {optimisticChannel.name}
                            </p>
                        </Link>
                    )}
                </>
            ) : (
                <p>No Channels</p>
            )}
        </div>
    )
}
