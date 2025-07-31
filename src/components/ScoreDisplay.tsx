import { Card } from "@/components/ui/card";
import { Trophy, Target, Zap } from "lucide-react";
import { Translations } from "@/data/translations";

interface ScoreDisplayProps {
  score: number;
  totalQuestions: number;
  currentStreak: number;
  translations: Translations;
}

export const ScoreDisplay = ({ score, totalQuestions, currentStreak, translations }: ScoreDisplayProps) => {
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
  
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
      <Card className="flex items-center gap-2 px-4 sm:px-5 py-3 bg-gradient-card shadow-card border-2 border-primary/10">
        <Trophy className="w-5 h-5 text-accent" />
        <div className="text-sm sm:text-base">
          <span className="font-bold text-primary text-lg">{score}</span>
          <span className="text-muted-foreground">/{totalQuestions}</span>
        </div>
      </Card>
      
      <Card className="flex items-center gap-2 px-4 sm:px-5 py-3 bg-gradient-card shadow-card border-2 border-primary/10">
        <Target className="w-5 h-5 text-secondary" />
        <div className="text-sm sm:text-base">
          <span className="font-bold text-primary text-lg">{percentage}%</span>
        </div>
      </Card>
      
      <Card className="flex items-center gap-2 px-4 sm:px-5 py-3 bg-gradient-card shadow-card border-2 border-primary/10">
        <Zap className="w-5 h-5 text-game-warning" />
        <div className="text-sm sm:text-base">
          <span className="font-bold text-primary text-lg">{currentStreak}</span>
          <span className="text-muted-foreground"> {translations.streak.toLowerCase()}</span>
        </div>
      </Card>
    </div>
  );
};