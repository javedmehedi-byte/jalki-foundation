import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Heart, 
  Users, 
  Sprout, 
  Shield, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight,
  HandHeart,
  TreePine,
  GraduationCap,
  Stethoscope
} from 'lucide-react';
import { useState } from 'react';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const healthRef = useRef<HTMLDivElement>(null);
  const livelihoodRef = useRef<HTMLDivElement>(null);
  const agricultureRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);
  const storiesRef = useRef<HTMLDivElement>(null);
  const impactRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Hero load animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation (auto-play on load)
      const heroTl = gsap.timeline({ delay: 0.2 });
      
      heroTl
        .fromTo('.hero-bg', 
          { opacity: 0, scale: 1.1 }, 
          { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' }
        )
        .fromTo('.hero-logo-block', 
          { opacity: 0, y: -20 }, 
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 
          '-=0.8'
        )
        .fromTo('.hero-headline span', 
          { opacity: 0, y: 30 }, 
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out' }, 
          '-=0.4'
        )
        .fromTo('.hero-subheadline', 
          { opacity: 0, y: 20 }, 
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 
          '-=0.3'
        )
        .fromTo('.hero-cta', 
          { opacity: 0, y: 16 }, 
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, 
          '-=0.2'
        )
        .fromTo('.hero-info-card', 
          { opacity: 0, x: 80 }, 
          { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }, 
          '-=0.6'
        );
    });

    return () => ctx.revert();
  }, []);

  // Scroll-driven animations for pinned sections
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero scroll exit animation
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: '+=130%',
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress > 0.7) {
            const exitProgress = (progress - 0.7) / 0.3;
            gsap.set('.hero-headline', { 
              x: -18 * exitProgress + 'vw', 
              opacity: 1 - exitProgress * 0.8 
            });
            gsap.set('.hero-subheadline', { 
              x: -10 * exitProgress + 'vw', 
              opacity: 1 - exitProgress * 0.8 
            });
            gsap.set('.hero-cta', { 
              x: -10 * exitProgress + 'vw', 
              opacity: 1 - exitProgress * 0.8 
            });
            gsap.set('.hero-info-card', { 
              x: 10 * exitProgress + 'vw', 
              opacity: 1 - exitProgress * 0.8 
            });
            gsap.set('.hero-bg', { 
              scale: 1 + 0.06 * exitProgress,
              y: -3 * exitProgress + 'vh'
            });
          }
        },
        onLeaveBack: () => {
          gsap.set('.hero-headline, .hero-subheadline, .hero-cta, .hero-info-card', { 
            x: 0, opacity: 1 
          });
          gsap.set('.hero-bg', { scale: 1, y: 0 });
        }
      });

      // Health section
      ScrollTrigger.create({
        trigger: healthRef.current,
        start: 'top top',
        end: '+=130%',
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const progress = self.progress;
          // Entrance (0-30%)
          if (progress <= 0.3) {
            const entranceProgress = progress / 0.3;
            gsap.set('.health-bg', { 
              scale: 1.08 - 0.08 * entranceProgress,
              opacity: 0.6 + 0.4 * entranceProgress
            });
            gsap.set('.health-headline', { 
              y: 10 * (1 - entranceProgress) + 'vh',
              opacity: entranceProgress
            });
            gsap.set('.health-subheadline', { 
              y: 6 * (1 - entranceProgress) + 'vh',
              opacity: entranceProgress
            });
            gsap.set('.health-cta', { 
              y: 4 * (1 - entranceProgress) + 'vh',
              opacity: entranceProgress
            });
            gsap.set('.health-info-card', { 
              x: 12 * (1 - entranceProgress) + 'vw',
              opacity: entranceProgress
            });
          }
          // Exit (70-100%)
          else if (progress > 0.7) {
            const exitProgress = (progress - 0.7) / 0.3;
            gsap.set('.health-headline', { 
              x: -16 * exitProgress + 'vw',
              opacity: 1 - exitProgress * 0.75
            });
            gsap.set('.health-subheadline, .health-cta', { 
              x: -10 * exitProgress + 'vw',
              opacity: 1 - exitProgress * 0.8
            });
            gsap.set('.health-info-card', { 
              x: 10 * exitProgress + 'vw',
              opacity: 1 - exitProgress * 0.8
            });
            gsap.set('.health-bg', { 
              scale: 1 + 0.05 * exitProgress,
              y: -2 * exitProgress + 'vh'
            });
          }
        }
      });

      // Livelihood section
      ScrollTrigger.create({
        trigger: livelihoodRef.current,
        start: 'top top',
        end: '+=130%',
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress <= 0.3) {
            const entranceProgress = progress / 0.3;
            gsap.set('.livelihood-bg', { 
              scale: 1.08 - 0.08 * entranceProgress,
              opacity: 0.6 + 0.4 * entranceProgress
            });
            gsap.set('.livelihood-headline', { 
              y: 10 * (1 - entranceProgress) + 'vh',
              opacity: entranceProgress
            });
            gsap.set('.livelihood-subheadline', { 
              y: 6 * (1 - entranceProgress) + 'vh',
              opacity: entranceProgress
            });
            gsap.set('.livelihood-cta', { 
              y: 4 * (1 - entranceProgress) + 'vh',
              opacity: entranceProgress
            });
            gsap.set('.livelihood-info-card', { 
              x: 12 * (1 - entranceProgress) + 'vw',
              opacity: entranceProgress
            });
          }
          else if (progress > 0.7) {
            const exitProgress = (progress - 0.7) / 0.3;
            gsap.set('.livelihood-headline', { 
              x: -16 * exitProgress + 'vw',
              opacity: 1 - exitProgress * 0.75
            });
            gsap.set('.livelihood-subheadline, .livelihood-cta', { 
              x: -10 * exitProgress + 'vw',
              opacity: 1 - exitProgress * 0.8
            });
            gsap.set('.livelihood-info-card', { 
              x: 10 * exitProgress + 'vw',
              opacity: 1 - exitProgress * 0.8
            });
            gsap.set('.livelihood-bg', { 
              scale: 1 + 0.05 * exitProgress,
              y: -2 * exitProgress + 'vh'
            });
          }
        }
      });

      // Agriculture section
      ScrollTrigger.create({
        trigger: agricultureRef.current,
        start: 'top top',
        end: '+=130%',
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress <= 0.3) {
            const entranceProgress = progress / 0.3;
            gsap.set('.agriculture-bg', { 
              scale: 1.08 - 0.08 * entranceProgress,
              opacity: 0.6 + 0.4 * entranceProgress
            });
            gsap.set('.agriculture-headline', { 
              y: 10 * (1 - entranceProgress) + 'vh',
              opacity: entranceProgress
            });
            gsap.set('.agriculture-subheadline', { 
              y: 6 * (1 - entranceProgress) + 'vh',
              opacity: entranceProgress
            });
            gsap.set('.agriculture-cta', { 
              y: 4 * (1 - entranceProgress) + 'vh',
              opacity: entranceProgress
            });
            gsap.set('.agriculture-info-card', { 
              x: 12 * (1 - entranceProgress) + 'vw',
              opacity: entranceProgress
            });
          }
          else if (progress > 0.7) {
            const exitProgress = (progress - 0.7) / 0.3;
            gsap.set('.agriculture-headline', { 
              x: -16 * exitProgress + 'vw',
              opacity: 1 - exitProgress * 0.75
            });
            gsap.set('.agriculture-subheadline, .agriculture-cta', { 
              x: -10 * exitProgress + 'vw',
              opacity: 1 - exitProgress * 0.8
            });
            gsap.set('.agriculture-info-card', { 
              x: 10 * exitProgress + 'vw',
              opacity: 1 - exitProgress * 0.8
            });
            gsap.set('.agriculture-bg', { 
              scale: 1 + 0.05 * exitProgress,
              y: -2 * exitProgress + 'vh'
            });
          }
        }
      });

      // Social welfare section
      ScrollTrigger.create({
        trigger: socialRef.current,
        start: 'top top',
        end: '+=130%',
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress <= 0.3) {
            const entranceProgress = progress / 0.3;
            gsap.set('.social-bg', { 
              scale: 1.08 - 0.08 * entranceProgress,
              opacity: 0.6 + 0.4 * entranceProgress
            });
            gsap.set('.social-headline', { 
              y: 10 * (1 - entranceProgress) + 'vh',
              opacity: entranceProgress
            });
            gsap.set('.social-subheadline', { 
              y: 6 * (1 - entranceProgress) + 'vh',
              opacity: entranceProgress
            });
            gsap.set('.social-cta', { 
              y: 4 * (1 - entranceProgress) + 'vh',
              opacity: entranceProgress
            });
            gsap.set('.social-info-card', { 
              x: 12 * (1 - entranceProgress) + 'vw',
              opacity: entranceProgress
            });
          }
          else if (progress > 0.7) {
            const exitProgress = (progress - 0.7) / 0.3;
            gsap.set('.social-headline', { 
              x: -16 * exitProgress + 'vw',
              opacity: 1 - exitProgress * 0.75
            });
            gsap.set('.social-subheadline, .social-cta', { 
              x: -10 * exitProgress + 'vw',
              opacity: 1 - exitProgress * 0.8
            });
            gsap.set('.social-info-card', { 
              x: 10 * exitProgress + 'vw',
              opacity: 1 - exitProgress * 0.8
            });
            gsap.set('.social-bg', { 
              scale: 1 + 0.05 * exitProgress,
              y: -2 * exitProgress + 'vh'
            });
          }
        }
      });

      // Flowing sections animation
      gsap.utils.toArray<HTMLElement>('.flow-reveal').forEach((el) => {
        gsap.fromTo(el, 
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      // Impact counter animation
      ScrollTrigger.create({
        trigger: impactRef.current,
        start: 'top 60%',
        onEnter: () => {
          document.querySelectorAll('.counter').forEach((counter) => {
            const target = parseInt(counter.getAttribute('data-target') || '0');
            gsap.fromTo(counter, 
              { innerText: 0 },
              { 
                innerText: target,
                duration: 2,
                ease: 'power2.out',
                snap: { innerText: 1 },
                onUpdate: function() {
                  counter.textContent = Math.floor(Number(counter.textContent)).toLocaleString() + '+';
                }
              }
            );
          });
        },
        once: true
      });
    });

    return () => ctx.revert();
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="relative">
      {/* Grain overlay */}
      <div className="grain-overlay" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 lg:px-10 lg:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="hero-logo-block">
            <p className="font-mono-label text-white/80 mb-1">NON-PROFIT ORGANIZATION</p>
            <h3 className="text-white text-lg lg:text-xl tracking-tight">JALKI FOUNDATION</h3>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection(healthRef)} className="text-white/90 hover:text-white text-sm font-medium transition-colors">Programs</button>
            <button onClick={() => scrollToSection(approachRef)} className="text-white/90 hover:text-white text-sm font-medium transition-colors">Approach</button>
            <button onClick={() => scrollToSection(storiesRef)} className="text-white/90 hover:text-white text-sm font-medium transition-colors">Stories</button>
            <button onClick={() => scrollToSection(impactRef)} className="text-white/90 hover:text-white text-sm font-medium transition-colors">Impact</button>
            <button onClick={() => scrollToSection(contactRef)} className="text-white/90 hover:text-white text-sm font-medium transition-colors">Contact</button>
            <button 
              onClick={() => scrollToSection(contactRef)}
              className="btn-primary ml-4"
            >
              Donate
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 bg-jalki-bg z-40 p-6">
            <div className="flex flex-col gap-6">
              <button onClick={() => scrollToSection(healthRef)} className="text-jalki-text text-lg font-medium text-left">Programs</button>
              <button onClick={() => scrollToSection(approachRef)} className="text-jalki-text text-lg font-medium text-left">Approach</button>
              <button onClick={() => scrollToSection(storiesRef)} className="text-jalki-text text-lg font-medium text-left">Stories</button>
              <button onClick={() => scrollToSection(impactRef)} className="text-jalki-text text-lg font-medium text-left">Impact</button>
              <button onClick={() => scrollToSection(contactRef)} className="text-jalki-text text-lg font-medium text-left">Contact</button>
              <button 
                onClick={() => scrollToSection(contactRef)}
                className="btn-primary w-fit mt-4"
              >
                Donate
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Section 1: Hero */}
      <section ref={heroRef} className="pinned-section z-10">
        <div className="hero-bg absolute inset-0">
          <img 
            src="/hero_homecare.jpg" 
            alt="Home care" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>
        
        <div className="relative h-full flex flex-col justify-center px-6 lg:px-[6vw]">
          <div className="max-w-4xl">
            <h1 className="hero-headline text-white mb-6">
              <span className="block">CARE THAT</span>
              <span className="block">REACHES HOME</span>
            </h1>
            <p className="hero-subheadline text-white/90 text-base lg:text-lg max-w-md lg:max-w-lg leading-relaxed mb-8">
              Healthcare, livelihood support, and community programs—designed with people and delivered where they live.
            </p>
            <div className="hero-cta flex flex-wrap items-center gap-4">
              <button 
                onClick={() => scrollToSection(contactRef)}
                className="btn-primary"
              >
                Donate
              </button>
              <button 
                onClick={() => scrollToSection(healthRef)}
                className="btn-secondary text-white/90 hover:text-white"
              >
                Explore programs
              </button>
            </div>
          </div>
        </div>
        
        {/* Info Card */}
        <div className="hero-info-card info-card absolute right-4 lg:right-[4vw] top-[18vh] w-[92vw] lg:w-[34vw] hidden md:block">
          <div className="red-rule mb-4" />
          <h3 className="text-jalki-text text-xl lg:text-2xl mb-4">What we do</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-jalki-gray text-sm lg:text-base">
              <Heart className="w-5 h-5 text-jalki-red flex-shrink-0 mt-0.5" />
              Home-based healthcare & health awareness
            </li>
            <li className="flex items-start gap-3 text-jalki-gray text-sm lg:text-base">
              <GraduationCap className="w-5 h-5 text-jalki-red flex-shrink-0 mt-0.5" />
              Skill training & disability inclusion
            </li>
            <li className="flex items-start gap-3 text-jalki-gray text-sm lg:text-base">
              <Sprout className="w-5 h-5 text-jalki-red flex-shrink-0 mt-0.5" />
              Agriculture, environment & social welfare
            </li>
          </ul>
        </div>
      </section>

      {/* Section 2: Health Awareness */}
      <section ref={healthRef} className="pinned-section z-20">
        <div className="health-bg absolute inset-0">
          <img 
            src="/health_awareness.jpg" 
            alt="Health awareness" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>
        
        <div className="relative h-full flex flex-col justify-center px-6 lg:px-[6vw]">
          <div className="max-w-4xl">
            <h1 className="health-headline text-white mb-6">
              <span className="block">PREVENTION</span>
              <span className="block">STARTS WITH</span>
              <span className="block">AWARENESS</span>
            </h1>
            <p className="health-subheadline text-white/90 text-base lg:text-lg max-w-md lg:max-w-lg leading-relaxed mb-8">
              We train community health workers and run screenings, camps, and education sessions—so small issues are caught early.
            </p>
            <div className="health-cta">
              <button 
                onClick={() => scrollToSection(contactRef)}
                className="btn-primary"
              >
                View health programs
              </button>
            </div>
          </div>
        </div>
        
        <div className="health-info-card info-card absolute right-4 lg:right-[4vw] top-[18vh] w-[92vw] lg:w-[34vw] hidden md:block">
          <div className="red-rule mb-4" />
          <h3 className="text-jalki-text text-xl lg:text-2xl mb-4">Health awareness</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-jalki-gray text-sm lg:text-base">
              <Stethoscope className="w-5 h-5 text-jalki-red flex-shrink-0 mt-0.5" />
              Community screenings & camps
            </li>
            <li className="flex items-start gap-3 text-jalki-gray text-sm lg:text-base">
              <Heart className="w-5 h-5 text-jalki-red flex-shrink-0 mt-0.5" />
              Health education & nutrition
            </li>
            <li className="flex items-start gap-3 text-jalki-gray text-sm lg:text-base">
              <Users className="w-5 h-5 text-jalki-red flex-shrink-0 mt-0.5" />
              Referral networks & follow-up care
            </li>
          </ul>
        </div>
      </section>

      {/* Section 3: Livelihood & Inclusion */}
      <section ref={livelihoodRef} className="pinned-section z-30">
        <div className="livelihood-bg absolute inset-0">
          <img 
            src="/livelihood_workshop.jpg" 
            alt="Livelihood workshop" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>
        
        <div className="relative h-full flex flex-col justify-center px-6 lg:px-[6vw]">
          <div className="max-w-4xl">
            <h1 className="livelihood-headline text-white mb-6">
              <span className="block">SKILLS FOR</span>
              <span className="block">INDEPENDENCE</span>
              <span className="block">& DIGNITY</span>
            </h1>
            <p className="livelihood-subheadline text-white/90 text-base lg:text-lg max-w-md lg:max-w-lg leading-relaxed mb-8">
              Vocational training and disability support that open doors to jobs, self-employment, and community participation.
            </p>
            <div className="livelihood-cta">
              <button 
                onClick={() => scrollToSection(contactRef)}
                className="btn-primary"
              >
                Explore livelihood programs
              </button>
            </div>
          </div>
        </div>
        
        <div className="livelihood-info-card info-card absolute right-4 lg:right-[4vw] top-[18vh] w-[92vw] lg:w-[34vw] hidden md:block">
          <div className="red-rule mb-4" />
          <h3 className="text-jalki-text text-xl lg:text-2xl mb-4">Livelihood & inclusion</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-jalki-gray text-sm lg:text-base">
              <GraduationCap className="w-5 h-5 text-jalki-red flex-shrink-0 mt-0.5" />
              Vocational training & apprenticeships
            </li>
            <li className="flex items-start gap-3 text-jalki-gray text-sm lg:text-base">
              <HandHeart className="w-5 h-5 text-jalki-red flex-shrink-0 mt-0.5" />
              Disability support & accessibility
            </li>
            <li className="flex items-start gap-3 text-jalki-gray text-sm lg:text-base">
              <Users className="w-5 h-5 text-jalki-red flex-shrink-0 mt-0.5" />
              Women & child development initiatives
            </li>
          </ul>
        </div>
      </section>

      {/* Section 4: Agriculture & Environment */}
      <section ref={agricultureRef} className="pinned-section z-40">
        <div className="agriculture-bg absolute inset-0">
          <img 
            src="/agriculture_soil.jpg" 
            alt="Agriculture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>
        
        <div className="relative h-full flex flex-col justify-center px-6 lg:px-[6vw]">
          <div className="max-w-4xl">
            <h1 className="agriculture-headline text-white mb-6">
              <span className="block">GROWING</span>
              <span className="block">WITH NATURE</span>
            </h1>
            <p className="agriculture-subheadline text-white/90 text-base lg:text-lg max-w-md lg:max-w-lg leading-relaxed mb-8">
              We promote climate-smart agriculture, soil health, and green practices—protecting livelihoods and the land together.
            </p>
            <div className="agriculture-cta">
              <button 
                onClick={() => scrollToSection(contactRef)}
                className="btn-primary"
              >
                See environment programs
              </button>
            </div>
          </div>
        </div>
        
        <div className="agriculture-info-card info-card absolute right-4 lg:right-[4vw] top-[18vh] w-[92vw] lg:w-[34vw] hidden md:block">
          <div className="red-rule mb-4" />
          <h3 className="text-jalki-text text-xl lg:text-2xl mb-4">Agriculture & environment</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-jalki-gray text-sm lg:text-base">
              <Sprout className="w-5 h-5 text-jalki-red flex-shrink-0 mt-0.5" />
              Sustainable farming & soil health
            </li>
            <li className="flex items-start gap-3 text-jalki-gray text-sm lg:text-base">
              <Shield className="w-5 h-5 text-jalki-red flex-shrink-0 mt-0.5" />
              Animal husbandry support
            </li>
            <li className="flex items-start gap-3 text-jalki-gray text-sm lg:text-base">
              <TreePine className="w-5 h-5 text-jalki-red flex-shrink-0 mt-0.5" />
              Tree planting & conservation drives
            </li>
          </ul>
        </div>
      </section>

      {/* Section 5: Social Welfare */}
      <section ref={socialRef} className="pinned-section z-50">
        <div className="social-bg absolute inset-0">
          <img 
            src="/social_welfare.jpg" 
            alt="Social welfare" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>
        
        <div className="relative h-full flex flex-col justify-center px-6 lg:px-[6vw]">
          <div className="max-w-4xl">
            <h1 className="social-headline text-white mb-6">
              <span className="block">NO ONE</span>
              <span className="block">LEFT BEHIND</span>
            </h1>
            <p className="social-subheadline text-white/90 text-base lg:text-lg max-w-md lg:max-w-lg leading-relaxed mb-8">
              Food security, emergency support, and safety nets—delivered with respect and coordinated with local services.
            </p>
            <div className="social-cta">
              <button 
                onClick={() => scrollToSection(contactRef)}
                className="btn-primary"
              >
                Support social welfare
              </button>
            </div>
          </div>
        </div>
        
        <div className="social-info-card info-card absolute right-4 lg:right-[4vw] top-[18vh] w-[92vw] lg:w-[34vw] hidden md:block">
          <div className="red-rule mb-4" />
          <h3 className="text-jalki-text text-xl lg:text-2xl mb-4">Social welfare</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-jalki-gray text-sm lg:text-base">
              <Heart className="w-5 h-5 text-jalki-red flex-shrink-0 mt-0.5" />
              Food & nutrition security
            </li>
            <li className="flex items-start gap-3 text-jalki-gray text-sm lg:text-base">
              <Shield className="w-5 h-5 text-jalki-red flex-shrink-0 mt-0.5" />
              Emergency relief & rehabilitation
            </li>
            <li className="flex items-start gap-3 text-jalki-gray text-sm lg:text-base">
              <Users className="w-5 h-5 text-jalki-red flex-shrink-0 mt-0.5" />
              Safety nets & referral systems
            </li>
          </ul>
        </div>
      </section>

      {/* Section 6: Our Approach */}
      <section ref={approachRef} className="relative z-60 bg-jalki-bg py-20 lg:py-28">
        <div className="px-6 lg:px-[6vw]">
          <p className="flow-reveal font-mono-label text-jalki-gray mb-4">OUR APPROACH</p>
          <h2 className="flow-reveal text-jalki-text mb-12 lg:mb-16 max-w-2xl">
            We listen. We partner. We deliver.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="flow-reveal bg-white/80 rounded-3xl p-6 lg:p-8 shadow-card">
              <div className="red-rule mb-6" />
              <h3 className="text-jalki-text text-lg lg:text-xl mb-3">Community-first</h3>
              <p className="text-jalki-gray text-sm lg:text-base leading-relaxed">
                Programs are shaped with the people we serve. We listen to community needs and co-design solutions that work locally.
              </p>
            </div>
            
            <div className="flow-reveal bg-white/80 rounded-3xl p-6 lg:p-8 shadow-card">
              <div className="red-rule mb-6" />
              <h3 className="text-jalki-text text-lg lg:text-xl mb-3">Local partners</h3>
              <p className="text-jalki-gray text-sm lg:text-base leading-relaxed">
                We work with clinics, schools, and field teams. Collaboration with local institutions ensures sustainable impact.
              </p>
            </div>
            
            <div className="flow-reveal bg-white/80 rounded-3xl p-6 lg:p-8 shadow-card">
              <div className="red-rule mb-6" />
              <h3 className="text-jalki-text text-lg lg:text-xl mb-3">Sustainable design</h3>
              <p className="text-jalki-gray text-sm lg:text-base leading-relaxed">
                Solutions built to last beyond a single project. We focus on long-term outcomes and community ownership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Stories */}
      <section ref={storiesRef} className="relative z-70 bg-jalki-bg py-20 lg:py-28">
        <div className="px-6 lg:px-[6vw]">
          <h2 className="flow-reveal text-jalki-text mb-12 lg:mb-16">
            Stories from the community
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="flow-reveal bg-white/80 rounded-3xl overflow-hidden shadow-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/story_portrait_1.jpg" 
                  alt="Community member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 lg:p-8">
                <p className="text-jalki-text text-base lg:text-lg italic mb-4">
                  "I learned skills I never thought I could—and now I support my family."
                </p>
                <p className="text-jalki-gray text-sm">— Rina K., Trainee</p>
              </div>
            </div>
            
            <div className="flow-reveal bg-white/80 rounded-3xl overflow-hidden shadow-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/story_portrait_2.jpg" 
                  alt="Community member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 lg:p-8">
                <p className="text-jalki-text text-base lg:text-lg italic mb-4">
                  "The health camp caught my symptoms early. I got treatment in time."
                </p>
                <p className="text-jalki-gray text-sm">— Biren S., Community member</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Impact */}
      <section ref={impactRef} className="relative z-80 bg-jalki-teal py-20 lg:py-28">
        <div className="px-6 lg:px-[6vw]">
          <h2 className="flow-reveal text-white mb-12 lg:mb-16">
            Impact at a glance
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="flow-reveal text-center lg:text-left">
              <p className="counter text-white text-4xl lg:text-5xl font-heading font-bold mb-2" data-target="120000">0+</p>
              <p className="text-white/85 text-sm lg:text-base">People reached</p>
            </div>
            
            <div className="flow-reveal text-center lg:text-left">
              <p className="counter text-white text-4xl lg:text-5xl font-heading font-bold mb-2" data-target="340">0+</p>
              <p className="text-white/85 text-sm lg:text-base">Health camps</p>
            </div>
            
            <div className="flow-reveal text-center lg:text-left">
              <p className="counter text-white text-4xl lg:text-5xl font-heading font-bold mb-2" data-target="8500">0+</p>
              <p className="text-white/85 text-sm lg:text-base">Trainings completed</p>
            </div>
            
            <div className="flow-reveal text-center lg:text-left">
              <p className="counter text-white text-4xl lg:text-5xl font-heading font-bold mb-2" data-target="180">0+</p>
              <p className="text-white/85 text-sm lg:text-base">Villages covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Contact */}
      <section ref={contactRef} className="relative z-90 bg-jalki-bg py-20 lg:py-28">
        <div className="px-6 lg:px-[6vw]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="flow-reveal text-jalki-text mb-6">
                Be part of the work.
              </h2>
              <p className="flow-reveal text-jalki-gray text-base lg:text-lg leading-relaxed mb-8">
                Donate, volunteer, or partner with us to bring healthcare, skills, and support to more communities.
              </p>
              
              <div className="flow-reveal space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-jalki-red" />
                  <span className="text-jalki-text">jalkifoundation@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-jalki-red" />
                  <span className="text-jalki-text">+91 70051 76498</span>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-jalki-red flex-shrink-0 mt-0.5" />
                  <span className="text-jalki-text">New Lambulane, Near Vaiphei Baptist Church,<br />Imphal East-795001</span>
                </div>
              </div>
              
              <div className="flow-reveal flex flex-wrap gap-4">
                <button className="btn-primary flex items-center gap-2">
                  Donate <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-6 py-3 border-2 border-jalki-text text-jalki-text rounded-full font-medium text-sm hover:bg-jalki-text hover:text-white transition-colors">
                  Volunteer
                </button>
              </div>
            </div>
            
            <div className="flow-reveal bg-white/80 rounded-3xl p-6 lg:p-8 shadow-card">
              <h3 className="text-jalki-text text-lg lg:text-xl mb-6">Send us a message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-jalki-gray text-sm mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-jalki-teal focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-jalki-gray text-sm mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-jalki-teal focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-jalki-gray text-sm mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-jalki-teal focus:outline-none transition-colors resize-none"
                    placeholder="How would you like to help?"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-100 bg-jalki-text py-12 lg:py-16">
        <div className="px-6 lg:px-[6vw]">
          <div className="grid md:grid-cols-4 gap-8 lg:gap-12 mb-12">
            <div className="md:col-span-2">
              <p className="font-mono-label text-white/60 mb-2">NON-PROFIT ORGANIZATION</p>
              <h3 className="text-white text-xl lg:text-2xl mb-4">JALKI FOUNDATION</h3>
              <p className="text-white/70 text-sm leading-relaxed max-w-md">
                Bringing healthcare, skills, and support to communities across Manipur. 
                Together, we build a more inclusive and sustainable future.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Programs</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection(healthRef)} className="text-white/70 text-sm hover:text-white transition-colors">Healthcare</button></li>
                <li><button onClick={() => scrollToSection(livelihoodRef)} className="text-white/70 text-sm hover:text-white transition-colors">Livelihood</button></li>
                <li><button onClick={() => scrollToSection(agricultureRef)} className="text-white/70 text-sm hover:text-white transition-colors">Agriculture</button></li>
                <li><button onClick={() => scrollToSection(socialRef)} className="text-white/70 text-sm hover:text-white transition-colors">Social Welfare</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection(approachRef)} className="text-white/70 text-sm hover:text-white transition-colors">Our Approach</button></li>
                <li><button onClick={() => scrollToSection(storiesRef)} className="text-white/70 text-sm hover:text-white transition-colors">Stories</button></li>
                <li><button onClick={() => scrollToSection(impactRef)} className="text-white/70 text-sm hover:text-white transition-colors">Impact</button></li>
                <li><button onClick={() => scrollToSection(contactRef)} className="text-white/70 text-sm hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © 2026 JALKI FOUNDATION. All rights reserved.
            </p>
            <p className="text-white/50 text-sm">
              Registered NGO | Imphal East, Manipur
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
