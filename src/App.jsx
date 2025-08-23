import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import NavaBar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Coktails";
import About from "./components/About";
import Art from "./components/Art";


gsap.registerPlugin(ScrollTrigger, SplitText)

const Page = () => {
  return (

    <main>
      <NavaBar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
    </main>
  );
}

export default Page;