import React, { ReactNode } from "react";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
  color?: "green" | "red" | "blue" | "orange";
  onClick?: (e: any) => void;
}
