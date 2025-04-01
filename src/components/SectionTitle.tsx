
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cn("text-center mb-3 sm:mb-5 md:mb-6 lg:mb-8", className)}>
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      <div className="mt-2 mb-2 flex justify-center">
        <div className="h-1 w-[135px] bg-primary rounded-full"></div>
      </div>
      {subtitle && (
        <p className="text-muted-foreground max-w-xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
