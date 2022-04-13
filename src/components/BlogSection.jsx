import React from 'react'
import styled from 'styled-components'
import { Blogs } from '../Blogs'
import SingleBlogContainer from './SingleBlogContainer'
import SideMenu from './SideMenu'

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