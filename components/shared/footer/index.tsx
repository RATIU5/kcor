import { env } from '@/lib/env';

export default function Footer() {
  const storeName = env.SITE_NAME;

  return (
    <div className="bg-neutral-800 text-neutral-50 relative h-full w-full py-10 px-4 md:py-14 md:px-10 2xl:p-20 2xl:flex 2xl:justify-between" >
      <div className="footer-form-content-container">
      <h3 className="text-3xl font-bold pb-4 text-center  2xl:text-left">{storeName}</h3>
      <div className="footer-container1 md:flex md:justify-center 2xl:justify-start">
        <div className="subscribe flex flex-col justify-center items-center pb-10 2xl:items-start 2xl:mr-20">
          <h4 className='text-2xl font-bold'>Subscribe</h4>
          <div className="subscribe-form-content">
            <p className="pb-8 text-center 2xl:text-left">Subscribe to our newsletter</p>
            <form>
              <input className="max-w-52 h-14 rounded-tl-3xl rounded-bl-3xl px-4" type="email" placeholder="Email" />
              <input className="h-14 rounded-tr-3xl rounded-br-3xl px-4 bg-amber-700" type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
      </div>
      </div>
      <div className="footer-content-container md:flex md:justify-center">
        <div className="footer-shop-links pb-10 md:w-[280px] md:mr-10 lg:mr-16 2xl:mr-20">
          <h4 className='text-2xl font-bold border-b-[1px] mb-6 pb-5 pl-8'>Shop</h4>
          <ul className='border-l-[1px] pl-8'>
            <li className='mb-2'>Shop</li>
            <li className='mb-2'>Shop</li>
            <li className='mb-2'>Shop</li>
            <li className='mb-2'>Shop</li>
          </ul>
        </div>
        <div className="footer-container-2 pb-10 md:w-[280px]">
          <h4 className='text-2xl font-bold border-b-[1px] mb-6 pb-5 pl-8'>About Us</h4>
          <ul className='border-l-[1px] pl-8'>
            <li className='mb-2'>Our Story</li>
            <li className='mb-2'>Careers</li>
            <li className='mb-2'>Blog</li>
            <li className='mb-2'>Media</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
