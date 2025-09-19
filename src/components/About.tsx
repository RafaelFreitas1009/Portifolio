import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Code, Database, BarChart3 } from 'lucide-react';

export default function About() {
  const skills = {
    languages: ['Python', 'SQL', 'JavaScript', 'TypeScript'],
    frameworks: ['Flask', 'FastAPI', 'Node.js', 'React'],
    tools: ['VSCode', 'Jupyter', 'GitHub', 'Power BI'],
    dataScience: ['Machine Learning', 'Deep Learning', 'Data Analysis', 'Statistical Modeling']
  };

  const highlights = [
    {
      icon: Brain,
      title: 'Inteligência Artificial',
      description: 'Desenvolvimento de modelos de ML e soluções de IA para problemas complexos'
    },
    {
      icon: Database,
      title: 'Ciência de Dados',
      description: 'Análise avançada de dados, descoberta de padrões e insights estratégicos'
    },
    {
      icon: Code,
      title: 'Engenharia de Software',
      description: 'Desenvolvimento de aplicações robustas e escaláveis com foco em qualidade'
    },
    {
      icon: BarChart3,
      title: 'Analytics & BI',
      description: 'Criação de dashboards e relatórios para tomada de decisões baseadas em dados'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Sobre Mim
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Profissional dedicado à transformação digital através da ciência de dados e inteligência artificial
            </p>
          </div>

          {/* Bio */}
          <div className="mb-16 animate-slide-up">
            <Card className="shadow-portfolio">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  🎓 Sou um <strong>Data Scientist e Machine Learning Engineer</strong> com paixão por descobrir 
                  insights valiosos em dados complexos e criar soluções inovadoras que impactam positivamente 
                  os negócios.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  🧠 Tenho interesse especial em <strong>ciência de dados, inteligência artificial, 
                  engenharia de software e analytics</strong>. Atualmente, estou aprofundando meus conhecimentos 
                  em machine learning e inteligência artificial.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  🤝 Estou sempre em busca de colaborações em <strong>soluções de analytics e projetos de IA</strong> 
                  que possam gerar valor real para organizações e sociedade.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {highlights.map((item, index) => (
              <Card key={index} className="shadow-portfolio hover:shadow-portfolio-glow transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-portfolio-gradient rounded-lg">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills */}
          <div className="space-y-8 animate-slide-up">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              🚀 Tecnologias & Ferramentas
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-portfolio">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    💻 Linguagens
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-portfolio-primary/10 text-portfolio-primary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-portfolio">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    🚀 Frameworks
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-portfolio-secondary/10 text-portfolio-primary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-portfolio">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    🛠️ Ferramentas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-muted text-foreground">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-portfolio">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    🧠 Data Science
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.dataScience.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-portfolio-primary/10 text-portfolio-primary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}