import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Verein } from "./Pages/Verein";
import { Mitmachen } from "./Pages/Mitmachen";
import { Main } from "./Pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
          <Route path="verein" element={<Verein />}></Route>
          <Route path="mitmachen" element={<Mitmachen />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
