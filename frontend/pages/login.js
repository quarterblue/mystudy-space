import React, { useState, useContext } from "react";
import InputTemplate from "../components/InputTemplate";
import { Context } from "../context/state";

const Input = () => {
  const { authData } = useContext(Context);
  const [auth, setAuth] = authData;

  return <InputTemplate type={"login"} />;
};
// const Input = () => {
//   return <InputTemplate type={"login"} />;
// };

export default Input;
