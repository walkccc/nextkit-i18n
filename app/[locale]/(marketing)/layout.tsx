import { useTranslations } from 'next-intl';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { marketingConfig } from '@/config/marketing';

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  const t = useTranslations('navbar');
  const navItems = marketingConfig.getNavItems(t);

  return (
    <>
      <Navbar
        navItems={navItems}
        localeText={{
          menu: t('menu'),
          login: t('login'),
        }}
      />
      {children}
      <Footer />
    </>
  );
}
