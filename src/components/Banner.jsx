export default function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://w0.peakpx.com/wallpaper/482/599/HD-wallpaper-dune-2021-movie.jpg)`,
      }}
    >
      <div className="text-white text-2xl text-center w-full bg-gray-900/60 p-4">
        Dune 2
      </div>
    </div>
  );
}
