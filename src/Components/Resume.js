import React from 'react';
import Footer from './Footer';
import styled from 'styled-components'


const MainBlock = styled.div `
background-color: #E6DACE;
/* width: 100%; */
height: 1220px;
display: flex;
/* justify-content: space-between; */
flex-direction: column;
`
const Exp = styled.div `
background-color: white;

color: black;
width: 700px; // this is too long for 1440px
height: 360px;
position: relative;
top: 200px;
left: 500px; // 500px is perfect for 1440px size screen adjust that 
justify-item: center;
font-size: 2rem;
padding-left: 20px;
filter: drop-shadow(0 0 0.75rem grey);


`
function Resume() {
    return (
      <div className="Resume">
        <MainBlock>
        <Exp> <h1>hello</h1>Hello I am exp ondjdjkwe</Exp> <br></br>
        <br></br><Exp> Hello, this is where stuff according <br></br>to my CV will go  </Exp> <br></br>
       <br></br> <Exp> Hello, this is where stuff according <br></br>to my CV will go </Exp>

        </MainBlock>
        {/* <Footer/> */}
      </div>
    );
  }
  
  export default Resume;
  