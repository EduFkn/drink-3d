import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import NavaBar from "./components/Navbar";
import Hero from "./components/Hero";


gsap.registerPlugin(ScrollTrigger, SplitText)

const Page = () => {
  return ( 

    <main>
      <NavaBar />
      <Hero />
        
    </main>
   );
}
 
export default Page;