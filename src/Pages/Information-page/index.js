import styled from "styled-components";
import { Row, Col, Container } from "reactstrap";
import { Image } from "../../Components/Shared/Card/index";

const Wrapper = styled.div`
.grid {
    display: grid;
    grid-template-columns: repeat (5,1fr );
    gap: 2rem;
    padding: 1rem;
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
            <Row>
                <Col>
                    <Image />
                </Col>
                <Col>
                    <h2>Heading</h2>
                    <p>Msg</p>
                    <p><span>Directed by: </span> d1 </p>
                    <p><span>Budget: </span> amt </p>
                    <p><span>Revenue: </span> amt </p>
                    <h3> Cast </h3>
                    <div className="grid">
                        <Nwrapper />
                        <Nwrapper />
                        <Nwrapper />
                        <Nwrapper />
                        <Nwrapper />
                        <Nwrapper />
                        <Nwrapper />
                        <Nwrapper />
                    </div>
                </Col>
            </Row>
        </Container>
    </Wrapper>
};



export default Information