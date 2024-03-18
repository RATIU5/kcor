import Image from 'next/image';

export default function HomeHero() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 lg:flex-row">
      <div className="mx-16 my-8">
        <h1 className="text-center text-6xl font-bold">
          Sleep Better. And Then Some.
        </h1>
      </div>
      <div className="relative">
        <Image
          src="https://cdn11.bigcommerce.com/s-g5ubotok03/images/stencil/original/image-manager/category-pillows-split.jpeg?t=1678209808"
          width="1767"
          height="920"
          className="z-0"
          alt="Woman sleeping on a bed"
        />
      </div>
    </div>
  );
}
