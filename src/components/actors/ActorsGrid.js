import React from 'react';
import ActorsCard from './ActorsCard';

const ActorsGrid = ({ actors }) => {
  return (
    <div>
      <div>
        {actors.map(data => {
          return (
            <ActorsCard
              key={data.person.id}
              name={data.person.name}
              country={data.person.country ? data.person.country.name : null}
              birthday={data.person.birthday}
              deathday={data.person.deathday}
              gender={data.person.gender}
              image={
                data.person.image
                  ? data.person.image.medium
                  : '/imageNotFound.png'
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default ActorsGrid;
