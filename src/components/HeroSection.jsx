import React from 'react'
import styled from 'styled-components'
import bunner from './assets/blogpage.jpg'

const Section = styled.div`
height: 100vh;
position: relative;
`
const TitleContainer = styled.div`
left:50%;
color: gold;
font-style: italic;
// position: absolute;
`
const TitleB = styled.p`
text-align: center;
font-weight: 300;
font-size: 50px;
`
const Title = styled.p`
font-size: 60px;
text-align: center;
position: absolute;
left: 42%;
`
const HeroImg = styled.img`
height: 400px;
display: flex;
// margin-top: 80px;
width: 100%;
positon: relative;
`

const HeroSection = () => {
  return (
    <Section>
      <TitleContainer>
        <TitleB>Ambro</TitleB>
        <Title>Blog App</Title>
      </TitleContainer>
      <HeroImg src={bunner} />
    </Section>
  )
}

export default HeroSection