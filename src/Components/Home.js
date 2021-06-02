import React from 'react';
import styled from 'styled-components'

const FirstDiv = styled.div `
background-color: #E6DACE;
position: relative;
left: 0px;
`

function Home() {
    return (
      <div className="Home">
        <FirstDiv> <h1>First Div</h1></FirstDiv>
      </div>
    );
  }
  
  export default Home;
  