import { cn } from "@/lib/utils"

type BackdropGradientProps = {
    children: React.ReactNode
    className?: string
    container?: string
}

export const BackdropGradient = ({
    children,
    className,
    container,
}: BackdropGradientProps) => {
    return (
        <div className={cn("relative w-full flex flex-col", container)}>
            <div
                className={cn(
                    "absolute rounded-[50%] radial--blur mx-10",
                    className,
                )}
            />
            {children}
        </div>
    )
}
