import { useState } from 'react';
import Display from './components/Display';
import Button from './components/Button';
import './App.css';

const App = () => {

  const [value, setValue] = useState(0);

  const changeValue = amount => {
    setValue(value + amount);
  };

  return (
    <div>
      <Display>{value}</Display>
      <div>
        <Button amount={1} onChange={changeValue}>Increase</Button>
        <Button amount={-1} onChange={changeValue}>Decrease</Button>
      </div>
    </div>
  );
};

export default App;
