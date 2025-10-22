import { FaTelegram } from "react-icons/fa";
import { SiSolana } from "react-icons/si";
import { Button } from "@/components/ui/button";
import CopyableText from '@/components/CopyableText.tsx';

const Hero34 = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="bg-muted grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center p-16 text-center lg:items-start lg:text-left">
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              Biggest Telegram Congregation
            </h1>
          
            <div className="pt-6">
            <h2 className="text-lg font-semibold md:text-2xl lg:text-xl uppercase">
              Contract address
            </h2>
            </div>

            <div className="pb-8">
            <h3 className="text-muted-foreground font-normal md:block"><CopyableText text="2NRSswjLuK9kJLdDozhRoiJm6gZHGeFH92Lc2tRQpump" /></h3>
            </div>
            
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button variant="secondary">
                Join us on Telegram
                <FaTelegram className="size-6" />
              </Button>
              <Button>
                Trade $BTC
                <SiSolana className="size-6" />
              </Button>
            </div>
          </div>
          <img
            src="https://github.com/tarikdavis/astro-btc/blob/main/src/assets/btc-hero.webp?raw=true"
            
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
    
  );
};

export { Hero34 };
