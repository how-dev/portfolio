import React from 'react';
import './App.css';

import { Title } from "./components/title";
import { Datas } from "./components/datas";

const App: React.FC = () => {
  return (
    <div className="App">
      <Title/>
      <Datas />
    </div>
  );
}

export default App;
