import React from "react";
import styled from "styled-components";
import SearchBox from "../../components/SearchBar";
import SearchResults from "../../components/SearchResults";
import PageLayout from "../_layout/PageLayout";

const HEADER = "Movie Search";

interface Props {}

const HomePage: React.FC<Props> = ({}) => {
  return (
    <PageLayout header={HEADER}>
      <SearchBox />
      <SearchResults />
    </PageLayout>
  );
};

export default HomePage;
