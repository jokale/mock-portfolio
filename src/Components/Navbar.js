import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'


const Nav = styled.div ` 
height: 100px;
background-color: white;
position: fixed;
z-index: 1;
width: 100%;
padding-left: 40px;
/* border: 1px solid blue; */
top: 0px;

`

const HomeTitle = styled.a`
position: fixed;
left: 40px;
font-family: 'Source Sans Pro', sans-serif;
padding-top: 45px;
font-size: 1.4rem;
/* border: 1px solid red; */
width: 100%;
text-decoration: none;
color: black;
background-color: white;

`

const RestNavOne = styled.a `
position: fixed;
right: 440px;
text-decoration: none;
display: inline;
padding-top: 50px;
padding-left: 30px;
font-size: 1rem;
scroll-margin-top: 5rem;
text-decoration: none;
`

const RestNavTwo = styled(RestNavOne) `
position: fixed;
right: 300px;
`


const RestNavThree = styled(RestNavOne) `
position: fixed;
right: 160px;
`


const RestNavFour = styled(RestNavOne) `
position: fixed;
right: 40px;
`


function Navbar() {
    return (
      <div className="Navbar">
         <Nav>
         <HomeTitle> <NavLink to="/" exact>Liezel  Frank / PROJECT MANAGER </NavLink></HomeTitle>
           <RestNavOne><NavLink to="/about-me" exact  >ABOUT ME</NavLink> </RestNavOne>
            <RestNavTwo><NavLink to="/resume" exact >RESUME</NavLink></RestNavTwo>
               <RestNavThree><NavLink to="/projects" exact  >PROJECTS</NavLink></RestNavThree>
                 <RestNavFour><NavLink to="/contact" exact>CONTACT</NavLink></RestNavFour>
       
        </Nav>
      </div>
    );
  }
  
  export default Navbar;