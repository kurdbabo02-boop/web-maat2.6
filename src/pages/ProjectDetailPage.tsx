import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { getProjectById, getNextProject, getPrevProject } from '@/data/projects';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowLeft, ArrowRight, BarChart3, CheckCircle2, ExternalLink, Sparkles, Target } from 'lucide-react';

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  const { toast } = useToast();
  const project = getProjectById(id || '');
  const nextProject = getNextProject(id || '');
  const prevProject = getPrevProject(id || '');
  const heroImage = project?.screenshot || project?.gallery[0] || project?.image;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p>Project niet gevonden</p>
      </div>
    );
  }

  if (id && project.id !== id) {
    return <Navigate to={`/portfolio/${project.id}`} replace />;
  }

  const packageChoice = project.packageChoice ?? {
    name: 'Groei',
    summary: {
      nl: 'Een passende keuze voor een website met duidelijke contentstructuur, servicepagina’s en conversiefocus.',
      en: 'A fitting choice for a website with clear content structure, service pages and conversion focus.',
    },
    features: [
      { nl: 'Heldere dienststructuur', en: 'Clear service structure' },
      { nl: 'Sterke contactroutes', en: 'Strong contact routes' },
      { nl: 'Basis SEO en performance', en: 'Base SEO and performance' },
    ],
  };

  const detailLabel =
    language === 'nl' ? 'Vergelijkbare website' : 'Comparable website';
  const detailTitle =
    language === 'nl'
      ? 'Een vergelijkbare website laten maken?'
      : 'Want a comparable website built?';
  const detailSubtitle =
    language === 'nl'
      ? 'Vraag een offerte aan en ontvang binnen 24 uur een reactie.'
      : 'Request a quote and receive a response within 24 hours.';
  const whatsappNumber = '31645457394';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        variant: 'destructive',
        title: language === 'nl' ? 'Formulier niet compleet' : 'Form incomplete',
        description:
          language === 'nl'
            ? 'Vul naam, telefoon en e-mail in.'
            : 'Please complete name, phone and email.',
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const whatsappMessage =
        language === 'nl'
          ? [
              `Nieuwe aanvraag voor een vergelijkbare website als ${project.title}`,
              '',
              `Naam: ${formData.name}`,
              `Telefoon: ${formData.phone}`,
              `E-mail: ${formData.email}`,
              `Project: ${project.title}`,
              `Gekozen pakket: ${packageChoice.name}`,
              `Voorbeeld website: ${project.websiteUrl || 'n.v.t.'}`,
              '',
              `Bericht: ${formData.message || 'Geen extra bericht ingevuld.'}`,
            ].join('\n')
          : [
              `New request for a website similar to ${project.title}`,
              '',
              `Name: ${formData.name}`,
              `Phone: ${formData.phone}`,
              `Email: ${formData.email}`,
              `Project: ${project.title}`,
              `Chosen package: ${packageChoice.name}`,
              `Reference website: ${project.websiteUrl || 'n/a'}`,
              '',
              `Message: ${formData.message || 'No extra message provided.'}`,
            ].join('\n');

      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
        '_blank',
        'noopener,noreferrer'
      );
    } catch (error) {
      toast({
        variant: 'destructive',
        title: language === 'nl' ? 'Verzenden mislukt' : 'Submission failed',
        description:
          error instanceof Error
            ? error.message
            : language === 'nl'
              ? 'Er ging iets mis bij het verzenden.'
              : 'Something went wrong while submitting.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Header />
      <main className="pt-20">
        <section className="px-6 py-8 md:px-10 md:py-10">
          <div className="mx-auto max-w-6xl">
            <Link
              to="/portfolio"
              className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-[#29458e] hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              {language === 'nl' ? 'Terug naar portfolio' : 'Back to portfolio'}
            </Link>

            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_18px_40px_rgba(15,23,42,0.05)] md:p-5">
                <div className="overflow-hidden rounded-[22px] bg-[#f5f7fb] p-4 md:p-6">
                  <img
                    src={heroImage}
                    alt={project.title}
                    className="h-auto w-full object-contain"
                    onError={(event) => {
                      event.currentTarget.src = project.image;
                    }}
                  />
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  {project.websiteUrl && (
                    <Button asChild variant="outline" className="rounded-full border-[#c7d4f1] text-[#29458e] hover:bg-[#eef3ff]">
                      <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                        {language === 'nl' ? 'Bekijk deze website' : 'View this website'}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  <span className="text-sm text-slate-500">{project.category[language]}</span>
                </div>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.05)] md:p-7">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#5d7fc8]">
                  {detailLabel}
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                  {detailTitle}
                </h1>
                <p className="mt-2 text-sm text-slate-500">
                  {detailSubtitle}
                </p>

                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="detail-name">{language === 'nl' ? 'Naam' : 'Name'}</Label>
                      <Input
                        id="detail-name"
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        placeholder={language === 'nl' ? 'Uw naam' : 'Your name'}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="detail-phone">{language === 'nl' ? 'Telefoon' : 'Phone'}</Label>
                      <Input
                        id="detail-phone"
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        placeholder="+31645457394"
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="detail-email">{language === 'nl' ? 'E-mail' : 'E-mail'}</Label>
                    <Input
                      id="detail-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder={language === 'nl' ? 'uw@email.nl' : 'you@email.com'}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="detail-message">{language === 'nl' ? 'Bericht' : 'Message'}</Label>
                    <Textarea
                      id="detail-message"
                      value={formData.message}
                      onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                      placeholder={
                        language === 'nl'
                          ? `Vertel kort wat u nodig heeft voor een website zoals ${project.title}...`
                          : `Briefly tell us what you need for a website like ${project.title}...`
                      }
                      className="mt-2 min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[#29458e] text-white hover:bg-[#243d80]" disabled={isSubmitting}>
                    {isSubmitting
                      ? language === 'nl'
                        ? 'Bezig met verzenden...'
                        : 'Submitting...'
                      : language === 'nl'
                        ? 'Verstuur aanvraag'
                        : 'Send request'}
                  </Button>
                </form>

                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#5d7fc8]">
                    {language === 'nl' ? 'Gekozen pakket' : 'Chosen package'}
                  </p>
                  <div className="mt-2">
                    <h2 className="text-base font-semibold text-slate-900">
                      {packageChoice.name}
                    </h2>
                    <p className="mt-1 text-sm text-slate-600">
                      {packageChoice.summary[language]}
                    </p>
                  </div>
                  <div className="mt-4 space-y-2">
                    {packageChoice.features.map((feature) => (
                      <div key={feature[language]} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#29458e]" />
                        <span>{feature[language]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {project.kpis && project.kpis.length > 0 && (
              <section className="mt-8 rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.05)] md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#5d7fc8]">
                      {language === 'nl' ? 'Snel overzicht' : 'Quick overview'}
                    </p>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                      {language === 'nl' ? 'Resultaten in cijfers' : 'Results in numbers'}
                    </h2>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef3ff] text-[#5d7fc8]">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  {project.kpis.map((kpi) => (
                    <div key={`${project.id}-${kpi.value}`} className="rounded-2xl border border-slate-200 bg-[#fbfcff] px-4 py-4">
                      <p className="text-4xl font-bold tracking-tight text-[#29458e]">{kpi.value}</p>
                      <p className="mt-2 text-sm text-slate-600">{kpi.label[language]}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="mt-8 rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
              <div className="border-b border-slate-200 px-5 py-5 md:px-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#5d7fc8]">
                  {language === 'nl' ? 'Van briefing naar resultaat' : 'From brief to result'}
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                  {language === 'nl' ? 'Compact projectverhaal' : 'Compact project story'}
                </h2>
              </div>

              <div className="divide-y divide-slate-200">
                <div className="px-5 py-5 md:px-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                      <Target className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-semibold text-slate-900">
                          {language === 'nl' ? 'De Uitdaging' : 'The challenge'}
                        </h3>
                        <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400">
                          {language === 'nl' ? 'Context' : 'Context'}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        {project.challenge[language]}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-5 py-5 md:px-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-500">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-semibold text-slate-900">
                          {language === 'nl' ? 'Onze Oplossing' : 'Our solution'}
                        </h3>
                        <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400">
                          {language === 'nl' ? 'Aanpak' : 'Approach'}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        {project.solution[language]}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-5 py-5 md:px-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-500">
                      <BarChart3 className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-semibold text-slate-900">
                          {language === 'nl' ? 'Het Resultaat' : 'The result'}
                        </h3>
                        <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400">
                          {language === 'nl' ? 'Impact' : 'Impact'}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        {project.results[language]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="mt-8 flex justify-between">
              {prevProject ? (
                <Link
                  to={`/portfolio/${prevProject.id}`}
                  className="inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-[#29458e]"
                >
                  <ArrowLeft className="h-4 w-4" />
                  {language === 'nl' ? 'Vorig Project' : 'Previous project'}
                </Link>
              ) : (
                <span />
              )}

              {nextProject ? (
                <Link
                  to={`/portfolio/${nextProject.id}`}
                  className="inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-[#29458e]"
                >
                  {language === 'nl' ? 'Volgend Project' : 'Next project'}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : (
                <span />
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
