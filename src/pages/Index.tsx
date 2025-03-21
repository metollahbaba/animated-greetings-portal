
import { useState, useEffect } from 'react';
import { AnimatedGreeting } from '@/components/AnimatedGreeting';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { type Language } from '@/lib/constants';

const Index = () => {
  const [language, setLanguage] = useState<Language>('tr');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Detect browser language
    const detectLanguage = () => {
      const browserLang = navigator.language.split('-')[0];
      const supportedLanguages: Language[] = ['en', 'tr', 'es', 'fr', 'de', 'it', 'ru', 'ar', 'zh', 'ja'];
      
      if (browserLang === 'tr') {
        return 'tr';
      }
      
      return supportedLanguages.includes(browserLang as Language) 
        ? browserLang as Language 
        : 'en';
    };

    setLanguage(detectLanguage());
    
    // Add animation delay for initial load
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-hidden flex flex-col items-center justify-center relative">
      <div className="animated-bg" aria-hidden="true"></div>
      
      <Header 
        language={language} 
        onLanguageChange={setLanguage} 
      />
      
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-20 max-w-6xl mx-auto w-full">
        <div className={`text-center transition-all duration-700 ease-out transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="mb-6 text-sm font-medium tracking-wider text-primary uppercase animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            Interactive Greeting Portal
          </div>
          
          <AnimatedGreeting 
            language={language} 
            className="mb-8"
          />
          
          <div className="max-w-xl mx-auto">
            <p className="text-lg text-muted-foreground animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
              Experience the beauty of greetings in different languages
            </p>
          </div>
          
          <div className="mt-12 glass-card p-8 rounded-2xl animate-scale-in opacity-0" style={{ animationDelay: '1s' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="p-6 rounded-xl bg-background/50 border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-32 flex items-center justify-center">
                    <span className="text-5xl animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                      {['👋', '✨', '🌍'][i]}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-medium">
                    {['Personalized', 'Animated', 'Multilingual'][i]}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {[
                      'Greetings tailored to your preferences and time of day.',
                      'Beautiful animations that bring your greetings to life.',
                      'Support for multiple languages from around the world.'
                    ][i]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
