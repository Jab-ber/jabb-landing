import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { 
  Menu, X, ChevronRight, CheckCircle, Users, TrendingUp, 
  FileText, BarChart3, Star, Clock, Shield, Zap, Eye,
  MessageSquare, Mail, Phone, MapPin
} from 'lucide-react'
import './App.css'
import heroImage from './assets/HxTP5rOT7HZ4.jpg'
import serviceImage from './assets/HKmznw7Czltd.jpg'
import dashboardImage from './assets/FG7KdDrIrdbx.webp'

function App() {
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
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                JABB
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-foreground/80 hover:text-foreground transition">
                À propos
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-foreground/80 hover:text-foreground transition">
                Comment ça marche
              </button>
              <button onClick={() => scrollToSection('services')} className="text-foreground/80 hover:text-foreground transition">
                Services
              </button>
              <button onClick={() => scrollToSection('benefits')} className="text-foreground/80 hover:text-foreground transition">
                Avantages
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground/80 hover:text-foreground transition">
                Contact
              </button>
              <Button onClick={() => scrollToSection('contact')}>
                Demander une démo
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
                À propos
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left py-2">
                Comment ça marche
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2">
                Services
              </button>
              <button onClick={() => scrollToSection('benefits')} className="block w-full text-left py-2">
                Avantages
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2">
                Contact
              </button>
              <Button onClick={() => scrollToSection('contact')} className="w-full">
                Demander une démo
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
                Transformez votre{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  expérience client
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                JABB vous aide à améliorer la qualité de service de votre restaurant grâce à des évaluations 
                professionnelles par des clients mystère certifiés.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => scrollToSection('contact')} className="group">
                  Commencer maintenant
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('how-it-works')}>
                  Découvrir comment
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-muted-foreground">Missions réalisées</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction client</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-muted-foreground">Restaurants partenaires</div>
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
                  <span className="text-sm text-muted-foreground">Score moyen</span>
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
            <h2 className="text-4xl font-bold mb-4">Qu'est-ce que JABB ?</h2>
            <p className="text-xl text-muted-foreground">
              JABB (Just Another Better Business) est un service de client mystère spécialisé dans l'évaluation 
              de l'expérience client dans les restaurants. Nous vous aidons à identifier les points d'amélioration 
              et à optimiser votre service pour satisfaire vos clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <Eye className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold">Évaluation incognito</h3>
                <p className="text-muted-foreground">
                  Nos évaluateurs certifiés visitent votre restaurant comme des clients ordinaires pour une 
                  évaluation objective et authentique.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <FileText className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold">Rapports détaillés</h3>
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
                <h3 className="text-xl font-bold">Dashboard interactif</h3>
                <p className="text-muted-foreground">
                  Visualisez vos performances en temps réel avec notre dashboard intuitif et suivez votre progression.
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
            <h2 className="text-4xl font-bold mb-4">Comment ça marche ?</h2>
            <p className="text-xl text-muted-foreground">
              Un processus simple et efficace en 4 étapes pour améliorer votre service
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Inscription',
                description: 'Créez votre compte et choisissez votre formule adaptée à vos besoins',
                icon: Users
              },
              {
                step: '02',
                title: 'Mission',
                description: 'Un JABBer certifié visite votre restaurant et évalue tous les aspects du service',
                icon: Eye
              },
              {
                step: '03',
                title: 'Analyse',
                description: 'Recevez un rapport détaillé avec scores, observations et recommandations',
                icon: BarChart3
              },
              {
                step: '04',
                title: 'Amélioration',
                description: 'Mettez en place les actions correctives et suivez vos progrès',
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
            <h2 className="text-4xl font-bold mb-4">Nos Services</h2>
            <p className="text-xl text-muted-foreground">
              Des solutions complètes pour tous vos besoins d'évaluation
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
                    <h3 className="text-lg font-bold mb-2">Évaluation complète</h3>
                    <p className="text-muted-foreground">
                      Analyse de tous les aspects : accueil, service, qualité des plats, propreté, ambiance
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
                    <h3 className="text-lg font-bold mb-2">Chronométrage précis</h3>
                    <p className="text-muted-foreground">
                      Mesure des délais de service pour identifier les goulots d'étranglement
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
                    <h3 className="text-lg font-bold mb-2">Rapports personnalisés</h3>
                    <p className="text-muted-foreground">
                      Documents PDF détaillés avec analyses, graphiques et recommandations actionnables
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
                    <h3 className="text-lg font-bold mb-2">Suivi de performance</h3>
                    <p className="text-muted-foreground">
                      Dashboard en temps réel pour suivre l'évolution de vos scores et identifier les tendances
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
                  <div className="text-sm text-muted-foreground">Score Overall moyen</div>
                  <div className="text-3xl font-bold text-blue-600">3.8/5</div>
                  <div className="text-sm text-green-600 flex items-center gap-1">
                    <TrendingUp size={16} />
                    +0.5 vs mois dernier
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
            <h2 className="text-4xl font-bold mb-4">Pourquoi choisir JABB ?</h2>
            <p className="text-xl text-muted-foreground">
              Des avantages concrets pour votre restaurant
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Évaluateurs certifiés',
                description: 'Tous nos JABBers sont formés et certifiés pour garantir des évaluations objectives et professionnelles'
              },
              {
                icon: Zap,
                title: 'Résultats rapides',
                description: 'Recevez votre rapport détaillé dans les 48h suivant la mission'
              },
              {
                icon: BarChart3,
                title: 'Analyses approfondies',
                description: 'Plus de 150 points de données collectés par mission pour une vue complète'
              },
              {
                icon: TrendingUp,
                title: 'ROI mesurable',
                description: 'Augmentation moyenne de 25% de la satisfaction client après 6 mois'
              },
              {
                icon: Users,
                title: 'Support dédié',
                description: 'Une équipe à votre écoute pour vous accompagner dans vos améliorations'
              },
              {
                icon: Star,
                title: 'Confidentialité garantie',
                description: 'Vos données et rapports restent strictement confidentiels'
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
            <h2 className="text-4xl font-bold mb-4">Dashboard Intuitif</h2>
            <p className="text-xl text-muted-foreground">
              Visualisez toutes vos données en un coup d'œil
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
                <div className="text-sm text-muted-foreground">Dimensions évaluées</div>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent className="p-0 space-y-2">
                <div className="text-3xl font-bold text-blue-600">150+</div>
                <div className="text-sm text-muted-foreground">Points de données</div>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent className="p-0 space-y-2">
                <div className="text-3xl font-bold text-blue-600">24h</div>
                <div className="text-sm text-muted-foreground">Délai de rapport</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Ce que disent nos clients</h2>
            <p className="text-xl text-muted-foreground">
              Ils nous font confiance pour améliorer leur service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Ahmed Benali',
                role: 'Directeur, Le Médina',
                content: 'JABB nous a permis d\'identifier des problèmes que nous ne soupçonnions pas. Les rapports sont détaillés et les recommandations très actionnables. Notre score de satisfaction a augmenté de 30% en 3 mois !',
                rating: 5
              },
              {
                name: 'Fatima Zahra',
                role: 'Gérante, Café Moderne',
                content: 'Le service est professionnel et discret. Les évaluateurs sont vraiment incognito et les analyses sont pertinentes. C\'est un investissement qui vaut vraiment le coup.',
                rating: 5
              },
              {
                name: 'Karim Alaoui',
                role: 'Chef, Restaurant Gastronomique',
                content: 'Grâce à JABB, nous avons pu standardiser nos procédures et former notre équipe plus efficacement. Le dashboard est très pratique pour suivre nos progrès.',
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
              <h2 className="text-4xl font-bold">Prêt à améliorer votre service ?</h2>
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
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">contact@jabb.ma</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <Phone className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <div className="font-medium">Téléphone</div>
                    <div className="text-muted-foreground">+212 5XX-XXXXXX</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <MapPin className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <div className="font-medium">Adresse</div>
                    <div className="text-muted-foreground">Casablanca, Maroc</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nom complet</label>
                  <Input placeholder="Votre nom" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="votre@email.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Téléphone</label>
                  <Input type="tel" placeholder="+212 XXX-XXXXXX" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Nom du restaurant</label>
                  <Input placeholder="Le nom de votre restaurant" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Parlez-nous de vos besoins..." 
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Envoyer la demande
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
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                JABB
              </div>
              <p className="text-sm text-muted-foreground">
                Just Another Better Business - Votre partenaire pour l'excellence du service client.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Client Mystère</a></li>
                <li><a href="#" className="hover:text-foreground transition">Rapports détaillés</a></li>
                <li><a href="#" className="hover:text-foreground transition">Dashboard</a></li>
                <li><a href="#" className="hover:text-foreground transition">Formation</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Entreprise</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">À propos</a></li>
                <li><a href="#" className="hover:text-foreground transition">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition">Carrières</a></li>
                <li><a href="#" className="hover:text-foreground transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Légal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Mentions légales</a></li>
                <li><a href="#" className="hover:text-foreground transition">Confidentialité</a></li>
                <li><a href="#" className="hover:text-foreground transition">CGU</a></li>
                <li><a href="#" className="hover:text-foreground transition">Cookies</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 JABB. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

