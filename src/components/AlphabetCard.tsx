import { useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AlphabetCardProps {
  cyrillic: string;
  latin: string;
  pronunciation: string;
  isFlipped?: boolean;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export const AlphabetCard = ({ 
  cyrillic, 
  latin, 
  pronunciation, 
  isFlipped = false, 
  onClick,
  className,
  style 
}: AlphabetCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className={cn(
        "relative w-20 h-28 sm:w-24 sm:h-32 cursor-pointer transition-all duration-300",
        "bg-gradient-card shadow-card hover:shadow-card-hover",
        "transform hover:scale-105 active:scale-95",
        "border-2 border-primary/10 hover:border-primary/30",
        isFlipped && "animate-card-flip",
        className
      )}
      style={style}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center p-1 sm:p-2">
        <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
          {cyrillic}
        </div>
        <div className={cn(
          "text-xs sm:text-sm text-muted-foreground transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-60"
        )}>
          {latin}
        </div>
        <div className={cn(
          "text-xs text-muted-foreground mt-1 transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-40"
        )}>
          /{pronunciation}/
        </div>
      </div>
    </Card>
  );
};