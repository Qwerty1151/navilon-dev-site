import React from 'react';
import { Code, Gamepad2, Brain, Settings, ArrowRight, Zap } from './ui/icons';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { useTranslation } from '../hooks/useTranslation';

interface ServicesSectionProps {
  onPageChange: (page: string) => void;
}

export function ServicesSection({ onPageChange }: ServicesSectionProps) {
  const { t } = useTranslation();

  const services = [
    {
      icon: Code,
      title: t.services.softwareDev.title,
      description: t.services.softwareDev.description,
      gradient: 'from-blue-500 to-cyan-400',
      features: ['Web Applications', 'Mobile Apps', 'Enterprise Solutions']
    },
    {
      icon: Gamepad2,
      title: t.services.gameDev.title,
      description: t.services.gameDev.description,
      gradient: 'from-purple-500 to-pink-400',
      features: ['PC Games', 'Mobile Games', 'AR/VR Experiences']
    },
    {
      icon: Settings,
      title: t.services.itConsulting.title,
      description: t.services.itConsulting.description,
      gradient: 'from-green-500 to-teal-400',
      features: ['Digital Strategy', 'Process Optimization', 'Tech Audits']
    },
    {
      icon: Brain,
      title: t.services.aiSolutions.title,
      description: t.services.aiSolutions.description,
      gradient: 'from-orange-500 to-red-400',
      features: ['Machine Learning', 'Automation', 'AI Integration']
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-deep-blue to-dark-blue relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6">
            <Zap className="w-4 h-4" />
            Our Expertise
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
            {t.services.title}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group bg-gradient-card border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:neon-glow cursor-pointer overflow-hidden"
            >
              <CardHeader className="relative">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <CardTitle className="text-2xl text-white group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="ghost" 
                  className="text-primary hover:text-white hover:bg-primary group p-0 h-auto font-semibold"
                  onClick={() => onPageChange('services')}
                >
                  {t.common.learnMore}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-deep-blue font-semibold px-8 py-4 text-lg rounded-lg neon-glow"
            onClick={() => onPageChange('services')}
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}