import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { News } from '../types/news';

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://hacker-news.firebaseio.com/v0/' }),
    endpoints: (builder) => ({
        getAllNews: builder.query<number[], string>({
            query: () => `newstories.json`,
        }),
        getNewsById: builder.query<News, string>({
            query: (id) => `item/${id}.json`,
        }),
    }),
});

export const { useGetAllNewsQuery, useGetNewsByIdQuery } = newsApi;
