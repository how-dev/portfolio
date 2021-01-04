import React from 'react';
import './App.css';

import { Title } from "./components/title";
import { Datas } from "./components/datas";
import { Footer } from "./components/footer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Title/>
      <Datas />
      <Footer />
    </div>
  );
}

export default App;
