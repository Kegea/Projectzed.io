export default function StructuredData() {
  const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://projectzed.io';
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      // Organization
      {
        '@type': 'Organization',
        '@id': `${BASE_URL}/#organization`,
        name: 'ProjectZed',
        url: BASE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${BASE_URL}/android-chrome-512x512.png`,
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+256784749832',
          contactType: 'customer service',
          availableLanguage: ['English', 'French', 'Spanish'],
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kampala',
          addressCountry: 'UG',
        },
        sameAs: [],
        description:
          'ProjectZed builds websites, AI automation, and e-commerce systems for SMBs globally.',
      },
      // WebSite
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: 'ProjectZed',
        publisher: {
          '@id': `${BASE_URL}/#organization`,
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${BASE_URL}/en?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
      // Service
      {
        '@type': 'Service',
        '@id': `${BASE_URL}/#service`,
        name: 'Digital Infrastructure for SMBs',
        provider: {
          '@id': `${BASE_URL}/#organization`,
        },
        serviceType: [
          'Web Design',
          'AI Automation',
          'E-commerce Development',
          'WhatsApp Automation',
        ],
        areaServed: {
          '@type': 'Place',
          name: 'Worldwide',
        },
        audience: {
          '@type': 'Audience',
          audienceType: 'Small and Medium Businesses',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
