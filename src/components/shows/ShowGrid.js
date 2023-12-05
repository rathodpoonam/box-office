import { useStarredShows } from "../../lib/useStarredShows";
import ShowCard from "./ShowCard";
import { FlexGrid } from "../common/FlexGrid";
import notFoundImage from "../../lib/imageNotFound.png";

const ShowGrid = ({ shows }) => {
  const [starredShows, dispatchStarred] = useStarredShows();

  const onStarMeClick = (showId) => {
    const isStarred = starredShows.includes(showId);

    if (isStarred) {
      dispatchStarred({ type: "UNSTAR", showId });
    } else {
      dispatchStarred({ type: "STAR", showId });
    }
  };

  return (
    <FlexGrid>
      {shows.map((data) => {
        return (
          <ShowCard
            key={data.show.id}
            name={data.show.name}
            image={data.show.image ? data.show.image.medium : notFoundImage}
            id={data.show.id}
            summary={data.show.summary}
            onStarMeClick={onStarMeClick}
            isStarred={starredShows.includes(data.show.id)}
          />
        );
      })}
    </FlexGrid>
  );
};

export default ShowGrid;
