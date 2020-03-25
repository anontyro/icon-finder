import React from "react";
import styled from "styled-components";
import {
  faGithubSquare,
  faLinkedin,
  faFacebookSquare
} from "@fortawesome/free-brands-svg-icons";
import SocialLink, {
  SocialIconDefault
} from "../../../components/Social/SocialLink";
import COLORS from "../../../data/colors";

const externalLink = (url: string) => {
  window.open(url, "_blank");
};

const ExternalLink = styled.div`
  cursor: pointer;
  :hover {
    color: ${COLORS.DEFAULT_HOVER};
    font-weight: 800;
  }
`;

const MainFooter = styled.div`
  background-color: none;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
`;
const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SocialIcon = styled(SocialIconDefault)`
  font-size: 42px;
  width: 36px;
  margin: 0 5px;
  :hover {
    color: ${COLORS.DEFAULT_HOVER};
  }
`;

const Footer = () => (
  <MainFooter className="footer">
    <FooterContainer>
      <SocialContainer>
        <SocialLink
          as={SocialIcon}
          icon={faGithubSquare}
          onClick={() => externalLink("https://github.com/anontyro/star-wars")}
        />
        <SocialLink
          as={SocialIcon}
          icon={faLinkedin}
          onClick={() =>
            externalLink("https://www.linkedin.com/in/wilkinsonalexander/")
          }
        />
        <SocialLink
          as={SocialIcon}
          icon={faFacebookSquare}
          onClick={() => externalLink("https://www.facebook.com/AWILKINSON.SG")}
        />
      </SocialContainer>
      <ExternalLink onClick={() => externalLink("https://alexwilkinson.co")}>
        Alexander Wilkinson
      </ExternalLink>
    </FooterContainer>
  </MainFooter>
);

export default Footer;
