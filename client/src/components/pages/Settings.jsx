import { Avatar } from '@material-ui/core'
import React from 'react'
import SideMenu from '../SideMenu'
import styled from 'styled-components'
import Navbar from '../Navbar'
import pic from '../assets/profile.jpg'

const Section = styled.div`
display: flex;
padding: 50px;
`
const Account = styled.div`
display: flex;
flex: 2;
flex-direction: column;
padding: 5px;
`
const HeaderSection = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 10px;
color: tomato;
`
const Header = styled.h1`

`
const DeleteLink = styled.p`
font-size: 10px;
cursor: pointer;
`
const TitleWord = styled.p`
font-size: 16px;
margin-bottom: 10px;
`
const ImageSection = styled.div`
display: flex;
margin-bottom: 5px;
align-items: center;
`
const Image = styled.img`
height:60px;
weight:60px;
border-radius: 50%;
margin-right: 5px;
object-fit: cover;
`

const TitleInput = styled.input`
margin-top: 10px;
margin-bottom: 10px;
display: flex;
justify-content: start;
align-items: start;
font-size: 20px;
outline: none; 
border: none;
text-align: start;
`

const Button = styled.div`
padding: 10px 20px;
background-color: teal;
color: #fff;
margin-top: 10px;
border-radius: 5px;
text-align: center;
cursor: pointer;
`
const SocialIcon = styled.div`

`
const SideMenuSection = styled.p`
flex: 1;
`


const Settings = () => {
  return (
    <>
    <Navbar />
    <Section>
        <Account>
            <HeaderSection>
                <Header>Update Your Account</Header>
                <DeleteLink>Delete Account</DeleteLink>
            </HeaderSection>
            <TitleWord>Profile Picture</TitleWord>
            <ImageSection>
                <Image src={pic} />
                <SocialIcon color="E4405F">
                    <Avatar />
                </SocialIcon>
            </ImageSection>
            <TitleWord>UserName</TitleWord>
            <TitleInput type="text" placeholder='Username' />
            <TitleWord>Email</TitleWord>
            <TitleInput type="Email" placeholder='Email' />
            <TitleWord>Password</TitleWord>
            <TitleInput type="Password" placeholder='Password' />
            <Button type="submit">Update</Button>
        </Account>
        <SideMenuSection>
            <SideMenu />
        </SideMenuSection>
    </Section>
    </>
  )
}

export default Settings