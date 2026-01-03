import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const workTagVariants = cva(
    "rounded-full bg-emerald-500/25 font-medium text-emerald-950 dark:text-emerald-500 transition-colors",
    {
        variants: {
            size: {
                sm: "px-2.5 py-0.5 text-xs",
                md: "px-3 py-1 text-sm",
            },
            interactive: {
                true: "group-hover:bg-rose-900 group-hover:text-rose-300 dark:group-hover:text-rose-300",
                false: "",
            },
        },
        defaultVariants: {
            size: "md",
            interactive: false,
        },
    }
)

interface WorkTagProps extends VariantProps<typeof workTagVariants> {
    children: React.ReactNode
    className?: string
}

export function WorkTag({ children, size, interactive, className }: WorkTagProps) {
    return (
        <span className={cn(workTagVariants({ size, interactive }), className)}>
            {children}
        </span>
    )
}
