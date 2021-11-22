import styled from "styled-components";

const Wrapper = styled.div`
background-color: white;
border-radius: 15px;
padding: 0 0 2% 0;
text-align: center;
box-shadow: 0 0 5px 10px #aeaeae;
img{
    width: 100%;
    border-radius: 15px 15px 0 0; 
}

`
const Iwrapper = styled.div`
`

const Card = () => {
    return <Wrapper>
        <Image />
        <h2>heading</h2>
    </Wrapper>
};

export const Image = () => {
    return <Iwrapper>
        <img src="https://pbs.twimg.com/media/FBbTM89XIAMws_U.jpg" />
    </Iwrapper>
};

export default Card