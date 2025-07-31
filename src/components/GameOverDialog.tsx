import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trophy, RotateCcw } from "lucide-react";
import { Translations } from "@/data/translations";

interface GameOverDialogProps {
  isOpen: boolean;
  score: number;
  totalQuestions: number;
  onPlayAgain: () => void;
  translations: Translations;
}

export const GameOverDialog = ({ 
  isOpen, 
  score, 
  totalQuestions, 
  onPlayAgain, 
  translations 
}: GameOverDialogProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md mx-4">
        <DialogHeader>
          <DialogTitle className="text-center flex items-center justify-center gap-2">
            <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-game-success" />
            <span className="text-lg sm:text-xl">{translations.gameOver}</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="text-center space-y-4">
          <p className="text-sm sm:text-base text-muted-foreground">
            {translations.gameOverMessage}
          </p>
          
          <div className="bg-gradient-card p-3 sm:p-4 rounded-lg">
            <div className="text-xl sm:text-2xl font-bold text-primary mb-2">
              {score}/{totalQuestions}
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              {translations.finalScore}: {percentage}%
            </div>
          </div>
          
          <Button onClick={onPlayAgain} className="w-full" size="lg">
            <RotateCcw className="w-4 h-4 mr-2" />
            {translations.playAgain}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};