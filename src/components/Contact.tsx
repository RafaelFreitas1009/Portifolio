import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rafaelfreitas1009@gmail.com',
      href: 'mailto:rafaelfreitas1009@gmail.com',
      description: 'Melhor forma de me contatar'
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '(98) 97021-3045',
      href: 'tel:+5598970213045',
      description: 'WhatsApp disponível'
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'São Luís - Maranhão',
      href: null,
      description: 'Brasil'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/RafaelFreitas1009',
      color: 'hover:text-gray-800',
      description: 'Veja meus repositórios'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rafaelfreitasdados',
      color: 'hover:text-blue-600',
      description: 'Conecte-se comigo'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              📞 Entre em Contato
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vamos conversar sobre oportunidades, colaborações ou projetos interessantes!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6 animate-slide-up">
              <Card className="shadow-portfolio">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-portfolio-primary">
                    <MessageCircle className="h-5 w-5" />
                    Informações de Contato
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="p-2 bg-portfolio-gradient rounded-lg flex-shrink-0">
                        <contact.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{contact.label}</h3>
                        {contact.href ? (
                          <a 
                            href={contact.href}
                            className="text-portfolio-primary hover:underline font-medium"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{contact.value}</p>
                        )}
                        <p className="text-sm text-muted-foreground">{contact.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="shadow-portfolio">
                <CardHeader>
                  <CardTitle className="text-portfolio-primary">
                    Redes Sociais
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="lg"
                        className="h-auto p-4 flex flex-col items-center gap-3 hover:shadow-portfolio-glow transition-all duration-300"
                        asChild
                      >
                        <a 
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-center"
                        >
                          <social.icon className="h-6 w-6" />
                          <div>
                            <div className="font-semibold">{social.label}</div>
                            <div className="text-xs text-muted-foreground">{social.description}</div>
                          </div>
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="space-y-6 animate-slide-up" style={{animationDelay: '200ms'}}>
              <Card className="shadow-portfolio bg-portfolio-gradient text-white">
                <CardHeader>
                  <CardTitle className="text-white">
                    Vamos trabalhar juntos!
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-white/90">
                    Estou sempre aberto a discussões sobre:
                  </p>
                  
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                      Projetos de Ciência de Dados
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                      Soluções de Machine Learning
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                      Desenvolvimento de Software
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                      Dashboards e Analytics
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                      Oportunidades de Carreira
                    </li>
                  </ul>

                  <div className="space-y-3 pt-4">
                    <Button 
                      size="lg" 
                      className="w-full bg-white text-portfolio-primary hover:bg-white/90"
                      asChild
                    >
                      <a href="mailto:rafaelfreitas1009@gmail.com">
                        <Mail className="mr-2 h-4 w-4" />
                        Enviar Email
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline"
                      size="lg" 
                      className="w-full border-white text-white hover:bg-white hover:text-portfolio-primary"
                      asChild
                    >
                      <a href="https://wa.me/5598970213045" target="_blank" rel="noopener noreferrer">
                        <Phone className="mr-2 h-4 w-4" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quote */}
              <Card className="shadow-portfolio">
                <CardContent className="p-6">
                  <blockquote className="text-center">
                    <p className="text-lg italic text-muted-foreground mb-4">
                      "Dados são o petróleo do século XXI, e a análise é a refinaria."
                    </p>
                    <p className="text-sm font-semibold text-portfolio-primary">
                      Vamos transformar seus dados em insights valiosos!
                    </p>
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Card className="shadow-portfolio">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Pronto para começar um projeto?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Entre em contato e vamos discutir como posso ajudar a transformar suas ideias em realidade
                  através da ciência de dados e tecnologia.
                </p>
                <Button size="lg" asChild>
                  <a href="mailto:rafaelfreitas1009@gmail.com">
                    Iniciar Conversa
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}