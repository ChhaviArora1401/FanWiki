import styled from "styled-components";
import { Row, Col, Container } from "reactstrap";
import { Image } from "../../Components/Shared/Card/index";
import { useLocation, useNavigate } from "react-router";

const Wrapper = styled.div`
font-size: 1.5rem;
color: white;
.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    padding: 1rem;
}
img {
    width: 90%;
}
h2 {
    margin-top: -1rem;
    margin-bottom: 3rem;
    color: white;
    text-shadow: 2px 2px 4px #FFFFFF;
}
`

const Nwrapper = styled.div`
background: #000;
opacity: 0.5;
padding: 10% 10% 10% 13%;
width: 100%;

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

                                <p><span className="text-head">Directed by: </span>  {state.director}  </p>
                                <p><span className="text-head">Budget: </span> {state.budget} </p>
                                <p><span className="text-head">Revenue: </span>  {state.revenue} </p>
                            </>
                    }
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
                </Col>
            </Row>

        </Container>
    </Wrapper>
};

export default Information