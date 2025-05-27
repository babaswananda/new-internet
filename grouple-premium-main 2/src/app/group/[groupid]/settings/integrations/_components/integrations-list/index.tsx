"use client"
import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { INTEGRATION_LIST_ITEMS } from "@/constants/integrations"
import IntegrationTrigger from "../integration-trigger"

type Props = {
    connections: {
        stripe: boolean
    }
}

const IntegrationsList = ({ connections }: Props) => {
    return (
        <div className="flex-1 h-0 grid grid-cols-1 content-start lg:grid-cols-3  gap-3">
            {INTEGRATION_LIST_ITEMS.map((item) => (
                <Card
                    key={item.id}
                    className=" bg-themeBlack border border-themeGray rounded-xl"
                >
                    <CardContent className="flex flex-col p-5 gap-2">
                        <div className="flex w-full justify-between items-start gap-x-20">
                            <div className="">
                                <div className="w-12 h-12 relative mb-1">
                                    <img
                                        src={item.logo}
                                        alt="Logo"
                                        className=" object-fill w-full h-full rounded-lg"
                                    />
                                </div>
                                <h2 className="font-bold capitalize">
                                    {item.name}
                                </h2>
                            </div>
                            <IntegrationTrigger
                                connections={connections}
                                title={item.title}
                                descrioption={item.modalDescription}
                                logo={item.logo}
                                name={item.name}
                            />
                        </div>
                        <CardDescription>{item.description}</CardDescription>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default IntegrationsList
