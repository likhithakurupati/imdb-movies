export default function WatchList() {
  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-[#ab9257] rounded-xl text-white font-bold mx-4">
          Action
        </div>
        <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-bold mx-4">
          Action
        </div>
      </div>

      <div className="flex justify-center my-4">
        <input
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
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2">
              <td className="flex items-center py-4 px-6">
                <img
                  className="w-[10rem] h-[6rem]"
                  src={`https://www.pixel4k.com/wp-content/uploads/2019/06/aladdin-movie-poster-4k_1560535101.jpg.webp`}
                />
                <div className="mx-10">Aladdin</div>
              </td>
              <td>7.5</td>
              <td>7</td>
              <td>Anime</td>
              <td className="text-red-800">Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
