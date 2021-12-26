import styled from "styled-components";
import { Container } from "reactstrap";
import Card from "../../Components/Subpage/Card/index";

const Wrapper = styled.div`
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 4rem;
    padding: 1rem;
    align-items: start;
}
h1 {
    margin-top: -1rem;
    margin-bottom: 3rem;
    color: white;
    text-shadow: 2px 2px 4px #FFFFFF;
}
a{
    color: black;
    text-decoration: none;
    font-size: 0.7rem;
}
a:hover {
    color: 	#800000;
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