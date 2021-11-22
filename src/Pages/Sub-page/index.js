import styled from "styled-components";
import { Container } from "reactstrap";
import Card from "../../Components/Shared/Card/index";

const Wrapper = styled.div`
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    padding: 1rem;
}
`

const Main = () => {
    return <Wrapper className="d-flex align-items-center justify-content-center flex-column">
        <Container>
            <h1 className="text-center mt-4">Selected</h1>
            <div className="grid">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </Container>
    </Wrapper>
};

export default Main
