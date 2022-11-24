import { FC, useState } from "react";
import { PaginationProps } from "./Pagination.props";
import styles from "./Pagination.module.scss";
import { Button } from "../Button/Button";
import cn from "classnames";

export const Pagination: FC<PaginationProps> = ({
  noticesPerPage,
  paginate,
  totalNotices,
}) => {
  const pageNumbers = [];
  const [currentPage, setCurrentPage] = useState<number>(1);
  if (totalNotices) {
    for (let i = 1; i <= Math.ceil(totalNotices / noticesPerPage); i++) {
      pageNumbers.push(i);
    }
  }
  console.log(currentPage);

  return (
    <ul className={styles.paginaiton}>
      {pageNumbers.map(item => (
        <li key={item} className={styles["page-switcher"]}>
          <Button
            className={cn({
              [styles["current-page"]]: currentPage === item,
            })}
            onClick={() => {
              setCurrentPage(item);
              // @ts-ignore
              return paginate(item);
            }}
          >
            {item}
          </Button>
        </li>
      ))}
    </ul>
  );
};
