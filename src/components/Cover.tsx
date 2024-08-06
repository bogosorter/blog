import { Container, Row, Col } from 'react-bootstrap';
import mikra from '../images/mikra-cropped.png';
import './Cover.css';

export default function Cover() {
    return (
        <div id='cover'>
            <Container fluid>
                <Row className='justify-content-center'>
                    <Col md={10} className='d-flex flex-column align-items-start justify-content-center d-md-block d-none'>
                        <h1 id='cover-title'>bogothoughts</h1>
                        <p id='cover-description'>whatever comes to mind</p>
                    </Col>
                    <Col sm={11} className='d-flex flex-column align-items-start justify-content-center d-md-none d-block'>
                        <h1 id='cover-title-small'>bogothoughts</h1>
                        <p id='cover-description-small'>whatever comes to mind</p>
                    </Col>
                </Row>
            </Container>
            <img src={mikra} alt='' id='cover-image' />
        </div>
    )
}
