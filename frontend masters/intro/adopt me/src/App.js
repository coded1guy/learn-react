import { render } from "react-dom";
import { StrictMode } from "react/cjs/react.production.min";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchParams from "./components/SearchParams";
import Details from "./pages/Details";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        ;
        <Routes>
          <Route path="/" element={<SearchParams />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};
render(<App />, document.getElementById("root"));
