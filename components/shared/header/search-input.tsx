import { IconSearch } from '@/components/icons';
import { cn } from '@/lib/utils';
import React from 'react';

export type SearchInputProps = {
  tabIndex?: number;
  className?: string;
};

export default function SearchInput(props: SearchInputProps) {
  const [query, setQuery] = React.useState('');

  return (
    <form action={`/search?q=${query}`} method="post">
      <label
        tabIndex={props.tabIndex}
        htmlFor="searchInput"
        className={cn(
          'mb-8 flex max-h-10 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg border-2 border-solid border-neutral-200 bg-white p-2 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-blue-500',
          props.className,
        )}
      >
        <input
          type="text"
          id="searchInput"
          placeholder="Search products..."
          onChange={(e) => setQuery(encodeURIComponent(e.target.value))}
          className="w-full outline-none transition-all duration-200 focus:mr-2 focus:w-auto lg:w-0"
        />
        <IconSearch className="h-5 w-5 text-neutral-600" />
      </label>
    </form>
  );
}
