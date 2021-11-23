import styled from "styled-components";
import { Link } from "react-router-dom";

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

const Card = (props) => {
    const { title, posterLink, link } = props.data
    return <Link to={link}>
        <Wrapper>
            <Image src={posterLink} />
            <h2>{title}</h2>
        </Wrapper>
    </Link>
};

export const Image = (props) => {
    return <Iwrapper>
        <img src={props.src} />
    </Iwrapper>
};

export default Card