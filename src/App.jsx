import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Movies from "./components/Movies";
import { Navbar } from "./components/Navbar";
import WatchList from "./components/WatchList";
import Banner from "./components/Banner";
import { useState, useEffect } from "react";
import { WatchListContext } from "./components/WatchListContext";

function App() {
  const [watchList, setWatchList] = useState([]);

  let handleAddToWatchList = (movieObj) => {
    let newWatchList = [...watchList, movieObj];
    localStorage.setItem("movieApp", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  };

  let handleRemoveFromWatchList = (movieObj) => {
    let filteredWatchList = watchList.filter((movie) => {
      return movie.id != movieObj.id;
    });
    localStorage.setItem("movieApp", JSON.stringify(filteredWatchList));
    setWatchList(filteredWatchList);
  };

  useEffect(() => {
    let movieFromLocalStorage = localStorage.getItem("movieApp");
    if (!movieFromLocalStorage) {
      return;
    }
    setWatchList(JSON.parse(movieFromLocalStorage));
  }, []);

  const watchListContext = {
    watchList,
    setWatchList,
    handleAddToWatchList,
    handleRemoveFromWatchList,
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <WatchListContext.Provider value={watchListContext}>
                  <Movies />
                </WatchListContext.Provider>
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <WatchListContext.Provider value={watchListContext}>
                <WatchList />
              </WatchListContext.Provider>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
