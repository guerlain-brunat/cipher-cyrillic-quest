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
    <div className="flex gap-3 justify-center mb-6">
      <Card className="flex items-center gap-2 px-4 py-2 bg-gradient-card shadow-card">
        <Trophy className="w-4 h-4 text-accent" />
        <div className="text-sm">
          <span className="font-bold text-primary">{score}</span>
          <span className="text-muted-foreground">/{totalQuestions}</span>
        </div>
      </Card>
      
      <Card className="flex items-center gap-2 px-4 py-2 bg-gradient-card shadow-card">
        <Target className="w-4 h-4 text-secondary" />
        <div className="text-sm">
          <span className="font-bold text-primary">{percentage}%</span>
        </div>
      </Card>
      
      <Card className="flex items-center gap-2 px-4 py-2 bg-gradient-card shadow-card">
        <Zap className="w-4 h-4 text-game-warning" />
        <div className="text-sm">
          <span className="font-bold text-primary">{currentStreak}</span>
          <span className="text-muted-foreground"> {translations.streak.toLowerCase()}</span>
        </div>
      </Card>
    </div>
  );
};