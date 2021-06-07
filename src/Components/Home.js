import React from 'react';
import styled from 'styled-components'
import model from '../Images/model.png'

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

const BigH = styled.h1 ` 
color: black;
font-family: 'Source Sans Pro', sans-serif;
font-size: 8rem;
position: relative;
right: -900px;
top: -860px;
/* border: 1px solid red; */
`

const FirstSub = styled.p ` 
font-size: 2rem;
position: relative;
right: -906px;
top: -940px;
/* border: 1px solid red; */

`

const ResumeBtn = styled.button `
background-color: #2350FF;
border:none;
border-radius: 20px;
position: relative;
right: -906px;
top: -940px;
font-size: 1rem;
width: 140px;
color: white;
font-weight: 400;
height: 40px;
`

const ProjectBtn = styled(ResumeBtn) `
border: 1px solid black;
right: -916px;
background-color: white;
color: black;
`

const FinalParagraph = styled.p `
color: black;
position: relative;
right: -906px;
top: -920px;
font-size: 1rem;
line-height: 1.3;
`

const Model = styled.img ` 
position: relative;
right: 06px;
top: 20px;
border-radius: 50%;
width: 60%;
height: 50%
`
/* const Subhead */

function Home() {
    return (
      <div className="Home">
        <FirstDiv> <h1>First Div</h1>
        <PicDiv><Model src={model}/></PicDiv>
        </FirstDiv>
        <BigH>Hello</BigH>
        <FirstSub>Here's who I am & what I do</FirstSub>
        <ResumeBtn><a href="/resume">RESUME</a></ResumeBtn>
        <ProjectBtn><a href="/projects">PROJECTS</a></ProjectBtn>
        <FinalParagraph>I'm a paragraph. Click here to add your own text <br></br>and edit me. It’s easy. Just click “Edit Text” or <br></br> double click me to add your own content and <br></br>make changes to the font. <br></br>
        <br></br>I’m a great place for you to tell a story and let <br></br>your users know a little more about you.</FinalParagraph>
      </div>
    );
  }
  
  export default Home;
  