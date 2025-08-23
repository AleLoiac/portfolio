import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function ContactSummary() {
  const containerRef = useRef(null);
  const items = ["Innovation", "Precision", "Trust", "Collaboration", "Growth"];
  const items2 = [
    "contact me",
    "contact me",
    "contact me",
    "contact me",
    "contact me",
  ];

  useGSAP(() => {
    if (window.screen > 768) {
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center center",
          end: "+=500 center",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
          markers: false,
        },
      });
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-center md:justify-between min-h-screen gap-12 mt-16"
    >
      {window.innerWidth > 768 && <Marquee items={items} />}
      <div className="overflow-hidden font-light text-center contact-text-responsive">
        <p>
          " Let's build a <br />
          <span className="font-normal">memorable</span> &{" "}
          <span className="italic ">inspiring</span> <br />
          project <span className="text-gold">together</span> "
        </p>
      </div>
      {window.innerWidth > 768 && (
        <Marquee
          items={items2}
          reverse={true}
          className="text-black bg-transparent border-y-2"
          iconClassName="stroke-gold stroke-2 text-primary"
          icon="material-symbols-light:square"
        />
      )}
    </section>
  );
}

export default ContactSummary;
