import Image from "next/image";

export default function AboutHero() {
  return (
    <div className="heroContainer bg-aboutHero mx-auto flex h-[700px] w-full max-w-[1800px] overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat 2xl:h-[700px]">
      <div className="hero-image-filter absolute left-0 top-0 h-full w-full"></div>
      <div className="hero-content-copy flex w-full flex-col justify-between px-4 md:px-14 md:py-10 2xl:px-20 2xl:pb-16 2xl:flex-row 2xl:justify-start">
        <div className="hero-text flex h-60 flex-col w-full py-10 2xl:h-48 2xl:justify-between 2xl:w-[50%]">
          <h1 className="max-w-xl pb-4 text-5xl font-bold sm:text-6xl">
            Our Vision
          </h1>
          {/* <hr className="hero-line max-w-xl pb-4" /> */}
          <p className="max-w-xl text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            ullamcorper, mauris id ultrices ultricies, nisl nunc ultrices
            nisl, eget aliquam nisl nunc sit amet nisl. Etiam ullamcorper,           
            mauris id ultrices ultricies, nisl nunc ultrices nisl, eget aliquam
            nisl nunc sit amet nisl. Etiam ullamcorper,           
            mauris id ultrices ultricies, nisl nunc ultrices nisl, eget aliquam
            nisl nunc sit amet nisl. 
          </p>
        </div>
        <div className="hero-images-container w-full h-[150px] flex justify-center my-10 sm:h-[250px] xl:h-[300px] 2xl:w-[50%]">
        <Image
          className="image-container object-cover rounded-3xl sm:w-[300px]"
          src="https://images.unsplash.com/photo-1635594202056-9ea3b497e5c0?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Home CTA"
          width={150}
          height={150}
        />
        <Image
          className="image-container object-cover rounded-3xl ml-4 sm:ml-10 sm:w-[200px]"
          src="https://images.unsplash.com/photo-1699942681763-d1da9f692489?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Home CTA"
          width={150}
          height={150}
        />
        </div>
      </div>
    </div>
  );
}