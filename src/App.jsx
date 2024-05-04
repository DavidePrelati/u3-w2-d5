import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MySearchbar from "./components.jsx/MySearchbar";
import MyMeteo from "./components.jsx/MyMeteo";

function App() {
  const [city, setCity] = useState("");

  return (
    <div className="App">
      <MyMeteo city={city} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<MySearchbar city={city} setCity={setCity} />}
          />
          <Route
            path="/MyMeteo/:city"
            element={<MyMeteo city={city} setCity={setCity} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;