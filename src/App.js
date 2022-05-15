import Header from "./components/Header/Header";
import LandPage from './components/LandPage/LandPage'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserPanel from "./components/UserPanel/UserPanel";
import RedirectPage from "./components/RedirectPage/RedirectPage";
import PrincipalForm from "./components/Forms/PrincipalForm";
import { ProviderLogin } from "./components/ProviderLogin/ProviderLogin";

function App() {

  return (
    <main className="App">
      <BrowserRouter>
        <ProviderLogin>
          <Header />
          <Routes>
            <Route path="/" element={<LandPage />} />
            <Route path="/user-panel" element={<UserPanel />} />
            <Route path="/forms/:type" element={<PrincipalForm />} />
            <Route path='/:code' element={<RedirectPage />} />
          </Routes>
        </ProviderLogin>
      </BrowserRouter>
    </main>
  );
}

export default App;
