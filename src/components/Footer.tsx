import styled from "styled-components";

const StyledFooter = styled.div`
        background-color:#FFA4A4`

export default function Footer(){
    return(
        <StyledFooter>
                <p>
                    All Rights Reserved by Kelly Chen
                    <a href=""> Credits</a> &#169;
                </p>
        </StyledFooter>
    )
}
