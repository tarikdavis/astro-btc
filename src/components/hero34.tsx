import { FaTelegram } from "react-icons/fa";
import { SiSolana } from "react-icons/si";
import { Button } from "@/components/ui/button";

const Hero34 = () => {
  return (
    <section>
      <div className="container">
        <div className="bg-muted grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center p-16 text-center lg:items-start lg:text-left">
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              Biggest Telegram Congregation
            </h1>

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
            src="https://raw.githubusercontent.com/tarikdavis/astro-btc/refs/heads/main/src/assets/btc-pumpfun.jpg"
            className="h-full w-full object-cover hide-on-mobile"
          />
        </div>
      </div>
    </section>
    
  );
};

export { Hero34 };
