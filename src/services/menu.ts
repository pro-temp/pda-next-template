import { request } from "umi";

export const queryMenu = () =>
  request("/restful/menu", {
    method: "get",
  });
