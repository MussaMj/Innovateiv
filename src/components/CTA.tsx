import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const CTA = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 px-6">
      <div className="container">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-8">
            {t('cta.subtitle')}
          </p>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1] mb-8">
            {t('cta.title1')}
            <br />
            <span className="text-muted-foreground">{t('cta.title2')}</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            {t('cta.description')}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button variant="dark" size="lg" className="min-w-[220px]" asChild>
              <a href="mailto:innovateiv.crft@gmail.com">
                {t('cta.button')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
