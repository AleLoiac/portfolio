import Marquee from "react-fast-marquee";
import { Icon } from "@iconify/react/dist/iconify.js";

function MarqueeBlock({
  items,
  className = "text-white bg-black",
  icon = "mdi:star-four-points",
  iconClassName = "",
  reverse = false,
}) {
  return (
    <Marquee
      direction={reverse ? "right" : "left"}
      speed={100}
      pauseOnClick
      className={`overflow-hidden w-full md:h-[100px] flex items-center marquee-text-responsive font-light uppercase whitespace-nowrap ${className}`}
    >
      <div className="flex">
        {items.map((text, index) => (
          <span
            key={index}
            className="flex items-center px-5 md:px-16 gap-x-10 md:gap-x-32"
          >
            {text} <Icon icon={icon} className={iconClassName} />
          </span>
        ))}
      </div>
    </Marquee>
  );
}

export default MarqueeBlock;
