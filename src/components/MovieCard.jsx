export default function MovieCard({ poster_path, name }) {
  return (
    <div
      className="h-[40vh] w-[200px] bg-cover bg-center rounded-xl hover:scale-110 duration-300 cursor-pointer flex flex-row justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      <div className="text-white text-xl w-full p-2 text-center bg-gray-900/60">
        {name}
      </div>
    </div>
  );
}
