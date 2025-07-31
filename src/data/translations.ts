export type Language = 'en' | 'es' | 'fr' | 'de' | 'pt' | 'ru';

export interface Translations {
  title: string;
  subtitle: string;
  learnMode: string;
  quizMode: string;
  browseAlphabet: string;
  hoverInstruction: string;
  startQuiz: string;
  resetScore: string;
  studyAlphabet: string;
  score: string;
  streak: string;
  question: string;
  correct: string;
  notQuite: string;
  gameOver: string;
  gameOverMessage: string;
  finalScore: string;
  playAgain: string;
  questionsRemaining: string;
  latinEquivalentQuestion: string;
  correctAnswer: string;
  incorrectAnswer: string;
  pronounced: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    title: "Russian Alphabet Learning",
    subtitle: "Master the Cyrillic alphabet with interactive games",
    learnMode: "Learn Mode",
    quizMode: "Quiz Mode",
    browseAlphabet: "Browse the Alphabet",
    hoverInstruction: "Hover over each card to see the pronunciation",
    startQuiz: "Start Quiz",
    resetScore: "Reset Score",
    studyAlphabet: "Study Alphabet",
    score: "Score",
    streak: "Streak",
    question: "Question",
    correct: "Correct! 🎉",
    notQuite: "Not quite right",
    gameOver: "Game Over!",
    gameOverMessage: "You completed 10 questions! Well done!",
    finalScore: "Final Score",
    playAgain: "Play Again",
    questionsRemaining: "questions remaining",
    latinEquivalentQuestion: "What is the English letter?",
    correctAnswer: "Correct!",
    incorrectAnswer: "Incorrect.",
    pronounced: "Pronounced:"
  },
  es: {
    title: "Aprendizaje del Alfabeto Ruso",
    subtitle: "Domina el alfabeto cirílico con juegos interactivos",
    learnMode: "Modo Aprender",
    quizMode: "Modo Quiz",
    browseAlphabet: "Explorar el Alfabeto",
    hoverInstruction: "Pasa el cursor sobre cada carta para ver la pronunciación",
    startQuiz: "Comenzar Quiz",
    resetScore: "Reiniciar Puntuación",
    studyAlphabet: "Estudiar Alfabeto",
    score: "Puntuación",
    streak: "Racha",
    question: "Pregunta",
    correct: "¡Correcto! 🎉",
    notQuite: "No del todo correcto",
    gameOver: "¡Juego Terminado!",
    gameOverMessage: "¡Completaste 10 preguntas! ¡Bien hecho!",
    finalScore: "Puntuación Final",
    playAgain: "Jugar de Nuevo",
    questionsRemaining: "preguntas restantes",
    latinEquivalentQuestion: "¿Cuál es la letra en español?",
    correctAnswer: "¡Correcto!",
    incorrectAnswer: "Incorrecto.",
    pronounced: "Pronunciado:"
  },
  fr: {
    title: "Apprentissage de l'Alphabet Russe",
    subtitle: "Maîtrisez l'alphabet cyrillique avec des jeux interactifs",
    learnMode: "Mode Apprentissage",
    quizMode: "Mode Quiz",
    browseAlphabet: "Parcourir l'Alphabet",
    hoverInstruction: "Survolez chaque carte pour voir la prononciation",
    startQuiz: "Commencer le Quiz",
    resetScore: "Réinitialiser le Score",
    studyAlphabet: "Étudier l'Alphabet",
    score: "Score",
    streak: "Série",
    question: "Question",
    correct: "Correct ! 🎉",
    notQuite: "Pas tout à fait",
    gameOver: "Jeu Terminé !",
    gameOverMessage: "Vous avez terminé 10 questions ! Bien joué !",
    finalScore: "Score Final",
    playAgain: "Rejouer",
    questionsRemaining: "questions restantes",
    latinEquivalentQuestion: "Quelle est la lettre en français ?",
    correctAnswer: "Correct !",
    incorrectAnswer: "Incorrect.",
    pronounced: "Prononcé :"
  },
  de: {
    title: "Russisches Alphabet Lernen",
    subtitle: "Meistere das kyrillische Alphabet mit interaktiven Spielen",
    learnMode: "Lernmodus",
    quizMode: "Quiz-Modus",
    browseAlphabet: "Alphabet Durchsuchen",
    hoverInstruction: "Bewege die Maus über jede Karte, um die Aussprache zu sehen",
    startQuiz: "Quiz Starten",
    resetScore: "Punkte Zurücksetzen",
    studyAlphabet: "Alphabet Studieren",
    score: "Punkte",
    streak: "Serie",
    question: "Frage",
    correct: "Richtig! 🎉",
    notQuite: "Nicht ganz richtig",
    gameOver: "Spiel Beendet!",
    gameOverMessage: "Du hast 10 Fragen abgeschlossen! Gut gemacht!",
    finalScore: "Endpunktzahl",
    playAgain: "Nochmal Spielen",
    questionsRemaining: "Fragen übrig",
    latinEquivalentQuestion: "Was ist der deutsche Buchstabe?",
    correctAnswer: "Richtig!",
    incorrectAnswer: "Falsch.",
    pronounced: "Ausgesprochen:"
  },
  pt: {
    title: "Aprendizado do Alfabeto Russo",
    subtitle: "Domine o alfabeto cirílico com jogos interativos",
    learnMode: "Modo Aprender",
    quizMode: "Modo Quiz",
    browseAlphabet: "Navegar pelo Alfabeto",
    hoverInstruction: "Passe o mouse sobre cada carta para ver a pronúncia",
    startQuiz: "Iniciar Quiz",
    resetScore: "Resetar Pontuação",
    studyAlphabet: "Estudar Alfabeto",
    score: "Pontuação",
    streak: "Sequência",
    question: "Pergunta",
    correct: "Correto! 🎉",
    notQuite: "Não muito certo",
    gameOver: "Jogo Acabou!",
    gameOverMessage: "Você completou 10 perguntas! Muito bem!",
    finalScore: "Pontuação Final",
    playAgain: "Jogar Novamente",
    questionsRemaining: "perguntas restantes",
    latinEquivalentQuestion: "Qual é a letra em português?",
    correctAnswer: "Correto!",
    incorrectAnswer: "Incorreto.",
    pronounced: "Pronunciado:"
  },
  ru: {
    title: "Изучение Русского Алфавита",
    subtitle: "Освойте кириллицу с интерактивными играми",
    learnMode: "Режим Обучения",
    quizMode: "Режим Викторины",
    browseAlphabet: "Просмотр Алфавита",
    hoverInstruction: "Наведите курсор на каждую карточку, чтобы увидеть произношение",
    startQuiz: "Начать Викторину",
    resetScore: "Сбросить Счёт",
    studyAlphabet: "Изучать Алфавит",
    score: "Счёт",
    streak: "Серия",
    question: "Вопрос",
    correct: "Правильно! 🎉",
    notQuite: "Не совсем верно",
    gameOver: "Игра Окончена!",
    gameOverMessage: "Вы ответили на 10 вопросов! Отлично!",
    finalScore: "Финальный Счёт",
    playAgain: "Играть Снова",
    questionsRemaining: "вопросов осталось",
    latinEquivalentQuestion: "Какая буква на английском?",
    correctAnswer: "Правильно!",
    incorrectAnswer: "Неправильно.",
    pronounced: "Произносится:"
  }
};

export const languageNames: Record<Language, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português',
  ru: 'Русский'
};