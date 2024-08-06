import { Container, Navbar, Nav } from 'react-bootstrap';
import './Header.css';

export default function Header() {
    return <Navbar
        data-bs-theme='light'
        fixed='top'
        id='header'
        className='surface'
        expand='md'
    >
        <Container fluid>
            <Navbar.Brand href='https://bogosorter.github.io' className='d-flex'>
                bogosorter
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='navbar-collapse' />
            <Navbar.Collapse id='navbar-collapse'>
                <Nav className='w-100'>
                    {/*<Nav.Link key={index} href={item.href}>{item.label}</Nav.Link>*/}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}
