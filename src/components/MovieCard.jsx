export default function MovieCard() {
  return (
    <div
      className="h-[40vh] w-[200px] bg-cover bg-center rounded-xl hover:scale-110 duration-300 cursor-pointer flex flex-col justify-between justify-items-end"
      style={{
        backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6pJJJhfMasMfukl1HnuVuX0Mhgyy5hJ_FqQ&s)`,
      }}
    >
      <div>Card</div>
    </div>
  );
}
