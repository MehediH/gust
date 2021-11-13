import { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="border-2 border-white rounded-lg p-10">{children}</div>
  );
}
