import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6 px-6 bg-background/90 backdrop-blur-sm">
      <div className="container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="font-display text-lg tracking-wider uppercase">Innovateiv</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#servicos" className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide">
              {t('nav.services')}
            </a>
            <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide">
              {t('nav.about')}
            </a>
            <a href="#processo" className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide">
              {t('nav.process')}
            </a>
          </div>

          {/* CTA Button & Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <Button variant="dark" size="sm" asChild>
              <a href="mailto:mussajunior401@gmail.com">{t('nav.contact')}</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher />
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="#servicos" className="text-muted-foreground hover:text-foreground transition-colors text-sm" onClick={() => setIsMenuOpen(false)}>
                {t('nav.services')}
              </a>
              <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors text-sm" onClick={() => setIsMenuOpen(false)}>
                {t('nav.about')}
              </a>
              <a href="#processo" className="text-muted-foreground hover:text-foreground transition-colors text-sm" onClick={() => setIsMenuOpen(false)}>
                {t('nav.process')}
              </a>
              <Button variant="dark" className="mt-4 w-fit" asChild>
                <a href="mailto:mussajunior401@gmail.com">{t('nav.contact')}</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
