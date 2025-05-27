import IntegrationsList from "./_components/integrations-list"

const IntegrationsPage = async () => {
    const connections = {
        stripe: false,
    }

    return (
        <div className="p-8">
            <div className="flex flex-col mb-5">
                <h3 className="text-3xl font-bold">Integrations</h3>
                <p className="text-sm text-themeTextGray">
                    Connect third-party applications into Grouple
                </p>
            </div>
            <IntegrationsList connections={connections} />
        </div>
    )
}

export default IntegrationsPage
