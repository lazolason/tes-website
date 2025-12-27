import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
    href?: string;
    className?: string;
    children: React.ReactNode;
}

export default function Button({
    variant = "primary",
    size = "md",
    href,
    className,
    children,
    ...props
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center rounded-xl font-bold transition-all focus-ring disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-emerald-600 text-white shadow-xl shadow-emerald-900/20 hover:bg-emerald-700 hover:-translate-y-0.5 active:translate-y-0",
        secondary: "bg-slate-900 text-white shadow-xl shadow-slate-900/10 hover:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0",
        outline: "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300",
        ghost: "bg-transparent text-emerald-600 hover:bg-emerald-50",
    };

    const sizes = {
        sm: "px-4 py-2 text-xs",
        md: "px-6 py-3 text-sm",
        lg: "px-10 py-5 text-base",
    };

    const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
        return (
            <Link href={href} className={combinedClassName}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
}
