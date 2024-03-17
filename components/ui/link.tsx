import { cn } from '@/lib/utils';

export type LinkProps = {
  href: string;
  tabIndex: number;
  className?: string;
  children: React.ReactNode;
};

export default function Link(props: LinkProps) {
  return (
    <a
      href={props.href}
      className={cn('text-neutral-700', props.className)}
      tabIndex={props.tabIndex}
    >
      {props.children}
    </a>
  );
}
