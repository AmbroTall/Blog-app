import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
width: 350px;
padding: 30px;
`
const BlogImg = styled.img`
width: 100%;
height: 300px;
border-radius: 10px;
object-fit: cover;
`
const BlogTitle = styled.h2`
margin-top: 10px;
margin-bottom: 10px;
display: flex;
justify-content: flex-start;

`
const BlogDesc = styled.p`
font-weight: 300;
`

const SingleBlogContainer = ({blog}) => {
  return (
    <Container>
        <BlogImg src={blog.img} alt='blogimg'/>
        <BlogTitle>{blog.title}</BlogTitle>
        <BlogDesc>{blog.desc}</BlogDesc>
    </Container>
  )
}

export default SingleBlogContainer