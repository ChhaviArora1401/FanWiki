import styled from "styled-components";
import { Container } from "reactstrap";
import Card from "../../Components/Subpage/Card/index";

const Wrapper = styled.div`
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    padding: 1rem;
}
`

const Main = (props) => {
    console.log(props)
    return <Wrapper className="d-flex align-items-center justify-content-center flex-column">
        <Container>
            <h1 className="text-center mt-4">{props.title}</h1>
            <div className="grid">
                {
                    props.data.data.map(d => {
                        return <Card title={props.title} data={d} />
                    })
                }
            </div>
        </Container>
    </Wrapper>
};

export default Main