// Textos compartidos ES / EN. Fuente única para todas las páginas.
// Los valores que contienen HTML (<b>, <br>, <s>, <a>, <sup>) se renderizan con set:html.

export type Lang = 'es' | 'en';

export const langs: Lang[] = ['es', 'en'];

/** Prefijo de ruta por idioma */
export const base: Record<Lang, string> = { es: '/', en: '/en/' };

export const site = 'https://peakcore.dev';

export const ui = {
  es: {
    htmlLang: 'es',
    meta: {
      title: 'PeakCore — SEO Técnico, Performance y Conversión',
      description:
        'PeakCore diagnostica por qué un sitio web pierde clientes potenciales — problemas de visibilidad, performance y conversión — y los resuelve directamente.',
    },
    nav: {
      services: 'Servicios',
      results: 'Resultados',
      work: 'Trabajo',
      stack: 'Stack',
      contact: 'Contacto',
      status: 'Disponible',
      menu: 'Menú',
    },
    skip: 'Saltar al contenido',
    hero: {
      headline: [
        'Perdés clientes',
        'antes de que te <span class="mark">contacten</span>',
        '— detectado, resuelto y medido.',
      ],
      kicker:
        '<b>Diagnóstico técnico e implementación para sitios de negocio</b> · Core Web Vitals · SEO técnico · AI Search (GEO) · SEO local',
      tagline: 'Encuentro el problema. Lo resuelvo directamente. Mido el resultado.(test branch)',
      spec: [
        { k: 'Estado', v: 'Disponible para proyectos seleccionados · Remoto' },
        { k: 'Foco', v: 'Visibilidad · Performance · Conversión' },
        { k: 'Build', v: 'HTML/CSS/JS · WordPress Specialist' },
        { k: 'Base', v: 'LATAM · Solo remoto' },
      ],
      lead: 'Un sitio puede estar perdiendo clientes potenciales antes de que su dueño se entere — por páginas lentas, navegación confusa, señales de confianza rotas o problemas de SEO técnico. PeakCore identifica qué está alejando a los visitantes y lo resuelve directamente, en WordPress, HTML/CSS/JS o lo que estés usando. Cada proyecto se entrega documentado, con resultados reales antes/después',
      ctaWork: 'Ver el trabajo',
      ctaContact: 'Contacto',
    },
    audit: {
      title: 'Lighthouse — <b>esta misma página</b><sup class="fn"><a href="#notas">2</a></sup>',
      accessibility: 'Accesibilidad',
      note: 'Medido en producción, no un mockup. No me creas a mí — corré <a href="https://pagespeed.web.dev" target="_blank" rel="noopener">pagespeed.web.dev</a> sobre esta URL y compará.',
    },
    cap: {
      title: 'Un problema puntual.<br>Un resultado medible.',
      deck: 'Tres líneas de trabajo, cada una con alcance definido y diagnosticada antes de tocar nada. Sin tercerizar, sin plantillas.',
      items: [
        {
          h: 'Search Visibility',
          p: 'Si los clientes potenciales no encuentran el negocio, hay que arreglar la base técnica — crawlability, indexación, metadata, linking interno y arquitectura del sitio, diagnosticado con herramientas reales e implementado directamente.',
          chips: ['Technical SEO', 'AI Search (GEO)', 'Local SEO', 'Schema Markup'],
        },
        {
          h: 'Web Performance',
          p: 'Un sitio lento o inestable genera fricción antes de que un cliente potencial te contacte — se resuelve con Core Web Vitals, PageSpeed, caching, compresión de imágenes y CDN, con scores documentados antes/después.',
          chips: ['Core Web Vitals', 'Performance Optimization', 'Technical Audits', 'Security Hardening'],
        },
        {
          h: 'Web Implementation',
          p: 'Cuando el problema requiere implementación, PeakCore lo resuelve directamente en vez de entregar otro informe — fixes de front-end, WordPress, landing pages y configuración de analítica, implementados y configurados directamente.',
          chips: ['Landing Pages', 'WordPress Optimization', 'HTML/CSS/JS', 'GA4 & GTM'],
        },
      ],
    },
    results: {
      h: 'Objetivos ya alcanzados',
      note: 'Métricas de proyectos reales',
      stats: [
        { count: 88, suffix: '+', cap: 'Mobile Speed aumentado en 5 días' },
        { count: 78, suffix: '%', cap: 'Reducción promedio de peso de página' },
        { count: 72, suffix: 'h', cap: 'Checkout de WooCommerce recuperado' },
      ],
    },
    work: {
      doctag: 'Índice de proyectos',
      doctag2: '8 casos documentados',
      title: 'Proyectos reales. Antes / después.',
      deck: 'Tocá cualquier fila para abrir el detalle y el diff de métricas — los números salen de Search Console y PageSpeed, no de un dashboard de marketing.',
      hProject: 'Proyecto',
      hDiscipline: 'Disciplina',
      hResult: 'Resultado',
      detailLink: 'Ver caso',
      detailProg: 'Ver avance',
      noMetric: 'Sin métrica comparable',
      prog: '● En curso',
    },
    no: {
      h1: 'Igual de importante:',
      h2: 'lo que no hago.',
      items: [
        'No prometo <s>"primera página de Google en 30 días"</s>. Nadie puede garantizar eso de verdad.',
        'No tapo un problema de performance agregando más código encima. Casi siempre la respuesta es sacar, no sumar.',
        'No entrego reportes que no puedas verificar. Cada métrica que muestro la podés medir vos con las mismas herramientas gratuitas que uso yo.',
      ],
    },
    stack: {
      doctag: 'Apéndice A',
      doctag2: 'herramientas en producción',
      title: 'Todo probado en proyectos reales.',
      deck: 'Nada de esta lista es decorativo: cada herramienta se usó en trabajo de clientes con resultados documentados.',
    },
    steps: {
      title: 'Cómo funciona.',
      deck: 'Tres pasos, siempre en este orden. El diagnóstico va antes que cualquier implementación.',
      items: [
        {
          n: 'Entender',
          t: 'Compartís el problema',
          d: 'Me pasás el sitio, el problema o el objetivo. Reviso todo, hago las preguntas correctas y alineamos el alcance antes de tocar nada.',
        },
        {
          n: 'Diagnóstico',
          t: 'Diagnostico la causa raíz',
          d: 'Identifico qué es lo que realmente está frenando el sitio, priorizo lo que importa y documento las causas raíz — antes de cualquier implementación.',
        },
        {
          n: 'Resolver y medir',
          t: 'Lo resuelvo y lo mido',
          d: 'Implementación directa y documentada. Siempre queda claro qué cambió y qué se puede medir.',
        },
      ],
    },
    author: {
      h: 'Quién está detrás.',
      quote:
        '«Detrás de PeakCore hay una persona, no una agencia. Cuando me escribís, te respondo yo; cuando algo se rompe un viernes a la noche, también.»',
      p1: 'Sin equipo tercerizado, sin gestores de cuenta, sin capas intermedias entre el problema y quien lo resuelve.',
      p2: 'Este sitio es también mi carta de presentación técnica: está hecho a mano en HTML, CSS y JavaScript, sin frameworks, y los números de Lighthouse de arriba son de esta misma URL. Si vas a contratar a alguien para que haga rápido tu web, su propia web tiene que ser rápida.',
      name: 'Maia Del Basso',
      role: 'Especialista en SEO Técnico y Optimización Web',
    },
    notes: {
      t: 'Notas',
      items: [
        'Reales de verdad: capturas fechadas de PageSpeed Insights, GTmetrix y Search Console en cada entrega. Si un número no se puede verificar, no lo publico.',
        'Podés auditarlo vos: abrí DevTools → Lighthouse y corré el test sobre esta URL. Los números deberían repetirse.',
        'GEO/AEO: optimización para que los motores de respuesta con IA (AI Overviews, ChatGPT, Perplexity) encuentren y citen el sitio como fuente.',
      ],
    },
    cta: {
      h1: 'Arreglemos',
      h2: 'lo que te cuesta clientes.',
      desc: '¿Tenés un problema de sitio web, visibilidad, performance o conversión que querés resolver? Contame qué está pasando y lo reviso. ¿Buscás un especialista técnico en SEO para tu equipo? También estoy abierto a eso.',
      link: 'Contactar por LinkedIn',
    },
    col: {
      t1: 'Colofón',
      p1: 'Hecho a mano — HTML/CSS/JS, un solo archivo, sin frameworks. Tipografía: Archivo, Newsreader y Space Mono.',
      t2: 'Privacidad',
      p2: 'Sin cookies, sin trackers de terceros, sin banners de consentimiento — porque no hay nada que consentir.',
      t3: 'Esta página, ahora mismo',
      measuring: 'Midiendo…',
      weight: 'transferidos',
      reqs: 'requests',
      load: 'cargada en',
      copyright: '© 2026 PEAKCORE · Technical SEO · Web Optimization · Core Web Vitals · AI Search (GEO)',
      back: 'Volver arriba',
    },
    e404: {
      title: '404 — Página No Encontrada · PeakCore',
      description:
        'Esta página no existe. La URL puede ser incorrecta, estar desactualizada o la página puede haberse movido.',
      h1a: 'Esta página',
      h1b: 'no existe.',
      lead: 'La URL puede ser incorrecta, estar desactualizada o la página puede haberse movido.',
      cta: 'Volver a PeakCore',
      copyright: '© 2026 PEAKCORE · SEO Técnico · Optimización Web · Core Web Vitals · AI Search (GEO)',
    },
  },

  en: {
    htmlLang: 'en',
    meta: {
      title: 'PeakCore — Technical SEO, Performance & Conversion Fixes',
      description:
        'PeakCore diagnoses why a website is losing potential customers — search visibility, performance, and conversion problems — and fixes them directly.',
    },
    nav: {
      services: 'Services',
      results: 'Results',
      work: 'Work',
      stack: 'Stack',
      contact: 'Contact',
      status: 'Available',
      menu: 'Menu',
    },
    skip: 'Skip to content',
    hero: {
      headline: [
        'Losing customers',
        'before they <span class="mark">ever reach out</span>',
        '— found, fixed, and measured.',
      ],
      kicker:
        '<b>Technical diagnosis and implementation for business websites</b> · Core Web Vitals · Technical SEO · AI Search (GEO) · Local SEO',
      tagline: 'Find the problem. Fix it directly. Measure the result.',
      spec: [
        { k: 'Status', v: 'Available for selected projects · Remote' },
        { k: 'Focus', v: 'Visibility · Performance · Conversion' },
        { k: 'Build', v: 'HTML/CSS/JS · WordPress Specialist' },
        { k: 'Based', v: 'LATAM · Remote only' },
      ],
      lead: "A website can lose potential customers before its owner ever hears from them — to slow pages, confusing navigation, broken trust signals, or technical SEO gaps. PeakCore identifies what's driving visitors away and fixes it directly, on WordPress, HTML/CSS/JS, or whatever you're running. Every engagement ships documented, with real before/after results",
      ctaWork: 'See the work',
      ctaContact: 'Contact',
    },
    audit: {
      title: 'Lighthouse — <b>this very page</b><sup class="fn"><a href="#notas">2</a></sup>',
      accessibility: 'Accessibility',
      note: 'Measured in production, not a mockup. Don\'t take my word for it — run <a href="https://pagespeed.web.dev" target="_blank" rel="noopener">pagespeed.web.dev</a> on this URL and compare.',
    },
    cap: {
      title: 'A specific problem.<br>A measurable result.',
      deck: 'Three lines of work, each with a defined scope and diagnosed before anything is touched. Nothing outsourced, nothing templated.',
      items: [
        {
          h: 'Search Visibility',
          p: "If potential customers can't find the business online, the technical foundation needs fixing — crawlability, indexation, metadata, internal linking, and site architecture, diagnosed with real tools and implemented directly.",
          chips: ['Technical SEO', 'AI Search (GEO)', 'Local SEO', 'Schema Markup'],
        },
        {
          h: 'Web Performance',
          p: 'A slow or unstable site creates friction before a potential customer ever reaches out — fixed through Core Web Vitals, PageSpeed, caching, image compression, and CDN, with documented before/after scores.',
          chips: ['Core Web Vitals', 'Performance Optimization', 'Technical Audits', 'Security Hardening'],
        },
        {
          h: 'Web Implementation',
          p: 'When the problem requires implementation, PeakCore fixes it directly instead of delivering another report — front-end fixes, WordPress, landing pages, and analytics setup, shipped and configured directly.',
          chips: ['Landing Pages', 'WordPress Optimization', 'HTML/CSS/JS', 'GA4 & GTM'],
        },
      ],
    },
    results: {
      h: 'Goals already achieved',
      note: 'Metrics from real projects',
      stats: [
        { count: 88, suffix: '+', cap: 'Mobile Speed increased in 5 days' },
        { count: 78, suffix: '%', cap: 'Average page-weight reduction' },
        { count: 72, suffix: 'h', cap: 'WooCommerce checkout recovered' },
      ],
    },
    work: {
      doctag: 'Project index',
      doctag2: '8 documented cases',
      title: 'Real projects. Before / after.',
      deck: 'Tap any row to open the detail and the metrics diff — the numbers come from Search Console and PageSpeed, not a marketing dashboard.',
      hProject: 'Project',
      hDiscipline: 'Discipline',
      hResult: 'Result',
      detailLink: 'See case study',
      detailProg: 'See progress',
      noMetric: 'No comparable metric',
      prog: '● In progress',
    },
    no: {
      h1: 'Just as important:',
      h2: "what I don't do.",
      items: [
        'I don\'t promise <s>"page one on Google in 30 days"</s>. No one can honestly guarantee that.',
        "I don't paper over a performance problem by piling on more code. The answer is almost always to remove, not add.",
        "I don't deliver reports you can't verify. Every metric I show you, you can measure yourself with the same free tools I use.",
      ],
    },
    stack: {
      doctag: 'Appendix A',
      doctag2: 'tools in production',
      title: 'All proven on real projects.',
      deck: 'Nothing on this list is decorative: every tool has been used on client work with documented results.',
    },
    steps: {
      title: 'How it works.',
      deck: 'Three steps, always in this order. Diagnosis comes before any implementation.',
      items: [
        {
          n: 'Understand',
          t: 'You share the problem',
          d: 'You share the website, the problem, or the goal. I review everything, ask the right questions, and align on scope before touching anything.',
        },
        {
          n: 'Diagnosis',
          t: 'I diagnose the root cause',
          d: "I identify what's actually getting in the way, prioritize what matters, and document the root causes — before any implementation.",
        },
        {
          n: 'Fix &amp; Measure',
          t: 'I fix it and measure it',
          d: 'Direct implementation, documented. What changed, and what you can measure, is always clear.',
        },
      ],
    },
    author: {
      h: "Who's behind this.",
      quote:
        "“Behind PeakCore there's a person, not an agency. When you write to me, I'm the one who answers; when something breaks on a Friday night, that's me too.”",
      p1: 'No outsourced team, no account managers, no layers between the problem and the person solving it.',
      p2: "This site is also my technical calling card: hand-built in HTML, CSS, and JavaScript, no frameworks, and the Lighthouse numbers above are from this very URL. If you're hiring someone to make your site fast, their own site had better be fast.",
      name: 'Maia Del Basso',
      role: 'Technical SEO & Web Optimization Specialist',
    },
    notes: {
      t: 'Notes',
      items: [
        "Really real: dated screenshots from PageSpeed Insights, GTmetrix, and Search Console with every delivery. If a number can't be verified, I don't publish it.",
        'Audit it yourself: open DevTools → Lighthouse and run the test on this URL. The numbers should repeat.',
        'GEO/AEO: optimizing so AI answer engines (AI Overviews, ChatGPT, Perplexity) find and cite the site as a source.',
      ],
    },
    cta: {
      h1: "Let's fix",
      h2: "what's costing you.",
      desc: "Have a website, search visibility, performance, or conversion problem you want fixed? Tell me what's going on and I'll take a look. Looking for a technical SEO specialist for your team instead — I'm open to that too.",
      link: 'Contact on LinkedIn',
    },
    col: {
      t1: 'Colophon',
      p1: 'Hand-built — HTML/CSS/JS, a single file, no frameworks. Type: Archivo, Newsreader, and Space Mono.',
      t2: 'Privacy',
      p2: "No cookies, no third-party trackers, no consent banners — because there's nothing to consent to.",
      t3: 'This page, right now',
      measuring: 'Measuring…',
      weight: 'transferred',
      reqs: 'requests',
      load: 'loaded in',
      copyright: '© 2026 PEAKCORE · Technical SEO · Web Optimization · Core Web Vitals · AI Search (GEO)',
      back: 'Back to top',
    },
    e404: {
      title: '404 — Page Not Found · PeakCore',
      description: "This page doesn't exist. The URL may be wrong, outdated, or the page may have moved.",
      h1a: 'This page',
      h1b: "doesn't exist.",
      lead: 'The URL may be wrong, outdated, or the page may have moved.',
      cta: 'Back to PeakCore',
      copyright: '© 2026 PEAKCORE · Technical SEO · Web Optimization · Core Web Vitals · AI Search (GEO)',
    },
  },
} as const;

