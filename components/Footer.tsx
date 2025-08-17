import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from './ui/icons';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useTranslation } from '../hooks/useTranslation';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export function Footer({ onPageChange }: FooterProps) {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];

  const quickLinks = [
    { label: t.nav.about, page: 'about' },
    { label: t.nav.services, page: 'services' },
    { label: t.nav.cases, page: 'cases' },
    { label: t.nav.careers, page: 'careers' }
  ];

  const services = [
    'Software Development',
    'Game Development', 
    'AI Solutions',
    'IT Consulting'
  ];

  return (
    <footer className="bg-gradient-to-t from-deep-blue to-dark-blue border-t border-border pt-20 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="font-bold text-deep-blue">N</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Navilon Dev</h3>
                  <p className="text-xs text-muted-foreground -mt-1">Navigating Innovation</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                International IT company delivering cutting-edge software development, game development, AI solutions and technological consulting services worldwide.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-medium-blue rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => onPageChange(link.page)}
                  className="block text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <div className="space-y-3">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => onPageChange('services')}
                  className="block text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
          
          {/* Contact Info & Newsletter */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm">contact@navilondev.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm">Global Offices Worldwide</span>
                </div>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
              <div className="flex flex-col gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-medium-blue border-border text-white placeholder:text-muted-foreground"
                />
                <Button 
                  size="sm" 
                  className="bg-primary hover:bg-primary/90 text-deep-blue font-semibold"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-muted-foreground text-sm">
              © 2024 Navilon Dev. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}