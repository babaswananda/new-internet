import dynamic from "next/dynamic"
import { CallToAction } from "./_components/call-to-action"
import { DashboardSnippet } from "./_components/dashboard-snippet"

const PricingSection = dynamic(
    () =>
        import("./_components/pricing").then(
            (component) => component.PricingSection,
        ),
    { ssr: true },
)

const Home = () => {
    return (
        <div className="md:px-10 py-20 flex flex-col gap-36">
            <div className="">
                <CallToAction />
                <DashboardSnippet />
            </div>
            <PricingSection />
        </div>
    )
}

export default Home
