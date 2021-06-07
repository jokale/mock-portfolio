import React from 'react';
import styled from 'styled-components'


const Copyright = styled.h6 `
color: black;
justify-content: left;
`

function Footer() {
    return (
      <div>
          <Copyright>&copy 2023 by Jae Studios. <br></br></Copyright>
      </div>
    );
  }
  
  export default Footer;
  