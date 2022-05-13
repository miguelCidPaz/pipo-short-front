import Header from "./components/Header/Header";
import LandPage from './components/LandPage/LandPage'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserPanel from "./components/UserPanel/UserPanel";
import RedirectPage from "./components/RedirectPage/RedirectPage";

function App() {

  return (
    <main className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandPage/>} />
          <Route path="/user-panel" element={<UserPanel />} />
          <Route path='/:code' element={<RedirectPage/>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
