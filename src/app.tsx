import { RequestConfig } from "umi";
import { runtimeRequest } from "thea-mobile/dist/runtime-config";

export const request: RequestConfig = {
  ...runtimeRequest,
};
