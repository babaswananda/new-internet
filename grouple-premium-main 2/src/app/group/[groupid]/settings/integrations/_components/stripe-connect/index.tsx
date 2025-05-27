"use client"
import { Loader } from "@/components/global/loader"
import { Button } from "@/components/ui/button"

type StripeConnectProps = {
    connected: boolean
}

export const StripeConnect = ({ connected }: StripeConnectProps) => {
    return (
        <Button disabled={connected}>
            <Loader loading={false}>
                {connected ? "Connected" : "Connect to stripe"}
            </Loader>
        </Button>
    )
}
