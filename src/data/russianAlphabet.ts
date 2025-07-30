export interface RussianLetter {
  cyrillic: string;
  latin: string;
  pronunciation: string;
  category: 'vowel' | 'consonant' | 'special';
}

export const russianAlphabet: RussianLetter[] = [
  // Vowels
  { cyrillic: 'А', latin: 'A', pronunciation: 'ah', category: 'vowel' },
  { cyrillic: 'Е', latin: 'E', pronunciation: 'yeh', category: 'vowel' },
  { cyrillic: 'И', latin: 'I', pronunciation: 'ee', category: 'vowel' },
  { cyrillic: 'О', latin: 'O', pronunciation: 'oh', category: 'vowel' },
  { cyrillic: 'У', latin: 'U', pronunciation: 'oo', category: 'vowel' },
  { cyrillic: 'Ы', latin: 'Y', pronunciation: 'ih', category: 'vowel' },
  { cyrillic: 'Э', latin: 'E', pronunciation: 'eh', category: 'vowel' },
  { cyrillic: 'Ю', latin: 'Yu', pronunciation: 'yoo', category: 'vowel' },
  { cyrillic: 'Я', latin: 'Ya', pronunciation: 'yah', category: 'vowel' },
  { cyrillic: 'Ё', latin: 'Yo', pronunciation: 'yoh', category: 'vowel' },
  
  // Consonants
  { cyrillic: 'Б', latin: 'B', pronunciation: 'beh', category: 'consonant' },
  { cyrillic: 'В', latin: 'V', pronunciation: 'veh', category: 'consonant' },
  { cyrillic: 'Г', latin: 'G', pronunciation: 'geh', category: 'consonant' },
  { cyrillic: 'Д', latin: 'D', pronunciation: 'deh', category: 'consonant' },
  { cyrillic: 'Ж', latin: 'Zh', pronunciation: 'zheh', category: 'consonant' },
  { cyrillic: 'З', latin: 'Z', pronunciation: 'zeh', category: 'consonant' },
  { cyrillic: 'Й', latin: 'Y', pronunciation: 'ee kraht-ko-ye', category: 'consonant' },
  { cyrillic: 'К', latin: 'K', pronunciation: 'kah', category: 'consonant' },
  { cyrillic: 'Л', latin: 'L', pronunciation: 'ehl', category: 'consonant' },
  { cyrillic: 'М', latin: 'M', pronunciation: 'ehm', category: 'consonant' },
  { cyrillic: 'Н', latin: 'N', pronunciation: 'ehn', category: 'consonant' },
  { cyrillic: 'П', latin: 'P', pronunciation: 'peh', category: 'consonant' },
  { cyrillic: 'Р', latin: 'R', pronunciation: 'ehr', category: 'consonant' },
  { cyrillic: 'С', latin: 'S', pronunciation: 'ehs', category: 'consonant' },
  { cyrillic: 'Т', latin: 'T', pronunciation: 'teh', category: 'consonant' },
  { cyrillic: 'Ф', latin: 'F', pronunciation: 'ehf', category: 'consonant' },
  { cyrillic: 'Х', latin: 'Kh', pronunciation: 'khah', category: 'consonant' },
  { cyrillic: 'Ц', latin: 'Ts', pronunciation: 'tseh', category: 'consonant' },
  { cyrillic: 'Ч', latin: 'Ch', pronunciation: 'cheh', category: 'consonant' },
  { cyrillic: 'Ш', latin: 'Sh', pronunciation: 'shah', category: 'consonant' },
  { cyrillic: 'Щ', latin: 'Shch', pronunciation: 'shchah', category: 'consonant' },
  
  // Special characters
  { cyrillic: 'Ъ', latin: 'Hard sign', pronunciation: 'tvyor-diy znak', category: 'special' },
  { cyrillic: 'Ь', latin: 'Soft sign', pronunciation: 'myag-kiy znak', category: 'special' },
];

export const getRandomLetters = (count: number = 4): RussianLetter[] => {
  const shuffled = [...russianAlphabet].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

export const getRandomOptions = (correctAnswer: string, count: number = 4): string[] => {
  const allLatinLetters = russianAlphabet.map(letter => letter.latin);
  const otherOptions = allLatinLetters.filter(letter => letter !== correctAnswer);
  const shuffledOptions = otherOptions.sort(() => Math.random() - 0.5);
  const options = [correctAnswer, ...shuffledOptions.slice(0, count - 1)];
  return options.sort(() => Math.random() - 0.5);
};