import { useState } from "react";
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
      <main className="max-w-7xl mx-auto py-20 grid grid-cols-2 gap-x-20 relative">
        <Card className="sticky top-20">
          <h1 className="text-5xl font-display">gust</h1>

          <Info className="mt-8" id="what-is-gust">
            <h3 className="leading-10 text-xl">what is gust?</h3>
            <p className="opacity-90">
              gust is a simple helper for tailwind that allows you to convert
              pixel values to their tailwind mapping. if a pixel value does not
              exist in the default tailwind spacing, gust provides you with the
              name and rem value that you can add to your tailwind config and
              use straight away.
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
          <h1 className="text-3xl font-display">tailwind mapping</h1>
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
