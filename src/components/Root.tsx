import {Routes, Route} from "react-router";
import Home from "./mains/Home.tsx";
import Education from "./mains/Education.tsx";
import Experiences from "./mains/Experiences.tsx";
import Extracurriculars from "./mains/Extracurriculars.tsx";
import Projects from "./mains/Projects.tsx";
import Achievements from "./mains/Achievements.tsx";
import Nav from "./Nav.tsx";
import Header from "./Header.tsx";
import Footer from "./Footer";
import styled from "styled-components";

const StyledMain = styled.div`
    height: 100vh;
    width: 70%; /*For screens bigger than 1000-px shouldn't exceed 70% of the width of its parent*/
    font-size: calc(2px + 1.5vw);
    text-align: left;
    padding: 1%;
    line-height: 1.5; /* I learned this from W3 Schools, line-height allows you to specify how much space you want between lines*/
    font-family: Garamond, serif;
    
    @media (max-width: 800px) {
        width: 100%;
    }
`

{/*From my mp-1, page-wrapper and container is in every one of my html files*/}

export default function Root(){
    return(
        <div id="page-wrapper">
            <Header/>
                <div id="container">
                    <Nav/>
                        <StyledMain>
                            <Routes>
                                <Route path={`/`} element={<Home/>} />
                                <Route path={`/education`} element={<Education/>} />
                                <Route path={`/experiences`} element={<Experiences/>} />
                                <Route path={`/extracurriculars`} element={<Extracurriculars/>} />
                                <Route path={'/projects'} element={<Projects/>} />
                                <Route path={'/achievements'} element={<Achievements/>} />
                            </Routes>
                        </StyledMain>
                </div>
            <Footer/>
        </div>
    );
}
