import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Bio */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              Rafael Freitas
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Data Scientist & Machine Learning Engineer apaixonado por transformar 
              dados em insights valiosos e criar soluções inovadoras.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:text-portfolio-secondary" asChild>
                <a 
                  href="https://github.com/RafaelFreitas1009" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-portfolio-secondary" asChild>
                <a 
                  href="https://www.linkedin.com/in/rafaelfreitasdados" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-portfolio-secondary" asChild>
                <a 
                  href="mailto:rafaelfreitas1009@gmail.com"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Links Rápidos
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-white/80 hover:text-portfolio-secondary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-portfolio-secondary transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white/80 hover:text-portfolio-secondary transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-portfolio-secondary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Contato
            </h4>
            <div className="space-y-2 text-sm text-white/80">
              <p>📧 rafaelfreitas1009@gmail.com</p>
              <p>📱 (98) 97021-3045</p>
              <p>📍 São Luís - Maranhão, Brasil</p>
              <p>🌐 <a 
                href="https://www.linkedin.com/in/rafaelfreitasdados" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-portfolio-secondary transition-colors"
              >
                LinkedIn
              </a></p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {currentYear} Rafael Freitas de Paula. Todos os direitos reservados.
            </p>
            <p className="text-white/60 text-sm flex items-center gap-1">
              Feito com <Heart className="h-4 w-4 text-red-400" fill="currentColor" /> e muito ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}