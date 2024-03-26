import Image from 'next/image';

export default function RelatedCards() {
  return (
    <div className="related-products w-full">
      <div className="related-title">
        <h3 className="text-3xl text-neutral-800">Related Products</h3>
      </div>
      <div className="top-products flex flex-col gap-4 md:flex-row md:gap-6 2xl:gap-8">
        <Card
          image="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imageAlt="Home CTA"
          url="/product/1"
          title="Product 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          price="$100"
        />
        <Card
          image="https://images.unsplash.com/photo-1542639130-c9fadbddcc6b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imageAlt="Home CTA"
          url="/product/2"
          title="Product 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          price="$100"
        />
        <Card
          image="https://images.unsplash.com/photo-1511401139252-f158d3209c17?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imageAlt="Home CTA"
          url="/product/3"
          title="Product 3"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          price="$100"
        />
      </div>
    </div>
  );
}

type ProductProps = {
  image: string;
  imageAlt: string;
  url: string;
  title: string;
  description: string;
  price: string;
};

function Card(props: ProductProps) {
  return (
    <div className="card h-[500px] w-full max-w-md rounded-3xl bg-cover bg-center md:h-[425px] md:max-w-[466px] lg:h-auto">
      <a href={props.url}>
        <Image
          src={props.image}
          alt={props.imageAlt}
          width={466}
          height={500}
          className="max-h-[300px] w-full rounded-3xl object-cover md:h-[220px] lg:h-[400px] lg:w-[400px]"
        />
      </a>
      <div className="content-container mx-auto flex max-w-[400px] flex-col items-start px-2 md:mx-0">
        <h3 className="mx-auto py-4 text-3xl font-bold text-neutral-800 md:mx-0">
          <a href={props.url}>{props.title}</a>
        </h3>
        <p className="pb-4 text-center text-lg text-neutral-800 md:text-left">
          {props.description}
        </p>
        <p className="mx-auto pb-4 text-lg text-neutral-800 md:mx-0">
          {props.price}
        </p>
      </div>
    </div>
  );
}
