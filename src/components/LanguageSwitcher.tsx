
import { Fragment, useState } from 'react';
import { Check, ChevronDown, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LANGUAGES, type Language } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
  className?: string;
}

export const LanguageSwitcher = ({ 
  language, 
  onLanguageChange,
  className 
}: LanguageSwitcherProps) => {
  const handleSelectLanguage = (newLang: Language) => {
    onLanguageChange(newLang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className={cn(
            "flex items-center gap-1 rounded-full px-3 transition-all duration-300 hover:bg-muted", 
            className
          )}
        >
          <Globe className="h-4 w-4" />
          <span className="text-sm font-medium capitalize">
            {LANGUAGES[language]}
          </span>
          <ChevronDown className="ml-1 h-3 w-3 opacity-70" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px] animate-scale-in">
        {Object.entries(LANGUAGES).map(([langCode, langName]) => (
          <DropdownMenuItem
            key={langCode}
            className={cn(
              "flex cursor-pointer items-center justify-between text-sm font-medium",
              language === langCode && "font-medium text-primary"
            )}
            onClick={() => handleSelectLanguage(langCode as Language)}
          >
            {langName}
            {language === langCode && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
