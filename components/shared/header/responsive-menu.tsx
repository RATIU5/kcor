'use client';

import { IconBag, IconClose, IconMenu, IconSearch } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';
import Links from './links';

export type ResponsiveMenuProps = {
  storeName: React.ReactNode;
};

export default function ResponsiveMenu(props: Readonly<ResponsiveMenuProps>) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div className="sticky top-0 z-10 flex items-center justify-between bg-neutral-50 p-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex lg:hidden "
        >
          {isOpen ? (
            <IconClose title="Close Menu" />
          ) : (
            <IconMenu title="Open Menu" />
          )}
        </Button>
        <div>
          <a href="/" className="text-xl">
            {props.storeName}
          </a>
        </div>
        <div className="hidden lg:block">
          <Links isMobileOpen={true} />
        </div>
        <div className="flex items-center justify-center lg:gap-4">
          <Button size="icon" variant="secondary" className="hidden lg:flex">
            <IconSearch title="Search the site" />
          </Button>
          <Button size="icon">
            <IconBag title="Shopping Bag" />
          </Button>
        </div>
      </div>

      {/* The mobile menu */}
      <div
        tabIndex={-1}
        className={cn(
          'pointer-events-none absolute z-0 h-[calc(100vh-62px)] w-full bg-neutral-50 px-4 pt-4 opacity-0 transition-all duration-300 lg:hidden',
          {
            'opacity-100': isOpen,
            'z-20': isOpen,
            'pointer-events-auto': isOpen,
          },
        )}
      >
        <Button size="icon">
          <IconSearch title="Search the site" />
        </Button>
        <Links isMobileOpen={isOpen} />
      </div>
    </>
  );
}
