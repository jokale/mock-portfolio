import React from 'react';
import styled from 'styled-components'

const FirstDiv = styled.div `
background-color: #E6DACE;
position: relative;
left: 0px;
width: 40%;
height: 1000px;
z-index: -1;
`

const PicDiv = styled.div `

position: relative;
left: 500px;
top: 150px;
background-color: #F4ECE6;
display: flex;
justify-content: center;
width: 370px;
height: 440px;
border-bottom: 40px solid white;
filter: drop-shadow(0 0 0.75rem grey);

// I need to adjust for 1440px screen
`


function Home() {
    return (
      <div className="Home">
        <FirstDiv> <h1>First Div</h1>
        <PicDiv>where my pic will go</PicDiv>
        </FirstDiv>
      </div>
    );
  }
  
  export default Home;
  