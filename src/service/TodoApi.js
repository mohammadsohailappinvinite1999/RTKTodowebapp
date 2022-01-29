import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const TodosApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  tagTypes: ["Todo"],

  // refetchOnFocus:true, // activeListner is required
  // refetchOnMountOrArgChange: 40
  // keepUnusedDataFor: 60
  // refetchOnReconnect: true, // activeListner is required

  endpoints: (builder) => {
    return {
      getTodos: builder.query({
        query: ({ page, limit }) => ({
          url: `todos?_page=${page}&_limit=${limit}`,
        }),
        keepUnusedDataFor: 6,
        // transformResponse: (res, meta) => res.data,
      }),
      postTodo: builder.mutation({
        query: (data) => ({
          url: "todos",
          method: "POST",
          body: data,
        }),
      }),
      deleteTodo: builder.mutation({
        query: (id) => {
          return {
            url: `todos/${id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const {
  useGetTodosQuery,
  usePostTodoMutation,
  useDeleteTodoMutation,
  endpoints,
} = TodosApi;
