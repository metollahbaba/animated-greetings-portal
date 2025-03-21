
import { useEffect, useState, useRef } from 'react';
import { GREETINGS, type Language } from '@/lib/constants';

interface AnimatedGreetingProps {
  language: Language;
  className?: string;
}

export const AnimatedGreeting = ({ language, className = '' }: AnimatedGreetingProps) => {
  const [currentGreeting, setCurrentGreeting] = useState<string>('');
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const greetings = GREETINGS[language];

  const animateText = (text: string) => {
    setIsAnimating(true);
    setCurrentGreeting(text);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, text.length * 100 + 500);
  };

  useEffect(() => {
    // Clear any existing interval when language changes
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Get a random greeting for the initial display
    const randomIndex = Math.floor(Math.random() * greetings.length);
    animateText(greetings[randomIndex]);
    
    // Set up interval to change greeting
    intervalRef.current = setInterval(() => {
      const newIndex = Math.floor(Math.random() * greetings.length);
      animateText(greetings[newIndex]);
    }, 5000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [language, greetings]);
  
  return (
    <h1 className={`text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight reveal-container ${className}`}>
      {currentGreeting.split('').map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="letter-animation"
          style={{ '--index': index } as React.CSSProperties}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </h1>
  );
};
