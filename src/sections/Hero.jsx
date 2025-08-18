import { useRef } from "react";
import AnimatedTextLines from "../components/AnimatedTextLines";

function Hero() {
  const contextRef = useRef(null);
  const headerRef = useRef(null);
  const aboutText = `I build modern, performant websites and front-end interfaces
  Focused on JavaScript and React
  I'm always improving to deliver clean, reliable code`;

  return (
    <section id="home" className="flex flex-col justify-end min-h-screen">
      <div ref={contextRef}>
        <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
          <div
            ref={headerRef}
            className="flex flex-col justify-center gap-12 pt-16 sm:gap-16"
          >
            <p className="text-sm font-light tracking-[0.5rem] uppercase px-10 text-black">
              404 No Bugs Found
            </p>
            <div className="px-10">
              <h1 className="flex flex-col flex-wrap gap-12 text-black uppercase banner-text-responsive sm:gap-16 md:block">
                Alessandro Loiacono
              </h1>
            </div>
          </div>
        </div>
        <div className="relative px-10 text-black">
          <div className="absolute inset-x-0 border-t-2"></div>
          <div className="py-12 sm:py-16 text-end">
            <AnimatedTextLines
              text={aboutText}
              className="font-light uppercase value-text-responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
