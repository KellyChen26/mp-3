import styled from "styled-components";

    const StyledHeader = styled.div`
            background-color: #FFA4A4;
            text-align: left;
            font-family: Cinzel, cursive;
        
            @media screen and (max-width: 1000px){
                text-align: center;
            }
    `
export default function Header(){
    return(
        <StyledHeader>
            <h1>Kelly's Digital Resume</h1>
            <p>A collection of my education, experiences, extracurriculars, projects, and achievements!</p>
        </StyledHeader>
    )
}

