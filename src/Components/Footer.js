import React from 'react';
import styled from 'styled-components'


const Copyright = styled.h6 `
color: black;
background-color: red;
width: 100%;
justify-content: center;
position: relative;
top: -650px;
height: 90px;
left: 0px;
padding-left: 40px;
flex-shrink: 0;
/* padding: 20px; */

@media (max-width: 1440px) {
  left: 0px;
  }
`

function Footer() {
    return (
      <div>
          <Copyright>©2023 by Jae Studios. <br></br></Copyright>
      </div>
    );
  }
  
  export default Footer;
  