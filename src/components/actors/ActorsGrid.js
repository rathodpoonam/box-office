import React from "react";
import ActorsCard from "./ActorsCard";
import { FlexGrid } from "../common/FlexGrid";
import notFoundImage from "../../lib/imageNotFound.png";

const ActorsGrid = ({ actors }) => {
  return (
    <FlexGrid>
      {actors.map((data) => {
        return (
          <ActorsCard
            key={data.person.id}
            name={data.person.name}
            country={data.person.country ? data.person.country.name : null}
            birthday={data.person.birthday}
            deathday={data.person.deathday}
            gender={data.person.gender}
            image={data.person.image ? data.person.image.medium : notFoundImage}
          />
        );
      })}
    </FlexGrid>
  );
};

export default ActorsGrid;
