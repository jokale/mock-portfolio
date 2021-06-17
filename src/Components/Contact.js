import React from 'react';
import Footer from './Footer';
import styled from 'styled-components'

const MainBlock = styled.div `
background-color: #E6DACE;
width: 100%;
height: 1220px;
display: flex;
/* justify-content: space-between; */
flex-direction: column;
`

const Title = styled.h1 `
position: relative;
top: 150px;
/* left: 0px; */
text-align: center;
font-size:2rem;
text-decoration: underline;
`
const Form = styled.form `
position: relative;
left: 650px;
top : 200px;
width: 700px;
height: 800px;
color: black;
background-color: white;
`

function Contact() {
    return (
      <div className="Contact">
        <MainBlock>
          <Title> Let's Talk</Title>
        <Form>
        <br></br><label>First Name </label>
        <input></input> <br></br>

        <label>Last Name </label>
        <input></input><br></br>

        <label>Email </label>
        <input></input><br></br>

        <label>Subject</label>
        <input></input><br></br>

        <label>Message </label>
        <textarea></textarea><br></br>

        </Form>
        </MainBlock>
        {/* <Footer/> */}
      </div>
    );
  }
  
  export default Contact;
  