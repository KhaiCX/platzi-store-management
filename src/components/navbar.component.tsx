import { Navbar, Container, Nav, NavDropdown, Form, Button } from "react-bootstrap";
const NavBarComponent: React.FunctionComponent = () => {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img style={{
                        width: '40px',
                        height: '40px'
                    }} src="https://fakeapi.platzi.com/_astro/icon.BNMhJCSt.png"></img>
                    Platzi Fake Store API
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavDropdown title="Management" id="navbarScrollingDropdown">
                            <NavDropdown.Item>
                                Products Management
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Users Management
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarComponent;