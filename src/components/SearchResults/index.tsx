import React from "react";
import { MovieItem } from "../../redux/modules/search/search";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import MovieCard from "../Cards/MovieCard";
import { ResultsContainer } from "../Containers/Results";
import CardLoader from "../Loaders/CardLoader";

interface SearchResultProps {}

const SearchResults: React.FC<SearchResultProps> = () => {
  const searchResults: MovieItem[] = useSelector(
    (state: RootState) => state.searchMovie.results
  );
  const isBusy: boolean = useSelector(
    (state: RootState) => state.searchMovie.isBusy
  );

  return (
    <ResultsContainer>
      {isBusy ? (
        <CardLoader />
      ) : (
        searchResults.map(movie => <MovieCard movie={movie} key={movie.id} />)
      )}
    </ResultsContainer>
  );
};

export default SearchResults;
