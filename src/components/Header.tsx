import { Container, Navbar } from 'react-bootstrap';
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
        </Container>
    </Navbar>
}
