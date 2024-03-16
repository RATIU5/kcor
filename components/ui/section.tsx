import { cn } from '@/lib/utils';

export type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Section(props: SectionProps) {
  return (
    <section
      className={cn(
        'flex w-full flex-col items-start justify-start',
        props.className,
      )}
    >
      {props.children}
    </section>
  );
}
