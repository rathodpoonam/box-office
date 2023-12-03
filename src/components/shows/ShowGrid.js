import React from 'react';
import ShowCard from './ShowCard';

const ShowGrid = ({ shows }) => {
  return (
    <div>
      {shows.map(data => {
        return (
          <ShowCard
            key={data.show.id}
            name={data.show.name}
            image={
              data.show.image ? data.show.image.medium : '/imageNotFound.png'
            }
            id={data.show.id}
            summary={data.show.summary}
          />
        );
      })}
    </div>
  );
};

export default ShowGrid;
