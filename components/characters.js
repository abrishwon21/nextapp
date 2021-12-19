import React from "react";
import Image from "next/image";
import { 
CardRow, 
CardColumn, 
CardBody,
LikeDislike,
SeeEpisode
} from './Styles/Character.styled'
const Character = ({ characters }) => {
  return (
    <CardRow>
      {characters.map((character) => {
        return (
          <CardColumn key={character.id}>

            <img src={character.image} width={180} height={180} />
            <CardBody>
            <h1 >
              {character.name}
            </h1>
            <p >Origin: {character.origin.name}</p>
            <p >Location: {character.location.name}</p>
            <SeeEpisode><strong>See Episode</strong></SeeEpisode>
            </CardBody>
            <LikeDislike >
               💛
            </LikeDislike>
          </CardColumn>
        );
      })}
    </CardRow>
  );
};

export default Character;


