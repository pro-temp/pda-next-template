import {
  requestDevicePickerColumns,
  requestHousePickerColumns,
} from "@/services/warehouse";
import { QuickPage, withAuth, withNavBar } from "thea-mobile";
import { PageSettings } from "thea-mobile/dist/Page";
import { usePage } from "thea-mobile/dist/Page/hooks";

const {{{name}}} = () => {
  const { pageRef, validateFields, resetField } = usePage();

  const settings: PageSettings = {
    form: {
      fields: [
        {
          label: "仓库",
          name: "house_code",
          key: "house_code",
          fieldType: "picker",
          props: {
            request: requestHousePickerColumns,
            defaultFirst: true,
          },
          onChange: () => {
            resetField("device_code");
          },
        },
        {
          label: "入库口",
          name: "device_code",
          key: "device_code",
          fieldType: "picker",
          updateDeps: ["house_code"],
          props: {
            request: requestDevicePickerColumns,
            params: {
              type: "In",
            },
          },
        },
        {
          label: "托盘号",
          name: "container_code",
          key: "container_code",
          fieldType: "container",
          rules: [{ required: true, message: "请输入托盘号" }],
        },
      ],
    },
    list: {
      columns: [
        {
          label: "列名1",
          value: "listfield1",
        },
        {
          label: "列名2",
          value: "listfield2",
        },
      ],
    },
    button: {
      buttonItem: {
        requestConfig: {
          actions: [
            validateFields,
            () => {
              console.log("complete");
            },
          ],
        },
      },
    },
  };
  return <QuickPage ref={pageRef} settings={settings} />;
};

export default withAuth(withNavBar({{{name}}}, "{{{title}}}"));
