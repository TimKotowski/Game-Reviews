import React from "react";
import UserLogin from "./UserLogin";
import Oauth from "./Oauth";
import UserPage from "./UserPage";

const Login = () => {
  return (
    <div className="bg-gray-300 max-w-d max-w-sm mx-auto ">
      <UserPage />
      <UserLogin />
      <Oauth />
    </div>
  );
};

export default Login;
