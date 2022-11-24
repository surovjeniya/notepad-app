import { FC } from "react";
import { HtagProps } from "./Htag.props";
import styles from "./Htag.module.scss";
import cn from "classnames";

export const Htag: FC<HtagProps> = ({ tag, children, className }) => {
  return (
    <>
      {tag === "h1" && <h1 className={cn(className, styles.h1)}>{children}</h1>}
      {tag === "h2" && <h2 className={cn(className, styles.h2)}>{children}</h2>}
      {tag === "h3" && <h3 className={cn(className, styles.h3)}>{children}</h3>}
    </>
  );
};
