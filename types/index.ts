import { useTranslations } from 'next-intl';

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MarketingConfig = {
  getNavItems: (t: ReturnType<typeof useTranslations>) => NavItem[]; // A function to fetch translated nav items
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  links: {
    twitter: string;
    github: string;
  };
};
