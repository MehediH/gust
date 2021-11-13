import { ChangeEvent, useState } from "react";

interface PxToRemConverterProps {
  className?: string;
  onConversion?: (v) => void;
}

export default function PxToRemConverter({
  className,
  onConversion,
}: PxToRemConverterProps) {
  const [baseFont, setBaseFont] = useState<number>(16);
  const [inputValue, setInputValue] = useState<number>();
  const [outputValue, setOutputValue] = useState<number>();

  const handleConversion = (e: ChangeEvent<HTMLInputElement>) => {
    const input = Number.parseFloat(e.target.value) || null;

    setInputValue(input);
    setOutputValue(input / baseFont);
    onConversion?.(input / baseFont);
  };

  const handleBaseSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const baseFontSize = Number.parseFloat(e.target.value) || null;

    setBaseFont(baseFontSize);
    setOutputValue(inputValue / baseFontSize);

    onConversion?.(inputValue / baseFontSize);
  };

  return (
    <div className={className}>
      <div className="inline">
        <span>Base font size is</span>

        <input
          type="number"
          value={baseFont}
          className="mb-4 bg-transparent outline-none text-center mx-2 w-8 border-b-2 border-white"
          onChange={handleBaseSizeChange}
        />

        <span>px</span>
      </div>
      <input
        type="number"
        placeholder="Enter px value here"
        value={inputValue}
        onChange={handleConversion}
        className="rounded-lg border-2 w-full bg-transparent outline-none py-2 px-4"
      />
    </div>
  );
}
