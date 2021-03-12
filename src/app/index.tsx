import React, { useState, useMemo } from 'react';
import Input from '../components/Input';
import './app.css';

interface Props {}

const func = () => 1 + 1;

const App: React.FC<Props> = () => {
  const [count, setCount] = useState(1);

  const value = useMemo(() => func(), []);

  const plusCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      Hello the world {count}
      <button onClick={plusCount}>click me</button>
      <Input value={value} />
    </div>
  );
}

export default App;
