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
      <div className="h-dvh bg-black"></div>
    </main>
   );
}
 
export default Page;