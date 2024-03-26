import { Button } from '../ui/button';

export default function AboutEnough() {
  return (
    <div className="enough-info mx-auto flex w-full max-w-[1448px] flex-col items-center">
      <div className="enough-header w-full max-w-[300px] border-b border-stone-300 pb-5 text-center uppercase">
        <h3 className="enough-header-text text-3xl tracking-[1.25px]">
          enough about us
        </h3>
      </div>
      <div className="story-section w-[300px] text-center">
        <p className="story-paragraph py-8">
          We&apos;ll let you get back to why you came here—better sleep!
        </p>
      </div>
      <div className="link-container">
        <div className="hero-button flex w-full justify-center">
          <Button className="w-48 bg-amber-700" variant="default">
            Shop All
          </Button>
        </div>
      </div>
    </div>
  );
}
