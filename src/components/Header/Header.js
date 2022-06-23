import React from 'react';
import Link from 'next/link';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

import { myData } from '../../data/info';
import { useEffect } from 'react';

const Header = () => {
  let [{ linkedIn, github, instagram }] = React.useState(myData[0])
  // CHANGE DOCUMENT TITLE
  React.useEffect(() => {
    document.title = "Saladins Work Portfolio"
  }, [])
  return (
    <Container>
      <Div1>
        <Link href="/">
          <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
            <DiCssdeck size="3rem" /> <span>Portfolio</span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href={`https://${github}`} target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href={`https://${linkedIn}`} target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href={`https://${instagram}`} target="_blank">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  )
}


export default Header;