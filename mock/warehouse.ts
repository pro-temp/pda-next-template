import { defineMock } from "umi";

export default defineMock({
  "POST /app/restful/house": (req: any, res: any) => {
    res.status(200).json({
      success: true,
      data: {
        rows: [
          {
            id: "111",
            house_no: "TEST_01",
            house_name: "仓库1",
          },
          {
            id: "222",
            house_no: "TEST_02",
            house_name: "仓库2",
          },
        ],
      },
    });
  },
  "POST /app/restful/device": (req: any, res: any) => {
    res.status(200).json({
      success: true,
      data: {
        rows: [
          {
            id: "111",
            device_code: "dev_01",
            device_name: "入库口2",
          },
          {
            id: "222",
            device_code: "dev_02",
            device_name: "入库口3",
          },
        ],
      },
    });
  },
  "POST /app/restful/skuList": (req, res) => {
    res.status(200).json({
      success: true,
      data: {
        rows:
          req.body.page > 1
            ? []
            : [
                {
                  id: "111",
                  device_code: "dev_01",
                  device_name: "入库口2",
                },
                {
                  id: "222",
                  device_code: "dev_02",
                  device_name: "入库口3",
                },
              ],
        page: 1,
        total: 20,
      },
    });
  },
});
