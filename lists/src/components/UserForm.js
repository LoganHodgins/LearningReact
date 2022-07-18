import { useRef } from 'react';
import './UserForm.css';
/**
 * Provides an input form for the users to enter a movie and a date
 */
const UserForm = props => {
  const enteredName = useRef();
  const enteredDate = useRef();

  const submitHandler = event => {
    event.preventDefault();
    const movieName = enteredName.current.value;
    const movieDate = enteredDate.current.value;

    if (movieName.trim().length === 0 || movieDate.length === 0) {
      return;
    }

    const movie = {
      name: movieName,
      date: movieDate,
      id: Math.random().toString(),
    };

    props.onAddMovie(movie);

    enteredName.current.value = '';
    enteredDate.current.value = '';
  };

  const cancelHandler = () => {
    enteredName.current.value = '';
    enteredDate.current.value = '';
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='user-form__control'>
        <div>
          <label>Movie Name</label>
          <input type='text' ref={enteredName} />
        </div>
        <div>
          <label>Release Date</label>
          <input type='date' ref={enteredDate} />
        </div>
        <div className='user-control__buttons'>
          <button type='submit'>Submit</button>
          <button type='button' onClick={cancelHandler}>Cancel</button>
        </div>
      </div>
    </form>);
};

export default UserForm;