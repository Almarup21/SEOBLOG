import React, { useState } from "react";
import Link from "next/Link";
import { APP_NAME } from "../config";
import NProgress from "nprogress";
import { signout, isAuth } from "../action/auth";
import Router from "next/router";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import ".././node_modules/nprogress/nprogress.css";

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <Navbar light expand="md">
        <NavbarBrand href="/">{APP_NAME}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {!isAuth() && (
              <React.Fragment>
                <NavItem>
                  <NavLink href="/signin">Signin</NavLink>
                </NavItem>
                <NavItem>
                  <Link href="/signup">
                    <NavLink>
                      <a>Signup</a>
                    </NavLink>
                  </Link>
                </NavItem>
              </React.Fragment>
            )}

            {isAuth() && isAuth().role === 1 && (
              <NavItem>
                <NavLink href="/admin">
                  <a>Admin</a>
                </NavLink>
              </NavItem>
            )}

            {isAuth() && (
              <div>
                <NavItem>
                  <NavLink
                    onClick={() => signout(() => Router.replace("/signin"))}
                  >
                    <a>Signout</a>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <Link href="/user/profile">
                    <NavLink>
                      <a>Profile</a>
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <p>{isAuth().email}</p>
                </NavItem>
              </div>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
