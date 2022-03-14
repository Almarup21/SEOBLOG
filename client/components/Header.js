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
              {isAuth() && (
                <NavItem>
                  <NavLink
                    onClick={() => signout(() => Router.replace("/signin"))}
                  >
                    <a>Signout</a>
                  </NavLink>
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
