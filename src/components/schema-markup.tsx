export function SchemaMarkup() {
  const schemaDetails = {
    "@context": "https://schema.org",
    "@type": "IndustrialBusiness",
    "name": "Expertlar Professional Services",
    "image": "https://expertlar.uz/logo.png",
    "url": "https://expertlar.uz",
    "telephone": "+998 90 123 45 67",
    "email": "info@expertlar.uz",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Amir Temur str. 108",
      "addressLocality": "Tashkent",
      "addressRegion": "Yunusabad district",
      "postalCode": "100084",
      "addressCountry": "UZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.363365,
      "longitude": 69.281864
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.linkedin.com/company/expertlar",
      "https://t.me/expertlar"
    ],
    "description": "Expertlar offers comprehensive Non-Destructive Testing (NDT), pipeline diagnostics, and protective coating services across Uzbekistan."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaDetails) }}
    />
  );
}
