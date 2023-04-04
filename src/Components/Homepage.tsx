import { Container, Row, Col, Button } from "react-bootstrap";

function HomePage () 
{
    return (
        <>
            <Container className="hero-bg">
                <Row className="title-and-login-btn">
                    <Col>
                        <h2>GameSwap</h2>
                    </Col>
                    <Col className="login-btn">
                        <Button>Login</Button>
                    </Col>
                </Row>
                <Row className="header-and-description">
                    <Col>
                        <h1>Make your old games someone else's problem</h1>
                    </Col>
                    <Col>
                        <p>Swap your old games for ones that are new to you. And make new friends in the process!</p>
                    </Col>
                    <Col>
                        <Button>Join Now</Button>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="new-releases-row">
                    <Col>
                        <h1>New Releases</h1>
                    </Col>
                    <Col>
                        {/* This col is where newly-released games will be shown */}
                    </Col>
                </Row>
            </Container>
            <Container className="trending-row">
                <Row>
                    <Col>
                        <h1>Trending</h1>
                    </Col>
                    <Col>
                        {/* This is where trending games will be shown */}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export { HomePage }