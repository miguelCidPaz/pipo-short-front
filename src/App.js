import Header from "./components/Header/Header";
import LandPage from "./views/LandPage"

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState(true);


  return (
    <main className="App">
      <Header theme={theme} setTheme={setTheme} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandPage theme={theme} />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
