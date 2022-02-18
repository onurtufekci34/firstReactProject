import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import CartSummary from "./CartSummary";
import { Link } from "react-router-dom";

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" expand="md" light>
          <NavbarBrand href="/">Kiel App</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="ms-auto" navbar>
              <Link style={{ padding: 8, textDecoration: "none" }} to="form1">
                Form Demo 1
              </Link>

              <Link style={{ padding: 8, textDecoration: "none" }} to="form2">
                Form Demo 2
              </Link>

              <NavItem>
                <NavLink
                  target="_blank"
                  style={{ color: "#0000CD" }}
                  href="https://linkedin.com/in/onurtüfekci"
                >
                  LinkedIn
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  target="_blank"
                  style={{ color: "#000000" }}
                  href="https://github.com/onurtufekci34"
                >
                  GitHub
                </NavLink>
              </NavItem>

              <CartSummary
                deleteAllCart={this.props.deleteAllCart}
                removeFromCart={this.props.removeFromCart}
                cart={this.props.cart}
              />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
