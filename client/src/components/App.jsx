import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

const App = () => {
  return (
    <div className="font-open-sans">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
