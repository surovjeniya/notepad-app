import { FC } from "react";
import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.props";
import cn from "classnames";

export const Button: FC<ButtonProps> = ({
  children,
  color = "green",
  className,
  onClick,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(className, styles.button, {
        [styles.green]: color === "green",
        [styles.blue]: color === "blue",
        [styles.red]: color === "red",
        [styles.orange]: color === "orange",
      })}
      {...props}
    >
      {children}
    </button>
  );
};
