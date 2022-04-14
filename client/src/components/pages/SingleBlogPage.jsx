import React from 'react'
import SideMenu from '../SideMenu'
import NavBar from '../Navbar'
import styled from 'styled-components'
import pic from '../assets/blog1.jpg'
import {BorderColorSharp, DeleteOutlineSharp} from '@material-ui/icons'

const Section = styled.div`
display: flex;
padding: 50px;
`
const BlogSection = styled.div`
flex: 3;
display: flex;
flex-direction: column;
margin-right: 10px;
`
const TitleContainer = styled.div`
margin-top: 15px;
margin-bottom: 5px;
display: flex;
justify-content: space-between;
`
const DelEditIcons = styled.div`
display: flex;
`
const SocialIcon = styled.div`
display: flex;
background-color: #${props => props.color};
justify-content: center;
align-items: center;
margin-left: 5px;
cursor: pointer;
border-radius: 20px;
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
margin-bottom: 15px;
`
const SideMenuSection = styled.p`
flex: 1;
`



const SingleBlogPage = () => {
  return (
    <>
    <NavBar />
    <Section>
        <BlogSection>
        <BlogImg src={pic} alt='blogimg'/>
        <TitleContainer>
            <BlogTitle>Blog Title For Detail Page</BlogTitle>
            <DelEditIcons>
                <SocialIcon color="385999">
                    <BorderColorSharp />
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <DeleteOutlineSharp />
                </SocialIcon>
            </DelEditIcons>
        </TitleContainer>
        <BlogDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptate mollitia, commodi quis repellat atque doloremque totam molestiae fuga numquam recusandae temporibus sit doloribus laboriosam. Assumenda temporibus mollitia rem! Aliquid.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptate mollitia, commodi quis repellat atque doloremque totam molestiae fuga numquam recusandae temporibus sit doloribus laboriosam. Assumenda temporibus mollitia rem! Aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptate mollitia, commodi quis repellat atque doloremque totam molestiae fuga numquam recusandae temporibus sit doloribus laboriosam. Assumenda temporibus mollitia rem! Aliquid.</BlogDesc>
        </BlogSection>
        <SideMenuSection>
            <SideMenu />
        </SideMenuSection>
    </Section>
    </>
  )
}

export default SingleBlogPage