import { Button } from '../ui/button';

export default function HomeHero() {
  return (
    <div className="heroContainer bg-hero mx-auto flex h-[600px] w-full max-w-[1800px] overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat 2xl:h-[700px] 2xl:items-end">
      <div className="hero-image-filter absolute left-0 top-0 h-full w-full"></div>
      <div className="hero-content-copy flex w-full flex-col justify-around px-4 md:px-14 md:py-10 2xl:px-40 2xl:pb-16">
        <div className="hero-text flex h-60 flex-col 2xl:h-48 2xl:justify-between">
          <h1 className="max-w-xl pb-4 text-5xl font-bold sm:text-6xl">
            SPRING LINEN COLLECTION
          </h1>
          <hr className="hero-line max-w-xl pb-4" />
          <p className="max-w-xl text-lg">
            Indulge in the luxurious comfort of our Spring Linen Collection,
            meticulously crafted to enhance your sleep experience with its fresh
            and breezy textures. Elevate your relaxation and embrace the essence
            of springtime serenity.
          </p>
        </div>
        <div className="hero-button flex w-full justify-center sm:justify-start 2xl:justify-end">
          <Button className="w-48" variant="secondary">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}
