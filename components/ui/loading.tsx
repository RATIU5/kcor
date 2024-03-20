import { IconSpinner } from '@/components/icons';

export default function Loading() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <IconSpinner className="h-8 w-8 animate-spin" />
    </div>
  );
}
