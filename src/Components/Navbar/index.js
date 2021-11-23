import styled from "styled-components";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
background-color: #777;
padding: 0.5% 1% 0.5% 1%;
img{
    height: 50px; 
    width: 50px;
    margin: 0 1% 0 3%;
}
`

const Nav = () => {
    return <Wrapper>
        <Link to="/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm7M1r--N6wUvjWAlwK3oua8ish4VT9ubK2w&usqp=CAU" />
            logo
        </Link>
    </Wrapper>
};

export default Nav