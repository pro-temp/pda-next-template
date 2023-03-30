import { login, logout } from "@/services/user";
import { useState } from "react";
import { useAuth } from "thea-mobile/dist/hooks";
import { useRequest } from "umi";

export default () => {
  // 初始化用户状态
  const initialState = { name: "", Permissions: [] };
  const { userInfo: localUser, setUserInfo: setLocalUser } = useAuth();
  const [user, setUser] = useState(localUser || initialState);

  // 保存用户信息
  const saveUser = (data: any) => {
    setUser(data);
    setLocalUser(data);
  };

  // 清除用户信息
  const destroyUser = () => {
    saveUser(initialState);
  };

  // 请求登录
  const { run: runLogin } = useRequest(login, {
    manual: true,
    onSuccess: saveUser,
  });

  // 请求登出
  const { run: runLogout } = useRequest(logout, {
    manual: true,
    onSuccess: destroyUser,
  });

  const executeLogin = runLogin;

  const executeLogout = runLogout;

  return {
    user,
    executeLogin,
    executeLogout,
  };
};
