import { useState } from "react";
import { FiGithub } from "react-icons/fi";
import Card from "../components/Card";
import Info from "../components/Info";
import PxToRemConverter from "../components/PxToRemConverter";
import ResultsCard from "../components/ResultsCard";
import TailwindMappingTable from "../components/TailwindMappingTable";
import useLocalStorage from "../lib/useLocalStorage";

export default function Home() {
  const [conversion, setConversion] = useState<{ px: number; rem: number }>();
  const [baseSize, setBaseSize] = useLocalStorage<number>("gust-base-font", 16);

  return (
    <div className="bg-cream w-full h-full min-h-screen text-navy font-mono">
      <main className="mx-auto py-10 px-10 grid grid-cols-1 gap-y-10 relative max-w-3xl lg:grid-cols-2 lg:gap-x-20 md:max-w-2xl lg:px-10 lg:py-20 lg:max-w-5xl 2xl:px-0 2xl:max-w-7xl">
        <Card className="lg:sticky lg:top-20">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl md:text-5xl font-display">gust</h1>
            <div className="flex space-x-5 items-center">
              <a
                href="https://builtbymeh.com"
                target="_blank"
                className="hover:opacity-70 transition-all"
              >
                <img src="/meh.png" className="h-4" />
              </a>
              <a
                href="https://github.com/MehediH/gust"
                target="_blank"
                className="hover:opacity-70 transition-all"
              >
                <FiGithub size={20} />
              </a>
            </div>
          </div>

          <Info className="mt-8" id="what-is-gust">
            <h3 className="leading-10 text-xl">what is gust?</h3>
            <p className="opacity-90">
              gust is a simple helper for tailwind that allows you to enter
              pixel values and get the equivalent name in the tailwind spacing
              scale. if a pixel value does not exist in the default tailwind
              spacing scale, gust provides you with the name and rem value that
              you can add to your tailwind config and use straight away.
            </p>
          </Info>

          <PxToRemConverter
            className="my-8"
            onConversion={(px, rem) => setConversion({ px, rem })}
            onBaseSizeChange={(px) => setBaseSize(px)}
          />

          <ResultsCard
            px={conversion?.px}
            rem={conversion?.rem}
            base={baseSize}
          />
        </Card>
        <Card>
          <h1 className="text-xl md:text-3xl font-display">tailwind mapping</h1>
          <TailwindMappingTable
            currentRem={conversion?.rem}
            currentPx={conversion?.px}
            currentBase={baseSize}
          />
        </Card>
      </main>
    </div>
  );
}
