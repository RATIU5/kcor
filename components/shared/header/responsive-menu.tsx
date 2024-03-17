'use client';

import { IconBag, IconClose, IconMenu } from '@/components/icons';
import Button from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';
import Links from './links';
import SearchInput from './search-input';

export type ResponsiveMenuProps = {
  storeName: React.ReactNode;
};

export default function ResponsiveMenu(props: ResponsiveMenuProps) {
  const { storeName } = props;
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div className="sticky z-10 flex items-center justify-between border-b-2 border-solid border-neutral-200 bg-neutral-50 p-4">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="block lg:hidden"
        >
          {isOpen ? <IconClose /> : <IconMenu />}
        </button>
        <div>
          <a href="/" className="text-xl">
            {storeName}
          </a>
        </div>
        <div className="hidden lg:block">
          <Links isMobileOpen={true} />
        </div>
        <div className="flex items-center justify-center lg:gap-4">
          <SearchInput className="hidden lg:m-0 lg:flex" />
          <Button className="h-10 w-10 p-2 text-neutral-600">
            <IconBag />
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
        <SearchInput tabIndex={isOpen ? 0 : -1} />
        <Links isMobileOpen={isOpen} />
      </div>
    </>
  );
}
