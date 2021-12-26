import styled from "styled-components";
import { Link } from "react-router-dom";
const logo = "src\Assets\logo1.png";
const Wrapper = styled.div`
background-color: white;
padding: 0.5% 1% 0.5% 1%;
margin-bottom: 5rem;
font-size: 30px;
img{
    height: 50px; 
    width: 60px;
    margin: 0 1% 0 3%;
}
a{
  background: -webkit-linear-gradient(#de6161, #2657eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
    text-decoration: none;
}
`

const Nav = () => {
    return <Wrapper>
        <Link to="/">
            <img src="https://ik.imagekit.io/fwlqvbp8ng2/logo1_GDe7Yo_NvoX.png?updatedAt=1640553304756" />
            FanWiki
        </Link>
    </Wrapper>
};

export default Nav