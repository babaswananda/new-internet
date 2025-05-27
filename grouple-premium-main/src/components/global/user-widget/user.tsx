"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Logout } from "@/icons"
import { useClerk } from "@clerk/nextjs"
import { DropDown } from "../drop-down"

type UserWidgetProps = {
    image: string
}

export const UserAvatar = ({ image }: UserWidgetProps) => {
    const { signOut } = useClerk()
    return (
        <DropDown
            title="Account"
            trigger={
                <Avatar className="cursor-pointer">
                    <AvatarImage src={image} alt="user" />
                    <AvatarFallback>U</AvatarFallback>
                </Avatar>
            }
        >
            <Button
                onClick={() => signOut({ redirectUrl: "/" })}
                variant="ghost"
                className="flex gap-x-3 px-2 justify-start w-full"
            >
                <Logout />
                Logout
            </Button>
        </DropDown>
    )
}
