import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Movies from "./components/Movies";
import { Navbar } from "./components/Navbar";
import WatchList from "./components/WatchList";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Movies />
                <Banner />
              </>
            }
          />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
