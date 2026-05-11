import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MessageCircle, ExternalLink, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';
import { useToast } from '@/hooks/use-toast';
import { submitContactSubmission } from '@/lib/form-submissions';

const ContactPage = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    bericht: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Pre-fill message from chat widget
  useEffect(() => {
    const message = searchParams.get('message');
    if (message) {
      setFormData(prev => ({ ...prev, bericht: message }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitContactSubmission({
        name: formData.naam,
        email: formData.email,
        message: formData.bericht,
        language,
      });

      setIsSubmitted(true);
      toast({
        title: language === 'nl' ? 'Bericht verzonden' : 'Message sent',
        description:
          language === 'nl'
            ? 'Uw bericht is succesvol opgeslagen en doorgestuurd.'
            : 'Your message was saved and forwarded successfully.',
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: language === 'nl' ? 'Verzenden mislukt' : 'Sending failed',
        description:
          error instanceof Error
            ? error.message
            : language === 'nl'
              ? 'Er ging iets mis. Probeer opnieuw.'
              : 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappNumber = '31645457394';
  const phoneNumber = '+31 6 45457394';
  const emailAddress = 'info@web-maat.nl';

  const contactMethods = [
    {
      icon: Phone,
      title: language === 'nl' ? 'Bel ons' : 'Call us',
      value: phoneNumber,
      action: language === 'nl' ? 'Bel nu' : 'Call now',
      href: `tel:${phoneNumber.replace(/\s/g, '')}`,
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: phoneNumber,
      action: language === 'nl' ? 'WhatsApp openen' : 'Open WhatsApp',
      href: `https://wa.me/${whatsappNumber}`,
      external: true,
    },
    {
      icon: Mail,
      title: language === 'nl' ? 'E-mail' : 'Email',
      value: emailAddress,
      action: language === 'nl' ? 'Mail sturen' : 'Send email',
      href: `mailto:${emailAddress}`,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Header />
      <main className="pt-20">
        <section className="px-6 py-8 md:px-10 md:py-10">
          <motion.div 
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div variants={fadeInUp}>
                <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.05)] md:p-7">
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#5d7fc8]">
                    {language === 'nl' ? 'Direct contact' : 'Direct contact'}
                  </p>
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                    {language === 'nl' ? 'Neem contact met ons op' : 'Get in touch with us'}
                  </h1>
                  <p className="mt-2 text-sm text-slate-500">
                    {language === 'nl'
                      ? 'Kies de snelste route of stuur direct een bericht. We reageren doorgaans binnen 24 uur.'
                      : 'Choose the fastest route or send a direct message. We usually respond within 24 hours.'}
                  </p>

                  <div className="mt-6 space-y-4">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="border border-slate-200 bg-[#fbfcff] transition-all hover:shadow-lg">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-[#29458e] rounded-xl flex items-center justify-center flex-shrink-0">
                              <method.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold text-slate-900">{method.title}</h3>
                              <p className="text-slate-600 text-sm">{method.value}</p>
                            </div>
                            <Button asChild className="bg-[#29458e] hover:bg-[#243d80] text-white">
                              <a
                                href={method.href}
                                target={method.external ? '_blank' : undefined}
                                rel={method.external ? 'noopener noreferrer' : undefined}
                              >
                                {method.action}
                                {method.external && <ExternalLink className="ml-2 w-3 h-3" />}
                              </a>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.05)] rounded-[28px]">
                  <CardContent className="p-5 md:p-7">
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#5d7fc8]">
                      {language === 'nl' ? 'Contactformulier' : 'Contact form'}
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                      {language === 'nl' ? 'Stuur ons een bericht' : 'Send us a message'}
                    </h2>
                    <p className="mt-2 text-sm text-slate-500">
                      {language === 'nl'
                        ? 'Vertel kort waar u hulp bij nodig heeft. We nemen snel contact met u op.'
                        : 'Briefly tell us what you need help with. We will contact you quickly.'}
                    </p>
                    
                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-[#29458e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Send className="w-8 h-8 text-[#29458e]" />
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2">
                          {language === 'nl' ? 'Bericht verzonden!' : 'Message sent!'}
                        </h3>
                        <p className="text-slate-600 text-sm">
                          {language === 'nl'
                            ? 'Bedankt voor uw bericht. Wij nemen zo snel mogelijk contact met u op.'
                            : 'Thank you for your message. We\'ll get back to you as soon as possible.'}
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="naam" className="text-slate-900 font-semibold">
                            {language === 'nl' ? 'Naam' : 'Name'} *
                          </Label>
                          <Input
                            id="naam"
                            required
                            value={formData.naam}
                            onChange={(e) => setFormData(prev => ({ ...prev, naam: e.target.value }))}
                            placeholder={language === 'nl' ? 'Uw naam' : 'Your name'}
                            className="h-12 border-slate-200"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-slate-900 font-semibold">
                            {language === 'nl' ? 'E-mailadres' : 'Email address'} *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            placeholder={language === 'nl' ? 'uw@email.nl' : 'your@email.com'}
                            className="h-12 border-slate-200"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bericht" className="text-slate-900 font-semibold">
                            {language === 'nl' ? 'Bericht' : 'Message'} *
                          </Label>
                          <Textarea
                            id="bericht"
                            required
                            value={formData.bericht}
                            onChange={(e) => setFormData(prev => ({ ...prev, bericht: e.target.value }))}
                            placeholder={language === 'nl' ? 'Uw vraag of bericht...' : 'Your question or message...'}
                            rows={5}
                            className="resize-none border-slate-200"
                          />
                        </div>
                        <Button 
                          type="submit" 
                          className="w-full bg-[#29458e] hover:bg-[#243d80] text-white h-12 font-bold"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (language === 'nl' ? 'Versturen...' : 'Sending...') : (language === 'nl' ? 'Verstuur bericht' : 'Send message')}
                          <Send className="ml-2 w-4 h-4" />
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg text-center border border-blue-200">
                  <p className="text-sm text-slate-700">
                    {language === 'nl' 
                      ? 'Liever direct een offerte aanvragen? '
                      : 'Prefer to request a quote directly? '}
                    <Link to="/quote" className="text-[#29458e] hover:underline font-bold">
                      {language === 'nl' ? 'Ga naar het offerteformulier' : 'Go to the quote form'}
                    </Link>
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Section Divider */}
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="section-divider" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
