import { FC } from "react";
import { TextareaProps } from "./Textarea.props";
import cn from "classnames";
import styles from "./Textarea.module.scss";

export const Textarea: FC<TextareaProps> = ({
  className,
  onFocus,
  onChange,
  ...props
}) => {
  return (
    <textarea
      className={cn(className, styles.textarea)}
      onChange={onChange}
      onFocus={onFocus}
      {...props}
    ></textarea>
  );
};
