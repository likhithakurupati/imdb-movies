export default function Pagination({ handlePrev, handleNext, page }) {
  return (
    <div className="bg-gray-400 p-4 mt-8 flex justify-center">
      <div className="px-8 hover:cursor-pointer">
        <i onClick={handlePrev} className="fa-solid fa-circle-arrow-left"></i>
      </div>
      <div className="font-bold">{page}</div>
      <div className="px-8 hover:cursor-pointer">
        <i onClick={handleNext} className="fa-solid fa-circle-arrow-right"></i>
      </div>
    </div>
  );
}
