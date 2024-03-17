import { cn } from '@/lib/utils';

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Button(props: ButtonProps) {
  return (
    <button
      className={cn(
        'flex w-full items-center justify-center rounded-lg border-2 border-solid border-neutral-200 bg-white focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-blue-500',
        props.className,
      )}
    >
      {props.children}
    </button>
  );
}
