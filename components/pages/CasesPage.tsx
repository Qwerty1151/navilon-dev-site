import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Filter, Star } from '../ui/icons';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface CasesPageProps {
  onPageChange: (page: string) => void;
}

export function CasesPage({ onPageChange }: CasesPageProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const cases = [
    {
      id: 1,
      title: 'FinTech Trading Platform',
      category: 'software',
      description: 'Enterprise-grade financial trading platform processing $10M+ daily transactions',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
      results: ['99.9% uptime', '50ms latency', '10M+ transactions'],
      client: 'Global Finance Ltd',
      year: '2023',
      link: '#'
    },
    {
      id: 2,
      title: 'AR Adventure Game',
      category: 'games',
      description: 'Award-winning AR mobile game with real-world exploration mechanics',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop',
      technologies: ['Unity', 'ARCore', 'C#', 'Firebase', 'Blender'],
      results: ['1M+ downloads', '4.8 App Store rating', '3 industry awards'],
      client: 'InnovateLab GmbH',
      year: '2023',
      link: '#'
    },
    {
      id: 3,
      title: 'AI Customer Service Bot',
      category: 'ai',
      description: 'Intelligent chatbot reducing customer support costs by 70%',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop',
      technologies: ['Python', 'TensorFlow', 'OpenAI', 'FastAPI', 'PostgreSQL'],
      results: ['70% cost reduction', '95% accuracy', '24/7 availability'],
      client: 'TechCorp Solutions',
      year: '2022',
      link: '#'
    },
    {
      id: 4,
      title: 'E-commerce Platform',
      category: 'software',
      description: 'Scalable multi-vendor marketplace handling millions of products',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'Stripe', 'MongoDB', 'AWS', 'GraphQL'],
      results: ['5M+ products', '200% sales increase', '99.9% uptime'],
      client: 'Retail Giant Inc',
      year: '2023',
      link: '#'
    },
    {
      id: 5,
      title: 'Cloud Migration Project',
      category: 'consulting',
      description: 'Complete infrastructure modernization reducing costs by 40%',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
      technologies: ['AWS', 'Kubernetes', 'Terraform', 'Jenkins', 'Grafana'],
      results: ['40% cost reduction', '3x faster deployment', '99.9% availability'],
      client: 'Legacy Corp',
      year: '2022',
      link: '#'
    },
    {
      id: 6,
      title: 'VR Training Simulator',
      category: 'games',
      description: 'Immersive VR training platform for industrial safety',
      image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=600&h=400&fit=crop',
      technologies: ['Unreal Engine', 'Oculus SDK', 'C++', 'Steam VR'],
      results: ['80% training efficiency', '50+ companies', '95% user satisfaction'],
      client: 'SafetyFirst Corp',
      year: '2023',
      link: '#'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: cases.length },
    { id: 'software', label: 'Software', count: cases.filter(c => c.category === 'software').length },
    { id: 'games', label: 'Games', count: cases.filter(c => c.category === 'games').length },
    { id: 'ai', label: 'AI Solutions', count: cases.filter(c => c.category === 'ai').length },
    { id: 'consulting', label: 'Consulting', count: cases.filter(c => c.category === 'consulting').length }
  ];

  const filteredCases = activeFilter === 'all' ? cases : cases.filter(c => c.category === activeFilter);

  return (
    <div className="min-h-screen bg-deep-blue">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-8">
              <Star className="w-4 h-4" />
              Our Portfolio
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
              Case Studies
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Explore our successful projects and see how we've helped businesses<br />
              transform their operations with cutting-edge technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-16 bg-gradient-to-b from-dark-blue to-medium-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <Filter className="h-5 w-5 text-primary mr-2" />
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  className={`${
                    activeFilter === filter.id 
                      ? 'bg-primary text-deep-blue' 
                      : 'border-primary text-primary hover:bg-primary hover:text-deep-blue'
                  }`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label} ({filter.count})
                </Button>
              ))}
            </div>
          </div>

          {/* Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((caseStudy) => (
              <Card key={caseStudy.id} className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 group overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {caseStudy.year}
                    </Badge>
                    <Badge variant="outline" className="border-primary/20 text-primary capitalize">
                      {caseStudy.category}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl text-white group-hover:text-primary transition-colors">
                    {caseStudy.title}
                  </CardTitle>
                  
                  <p className="text-muted-foreground text-sm">
                    {caseStudy.description}
                  </p>
                  
                  <div className="text-primary text-sm font-medium">
                    Client: {caseStudy.client}
                  </div>
                </CardHeader>
                
                <CardContent>
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {caseStudy.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-primary/20 text-muted-foreground">
                        {tech}
                      </Badge>
                    ))}
                    {caseStudy.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs border-primary/20 text-muted-foreground">
                        +{caseStudy.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  {/* Results */}
                  <div className="space-y-1 mb-6">
                    {caseStudy.results.slice(0, 2).map((result, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{result}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-deep-blue"
                    >
                      View Details
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-primary hover:bg-primary/10"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
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
            Ready for Your Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create an exceptional solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              size="lg" 
              className="bg-white hover:bg-white/90 text-deep-blue font-semibold px-8 py-4 text-lg rounded-lg"
              onClick={() => onPageChange('contact')}
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-deep-blue font-semibold px-8 py-4 text-lg rounded-lg"
              onClick={() => onPageChange('services')}
            >
              View Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}