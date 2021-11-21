import classNames from "classnames";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { FiChevronsDown, FiChevronsUp, FiInfo } from "react-icons/fi";
import remConverter from "../lib/remFormatter";
import tailwindSpacingMapping from "../lib/tailwindSpacing";
import Info from "./Info";

interface TailwindMappingTableProps {
  className?: string;
  currentRem: number;
  currentPx: number;
  currentBase: number;
}

export default function TailwindMappingTable({
  className,
  currentRem,
  currentPx,
  currentBase,
}: TailwindMappingTableProps) {
  const tailwindSpacing = tailwindSpacingMapping().map((i) => [
    i[2] / currentBase,
    i[1],
  ]);
  const currentHighlight = useRef<HTMLTableRowElement>(null);
  const [viewingAll, setViewingAll] = useState<boolean>(false);

  useEffect(() => {
    moveIntoFocus();
  }, [currentHighlight, currentRem]);

  const spacing = currentRem
    ? tailwindSpacing.filter((i) => i[0] === currentRem).length !== 0
      ? tailwindSpacing
      : [...tailwindSpacing, [currentRem, currentPx / 4]].sort(
          (a, b) => a[0] - b[0]
        )
    : tailwindSpacing;

  const moveIntoFocus = () => {
    if (currentHighlight.current === null) return;

    if (window.innerWidth < 1024) return;

    setTimeout(() => {
      currentHighlight.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  };

  const handleCollapse = () => {
    const isViewingAll = viewingAll;

    setViewingAll(!isViewingAll);

    moveIntoFocus();
  };

  return (
    <div className={className}>
      <Info className="flex mt-4 flex-col" variant="cream" id="color-hint">
        <p className="pr-4 pb-2 flex">
          <FiInfo size={20} className="flex-shrink-0 mt-2 mr-2" />
          gust automatically highlights the matching tailwind name in the
          following table, and the highlight colour indicates whether or not the
          given value exists in the default tailwind config.
        </p>
        <p className="flex items-center space-x-2">
          <span className="bg-green w-4 rounded-lg h-4"></span>
          <p>needs to be added to tailwind config</p>
        </p>
        <p className="flex items-center space-x-2">
          <span className="bg-navy w-4 rounded-lg h-4"></span>
          <p>part of tailwind config, just use the name</p>
        </p>
      </Info>

      <div className="flex flex-grow justify-between font-bold mt-4">
        <span>name</span>
        <span>size</span>
      </div>

      <table
        className={classNames({
          "my-4 flex flex-col overflow-y-scroll": true,
          "h-96": !viewingAll,
        })}
      >
        <tbody>
          {spacing.map((entry, index) => {
            const isInTailwind =
              JSON.stringify(tailwindSpacing).indexOf(
                `[${entry[0]},${entry[1]}]`
              ) === -1;

            return (
              <tr
                key={index}
                className={classNames({
                  "flex justify-between border-b-2": true,
                  "opacity-50": entry[0] !== currentRem,
                  "opacity-100": entry[0] === currentRem,
                  "text-green border-green": isInTailwind,
                  "border-navy": !isInTailwind && entry[0] === currentRem,
                })}
                ref={entry[0] === currentRem ? currentHighlight : null}
              >
                <td>{entry[1]}</td>
                <td>{remConverter(entry[0])}rem</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <button
        onClick={handleCollapse}
        className="flex items-center opacity-70 hover:opacity-100"
      >
        {viewingAll ? "collapse" : "show all"}
        {viewingAll ? <FiChevronsUp size={18} /> : <FiChevronsDown size={18} />}
      </button>
    </div>
  );
}
