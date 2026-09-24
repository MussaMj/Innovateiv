import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Header
    'nav.services': 'Serviços',
    'nav.about': 'Sobre',
    'nav.process': 'Processo',
    'nav.contact': 'Contactar',

    // Hero
    'hero.subtitle': 'Digital Studio',
    'hero.title1': 'CRIAMOS EXPERIÊNCIAS',
    'hero.title2': 'DIGITAIS COM PROPÓSITO',
    'hero.description': 'Websites e aplicações que combinam design elegante com resultados mensuráveis. Cada detalhe pensado para o seu sucesso.',
    'hero.cta.start': 'Iniciar Projeto',
    'hero.cta.portfolio': 'Ver Portfolio',
    'hero.card.web': 'WEB DEVELOPMENT',
    'hero.card.app': 'APP DEVELOPMENT',
    'hero.card.ui': 'UI/UX DESIGN',

    // Services
    'services.subtitle': 'Serviços',
    'services.title1': 'SOLUÇÕES DIGITAIS',
    'services.title2': 'COMPLETAS',
    'services.web.title': 'Web Development',
    'services.web.description': 'Sites modernos e performantes, construídos com as melhores tecnologias. Otimizados para SEO e conversão.',
    'services.ui.title': 'UI/UX Design',
    'services.ui.description': 'Interfaces elegantes e intuitivas que encantam utilizadores e comunicam a essência da sua marca.',
    'services.app.title': 'App Development',
    'services.app.description': 'Aplicações móveis nativas e híbridas com experiências fluidas e performance impecável.',

    // Benefits
    'benefits.subtitle': 'Porquê Nós',
    'benefits.title1': 'PARCEIROS NO SEU',
    'benefits.title2': 'CRESCIMENTO DIGITAL',
    'benefits.description': 'Não somos apenas desenvolvedores. Somos estrategistas digitais comprometidos com o sucesso do seu negócio.',
    'benefits.1.title': 'Foco em Resultados',
    'benefits.1.description': 'Cada projeto é orientado por métricas claras e objetivos de negócio mensuráveis.',
    'benefits.2.title': 'Design Intencional',
    'benefits.2.description': 'Cada elemento é pensado para comunicar, converter e encantar.',
    'benefits.3.title': 'Tecnologia Moderna',
    'benefits.3.description': 'Utilizamos as melhores ferramentas e práticas do mercado.',
    'benefits.4.title': 'Suporte Contínuo',
    'benefits.4.description': 'Acompanhamento dedicado antes, durante e após o lançamento.',

    // Process
    'process.subtitle': 'Processo',
    'process.title1': 'SIMPLES E',
    'process.title2': 'EFICAZ',
    'process.1.title': 'Descoberta',
    'process.1.description': 'Entendemos profundamente o seu negócio, objetivos e audiência.',
    'process.2.title': 'Estratégia',
    'process.2.description': 'Definimos a abordagem ideal para alcançar os seus objetivos.',
    'process.3.title': 'Design',
    'process.3.description': 'Criamos interfaces visuais elegantes e centradas no utilizador.',
    'process.4.title': 'Desenvolvimento',
    'process.4.description': 'Construímos com código limpo, performante e escalável.',

    // CTA
    'cta.subtitle': 'Próximo Passo',
    'cta.title1': 'VAMOS CRIAR ALGO',
    'cta.title2': 'EXTRAORDINÁRIO',
    'cta.description': 'Agende uma conversa e descubra como podemos transformar a sua visão em realidade.',
    'cta.button': 'Fale Connosco',

    // Footer
    'footer.tagline': 'Transformamos ideias em experiências digitais memoráveis.',
    'footer.location': 'MAPUTO',
    'footer.email': 'EMAIL',
    'footer.copyright': 'Innovateiv – Soluções Digitais em Moçambique.',
    'footer.terms': 'Termos & Privacidade',
  },
  en: {
    // Header
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.process': 'Process',
    'nav.contact': 'Contact',

    // Hero
    'hero.subtitle': 'Digital Studio',
    'hero.title1': 'WE CREATE DIGITAL',
    'hero.title2': 'EXPERIENCES WITH PURPOSE',
    'hero.description': 'Websites and applications that combine elegant design with measurable results. Every detail crafted for your success.',
    'hero.cta.start': 'Start Project',
    'hero.cta.portfolio': 'View Portfolio',
    'hero.card.web': 'WEB DEVELOPMENT',
    'hero.card.app': 'APP DEVELOPMENT',
    'hero.card.ui': 'UI/UX DESIGN',

    // Services
    'services.subtitle': 'Services',
    'services.title1': 'COMPLETE DIGITAL',
    'services.title2': 'SOLUTIONS',
    'services.web.title': 'Web Development',
    'services.web.description': 'Modern and high-performing websites, built with the best technologies. Optimized for SEO and conversion.',
    'services.ui.title': 'UI/UX Design',
    'services.ui.description': 'Elegant and intuitive interfaces that delight users and communicate your brand essence.',
    'services.app.title': 'App Development',
    'services.app.description': 'Native and hybrid mobile applications with fluid experiences and flawless performance.',

    // Benefits
    'benefits.subtitle': 'Why Us',
    'benefits.title1': 'PARTNERS IN YOUR',
    'benefits.title2': 'DIGITAL GROWTH',
    'benefits.description': "We're not just developers. We're digital strategists committed to your business success.",
    'benefits.1.title': 'Results Focused',
    'benefits.1.description': 'Every project is driven by clear metrics and measurable business goals.',
    'benefits.2.title': 'Intentional Design',
    'benefits.2.description': 'Every element is designed to communicate, convert, and delight.',
    'benefits.3.title': 'Modern Technology',
    'benefits.3.description': 'We use the best tools and practices in the industry.',
    'benefits.4.title': 'Continuous Support',
    'benefits.4.description': 'Dedicated support before, during, and after launch.',

    // Process
    'process.subtitle': 'Process',
    'process.title1': 'SIMPLE AND',
    'process.title2': 'EFFECTIVE',
    'process.1.title': 'Discovery',
    'process.1.description': 'We deeply understand your business, goals, and audience.',
    'process.2.title': 'Strategy',
    'process.2.description': 'We define the ideal approach to achieve your objectives.',
    'process.3.title': 'Design',
    'process.3.description': 'We create elegant, user-centered visual interfaces.',
    'process.4.title': 'Development',
    'process.4.description': 'We build with clean, performant, and scalable code.',

    // CTA
    'cta.subtitle': 'Next Step',
    'cta.title1': "LET'S CREATE SOMETHING",
    'cta.title2': 'EXTRAORDINARY',
    'cta.description': 'Schedule a conversation and discover how we can turn your vision into reality.',
    'cta.button': 'Get in Touch',

    // Footer
    'footer.tagline': 'We transform ideas into memorable digital experiences.',
    'footer.location': 'MAPUTO',
    'footer.email': 'EMAIL',
    'footer.copyright': 'Innovateiv – Digital Solutions in Mozambique.',
    'footer.terms': 'Terms & Privacy',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
