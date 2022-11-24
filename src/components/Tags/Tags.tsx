import { FC } from "react";
import { TagsProps } from "./Tags.props";
import styles from "./Tags.module.scss";
import { Tag } from "../Tag/Tag";

export const Tags: FC<TagsProps> = ({ tags }) => {
  return (
    <ul className={styles.tags}>
      {tags?.length
        ? tags.map(tag => (
            <li key={tag}>
              <Tag tag={tag} />
            </li>
          ))
        : ""}
    </ul>
  );
};
