import JsonLd from '@/components/JsonLd';
import { pageMetadata, menuPageJsonLd } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Chicken & Veal Dishes in North Naples, FL',
  description: 'Chicken and veal piccata, marsala and francese, veal saltimbocca, and eggplant, chicken and veal parmigiana at Panevino Ristorante in North Naples, FL.',
  path: '/pollo',
  image: '/images/menu/pollo.jpg',
  imageAlt: 'Chicken and veal dishes at Panevino Ristorante in North Naples, FL',
});

export default function PolloLayout({ children }) {
  return (
    <>
      {children}
      <JsonLd data={menuPageJsonLd('pollo')} />
    </>
  );
}
