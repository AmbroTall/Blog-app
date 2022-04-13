import React from 'react'
import styled from 'styled-components'
import pic from './assets/profile.jpg'
import {Facebook, Instagram, Pinterest, Twitter, SearchOutlined} from '@material-ui/icons'
import {Link} from 'react-router-dom'

const NavBar = styled.div`
height: 50px;
position: sticky;
top: 0;
background: #fff;
display: flex;
padding: 0px 100px;
z-index: 999;
`
const IconsTopLeft = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const SocialIcon = styled.div`
height: 40px;
width: 40px;
display: flex;
justify-content:center;
margin-right: 5px;
align-items: center;
background-color: #${props => props.color};
cursor: pointer;
`
const MenuCenter = styled.div`
flex: 2;
display: flex;
align-items: center;
justify-content: center;
`
const MenuItem = styled.p`
font-weight: 400;
font-size: 25px;
margin-left: 15px;
cursor: pointer;
text-decoration: none;
&:hover{
  color: #ccc;
  text-decoration: none;
}
`

const ProfileTopRight = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
`

const SearchIcon = styled.div`
cursor: pointer;
display: flex;
align-items: center;
`

const ProfileImg = styled.img`
height: 40px;
width: 40px;
border-radius: 50%;
object-fit: cover;
margin-right: 10px;
cursor: pointer;
`



const Navbar = () => {
  return (
    <NavBar>
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
      <MenuCenter>
      <Link to='./' style={{textDecoration: "none", color: "unset"}}>
        <MenuItem>HOME</MenuItem>
        </Link>
        <MenuItem>ABOUT</MenuItem>
        <MenuItem>CONTACT</MenuItem>
        <Link to='./write' style={{textDecoration: "none", color: "unset"}}>
        <MenuItem>WRITE</MenuItem>
        </Link>
        <Link to='./login' style={{textDecoration: "none", color: "unset"}}>
          <MenuItem>LOGIN</MenuItem>
        </Link>
      </MenuCenter>
      <ProfileTopRight>
      <Link to='./settings' style={{textDecoration: "none", color: "unset"}}>
        <ProfileImg src={pic} />
      </Link>
        <SearchIcon>
          <SearchOutlined />
        </SearchIcon>
      </ProfileTopRight>
    </NavBar>
  )
}

export default Navbar