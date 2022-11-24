import React, { FC, forwardRef, useEffect, useRef, useState } from "react";
import { NoticeProps } from "./Notice.props";
import styles from "./Notice.module.scss";
import { Htag } from "../Htag/Htag";
import { Button } from "../Button/Button";
import { Tags } from "../Tags/Tags";
import {
  useDeleteNoticeMutation,
  useUpdateNoticeMutation,
} from "../../store/api/notice.api";
import { INoticeDto } from "../../types/notice.interface";
import { Textarea } from "../Textarea/Textarea";
import { Loader } from "../index";

export const Notice: FC<NoticeProps> = ({ notice }) => {
  const [deleteNotice, { isLoading: deleteNoticeLoading }] =
    useDeleteNoticeMutation();
  const [editable, setEditable] = useState<boolean>(false);
  const [messageData, setMessageData] = useState<string | undefined>(
    notice?.message
  );
  const [newTags, setNewTags] = useState(notice?.tags);
  const [updateNotice, { isLoading: updateNoticeLoading }] =
    useUpdateNoticeMutation();

  const onUpdateNotice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditable(false);
    const newNotice: INoticeDto = {
      message: messageData,
      tags: newTags,
      title: notice?.title,
    };
    const id = notice?.id;
    updateNotice({ id, ...newNotice });
  };

  useEffect(() => {
    setNewTags(messageData?.match(/(#\w+)/g));
  }, [messageData]);

  const onSetMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageData(e.target.value);
  };

  const onFofusHandler = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    e.currentTarget.select();
  };

  return (
    <div className={styles.notice}>
      <Htag tag="h3" className={styles["h-3"]}>
        {notice?.title}
      </Htag>
      <div className={styles.message}>{notice?.message}</div>
      {editable && (
        <Textarea
          className={styles["message-edit"]}
          value={messageData}
          onChange={e => onSetMessage(e)}
          onFocus={e => onFofusHandler(e)}
        />
      )}
      <div className={styles.tags}>
        {notice?.tags?.length ? <Tags tags={notice?.tags} /> : ""}
      </div>
      <div className={styles.controls}>
        {!editable && !updateNoticeLoading ? (
          <Button color="blue" onClick={e => setEditable(true)}>
            Edit
          </Button>
        ) : (
          <Button color="green" onClick={e => onUpdateNotice(e)}>
            {updateNoticeLoading ? (
              <Loader type="puff" color={"#FFF"} height="20" width="20" />
            ) : (
              "Save"
            )}
          </Button>
        )}

        <Button color="red" onClick={() => deleteNotice(notice?.id)}>
          Delete
        </Button>
      </div>
    </div>
  );
};
