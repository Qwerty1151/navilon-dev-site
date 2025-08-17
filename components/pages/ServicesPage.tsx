import React, { useState } from 'react';
import { Code, Gamepad2, Brain, Settings, Cloud, Database, ArrowRight, Check, Star } from '../ui/icons';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { useTranslation } from '../../hooks/useTranslation';

interface ServicesPageProps {
  onPageChange: (page: string) => void;
}

export function ServicesPage({ onPageChange }: ServicesPageProps) {
  const { t } = useTranslation();

  const services = [
    {
      id: 'software',
      icon: Code,
      title: t.services.softwareDev.title,
      description: t.services.softwareDev.description,
      gradient: 'from-blue-500 to-cyan-400',
      features: [
        'Custom Web Applications',
        'Enterprise Software Solutions',
        'Mobile App Development (iOS/Android)',
        'Progressive Web Apps (PWA)',
        'E-commerce Platforms',
        'API Development & Integration',
        'Legacy System Modernization',
        'Cloud-Native Applications'
      ],
      technologies: ['React', 'Node.js', 'Python', 'Java', 'TypeScript', 'GraphQL', 'Docker', 'Kubernetes'],
      pricing: 'Starting from $5,000',
      timeline: '2-6 months',
      caseStudy: 'Built a fintech platform processing $10M+ transactions daily'
    },
    {
      id: 'games',
      icon: Gamepad2,
      title: t.services.gameDev.title,
      description: t.services.gameDev.description,
      gradient: 'from-purple-500 to-pink-400',
      features: [
        'PC Game Development',
        'Mobile Game Development',
        'AR/VR Game Experiences',
        'Multiplayer Game Systems',
        'Game Engine Development',
        '2D/3D Art & Animation',
        'Game Analytics Integration',
        'Cross-Platform Deployment'
      ],
      technologies: ['Unity', 'Unreal Engine', 'C#', 'C++', 'Blender', 'WebGL', 'Steam SDK', 'PlayFab'],
      pricing: 'Starting from $15,000',
      timeline: '3-12 months',
      caseStudy: 'Created award-winning AR game with 1M+ downloads'
    },
    {
      id: 'consulting',
      icon: Settings,
      title: t.services.itConsulting.title,
      description: t.services.itConsulting.description,
      gradient: 'from-green-500 to-teal-400',
      features: [
        'Digital Transformation Strategy',
        'Technology Architecture Design',
        'Process Optimization',
        'Security Audits & Compliance',
        'Cloud Migration Planning',
        'Performance Optimization',
        'Team Training & Mentoring',
        '24/7 Technical Support'
      ],
      technologies: ['AWS', 'Azure', 'GCP', 'Terraform', 'Ansible', 'Jenkins', 'Grafana', 'ELK Stack'],
      pricing: 'Starting from $150/hour',
      timeline: '1-3 months',
      caseStudy: 'Reduced operational costs by 40% for Fortune 500 company'
    },
    {
      id: 'ai',
      icon: Brain,
      title: t.services.aiSolutions.title,
      description: t.services.aiSolutions.description,
      gradient: 'from-orange-500 to-red-400',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics',
        'Chatbots & Virtual Assistants',
        'Recommendation Systems',
        'Process Automation',
        'AI Integration & Deployment'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'Apache Spark', 'MLflow', 'Kubernetes'],
      pricing: 'Starting from $10,000',
      timeline: '2-8 months',
      caseStudy: 'AI automation reduced processing time by 85%'
    }
  ];

  const additionalServices = [
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      features: ['Cloud Architecture', 'DevOps', 'Microservices', 'Serverless']
    },
    {
      icon: Database,
      title: 'Data Solutions',
      description: 'Big data analytics and database optimization',
      features: ['Data Warehousing', 'ETL Pipelines', 'Real-time Analytics', 'Data Visualization']
    }
  ];

  const [activeService, setActiveService] = useState('software');

  return (
    <div className="min-h-screen bg-deep-blue">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, #00d4ff 25%, transparent 25%), 
                             linear-gradient(-45deg, #00d4ff 25%, transparent 25%), 
                             linear-gradient(45deg, transparent 75%, #00d4ff 75%), 
                             linear-gradient(-45deg, transparent 75%, #00d4ff 75%)`,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-8">
              <Code className="w-4 h-4" />
              Our Services
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
              {t.services.title}
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed">
              {t.services.subtitle}
            </p>
            
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-deep-blue font-semibold px-8 py-4 text-lg rounded-lg neon-glow"
              onClick={() => onPageChange('contact')}
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-gradient-to-b from-dark-blue to-medium-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Service Tabs */}
          <Tabs value={activeService} onValueChange={setActiveService} className="w-full">
            <div className="flex justify-center mb-16">
              <TabsList className="grid grid-cols-2 lg:grid-cols-4 w-full max-w-4xl bg-medium-blue border border-border">
                {services.map((service) => (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className="flex items-center gap-2 text-white data-[state=active]:bg-primary data-[state=active]:text-deep-blue"
                  >
                    <service.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{service.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Service Details */}
                  <div>
                    <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                      <service.icon className="h-10 w-10 text-white" />
                    </div>
                    
                    <h2 className="text-4xl font-bold text-white mb-4">
                      {service.title}
                    </h2>
                    
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                      <div className="bg-medium-blue rounded-lg p-4 text-center">
                        <div className="text-primary font-bold text-lg mb-1">{service.pricing}</div>
                        <div className="text-muted-foreground text-sm">Starting Price</div>
                      </div>
                      <div className="bg-medium-blue rounded-lg p-4 text-center">
                        <div className="text-primary font-bold text-lg mb-1">{service.timeline}</div>
                        <div className="text-muted-foreground text-sm">Timeline</div>
                      </div>
                      <div className="bg-medium-blue rounded-lg p-4 text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <span className="text-primary font-bold text-lg">4.9</span>
                        </div>
                        <div className="text-muted-foreground text-sm">Client Rating</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        size="lg" 
                        className="bg-primary hover:bg-primary/90 text-deep-blue font-semibold"
                        onClick={() => onPageChange('contact')}
                      >
                        Get Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="border-primary text-primary hover:bg-primary hover:text-deep-blue"
                        onClick={() => onPageChange('cases')}
                      >
                        View Case Studies
                      </Button>
                    </div>
                  </div>
                  
                  {/* Features & Tech Stack */}
                  <div className="space-y-8">
                    {/* Features */}
                    <Card className="bg-gradient-card border-border">
                      <CardHeader>
                        <CardTitle className="text-white">What's Included</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-muted-foreground text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                    
                    {/* Technologies */}
                    <Card className="bg-gradient-card border-border">
                      <CardHeader>
                        <CardTitle className="text-white">Technologies We Use</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, index) => (
                            <Badge key={index} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                    
                    {/* Case Study Highlight */}
                    <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                      <CardHeader>
                        <CardTitle className="text-primary">Success Story</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white">{service.caseStudy}</p>
                        <Button 
                          variant="ghost" 
                          className="text-primary hover:text-white hover:bg-primary mt-4 p-0 h-auto"
                          onClick={() => onPageChange('cases')}
                        >
                          Read Full Case Study
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-gradient-to-b from-medium-blue to-deep-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
              Additional Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions to support your entire technology stack
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 group">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="outline" className="border-primary/20 text-primary">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-white hover:bg-primary group p-0 h-auto"
                    onClick={() => onPageChange('contact')}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-deep-blue/80"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free consultation and detailed project quote tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              size="lg" 
              className="bg-white hover:bg-white/90 text-deep-blue font-semibold px-8 py-4 text-lg rounded-lg"
              onClick={() => onPageChange('contact')}
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-deep-blue font-semibold px-8 py-4 text-lg rounded-lg"
              onClick={() => onPageChange('cases')}
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}