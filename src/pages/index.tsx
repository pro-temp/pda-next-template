import { Menu, PageTemplate, withAuth, withNavBar } from "thea-mobile";
import { MenuItemProps } from "thea-mobile/dist/Grid/menu";

const HomePage = () => {
  const PageMain = () => {
    const menuList: MenuItemProps[] = [
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
