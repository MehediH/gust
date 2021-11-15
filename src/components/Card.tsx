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
        "border-2 border-white rounded-lg p-10 self-start",
        className
      )}
    >
      {children}
    </div>
  );
}
