import styled from "styled-components";
import { Container } from "reactstrap";
import Card from "../../Components/Shared/Card/index";
import data from '../../Data/index.json';

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
            <div className="grid">
                {
                    data.data.map(d => {
                        return <Card data={d} />
                    })
                }
            </div>
        </Container>
    </Wrapper>
};

export default Main