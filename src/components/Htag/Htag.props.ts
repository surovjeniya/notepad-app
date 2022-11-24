import React, { ReactNode } from "react";

export interface HtagProps extends React.ComponentPropsWithoutRef<"div"> {
  tag?: "h1" | "h2" | "h3";
  children: ReactNode;
}
