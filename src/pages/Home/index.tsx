import React, { useState, useEffect, useCallback } from "react";
import debounce from "lodash.debounce";
import styled from "styled-components";
import * as searchActions from "../../redux/modules/search/actions";
import { useDispatch } from "react-redux";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const PageHeader = styled.h1`
  width: 100%;
  text-align: center;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

interface SearchProps {}

const Search: React.FC<SearchProps> = ({}) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const debounceSearch = useCallback(
    debounce((val: string) => dispatch(searchActions.searchMovie(val)), 800),
    []
  );

  return (
    <SearchContainer>
      <input
        value={query}
        onChange={e => {
          e.persist();
          setQuery(e.currentTarget.value);
          debounceSearch(e.currentTarget.value);
          console.log(query);
        }}
      />
    </SearchContainer>
  );
};

interface Props {}

const HomePage: React.FC<Props> = ({}) => {
  return (
    <PageContainer>
      <PageHeader>Movie Search</PageHeader>
      <Search />
    </PageContainer>
  );
};

export default HomePage;
