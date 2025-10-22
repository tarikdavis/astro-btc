import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const Hero34 = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="bg-muted grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center p-16 text-center lg:items-start lg:text-left">
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              Biggest Telegram Congregation
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
              doloremque mollitia fugiat omnis! Porro facilis quo animi
              consequatur. Explicabo.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button>
                Primary
                <ArrowRight className="size-4" />
              </Button>
              <Button variant="outline">Secondary</Button>
            </div>
          </div>
          <img
            src="components/img/btc-hero.jpg"
            alt="placeholder hero"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero34 };
