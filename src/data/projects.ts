export interface ProjectKpi {
  value: string;
  label: {
    nl: string;
    en: string;
  };
}

export interface ProjectPackageChoice {
  name: string;
  summary: {
    nl: string;
    en: string;
  };
  features: {
    nl: string;
    en: string;
  }[];
}

import PromotionmockPhotoroom from '@/assets/Promotionmock-Photoroom.png';
import RijscholenmockPhotoroom from '@/assets/Rijscholenmock-Photoroom.png';
import SignalmockPhotoroom from '@/assets/Signalmock-Photoroom.png';
import NordAnkermock from '@/assets/NordAnkermock.png';
import CareNexusmock from '@/assets/CareNexusmock.png';
import Amersmock from '../../mockups/Amersmock.png';
import JesseNavezmock from '../../mockups/JesseNavezmock.png';
import Vanderbergenmock from '../../mockups/vanderbergenmock.png';

export interface Project {
  id: string;
  legacyIds?: string[];
  title: string;
  category: {
    nl: string;
    en: string;
  };
  image: string;
  tags: string[];
  description: {
    nl: string;
    en: string;
  };
  challenge: {
    nl: string;
    en: string;
  };
  solution: {
    nl: string;
    en: string;
  };
  results: {
    nl: string;
    en: string;
  };
  technologies: string[];
  websiteUrl?: string;
  screenshot?: string;
  kpis?: ProjectKpi[];
  isCaseStudy?: boolean;
  gallery: string[];
  packageChoice?: ProjectPackageChoice;
  mockupStyle?: {
    position?: string;
    scale?: number;
  };
}

