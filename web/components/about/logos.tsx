import Image from "next/image";

export default function Logos() {
  return (
    <div className="w-full gap-10 py-10">
      <div className="flex items-center justify-center gap-10 mx-4 md:gap-24">
        <Image
          src="https://cdn11.bigcommerce.com/s-dng8lm8hez/images/stencil/original/image-manager/logo-black.png?t=1711128976"
          alt="Home CTA"
          width={100}
          height={100}
        />
        <Image
          src="https://cdn11.bigcommerce.com/s-dng8lm8hez/images/stencil/original/image-manager/logo-black.png?t=1711128976"
          alt="Home CTA"
          width={100}
          height={100}
        />
        <Image
        className="hidden sm:block"
          src="https://cdn11.bigcommerce.com/s-dng8lm8hez/images/stencil/original/image-manager/logo-black.png?t=1711128976"
          alt="Home CTA"
          width={100}
          height={100}
        />
        <Image
        className="hidden md:block"
          src="https://cdn11.bigcommerce.com/s-dng8lm8hez/images/stencil/original/image-manager/logo-black.png?t=1711128976"
          alt="Home CTA"
          width={100}
          height={100}
        />
        <Image
        className="hidden 2xl:block"
          src="https://cdn11.bigcommerce.com/s-dng8lm8hez/images/stencil/original/image-manager/logo-black.png?t=1711128976"
          alt="Home CTA"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}