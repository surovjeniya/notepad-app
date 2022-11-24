import { useEffect, useState } from "react";
import {
  Button,
  Field,
  Htag,
  Loader,
  Notices,
  Pagination,
  Textarea,
} from "./components";
import {
  useAddNewNoticeMutation,
  useGetAllNoticesQuery,
} from "./store/api/notice.api";
import { INoticeDto } from "./types/notice.interface";
import styles from "./App.module.scss";
import cn from "classnames";
import { SortedNotices } from "./components/SortedNotices/SortedNotices";
import { useTypedSelector } from "./hooks/useTypedSelector";

function App() {
  const [message, setMessage] = useState<string>("");
  const [tags, setTags] = useState<string[] | null>([]);
  const [title, setTitle] = useState<string>("");
  const { data: notices, error, isLoading } = useGetAllNoticesQuery(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [noticesPerPage] = useState<number>(2);
  const { tag } = useTypedSelector(state => state.sort);
  const [addNewNotice, { isLoading: addNoticeLoading }] =
    useAddNewNoticeMutation();

  const onChangeMessage = (e: any) => {
    setMessage(e.target.value);
  };

  const onSubmitHandler = () => {
    const notice: INoticeDto = {
      message,
      tags,
      title,
    };
    addNewNotice({ ...notice }).unwrap();
    setMessage("");
    setTitle("");
  };

  useEffect(() => {
    setTags(message.match(/(#\w+)/g));
  }, [message]);

  const lastNoticeIndex = currentPage * noticesPerPage;
  const firstNoticeIndex = lastNoticeIndex - noticesPerPage;
  const currentNotice = notices?.slice(firstNoticeIndex, lastNoticeIndex);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.app}>
          <Htag tag="h1" className={styles["h-1"]}>
            The Notice app
          </Htag>
          <div className={styles.fields}>
            <Field
              placeholder="Title"
              name="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <Textarea
              placeholder="Message"
              name="message"
              value={message}
              onChange={onChangeMessage}
              className={styles["message-field"]}
            />
          </div>
          <div className={styles.controls}>
            <Button
              className={cn(styles.add, {
                [styles["add-disabled"]]:
                  addNoticeLoading || !title.length || !message.length,
              })}
              color="green"
              onClick={onSubmitHandler}
              disabled={!title.length || !message.length}
            >
              {addNoticeLoading ? (
                <Loader type="puff" color={"#FFF"} height="20" width="20" />
              ) : (
                "Add"
              )}
            </Button>
          </div>
          <div className={styles.paginaiton}>
            {!tag.length && (
              <Pagination
                //@ts-ignore
                paginate={paginate}
                noticesPerPage={noticesPerPage}
                // @ts-ignore
                totalNotices={notices?.length}
              />
            )}
          </div>
          <div className={styles.notices}>
            {isLoading ? "Loading..." : ""}
            {error ? "Error" : ""}
            {!tag.length ? (
              <Notices notices={currentNotice} />
            ) : (
              <SortedNotices notices={notices} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
