import React from "react";
import PageLayout from "../_layout/PageLayout";
import { MovieItem } from "../../redux/modules/search/search";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { ResultsContainer } from "../../components/Containers/Results";
import MovieCard from "../../components/Cards/MovieCard";

const HEADER = "Favourites";

const FavouritesPage = () => {
  const favouriteList: MovieItem[] = useSelector(
    (state: RootState) => state.user.favourites
  );

  return (
    <PageLayout header={HEADER}>
      <ResultsContainer>
        {favouriteList.map((movie: MovieItem) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </ResultsContainer>
    </PageLayout>
  );
};

export default FavouritesPage;
