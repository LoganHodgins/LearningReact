const MovieEntry = props => {
  return (
    <li>
      <p>{props.name}</p>
      <p>{props.date}</p>
    </li>
  );
};

export default MovieEntry;