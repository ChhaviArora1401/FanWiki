import styled from "styled-components";

const Wrapper = styled.div`
background-color: white;
width: 100%;
padding: 1% 1% 1% 10%;
margin-top: 5rem;
`

const Foot = () => {
    return <Wrapper>
        <Link to="https://github.com/ChhaviArora1401">
            By Chhavi Arora, 05617702019
        </Link>
    </Wrapper>
};

export default Foot