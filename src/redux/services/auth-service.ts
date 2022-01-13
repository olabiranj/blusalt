import { baseApi } from "./base-service";

export interface RegisterRequest {
  email: string;
  phone: string;
  phoneNumberphoneNumber: string;
  firstName: string;
  lastName: string;
  password: string;
  password2: string;
}
export interface LoginRequest {
  email: string;
  password: string;
}
export interface ForgotPasswordRequest {
  email: string;
}
export interface ResetPasswordRequest {
  password: string;
  password2: string;
}

// a simple example of how RTK query works, read more  from docs.
export const authServiceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation<any, RegisterRequest>({
      query: (body) => {
        return {
          url: `/web/user/register`,
          method: "POST",
          body: body,
        };
      },
    }),
    loginUser: builder.mutation<any, LoginRequest>({
      query: (body) => {
        return {
          url: `/web/user/login`,
          method: "POST",
          body: body,
        };
      },
    }),
    forgotPassword: builder.mutation<any, ForgotPasswordRequest>({
      query: (body) => {
        return {
          url: `/web/user/password/forgot`,
          method: "POST",
          body: body,
        };
      },
    }),
    resetPassword: builder.mutation<any, ResetPasswordRequest>({
      query: (body) => {
        return {
          url: `/web/user/password/reset`,
          method: "POST",
          body: body,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authServiceApi;
