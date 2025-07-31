import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe } from "lucide-react";
import { Language, languageNames } from "@/data/translations";

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

export const LanguageSelector = ({ currentLanguage, onLanguageChange }: LanguageSelectorProps) => {
  return (
    <Select value={currentLanguage} onValueChange={(value: Language) => onLanguageChange(value)}>
      <SelectTrigger className="w-28 sm:w-32">
        <div className="flex items-center gap-1 sm:gap-2">
          <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
          <SelectValue />
        </div>
      </SelectTrigger>
      <SelectContent>
        {Object.entries(languageNames).map(([code, name]) => (
          <SelectItem key={code} value={code}>
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};