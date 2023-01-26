import { BrowserRouter, Routes, Route } from "react-router-dom";

import B1toB0Page from "./pages/B1toB0";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<B1toB0Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
