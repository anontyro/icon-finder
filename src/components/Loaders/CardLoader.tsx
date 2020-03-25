import React from "react";
import styled from "styled-components";

interface LoadingCardProps {
  delay: number;
}

const LoadingCard = styled.div<LoadingCardProps>`
  width: 200px;
  height: 300px;
  border-radius: 10px;
  margin: 10px;
  content: "";
  background-color: rgba(0, 0, 0);
  animation: flickerAnimation 6s infinite;
  animation-delay: ${(props: LoadingCardProps) => props.delay}s;

  @keyframes flickerAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }
`;

interface LoaderProps {
  cardsTotal?: number;
}

const CardLoader: React.FC<LoaderProps> = ({ cardsTotal = 4 }) => {
  const loadingList = [];
  for (let i = 0; i < cardsTotal; i++) {
    loadingList.push(<LoadingCard delay={i} key={`${Date.now() + i}`} />);
  }
  return <React.Fragment>{loadingList}</React.Fragment>;
};

export default CardLoader;
