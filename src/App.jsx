import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import NavaBar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Coktails";


gsap.registerPlugin(ScrollTrigger, SplitText)

const Page = () => {
  return ( 

    <main>
      <NavaBar />
      <Hero />
        <Cocktails />
    </main>
   );
}
 
export default Page;