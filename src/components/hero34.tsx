import { FaTelegram } from "react-icons/fa";
import { GradientText } from "@/components/ui/shadcn-io/gradient-text/index.tsx";
import { Button } from "@/components/ui/button";

const Hero34 = () => {
  return (
    <section>
      <div className="container">
        <div className="bg-muted grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center p-16 text-center lg:items-start lg:text-left">
            <h1 className="my-6 text-pretty text-4xl font-bold text-shadow-lg/1 lg:text-6xl">
            <GradientText
            text=" Biggest Telegram Congregation"
            gradient="linear-gradient(90deg, #F23D5E 0%, #F23078 20%, #F207B4 40%, #F29F05 60%, #F24405 80%, #F23D5E 100%)"
            />
             </h1>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button variant="secondary" className="mt-6 h-12 rounded-2xl px-6 text-lg">
                Join us on Telegram
                <FaTelegram className="size-6" />
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
