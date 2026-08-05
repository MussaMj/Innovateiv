import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="py-20 px-6 section-offwhite">
      <div className="container">
        {/* Main content - centered */}
        <div className="text-center mb-16">
          <h3 className="font-display text-3xl md:text-4xl tracking-wide mb-4">
            INNOVATEIV
          </h3>
          <p className="text-muted-foreground">
            {t('footer.tagline')}
          </p>
        </div>

        {/* Contact info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-20 mb-16">
          <div className="text-center">
            <p className="text-xs tracking-widest text-muted-foreground mb-2">{t('footer.location')}</p>
            <p className="text-lg">+258 84 512 0633</p>
          </div>
          <div className="text-center">
            <p className="text-xs tracking-widest text-muted-foreground mb-2">{t('footer.email')}</p>
            <p className="text-lg">mussajunior401@gmail.com</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} {t('footer.copyright')}
          </p>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
