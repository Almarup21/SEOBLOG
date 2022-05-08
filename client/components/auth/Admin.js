import React, { useEffect } from "react";
import Router from "next/router";
import { isAuth } from "../../action/auth";

function Admin({ children }) {
  useEffect(() => {
    if (!isAuth()) {
      Router.push(`/signin`);
    } else if (isAuth().role !== 1) {
      Router.push(`/`);
    }
  });
  // console.log(isAuth());
  return <React.Fragment>{children}</React.Fragment>;
}

export default Admin;
