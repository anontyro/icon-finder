import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import COLORS from "../../data/colors";

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
  ${(props: NavLinkProps) =>
    props.isActive ? `color: ${COLORS.DEFAULT_HOVER}` : ""};
  ${(props: NavLinkProps) => (props.isActive ? `font-weight: 800` : "")};

  :hover {
    color: ${COLORS.DEFAULT_HOVER};
  }
`;

interface Props {
  header?: string;
  children: React.ReactNode;
}

const PageLayout: React.FC<Props> = ({ header, children }) => {
  const { pathname } = useLocation();
  return (
    <React.Fragment>
      <NavBar>
        <NavLink isActive={pathname === "/"} to={"/"}>
          Home
        </NavLink>
        <NavLink isActive={pathname === "/favourites"} to={"/favourites"}>
          Favourites
        </NavLink>
      </NavBar>
      {header && <PageHeader>{header}</PageHeader>}
      <PageContainer className="content">{children}</PageContainer>
      <Footer />
    </React.Fragment>
  );
};

export default PageLayout;
