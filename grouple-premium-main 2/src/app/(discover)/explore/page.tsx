import { onGetExploreGroup } from "@/actions/groups"
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from "@tanstack/react-query"
import { ExplorePageContent } from "./_components/explore-content"

const ExplorePage = async () => {
    const query = new QueryClient()

    await query.prefetchQuery({
        queryKey: ["fitness"],
        queryFn: () => onGetExploreGroup("fitness", 0),
    })

    return (
        <HydrationBoundary state={dehydrate(query)}>
            <ExplorePageContent layout="SLIDER" />
        </HydrationBoundary>
    )
}

export default ExplorePage
