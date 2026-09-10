import JsonLd from '@/components/JsonLd';
import { pageMetadata, menuPageJsonLd } from '@/lib/seo';

export const metadata = pageMetadata({
  title: "Chef's Nightly Specials in North Naples",
  description: "Chilean sea bass, Dover sole deboned tableside, osso buco, veal chops and lobster ravioli: nightly chef's specials at Panevino in North Naples, FL.",
  path: '/specials',
  image: '/images/menu/specials.jpg',
  imageAlt: "Chef's specials at Panevino Ristorante in North Naples, FL",
});

export default function SpecialsLayout({ children }) {
  return (
    <>
      {children}
      <JsonLd data={menuPageJsonLd('specials')} />
    </>
  );
}
