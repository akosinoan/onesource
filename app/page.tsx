import {Hero} from "./components/Hero"
import {Products} from "./components/Products"
import { WhyUs } from "./components/WhyUs";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero 
          imgSrc={`./onesource_banner.png`}
          imgAlt={`OneSource Banner`}
          title={`Transform Your Shirt Ideas into Reality!`} 
          content={`At One Source Marketing, we specialize in providing high quality shirts for business brands, corporate uniforms, and events. `} />

        <Products />

      <WhyUs /> 
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <span className="flex justify-center text-sm">
          
         <a href="mailto:noanworks@gmail.com" target="_blank">© 2025 Noanworks Development</a>
          
          
        </span>
      </footer>
    </div>
  );
}
