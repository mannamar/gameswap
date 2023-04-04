import { Container, Row, Col, Button } from "react-bootstrap";

function HomePage () 
{
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1>Make your old games someone else's problem</h1>
                    </Col>
                    <Col>
                        <p>Swap your old games for ones that are new to you. And make new friends in the process!</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>New Releases</h1>
                    </Col>
                    <Col>
                        {/* This col is where newly-released games will be shown */}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>Trending</h1>
                    </Col>
                    <Col>
                        {/* This is where trending games will be shown */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}