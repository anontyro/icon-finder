import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchBox from "../../components/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/index";
import { MovieItem } from "../../redux/modules/search/search";
import { POSTER_ROOT_PATH } from "../../data/movieDbValues";
import * as userActions from "../../redux/modules/user/actions";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: auto;
  height: 100%;
`;

const PageHeader = styled.h1`
  width: 100%;
  text-align: center;
  margin: 20px 0;
`;

// Search results

const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardContainer = styled.div`
  margin: 10px;
  width: 200px;
  height: 300px;
  overflow: hidden;
`;

const CardImage = styled.img`
  height: 260px;
  width: 100%;
  margin: auto;
  display: flex;
`;

const CardTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardHeader = styled.h3`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

interface SearchCardProps {
  movie: MovieItem;
}

const SearchCard: React.FC<SearchCardProps> = ({ movie }) => {
  const dispatch = useDispatch();
  const favouriteList: MovieItem[] = useSelector(
    (state: RootState) => state.user.favourites
  );
  const [isFavourite, setIsFavourite] = useState(false);

  const onClickAddFav = (movie: MovieItem) => {
    dispatch(userActions.addToFavourites(movie));
  };

  const onClickRemoveFav = (id: number) => {
    dispatch(userActions.removeFromFavourites(id));
  };

  useEffect(() => {
    const onList = favouriteList.filter(item => item.id === movie.id);
    if (onList.length > 0) {
      setIsFavourite(true);
    }
  }, [favouriteList, movie.id]);

  return (
    <CardContainer>
      <CardImage src={`${POSTER_ROOT_PATH}${movie.poster_path}`} />
      <CardTitleContainer>
        <CardHeader>{movie.title}</CardHeader>
        {isFavourite ? (
          <button onClick={() => onClickRemoveFav(movie.id)}>-Fav</button>
        ) : (
          <button onClick={() => onClickAddFav(movie)}>Fav</button>
        )}
      </CardTitleContainer>
    </CardContainer>
  );
};

interface SearchResultProps {}

const SearchResults: React.FC<SearchResultProps> = () => {
  const searchResults: MovieItem[] = useSelector(
    (state: RootState) => state.searchMovie.results
  );

  return (
    <ResultsContainer>
      {searchResults.map(movie => (
        <SearchCard movie={movie} key={movie.id} />
      ))}
    </ResultsContainer>
  );
};

interface Props {}

const HomePage: React.FC<Props> = ({}) => {
  return (
    <PageContainer>
      <PageHeader>Movie Search</PageHeader>
      <SearchBox />
      <SearchResults />
    </PageContainer>
  );
};

export default HomePage;
