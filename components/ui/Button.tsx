import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  children: React.ReactNode;
};

const variantClasses: Record<NonNullable<ButtonBaseProps["variant"]>, string> = {
  primary:
    "bg-forest-700 text-cream-50 shadow-sm hover:bg-forest-800 hover:shadow-md focus-visible:bg-forest-800",
  secondary:
    "bg-transparent text-forest-800 border-2 border-forest-700 hover:bg-forest-700 hover:text-cream-50 hover:shadow-md",
  ghost: "bg-sage-100 text-forest-900 hover:bg-sage-200 hover:shadow-sm",
};

const baseClasses =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-semibold transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 active:translate-y-0";

export function Button({
  href,
  variant = "primary",
  className,
  children,
  ...rest
}: ButtonBaseProps & { href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal = href.startsWith("http");
  return (
    <Link
      href={href}
      className={cn(baseClasses, variantClasses[variant], className)}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function ButtonAsButton({
  variant = "primary",
  className,
  children,
  ...rest
}: ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(baseClasses, variantClasses[variant], "disabled:hover:translate-y-0", className)} {...rest}>
      {children}
    </button>
  );
}
