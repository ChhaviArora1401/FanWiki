import { useNavigate } from "react-router";
import styled from "styled-components";

const Wrapper = styled.div`
background-color: #aeaeae;
border-radius: 15px;
padding: 0 0 2% 0;
text-align: center;
box-shadow: 10px 10px 15px black;
img{
    width: 100%;
    border-radius: 15px 15px 0 0; 
}
:hover{
    transform: scale(1.1);    
    box-shadow: 0 0 5px 5px white;
}
h2:hover {
    color: 	#800000;
}
`
const Iwrapper = styled.div`
`
const Card = (props) => {
    const navigate = useNavigate()
    const { title, posterLink } = props.data
    return <div onClick={() => navigate(`/${title}`, { state: props.data })}>
        <Wrapper>
            <Image src={posterLink} />
            <h2>{title}</h2>
        </Wrapper>
    </div>
};

export const Image = (props) => {
    return <Iwrapper>
        <img src={props.src} />
    </Iwrapper>
};

export default Card