import MovieEntry from "./MovieEntry";

const MoviesList = props => {
  if (props.items.length === 0) {
    return <h2>No Movies Found!</h2>
  }

  return (
    <ul>
      {props.items.map((item) => (
          <MovieEntry key={item.id} name={item.name} date={item.date} />
      ))}
    </ul>
  );
};

export default MoviesList;