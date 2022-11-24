import { FC } from "react";
import { FieldProps } from "./Field.props";
import styles from "./Field.module.scss";
import cn from "classnames";

export const Field: FC<FieldProps> = ({
  className,
  type,
  onChange,
  ...props
}) => {
  return (
    <input
      {...props}
      onChange={onChange}
      className={cn(className, styles.field)}
    />
  );
};
