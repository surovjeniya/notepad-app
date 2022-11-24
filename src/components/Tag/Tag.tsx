import { FC } from "react";
import { TagProps } from "./Tag.props";
import styles from "./Tag.module.scss";
import { Button } from "../Button/Button";
import { useDispatch } from "react-redux";
import { sort } from "../../store/slice/sort.slice";

import cn from "classnames";

export const Tag: FC<TagProps> = ({ tag, className }) => {
  const dispatch = useDispatch();

  const sortByTag = (tag: string) => {
    dispatch(sort(tag));
  };

  return (
    <div className={cn(className, styles.tag)}>
      <Button color="orange" onClick={() => sortByTag(tag)}>
        {tag}
      </Button>
    </div>
  );
};
