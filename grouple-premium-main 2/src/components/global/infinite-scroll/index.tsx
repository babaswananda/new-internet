"use client"

import { useInfiniteScroll } from "@/hooks/infinite-scroll"
import { Skeleton } from "../skeleton"

type InfiniteScrollObserverProps = {
    action: "GROUPS"
    children: React.ReactNode
    identifier: string
    paginate: number
    search?: boolean
}

export const InfiniteScrollObserver = ({
    action,
    children,
    identifier,
    paginate,
    search,
}: InfiniteScrollObserverProps) => {
    const { observerElement, isFetching } = useInfiniteScroll(
        action,
        identifier,
        paginate,
        search,
    )

    return (
        <>
            {children}
            <div ref={observerElement}>
                {isFetching && <Skeleton element="CARD" />}
            </div>
        </>
    )
}
