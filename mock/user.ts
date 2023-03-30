export default {
  "POST /app/restful/login": (req: any, res: any) => {
    res.status(200).json({
      success: true,
      data: {
        name: "zhangsan",
        permissions: ["/skubind"],
      },
    });
  },
  "POST /app/restful/logout": (req: any, res: any) => {
    res.status(200).json({
      success: true,
    });
  },
  "POST /app/restful/menu": (req: any, res: any) => {
    res.status(200).json({
      success: true,
      data: {

      }
    });
  },
};
