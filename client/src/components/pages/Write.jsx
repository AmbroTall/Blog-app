import React from 'react'
import styled from 'styled-components'
import pic from '../assets/blog1.jpg'
import Navbar from '../Navbar'


const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
padding: 30px;
`
const BlogImg = styled.img`
width: 800px;
height: 300px;
border-radius: 10px;
object-fit: cover;
`
const BlogInput = styled.button`
display: flex;
justify-content: space-between;
margin-top: 10px;
`
const TitleInput = styled.input`
margin-top: 10px;
margin-bottom: 10px;
display: flex;
justify-content: start;
align-items: start;
font-size: 40px;
outline: none; 
border: none;
text-align: start;
`
const InputFile = styled.input`
display: flex;
justify-content: start;
align-items: start;
font-size: 10px;
`
const TextAreaInput = styled.textarea`
font-weight: 300;
font-size: 40px;
width: 600px;
margin-top: 10px;
`


const Button = styled.div`
padding: 5px 10px;
background-color: teal;
color: #fff;
margin-top: 10px;
border-radius: 5px;
`
const Write = () => {
  return (
    <>
    <Navbar />
    <Container>
        <BlogImg src={pic} alt='blogimg'/>
        <BlogInput>
          <InputFile type="file" />
          <TitleInput type="text" placeholder='Enter title here' />
        </BlogInput>
        <TextAreaInput placeholder='Enter your story here'></TextAreaInput>
        <Button type="submit">Publish</Button>
    </Container>
    </>
  )
}

export default Write