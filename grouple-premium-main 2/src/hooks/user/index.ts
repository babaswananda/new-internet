import { onAuthenticatedUser } from "@/actions/auth"
import { useEffect, useState } from "react"

export const useAuthenticatedUser = () => {
    const [user, setUser] = useState<{
        status: number
        id?: string | undefined
        image?: string | undefined
    }>({
        status: 0,
        id: undefined,
        image: undefined,
    })

    useEffect(() => {
        onAuthenticatedUser().then((resolvedUser) => {
            setUser(resolvedUser)
        })
    }, [])

    return user
}
