'use client';

import { IconChevronLeft, IconChevronRight } from '@/components/icons';
import { cn } from '@/lib/utils';
import { EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';

export default function HomeCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative my-16 flex w-full pb-8">
      <Button
        className="absolute bottom-0 left-0 ml-4 md:ml-8"
        onClick={scrollPrev}
      >
        <IconChevronLeft />
      </Button>
      <div className="w-full overflow-hidden" ref={emblaRef}>
        <div className="flex">
          <Slide
            ariaHidden={selectedIndex !== 0}
            title="Embrace the Embrace: A Bed That Hugs You All Night Long"
            description="Be enveloped in plush, contouring materials that mold to your form with this responsive mattress. It hugs your body's shape for personalized, pressure-relieving support you'll love snuggling into."
            linkText="Shop Now"
            linkHref="/mattresses"
            image="https://cdn11.bigcommerce.com/s-g5ubotok03/images/stencil/original/image-manager/category-bedding-split.jpeg?t=1678209805"
            imageAlt="A woman and a dog laying on top of a bed"
          />
          <Slide
            ariaHidden={selectedIndex !== 1}
            title="Bold Beginnings: The Bed Frame That Sets the Tone"
            description="This striking modern bed frame becomes the focal point of your sleeping quarters. Clean angles and a streamlined silhouette create an atmosphere of refined sophistication. Customize the look with your choice of luxe upholstery."
            linkText="Shop Now"
            linkHref="/bed-frames"
            image="https://cdn11.bigcommerce.com/s-g5ubotok03/images/stencil/original/image-manager/blog-hero-img.png?t=1676937187"
            imageAlt="A mother laying on a bed lifting her child"
          />
          <Slide
            ariaHidden={selectedIndex !== 2}
            title="Cloud Loft: Pillows That Defy Gravity"
            description="Experience buoyant, enduring support that gently cushions your head and neck with these ultra-plush pillows. Their lofty, hypoallergenic fill conforms to your sleep position for dreamy alignment."
            linkText="Shop Now"
            linkHref="/pillows"
            image="https://cdn11.bigcommerce.com/s-g5ubotok03/images/stencil/original/image-manager/category-accessories-split.jpeg?t=1678209804"
            imageAlt="Two children and a dog running down the hallway"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-1">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={cn('', {
              ' bg-neutral-400': index === selectedIndex,
            })}
          />
        ))}
      </div>
      <Button
        className="absolute bottom-0 right-0 mr-4 md:mr-8"
        onClick={scrollNext}
      >
        <IconChevronRight />
      </Button>
    </div>
  );
}

export type SlideProps = {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  image: string;
  imageAlt: string;
  ariaHidden: boolean;
};

function Slide(props: Readonly<SlideProps>) {
  return (
    <div className="flex min-w-0 flex-[0_0_100%] flex-col gap-8 px-4 md:px-8 lg:flex-row lg:justify-center">
      <div className="mx-auto flex max-w-[600px] flex-col gap-4 lg:mx-0 lg:ml-auto lg:justify-center">
        <h2 className="text-4xl font-semibold" aria-hidden={props.ariaHidden}>
          {props.title}
        </h2>
        <p aria-hidden={props.ariaHidden}>{props.description}</p>
        <a
          href={props.linkHref}
          aria-hidden={props.ariaHidden}
          tabIndex={props.ariaHidden ? -1 : undefined}
        >
          {props.linkText}
        </a>
      </div>
      <div className="mx-auto max-w-[600px] lg:mx-0 lg:mr-auto">
        <Image
          aria-hidden={props.ariaHidden}
          src={props.image}
          alt={props.imageAlt}
          className="overflow-hidden rounded-lg"
          width="1150"
          height="766"
        />
      </div>
    </div>
  );
}

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  // eslint-disable-next-line no-unused-vars
  onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined,
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const onDotButtonClick = React.useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onInit = React.useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = React.useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

type PropType = React.PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>;

export const DotButton: React.FC<PropType> = (props) => {
  const { children, className, ...restProps } = props;

  return (
    <button
      type="button"
      className={cn(
        'rounded-full border-2 border-solid border-neutral-400 p-1',
        className,
      )}
      {...restProps}
    >
      {children}
    </button>
  );
};
