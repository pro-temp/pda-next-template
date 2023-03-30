import { request } from "umi";

export interface LoginParams {
  user: string;
  pwd: string;
}
export const login = (data: LoginParams) =>
  request("/restful/login", {
    method: "post",
    data,
  });

export const logout = () =>
  request("/restful/logout", {
    method: "post",
  });
