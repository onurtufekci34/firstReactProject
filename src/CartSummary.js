import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink
} from "reactstrap";

export default class CartSummary extends Component {
    renderEmpty(){
        return(
          <NavItem>
              <NavLink>Empty Cart</NavLink>
          </NavItem>
        );
    }

  renderSummary() {
    return (
      <UncontrolledDropdown inNavbar nav>
        <DropdownToggle caret nav>
          Cart
        </DropdownToggle>
        <DropdownMenu end dark>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
                <Badge color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}>X</Badge>
              {cartItem.product.productName}

              <Badge color="success"> {cartItem.quantity}</Badge>
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem >
            <Link to="cart">cart
            </Link>

          </DropdownItem>
          <DropdownItem onClick={()=>this.props.deleteAllCart()}>Reset</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  
  render() {
    return <div>
        {this.props.cart.length>0?this.renderSummary():this.renderEmpty()}
    </div>;
  }
}
