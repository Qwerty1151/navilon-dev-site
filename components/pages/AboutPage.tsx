import React from 'react';
import { Target, Users, Globe, Award, ArrowRight, Heart, Zap, Shield } from '../ui/icons';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useTranslation } from '../../hooks/useTranslation';

interface AboutPageProps {
  onPageChange: (page: string) => void;
}

export function AboutPage({ onPageChange }: AboutPageProps) {
  const { t } = useTranslation();

  const values = [
    {
      icon: Zap,
      title: t.about.values.innovation,
      description: 'We constantly push the boundaries of technology, embracing new solutions and creative approaches to solve complex challenges.',
      gradient: 'from-yellow-500 to-orange-400'
    },
    {
      icon: Shield,
      title: t.about.values.quality,
      description: 'Quality is at the core of everything we do. We maintain the highest standards in code, design, and client service.',
      gradient: 'from-green-500 to-blue-400'
    },
    {
      icon: Heart,
      title: t.about.values.partnership,
      description: 'We build lasting relationships with our clients, working as trusted partners in their digital transformation journey.',
      gradient: 'from-pink-500 to-purple-400'
    }
  ];

  const team = [
    {
      name: 'Alexander Petrov',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      description: 'Visionary leader with 15+ years in tech industry'
    },
    {
      name: 'Maria Gonzalez',
      position: 'CTO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      description: 'Expert in AI and machine learning technologies'
    },
    {
      name: 'David Kim',
      position: 'Head of Development',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      description: 'Full-stack architect and team mentor'
    },
    {
      name: 'Sophie Laurent',
      position: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      description: 'UX/UI designer with international awards'
    }
  ];

  const milestones = [
    { year: '2014', event: 'Navilon Dev founded in Silicon Valley', icon: Target },
    { year: '2017', event: 'Expanded to European markets', icon: Globe },
    { year: '2020', event: 'AI division launched with breakthrough products', icon: Zap },
    { year: '2023', event: 'Reached 50+ countries worldwide', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-deep-blue">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #00d4ff 2px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-8">
              <Users className="w-4 h-4" />
              About Our Company
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
              {t.about.title}
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed">
              {t.about.subtitle}
            </p>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.about.mission}
            </p>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-gradient-to-b from-dark-blue to-medium-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: '10+', label: 'Years in Business', icon: Award },
              { number: '500+', label: 'Projects Delivered', icon: Target },
              { number: '50+', label: 'Countries Served', icon: Globe },
              { number: '100+', label: 'Team Members', icon: Users }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gradient-to-b from-medium-blue to-dark-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
              {t.about.values.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 group">
                <CardHeader className="text-center pb-4">
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <value.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-primary transition-colors">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-gradient-to-b from-dark-blue to-deep-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
              Our Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the visionaries behind Navilon Dev
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 group text-center">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/50 transition-all mb-4">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-primary transition-colors">
                    {member.name}
                  </CardTitle>
                  <p className="text-primary">{member.position}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 bg-gradient-to-b from-deep-blue to-dark-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key milestones in our growth and innovation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start gap-8 group">
                    {/* Timeline Dot */}
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform neon-glow">
                      <milestone.icon className="h-8 w-8 text-deep-blue" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <div className="text-primary font-bold text-2xl mb-2">{milestone.year}</div>
                      <div className="text-white text-lg font-semibold mb-1">{milestone.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-deep-blue/80"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with cutting-edge technology solutions.
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
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}