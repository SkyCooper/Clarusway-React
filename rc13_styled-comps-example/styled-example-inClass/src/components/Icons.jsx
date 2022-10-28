import React from 'react'
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { StyledIcons } from './styles/Footer.styled';

const Icons = () => {
  return (
    <StyledIcons>
      <li>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com">
          <FaLinkedin />
        </a>
      </li>
    </StyledIcons>
  );
}

export default Icons