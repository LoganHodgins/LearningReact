const Button = props => {

  const buttonHandler = () => {
    props.onChange(props.amount);
  };

  return <button onClick={buttonHandler}>{props.children}</button>
};

export default Button;