import { ResponseStructure } from "thea-mobile/dist/runtime-config/request";
import { request } from "umi";

export interface CheckContainerParams {
  container_code: string;
}
export const checkContainerService = (params: CheckContainerParams) =>
  request<ResponseStructure>("/restful/check", {
    method: "GET",
    params,
  });

export const checkContainer = async (_: any, value: string) => {
  const { success } = await checkContainerService({ container_code: value });
  if (!success) {
    return Promise.reject(new Error("invalid container code"));
  }
  return Promise.resolve();
};
