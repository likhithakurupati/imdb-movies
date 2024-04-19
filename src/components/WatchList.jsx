import { useEffect, useState, useContext } from "react";
import genreids from "../utilities/genre";
import { WatchListContext } from "./WatchListContext";

/* eslint-disable react/jsx-key */
export default function WatchList() {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  const watchListData = useContext(WatchListContext);

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  let sortIncreasingRatings = () => {
    let sortedIncreasing = watchListData.watchList.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    watchListData.setWatchList([...sortedIncreasing]);
  };
  let sortDecreasingRatings = () => {
    let sortedDecreasing = watchListData.watchList.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    watchListData.setWatchList([...sortedDecreasing]);
  };

  let sortIncreasingPopularity = () => {
    let sortedIncreasing = watchListData.watchList.sort((movieA, movieB) => {
      return movieA.popularity - movieB.popularity;
    });
    watchListData.setWatchList([...sortedIncreasing]);
  };
  let sortDecreasingPopularity = () => {
    let sortedDecreasing = watchListData.watchList.sort((movieA, movieB) => {
      return movieB.popularity - movieA.popularity;
    });
    watchListData.setWatchList([...sortedDecreasing]);
  };

  useEffect(() => {
    let updatedGenreList = watchListData.watchList.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    updatedGenreList = new Set(updatedGenreList);
    setGenreList(["All Genres", ...updatedGenreList]);
  }, [watchListData.watchList]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currGenre == genre
                  ? "flex justify-center items-center h-[3rem] w-[9rem] bg-[#ab9257] rounded-xl text-white font-bold mx-4 my-2"
                  : "flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-bold mx-4 my-2"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search for Movies"
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4"
        />
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th>
                <div className="flex justify-center items-center">
                  <div onClick={sortIncreasingRatings} className="p-2">
                    <i className="fa-solid fa-circle-arrow-up"></i>
                  </div>
                  <div className="p-2">Ratings</div>
                  <div onClick={sortDecreasingRatings} className="p-2">
                    <i className="fa-solid fa-circle-arrow-down"></i>
                  </div>
                </div>
              </th>
              <th>
                <div className="flex justify-center items-center">
                  <div onClick={sortIncreasingPopularity} className="p-2">
                    <i className="fa-solid fa-circle-arrow-up"></i>
                  </div>
                  <div className="p-2">Popularity</div>
                  <div onClick={sortDecreasingPopularity} className="p-2">
                    <i className="fa-solid fa-circle-arrow-down"></i>
                  </div>
                </div>
              </th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchListData.watchList
              .filter((movieObj) => {
                if (currGenre == "All Genres") {
                  return true;
                } else {
                  return genreids[movieObj.genre_ids[0]] == currGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr key={movieObj.id} className="border-b-2">
                    <td className="flex items-center py-4 px-6">
                      <img
                        className="w-[10rem] h-[6rem]"
                        src={`https://tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                      />
                      <div className="mx-10">{movieObj.title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>
                    <td
                      onClick={() =>
                        watchListData.handleRemoveFromWatchList(movieObj)
                      }
                      className="text-red-800"
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
