import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '../../feature/auth/authSlice'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
        const user = getState().auth.user
        if (token) {
            headers.set('Authorization', `Bearer ${token}`)
        }
        if (user) {
            headers.set("X-User-Id", user.id);
            headers.set("X-User-Email", user.email);
          }
      
        return headers
    }
})
const baseQueryWithReauth = async (args, api, extraOptions ) => {
    let result = await baseQuery(args, api, extraOptions)
    if(result?.error?.originalStatus === 403 ){
        console.log("sending refresh token")
        const refreshResult = await baseQuery('/refresh', api, extraOptions)
        console.log(refreshResult)
        if(refreshResult?.data){
                const user = api.getState().auth.user
                // store the new token
                api.dispatch(setCredentials({...refreshResult.data, user}))
                // retry the orignal query with the new token
                result = await baseQuery(args, api, extraOptions)
        }
        else{
            api.dispatch(logOut())
        }
    }
    return result;
}
export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
      getUserDetails: builder.query({
        query: () => ({
          url: "/user",
        //   headers: {
        //     "X-User-Id": req.headers["x-user-id"],
        //     "X-User-Email": req.headers["x-user-email"],
        //   },
        }),
        transformResponse: (response) => {
          // transform the response as needed
          return response.data;
        },
      }),
    }),
})