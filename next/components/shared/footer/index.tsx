import { env } from '@/lib/env';

export default function Footer() {
  const storeName = env.SITE_NAME;

  return (
    <div className="relative h-full w-full bg-neutral-800 px-4 py-10 text-neutral-50 md:px-10 md:py-14">
      <div className="footer-container-of-containers mx-auto max-w-[1448px] 2xl:flex 2xl:justify-between 2xl:p-20">
        <div className="footer-form-content-container">
          <h3 className="pb-4 text-center text-3xl font-bold  2xl:text-left">
            {storeName}
          </h3>
          <div className="footer-container1 md:flex md:justify-center 2xl:justify-start">
            <div className="subscribe flex flex-col items-center justify-center pb-10 2xl:mr-20 2xl:items-start">
              <h4 className="text-2xl font-bold">Subscribe</h4>
              <div className="subscribe-form-content">
                <p className="pb-8 text-center 2xl:text-left">
                  Subscribe to our newsletter
                </p>
                <form>
                  <input
                    className="h-14 max-w-52 rounded-bl-3xl rounded-tl-3xl px-4"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    className="h-14 rounded-br-3xl rounded-tr-3xl bg-amber-700 px-4"
                    type="submit"
                    value="Subscribe"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content-container md:flex md:justify-center">
          <div className="footer-shop-links pb-10 md:mr-10 md:w-[280px] lg:mr-16 2xl:mr-20">
            <h4 className="mb-6 border-b-[1px] pb-5 pl-8 text-2xl font-bold">
              Shop
            </h4>
            <ul className="border-l-[1px] pl-8">
              <li className="mb-2">Shop</li>
              <li className="mb-2">Shop</li>
              <li className="mb-2">Shop</li>
              <li className="mb-2">Shop</li>
            </ul>
          </div>
          <div className="footer-container-2 pb-10 md:w-[280px]">
            <h4 className="mb-6 border-b-[1px] pb-5 pl-8 text-2xl font-bold">
              About Us
            </h4>
            <ul className="border-l-[1px] pl-8">
              <li className="mb-2">
                <a href="/about">Our Story</a>
              </li>
              <li className="mb-2">Careers</li>
              <li className="mb-2">Blog</li>
              <li className="mb-2">Media</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
