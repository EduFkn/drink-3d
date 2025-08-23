import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import NavaBar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Coktails";
import About from "./components/About";


gsap.registerPlugin(ScrollTrigger, SplitText)

const Page = () => {
  return ( 

    <main>
      <NavaBar />
      <Hero />
        <Cocktails />
        <About />
    </main>
   );
}
 
export default Page;