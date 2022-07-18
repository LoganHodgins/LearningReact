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

    const movie = {
      name: enteredName.current.value,
      date: enteredDate.current.value,
      id: Math.random().toString(),
    };

    props.onAddMovie(movie);

    enteredName.current.value = '';
    enteredDate.current.value = '';
  };

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
          <button type='button'>Cancel</button>
        </div>
      </div>
    </form>);
};

export default UserForm;