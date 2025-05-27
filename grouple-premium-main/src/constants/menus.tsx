import { CreditCard, Explore, Home } from "@/icons"

export type MenuProps = {
    id: number
    label: string
    icon: JSX.Element
    path: string
    section?: boolean
}

export const LANDING_PAGE_MENU: MenuProps[] = [
    {
        id: 0,
        label: "Home",
        icon: <Home />,
        path: "/",
        section: true,
    },
    {
        id: 1,
        label: "Pricing",
        icon: <CreditCard />,
        path: "#pricing",
        section: true,
    },
    {
        id: 1,
        label: "Explore",
        icon: <Explore />,
        path: "/explore",
    },
]

export const SIDEBAR_MENU: MenuProps[] = [
    {
        id: 0,
        label: "General",
        icon: <></>,
        path: "/",
    },
]

export const SIDEBAR_SETTINGS_MENU: MenuProps[] = [
    {
        id: 0,
        label: "General",
        icon: <></>,
        path: "/",
    },
    {
        id: 1,
        label: "Subscriptions",
        icon: <></>,
        path: "/subscriptions",
    },
    {
        id: 2,
        label: "Discovery",
        icon: <></>,
        path: "/discovery",
    },
]
