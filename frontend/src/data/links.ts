export type Link = {
  name: string;
  href: string;
};

export const navigationLinks: Link[] = [
  { href: '/', name: 'Dom' },
  { href: '/kontakt', name: 'Kontakt' },
];

export const socialLinks: Link[] = [
  { href: 'https://facebook.com/bartekmiezynski', name: 'facebook' },
  { href: 'https://instagram.com/bartekmiezynski', name: 'instagram' },
  { href: 'https://www.youtube.com/@bartekmiezynski', name: 'youtube' },
  { href: 'https://bartekmiezynski.bandcamp.com', name: 'bandcamp' },
];
