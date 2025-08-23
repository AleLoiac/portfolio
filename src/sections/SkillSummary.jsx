import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function SkillSummary() {
  let xPercent1 = 20, // move right 20% of elements width
    xPercent2 = -30,
    xPercent3 = 100,
    xPercent4 = -100;

  if (window.innerWidth < 640) {
    (xPercent1 = 100),
      (xPercent2 = -250),
      (xPercent3 = 450),
      (xPercent4 = -300);
  }

  // use IDs instead of ref to animate
  useGSAP(() => {
    gsap.to("#title-skill-1", {
      xPercent: xPercent1,
      scrollTrigger: {
        target: "#title-skill-1", // element that triggers the animation when it enters the viewport
        scrub: true, // forward when scrolling down and reverses when scrolling up
      },
    });

    gsap.to("#title-skill-2", {
      xPercent: xPercent2,
      scrollTrigger: {
        target: "#title-skill-2",
        scrub: true,
      },
    });

    gsap.to("#title-skill-3", {
      xPercent: xPercent3,
      scrollTrigger: {
        target: "#title-skill-3",
        scrub: true,
      },
    });

    gsap.to("#title-skill-4", {
      xPercent: xPercent4,
      scrollTrigger: {
        target: "#title-skill-4",
        scrub: true,
      },
    });
  });

  return (
    <section className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive">
      <div id="title-skill-1">
        <p>Architecture</p>
      </div>
      <div
        id="title-skill-2"
        className="flex items-center justify-center gap-3 translate-x-16"
      >
        <p className="font-normal">Development</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p>Deployment</p>
      </div>
      <div
        id="title-skill-3"
        className="flex items-center justify-center gap-3 -translate-x-48"
      >
        <p>APIs</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p className="italic">Frontends</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p>Scalability</p>
      </div>
      <div id="title-skill-4" className="translate-x-48">
        <p>Databases</p>
      </div>
    </section>
  );
}

export default SkillSummary;
