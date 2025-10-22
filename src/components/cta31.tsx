import { ArrowRight } from "lucide-react";
import CopyableText from '@/components/CopyableText.tsx';
import { Button } from "@/components/ui/button";

const Cta31 = () => {
  return (
    <section className="overflow-hidden py-16">
      <div className="container relative">
        <h2 className="mb-4 text-center text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
          Contract address
        </h2>
        <p className="text-center mt-4 mx-auto"><CopyableText text="2NRSswjLuK9kJLdDozhRoiJm6gZHGeFH92Lc2tRQpump" /></p>
        <div className="relative z-10 mt-4 flex justify-center lg:mt-8">
          <Button size="lg">
            Trade on pumpFun
            <ArrowRight />
          </Button>
        </div>
        
      </div>
    </section>
  );
};

export { Cta31 };
