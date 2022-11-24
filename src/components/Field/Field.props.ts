import React from "react";

export interface FieldProps extends React.ComponentPropsWithoutRef<"input"> {
  onChange?: (e: any) => void;
  type?: "area";
}
