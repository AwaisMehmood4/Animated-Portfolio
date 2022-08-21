import React from 'react';
import styled from 'styled-components';
import Img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg';
import LogoComponent from '../subComponent/LogoComponent';
import PowerButton from '../subComponent/PowerButton';
import SocialIcons from '../subComponent/SocialIcons';
import {Blogs} from '../data/BlogData';
import BlogComponent from './BlogComponent';

const MainContainer = styled.div`
background-image: url(${Img});
background-position: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;

`

const Container = styled.div`

background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
width: 100%;
height: auto;
position: relative;
padding-bottom: 5rem;

`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 5rem;

`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);


`




function BlogPage(props) {
    return (
        <MainContainer>
            <Container>
                <LogoComponent />
                <PowerButton />
                <SocialIcons />
                <Center>
                    <Grid>
                        {
                            Blogs.map(blog => {
                             return   <BlogComponent key={blog.id} blog={blog} />
                            })
                        }
                    </Grid>
                </Center>
            </Container>
        </MainContainer>
    );
}

export default BlogPage;