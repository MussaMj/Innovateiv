import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Benefits = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      titleKey: "benefits.1.title",
      descriptionKey: "benefits.1.description",
    },
    {
      titleKey: "benefits.2.title",
      descriptionKey: "benefits.2.description",
    },
    {
      titleKey: "benefits.3.title",
      descriptionKey: "benefits.3.description",
    },
    {
      titleKey: "benefits.4.title",
      descriptionKey: "benefits.4.description",
    },
  ];

  return (
    <section id="sobre" className="py-32 px-6">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left side - Text content */}
          <motion.div 
            className="lg:sticky lg:top-32"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
              {t('benefits.subtitle')}
            </p>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.1] mb-8">
              {t('benefits.title1')}
              <br />
              <span className="text-muted-foreground">{t('benefits.title2')}</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              {t('benefits.description')}
            </p>
          </motion.div>

          {/* Right side - Benefits grid */}
          <div className="grid gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.titleKey}
                className="p-8 section-beige rounded-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              >
                <span className="text-sm text-muted-foreground font-mono mb-4 block">
                  0{index + 1}
                </span>
                <h3 className="font-display text-xl mb-3">{t(benefit.titleKey).toUpperCase()}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(benefit.descriptionKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
