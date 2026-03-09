import type { Task } from 'entities/task'
import { baseApi } from 'shared/api/baseApi.ts'

// export const tasksApi = createApi({
//   reducerPath: 'tasksApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://json-placeholder.mock.beeceptor.com',
//   }),
//   tagTypes: ['Tasks'],
//   endpoints: (build) => ({
//     getTasks: build.query<Task[], void>({
//       query: () => 'todos',
//       // преобразовывать не нужно, так как бэк отдаёт сразу массив объектов
//       transformResponse: (response: Task[]) => response,
//       // transformResponse: (res: { tasks: Task[] }) => res,
//       providesTags: ['Tasks'],
//     }),
//   }),
// })

export const tasksApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTasks: build.query<Task[], void>({
      query: () => 'todos',
      // преобразовывать не нужно, так как бэк отдаёт сразу массив объектов
      transformResponse: (response: Task[]) => response,
      // transformResponse: (res: { tasks: Task[] }) => res,
      providesTags: ['Tasks'],
    }),
    deleteTask: build.mutation<any, number>({
      query: (id) => ({
        url: `tasks/${id}`,
        method: 'DELETE',
        invalidateTags: ['Tasks'],
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useGetTasksQuery } = tasksApi
