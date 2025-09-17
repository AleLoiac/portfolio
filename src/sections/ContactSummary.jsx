import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MarqueeBlock from "../components/MarqueeBlock";

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
    if (window.innerWidth > 768) {
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
      className="flex flex-col justify-between md:items-center  md:justify-between min-h-screen gap-12 mt-16"
    >
      <MarqueeBlock items={items} />
      <div className="overflow-hidden font-light text-center contact-text-responsive">
        <p>
          " Let's build a <br />
          <span className="font-normal">memorable</span> &{" "}
          <span className="italic ">inspiring</span> <br />
          project <span className="text-gold">together</span> "
        </p>
      </div>
      <MarqueeBlock
        items={items2}
        reverse={true}
        icon="material-symbols-light:square"
        iconClassName="stroke-gold stroke-2 text-primary"
        className="text-black bg-transparent border-y-2"
      />
    </section>
  );
}

export default ContactSummary;
