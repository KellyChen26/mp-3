import {useState} from "react";
import styled from "styled-components";

{/*Hooks I need to update UI --> results, input values*/}

const Result = styled.h1<{result:number}>`
    
    color: ${(props)=>props.result<0?'red':'blue'};
`

{/*For my styled components I learned from https://styled-components.com/docs/basics that
I use styled.(not div) for cases where an action needs to take place (like the user input) and
I use styled.div otherwise*/}
const StyledCalculator = styled.div`
    background-color: #BADFDB;
    width: 90%;
    height: 50%;
    margin: 0 auto;
    border: dotted #3368A0 3px;
    
    @media screen and (max-width: 1000px){
        height: 40%;
    }
`
const StyledInputs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 1%;
`

const StyledInputOne = styled.div`
    width: 50%;
    text-align: center;
    padding: 5%;
`
const StyledInputTwo = styled.div`
    width: 50%;
    text-align: center;
    padding: 5%;`

const StyledInput = styled.input`
    border: solid seagreen 2px;
    border-radius: 10px; /*I learned this from W3 schools, this allows me to define the radius of an element's corners*/
    font-size: calc(2px + 1.5vw);
    display: block;
    margin: 0 auto;`

const StyledButtons = styled.div`
    text-align: center;`

const StyledButton = styled.button`
    background-color: #FFA4A4;
    border: solid seagreen 2px;
    border-radius: 8px;
    display: inline;`

const StyledOutput = styled.div`
    text-align: center;
    border: solid seagreen 2px;
    background-color: beige;
    border-radius: 10px;
    width: 20%;
    height: 20%;
    display: block;
    margin: 0 auto;`



export default function Calc() {

    const [firstnumber, setFirstnumber] = useState(0);
    const [secondnumber, setSecondnumber] = useState(0);
    const [result, setResult] = useState("");


    function addition(){
        const answer = firstnumber + secondnumber;
        setResult(String(answer));
    }

    function subtraction(){
        const answer = firstnumber - secondnumber;
        setResult(String(answer));
    }

    function multiplication(){
        const answer = firstnumber * secondnumber;
        setResult(String(answer));
    }

    function division(){
        const answer = firstnumber / secondnumber;
        setResult(String(answer));
    }

    function power(){
        let answer = 1;
        for(let i=0; i<secondnumber; i++){
            answer *= firstnumber;
            setResult(String(answer))
        }
    }

    function doClear(){
        setFirstnumber(0);
        setSecondnumber(0);
        setResult("");
    }


    return(
        <StyledCalculator>
            <StyledInputs>
                <StyledInputOne>
                    <label htmlFor="first-number">First Number: </label>
                    <StyledInput
                        id="first-number"
                        placeholder="First Number"
                        value={firstnumber}
                        onChange={(e)=>setFirstnumber(Number(e.target.value))}
                    />
                </StyledInputOne>
                <StyledInputTwo>
                    <label htmlFor="second-number">Second Number: </label>
                    <StyledInput
                        id="second-number"
                        placeholder="Second Number"
                        value={secondnumber}
                        onChange={(e)=>setSecondnumber(parseInt(e.target.value))}
                    />
                </StyledInputTwo>
            </StyledInputs>

            <StyledButtons>
                <StyledButton onClick={addition}>+</StyledButton>
                <StyledButton onClick={subtraction}>-</StyledButton>
                <StyledButton onClick={multiplication}>*</StyledButton>
                <StyledButton onClick={division}>/</StyledButton>
                <StyledButton onClick={power}>**</StyledButton>
                <StyledButton onClick={doClear}>Clear</StyledButton>
            </StyledButtons>

            <StyledOutput>
                <Result result={result}>{result}</Result>
            </StyledOutput>

        </StyledCalculator>
    )


}
