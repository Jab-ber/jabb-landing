import { useState, useEffect } from 'react'
import { useLanguage } from './contexts/LanguageContext.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { 
  Menu, X, ChevronRight, CheckCircle, Users, TrendingUp, 
  FileText, BarChart3, Star, Clock, Shield, Zap, Eye,
  MessageSquare, Mail, Phone, MapPin, Languages
} from 'lucide-react'
import './App.css'
import heroImage from './assets/HxTP5rOT7HZ4.jpg'
import serviceImage from './assets/HKmznw7Czltd.jpg'
import dashboardImage from './assets/FG7KdDrIrdbx.webp'
import jabbLogo from './assets/jabb-logo.svg'

function App() {
  const { language, toggleLanguage, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center gap-3">
                <img src={jabbLogo} alt="JABB Logo" className="h-10" />
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">JABB</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-foreground/80 hover:text-foreground transition">
                {t('nav.about')}
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-foreground/80 hover:text-foreground transition">
                {t('nav.howItWorks')}
              </button>
              <button onClick={() => scrollToSection('services')} className="text-foreground/80 hover:text-foreground transition">
                {t('nav.services')}
              </button>
              <button onClick={() => scrollToSection('benefits')} className="text-foreground/80 hover:text-foreground transition">
                {t('nav.benefits')}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground/80 hover:text-foreground transition">
                {t('nav.contact')}
              </button>
              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition"
                title="Change language"
              >
                <Languages size={20} />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>
              <Button onClick={() => scrollToSection('contact')}>
                {t('nav.requestDemo')}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2">
                {t('nav.about')}
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left py-2">
                {t('nav.howItWorks')}
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2">
                {t('nav.services')}
              </button>
              <button onClick={() => scrollToSection('benefits')} className="block w-full text-left py-2">
                {t('nav.benefits')}
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2">
                {t('nav.contact')}
              </button>
              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-2 w-full text-left py-2"
              >
                <Languages size={20} />
                <span>{language === 'fr' ? 'English' : 'Français'}</span>
              </button>
              <Button onClick={() => scrollToSection('contact')} className="w-full">
                {t('nav.requestDemo')}
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                {t('hero.title')}{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {t('hero.titleHighlight')}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => scrollToSection('contact')} className="group">
                  {t('hero.startNow')}
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('how-it-works')}>
                  {t('hero.discover')}
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-muted-foreground">{t('hero.missions')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">98%</div>
                  <div className="text-sm text-muted-foreground">{t('hero.satisfaction')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-muted-foreground">{t('hero.partners')}</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in-up animation-delay-200">
              <img 
                src={heroImage} 
                alt="Restaurant service" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-card p-4 rounded-xl shadow-xl">
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-500 fill-yellow-500" size={20} />
                  <span className="font-bold">4.8/5</span>
                  <span className="text-sm text-muted-foreground">{t('hero.avgScore')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('about.title')}</h2>
            <p className="text-xl text-muted-foreground">
              {t('about.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <Eye className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold">{t('about.card1Title')}</h3>
                <p className="text-muted-foreground">
                  {t('about.card1Text')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <FileText className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold">{t('about.card2Title')}</h3>
                <p className="text-muted-foreground">
                  Recevez des rapports complets avec analyses, recommandations et plan d'actions pour améliorer 
                  votre service.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <BarChart3 className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold">{t('about.card3Title')}</h3>
                <p className="text-muted-foreground">
                  {t('about.card3Text')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('howItWorks.title')}</h2>
            <p className="text-xl text-muted-foreground">
              {t('howItWorks.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: t('howItWorks.step1Title'),
                description: t('howItWorks.step1Text'),
                icon: Users
              },
              {
                step: '02',
                title: t('howItWorks.step2Title'),
                description: t('howItWorks.step2Text'),
                icon: Eye
              },
              {
                step: '03',
                title: t('howItWorks.step3Title'),
                description: t('howItWorks.step3Text'),
                icon: BarChart3
              },
              {
                step: '04',
                title: t('howItWorks.step4Title'),
                description: t('howItWorks.step4Text'),
                icon: TrendingUp
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                    {item.step}
                  </div>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto">
                    <item.icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                {index < 3 && (
                  <ChevronRight 
                    className="hidden md:block absolute top-8 -right-4 text-blue-600" 
                    size={24} 
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('services.title')}</h2>
            <p className="text-xl text-muted-foreground">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{t('services.service1Title')}</h3>
                    <p className="text-muted-foreground">
                      {t('howItWorks.step3Title')} de tous les aspects : accueil, service, qualité des plats, propreté, ambiance
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{t('services.service2Title')}</h3>
                    <p className="text-muted-foreground">
                      {t('services.service2Text')}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{t('services.service3Title')}</h3>
                    <p className="text-muted-foreground">
                      {t('services.service3Text')}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{t('services.service4Title')}</h3>
                    <p className="text-muted-foreground">
                      {t('services.service4Text')}
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="relative">
              <img 
                src={serviceImage} 
                alt="Service restaurant" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-card p-6 rounded-xl shadow-xl max-w-xs">
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">{t('services.scoreLabel')}</div>
                  <div className="text-3xl font-bold text-blue-600">3.8/5</div>
                  <div className="text-sm text-green-600 flex items-center gap-1">
                    <TrendingUp size={16} />
                    +0.5 {t('services.improvement')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('benefits.title')}</h2>
            <p className="text-xl text-muted-foreground">
              {t('benefits.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: t('benefits.benefit1Title'),
                description: t('benefits.benefit1Text')
              },
              {
                icon: Zap,
                title: t('benefits.benefit2Title'),
                description: t('benefits.benefit2Text')
              },
              {
                icon: BarChart3,
                title: t('howItWorks.step3Title') + 's approfondies',
                description: t('benefits.benefit3Text')
              },
              {
                icon: TrendingUp,
                title: t('benefits.benefit4Title'),
                description: t('benefits.benefit4Text')
              },
              {
                icon: Users,
                title: t('benefits.benefit5Title'),
                description: t('benefits.benefit5Text')
              },
              {
                icon: Star,
                title: t('benefits.benefit6Title'),
                description: t('benefits.benefit6Text')
              }
            ].map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0 space-y-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <benefit.icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('dashboard.title')}</h2>
            <p className="text-xl text-muted-foreground">
              {t('dashboard.subtitle')}
            </p>
          </div>

          <div className="relative">
            <img 
              src={dashboardImage} 
              alt="Dashboard JABB" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover border-4 border-border"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-2xl" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="p-6 text-center">
              <CardContent className="p-0 space-y-2">
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-muted-foreground">{t('dashboard.stat1')}</div>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent className="p-0 space-y-2">
                <div className="text-3xl font-bold text-blue-600">150+</div>
                <div className="text-sm text-muted-foreground">{t('dashboard.stat2')}</div>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent className="p-0 space-y-2">
                <div className="text-3xl font-bold text-blue-600">24h</div>
                <div className="text-sm text-muted-foreground">{t('dashboard.stat3')}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('testimonials.title')}</h2>
            <p className="text-xl text-muted-foreground">
              {t('testimonials.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: t('testimonials.testimonial1Name'),
                role: t('testimonials.testimonial1Role'),
                content: 'JABB nous a permis d\'identifier des problèmes que nous ne soupçonnions pas. Les rapports sont détaillés et les recommandations très actionnables. Notre score de satisfaction a augmenté de 30% en 3 mois !',
                rating: 5
              },
              {
                name: t('testimonials.testimonial2Name'),
                role: t('testimonials.testimonial2Role'),
                content: 'Le service est professionnel et discret. Les évaluateurs sont vraiment incognito et les analyses sont pertinentes. C\'est un investissement qui vaut vraiment le coup.',
                rating: 5
              },
              {
                name: t('testimonials.testimonial3Name'),
                role: t('testimonials.testimonial3Role'),
                content: t('testimonials.testimonial3'),
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-500 fill-yellow-500" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">{t('contact.title')}</h2>
              <p className="text-xl text-muted-foreground">
                Contactez-nous dès aujourd'hui pour une démonstration gratuite et découvrez comment JABB peut 
                transformer votre expérience client.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <Mail className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <div className="font-medium">{t('contact.email')}</div>
                    <div className="text-muted-foreground">contact@jabb.ma</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <Phone className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <div className="font-medium">{t('contact.phone')}</div>
                    <div className="text-muted-foreground">+212 5XX-XXXXXX</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <MapPin className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <div className="font-medium">{t('contact.address')}</div>
                    <div className="text-muted-foreground">{t('contact.addressValue')}</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t('contact.formName')}</label>
                  <Input placeholder={t('contact.formNamePlaceholder')} />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">{t('contact.email')}</label>
                  <Input type="email" placeholder={t('contact.formEmailPlaceholder')} />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">{t('contact.phone')}</label>
                  <Input type="tel" placeholder={t('contact.formPhonePlaceholder')} />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">{t('contact.formRestaurant')}</label>
                  <Input placeholder={t('contact.formRestaurantPlaceholder')} />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">{t('contact.formMessage')}</label>
                  <Textarea 
                    placeholder={t('contact.formMessagePlaceholder')} 
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  {t('contact.formSubmit')}
                  <ChevronRight className="ml-2" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={jabbLogo} alt="JABB Logo" className="h-8" />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">JABB</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Just Another Better Business - {t('footer.tagline')}
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">{t('footer.servicesTitle')}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">{t('footer.service1')}</a></li>
                <li><a href="#" className="hover:text-foreground transition">{t('about.card2Title')}</a></li>
                <li><a href="#" className="hover:text-foreground transition">Dashboard</a></li>
                <li><a href="#" className="hover:text-foreground transition">{t('footer.service4')}</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">{t('footer.companyTitle')}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">{t('footer.company1')}</a></li>
                <li><a href="#" className="hover:text-foreground transition">{t('footer.company2')}</a></li>
                <li><a href="#" className="hover:text-foreground transition">{t('footer.company3')}</a></li>
                <li><a href="#" className="hover:text-foreground transition">{t('nav.contact')}</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">{t('footer.legalTitle')}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">{t('footer.legal1')}</a></li>
                <li><a href="#" className="hover:text-foreground transition">{t('footer.legal2')}</a></li>
                <li><a href="#" className="hover:text-foreground transition">{t('footer.legal3')}</a></li>
                <li><a href="#" className="hover:text-foreground transition">{t('footer.legal4')}</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

