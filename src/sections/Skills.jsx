import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

function Skills() {
  const text =
    "I build secure, high-performance full-stack apps with smooth UX to drive growth.";

  return (
    <section id="skills" className="min-h-screen bg-black rounded-t-4xl">
      <AnimatedHeaderSection
        subTitle={"Behind the scene, Beyound the screen"}
        title={"Skill"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
    </section>
  );
}

export default Skills;
