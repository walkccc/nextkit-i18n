import { useTranslations } from 'next-intl';

import { MarketingConfig } from '@/types';

export const marketingConfig: MarketingConfig = {
  getNavItems: (t: ReturnType<typeof useTranslations>) => [
    {
      title: t('navItems.features'),
      href: '/#features',
    },
    {
      title: t('navItems.pricing'),
      href: '/pricing',
    },
    {
      title: t('navItems.demo'),
      href: '/demo',
      disabled: true,
    },
    {
      title: t('navItems.documentation'),
      href: '/docs',
    },
  ],
};
