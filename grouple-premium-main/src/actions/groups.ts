"use server"

import { CreateGroupSchema } from "@/components/form/create-group/schema"
import { client } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { v4 as uuidv4 } from "uuid"
import { z } from "zod"

export const onGetExploreGroup = async (category: string, paginate: number) => {
    try {
        const groups = await client.group.findMany({
            where: {
                category,
            },
            take: 6,
            skip: paginate,
        })

        if (groups && groups.length > 0) {
            return { status: 200, groups }
        }

        return {
            status: 404,
            message: "No groups found for this category",
        }
    } catch (error) {
        return {
            status: 400,
            message: "Oops! something went wrong",
        }
    }
}

export const onCreateNewGroup = async (
    userId: string,
    data: z.infer<typeof CreateGroupSchema>,
) => {
    try {
        const created = await client.user.update({
            where: {
                id: userId,
            },
            data: {
                group: {
                    create: {
                        ...data,
                        channel: {
                            create: [
                                {
                                    id: uuidv4(),
                                    name: "general",
                                    icon: "general",
                                },
                                {
                                    id: uuidv4(),
                                    name: "announcements",
                                    icon: "announcement",
                                },
                            ],
                        },
                    },
                },
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

        if (created) {
            return {
                status: 200,
                data: created,
                message: "Group created successfully",
            }
        }
    } catch (error) {
        return {
            status: 400,
            message: "Oops! group creation failed, try again later",
        }
    }
}

export const onSearchGroups = async (
    mode: "GROUPS" | "POSTS",
    query: string,
    paginate?: number,
) => {
    try {
        if (mode === "GROUPS") {
            const fetchedGroups = await client.group.findMany({
                where: {
                    name: {
                        contains: query,
                        mode: "insensitive",
                    },
                },
                take: 6,
                skip: paginate || 0,
            })

            if (fetchedGroups) {
                if (fetchedGroups.length > 0) {
                    return {
                        status: 200,
                        groups: fetchedGroups,
                    }
                }

                return { status: 404 }
            }
        }
        if (mode === "POSTS") {
        }
    } catch (error) {
        return { status: "400", message: "Oops! something went wrong" }
    }
}

export const onGetUserGroups = async (id: string) => {
    try {
        const groups = await client.user.findUnique({
            where: {
                id,
            },
            select: {
                group: {
                    select: {
                        id: true,
                        name: true,
                        icon: true,
                        channel: {
                            where: {
                                name: "general",
                            },
                            select: {
                                id: true,
                            },
                        },
                    },
                },
            },
        })

        if (groups && groups.group.length > 0) {
            return { status: 200, groups: groups.group }
        }

        return {
            status: 404,
        }
    } catch (error) {
        return { status: 400 }
    }
}

export const onUpDateGroupSettings = async (
    groupid: string,
    type:
        | "IMAGE"
        | "ICON"
        | "NAME"
        | "DESCRIPTION"
        | "JSONDESCRIPTION"
        | "HTMLDESCRIPTION",
    content: string,
    path: string,
) => {
    try {
        if (type === "IMAGE") {
            await client.group.update({
                where: {
                    id: groupid,
                },
                data: {
                    thumbnail: content,
                },
            })
        }
        if (type === "ICON") {
            await client.group.update({
                where: {
                    id: groupid,
                },
                data: {
                    icon: content,
                },
            })
            console.log("uploaded image")
        }
        if (type === "DESCRIPTION") {
            await client.group.update({
                where: {
                    id: groupid,
                },
                data: {
                    description: content,
                },
            })
        }
        if (type === "NAME") {
            await client.group.update({
                where: {
                    id: groupid,
                },
                data: {
                    name: content,
                },
            })
        }
        if (type === "JSONDESCRIPTION") {
            await client.group.update({
                where: {
                    id: groupid,
                },
                data: {
                    jsonDescription: content,
                },
            })
        }
        if (type === "HTMLDESCRIPTION") {
            await client.group.update({
                where: {
                    id: groupid,
                },
                data: {
                    htmlDescription: content,
                },
            })
        }
        revalidatePath(path)
        return { status: 200 }
    } catch (error) {
        console.log(error)
        return { status: 400 }
    }
}

export const onGetGroupInfo = async (groupid: string) => {
    // console.log(groupid)
    try {
        const group = await client.group.findUnique({
            where: {
                id: groupid,
            },
            include: {
                channel: true,
            },
        })

        // console.log(group)

        if (group) return { status: 200, group }

        return { status: 404 }
    } catch (error) {
        return { status: 400 }
    }
}

export const onUpdateGroupGallery = async (
    groupid: string,
    content: string,
) => {
    try {
        const mediaLimit = await client.group.findUnique({
            where: {
                id: groupid,
            },
            select: {
                gallery: true,
            },
        })

        if (mediaLimit && mediaLimit?.gallery.length < 6) {
            await client.group.update({
                where: {
                    id: groupid,
                },
                data: {
                    gallery: {
                        push: content,
                    },
                },
            })
            revalidatePath(`/about/${groupid}`)
            return { status: 200 }
        }

        return {
            status: 400,
            message: "Looks like your gallery has the maximum media allowed",
        }
    } catch (error) {
        return { status: 400, message: "Looks like something went wrong" }
    }
}

export const onCreateNewChannel = async (
    groupid: string,
    data: {
        id: string
        name: string
        icon: string
    },
) => {
    try {
        const channel = await client.group.update({
            where: {
                id: groupid,
            },
            data: {
                channel: {
                    create: {
                        ...data,
                    },
                },
            },
            select: {
                channel: true,
            },
        })

        if (channel) {
            return { status: 200, channel: channel.channel }
        }

        return {
            status: 404,
            message: "Channel could not be created",
        }
    } catch (error) {
        return {
            status: 400,
            message: "Oops! something went wrong",
        }
    }
}

export const createNewPost = async (
    userid: string,
    content: string,
    htmlContent: string,
    channelId: string,
) => {
    try {
        const newPost = await client.post.create({
            data: {
                content,
                htmlContent,
                author: {
                    connect: {
                        id: userid,
                    },
                },
                channel: {
                    connect: {
                        id: channelId,
                    },
                },
            },
        })

        if (newPost) {
            return {
                status: 200,
                message: "Post created successfully",
            }
        }

        return {
            status: 404,
            message: "Post could not be created",
        }
    } catch (error) {
        console.log(error)
        return {
            status: 400,
            message: "Failed to create post",
        }
    }
}

export const inGetChannelPosts = async (channelId: string) => {
    try {
        const posts = await client.post.findMany({
            where: {
                channelId,
            },
            select: {
                id: true,
                htmlContent: true,
                createdAt: true,
                updatedAt: true,
                channel: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
                author: {
                    select: {
                        id: true,
                        firstname: true,
                        lastname: true,
                    },
                },
                likes: {
                    select: {
                        id: true,
                        userId: true,
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        })

        if (posts.length > 0) {
            return { status: 200, posts }
        } else {
            return { status: 200, message: "No posts found", posts: [] }
        }
    } catch (error) {
        console.error("Error fetching channel posts:", error)
        return { status: 500, message: "Internal server error" }
    }
}

export const onGetPostInfo = async (postid: string) => {
    try {
        const post = await client.post.findUnique({
            where: {
                id: postid,
            },
            select: {
                id: true,
                htmlContent: true,
                createdAt: true,
                updatedAt: true,
                channel: {
                    select: {
                        id: true,
                        name: true,
                        groupId: true,
                    },
                },
                author: {
                    select: {
                        id: true,
                        firstname: true,
                        lastname: true,
                    },
                },
            },
        })

        if (post) {
            return { status: 200, post }
        } else {
            return { status: 404, message: "Post not found" }
        }
    } catch (error) {
        console.error("Error fetching post info:", error)
        return { status: 500, message: "Internal server error" }
    }
}

export const onLikePress = async (postid: string, userid: string) => {
    try {
        const like = await client.like.findFirst({
            where: {
                postId: postid,
                userId: userid,
            },
        })

        if (like) {
            await client.like.delete({
                where: {
                    id: like.id,
                },
            })
            return { status: 200, message: "Like removed" }
        } else {
            await client.like.create({
                data: {
                    postId: postid,
                    userId: userid,
                },
            })
            return { status: 200, message: "Like added" }
        }
    } catch (error) {
        console.error("Error pressing like:", error)
        return { status: 500, message: "Internal server error" }
    }
}
