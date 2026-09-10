import JsonLd from '@/components/JsonLd';
import { pageMetadata, menuPageJsonLd } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Salads & Cold Antipasti in North Naples',
  description: 'Caesar, burrata, caprese, carpaccio, bresaola and prosciutto with melon: fresh salads and cold antipasti at Panevino Ristorante in North Naples, FL.',
  path: '/salad',
  image: '/images/menu/salad.jpg',
  imageAlt: 'Italian salads at Panevino Ristorante in North Naples, FL',
});

export default function SaladLayout({ children }) {
  return (
    <>
      {children}
      <JsonLd data={menuPageJsonLd('salad')} />
    </>
  );
}
