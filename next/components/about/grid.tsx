import Image from 'next/image';

export default function AboutGrid() {
  return (
    <div className="decades-info flex h-full max-w-[1448px] flex-col">
      <div>
        <h2 className="decades-header border-b border-stone-300  pb-5 text-4xl text-center uppercase tracking-[2.24px] md:text-left">
          Decades of Innovation
        </h2>
      </div>
      <div className="story-section flex flex-col md:flex-row md:py-8">
        <p className="story-paragraph py-8 text-center md:text-left md:w-[35%] md:max-h-[300px] md:mr-10">
          Our story begins in 2003. Newlyweds Sam and Kacie had just moved into
          a new apartment and wanted to upgrade their bedroom. In their search
          for high-quality bedding, Sam and Kacie realized their options were
          limited. They were looking for something better, and that’s when they
          created Malouf Home.
        </p>
        <picture className="sam-kacie min-h-[300px] md:pl-10 md:border-l border-stone-300">
          <Image
            className="sam-kacie-destop-img min-h-[340px] object-cover hidden md:object-contain lg:block"
            src="https://cdn11.bigcommerce.com/s-dng8lm8hez/images/stencil/original/image-manager/desktop.png?t=1706026878"
            alt="Sam and Kacie Malouf"
            width={375}
            height={187}
          />
          <Image
            className="sam-kacie-mobile-img min-h-[300px] max-h-[340px] flex mx-auto object-cover lg:hidden"
            src="https://cdn11.bigcommerce.com/s-dng8lm8hez/images/stencil/original/image-manager/mobile.png?t=1706026857"
            alt="Sam and Kacie Malouf"
            width={375}
            height={187}
          />
        </picture>
      </div>
      <div className="product-section pt-8 flex flex-col md:flex-row">
        <picture className="pillow md:pr-10 md:border-r md:border-stone-300">
          <Image
            className="pillow-deskgtop-img min-h-[300px] w-full object-cover hidden md:object-contain lg:block"
            src="https://cdn11.bigcommerce.com/s-dng8lm8hez/images/stencil/original/image-manager/desktop-pillow.png?t=1706027151"
            alt="Home CTA"
            width={375}
            height={187}
          />
          <Image
            className="pillow-mobile-img min-h-[300px]  flex mx-auto object-cover lg:hidden"
            src="https://cdn11.bigcommerce.com/s-dng8lm8hez/images/stencil/original/image-manager/mobile-pillow.png?t=1706027150"
            alt="Home CTA"
            width={375}
            height={187}
          />
        </picture>
        <p className="story-paragraph py-8 text-center md:text-left md:w-[35%] md:max-h-[300px] md:ml-10 md:py-0">
          The first product we sold was Egyptian Cotton Sheets. In 20 years,
          we’ve dialed in our expertise on accessories⏤from sheets to pillows to
          protectors⏤and have released a revolutionary line of adjustable bed
          bases. And now, we’re launching our coolest mattress ever⏤the Ice
          Cloud. The outcome is exceptional sleep that fuels your day and your
          life.
        </p>
      </div>
    </div>
  );
}
