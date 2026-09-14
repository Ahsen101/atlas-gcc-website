'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Lang = 'en' | 'ar';

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const I18nContext = createContext<I18nContextType>({
  lang: 'en',
  setLang: () => {},
  t: (key: string) => key,
  dir: 'ltr',
});

export function useLanguage() {
  return useContext(I18nContext);
}

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  'nav.about': { en: 'About', ar: 'من نحن' },
  'nav.services': { en: 'Services', ar: 'خدماتنا' },
  'nav.projects': { en: 'Projects', ar: 'المشاريع' },
  'nav.values': { en: 'Values', ar: 'قيمنا' },
  'nav.certifications': { en: 'Certifications', ar: 'الشهادات' },
  'nav.contact': { en: 'Contact', ar: 'تواصل معنا' },
  'nav.getInTouch': { en: 'Get in Touch', ar: 'تواصل معنا' },

  // Hero
  'hero.badge': { en: 'Saudi Arabia & Bahrain', ar: 'المملكة العربية السعودية والبحرين' },
  'hero.title1': { en: 'Exploring', ar: 'استكشاف' },
  'hero.title2': { en: "Earth's Foundations", ar: 'أساسات الأرض' },
  'hero.subtitle': {
    en: 'Integrated Geotechnical, Geophysical, Topographical & Environmental services — delivering precision below the surface so you can build with confidence above it.',
    ar: 'خدمات جيوتقنية وجيوفيزيائية وطبوغرافية وبيئية متكاملة — نقدم الدقة تحت السطح حتى تتمكن من البناء بثقة فوقه.',
  },
  'hero.ourServices': { en: 'Our Services', ar: 'خدماتنا' },
  'hero.contactUs': { en: 'Contact Us', ar: 'تواصل معنا' },

  // Stats
  'stats.maxDrillDepth': { en: 'Max Drill Depth', ar: 'أقصى عمق حفر' },
  'stats.projectsCompleted': { en: 'Projects Completed', ar: 'مشاريع مكتملة' },
  'stats.yearsExperience': { en: 'Years Experience', ar: 'سنوات خبرة' },
  'stats.countries': { en: 'Countries', ar: 'دول' },

  // About
  'about.tag': { en: 'About Us', ar: 'من نحن' },
  'about.title1': { en: 'Precision below.', ar: 'دقة في الأعماق.' },
  'about.title2': { en: 'Confidence above.', ar: 'ثقة في البناء.' },
  'about.p1': {
    en: 'ATLAS Earth Exploration is a Geotechnical, Geophysical, Topography Surveying and Environmental Consultancy Company headquartered in Al Khobar, Kingdom of Saudi Arabia, with operations extending to Bahrain.',
    ar: 'أطلس لاستكشاف الأرض هي شركة استشارات جيوتقنية وجيوفيزيائية ومسح طبوغرافي وبيئي يقع مقرها الرئيسي في الخبر، المملكة العربية السعودية، مع عمليات تمتد إلى البحرين.',
  },
  'about.p2': {
    en: 'We maintain a broad range of field instrumentation and equipment, with in-house computing facilities including advanced hardware and software for data processing, contouring, plotting and presentation.',
    ar: 'نحتفظ بمجموعة واسعة من أجهزة ومعدات الحقل، مع مرافق حوسبة داخلية تشمل أجهزة وبرامج متقدمة لمعالجة البيانات والرسم والعرض.',
  },
  'about.headquarters': { en: 'Headquarters', ar: 'المقر الرئيسي' },
  'about.operations': { en: 'Operations', ar: 'العمليات' },
  'about.certified': { en: 'Certified', ar: 'معتمد' },
  'about.qualityCertified': { en: 'Quality Certified', ar: 'معتمد الجودة' },

  // Services
  'services.tag': { en: 'What We Do', ar: 'ماذا نقدم' },
  'services.title1': { en: 'Our', ar: 'خدماتنا' },
  'services.title2': { en: 'Services', ar: '' },
  'services.subtitle': {
    en: 'Comprehensive earth exploration services covering every phase of investigation — from initial surveys to detailed environmental assessments.',
    ar: 'خدمات استكشاف أرضي شاملة تغطي كل مرحلة من مراحل التحقيق — من المسوحات الأولية إلى التقييمات البيئية التفصيلية.',
  },
  'services.learnMore': { en: 'Learn More', ar: 'اعرف المزيد' },

  // Service titles
  'service.geotechnical': { en: 'Geotechnical', ar: 'الجيوتقنية' },
  'service.geophysical': { en: 'Geophysical', ar: 'الجيوفيزيائية' },
  'service.surveys': { en: 'Surveys', ar: 'المسوحات' },
  'service.environmental': { en: 'Environmental', ar: 'البيئية' },
  'service.geologicalMapping': { en: 'Geological Mapping', ar: 'الخرائط الجيولوجية' },
  'service.healthSafety': { en: 'Health & Safety', ar: 'الصحة والسلامة' },

  // Service items - Geotechnical
  'service.geo.1': { en: 'Soil Investigation & Sampling', ar: 'تحقيق التربة وأخذ العينات' },
  'service.geo.2': { en: 'Cone Penetration Testing (CPT)', ar: 'اختبار الاختراق المخروطي' },
  'service.geo.3': { en: 'Pressuremeter & Plate Load Tests', ar: 'اختبارات مقياس الضغط والحمل' },
  'service.geo.4': { en: 'Pile Load Testing', ar: 'اختبار حمل الركائز' },
  'service.geo.5': { en: 'Water Pumping & Percolation Tests', ar: 'اختبارات ضخ المياه والترشيح' },
  'service.geo.6': { en: 'Drilling up to 200m depth', ar: 'حفر حتى عمق 200 متر' },

  // Service items - Geophysical
  'service.gph.1': { en: 'Seismic Refraction & Reflection', ar: 'الانكسار والانعكاس الزلزالي' },
  'service.gph.2': { en: 'Electrical Resistivity Tomography', ar: 'التصوير المقاومي الكهربائي' },
  'service.gph.3': { en: 'Ground Penetrating Radar', ar: 'رادار اختراق الأرض' },
  'service.gph.4': { en: 'Marine Geophysical Surveys', ar: 'المسوحات الجيوفيزيائية البحرية' },
  'service.gph.5': { en: 'Borehole Logging', ar: 'تسجيل الآبار' },
  'service.gph.6': { en: 'Vibration Monitoring', ar: 'مراقبة الاهتزازات' },

  // Service items - Surveys
  'service.srv.1': { en: 'Aerial Topographic Surveys', ar: 'المسوحات الطبوغرافية الجوية' },
  'service.srv.2': { en: 'Bathymetric Surveys (Single/Multi-beam)', ar: 'المسوحات الباثيمترية' },
  'service.srv.3': { en: 'Utility Location Surveys', ar: 'مسوحات تحديد المرافق' },
  'service.srv.4': { en: 'GPS & GIS Mapping', ar: 'خرائط نظم المعلومات الجغرافية' },
  'service.srv.5': { en: 'Marine Hydrographic Surveys', ar: 'المسوحات الهيدروغرافية البحرية' },
  'service.srv.6': { en: '3D Geological Modelling', ar: 'النمذجة الجيولوجية ثلاثية الأبعاد' },

  // Service items - Environmental
  'service.env.1': { en: 'Environmental Impact Assessment', ar: 'تقييم الأثر البيئي' },
  'service.env.2': { en: 'Air & Water Quality Monitoring', ar: 'مراقبة جودة الهواء والمياه' },
  'service.env.3': { en: 'Groundwater Remediation', ar: 'معالجة المياه الجوفية' },
  'service.env.4': { en: 'Waste Management', ar: 'إدارة النفايات' },
  'service.env.5': { en: 'Contamination Assessment', ar: 'تقييم التلوث' },
  'service.env.6': { en: 'Noise & Emission Modelling', ar: 'نمذجة الضوضاء والانبعاثات' },

  // Service items - Geological Mapping
  'service.gmap.1': { en: '3D Geological Modelling', ar: 'النمذجة الجيولوجية ثلاثية الأبعاد' },
  'service.gmap.2': { en: 'Mineral Exploration', ar: 'استكشاف المعادن' },
  'service.gmap.3': { en: 'Resources Estimation', ar: 'تقدير الموارد' },
  'service.gmap.4': { en: 'Drill Hole Analysis', ar: 'تحليل آبار الحفر' },
  'service.gmap.5': { en: 'Lab Analysis & Testing', ar: 'التحليل والاختبار المعملي' },
  'service.gmap.6': { en: 'Quarry & Dam Surveys', ar: 'مسوحات المحاجر والسدود' },

  // Service items - Health & Safety
  'service.hs.1': { en: 'Safe Work Environment', ar: 'بيئة عمل آمنة' },
  'service.hs.2': { en: 'Employee Training & Supervision', ar: 'تدريب وإشراف الموظفين' },
  'service.hs.3': { en: 'Equipment Maintenance', ar: 'صيانة المعدات' },
  'service.hs.4': { en: 'Substance Handling Protocols', ar: 'بروتوكولات التعامل مع المواد' },
  'service.hs.5': { en: 'Accident Prevention', ar: 'الوقاية من الحوادث' },
  'service.hs.6': { en: 'Regular Policy Review', ar: 'مراجعة السياسات الدورية' },

  // Projects
  'projects.tag': { en: 'Track Record', ar: 'سجل الإنجازات' },
  'projects.title1': { en: 'Featured', ar: 'مشاريع' },
  'projects.title2': { en: 'Projects', ar: 'مميزة' },
  'projects.subtitle': {
    en: 'Trusted by major organizations across Saudi Arabia for critical infrastructure and airport projects.',
    ar: 'موثوق به من قبل المؤسسات الكبرى في المملكة العربية السعودية لمشاريع البنية التحتية والمطارات الحيوية.',
  },
  'projects.trustedBy': { en: 'Trusted by Industry Leaders', ar: 'موثوق به من قادة الصناعة' },

  // Project names
  'project.acis-dammam': {
    en: 'Automatic Cargo Integrated Screening (ACIS), King Fahad International Airport — Dammam',
    ar: 'الفحص المتكامل للشحنات الآلي (ACIS)، مطار الملك فهد الدولي — الدمام',
  },
  'project.neom-bay-security': {
    en: 'National Integrated Project for NEOM Bay Airport Security & Protection',
    ar: 'المشروع الوطني المتكامل لأمن وحماية مطار خليج نيوم',
  },
  'project.acis-riyadh': {
    en: 'Automatic Cargo Integrated Screening (ACIS), King Khalid International Airport — Riyadh',
    ar: 'الفحص المتكامل للشحنات الآلي (ACIS)، مطار الملك خالد الدولي — الرياض',
  },
  'project.new-airport-al-jouf': { en: 'New Airport Al Jouf', ar: 'مطار الجوف الجديد' },
  'project.naqel-facility-dammam': {
    en: 'Extension of Naqel Facility, King Fahad International Airport — Dammam',
    ar: 'توسعة منشأة ناقل، مطار الملك فهد الدولي — الدمام',
  },
  'project.neom-bay-geotechnical': {
    en: 'NEOM Bay Airport — Geotechnical & Geophysical Investigation',
    ar: 'مطار خليج نيوم — التحقيق الجيوتقني والجيوفيزيائي',
  },
  'project.approved': { en: 'Approved', ar: 'معتمد' },

  // Values
  'values.tag': { en: 'Our Foundation', ar: 'أساسنا' },
  'values.title1': { en: 'Core', ar: 'القيم' },
  'values.title2': { en: 'Values', ar: 'الأساسية' },
  'value.safety': { en: 'Safety', ar: 'السلامة' },
  'value.safety.desc': {
    en: 'We create a working environment that promotes safe performance across every project.',
    ar: 'نخلق بيئة عمل تعزز الأداء الآمن في كل مشروع.',
  },
  'value.quality': { en: 'Quality', ar: 'الجودة' },
  'value.quality.desc': {
    en: 'We always strive for excellence in the services we provide and results we produce.',
    ar: 'نسعى دائماً للتميز في الخدمات التي نقدمها والنتائج التي ننتجها.',
  },
  'value.integrity': { en: 'Integrity', ar: 'النزاهة' },
  'value.integrity.desc': {
    en: 'We are committed to the highest ethical standards in all our operations.',
    ar: 'نلتزم بأعلى المعايير الأخلاقية في جميع عملياتنا.',
  },
  'value.creativity': { en: 'Creativity', ar: 'الإبداع' },
  'value.creativity.desc': {
    en: 'We believe in looking at challenges and opportunities from new angles.',
    ar: 'نؤمن بالنظر إلى التحديات والفرص من زوايا جديدة.',
  },
  'value.teamwork': { en: 'Teamwork', ar: 'العمل الجماعي' },
  'value.teamwork.desc': {
    en: 'We work together to succeed, combining expertise across disciplines.',
    ar: 'نعمل معاً لتحقيق النجاح، ونجمع الخبرات عبر التخصصات.',
  },
  'value.passion': { en: 'Passion', ar: 'الشغف' },
  'value.passion.desc': {
    en: 'We deliver superior results because we care deeply about what we do.',
    ar: 'نقدم نتائج متفوقة لأننا نهتم بعمق بما نقوم به.',
  },

  // Certifications
  'certs.tag': { en: 'Compliance', ar: 'الامتثال' },
  'certs.title1': { en: 'Certifications &', ar: 'الشهادات' },
  'certs.title2': { en: 'Registrations', ar: 'والتسجيلات' },
  'cert.iso.title': { en: 'ISO 9001:2015', ar: 'ISO 9001:2015' },
  'cert.iso.desc': { en: 'Quality Management System certified', ar: 'نظام إدارة الجودة معتمد' },
  'cert.cr.title': { en: 'Saudi CR', ar: 'السجل التجاري السعودي' },
  'cert.cr.desc': { en: 'Commercial Registration: 7032404258', ar: 'السجل التجاري: 7032404258' },
  'cert.sce.title': { en: 'Bahrain SCE', ar: 'المجلس الأعلى للبيئة - البحرين' },
  'cert.sce.desc': { en: 'Category B Environmental Consultant', ar: 'استشاري بيئي الفئة ب' },

  // Contact
  'contact.tag': { en: 'Get in Touch', ar: 'تواصل معنا' },
  'contact.title1': { en: "Let's Build", ar: 'لنبني' },
  'contact.title2': { en: 'Together', ar: 'معاً' },
  'contact.subtitle': {
    en: 'We welcome the opportunity to participate in your investigation and surveying projects. Contact us to discuss engineering applications and solutions.',
    ar: 'نرحب بفرصة المشاركة في مشاريع التحقيق والمسح الخاصة بكم. تواصلوا معنا لمناقشة التطبيقات والحلول الهندسية.',
  },
  'contact.address': { en: 'Address', ar: 'العنوان' },
  'contact.addressValue': {
    en: 'P.O. Box 6860, Alkhobar Road, Southern Khobar 5311\nKingdom of Saudi Arabia',
    ar: 'ص.ب. 6860، طريق الخبر، الخبر الجنوبية 5311\nالمملكة العربية السعودية',
  },
  'contact.phone': { en: 'Phone', ar: 'الهاتف' },
  'contact.email': { en: 'Email', ar: 'البريد الإلكتروني' },
  'contact.hours': { en: 'Business Hours', ar: 'ساعات العمل' },
  'contact.hoursValue': { en: 'Sunday – Thursday, 7:30 AM – 4:30 PM', ar: 'الأحد – الخميس، 7:30 صباحاً – 4:30 مساءً' },
  'contact.name': { en: 'Name', ar: 'الاسم' },
  'contact.namePlaceholder': { en: 'Your name', ar: 'اسمك' },
  'contact.emailPlaceholder': { en: 'you@company.com', ar: 'you@company.com' },
  'contact.projectDetails': { en: 'Project Details', ar: 'تفاصيل المشروع' },
  'contact.projectPlaceholder': { en: 'Tell us about your project requirements...', ar: 'أخبرنا عن متطلبات مشروعك...' },
  'contact.sendInquiry': { en: 'Send Inquiry', ar: 'إرسال الاستفسار' },

  // Footer
  'footer.copyright': { en: 'Atlas Earth Exploration. All rights reserved.', ar: 'أطلس لاستكشاف الأرض. جميع الحقوق محفوظة.' },

  // Shared (ServicePage / ProjectPage)
  'shared.backToServices': { en: 'Back to Services', ar: 'العودة للخدمات' },
  'shared.backToProjects': { en: 'Back to Projects', ar: 'العودة للمشاريع' },
  'shared.allServices': { en: 'All Services', ar: 'جميع الخدمات' },
  'shared.contactUs': { en: 'Contact Us', ar: 'تواصل معنا' },
  'shared.status': { en: 'Status', ar: 'الحالة' },
  'shared.client': { en: 'Client', ar: 'العميل' },
  'shared.location': { en: 'Location', ar: 'الموقع' },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    const saved = localStorage.getItem('atlas-lang') as Lang;
    if (saved === 'ar' || saved === 'en') {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem('atlas-lang', newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const t = (key: string): string => {
    return translations[key]?.[lang] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t, dir: lang === 'ar' ? 'rtl' : 'ltr' }}>
      {children}
    </I18nContext.Provider>
  );
}
