import { SiSolana } from "react-icons/si";
import CopyableText from '@/components/CopyableText.tsx';
import { Button } from "@/components/ui/button";


const Cta31 = () => {
  return (
    <section className="overflow-hidden py-16">
      
      <div className="container relative">
        <h2 className="mb-4 text-center text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
          Contract address
        </h2>
        <div className="relative mt-4 flex justify-center lg:mt-6">
        <p className="sm:text-base text-xs md:text-base"><CopyableText text="2NRSswjLuK9kJLdDozhRoiJm6gZHGeFH92Lc2tRQpump"/></p>
        </div>
        <div className="relative z-10 mt-4 flex justify-center lg:mt-2">
              <Button className="mt-6 h-12 rounded-2xl px-6 text-lg">
                <a href="https://pump.fun/">Trade $BTC on pumpfun</a>
                <SiSolana className="size-6" />
              </Button>
        </div>
        
      </div>
    </section>
  );
};

export { Cta31 };
