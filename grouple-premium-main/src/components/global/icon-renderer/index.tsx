import {
    Home,
    HomeDuoToneWhite,
    MegaPhoneDuoToneBlack,
    MegaPhoneDuoToneWhite,
} from "@/icons"

type IconRendererProps = {
    mode: "LIGHT" | "DARK"
    icon: string
}

export const IconRenderer = ({ mode, icon }: IconRendererProps) => {
    switch (icon) {
        case "general":
            return mode === "DARK" ? <Home /> : <HomeDuoToneWhite />
        case "announcement":
            return mode === "DARK" ? (
                <MegaPhoneDuoToneBlack />
            ) : (
                <MegaPhoneDuoToneWhite />
            )
        default:
            return <></>
    }
}
