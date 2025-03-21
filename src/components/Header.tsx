
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { cn } from '@/lib/utils';
import { type Language } from '@/lib/constants';

interface HeaderProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
  className?: string;
}

export const Header = ({ language, onLanguageChange, className }: HeaderProps) => {
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-background/70",
      className
    )}>
      <div className="flex items-center">
        <span className="text-xl font-display font-semibold animate-slide-down opacity-0" style={{ animationDelay: '0.2s' }}>
          Greetings
        </span>
      </div>
      <div className="flex items-center gap-2">
        <LanguageSwitcher 
          language={language} 
          onLanguageChange={onLanguageChange} 
          className="animate-slide-down opacity-0"
          style={{ animationDelay: '0.3s' }}
        />
        <ThemeToggle className="animate-slide-down opacity-0" style={{ animationDelay: '0.4s' }} />
      </div>
    </header>
  );
};
