import { Search } from "@/components/global/search"
import { UserWidget } from "@/components/global/user-widget"
import { Button } from "@/components/ui/button"
import { CheckBadge } from "@/icons"
import { currentUser } from "@clerk/nextjs/server"
import Link from "next/link"

export const Navbar = async () => {
    const user = await currentUser()
    return (
        <div className="bg-[#1A1A1D] py-2 px-7 sm:py-5 sm:px-16 flex gap-5 justify-end items-center">
            <Search
                searchType="POSTS"
                className="rounded-full border-themeGray bg-black !opacity-100 px-3"
                placeholder="Search..."
            />
            <Link href={`/group/create`}>
                <Button
                    variant="outline"
                    className="bg-themeBlack rounded-2xl flex gap-2 border-themeGray hover:bg-themeGray"
                >
                    <CheckBadge />
                    Create Group
                </Button>
            </Link>
            <UserWidget image={user?.imageUrl!} />
        </div>
    )
}
