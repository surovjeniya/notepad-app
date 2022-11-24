import React from "react";

export interface TextareaProps extends React.ComponentPropsWithRef<"textarea"> {
  onChange?: (e: any) => void;
  onFocus?: (e: any) => void;
}
