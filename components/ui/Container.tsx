import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
  as: Component = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) {
  return <Component className={cn("content-container", className)}>{children}</Component>;
}
