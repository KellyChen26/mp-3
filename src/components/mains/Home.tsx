import {Link} from "react-router";


export default function Home(){
    return(
        <>
            <h3>Home</h3>
            <img src="/images/profile.jpeg" alt="Kelly Chen standing in Boston Public Gardens"/>
            <br/>
            <p>Hi, my name is Kelly Chen, and I am a junior studying computer science at Boston
                University! I endeavor to develop my skills in full stack development, and I am very
                passionate about developing visually aesthetic and accessible applications.</p>
            <br/>
            <p>Welcome to my website, a collection of my <Link to="/experiences"> Experiences </Link>
                and <Link to="/projects"> Projects </Link> along with other information. </p>
        </>
    );
}