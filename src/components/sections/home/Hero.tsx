'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star, Users, Zap, Code, Rocket, Shield } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Hero() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/'); // Main conversion action
  };

  const handleSecondaryAction = () => {
    setIsModalOpen(true); // Open demo video modal
  };

  const handleBadgeAction = () => {
    router.push('/'); // Navigate to updates/features
  };
  // ACTION_PLACEHOLDER_END

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-20 size-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 size-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <button
              onClick={handleBadgeAction}
              className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary hover:bg-primary/20 transition-colors cursor-pointer"
              data-action-type="badge-link"
            >
              <Zap className="size-4 mr-2" />
              Beta: Test Onl1 Platform Now Live
              <ArrowRight className="ml-2 size-4" />
            </button>
          </div>

          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Test Onl1
              <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Next-Gen Testing
              </span>
              Platform
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Revolutionary cloud-native testing suite that delivers 10x faster test execution with
              AI-powered insights. Built for modern development teams.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="group text-base px-8"
                onClick={handlePrimaryAction}
                data-action-type="primary-cta"
              >
                Start Testing Free
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group text-base px-8"
                onClick={handleSecondaryAction}
                data-action-type="secondary-cta"
              >
                <Play className="mr-2 size-5 transition-transform group-hover:scale-110" />
                View Platform Demo
              </Button>
            </div>

            {/* Key Features */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Code className="size-4 text-primary" />
                <span>Multi-Language Support</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Rocket className="size-4 text-primary" />
                <span>10x Faster Execution</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="size-4 text-primary" />
                <span>Enterprise Security</span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="size-8 rounded-full bg-gradient-to-br from-primary to-primary/60 border-2 border-background" />
                  <div className="size-8 rounded-full bg-gradient-to-br from-accent to-accent/60 border-2 border-background" />
                  <div className="size-8 rounded-full bg-gradient-to-br from-secondary to-secondary/60 border-2 border-background" />
                </div>
                <span className="ml-2">
                  <Users className="inline size-4 mr-1" />
                  5,000+ QA Engineers
                </span>
              </div>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
                <span className="ml-2">4.8/5 Developer Rating</span>
              </div>
            </div>
          </div>

          {/* Hero Dashboard Mockup */}
          <div className="mt-16 relative">
            <div className="relative mx-auto max-w-4xl">
              <div className="rounded-2xl border bg-card p-2 shadow-2xl">
                <div className="rounded-xl bg-gradient-to-br from-muted/50 to-muted aspect-video flex items-center justify-center relative overflow-hidden">
                  {/* Dashboard Elements */}
                  <div className="absolute top-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="size-3 bg-primary rounded-full"></div>
                        <span className="text-xs text-muted-foreground">Test Onl1 Dashboard</span>
                      </div>
                      <div className="flex gap-1">
                        <div className="size-2 bg-accent rounded-full"></div>
                        <div className="size-2 bg-secondary rounded-full"></div>
                        <div className="size-2 bg-primary rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="size-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <Play className="size-8 text-primary ml-1" />
                    </div>
                    <p className="text-muted-foreground font-medium">Interactive Platform Demo</p>
                    <p className="text-xs text-muted-foreground/70 mt-1">See Test Onl1 in Action</p>
                  </div>

                  {/* Floating Stats */}
                  <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm rounded-lg px-3 py-2 border">
                    <div className="text-xs text-muted-foreground">Tests Executed</div>
                    <div className="text-sm font-bold text-primary">2.4M+</div>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm rounded-lg px-3 py-2 border">
                    <div className="text-xs text-muted-foreground">Success Rate</div>
                    <div className="text-sm font-bold text-accent">99.7%</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 size-8 bg-primary rounded-full animate-pulse flex items-center justify-center">
                <Code className="size-4 text-background" />
              </div>
              <div className="absolute -bottom-4 -right-4 size-6 bg-accent rounded-full animate-pulse delay-1000" />
              <div className="absolute top-1/2 -right-8 size-4 bg-secondary rounded-full animate-pulse delay-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
