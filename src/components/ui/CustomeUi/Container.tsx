import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <section className={cn("w-[90%] max-w-387.5 mx-auto", className)}>
      {children}
    </section>
  );
};

export default Container;
