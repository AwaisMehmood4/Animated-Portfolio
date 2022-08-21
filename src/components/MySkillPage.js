import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import {LightTheme} from './Theme';
import { Design, Develope } from './AllSvgs';
import LogoComponent from '../subComponent/LogoComponent';
import SocialIcons from '../subComponent/SocialIcons';
import PowerButton from '../subComponent/PowerButton';
import ParticalComponent from '../subComponent/ParticalComponent';
import BigTitle from '../subComponent/BigTitle';

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;

`

const Main = styled.div`

border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index: 3;
line-height: 1.2;
font-family: 'Ubuntu Mono', monospace;
display: flex;
flex-direction: column;
justify-content: space-between;
cursor: pointer;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body}
    }
}
&>*:first-child{
    margin-right: 1rem;
}

`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.4rem 0;

${Main}:hover &{
    
        color:${props => props.theme.body}
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;

}
p{
    margin-left: 2rem;
}
`




function MySkillPage(props) {
    return (

        <ThemeProvider theme={LightTheme}>
        <Box>
        <LogoComponent theme='light' />
        <SocialIcons theme='light' />
        <PowerButton />
        <ParticalComponent theme='light'/>
            
                    <Main>
                        <Title>
                            <Design width={40} height={40} /> Designer
                        </Title>
                        <Description>
                        I love to create design which speaks, Keep it clean, minimal and simple.
                        </Description>

                        <Description>
                        <strong>I LIKE TO DESIGN</strong>
                        
                        <p>Web Design</p>
                        
                   </Description>
                   <Description>
                   <strong>Tools</strong>
                   <p>Figma</p>
                   
              </Description>

                    
                    </Main>
                    
                    <Main>
                        <Title>
                            <Develope width={40} height={40} /> Frontend Developer
                        </Title>
                        <Description>
                            I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
                        </Description>

                        <Description>
                        <strong>Skills</strong>
                        <p>HTML, CSS, JS, React, Redux, Sass, Bootstrap, Tailwind, WebFlow, Firebase, PHP, Laravel, Wordpress etc.</p>
                        
                   </Description>
                   <Description>
                   <strong>Tools</strong>
                   <p>VScode, Github, Codepen etc.</p>
                   
              </Description>
                    
                    </Main>

                    <BigTitle text="SKILLS" top="80%" left="30%" />
            </Box>
        </ThemeProvider>
        
    );
}

export default MySkillPage;