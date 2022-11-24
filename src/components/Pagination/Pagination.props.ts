export interface PaginationProps {
  noticesPerPage: number;
  totalNotices?: number;
  paginate?: (pageNumber?: number) => any;
}
