import QueryString from "qs";
import { request } from "umi";

export interface LoginParams {
  username: string;
  password: string;
}
export const login = (data: LoginParams) =>
  request("/login/pda", {
    method: "post",
    data: QueryString.stringify(data),
  });

export const logout = () =>
  request("/logout/pda", {
    method: "post",
  });
