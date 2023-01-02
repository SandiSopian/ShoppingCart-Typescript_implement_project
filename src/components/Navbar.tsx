import { Button, Nav, Container, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Nav className="me-auto">
        <Nav.Link to="/" as={NavLink}>
          Home
        </Nav.Link>
        <Nav.Link to="/store" as={NavLink}>
          Store
        </Nav.Link>
        <Nav.Link to="/about" as={NavLink}>
          About
        </Nav.Link>
      </Nav>

      {cartQuantity > 0 && (
        <Button onClick={openCart} style={{ width: "3rem", height: "3rem", position: "relative" }} variant="outline-primary" className="rounded-circle">
          <svg viewBox="0 -2.55 20.094 20.094" xmlns="http://www.w3.org/2000/svg">
            <path
              id="Path_12"
              data-name="Path 12"
              d="M414.806,829.36c-.678,1.556-1.213,2.66-2.709,2.66h-8.128a2.664,2.664,0,0,1-2.71-2.66l-.8-7.36h-3.484v-1h4.375l.361,3.014h15.358Zm-12.557,0a1.874,1.874,0,0,0,1.72,1.633H412.1c.9,0,1.24-.72,1.626-1.633l.157-.357H402.213Zm-.14-1.36h12.212l.443-1.006H402.006Zm-.135-2.009h13.233l.446-1.013H401.8Zm1.5,7.009a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,403.474,833Zm-.531,1.969h1V834h-1ZM411.474,833a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,411.474,833Zm-.531,1.969h1V834h-1Z"
              transform="translate(-396.973 -821)"
              fill="#444"
            />
          </svg>
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{ color: "white", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: "0", right: "0", transform: "translate(25%, 25%" }}
          >
            {cartQuantity}
          </div>
        </Button>
      )}
    </NavbarBs>
  );
}
