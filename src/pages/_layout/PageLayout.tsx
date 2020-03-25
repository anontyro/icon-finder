import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PageHeader = styled.h1`
  width: 100%;
  text-align: center;
  margin: 20px 0;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: auto;
  height: 100%;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 10px;
`;

interface NavLinkProps {
  isActive?: boolean;
}

const NavLink = styled(({ isActive, ...rest }) => <Link {...rest} />)<
  NavLinkProps
>`
  padding: 0 10px;
  cursor: ${(props: NavLinkProps) => (props.isActive ? "unset" : "pointer")};
  ${(props: NavLinkProps) => (props.isActive ? `color: blue` : "")};
  :hover {
    color: blue;
  }
`;

interface Props {
  header?: string;
  children: React.ReactNode;
}

const PageLayout: React.FC<Props> = ({ header, children }) => {
  return (
    <React.Fragment>
      <NavBar>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/favourites"}>Favourites</NavLink>
      </NavBar>
      {header && <PageHeader>{header}</PageHeader>}
      <PageContainer>{children}</PageContainer>
    </React.Fragment>
  );
};

export default PageLayout;
