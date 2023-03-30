import { request } from "umi";
import { ResponseStructure } from "thea-mobile/dist/runtime-config/request";
import { formatSinglePickerColumns } from "thea-mobile/dist/utils";

export interface QueryHouseResponse {
  rows: Array<{ house_name: string; house_no: string }>;
}

export const queryHouse = () =>
  request<ResponseStructure<QueryHouseResponse>>("/restful/house", {
    method: "POST",
  });

// 用于仓库选择器
export const requestHousePickerColumns = async () => {
  const { data } = await queryHouse();
  const columns = formatSinglePickerColumns(data.rows, [
    "house_name",
    "house_no",
  ]);
  return columns;
};

export interface QueryDeviceParams {
  house_code?: string;
}
export interface QueryDeviceResponse {
  rows: Array<{ device_name: string; device_code: string }>;
}
export const queryDevice = (data?: QueryDeviceParams) =>
  request<ResponseStructure<QueryDeviceResponse>>("/restful/device", {
    method: "POST",
    data,
  });

// 用于设备选择器
export const requestDevicePickerColumns = async (
  params?: QueryDeviceParams
) => {
  const { data } = await queryDevice(params);
  const columns = formatSinglePickerColumns(data.rows, [
    "device_name",
    "device_code",
  ]);
  return columns;
};

export const querySkuList = (data: any) =>
  request("/restful/skuList", {
    method: "POST",
    data,
  });
