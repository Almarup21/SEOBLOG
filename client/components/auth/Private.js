import React, { useEffect } from "react";
import Router from "next/router";
import { isAuth } from "../../action/auth";

function Private({ children }) {
  useEffect(() => {
    if (!isAuth()) {
      Router.push(`/`);
    }
  });
  return <React.Fragment>{children}</React.Fragment>;
}

export default Private;
