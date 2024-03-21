import Image from 'next/image';
import { Button } from '../ui/button';

export default function CTA() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <div className="cta-img-container relative h-[150px] w-full overflow-hidden rounded-3xl sm:h-[200px] md:h-[250px] 2xl:h-[330px]">
        <Image
          className="image-container object-cover"
          src="https://images.unsplash.com/photo-1688384452844-8364c3e2fc28?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Home CTA"
          fill
        />
      </div>
      <div className="content-container">
        <h2 className="relative z-10 pb-4 text-center text-4xl font-bold text-stone-800 sm:text-5xl md:pb-6 md:pt-4">
          Dream in Elegance
        </h2>
        {/* <hr className="cta-splitter-line max-w-lg pb-4 border-stone-400/[0.5]" /> */}
        <p className="text-md max-w-xl pb-4 text-center text-stone-800/[0.65]">
          Crafted with the finest materials for a night of unparalleled luxury.
        </p>
      </div>
      <div className="hero-button flex w-full justify-center">
        <Button className="w-48" variant="default">
          Learn More
        </Button>
      </div>
    </div>
  );
}