// ---- Proyectos (tabla "Work index") ----
export interface Diff {
  l: string;
  before: string;
  after: string;
  /** anchos de barra (%) — si no hay, se calculan con lowerIsBetter */
  bw?: number;
  aw?: number;
  lowerIsBetter?: boolean;
}

export interface Project {
  n: string;
  prog: boolean;
  url: string;
  title: Record<Lang, string>;
  disc: string;
  key: string;
  desc: Record<Lang, string>;
  diffs: Diff[];
}

export const projects: Project[] = [
  { n: '01', prog: true, url: 'full-seo-program-real-estate',
    title: { es: 'Agencia inmobiliaria — programa SEO end-to-end', en: 'Real estate agency — end-to-end SEO program' },
    disc: 'Technical SEO · GEO/AI · WordPress', key: 'Fase 1 / 3 · Q3 2026',
    desc: { es: 'Programa de SEO end-to-end para una agencia inmobiliaria en Patagonia. Fundación técnica, optimización on-page, datos estructurados y visibilidad en GEO/AI Search a lo largo de un engagement de 3 fases.', en: 'End-to-end SEO program for a Patagonia real estate agency. Technical foundation, on-page optimization, structured data, and GEO/AI Search visibility across a 3-phase engagement.' },
    diffs: [] },
  { n: '02', prog: false, url: 'seo-audit-tour-operator-peru',
    title: { es: 'Auditoría técnica completa — pre-engagement', en: 'Full technical audit — pre-engagement' },
    disc: 'Technical SEO Audit', key: '459 URLs · 5 capas',
    desc: { es: 'Auditoría técnica completa antes de la primera reunión — detección de stack, análisis de Core Web Vitals, crawl completo y benchmark competitivo contra 3 dominios. Entregada como roadmap estratégico, no como lista de issues.', en: 'Full technical audit before the first meeting — stack detection, Core Web Vitals analysis, full crawl, and competitive benchmark across 3 domains. Delivered as a strategic roadmap, not an issue list.' },
    diffs: [] },
  { n: '03', prog: false, url: 'ga4-gtm-funnel-implementation',
    title: { es: 'SaaS B2B — implementación de analítica', en: 'B2B SaaS — analytics implementation' },
    disc: 'Analytics · Tracking · CRO', key: '0→6 eventos · HubSpot',
    desc: { es: 'Implementación completa de analítica para un SaaS B2B sin tracking de conversión. GA4 vía GTM, 6 eventos personalizados, atribución UTM e integración con HubSpot CRM.', en: 'Full analytics implementation for a B2B SaaS with zero conversion tracking. GA4 via GTM, 6 custom events, UTM attribution, and HubSpot CRM integration.' },
    diffs: [{ l: 'Eventos / Events', before: '0', after: '6', bw: 6, aw: 100 }] },
  { n: '04', prog: false, url: 'performance-first-wordpress-tourism',
    title: { es: 'Operador turístico — build performance-first', en: 'Tourism operator — performance-first build' },
    disc: 'Web Perf · CWV · WordPress', key: 'PageSpeed 97 · LCP 1.1s',
    desc: { es: 'Nuevo build de WordPress para un operador turístico en Patagonia. Diseñado performance-first desde el día uno — sin deuda de plugins, Core Web Vitals en verde desde el lanzamiento.', en: 'New WordPress build for a Patagonia tourism operator. Performance-first from day one — no plugin debt, Core Web Vitals in the green from launch.' },
    diffs: [{ l: 'PageSpeed', before: '—', after: '97', bw: 97, aw: 97 }] },
  { n: '05', prog: false, url: 'security-hardening-performance',
    title: { es: 'Servicios profesionales — seguridad + perf', en: 'Professional services — security + perf' },
    disc: 'Security · Web Perf · WordPress', key: 'LCP 7.2s→2.2s · Headers D→A',
    desc: { es: 'Auditoría de seguridad y optimización de performance para un sitio WordPress de servicios profesionales. SSL hardeneado, headers HTTP implementados y Core Web Vitals mejorados.', en: 'Security audit and performance optimization for a professional-services WordPress site. SSL hardened, HTTP headers implemented, and Core Web Vitals improved.' },
    diffs: [{ l: 'LCP', before: '7.2s', after: '2.2s', lowerIsBetter: true }] },
  { n: '06', prog: true, url: 'portfolio-wordpress-to-static-migration',
    title: { es: 'Este portfolio — auditado hasta el detalle', en: 'This portfolio — audited down to the detail' },
    disc: 'Technical SEO · Security · Perf', key: 'PageSpeed 77→99 · Headers D→A+',
    desc: { es: 'Auditoría técnica completa de mi propio sitio. Headers de seguridad hardeneados, WP Rocket configurado desde cero, y cada gap que revisaría un hiring manager técnico, cerrado.', en: 'Full technical audit of my own site. Hardened security headers, WP Rocket configured from scratch, and every gap a technical hiring manager would check, closed.' },
    diffs: [{ l: 'PageSpeed', before: '77', after: '99', bw: 77, aw: 99 }] },
  { n: '07', prog: false, url: 'woocommerce-performance-build',
    title: { es: 'WooCommerce desde cero — stack liviano', en: 'WooCommerce from scratch — lean stack' },
    disc: 'WooCommerce · CWV', key: 'Mobile 98 · LCP 2.1s · 205KB',
    desc: { es: 'Tienda WooCommerce construida desde cero con un stack performance-first. Mobile PageSpeed 98, LCP bajo 2.5s y 205KB de peso total — excepcionalmente liviano para WooCommerce.', en: 'WooCommerce store built from scratch on a performance-first stack. Mobile PageSpeed 98, LCP under 2.5s, and 205KB total weight — exceptionally lean for WooCommerce.' },
    diffs: [{ l: 'Mobile PageSpeed', before: '—', after: '98', bw: 98, aw: 98 }] },
  { n: '08', prog: false, url: 'woocommerce-technical-audit-security',
    title: { es: 'Tienda WooCommerce — rescate técnico', en: 'WooCommerce store — technical rescue' },
    disc: 'SEO · Security · WooCommerce', key: 'PageSpeed 31→74 · SSL C→A',
    desc: { es: 'Auditoría técnica de una tienda WooCommerce con problemas críticos de performance y seguridad. Stack de plugins reducido 58%, 7 CVEs parcheados y checkout restaurado de forma segura.', en: 'Technical audit of a WooCommerce store with critical performance and security issues. Plugin stack cut 58%, 7 CVEs patched, and checkout safely restored.' },
    diffs: [
      { l: 'PageSpeed', before: '31', after: '74', bw: 31, aw: 74 },
      { l: 'Plugins', before: '29', after: '12', lowerIsBetter: true },
    ] },
];

