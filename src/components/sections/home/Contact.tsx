'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  Headphones,
  Zap,
  Shield,
  Globe,
} from 'lucide-react';

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/');
  };
  const handleSecondaryAction = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Test Onl1 contact form submitted:', formData);
    handlePrimaryAction();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Technical Support',
      description: 'Get testing platform assistance',
      contact: 'support@testonl1.com',
      action: 'Email Support',
    },
    {
      icon: Phone,
      title: 'Enterprise Sales',
      description: 'Discuss custom testing solutions',
      contact: '+1 (555) TEST-ON1',
      action: 'Schedule Call',
    },
    {
      icon: MessageSquare,
      title: 'Developer Chat',
      description: 'Real-time testing support',
      contact: 'Available 24/7 for Pro+ users',
      action: 'Start Chat',
    },
  ];

  const offices = [
    {
      city: 'San Francisco',
      address: '1337 Testing Blvd, Suite 200',
      timezone: 'PST (UTC-8)',
      focus: 'AI/ML Development',
    },
    {
      city: 'Austin',
      address: '456 DevOps Center, Floor 12',
      timezone: 'CST (UTC-6)',
      focus: 'Enterprise Solutions',
    },
    {
      city: 'Dublin',
      address: '789 Cloud District, Building C',
      timezone: 'GMT (UTC+0)',
      focus: 'European Operations',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Zap className="size-3 mr-2" />
            Contact Test Onl1
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Testing Workflow?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Join 5,000+ QA engineers already using Test Onl1. Get expert guidance on implementing
            our next-generation testing platform in your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Send className="size-6 text-primary" />
                Start Your Testing Journey
              </CardTitle>
              <CardDescription>
                Tell us about your testing needs and we'll show you how Test Onl1 can deliver 10x
                faster execution with 99.7% success rate.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Sarah Chen"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="sarah@techcorp.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company & Role
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="TechCorp - Senior QA Engineer"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Testing Requirements *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your current testing challenges, team size, and what you're looking to achieve with Test Onl1..."
                  />
                </div>

                <Button type="submit" className="w-full text-base py-6 group">
                  Get Testing Platform Demo
                  <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Headphones className="size-5 text-primary" />
                Expert Testing Support
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card
                      key={index}
                      className="border-border/50 hover:border-primary/20 transition-colors cursor-pointer group"
                      onClick={handleSecondaryAction}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{method.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              {method.description}
                            </p>
                            <p className="font-medium text-primary">{method.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Office Locations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Globe className="size-5 text-primary" />
                Global Testing Centers
              </h3>
              <div className="space-y-3">
                {offices.map((office, index) => (
                  <div key={index} className="p-4 border border-border/50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold">{office.city}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{office.address}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {office.timezone}
                      </Badge>
                    </div>
                    <p className="text-xs text-primary font-medium">{office.focus}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Hours */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  Testing Support Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Developer Tier</span>
                    <span>Community Support</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Team Pro</span>
                    <span>9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Enterprise</span>
                    <span className="text-primary font-medium">24/7 Priority Support</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Shield className="size-4" />
                    99.99% platform reliability with enterprise SLA
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 border border-border/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">2.4M+</div>
                <div className="text-sm text-muted-foreground">Tests Executed</div>
              </div>
              <div className="text-center p-4 border border-border/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">4.8/5</div>
                <div className="text-sm text-muted-foreground">Developer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
