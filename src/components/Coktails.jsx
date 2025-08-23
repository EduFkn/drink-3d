import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cocktailLists, mockTailLists } from "../constants";

const Cocktails = () => {

    useGSAP(() => {
const parallaxTimeLine = gsap.timeline({
    scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,

    }
})

parallaxTimeLine
.from("#c-left-leaf", {
    x: -100, y: 100
})
.from("#c-right-leaf",{
    x: 100 , y: 100
})
    })


    return ( 

        <section id="cocktails" className="">
            <img className="opacity-50 w-[30%]" id="c-left-leaf" src="/images/cocktail-left-leaf.png" alt="left-leaf" />
            <img className="opacity-50 w-[35%]" id="c-right-leaf" src="/images/cocktail-right-leaf.png" alt="right-leaf" />
            <div className="list">
                <div className="popular">
                    <h2>Coqueteis Mais Populares: </h2>
                    <ul>
                       {cocktailLists.map(({name, country, detail, price}) => (
                        <li key={name}>
                            <div className="md:me-28">
                              <h3>{name}</h3>
                              <p>{country} | {detail}</p>
                            </div>
                            <span>- {price}</span>
                        </li>
                       ))}
                    </ul>
                </div>

                 <div className="loved">
                    <h2>Coqueteis Mais Elogiados: </h2>
                    <ul>
                       {mockTailLists.map(({name, country, detail, price}) => (
                        <li key={name}>
                            <div className="me-28">
                              <h3>{name}</h3>
                              <p>{country} | {detail}</p>
                            </div>
                            <span>- {price}</span>
                        </li>
                       ))}
                    </ul>
                </div>
            </div>
        </section>
     );
}
 
export default Cocktails;