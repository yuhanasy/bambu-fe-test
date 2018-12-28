import React from "react";

import { FooterWrapper, FooterContainer, FooterText, Link } from "./styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterText>
          Copyright{" "}
          <Link href="https://github.com/yuhanasy/bambu-fe-test" target=".blank">
            <cite>Yuhanas Yulianto</cite>
          </Link>
          . The API data is from{" "}
          <Link href="https://www.alphavantage.co/" target=".blank">
            www.alphavantage.co
          </Link>
          .
        </FooterText>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
