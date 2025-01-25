'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useParams } from 'next/navigation';
import * as React from 'react';

import { AppearanceToggle } from '@/components/appearance-toggle';
import { Icons } from '@/components/icons';
import { LanguageToggle } from '@/components/language-toggle'; // Import the new LanguageToggle component
import { MobileNav } from '@/components/mobile-nav';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { NavItem } from '@/types';

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  navItems?: NavItem[];
  children?: React.ReactNode;
  localeText: {
    menu: string;
    login: string;
  };
}

export function Navbar({
  navItems,
  children,
  className,
  localeText,
}: NavbarProps) {
  const { locale } = useParams();
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <header className={className}>
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="hidden items-center space-x-2 md:flex">
            <Icons.logo />
            <span className="hidden font-bold sm:inline-block">
              {siteConfig.name}
            </span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            {navItems?.map((navItem, index) => (
              <Link
                key={index}
                href={navItem.disabled ? '#' : `/${locale}${navItem.href}`}
                className={cn(
                  'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',
                  navItem.href.startsWith(`/${segment}`)
                    ? 'text-foreground/100'
                    : 'text-foreground/50',
                  navItem.disabled && 'cursor-not-allowed opacity-80',
                )}
              >
                {navItem.title}
              </Link>
            ))}
          </nav>
          <button
            className="flex items-center space-x-2 md:hidden"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? <Icons.close /> : <Icons.logo />}
            <span className="font-bold">{localeText.menu}</span>
          </button>
          {showMobileMenu && navItems && (
            <MobileNav navItems={navItems}>{children}</MobileNav>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <AppearanceToggle />
          <LanguageToggle locale={locale} />
          <Link
            href={`/${locale}/login`}
            className={cn(
              buttonVariants({ variant: 'secondary', size: 'sm' }),
              'px-4',
            )}
          >
            {localeText.login}
          </Link>
        </div>
      </div>
    </header>
  );
}
