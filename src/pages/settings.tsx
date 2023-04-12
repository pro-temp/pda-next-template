import { SettingsList, withNavBar } from "thea-mobile";
import { useModel, useNavigate } from "umi";

const Settings = () => {
  const { executeLogout } = useModel("userModel");
  const navigate = useNavigate();
  const handleLogout = async () => {
    await executeLogout();
    navigate("/login", {
      replace: true,
    });
  };
  return <SettingsList onLogout={handleLogout} />;
};

export default withNavBar(Settings, { title: "设置", rightNode: null });
