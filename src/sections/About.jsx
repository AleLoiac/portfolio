import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import AnimatedTextLines from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function About() {
  const text = `Eager to learn, grow and contribute to meaningful projects
  Always seeking opportunities to expand my knowledge
  and make an impact`;
  const aboutText = `Former architect turned web developer.
  Learning Javascript and React by building projects.
  I bring a strong eye for detail and problem-solving
  from my previous experience.
  -
  When I'm not coding:
  ⛷️ Carving fresh tracks in the Alps
  🌍 Exploring cultures and places
  📚 Studying and learning
  `;
  const imgRef = useRef(null);

  useGSAP(() => {
    // scales down the about section while scrolling it out of view
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false, // useful for debugging
      },
      ease: "power1.inOut",
    });

    // animates the photo
    gsap.set(imgRef.current, {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    });

    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: "2",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: imgRef.current,
      },
    });
  });

  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Code with purpose, Built to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="images/Alessandro.jpg"
          alt="Alessandro, web developer"
          className="w-md rounded-3xl"
        />
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
}

export default About;
