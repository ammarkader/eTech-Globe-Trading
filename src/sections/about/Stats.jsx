import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/styles/pages/about/_aboutpage_stats_block.scss";

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  {
    id: 1,
    number: 20,
    title: "Years in Industry",
    description:
      "With over a decade of experience, we’ve built a reputation for reliability and excellence in global trade and energy.",
  },
  {
    id: 2,
    number: 12,
    title: "Services",
    description:
      "We offer a wide range of services, from supply chain management to advanced industrial solutions, tailored to meet your needs.",
  },
  {
    id: 3,
    number: 30,
    title: "Products",
    description:
      "Our products include premium energy resources and raw materials, sourced sustainably from trusted suppliers.",
  },
];

function Stats() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const numbers = sectionRef.current.querySelectorAll(".number");

    numbers.forEach((el) => {
      const endVal = +el.getAttribute("data-val");
      const obj = { val: 0 };
      const isInteger = Number.isInteger(endVal);

      ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            val: endVal,
            duration: 2,
            ease: "none",
            onUpdate: () => {
              el.innerText = isInteger
                ? Math.floor(obj.val)
                : obj.val.toFixed(2);
            },
          });
        },
      });
    });
  }, []);

  return (
    <section className="aboutpage-stats__wrapper" ref={sectionRef}>
      <div className="aboutpage-stats__container">
        {statsData.map((stat) => (
          <article className="stats" key={stat.id}>
            <div className="stat-number">
              <span className="stat">
                <h2 className="number" data-val={stat.number}>
                  0
                </h2>
                <span>+</span>
              </span>
              <span className="title">{stat.title}</span>
            </div>
            <p className="description">{stat.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Stats;
