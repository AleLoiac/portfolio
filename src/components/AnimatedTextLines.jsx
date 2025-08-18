import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

function AnimatedTextLines({ text, className }) {
  const containerRef = useRef(null);
  const lineRefs = useRef([]);
  const lines = text.split("\n").filter((line) => line.trim() !== ""); // filter out empty lines

  useGSAP(() => {
    if (lineRefs.current.length > 0) {
      // animate each line when the container scrolls into view
      gsap.from(lineRefs.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3, // delay between each line of text
        ease: "back.out",
        scrollTrigger: {
          trigger: containerRef.current, // start animation when container enters viewport
        },
      });
    }
  });

  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, index) => (
        <span
          key={index}
          ref={(el) => (lineRefs.current[index] = el)} // store ref for animation
          className="block leading-relaxed tracking-wide text-pretty"
        >
          {line}
        </span>
      ))}
    </div>
  );
}

export default AnimatedTextLines;
