import Header from "./components/Header/Header";
import LandPage from "./views/LandPage"

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('dark');

  const turnLight = (theme) => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <main className="App">
      <Header theme={theme} setTheme={setTheme} turnLight={turnLight}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandPage theme={theme} />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