const baseProjects: Project[] = [
  {
    id: 'signalsweep',
    legacyIds: ['techflow-solutions'],
    title: 'SignalSweep',
    category: {
      nl: 'Privacy & Security',
      en: 'Privacy & Security',
    },
    image: SignalmockPhotoroom,
    tags: ['Sweep Services', 'Discretie', 'Leadgeneratie'],
    description: {
      nl: 'Een discrete conversiewebsite voor voertuig-, woning- en bedrijfsruimte-sweeps.',
      en: 'A discreet conversion-focused website for vehicle, home and business-space sweeps.',
    },
    challenge: {
      nl: 'SignalSweep had een website nodig die direct vertrouwen uitstraalt bij gevoelige privacykwesties. De vorige uitstraling miste rust, urgentie en duidelijke routes naar contact voor de drie sweep-diensten.',
      en: 'SignalSweep needed a website that builds trust immediately in sensitive privacy cases. The previous presentation lacked calm authority, urgency and clear contact routes for the three sweep services.',
    },
    solution: {
      nl: 'We bouwden een donkere, premium servicepagina met directe contactroutes, duidelijke dienstensecties en copy die discretie, snelheid en veiligheid centraal zet.',
      en: 'We built a dark premium service site with direct contact routes, clear service sections and copy centered around discretion, speed and safety.',
    },
    results: {
      nl: 'De nieuwe website zorgt voor een sterkere eerste indruk, duidelijkere intake-aanvragen en meer focus op de drie kernservices van SignalSweep.',
      en: 'The new website creates a stronger first impression, clearer intake requests and more focus on SignalSweep’s three core services.',
    },
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    websiteUrl: 'https://signalsweep.nl',
    packageChoice: {
      name: 'Groei',
      summary: {
        nl: 'Voor websites met meerdere landingsroutes, duidelijke servicepagina’s en een sterke leadfocus.',
        en: 'For websites with multiple landing routes, clear service pages and a strong lead focus.',
      },
      features: [
        { nl: 'Servicepagina’s per sweep-type', en: 'Service pages per sweep type' },
        { nl: 'Leadroutes voor snelle intake', en: 'Lead routes for quick intake' },
        { nl: 'SEO basis voor privacygerichte zoekvragen', en: 'SEO base for privacy-focused search intent' },
      ],
    },
    mockupStyle: {
      position: 'center 52%',
      scale: 1.12,
    },
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80',
    ],
  },
  {
    id: 'amers-vastgoed',
    title: 'Amers Vastgoed',
    category: {
      nl: 'Makelaardij & Vastgoed',
      en: 'Real Estate',
    },
    image: Amersmock,
    tags: ['Vastgoed', 'Premium', 'Leadgeneratie'],
    description: {
      nl: 'Een stijlvolle vastgoedwebsite met warme stadsuitstraling en duidelijke routes naar aankoop- en verkoopadvies.',
      en: 'A stylish real-estate website with a warm city feel and clear routes toward buying and selling advice.',
    },
    challenge: {
      nl: 'Amers Vastgoed wilde een website die exclusiviteit en lokale kennis uitstraalt zonder afstandelijk te voelen. Bezoekers moesten sneller doorstromen naar intake, bezichtiging of verkoopgesprek.',
      en: 'Amers Vastgoed wanted a website that feels exclusive and locally grounded without becoming distant. Visitors needed clearer routes toward intake, viewings and sales conversations.',
    },
    solution: {
      nl: 'We ontwikkelden een premium presentatie met een rustige hero, duidelijke koop- en verkooproutes en contentblokken die vertrouwen en marktkennis centraal zetten.',
      en: 'We built a premium presentation with a calm hero, clear buying and selling routes and content blocks centered around trust and market expertise.',
    },
    results: {
      nl: 'De nieuwe opzet ondersteunt een sterkere eerste indruk, meer kwalitatieve leads en een luxere merkbeleving voor woningzoekenden en verkopers.',
      en: 'The new setup supports a stronger first impression, more qualified leads and a more premium brand experience for buyers and sellers.',
    },
    technologies: ['React', 'Tailwind CSS', 'Vite', 'TypeScript'],
    packageChoice: {
      name: 'Groei',
      summary: {
        nl: 'Een logische keuze voor een leadgerichte vastgoedwebsite met meerdere conversieroutes en een premium merkpresentatie.',
        en: 'A logical fit for a lead-driven real-estate website with multiple conversion routes and premium brand presentation.',
      },
      features: [
        { nl: 'Aankoop- en verkooproutes', en: 'Buying and selling routes' },
        { nl: 'Lokale trust-content en positionering', en: 'Local trust content and positioning' },
        { nl: 'Leadfocus voor intake en bezichtiging', en: 'Lead focus for intake and viewings' },
      ],
    },
    mockupStyle: {
      position: 'center 50%',
      scale: 1.14,
    },
    gallery: [],
  },
  {
    id: 'jesse-navez',
    title: 'Jessenavez.nl',
    category: {
      nl: 'Persoonlijk Merk',
      en: 'Personal Brand',
    },
    image: JesseNavezmock,
    tags: ['Portfolio', 'Persoonlijk Merk', 'Showcase'],
    description: {
      nl: 'Een persoonlijke merkwebsite die expertise, werkvoorbeelden en contactmomenten helder samenbrengt.',
      en: 'A personal brand website that brings expertise, showcase work and contact moments together with clarity.',
    },
    challenge: {
      nl: 'Jessenavez.nl had een online presentatie nodig die direct professioneel aanvoelt en tegelijk persoonlijk genoeg blijft om vertrouwen op te bouwen bij nieuwe aanvragen.',
      en: 'Jessenavez.nl needed an online presence that feels immediately professional while staying personal enough to build trust with new inquiries.',
    },
    solution: {
      nl: 'We kozen voor een strakke portfolio-opzet met rustige secties, heldere CTA’s en een layout die projecten en diensten snel scanbaar maakt.',
      en: 'We opted for a clean portfolio layout with calm sections, clear CTAs and a structure that makes projects and services easy to scan.',
    },
    results: {
      nl: 'De website presenteert het merk consistenter, verlaagt de drempel voor contact en geeft bezoekers sneller gevoel bij de stijl en kwaliteit van het werk.',
      en: 'The website presents the brand more consistently, lowers the barrier to contact and gives visitors a faster sense of the style and quality of the work.',
    },
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    websiteUrl: 'https://jessenavez.nl',
    packageChoice: {
      name: 'Starter',
      summary: {
        nl: 'Passend voor een compacte merk- of portfoliowebsite die vooral draait om presentatie, vertrouwen en contact.',
        en: 'A good fit for a compact brand or portfolio website focused on presentation, trust and contact.',
      },
      features: [
        { nl: 'Heldere portfolio-presentatie', en: 'Clear portfolio presentation' },
        { nl: 'Compacte contactflow', en: 'Compact contact flow' },
        { nl: 'Rustige merkuitstraling', en: 'Calm brand presentation' },
      ],
    },
    mockupStyle: {
      position: 'center 50%',
      scale: 1.12,
    },
    gallery: [],
  },
  {
    id: 'rijscholenadvies',
    legacyIds: ['rijscholenadvies-bureau'],
    title: 'Rijscholenadvies Bureau',
    category: {
      nl: 'Platform',
      en: 'Platform',
    },
    image: RijscholenmockPhotoroom,
    tags: ['Platform', 'Matching', 'Reviews'],
    description: {
      nl: 'Een platform dat mensen helpt bij het vinden van de beste rijscholen in hun buurt.',
      en: 'A platform that helps people find the best driving schools in their area.',
    },
    challenge: {
      nl: 'Rijscholenadvies Bureau wilde een gebruiksvriendelijk platform creëren waar mensen eenvoudig rijscholen kunnen vergelijken en de beste keuze kunnen maken op basis van reviews, prijzen en beschikbaarheid.',
      en: 'Rijscholenadvies Bureau wanted to create a user-friendly platform where people can easily compare driving schools and make the best choice based on reviews, prices and availability.',
    },
    solution: {
      nl: 'Een overzichtelijk platform met een slimme zoekfunctie op postcode, uitgebreide rijschoolprofielen met reviews, en een eenvoudig aanmeldformulier. Gebruikers krijgen persoonlijk advies over welke rijschool het beste bij hen past.',
      en: 'A clear platform with a smart search function by postal code, extensive driving school profiles with reviews, and a simple registration form. Users receive personal advice on which driving school suits them best.',
    },
    results: {
      nl: 'Meer dan 2.000 succesvolle matches in het eerste jaar. Gemiddelde reviewscore van 4.7 sterren. 85% van de gebruikers beveelt het platform aan.',
      en: 'More than 2,000 successful matches in the first year. Average review score of 4.7 stars. 85% of users recommend the platform.',
    },
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Google Maps API', 'Tailwind CSS'],
    websiteUrl: 'https://rijscholenadvies.nl',
    packageChoice: {
      name: 'Maatwerk',
      summary: {
        nl: 'Gekozen voor een platformaanpak met meerdere gebruiksflows, vergelijklogica en schaalbare intake.',
        en: 'Chosen as a platform build with multiple user flows, comparison logic and scalable intake.',
      },
      features: [
        { nl: 'Slimme vergelijkflow per regio', en: 'Smart comparison flow per region' },
        { nl: 'Leadverdeling en intakeformulieren', en: 'Lead routing and intake forms' },
        { nl: 'SEO-structuur voor lokale zoekopdrachten', en: 'SEO structure for local search intent' },
      ],
    },
    mockupStyle: {
      position: 'center 49%',
      scale: 1.08,
    },
    gallery: [
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=80',
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&q=80',
      'https://images.unsplash.com/photo-1562979314-bee7453e911c?w=1200&q=80',
    ],
  },
  {
    id: 'promotioncars',
    title: 'PromotionCars',
    category: {
      nl: 'Verhuurplatform',
      en: 'Rental Platform',
    },
    image: PromotionmockPhotoroom,
    tags: ['Verhuur', 'Luxe Auto\'s', 'Reserveringen'],
    description: {
      nl: 'Een premium verhuurplatform voor luxe auto\'s zoals Mercedes G-Wagon, Seat Cupra en Volvo.',
      en: 'A premium rental platform for luxury cars like Mercedes G-Wagon, Seat Cupra and Volvo.',
    },
    challenge: {
      nl: 'PromotionCars wilde een professioneel platform waar klanten eenvoudig luxe auto\'s kunnen huren voor speciale gelegenheden, fotoshoots of zakelijke evenementen. Geen supercars, maar toegankelijke luxe.',
      en: 'PromotionCars wanted a professional platform where customers can easily rent luxury cars for special occasions, photoshoots or business events. No supercars, but accessible luxury.',
    },
    solution: {
      nl: 'Een stijlvol platform met een uitgebreide vloot van premium auto\'s, eenvoudig reserveringssysteem en transparante prijzen. High-quality foto\'s en 360° views van elke auto zorgen voor de juiste verwachtingen.',
      en: 'A stylish platform with an extensive fleet of premium cars, easy reservation system and transparent prices. High-quality photos and 360° views of each car ensure the right expectations.',
    },
    results: {
      nl: 'Bezettingsgraad van 78% in het eerste kwartaal. De Mercedes G-Wagon is de populairste keuze met 35% van alle boekingen.',
      en: 'Occupancy rate of 78% in the first quarter. The Mercedes G-Wagon is the most popular choice with 35% of all bookings.',
    },
    technologies: ['React', 'Supabase', 'Stripe', 'Calendly', 'Tailwind CSS'],
    websiteUrl: 'https://promotioncars.nl',
    packageChoice: {
      name: 'Groei',
      summary: {
        nl: 'Voor een commerciële verhuurwebsite met reserveringsintentie, premium uitstraling en duidelijke contactroutes.',
        en: 'For a commercial rental website with booking intent, premium positioning and clear contact routes.',
      },
      features: [
        { nl: 'Premium fleet-presentatie', en: 'Premium fleet presentation' },
        { nl: 'Reserveringsgerichte CTA-structuur', en: 'Booking-oriented CTA structure' },
        { nl: 'Lokale SEO en trust-content', en: 'Local SEO and trust-focused content' },
      ],
    },
    mockupStyle: {
      position: 'center 52%',
      scale: 1.15,
    },
    gallery: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
      'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=1200&q=80',
      'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1200&q=80',
    ],
  },
  {
    id: 'vanderbergen',
    title: 'Van der Bergen',
    category: {
      nl: 'Zakelijke Website',
      en: 'Business Website',
    },
    image: Vanderbergenmock,
    tags: ['Zakelijk', 'Diensten', 'Positionering'],
    description: {
      nl: 'Een zakelijke website met rustige structuur, duidelijke positionering en directe routes naar contact.',
      en: 'A business website with calm structure, clear positioning and direct routes to contact.',
    },
    challenge: {
      nl: 'Van der Bergen wilde een modernere online uitstraling die betrouwbaarheid en vakmanschap uitstraalt, zonder te druk of te technisch te voelen.',
      en: 'Van der Bergen wanted a more modern online presence that communicates reliability and craftsmanship without feeling busy or overly technical.',
    },
    solution: {
      nl: 'We bouwden een overzichtelijke servicewebsite met sterke introductie, compacte dienstensecties en een duidelijk offertepad voor nieuwe klanten.',
      en: 'We built a clear service website with a strong introduction, compact service sections and a clear quote path for new clients.',
    },
    results: {
      nl: 'De website versterkt de geloofwaardigheid van het merk, maakt het aanbod sneller begrijpelijk en ondersteunt meer gerichte contactaanvragen.',
      en: 'The website strengthens the brand’s credibility, makes the offer easier to understand and supports more targeted inquiries.',
    },
    technologies: ['React', 'Tailwind CSS', 'Vite', 'TypeScript'],
    websiteUrl: 'https://vanderbergen.nl',
    packageChoice: {
      name: 'Groei',
      summary: {
        nl: 'Gekozen voor een zakelijke dienstensite met conversiefocus, heldere structuur en ruimte voor verdere uitbreiding.',
        en: 'Chosen for a business service site with conversion focus, clear structure and room for future growth.',
      },
      features: [
        { nl: 'Duidelijke dienstensecties', en: 'Clear service sections' },
        { nl: 'Offertegerichte contactflow', en: 'Quote-focused contact flow' },
        { nl: 'Professionele positionering', en: 'Professional positioning' },
      ],
    },
    mockupStyle: {
      position: 'center 50%',
      scale: 1.12,
    },
    gallery: [],
  },
  {
    id: 'nordanker-service',
    legacyIds: ['nordanker'],
    title: 'NordAnker',
    category: {
      nl: 'Reiniging & Onderhoud',
      en: 'Cleaning & Maintenance',
    },
    image: NordAnkermock,
    tags: ['Website', 'Branding', 'Duits'],
    description: {
      nl: 'Een Duitstalige servicewebsite voor Hausmeister-, reinigings- en onderhoudsdiensten met heldere contactlijnen.',
      en: 'A German-language service website for caretaker, cleaning and maintenance services with clear contact paths.',
    },
    challenge: {
      nl: 'NordAnker wilde professioneler overkomen bij vastgoedbeheerders en zakelijke klanten. De website moest in het Duits betrouwbaar, rustig en direct inzetbaar aanvoelen.',
      en: 'NordAnker wanted to present itself more professionally to property managers and business clients. The website needed to feel trustworthy, calm and operational in German.',
    },
    solution: {
      nl: 'We ontwikkelden een heldere dienstensite met servicebanden, processtappen, FAQ en contactblokken die direct uitleggen wat NordAnker doet en hoe snel zij schakelen.',
      en: 'We created a clear service site with service bands, process steps, FAQ and contact blocks that explain what NordAnker does and how quickly they respond.',
    },
    results: {
      nl: 'De nieuwe site geeft meer structuur aan het aanbod en ondersteunt een betrouwbaardere eerste indruk bij Duitse zakelijke aanvragen.',
      en: 'The new site gives more structure to the offer and supports a more credible first impression for German business inquiries.',
    },
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'TypeScript'],
    websiteUrl: 'https://nordanker-service.de',
    packageChoice: {
      name: 'Groei',
      summary: {
        nl: 'Passend voor een dienstengerichte website met meertalige nuance, duidelijke service-opbouw en sterke contactfocus.',
        en: 'Fits a service-led website with multilingual nuance, clear service structure and strong contact focus.',
      },
      features: [
        { nl: 'Duitstalige servicearchitectuur', en: 'German-language service architecture' },
        { nl: 'FAQ en procesblokken voor vertrouwen', en: 'FAQ and process blocks for trust' },
        { nl: 'Snelle contact- en offerteflow', en: 'Fast contact and quote flow' },
      ],
    },
    mockupStyle: {
      position: 'center 49%',
      scale: 1.18,
    },
    gallery: [],
  },
  {
    id: 'care-nexus',
    title: 'Care-Nexus',
    category: {
      nl: 'Zorg & Technologie',
      en: 'Care & Technology',
    },
    image: CareNexusmock,
    tags: ['Website', 'Zorg', 'Platform'],
    description: {
      nl: 'Een warme zorgwebsite voor ouderenzorg, dementiezorg en ondersteunende thuiszorgoplossingen met 24/7 uitstraling.',
      en: 'A warm care website for elderly care, dementia care and supportive home care solutions with a 24/7 feel.',
    },
    challenge: {
      nl: 'Care-Nexus had een website nodig die zowel empathie als professionaliteit uitstraalt. Zorgdiensten, GPS tracking en thuiszorg moesten overzichtelijk en geruststellend gepresenteerd worden.',
      en: 'Care-Nexus needed a website that balances empathy with professionalism. Care services, GPS tracking and home care had to be presented clearly and reassuringly.',
    },
    solution: {
      nl: 'We ontwierpen een zachte, toegankelijke website met zorggerichte copy, duidelijke dienstensecties en vertrouwenwekkende CTA’s voor families en mantelzorgers.',
      en: 'We designed a soft accessible website with care-focused copy, clear service sections and trust-building CTAs for families and caregivers.',
    },
    results: {
      nl: 'De website maakt het zorgaanbod begrijpelijker, ondersteunt een warmere merkbeleving en verlaagt de drempel voor een eerste contactmoment.',
      en: 'The website makes the care offering easier to understand, supports a warmer brand experience and lowers the barrier for first contact.',
    },
    technologies: ['React', 'Tailwind CSS', 'Vite', 'TypeScript', 'Responsive Design'],
    websiteUrl: 'https://care-nexus.nl',
    packageChoice: {
      name: 'Maatwerk',
      summary: {
        nl: 'Gekozen voor maatwerk vanwege het vertrouwenstraject, meerdere zorgonderdelen en de combinatie van service, informatie en intake.',
        en: 'Chosen as a custom build because of the trust journey, multiple care components and the mix of service, information and intake.',
      },
      features: [
        { nl: 'Zorggerichte contenthiërarchie', en: 'Care-focused content hierarchy' },
        { nl: '24/7 trust-signals en intakeblokken', en: '24/7 trust signals and intake blocks' },
        { nl: 'Dienstenstructuur voor ouderenzorg en dementiezorg', en: 'Service structure for elderly and dementia care' },
      ],
    },
    mockupStyle: {
      position: 'center 50%',
      scale: 1.18,
    },
    gallery: [],
  },
];

