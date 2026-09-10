import JsonLd from '@/components/JsonLd';
import { pageMetadata, menuPageJsonLd } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Italian Seafood in North Naples, FL',
  description: 'Shrimp scampi, shrimp arrabbiata, linguine with calamari, seafood linguine and fresh fish of the day at Panevino Ristorante in North Naples, FL.',
  path: '/seafood',
  image: '/images/menu/seafood.jpg',
  imageAlt: 'Italian seafood at Panevino Ristorante in North Naples, FL',
});

export default function SeafoodLayout({ children }) {
  return (
    <>
      {children}
      <JsonLd data={menuPageJsonLd('seafood')} />
    </>
  );
}
