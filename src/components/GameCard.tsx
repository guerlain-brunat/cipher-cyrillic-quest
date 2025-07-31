import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckCircle, XCircle } from "lucide-react";
import { Translations } from "@/data/translations";

interface GameCardProps {
  letter: {
    cyrillic: string;
    latin: string;
    pronunciation: string;
  };
  options: string[];
  onAnswer: (answer: string) => void;
  showResult?: boolean;
  isCorrect?: boolean;
  correctAnswer?: string;
  disabled?: boolean;
  translations: Translations;
}

export const GameCard = ({ 
  letter, 
  options, 
  onAnswer, 
  showResult = false, 
  isCorrect, 
  correctAnswer,
  disabled = false,
  translations
}: GameCardProps) => {
  return (
    <Card className="w-full max-w-md mx-auto p-4 sm:p-6 bg-gradient-card shadow-card">
      <div className="text-center mb-4 sm:mb-6">
        <div className="text-4xl sm:text-6xl font-bold text-primary mb-2 animate-fade-in-up">
          {letter.cyrillic}
        </div>
        <p className="text-sm sm:text-base text-muted-foreground px-2">
          {translations.latinEquivalentQuestion}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {options.map((option, index) => {
          const isThisCorrect = option === correctAnswer;
          const isThisSelected = showResult && (isThisCorrect || (!isCorrect && option === correctAnswer));
          
          return (
            <Button
              key={index}
              variant={
                showResult && isThisCorrect 
                  ? "success"
                  : showResult && !isCorrect && option !== correctAnswer
                  ? "error"
                  : "game"
              }
              className={cn(
                "h-12 sm:h-14 text-base sm:text-lg font-medium",
                showResult && "pointer-events-none",
                !showResult && "hover:animate-pulse active:scale-95"
              )}
              onClick={() => !disabled && onAnswer(option)}
              disabled={disabled}
            >
              <span className="flex items-center gap-2">
                {option}
                {showResult && isThisCorrect && <CheckCircle className="w-4 h-4" />}
                {showResult && !isCorrect && option !== correctAnswer && <XCircle className="w-4 h-4" />}
              </span>
            </Button>
          );
        })}
      </div>

      {showResult && (
        <div className={cn(
          "mt-4 p-3 rounded-lg text-center text-xs sm:text-sm",
          isCorrect 
            ? "bg-game-success/10 text-game-success border border-game-success/20" 
            : "bg-game-error/10 text-game-error border border-game-error/20"
        )}>
          {isCorrect ? (
            <span className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4" />
              {translations.correctAnswer} "{letter.cyrillic}" = "{letter.latin}"
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <XCircle className="w-4 h-4" />
              {translations.incorrectAnswer} "{letter.cyrillic}" = "{letter.latin}"
            </span>
          )}
          <div className="text-xs mt-1 opacity-75">
            {translations.pronounced} /{letter.pronunciation}/
          </div>
        </div>
      )}
    </Card>
  );
};