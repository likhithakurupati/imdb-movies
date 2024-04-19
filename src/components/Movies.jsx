import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

export default function Movies({
  handleAddToWatchList,
  handleRemoveFromWatchList,
  watchList,
}) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo == 1) setPageNo(pageNo);
    else setPageNo(pageNo - 1);
  };
  const handleNext = () => {
    setPageNo(pageNo + 1);
  };
  const moviesApiKey = import.meta.env.VITE_APP_MOVIES_API_KEY;
  const moviesApiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${moviesApiKey}&language=en-US&page=${pageNo}`;
  useEffect(() => {
    axios.get(moviesApiUrl).then(function (res) {
      setMovies(res.data.results);
    });
  }, [pageNo]);

  return (
    <div className="p-5">
      <div className="text-3xl m-5 font-bold text-center">Trending Movies</div>

      <div className="flex flex-row flex-wrap justify-around gap-8">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              key={movieObj.original_title}
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
              movieObj={movieObj}
              handleAddToWatchList={handleAddToWatchList}
              handleRemoveFromWatchList={handleRemoveFromWatchList}
              watchList={watchList}
            />
          );
        })}
      </div>

      <Pagination
        page={pageNo}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </div>
  );
}
