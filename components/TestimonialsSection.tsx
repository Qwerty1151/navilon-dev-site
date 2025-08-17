"use client";
import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from './ui/icons';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      position: 'CTO at TechCorp',
      company: 'TechCorp Solutions',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Navilon Dev transformed our entire digital infrastructure. Their expertise in AI solutions helped us automate 70% of our processes, leading to unprecedented efficiency gains.',
      project: 'AI Automation Platform'
    },
    {
      id: 2,
      name: 'Marcus Weber',
      position: 'Founder & CEO',
      company: 'InnovateLab GmbH',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Working with Navilon Dev on our mobile game was extraordinary. They delivered a stunning AR experience that exceeded our expectations and won multiple industry awards.',
      project: 'AR Mobile Game'
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      position: 'Head of Digital',
      company: 'Global Finance Ltd',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'The enterprise solution Navilon Dev built for us handles millions of transactions daily. Their attention to security and scalability is unmatched in the industry.',
      project: 'Financial Trading Platform'
    },
    {
      id: 4,
      name: 'David Chen',
      position: 'VP of Technology',
      company: 'StartupX Inc.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Navilon Dev\'s consulting services were instrumental in our digital transformation. They helped us modernize our legacy systems and reduce operational costs by 40%.',
      project: 'Legacy System Modernization'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-medium-blue to-deep-blue relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6">
            <Star className="w-4 h-4" />
            Client Success Stories
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by industry leaders worldwide for delivering exceptional results
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-gradient-card border-border text-center p-8">
                    <CardContent className="space-y-6">
                      {/* Quote Icon */}
                      <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                        <Quote className="h-8 w-8 text-primary" />
                      </div>
                      
                      {/* Rating */}
                      <div className="flex justify-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                        ))}
                      </div>
                      
                      {/* Testimonial Text */}
                      <blockquote className="text-lg sm:text-xl text-white leading-relaxed italic">
                        "{testimonial.text}"
                      </blockquote>
                      
                      {/* Project Tag */}
                      <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                        {testimonial.project}
                      </div>
                      
                      {/* Client Info */}
                      <div className="flex items-center justify-center gap-4 pt-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary/20">
                          <ImageWithFallback
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-white">{testimonial.name}</div>
                          <div className="text-primary text-sm">{testimonial.position}</div>
                          <div className="text-muted-foreground text-sm">{testimonial.company}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full border-primary text-primary hover:bg-primary hover:text-deep-blue"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full border-primary text-primary hover:bg-primary hover:text-deep-blue"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-primary scale-125' : 'bg-primary/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
