import { Login } from "thea-mobile";
import { useModel } from "umi";

const UserLogin = () => {
  const { executeLogin, executeLogout } = useModel("userModel");

  return <Login onLoad={executeLogout} request={executeLogin} />;
};

export default UserLogin;
