import classNames from "classnames";
import { ReactNode, useEffect, useState } from "react";
import useLocalStorage from "../lib/useLocalStorage";
import { FiX } from "react-icons/fi";

interface InfoProps {
  id?: string;
  children?: ReactNode;
  className?: string;
  canClose?: boolean;
  variant?: "cream" | "navy";
}

export default function Info({
  id,
  children,
  className,
  canClose = true,
  variant = "navy",
}: InfoProps) {
  const [isHidden, setIsHidden] = useLocalStorage<boolean>(
    `gust-info-${id}`,
    false
  );

  const [hide, setHide] = useState<boolean>(true);

  useEffect(() => {
    setHide(isHidden);
  }, [isHidden]);

  if (hide && canClose) return null;

  return (
    <div
      className={classNames([
        `rounded-lg p-6 self-start font-body relative border-2`,
        {
          "bg-navy border-navy text-cream": variant === "navy",
          "bg-cream border-navy text-navy": variant === "cream",
        },
        className,
      ])}
    >
      {canClose && (
        <FiX
          className="absolute right-4 cursor-pointer hover:opacity-75"
          size={20}
          onClick={() => setIsHidden(true)}
        />
      )}
      {children}
    </div>
  );
}
