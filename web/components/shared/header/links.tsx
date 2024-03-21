import { Button } from '@/components/ui/button';

export type LinksProps = {
  isMobileOpen: boolean;
};

export default function Links(props: Readonly<LinksProps>) {
  return (
    <ul className="flex flex-col gap-8 text-2xl uppercase lg:flex-row lg:gap-6 lg:text-base">
      <li>
        <Button asChild tabIndex={props.isMobileOpen ? 0 : -1} variant="link">
          <a href="/mattresses">Mattresses</a>
        </Button>
      </li>
      <li>
        <Button asChild tabIndex={props.isMobileOpen ? 0 : -1} variant="link">
          <a href="/bed-frames">Bed&nbsp;Frames</a>
        </Button>
      </li>
      <li>
        <Button asChild tabIndex={props.isMobileOpen ? 0 : -1} variant="link">
          <a href="/headboards">Headboards</a>
        </Button>
      </li>
      <li>
        <Button asChild tabIndex={props.isMobileOpen ? 0 : -1} variant="link">
          <a href="/toppers">Toppers</a>
        </Button>
      </li>
      <li>
        <Button asChild tabIndex={props.isMobileOpen ? 0 : -1} variant="link">
          <a href="/pillows">Pillows</a>
        </Button>
      </li>
    </ul>
  );
}
