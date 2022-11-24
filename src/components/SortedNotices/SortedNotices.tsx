import { FC } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { reset } from "../../store/slice/sort.slice";
import { INotice } from "../../types/notice.interface";
import { Button } from "../Button/Button";
import { Notices } from "../Notices/Notices";
import { Tag } from "../Tag/Tag";
import styles from "./SortedNotices.module.scss";

interface SortedNoticesProps {
  notices?: INotice[];
}

export const SortedNotices: FC<SortedNoticesProps> = ({ notices }) => {
  const { tag } = useTypedSelector(state => state.sort);
  const dispatch = useDispatch();

  let sortedNotices = [] as INotice[];
  if (notices?.length) {
    sortedNotices = notices.filter(notice => notice.tags?.includes(tag));
  }

  return (
    <>
      <div className={styles.controls}>
        <Button onClick={() => dispatch(reset())} color="blue">
          Reset filters
        </Button>
        <Tag tag={tag} className={styles["sorted-tag"]} />
      </div>
      <Notices notices={sortedNotices} />
    </>
  );
};
