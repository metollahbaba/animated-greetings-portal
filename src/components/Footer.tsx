
import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 right-0 py-4 px-6 text-center text-sm text-muted-foreground backdrop-blur-md bg-background/70">
      <div className="flex items-center justify-center gap-1 animate-fade-in opacity-0" style={{ animationDelay: '1s' }}>
        <span>Made with</span>
        <Heart className="h-4 w-4 text-red-500 animate-[pulse_2s_infinite]" />
        <span>by Lovable</span>
      </div>
    </footer>
  );
};
