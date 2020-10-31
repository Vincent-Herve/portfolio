import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

const GithubIcon = () => (
    <AiOutlineGithub color="white" size="2rem"/>
);

const TwitterIcon = () => (
    <AiOutlineTwitter color="white" size="2rem"/>
);

const LinkedInIcon = () => (
    <AiFillLinkedin color="white" size="2rem"/>
);

const Footer = () => (
    <footer className="footer">
        <div>
            <a className="link-sn" href="https://github.com/Vincent-Herve"><GithubIcon /></a>
            <a className="link-sn" href="https://twitter.com/V1NC3_K"><TwitterIcon /></a>
            <a className="link-sn" href="https://www.linkedin.com/in/vincentherve/"><LinkedInIcon /></a>
        </div>
        <div>Vincent HERVE - 2020 ©</div>
    </footer>
);

export default Footer;