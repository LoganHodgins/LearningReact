// Work Around to avoid div-soup, essentially the same as React.Fragments
const Wrapper = props => {
  return props.children;
};

export default Wrapper;