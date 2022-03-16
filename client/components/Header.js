import React, { useState } from "react";
import Link from "next/Link";
import { APP_NAME } from "../config";
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

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar light expand="md">
        <div className="container">
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
                </div>
              )}
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
