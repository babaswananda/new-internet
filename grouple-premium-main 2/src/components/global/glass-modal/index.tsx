import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowLeft, ArrowRight } from "lucide-react"

type GlassModalProps = {
    trigger: JSX.Element
    children: React.ReactNode
    title: string
    description: string
    type?: string
    logo?: string
}

export const GlassModal = ({
    trigger,
    children,
    title,
    description,
    type,
    logo,
}: GlassModalProps) => {
    switch (type) {
        case "Integration":
            return (
                <Dialog>
                    <DialogTrigger asChild>{trigger}</DialogTrigger>
                    <DialogContent className="bg-clip-padding backdrop-filter backdrop--blur__safari backdrop-blur-3xl bg-opacity-20 bg-themeGray border-themeGray max-w-sm">
                        <div className="flex justify-center gap-3">
                            <div className="w-12 h-12 relative flex justify-center items-center bg-slate-200 text-black rounded-lg ">
                                <p className="font-bold margin-auto text-xl">
                                    G.
                                </p>
                            </div>
                            <div className="text-gray-400">
                                <ArrowLeft size={20} />
                                <ArrowRight size={20} />
                            </div>
                            <div className="w-12 h-12 relative">
                                <img
                                    src={logo}
                                    alt="Stripe"
                                    className=" object-fill w-full h-full rounded-lg"
                                />
                            </div>
                        </div>
                        <DialogHeader>
                            <DialogTitle>{title}</DialogTitle>
                            <DialogDescription>{description}</DialogDescription>
                        </DialogHeader>
                        {children}
                    </DialogContent>
                </Dialog>
            )
        case "post":
            return (
                <Dialog>
                    <DialogTrigger className="max-w-xl">
                        {trigger}
                    </DialogTrigger>
                    <DialogContent className="bg-clip-padding backdrop-filter backdrop--blur__safari backdrop-blur-3xl bg-opacity-20 bg-themeGray border-themeGray max-w-[38rem]">
                        <DialogHeader>
                            <DialogTitle>{title}</DialogTitle>
                            <DialogDescription>{description}</DialogDescription>
                        </DialogHeader>
                        {children}
                    </DialogContent>
                </Dialog>
            )
        default:
            return (
                <Dialog>
                    <DialogTrigger asChild>{trigger}</DialogTrigger>
                    <DialogContent className="bg-clip-padding backdrop-filter backdrop--blur__safari backdrop-blur-3xl bg-opacity-20 bg-themeGray border-themeGray ">
                        {children}
                    </DialogContent>
                </Dialog>
            )
    }
}
