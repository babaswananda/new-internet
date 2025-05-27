import { Message } from "@/icons"
import Link from "next/link"
import { Notification } from "./notification"
import { UserAvatar } from "./user"

type UserWidgetProps = {
    image: string
}

export const UserWidget = ({ image }: UserWidgetProps) => {
    return (
        <div className="gap-5 items-center hidden sm:flex">
            <Notification />
            <Link href={"#"}>
                <Message />
            </Link>
            <UserAvatar image={image} />
        </div>
    )
}
