import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Process = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: "01",
      titleKey: "process.1.title",
      descriptionKey: "process.1.description",
    },
    {
      number: "02",
      titleKey: "process.2.title",
      descriptionKey: "process.2.description",
    },
    {
      number: "03",
      titleKey: "process.3.title",
      descriptionKey: "process.3.description",
    },
    {
      number: "04",
      titleKey: "process.4.title",
      descriptionKey: "process.4.description",
    },
  ];

  return (
    <section id="processo" className="py-32 px-6 section-beige">
      <div className="container">
        <motion.div 
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
            {t('process.subtitle')}
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.1]">
            {t('process.title1')}
            <br />
            <span className="text-muted-foreground">{t('process.title2')}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={step.number} 
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="mb-6 pb-6 border-b border-border">
                <span className="font-display text-5xl text-muted-foreground/30 group-hover:text-foreground transition-colors duration-500">
                  {step.number}
                </span>
              </div>
              <h3 className="font-display text-xl mb-3">{t(step.titleKey).toUpperCase()}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {t(step.descriptionKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
