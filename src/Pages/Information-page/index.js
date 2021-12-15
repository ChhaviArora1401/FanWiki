import styled from "styled-components";
import { Row, Col, Container } from "reactstrap";
import { Image } from "../../Components/Shared/Card/index";
import { useLocation, useNavigate } from "react-router";

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

export const Name = ({ name }) => {
    return <Nwrapper>
        {name}
    </Nwrapper>
};

const Information = () => {

    const { state } = useLocation();
    console.log(state);
    return <Wrapper className="d-flex align-items-center justify-content-center flex-column">
        <Container>
            <Row className="mt-5">
                <Col>
                    <Image src={state.posterLink} />
                </Col>
                <Col>
                    <h2>{state.title}</h2>
                    <p className="text-white">{state.description}</p>
                    {
                        !state.director ?
                            <p><span className="text-white">Developed by: </span> {state.developer} </p>
                            : <>

                                <p><span className="text-white">Directed by: </span> {state.director} </p>
                                <p><span className="text-white">Budget: </span> {state.budget} </p>
                                <p><span className="text-white">Revenue: </span> {state.revenue} </p></>
                    }

                </Col>
            </Row>
            <h3> {state.stars ? "Cast" : "Platforms"} </h3>
            <div className="grid">
                {
                    state.stars ? state.stars.map(s => {
                        return <Name name={s} />
                    }) : state.platforms.map(s => {
                        return <Name name={s} />
                    })
                }
            </div>
        </Container>
    </Wrapper>
};

export default Information