"use server"

import { client } from "@/lib/prisma"
import { currentUser } from "@clerk/nextjs/server"

export const onSignUpUser = async (data: {
    firstname: string
    lastname: string
    clerkId: string
}) => {
    try {
        const createdUser = await client.user.create({
            data: {
                ...data,
                subscription: {
                    create: {},
                },
            },
        })

        if (createdUser) {
            return {
                status: 200,
                message: "User successfully created",
                id: createdUser.id,
            }
        }

        return {
            status: 400,
            message: "User could not be created! Try again",
        }
    } catch (error) {
        return {
            status: 400,
            message: "Oops! something went wrong. Try again",
        }
    }
}

export const onAuthenticatedUser = async () => {
    try {
        const clerk = await currentUser()

        if (!clerk) return { status: 404 }

        const user = await client.user.findUnique({
            where: {
                clerkId: clerk.id,
            },
            select: {
                id: true,
            },
        })

        if (user) return { status: 200, id: user.id, image: clerk.imageUrl }

        return {
            status: 404,
        }
    } catch (error) {
        return {
            status: 400,
        }
    }
}

export const onSignInUser = async (clerkId: string) => {
    try {
        const loggedInUser = await client.user.findUnique({
            where: {
                clerkId,
            },
            select: {
                id: true,
                group: {
                    select: {
                        id: true,
                    },
                },
            },
        })

        if (loggedInUser) {
            if (loggedInUser.group.length > 0) {
                return {
                    status: 207,
                    id: loggedInUser.id,
                    groupId: loggedInUser.group[0].id,
                }
            }

            return {
                status: 200,
                message: "User successfully logged in",
                id: loggedInUser.id,
            }
        }

        return {
            status: 400,
            message: "User could not be logged in! Try again",
        }
    } catch (error) {
        return {
            status: 400,
            message: "Oops! something went wrong. Try again",
        }
    }
}
