import { Button } from '../ui/button';

export default function HomeHero() {
  return (
    <div className="heroContainer flex h-[600px] w-full overflow-hidden rounded-3xl bg-hero bg-cover bg-center bg-no-repeat 2xl:items-end">
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
          <Button className="w-52" variant="secondary">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
    // <div className="flex w-full flex-col items-center justify-center gap-4 lg:flex-row">
    //   <div className="mx-16 my-8">
    //     <h1 className="text-center text-6xl font-bold relative z-10">
    //       Sleep Better. And Then Some.
    //     </h1>
    //   </div>
    //   <div className="absolute w-full h-[800px]">
    //     <Image
    //       src="https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //       fill
    //       className="z-0 w-full object-cover"
    //       alt="Woman sleeping on a bed"
    //     />
    //   </div>
    // </div>
  );
}
