import { Menu, PageTemplate, withAuth, withNavBar } from "thea-mobile";

const HomePage = () => {
  const PageMain = () => {
    const menuList = [
      {
        name: "skubind",
        description: "组盘",
        path: "/skutest",
      },
    ];
    return <Menu data={menuList} />;
  };
  return <PageTemplate main={<PageMain />} />;
};

export default withAuth(
  withNavBar(HomePage, {
    title: "菜单",
    backArrow: false,
  })
);
