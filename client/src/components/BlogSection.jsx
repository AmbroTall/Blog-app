import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Blogs } from '../Blogs'
import SingleBlogContainer from './SingleBlogContainer'
import SideMenu from './SideMenu'
import axios from 'axios'

const SectionBlog = styled.div`
display: flex;
margin-top: 30px;
padding: 0px 50px;
`

const BlogContainer = styled.div`
flex: 3;
display: flex;
flex-wrap: wrap;
`

const SideMenuConatiner = styled.div`
flex: 1;

`


const BlogSection = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const blogPosts = async() =>{
      const res = await axios.get("http://127.0.0.1:8000/blog/all/")
      setPosts(res.data)
    }
    blogPosts()
  },[])

  console.log(posts)

  return (
    <SectionBlog>
      <BlogContainer>
        {Blogs.map(blog =>(
          <SingleBlogContainer key={blog.id} blog={blog} />
        ))}
      </BlogContainer>
      <SideMenuConatiner>
        <SideMenu />
      </SideMenuConatiner>
    </SectionBlog>
  )
}

export default BlogSection