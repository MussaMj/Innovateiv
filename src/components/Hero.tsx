import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import webDevImage from "@/assets/web-development.png";
import appDevImage from "@/assets/app-development.png";
import uiUxImage from "@/assets/ui-ux-design.png";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center pt-20 pb-24 px-6">
      <div className="container">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-8">
            {t('hero.subtitle')}
          </p>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[0.95] mb-8 tracking-tight">
            {t('hero.title1')}
            <br />
            <span className="text-muted-foreground">{t('hero.title2')}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="dark" size="lg" className="min-w-[200px]" asChild>
              <a href="mailto:innovateiv.crft@gmail.com">
                {t('hero.cta.start')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px]" asChild>
              <a href="#servicos">{t('hero.cta.portfolio')}</a>
            </Button>
          </div>
        </motion.div>

        {/* Services preview with images */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { image: webDevImage, alt: "Web Development", titleKey: 'hero.card.web' },
            { image: appDevImage, alt: "App Development", titleKey: 'hero.card.app' },
            { image: uiUxImage, alt: "UI/UX Design", titleKey: 'hero.card.ui' },
          ].map((item, index) => (
            <motion.div 
              key={item.titleKey}
              className="group rounded-sm overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 bg-background">
                <p className="font-display text-lg tracking-wide">{t(item.titleKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
