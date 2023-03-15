import React from "react";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    React + Typescript + React-Bootstrap
                </Navbar.Brand>
            </Container>
        </Navbar>
    </>    
  );
};

export default Header;
