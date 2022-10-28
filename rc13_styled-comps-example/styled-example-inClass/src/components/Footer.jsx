import React from "react";
import Icons from "./Icons";
import Flex from "./styles/Flex.styled";
import StyledFooter from "./styles/Footer.styled";
import { Logo } from "./styles/Header.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <Flex>
        <Logo src="./images/logo_white.png" alt="" />

        <ul>
          <li>1775 Tysons Blvd. 5th Floor. Tysons, VA 22102</li>
          <li> +1 (571) 360 66 77</li>
          <li>contact@clarusway.com</li>
        </ul>
        <ul className="links">
          <li>About Us</li>
          <li>What We Do</li>
          <li>FAQ</li>
        </ul>

        <ul className="links">
          <li>Career</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>

        <Icons />
      </Flex>
    </StyledFooter>
  );
};

export default Footer;
