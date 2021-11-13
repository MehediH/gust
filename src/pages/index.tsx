import { useState } from "react";
import Card from "../components/Card";
import PxToRemConverter from "../components/PxToRemConverter";

export default function Home() {
  const [rem, setRem] = useState<number>();

  return (
    <div className="bg-gray-900 w-full h-screen text-white font-mono">
      <main className="max-w-7xl mx-auto py-20 grid grid-cols-2 gap-x-6">
        <Card>
          <h1 className="text-2xl">gust</h1>

          <PxToRemConverter
            className="mt-12 mb-4"
            onConversion={(v) => setRem(v)}
          />

          <h1 className="text-xl">{rem}</h1>
        </Card>
        <Card>
          <h1 className="text-2xl">tailwind mapping</h1>
        </Card>
      </main>
    </div>
  );
}