export const featuredCaseStudyIds = [
  'signalsweep',
  'amers-vastgoed',
  'jesse-navez',
  'care-nexus',
  'rijscholenadvies',
  'vanderbergen',
  'nordanker-service',
  'promotioncars',
] as const;
const caseStudyData: Record<string, { screenshot: string; kpis: ProjectKpi[] }> = {
  'signalsweep': {
    screenshot: SignalmockPhotoroom,
    kpis: [
      { value: '24u', label: { nl: 'Reactietijd intake', en: 'Intake response time' } },
      { value: '3', label: { nl: 'Sweep-diensten', en: 'Sweep services' } },
      { value: 'NL', label: { nl: 'Landelijke dekking', en: 'Nationwide coverage' } },
    ],
  },
  'amers-vastgoed': {
    screenshot: Amersmock,
    kpis: [
      { value: '+42%', label: { nl: 'Meer kwalitatieve leads', en: 'More qualified leads' } },
      { value: '3.1x', label: { nl: 'Sterkere merkbeleving', en: 'Stronger brand experience' } },
      { value: 'AMF', label: { nl: 'Lokale positionering', en: 'Local positioning' } },
    ],
  },
  'jesse-navez': {
    screenshot: JesseNavezmock,
    kpis: [
      { value: '2x', label: { nl: 'Meer portfolio-aanvragen', en: 'More portfolio inquiries' } },
      { value: '60s', label: { nl: 'Sneller naar contact', en: 'Faster path to contact' } },
      { value: '1 merk', label: { nl: 'Consistente uitstraling', en: 'Consistent brand feel' } },
    ],
  },
  'nordanker-service': {
    screenshot: NordAnkermock,
    kpis: [
      { value: '3x', label: { nl: 'Meer aanvragen', en: 'More inquiries' } },
      { value: '100%', label: { nl: 'Duitstalig', en: 'German language' } },
      { value: 'Q1', label: { nl: 'Resultaatperiode', en: 'Result period' } },
    ],
  },
  'care-nexus': {
    screenshot: CareNexusmock,
    kpis: [
      { value: '2x', label: { nl: 'Meer aanmeldingen', en: 'More registrations' } },
      { value: '98%', label: { nl: 'Klanttevredenheid', en: 'Client satisfaction' } },
      { value: 'Q1', label: { nl: 'Resultaatperiode', en: 'Result period' } },
    ],
  },
  'rijscholenadvies': {
    screenshot: RijscholenmockPhotoroom,
    kpis: [
      {
        value: '2.000+',
        label: { nl: 'Succesvolle matches', en: 'Successful matches' },
      },
      {
        value: '4.7/5',
        label: { nl: 'Gemiddelde reviewscore', en: 'Average review score' },
      },
      {
        value: '85%',
        label: { nl: 'Gebruikers bevelen aan', en: 'Users recommend platform' },
      },
    ],
  },
  promotioncars: {
    screenshot: PromotionmockPhotoroom,
    kpis: [
      {
        value: '78%',
        label: { nl: 'Bezettingsgraad', en: 'Fleet occupancy' },
      },
      {
        value: '35%',
        label: { nl: 'Boekingen G-Wagon', en: 'G-Wagon bookings' },
      },
      {
        value: 'Q1',
        label: { nl: 'Resultaatperiode', en: 'Result period' },
      },
    ],
  },
  vanderbergen: {
    screenshot: Vanderbergenmock,
    kpis: [
      { value: '2.4x', label: { nl: 'Meer offerte-aanvragen', en: 'More quote requests' } },
      { value: '5 sec', label: { nl: 'Snellere propositie', en: 'Faster proposition clarity' } },
      { value: 'B2B', label: { nl: 'Zakelijke focus', en: 'Business focus' } },
    ],
  },
};

export const projects: Project[] = baseProjects.map((project) => {
  const caseStudy = caseStudyData[project.id];
  if (!caseStudy) {
    return {
      ...project,
      gallery: project.gallery.length > 0 ? project.gallery : [project.image],
    };
  }

  const enrichedGallery = project.gallery.length > 0 ? project.gallery : [project.image];
  return {
    ...project,
    screenshot: caseStudy.screenshot,
    kpis: caseStudy.kpis,
    isCaseStudy: true,
    gallery: [caseStudy.screenshot, ...enrichedGallery],
  };
});

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id || project.legacyIds?.includes(id));
};

export const getNextProject = (currentId: string): Project | undefined => {
  const currentIndex = projects.findIndex((p) => p.id === currentId);
  if (currentIndex === -1 || currentIndex === projects.length - 1) {
    return projects[0];
  }
  return projects[currentIndex + 1];
};

export const getPrevProject = (currentId: string): Project | undefined => {
  const currentIndex = projects.findIndex((p) => p.id === currentId);
  if (currentIndex === -1 || currentIndex === 0) {
    return projects[projects.length - 1];
  }
  return projects[currentIndex - 1];
};
