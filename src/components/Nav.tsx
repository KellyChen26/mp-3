import {Link} from "react-router";
import styled from "styled-components";

const StyledNav = styled.div`
    width: 30%;
    background-color: #BCE29E;

    @media screen and (max-width: 1000px){
        width: 100%;
    }
`

const StyledUl = styled.div`
    padding-left:0;
    list-style: none;
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width: 1000px){
        padding-left: 0;
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
`

const StyledLi = styled.div`
    border: solid seagreen 1px;
    text-align: center;
    margin: 30% auto;
    width: 80%;
    font-family: "Playfair Display", cursive;
    
    @media screen and (max-width: 1000px){
        border: solid seagreen 1px;
        text-align: center;
        margin: 3%;
    }
`

{/*I learned from https://blog.logrocket.com/how-style-react-router-links-styled-components/ that for
Link in 'Link to=...' I need to have it inside parentheses when I am making a styled component for it*/}
const StyledLink = styled(Link)`
    color: darkblue;
    text-decoration: none;
    font-size: calc(2px + 1.5vw);
    
    @media screen and (max-width: 1000px){  
        color: darkblue;
    }
`


export default function Nav(){
    return(
        <StyledNav>
            <StyledUl>
                <StyledLi><StyledLink to="/">Home</StyledLink></StyledLi>
                <StyledLi><StyledLink to="/education">Education</StyledLink></StyledLi>
                <StyledLi><StyledLink to="/experiences">Experiences</StyledLink></StyledLi>
                <StyledLi><StyledLink to="/extracurriculars">Extracurriculars</StyledLink></StyledLi>
                <StyledLi><StyledLink to="/projects">Projects</StyledLink></StyledLi>
                <StyledLi><StyledLink to="/achievements">Achievements</StyledLink></StyledLi>
            </StyledUl>
        </StyledNav>
    )

}