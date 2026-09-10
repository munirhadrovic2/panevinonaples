import JsonLd from '@/components/JsonLd';
import { pageMetadata, menuPageJsonLd } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Homemade Pasta in North Naples, FL',
  description: 'Homemade gnocchi, lasagna, fettuccine and ravioli, plus classic spaghetti, penne and linguine with clam sauce at Panevino Ristorante in North Naples, FL.',
  path: '/pasta',
  image: '/images/menu/pasta.jpg',
  imageAlt: 'Homemade pasta at Panevino Ristorante in North Naples, FL',
});

export default function PastaLayout({ children }) {
  return (
    <>
      {children}
      <JsonLd data={menuPageJsonLd('pasta')} />
    </>
  );
}