/**
 * Anchos de barra before/after. Mismo cálculo que el original:
 * en métricas donde "menos es mejor" se invierte para que "después" se vea más llena.
 */
export function barWidths(d: Diff): { bw: number; aw: number } {
  if (!d.lowerIsBetter) return { bw: d.bw as number, aw: d.aw as number };
  const num = (v: string) => parseFloat(String(v).replace(',', '.')) || 0;
  const b = num(d.before);
  const a = num(d.after);
  const ref = Math.max(b, a) * 1.2 || 1;
  return {
    bw: Math.max(6, Math.round(((ref - b) / ref) * 100)),
    aw: Math.max(6, Math.round(((ref - a) / ref) * 100)),
  };
}

/** Grupos del stack (los nombres de herramientas no se traducen) */
export const stackGroups: { h: string; items: string[] }[] = [
  { h: 'SEO & Search', items: ['Search Console', 'Rank Math', 'Yoast', 'Schema/JSON-LD', 'Screaming Frog', 'Ahrefs', 'SEMrush', 'Rich Results Test', 'Keyword research', 'E-E-A-T', 'GEO/AEO'] },
  { h: 'Analytics & Tracking', items: ['GA4', 'Google Tag Manager', 'Looker Studio', 'HubSpot'] },
  { h: 'Performance', items: ['WP Rocket', 'Cloudflare', 'PageSpeed Insights', 'GTmetrix', 'Lighthouse', 'Chrome DevTools'] },
  { h: 'WordPress & Build', items: ['WordPress', 'Elementor Pro', 'Astra Pro', 'WooCommerce', 'WPForms', 'WPCode', 'ACF'] },
  { h: 'Security', items: ['Wordfence', 'SSL Labs', 'Security Headers', 'Cloudflare WAF'] },
  { h: 'Front-End', items: ['HTML', 'CSS', 'JavaScript', 'PHP'] },
];

export const linkedin = 'https://www.linkedin.com/in/mdelbasso/';
