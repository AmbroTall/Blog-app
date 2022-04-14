import {Facebook, Instagram, Pinterest, Twitter} from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import pic from './assets/profile.jpg'

const Container = styled.div`
display: flex;
background-color: rgb(0,0,0,0.1);
border-radius: 10px;
flex-direction: column;
padding: 30px;
justify-content: center;
align-items: center;
`
const Header = styled.h4`
text-align: center;
padding: 5px;
border-top: 1px solid #666;
border-bottom: 1px solid #666;
margin-bottom: 20px;
`
const Image = styled.img`
margin-bottom: 20px;
text-align: center;
width: 300px;
height: 300px;
object-fit: cover;
`
const Description = styled.p`
text-align: start;
margin-bottom: 20px;
`
const SubContent = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
`
const Category = styled.p`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
padding: 10px 40px;
cursor: pointer;
`
const HeaderIcons = styled.h4`
padding: 50px;
`

const IconsTopLeft = styled.div`
display: flex;
align-items: center;
`
const SocialIcon = styled.div`
height: 20px;
width: 20px;
display: flex;
justify-content:center;
margin-right: 5px;
align-items: center;
background-color: #${props => props.color};
cursor: pointer;
`

const SideMenu = () => {
  return (
    <Container>
        <Header>About Me</Header>
        <Image src={pic} />
        <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, eius excepturi! Vero harum amet porro eos. Recusandae mollitia odit, tenetur eos aliquid voluptatibus, perferendis perspiciatis nihil quia, aperiam culpa ullam.</Description>
        <Header>CATEGORIES</Header>
        <SubContent>
          <Category>Life</Category>
          <Category>Music</Category>
          <Category>Style</Category>
          <Category>Sport</Category>
          <Category>Tech</Category>
          <Category>Cinema</Category>
        </SubContent>
        <HeaderIcons>FOLLOW</HeaderIcons>
        <IconsTopLeft>
        <SocialIcon color="385999">
          <Facebook />
        </SocialIcon>
        <SocialIcon color="E4405F">
          <Instagram />
        </SocialIcon>
        <SocialIcon color="55ACEE">
          <Twitter />
        </SocialIcon>
        <SocialIcon color="E60023">
          <Pinterest />
        </SocialIcon>
      </IconsTopLeft>
    </Container>
  )
}

export default SideMenu