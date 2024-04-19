import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Movies from "./components/Movies";
import { Navbar } from "./components/Navbar";
import WatchList from "./components/WatchList";
import Banner from "./components/Banner";
import { useState, useEffect } from "react";

function App() {
  let [watchList, setWatchList] = useState([]);

  let handleAddToWatchList = (movieObj) => {
    let newWatchList = [...watchList, movieObj];
    localStorage.setItem("movieApp", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
    console.log(newWatchList);
  };

  let handleRemoveFromWatchList = (movieObj) => {
    let filteredWatchList = watchList.filter((movie) => {
      return movie.id != movieObj.id;
    });
    localStorage.setItem("movieApp", JSON.stringify(filteredWatchList));
    setWatchList(filteredWatchList);
    console.log(filteredWatchList);
  };

  useEffect(() => {
    let movieFromLocalStorage = localStorage.getItem("movieApp");
    if (!movieFromLocalStorage) {
      return;
    }
    setWatchList(JSON.parse(movieFromLocalStorage));
  }, []);

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
                <Movies
                  handleAddToWatchList={handleAddToWatchList}
                  handleRemoveFromWatchList={handleRemoveFromWatchList}
                  watchList={watchList}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <WatchList
                watchList={watchList}
                setWatchList={setWatchList}
                handleRemoveFromWatchList={handleRemoveFromWatchList}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
