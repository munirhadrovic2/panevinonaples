import JsonLd from '@/components/JsonLd';
import { pageMetadata, menuPageJsonLd } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Italian Antipasti in North Naples, FL',
  description: 'Hot Italian antipasti at Panevino Ristorante in North Naples, FL: calamari fritti, eggplant rollatini, clams casino, fresh mussels and clams.',
  path: '/antipasti',
  image: '/images/menu/antipasti.jpg',
  imageAlt: 'Antipasti at Panevino Ristorante in North Naples, FL',
});

export default function AntipastiLayout({ children }) {
  return (
    <>
      {children}
      <JsonLd data={menuPageJsonLd('antipasti')} />
    </>
  );
}
