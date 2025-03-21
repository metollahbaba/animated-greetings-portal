
export type Language = 'en' | 'tr' | 'es' | 'fr' | 'de' | 'it' | 'ru' | 'ar' | 'zh' | 'ja';

export const GREETINGS: Record<Language, string[]> = {
  en: ['Hello', 'Welcome', 'Greetings', 'Hi there'],
  tr: ['Merhaba', 'Hoş geldiniz', 'Selam', 'Merhaba dostum'],
  es: ['Hola', 'Bienvenido', 'Saludos', '¿Qué tal?'],
  fr: ['Bonjour', 'Bienvenue', 'Salut', 'Enchanté'],
  de: ['Hallo', 'Willkommen', 'Grüße', 'Guten Tag'],
  it: ['Ciao', 'Benvenuto', 'Saluti', 'Buongiorno'],
  ru: ['Привет', 'Добро пожаловать', 'Здравствуйте', 'Приветствую'],
  ar: ['مرحبا', 'أهلا وسهلا', 'تحية', 'مرحبا بك'],
  zh: ['你好', '欢迎', '问候', '嗨'],
  ja: ['こんにちは', 'ようこそ', 'おはよう', 'やあ']
};

export const LANGUAGES: Record<Language, string> = {
  en: 'English',
  tr: 'Türkçe',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  it: 'Italiano',
  ru: 'Русский',
  ar: 'العربية',
  zh: '中文',
  ja: '日本語'
};
