import { onGetGroupCourses } from "@/actions/courses"
import { CourseCreate } from "@/components/form/create-course"
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from "@tanstack/react-query"
import { CourseList } from "./_components/course-list"

type CoursePageProps = {
    params: {
        groupid: string
    }
}

const CoursesPage = async ({ params }: CoursePageProps) => {
    const client = new QueryClient()

    await client.prefetchQuery({
        queryKey: ["group-courses"],
        queryFn: () => onGetGroupCourses(params.groupid),
    })

    return (
        <HydrationBoundary state={dehydrate(client)}>
            <div className="container grid lg:grid-cols-2 2xl:grid-cols-3 py-10 gap-5">
                <CourseCreate groupid={params.groupid} />
                <CourseList groupid={params.groupid} />
            </div>
        </HydrationBoundary>
    )
}

export default CoursesPage
