import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      number: "01",
      titleKey: "services.web.title",
      descriptionKey: "services.web.description",
    },
    {
      number: "02",
      titleKey: "services.ui.title",
      descriptionKey: "services.ui.description",
    },
    {
      number: "03",
      titleKey: "services.app.title",
      descriptionKey: "services.app.description",
    },
  ];

  return (
    <section id="servicos" className="py-32 px-6 section-offwhite">
      <div className="container">
        {/* Section header */}
        <motion.div 
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
            {t('services.subtitle')}
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.1]">
            {t('services.title1')}
            <br />
            <span className="text-muted-foreground">{t('services.title2')}</span>
          </h2>
        </motion.div>

        {/* Services list */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              className="group py-10 border-t border-border last:border-b cursor-pointer transition-colors hover:bg-background/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start gap-8">
                  <span className="text-sm text-muted-foreground font-mono">{service.number}</span>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl mb-3 group-hover:text-muted-foreground transition-colors">
                      {t(service.titleKey).toUpperCase()}
                    </h3>
                    <p className="text-muted-foreground max-w-md leading-relaxed">
                      {t(service.descriptionKey)}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
