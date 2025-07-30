import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GameCard } from "./GameCard";
import { ScoreDisplay } from "./ScoreDisplay";
import { AlphabetCard } from "./AlphabetCard";
import { LanguageSelector } from "./LanguageSelector";
import { GameOverDialog } from "./GameOverDialog";
import { russianAlphabet, getRandomOptions, type RussianLetter } from "@/data/russianAlphabet";
import { translations, type Language } from "@/data/translations";
import { BookOpen, Play, RotateCcw, Grid3X3 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type GameMode = 'learn' | 'quiz';

export const RussianAlphabetGame = () => {
  const [gameMode, setGameMode] = useState<GameMode>('learn');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [currentLetter, setCurrentLetter] = useState<RussianLetter>(russianAlphabet[0]);
  const [options, setOptions] = useState<string[]>([]);
  const [language, setLanguage] = useState<Language>('en');
  const [isGameOver, setIsGameOver] = useState(false);
  const { toast } = useToast();

  const MAX_QUESTIONS = 10;
  const t = translations[language];

  const generateQuestion = () => {
    const randomLetter = russianAlphabet[Math.floor(Math.random() * russianAlphabet.length)];
    const questionOptions = getRandomOptions(randomLetter.latin, 4);
    
    setCurrentLetter(randomLetter);
    setOptions(questionOptions);
    setShowResult(false);
    setSelectedAnswer("");
  };

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    const correct = answer === currentLetter.latin;
    setIsCorrect(correct);
    setShowResult(true);
    setTotalQuestions(prev => prev + 1);

    if (correct) {
      setScore(prev => prev + 1);
      setCurrentStreak(prev => prev + 1);
      toast({
        title: t.correct,
        description: `${currentLetter.cyrillic} = ${currentLetter.latin}`,
        className: "bg-game-success/10 border-game-success"
      });
    } else {
      setCurrentStreak(0);
      toast({
        title: t.notQuite,
        description: `${currentLetter.cyrillic} = ${currentLetter.latin}`,
        variant: "destructive"
      });
    }

    // Check if game should end
    if (totalQuestions + 1 >= MAX_QUESTIONS) {
      setTimeout(() => {
        setIsGameOver(true);
      }, 2500);
    } else {
      // Auto advance after 2 seconds
      setTimeout(() => {
        generateQuestion();
      }, 2500);
    }
  };

  const resetGame = () => {
    setScore(0);
    setTotalQuestions(0);
    setCurrentStreak(0);
    setCurrentQuestion(0);
    setIsGameOver(false);
    generateQuestion();
  };

  useEffect(() => {
    if (gameMode === 'quiz') {
      generateQuestion();
    }
  }, [gameMode]);

  const switchToQuiz = () => {
    setGameMode('quiz');
    resetGame();
  };

  const switchToLearn = () => {
    setGameMode('learn');
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <LanguageSelector 
              currentLanguage={language} 
              onLanguageChange={setLanguage} 
            />
          </div>
          <h1 className="text-4xl font-bold text-primary mb-2 animate-fade-in-up">
            {t.title}
          </h1>
          <p className="text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {t.subtitle}
          </p>
        </div>

        {/* Game Mode Selection */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={gameMode === 'learn' ? 'default' : 'outline'}
            onClick={switchToLearn}
            className="flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            {t.learnMode}
          </Button>
          <Button
            variant={gameMode === 'quiz' ? 'default' : 'outline'}
            onClick={switchToQuiz}
            className="flex items-center gap-2"
          >
            <Play className="w-4 h-4" />
            {t.quizMode}
          </Button>
        </div>

        {gameMode === 'learn' ? (
          /* Learn Mode - Alphabet Grid */
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Grid3X3 className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-primary">{t.browseAlphabet}</h2>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 justify-items-center">
              {russianAlphabet.map((letter, index) => (
                <AlphabetCard
                  key={letter.cyrillic}
                  cyrillic={letter.cyrillic}
                  latin={letter.latin}
                  pronunciation={letter.pronunciation}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                />
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                {t.hoverInstruction}
              </p>
              <Button onClick={switchToQuiz} variant="secondary" size="lg" className="animate-fade-in-up">
                <Play className="w-4 h-4 mr-2" />
                {t.startQuiz}
              </Button>
            </div>
          </div>
        ) : (
          /* Quiz Mode */
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <ScoreDisplay 
                score={score} 
                totalQuestions={totalQuestions} 
                currentStreak={currentStreak}
                translations={t}
              />
              <div className="text-sm text-muted-foreground">
                {MAX_QUESTIONS - totalQuestions} {t.questionsRemaining}
              </div>
            </div>
            
            <div className="mb-6">
              <GameCard
                letter={currentLetter}
                options={options}
                onAnswer={handleAnswer}
                showResult={showResult}
                isCorrect={isCorrect}
                correctAnswer={currentLetter.latin}
                disabled={showResult}
              />
            </div>

            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                onClick={resetGame}
                className="flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                {t.resetScore}
              </Button>
              <Button
                variant="outline"
                onClick={switchToLearn}
                className="flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                {t.studyAlphabet}
              </Button>
            </div>

            <GameOverDialog
              isOpen={isGameOver}
              score={score}
              totalQuestions={totalQuestions}
              onPlayAgain={resetGame}
              translations={t}
            />
          </div>
        )}
      </div>
    </div>
  );
};