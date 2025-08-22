import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";



const Hero = () => {

 useGSAP(() => {
const heroSplit = new SplitText(".title", {type: "chars, words"});
const paragraphSplit = new SplitText(".subtitle", {type: "lines"});

heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
gsap.from(heroSplit.chars, {
    yPercent: 100,
    duration: 1.8,
    ease: "expo.out",
    stagger: 0.6
});

gsap.from(paragraphSplit.lines, {
    opacity: 0,
    yPercent: 100,
    duration: 1.8,
    ease: "expo.out",
    stagger: 0.06,
    delay: 1,
})


gsap.timeline({
    scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
    }
}).to(".right-leaf", {y : 200}, 0)
.to(".left-leaf", {y: -200}, 0)


 },[])

  return (
    <>
      <section id="hero" className="bg-gray-950">
        <h1 className="title">Kronno</h1>

        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />

        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Veja nossos classicos</p>
              <p className="subtitle">
                O espirito <br /> do verão
              </p>
              <a href="#cocktails">Ver os coqueteis</a>
            </div>

            <div className="view-coktails">
              <p className="subtitle">
                Coqueteis premium, com ingrendientes únicos, criativos e
                extremamente saborosos
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
