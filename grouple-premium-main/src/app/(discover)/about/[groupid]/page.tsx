import { onAuthenticatedUser } from "@/actions/auth"
import { onGetGroupInfo } from "@/actions/groups"
import { GroupSideWidget } from "@/components/global/group-side-widget"
import {
    HydrationBoundary,
    QueryClient,
    dehydrate,
} from "@tanstack/react-query"
import { AboutGroup } from "../_components/about"

type AboutPageProps = {
    params: {
        groupid: string
    }
}

const AboutPage = async ({ params }: AboutPageProps) => {
    const query = new QueryClient()

    await query.prefetchQuery({
        queryKey: ["about-group-info"],
        queryFn: () => onGetGroupInfo(params.groupid),
    })

    const userid = await onAuthenticatedUser()

    return (
        <HydrationBoundary state={dehydrate(query)}>
            <div className="pt-36 pb-10 container grid grid-cols-1 lg:grid-cols-3 gap-x-10">
                <div className="col-span-1 lg:col-span-2">
                    <AboutGroup userid={userid.id!} groupid={params.groupid} />
                </div>
                <div className="col-span-1 relative">
                    <GroupSideWidget />
                </div>
            </div>
        </HydrationBoundary>
    )
}

export default AboutPage
