import Calc from "../Calc.tsx";

export default function Projects(){
    return(
        <>
            <h3>My Projects!</h3>
            <img src="/images/computerscience.jpeg" alt="Woman learning the fundamentals of computer science"/>
            <br/>
            <ul>
                <li><strong>FORGE Design Studios CATALYST Designathon -- WaitWaddle | FIGMA | March 2026</strong>
                    <ul>
                        <li>Co-designed a high fidelity prototype to address a solution to wasted time spent
                            during customer support calls into an interactive and productive game.
                        </li>
                        <li>Conducted user research, identified key statistics, and successfully wire framed user
                            flow into a cohesive design across 48 hours.
                        </li>
                    </ul>
                </li>
            </ul>
            <br/>
            <h3>JavaScript Calculator</h3>
                <Calc/> {/*To reference another component need to wrap them in </>*/}
        </>

    );
}