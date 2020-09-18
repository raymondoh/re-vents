import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

const Navbar = ({ setFormOpen }) => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img
            src="./images/logo.png"
            alt="Revents Logo"
            style={{ marginRight: "15px" }}
          />
        </Menu.Item>
        <Menu name="Events" />
        <Menu.Item>
          <Button
            onClick={() => setFormOpen(true)}
            positive
            inverted
            content="Create event"
          />
        </Menu.Item>
        <Menu.Item position="right">
          <Button basic inverted content="Login" />
          <Button
            basic
            inverted
            content="Register"
            style={{ marginLeft: ".5em" }}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Navbar;
