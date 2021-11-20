import classNames from "classnames";
import { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={classNames(
        "border-2 border-navy rounded-lg p-10 self-start shadow-solid font-body",
        className
      )}
    >
      {children}
    </div>
  );
}
