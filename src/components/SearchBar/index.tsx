import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import * as searchActions from "../../redux/modules/search/actions";
import debounce from "lodash.debounce";
import { RootState } from "../../redux";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px;
  width: 100%;
`;

const SearchBox = styled.input`
  padding: 10px;
  width: 120px;
  border-radius: 20px;
  box-shadow: 3px 3px 0px 5px black;
  transition: all 0.5s;
  :focus {
    width: 100%;
  }
`;

interface SearchProps {}

const Search: React.FC<SearchProps> = ({}) => {
  const dispatch = useDispatch();
  const isBusy = useSelector((state: RootState) => state.searchMovie.isBusy);
  const [query, setQuery] = useState("");

  const debounceSearch = useCallback(
    debounce((val: string) => dispatch(searchActions.searchMovie(val)), 800),
    []
  );

  return (
    <SearchContainer>
      <SearchBox
        disabled={isBusy}
        value={query}
        onChange={e => {
          e.persist();
          setQuery(e.currentTarget.value);
          debounceSearch(e.currentTarget.value);
        }}
      />
    </SearchContainer>
  );
};

export default Search;
