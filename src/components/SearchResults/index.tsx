import React from "react";
import { MovieItem } from "../../redux/modules/search/search";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import MovieCard from "../Cards/MovieCard";
import { ResultsContainer } from "../Containers/Results";

interface SearchResultProps {}

const SearchResults: React.FC<SearchResultProps> = () => {
  const searchResults: MovieItem[] = useSelector(
    (state: RootState) => state.searchMovie.results
  );

  return (
    <ResultsContainer>
      {searchResults.map(movie => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </ResultsContainer>
  );
};

export default SearchResults;
