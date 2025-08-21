import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { skillsData } from "../constants";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Skills() {
  const text =
    "Skilled in problem-solving and collaboration, driven by a strong will to learn and grow";
  const skillRef = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: "48rem" }); // 768px, when reached it will be considered desktop mode for the animation

  useGSAP(() => {
    skillRef.current.forEach((el) => {
      if (!el) return;

      gsap.from(el, {
        y: 200,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        duration: 1,
        ease: "circ.out",
      });
    });
  });

  return (
    <section id="skills" className="min-h-screen bg-black rounded-t-4xl">
      <AnimatedHeaderSection
        subTitle={"Behind the scene, Beyond the screen"}
        title={"Skills"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      {skillsData.map((skill, index) => (
        <div
          ref={(el) => (skillRef.current[index] = el)}
          key={index}
          className="sticky px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/30"
          style={
            isDesktop
              ? {
                  top: `calc(10vh + ${index * 5}em)`,
                  marginBottom: `${(skillsData.length - index - 1) * 5}rem`,
                }
              : { top: 0 }
          }
        >
          <div className="flex items-center justify-between gap-4 font-light">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl lg:text-5xl">{skill.title}</h2>
              <p className="text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty">
                {skill.description}
              </p>
              <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
                {skill.items.map((item, itemIndex) => (
                  <div key={`item-${index}-${itemIndex}`}>
                    <div className="flex flex-col md:flex-row">
                      <h3 className="flex">
                        <span className="mr-12 text-lg text-white/30">
                          0{itemIndex + 1}
                        </span>
                        {item.title}
                      </h3>
                      <div className="ml-17 md:ml-12  text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty">
                        {item.description}
                      </div>
                    </div>
                    {itemIndex < skill.items.length - 1 && (
                      <div className="w-full h-px my-2 bg-white/30" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
