import { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import remConverter from "../lib/remFormatter";
import tailwindSpacingMapping from "../lib/tailwindSpacing";
import Info from "./Info";

interface ResultsCardProps {
  px: number;
  rem: number;
  base: number;
}

export default function ResultsCard({ px, rem, base }: ResultsCardProps) {
  const [isInTailwind, setIsInTailwind] = useState<boolean>(false);

  useEffect(() => {
    const tailwindSpacing = tailwindSpacingMapping().map((i) => [
      i[2] / base,
      i[1],
    ]);

    const isInTailwind =
      JSON.stringify(tailwindSpacing).indexOf(`[${rem},${px / 4}]`) !== -1;

    setIsInTailwind(isInTailwind);
  }, [px, rem, base]);

  if (!px || !rem) return null;

  return (
    <Info canClose={false} className="space-y-4">
      <h1 className="text-lg border-b pb-2 border-cream md:text-xl">
        {px}px is {remConverter(rem)}rem
      </h1>
      <h1 className="text-lg border-b pb-2 border-cream md:text-xl">
        <div className="flex">
          tailwind naming: {px / 4}
          {!isInTailwind ? `*` : ``}
        </div>
        {!isInTailwind && (
          <a
            className="text-xs opacity-80 pt-2 hover:opacity-100"
            href="https://tailwindcss.com/docs/customizing-spacing"
            target="_blank"
          >
            *needs to be added to tailwind config:{" "}
            <code className="pl-2">
              "{px / 4}": "{px}px"
            </code>
          </a>
        )}
        <ul className="flex text-xs my-2 flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
          <span>examples:</span>
          <li className="rounded-lg px-1 border border-cream flex items-center">
            w-{px / 4}
          </li>
          <li className="rounded-lg px-1 border border-cream flex items-center">
            m-{px / 4}
          </li>
          <li className="rounded-lg px-1 border border-cream flex items-center">
            p-{px / 4}
          </li>
        </ul>
      </h1>
    </Info>
  );
}
