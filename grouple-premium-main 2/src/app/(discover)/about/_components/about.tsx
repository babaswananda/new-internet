"use client"

import { Loader } from "@/components/global/loader"
import BlockTextEditor from "@/components/global/rich-text-editor"
import { Button } from "@/components/ui/button"
import { useGroupAbout, useGroupInfo } from "@/hooks/groups"
import { MediaGallery } from "./gallery"

type AboutGroupProps = {
    userid: string
    groupid: string
}

export const AboutGroup = ({ userid, groupid }: AboutGroupProps) => {
    const { group } = useGroupInfo()
    const {
        setJsonDescription,
        setOnDescription,
        onDescription,
        onJsonDescription,
        errors,
        onEditDescription,
        editor,
        activeMedia,
        onSetActiveMedia,
        onUpdateDescription,
        isPending,
        setOnHtmlDescription,
    } = useGroupAbout(
        group.description,
        group.jsonDescription,
        group.htmlDescription,
        group.gallery[0],
        groupid,
    )

    return (
        <div className="flex flex-col gap-y-10">
            <div>
                <h2 className="font-bold text-[56px] leading-none md:leading-normal">
                    {group.name}
                </h2>
                <p className="text-themeTextGray leading-none">
                    {group.description}
                </p>
            </div>
            {group.gallery.length > 0 && (
                <div className="relative rounded-xl">
                    <div className="img--overlay absolute h-2/6 bottom-0 w-full z-50" />
                    {activeMedia?.type === "IMAGE" ? (
                        <img
                            src={`https://ucarecdn.com/${activeMedia.url}/`}
                            alt="group-img"
                            className="w-full aspect-video z-20 rounded-t-xl"
                        />
                    ) : activeMedia?.type === "LOOM" ? (
                        <div className="w-full aspect-video">
                            <iframe
                                src={activeMedia.url}
                                allowFullScreen
                                className="absolute outline-none border-0 top-0 left-0 w-full h-full rounded-t-xl"
                            ></iframe>
                        </div>
                    ) : (
                        activeMedia?.type === "YOUTUBE" && (
                            <div className="w-full aspect-video relative">
                                <iframe
                                    className="w-full absolute top-0 left-0 h-full rounded-xl"
                                    src={activeMedia.url}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )
                    )}
                </div>
            )}
            <MediaGallery
                gallery={group.gallery}
                groupid={groupid}
                onActive={onSetActiveMedia}
            />
            <form
                {...(userid === group.userId && {
                    ref: editor,
                })}
                onSubmit={onUpdateDescription}
                className="mt-5 flex flex-col"
            >
                <BlockTextEditor
                    onEdit={onEditDescription}
                    max={10000}
                    inline
                    min={100}
                    disabled={userid === group.userId ? false : true}
                    name="jsondescription"
                    errors={errors}
                    setContent={setJsonDescription}
                    content={onJsonDescription}
                    htmlContent={group.htmlDescription as string | undefined}
                    setHtmlContent={setOnHtmlDescription}
                    textContent={onDescription}
                    setTextContent={setOnDescription}
                />
                {userid === group.userId && onEditDescription && (
                    <Button
                        className="self-end bg-themeBlack border-themeGray px-10"
                        variant={"outline"}
                        disabled={isPending}
                        type="submit"
                    >
                        <Loader loading={isPending}>Update</Loader>
                    </Button>
                )}
            </form>
        </div>
    )
}
