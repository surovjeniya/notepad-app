import { FC } from "react";
import { Notice } from "../Notice/Notice";
import styles from "./Notices.module.scss";
import { NoticesProps } from "./Notices.props";

export const Notices: FC<NoticesProps> = ({ notices }) => {
  return (
    <ul className={styles.notices}>
      {notices?.length
        ? notices?.map(notice => (
            <li key={notice.id}>
              <Notice notice={notice} />
            </li>
          ))
        : "You dont have a notices."}
    </ul>
  );
};
