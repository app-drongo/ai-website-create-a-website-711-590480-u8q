'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Target,
  Users,
  Award,
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb,
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Testing Excellence',
      description:
        "We're committed to revolutionizing software testing with AI-powered automation that delivers 10x faster execution and enterprise-grade reliability.",
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description:
        'We constantly push the boundaries of testing technology, bringing cutting-edge AI/ML optimization to your development workflow.',
    },
    {
      icon: Heart,
      title: 'Developer Obsessed',
      description:
        "Your testing success is our mission. We build every feature with QA engineers' needs and productivity goals at the center.",
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description:
        "From startups to Fortune 500, we're helping 5,000+ QA engineers worldwide execute 2.4M+ tests with 99.7% success rate.",
    },
  ];

  const stats = [
    { value: '2020', label: 'Founded', icon: Award },
    { value: '5K+', label: 'QA Engineers', icon: Users },
    { value: '99.99%', label: 'Platform Uptime', icon: TrendingUp },
    { value: '2.4M+', label: 'Tests Executed', icon: Globe },
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & Co-Founder',
      image: 'AC',
      bio: 'Former VP of QA at TestCorp. 12+ years building enterprise testing platforms.',
    },
    {
      name: 'Sarah Kumar',
      role: 'CTO & Co-Founder',
      image: 'SK',
      bio: 'Ex-Microsoft engineer. Expert in AI/ML testing optimization and cloud infrastructure.',
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of Platform',
      image: 'MJ',
      bio: 'Testing automation expert with experience scaling QA operations at unicorn startups.',
    },
    {
      name: 'Lisa Zhang',
      role: 'VP of Engineering',
      image: 'LZ',
      bio: 'Former Google engineer. Passionate about developer experience and testing reliability.',
    },
  ];

  const handleStartTesting = () => {
    window.location.href = '/dashboard';
  };

  const handleViewPlatform = () => {
    window.location.href = '/platform';
  };

  const handleContactTeam = () => {
    window.location.href = '/contact';
  };

  const handleViewTeam = () => {
    window.location.href = '/team';
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About Test Onl1
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Pioneering the Future of
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              AI-Powered Testing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're a passionate team of QA engineers, AI researchers, and platform architects on a
            mission to make enterprise-grade testing accessible, intelligent, and lightning-fast for
            every development team.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Testing Revolution</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2020 by a team of frustrated QA engineers, we set out to solve a critical
                problem: why was enterprise testing still so slow, unreliable, and
                resource-intensive?
              </p>
              <p>
                After years of wrestling with flaky test suites, slow execution times, and endless
                maintenance overhead, we knew AI could revolutionize testing. So we built the
                next-generation platform.
              </p>
              <p>
                Today, we're proud to serve 5,000+ QA engineers worldwide, helping them execute
                2.4M+ tests with 10x faster performance and 99.7% success rate across multi-language
                environments.
              </p>
            </div>
            <Button onClick={handleViewPlatform} className="group">
              Explore Our Platform
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "We believe AI-powered testing should be accessible to every QA team, not just
                      tech giants."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Alex Chen, CEO</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="text-center border-border/50 hover:border-primary/20 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Testing Philosophy</h3>
            <p className="text-muted-foreground">
              The core principles that drive our AI-powered testing platform and every innovation we
              deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our Testing Experts</h3>
            <p className="text-muted-foreground">
              The talented QA engineers and AI researchers behind Test Onl1, working together to
              revolutionize testing automation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button onClick={handleViewTeam} variant="outline" className="group">
              View All Team Members
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "Test Onl1 has completely transformed our QA workflow. What used to take hours now
                takes minutes, and our test reliability has never been better. The AI optimization
                is game-changing."
              </blockquote>
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  RK
                </div>
                <div className="text-left">
                  <div className="font-semibold">Rachel Kim</div>
                  <div className="text-sm text-muted-foreground">
                    Senior QA Engineer, DevTech Solutions
                  </div>
                </div>
              </div>
              <Button onClick={handleStartTesting} size="lg" className="group">
                Start Testing Free
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
