import Image from 'next/image';
import { Button } from '../ui/button';

export default function CategoryHero() {
  return (
    <div className="heroContainer mx-auto flex h-auto w-full max-w-[1448px] overflow-hidden rounded-3xl 2xl:h-[550px]">
      <div className="hero-content-copy flex w-full flex-col px-4 md:flex-row">
        <div className="hero-text mx-auto flex flex-col md:justify-center">
          <h1 className="max-w-xl pb-4 text-center text-5xl font-bold uppercase sm:text-6xl md:text-left">
            Lorem Ipsum Dolor
          </h1>
          <hr className="hero-line max-w-xl pb-4" />
          <p className="max-w-xl text-center text-lg md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            ullamcorper, mauris id ultrices ultricies, nisl nunc ultrices nisl,
            eget aliquam nisl nunc sit amet nisl.
          </p>
          <Button
            className="mx-auto my-5 flex w-48 md:ml-0"
            variant="secondary"
          >
            Buy Now
          </Button>
        </div>
        <div className="hero-button flex h-[250px] w-full justify-center md:ml-10 md:h-auto">
          <div className="relative h-auto w-full flex-grow">
            <Image
              className="image-container md:object-fit h-[250px] w-full rounded-3xl object-cover md:h-full md:w-auto"
              src="https://images.unsplash.com/photo-1615218282544-98ba895e5a5b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Home CTA"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
}
