export type Industry = {
  slug: string;
  name: string;
  hero: string;
  subline: string;
  problem: string;
  solution: string;
  result: string;
  resultMetric: string;
  service: 'website' | 'automation' | 'ecommerce';
  keywords: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
};

export const industries: Industry[] = [
  {
    slug: 'welding-businesses',
    name: 'Welding & Fabrication',
    hero: 'Your welding business does great work. Your customers just can\'t find you.',
    subline: 'A professional website means the next company looking for a welder finds you first — not your competitor.',
    problem: 'Most welding and fabrication businesses run entirely on referrals. That works until it doesn\'t. A single slow month, a client who moves on, and suddenly the pipeline is empty. You need a home online that works for you even when you\'re in the workshop.',
    solution: 'We build clean, fast websites for welding and steel fabrication businesses that show up on Google when someone searches for a welder in your area. Clear services, real photos, a contact form and a WhatsApp button.',
    result: 'New enquiries from businesses that had never heard of you before.',
    resultMetric: '+340% enquiries in 90 days',
    service: 'website',
    keywords: [
      'website for welding business',
      'welding company website',
      'steel fabrication website',
      'digital presence for welders',
      'website for fabrication shop',
    ],
    testimonial: {
      quote: 'We got 3 new fabrication contracts in the first 6 weeks after launch. I didn\'t change anything else.',
      author: 'Kofi A.',
      role: 'Steel fabrication · Kumasi, Ghana',
    },
  },
  {
    slug: 'pharmacies',
    name: 'Pharmacies',
    hero: 'Your staff shouldn\'t spend 4 hours a day answering the same WhatsApp messages.',
    subline: 'An AI assistant handles stock queries, refill requests and opening hours automatically — 24 hours a day.',
    problem: '"Do you have X in stock?" "What time do you close?" "Can I get a refill?" These messages come in every single day. Your staff answers them manually, over and over, while real customers wait for real help.',
    solution: 'We build WhatsApp AI assistants for pharmacies that handle the repeat questions automatically. Your team only sees the messages that actually need a human. Everything else is handled.',
    result: 'Staff focused on customers, not typing.',
    resultMetric: '73% of messages handled automatically',
    service: 'automation',
    keywords: [
      'WhatsApp automation for pharmacy',
      'pharmacy chatbot',
      'AI assistant for pharmacy',
      'pharmacy WhatsApp bot',
      'automate pharmacy enquiries',
    ],
    testimonial: {
      quote: 'Our staff went from drowning in messages to only handling the ones that actually need a human. It changed everything.',
      author: 'Dr. N. Osei',
      role: 'Community pharmacy · Accra, Ghana',
    },
  },
  {
    slug: 'barbershops',
    name: 'Barbershops',
    hero: 'People search for barbers online every day. Are you showing up?',
    subline: 'A landing page with your services, prices and a booking button means new customers find you and book — without calling first.',
    problem: 'When someone moves to a new area or wants to try somewhere new, they Google it. If you\'re not there, you don\'t exist to them. It\'s that simple.',
    solution: 'We build landing pages for barbershops that show up in local search. Your services, prices, location, photos and a booking option — everything a new customer needs to choose you.',
    result: 'New customers who found you on Google.',
    resultMetric: '+55% bookings after launch',
    service: 'website',
    keywords: [
      'website for barbershop',
      'barbershop landing page',
      'barber booking website',
      'barbershop online presence',
      'local barbershop website',
    ],
    testimonial: {
      quote: 'I used to lose customers because they couldn\'t find my number. Now they just book online and show up.',
      author: 'Jamal K.',
      role: 'Barbershop · Dubai, UAE',
    },
  },
  {
    slug: 'clothing-stores',
    name: 'Clothing Stores',
    hero: 'WhatsApp statuses aren\'t a shop. Let\'s build you a real one.',
    subline: 'An online store means anyone, anywhere, anytime can browse, see prices and pay — without you having to be awake.',
    problem: 'Posting new arrivals to a WhatsApp status means only 200 people see it for 24 hours. You\'re manually taking orders, confirming payments, and updating stock. There\'s a better way.',
    solution: 'We build proper e-commerce stores for clothing boutiques — product pages, clear pricing, payment integration and delivery tracking. Your customers shop. You fulfil. No back and forth.',
    result: 'Orders coming in while you sleep.',
    resultMetric: '68% of orders fully automated',
    service: 'ecommerce',
    keywords: [
      'online store for clothing boutique',
      'e-commerce for clothing store Africa',
      'WhatsApp to online store',
      'clothing store website',
      'boutique e-commerce',
    ],
    testimonial: {
      quote: 'My customers can now shop at midnight. I wake up to orders I didn\'t even know about.',
      author: 'Amara S.',
      role: 'Clothing boutique · Lagos, Nigeria',
    },
  },
  {
    slug: 'construction',
    name: 'Construction',
    hero: 'Your construction business builds things that last. Your website should too.',
    subline: 'A professional site that shows your projects, your team and how to hire you — built to last and built to rank.',
    problem: 'Most construction companies rely entirely on word of mouth and repeat clients. That\'s not a growth strategy — it\'s a ceiling.',
    solution: 'We build websites for construction businesses that showcase completed projects, services offered and contact details clearly. Optimised for local and regional search so new clients find you.',
    result: 'Inbound enquiries from businesses you\'ve never met.',
    resultMetric: '+200% inbound enquiries',
    service: 'website',
    keywords: [
      'website for construction company',
      'construction business website',
      'contractor website design',
      'construction company online presence',
      'building company website',
    ],
    testimonial: {
      quote: 'We started getting calls from companies we\'d never heard of. The website paid for itself in the first month.',
      author: 'Emmanuel T.',
      role: 'Construction · Nairobi, Kenya',
    },
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    hero: 'Your listings deserve better than a Facebook post.',
    subline: 'A proper real estate website with listings, filters and contact forms means serious buyers find you first.',
    problem: 'Sharing property photos on WhatsApp and Facebook works until a serious buyer can\'t find what they saw two weeks ago. You need a home for your listings.',
    solution: 'We build clean real estate websites with property listings, search filters, enquiry forms and WhatsApp integration. Professional enough to win trust, simple enough to manage yourself.',
    result: 'Serious buyers contacting you directly.',
    resultMetric: '3x more qualified enquiries',
    service: 'website',
    keywords: [
      'real estate website Africa',
      'property listing website',
      'real estate agent website',
      'property website design',
      'real estate digital presence',
    ],
    testimonial: {
      quote: 'My listings now get seen by people who are actually looking to buy, not just scrolling Facebook.',
      author: 'Grace M.',
      role: 'Real estate agent · Kampala, Uganda',
    },
  },
  {
    slug: 'florists',
    name: 'Florists',
    hero: 'Beautiful flowers deserve a beautiful website.',
    subline: 'A landing page with your arrangements, prices and an order form means customers find you for weddings, events and everyday orders.',
    problem: 'Most florists get found through word of mouth or Instagram. That\'s fine until someone searches "florist near me" and finds your competitor instead.',
    solution: 'We build landing pages for florists with your arrangements, pricing, delivery area and an order or enquiry form. Simple, beautiful, effective.',
    result: 'New customers finding you on Google.',
    resultMetric: '+80% new customer enquiries',
    service: 'website',
    keywords: [
      'website for florist',
      'florist landing page',
      'flower shop website',
      'florist online presence',
      'local florist website',
    ],
    testimonial: {
      quote: 'I now get wedding enquiries from people who found me on Google. That never happened before.',
      author: 'Priya R.',
      role: 'Florist · London, UK',
    },
  },
  {
    slug: 'car-wash',
    name: 'Car Wash',
    hero: 'People search for car washes near them every single day.',
    subline: 'A simple landing page with your location, services, prices and opening hours means they find you — not the place down the road.',
    problem: 'Car wash customers are local and they search online before they drive anywhere. If you\'re not showing up in that search, you\'re invisible.',
    solution: 'We build local landing pages for car wash businesses optimised for "car wash near me" searches. Your location, services, prices and a WhatsApp booking option.',
    result: 'New customers driving in from search.',
    resultMetric: '+120% new customer visits',
    service: 'website',
    keywords: [
      'website for car wash',
      'car wash landing page',
      'car wash local SEO',
      'car wash online presence',
      'car wash booking website',
    ],
    testimonial: {
      quote: 'Three customers in the first week said they found us on Google. We\'d never had that before.',
      author: 'David O.',
      role: 'Car wash · Accra, Ghana',
    },
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
