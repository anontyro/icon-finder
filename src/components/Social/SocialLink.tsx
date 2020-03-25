import React from "react";
import styled from "styled-components";
import {
  FontAwesomeIconProps,
  FontAwesomeIcon
} from "@fortawesome/react-fontawesome";

export const SocialIconDefault = styled.div`
  cursor: pointer;
  font-size: 20px;
  width: 36px;
  margin: 0;
  :hover {
    color: red;
  }
`;

interface SocialProps {
  as?: any;
  icon: FontAwesomeIconProps["icon"];
  onClick: () => void;
}

const SocialLink: React.FC<SocialProps> = ({
  as: Element = SocialIconDefault,
  icon,
  onClick = () => {}
}) => (
  <Element onClick={onClick}>
    <FontAwesomeIcon icon={icon} />
  </Element>
);

export default SocialLink;
