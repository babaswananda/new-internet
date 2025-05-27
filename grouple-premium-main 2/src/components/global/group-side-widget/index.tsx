"use client"

import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useGroupInfo } from "@/hooks/groups"
import { truncateString } from "@/lib/utils"

export const GroupSideWidget = () => {
    const { group } = useGroupInfo()

    return (
        <Card className="border-themeGray lg:sticky lg:top-0 mt-10 lg:mt-0 bg-themeBlack rounded-xl overflow-hidden">
            <img
                src={`https://ucarecdn.com/${group.thumbnail}/`}
                alt="thumbnail"
                className="w-full aspect-video"
            />
            <div className="flex flex-col p-5 gap-y-2">
                <h2 className="font-bold text-lg">{group.name}</h2>
                <p className="text-sm text-themeTextGray">
                    {group.description && truncateString(group.description)}
                </p>
            </div>
            <Separator orientation="horizontal" />
        </Card>
    )
}
