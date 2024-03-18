import Section from '@/components/ui/section';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex">
      <Section>
        <div className="flex w-full flex-col-reverse items-center justify-center md:flex-row">
          <div className="z-10">
            <h1 className="text-shadow-md text-center text-5xl font-semibold md:max-w-96 lg:max-w-[600px]">
              Experience the Gold Standard in Sleep Comfort and Design.
            </h1>
          </div>
          <div className="pointer-events-none z-0 max-h-[600px]">
            <Image
              src="/img/bed2.png"
              alt="Cozy grey bed with grey pillows and blankets"
              width="2688"
              height="1792"
              className="pointer-events-none"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
