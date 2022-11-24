import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { INotice } from "../../types/notice.interface";

export const API_URL = "https://637cb0d172f3ce38eaaaa0f7.mockapi.io/api/v1";
export const NOTICE = "notice";

export const noticeApi = createApi({
  reducerPath: "noticeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ["Notice"],
  endpoints: builder => ({
    getAllNotices: builder.query<INotice[], null>({
      query: () => `/${NOTICE}`,
      // @ts-ignore
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Notice", id })),
              { type: "Notice", id: "LIST" },
            ]
          : [{ type: "Notice", id: "LIST" }],
    }),
    deleteNotice: builder.mutation({
      query: id => ({
        url: `/${NOTICE}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Notice"],
    }),
    updateNotice: builder.mutation({
      query: ({ id, ...payload }) => ({
        url: `/${NOTICE}/${id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["Notice"],
    }),
    addNewNotice: builder.mutation({
      query: payload => ({
        url: `/${NOTICE}`,
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Notice"],
    }),
  }),
});

export const {
  useGetAllNoticesQuery,
  useAddNewNoticeMutation,
  useDeleteNoticeMutation,
  useUpdateNoticeMutation,
} = noticeApi;
