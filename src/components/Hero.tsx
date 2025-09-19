import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';
import rafaelProfile from '@/assets/rafael-profile.jpg';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-portfolio-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary/20 via-transparent to-portfolio-secondary/20" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-portfolio-secondary/20 rounded-full animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-portfolio-primary/20 rounded-full animate-float" style={{animationDelay: '2s'}} />
      <div className="absolute top-1/2 left-5 w-16 h-16 bg-portfolio-secondary/30 rounded-full animate-float" style={{animationDelay: '4s'}} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                Olá! 👋
                <br />
                Eu sou{' '}
                <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Rafael Freitas
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/90 font-medium">
                Data Scientist & Machine Learning Engineer
              </p>
              
              <p className="text-lg text-white/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Especialista em ciência de dados, inteligência artificial e engenharia de software.
                Apaixonado por transformar dados em insights valiosos e criar soluções inovadoras
                com machine learning e analytics.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
                <Button
                  onClick={() => onNavigate('projects')}
                  size="lg"
                  className="bg-white text-portfolio-primary hover:bg-white/90 shadow-portfolio-glow transition-all duration-300 hover:scale-105"
                >
                  Ver Projetos
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-portfolio-primary transition-all duration-300"
                  asChild
                >
                  <a href="mailto:rafaelfreitas1009@gmail.com">
                    <Download className="mr-2 h-4 w-4" />
                    Contato
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-slide-up">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-portfolio-glow ring-4 ring-white/20">
                <img
                  src={rafaelProfile}
                  alt="Rafael Freitas - Data Scientist e Machine Learning Engineer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Decorative Ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-white/30 animate-spin" style={{animationDuration: '20s'}} />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => onNavigate('about')}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}