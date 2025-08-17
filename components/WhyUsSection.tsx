import React, { useEffect, useState, useRef } from 'react';
import { Award, Globe, Users, TrendingUp, Star, Shield } from './ui/icons';
import { useTranslation } from '../hooks/useTranslation';

export function WhyUsSection() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: Award,
      number: '10+',
      label: t.whyUs.experience,
      description: 'Leading innovation in IT industry'
    },
    {
      icon: TrendingUp,
      number: '500+',
      label: t.whyUs.projects,
      description: 'Delivered across all industries'
    },
    {
      icon: Globe,
      number: '50+',
      label: t.whyUs.international,
      description: 'Global presence and expertise'
    },
    {
      icon: Star,
      number: '99%',
      label: t.whyUs.satisfaction,
      description: 'Client retention and success rate'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security standards for all our solutions'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with proven track record'
    },
    {
      icon: Globe,
      title: '24/7 Global Support',
      description: 'Round-the-clock support across all time zones'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Built to grow with your business needs'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-dark-blue to-medium-blue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #00d4ff 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6">
            <Award className="w-4 h-4" />
            Why Choose Us
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
            {t.whyUs.title}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by businesses worldwide for delivering exceptional technology solutions
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:neon-glow">
                  <stat.icon className="h-10 w-10 text-deep-blue" />
                </div>
              </div>
              
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              
              <div className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </div>
              
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 4) * 150}ms` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}