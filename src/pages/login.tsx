import { Login } from "thea-mobile";
import { useModel } from "umi";

const UserLogin = () => {
  const { executeLogin } = useModel("userModel");

  return <Login request={executeLogin} />;
};

export default UserLogin;
