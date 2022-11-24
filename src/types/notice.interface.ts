export interface INoticeDto {
  message?: string;
  title?: string;
  tags?: string[] | null;
}

export interface INotice extends INoticeDto {
  createdAt: string;
  id: number;
}
