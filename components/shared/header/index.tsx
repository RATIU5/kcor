import { env } from '@/lib/env';
import ResponsiveMenu from './responsive-menu';

export default function Header() {
  const storeName = env.SITE_NAME;

  return (
    <header>
      <ResponsiveMenu storeName={storeName} />
    </header>
  );
}
