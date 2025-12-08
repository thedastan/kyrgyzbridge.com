import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getBlog: build.query<BLOG.GetBlogRes, BLOG.GetBlogReq>({
      query: () => ({
        url: `/blog/`,
        method: "GET",
      }),
      providesTags: ["blog"],
    }),

    getProjects: build.query<BLOG.GetBlogRes, BLOG.GetBlogReq>({
      query: () => ({
        url: `/projects/`,
        method: "GET",
      }),
      providesTags: ["projects"],
    }),

    getContacts: build.query<CONTACTS.GetContactsRes, CONTACTS.GetContactsReq>({
      query: () => ({
        url: `/contacts/`,
        method: "GET",
      }),
      providesTags: ["contacts"],
    }),
  }),
});

export const { useGetBlogQuery, useGetProjectsQuery, useGetContactsQuery } =
  api;
