'use client';

import Link from '@/components/ui/link';

export type LinksProps = {
  isMobileOpen: boolean;
};

export default function Links(props: LinksProps) {
  return (
    <ul className="flex flex-col gap-8 text-2xl uppercase lg:flex-row lg:gap-6 lg:text-base">
      <li>
        <Link href="/mattresses" tabIndex={props.isMobileOpen ? 0 : -1}>
          Mattresses
        </Link>
      </li>
      <li>
        <Link href="/bed-frames" tabIndex={props.isMobileOpen ? 0 : -1}>
          Bed&nbsp;Frames
        </Link>
      </li>
      <li>
        <Link href="/headboards" tabIndex={props.isMobileOpen ? 0 : -1}>
          Headboards
        </Link>
      </li>
      <li>
        <Link href="/toppers" tabIndex={props.isMobileOpen ? 0 : -1}>
          Toppers
        </Link>
      </li>
      <li>
        <Link href="/pillows" tabIndex={props.isMobileOpen ? 0 : -1}>
          Pillows
        </Link>
      </li>
    </ul>
  );
}
