import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHollowHeart } from "@fortawesome/free-regular-svg-icons";
import { MovieItem } from "../../redux/modules/search/search";
import { POSTER_ROOT_PATH } from "../../data/movieDbValues";
import * as userActions from "../../redux/modules/user/actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import SocialLink from "../Social/SocialLink";

const CardContainer = styled.div`
  position: relative;
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

const SocialContainer = styled.div``;

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

interface MovieCardProps {
  movie: MovieItem;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
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
        <SocialContainer>
          {isFavourite ? (
            <SocialLink
              icon={faSolidHeart}
              onClick={() => onClickRemoveFav(movie.id)}
            />
          ) : (
            <SocialLink
              icon={faHollowHeart}
              onClick={() => onClickAddFav(movie)}
            />
          )}
        </SocialContainer>
      </CardTitleContainer>
    </CardContainer>
  );
};

export default MovieCard;
