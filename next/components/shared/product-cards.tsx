import Image from 'next/image';

type ProductArray =
  | ({
      node: {
        prices: {
          priceRange: {
            min: {
              currencyCode: string;
              value: unknown;
            };
            max: {
              currencyCode: string;
              value: unknown;
            };
          };
        } | null;
        description: string;
        images: {
          edges:
            | ({
                node: {
                  altText: string;
                  url: string;
                };
              } | null)[]
            | null;
        };
        name: string;
        entityId: number;
      };
      cursor: string;
    } | null)[]
  | null
  | undefined;

export default function ProductCards(props: { products: ProductArray }) {
  return (
    <div className="mx-auto flex w-full max-w-[1448px] flex-col items-center justify-center gap-4 2xl:gap-6">
      <div className="category-title mx-auto flex flex-col pb-4 md:pb-6 2xl:pb-8">
        <h2 className="text-center text-4xl font-bold">Top Products</h2>
        <p className="text-center text-lg">
          Lorem ipsum dolor sit amet, consectetur.
        </p>
      </div>
      <div className="top-products flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-center md:gap-6 2xl:gap-8">
        {props.products?.map((product, i) => {
          return (
            <Card
              key={product?.node.entityId ?? i}
              image={product?.node.images?.edges?.[0]?.node.url ?? ''}
              imageAlt={product?.node.images?.edges?.[0]?.node.altText ?? ''}
              url={`/product/${product?.node.entityId}`}
              title={product?.node.name ?? 'undefined'}
              description={product?.node.description ?? 'undefined'}
              price={`$${product?.node.prices?.priceRange?.min?.value ?? 0} - $${product?.node.prices?.priceRange?.max?.value ?? 0}`}
            />
          );
        })}
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
    <div className="card h-[500px] w-full min-w-[350px] max-w-md flex-1 rounded-3xl bg-cover bg-center md:h-[425px] md:max-w-[425px] lg:h-auto">
      <a href={props.url}>
        <Image
          src={props.image}
          alt={props.imageAlt}
          width={466}
          height={500}
          className="max-h-[300px] w-full rounded-3xl object-cover md:h-[220px] lg:h-[400px]"
        />
      </a>
      <div className="content-container items-between mx-auto flex flex-col px-2 md:mx-0">
        <h3 className="mx-auto py-4 text-3xl font-bold text-stone-800 md:mx-0">
          <a href={props.url}>{props.title}</a>
        </h3>
        <p className="text-lg2 max-w-[400px] overflow-hidden overflow-ellipsis text-nowrap pb-4 text-center md:text-left">
          {props.description}
        </p>
        <div className="">
          <p className="mx-auto pb-4 text-lg md:mx-0">{props.price}</p>
        </div>
      </div>
    </div>
  );
}
