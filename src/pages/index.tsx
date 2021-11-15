import { useState } from "react";
import Card from "../components/Card";
import PxToRemConverter from "../components/PxToRemConverter";
import TailwindMappingTable from "../components/TailwindMappingTable";
import remConverter from "../lib/remFormatter";

export default function Home() {
  const [conversion, setConversion] = useState<{ px: number; rem: number }>();
  const [baseSize, setBaseSize] = useState<number>(16);

  return (
    <div className="bg-gray-900 w-full h-full min-h-screen text-white font-mono">
      <main className="max-w-7xl mx-auto py-20 grid grid-cols-2 gap-x-6 relative">
        <Card className="sticky top-20">
          <h1 className="text-2xl">gust</h1>

          <PxToRemConverter
            className="mt-12 mb-4"
            onConversion={(px, rem) => setConversion({ px, rem })}
            onBaseSizeChange={(px) => setBaseSize(px)}
          />

          {conversion?.px && conversion?.rem && (
            <h1 className="text-xl">
              {conversion.px}px is {remConverter(conversion.rem)}rem.
            </h1>
          )}
        </Card>
        <Card>
          <h1 className="text-2xl">tailwind mapping</h1>
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
