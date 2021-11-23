import styled from "styled-components";
import { Row, Col, Container } from "reactstrap";
import { Image } from "../../Components/Shared/Card/index";

const Wrapper = styled.div`
font-size: 1.5rem;
.grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1.5rem;
    padding: 1rem;
}
img {
    width: 90%;
}
`

const Nwrapper = styled.div`
`

export const Name = () => {
    return <Nwrapper>
        Name 1
    </Nwrapper>
};

const Information = () => {
    return <Wrapper className="d-flex align-items-center justify-content-center flex-column">
        <Container>
            <Row className="mt-5">
                <Col>
                    <Image />
                </Col>
                <Col>
                    <h2>Heading</h2>
                    <p className="text-white">Msg</p>
                    <p><span className="text-white">Directed by: </span> d1 </p>
                    <p><span className="text-white">Budget: </span> amt </p>
                    <p><span className="text-white">Revenue: </span> amt </p>
                    <h3> Cast </h3>
                    <div className="grid">
                        <Name />
                        <Name />
                        <Name />
                        <Name />
                        <Name />
                        <Name />
                        <Name />
                        <Name />
                        <Name />
                        <Name />
                    </div>
                </Col>
            </Row>
        </Container>
    </Wrapper>
};

export default Information