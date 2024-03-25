import Image from "next/image";

export default function AboutGrid() {
  return (
    <div className="decades-info h-full max-w-[1448px] flex flex-col">
      <div>
        <h2 className="decades-header text-4xl font-bold  border-b border-stone-300 pb-5">
          Decades of Innovation
        </h2>
      </div>
      <div className="story-section flex flex-col">
        <p className="story-paragraph py-8">
          Our story begins in 2003. Newlyweds Sam and Kacie had just moved into a
          new apartment and wanted to upgrade their bedroom. In their search for
          high-quality bedding, Sam and Kacie realized their options were limited.
          They were looking for something better, and that’s when they created
          Malouf Home.
        </p>
        <picture className="sam-kacie min-h-[300px]">
          <Image
          className="min-h-[340px] w-full object-cover"
          src="https://cdn11.bigcommerce.com/s-dng8lm8hez/images/stencil/original/image-manager/desktop.png?t=1706026878"
          alt="Home CTA"
          width={300}
          height={100}
          />
        </picture>
      </div>
      <div className="product-section">
        <picture className="pillow">
        <Image
          src="https://cdn11.bigcommerce.com/s-dng8lm8hez/images/stencil/original/image-manager/desktop-pillow.png?t=1706027151"
          alt="Home CTA"
          width={100}
          height={100}
          />
        </picture>
        <p className="story-paragraph">
          The first product we sold was Egyptian Cotton Sheets. In 20 years, we’ve
          dialed in our expertise on accessories⏤from sheets to pillows to
          protectors⏤and have released a revolutionary line of adjustable bed
          bases. And now, we’re launching our coolest mattress ever⏤the Ice Cloud.
          The outcome is exceptional sleep that fuels your day and your life.
        </p>
      </div>
    </div>
  )
}