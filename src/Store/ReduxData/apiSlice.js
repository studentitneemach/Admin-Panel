import {createApi ,fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'

export const UserDataApi = createApi({
    reducerPath: 'UserData',
    tagTypes:['userData'],
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
    endpoints: (builder) => ({
        getUserData: builder.query({
            query: () => ({
                url: '/userData',
                method:"GET"
            }),
            providesTags:['userData']
        }),
        getUserDataById: builder.query({
            query: ( id ) => {
                 return ({
                url: `/userData/${id}`,
                method:'GET',
            })},
            providesTags:['userData']
        })  ,
        updateUserData: builder.mutation({
            query: ({ id, ...data }) => {
                return ({
                headers:{ "Content-type" : "application/json" },
                url: `/userData/${id}`,
                method: 'PATCH',
                    body: { hading_1: data.hading_1, hading_2: data.hading_2, hading_3: data.hading_3  }
            })},
            invalidatesTags: ['userData']
        })
    })
})

export const  { useGetUserDataQuery ,useUpdateUserDataMutation ,useGetUserDataByIdQuery } = UserDataApi