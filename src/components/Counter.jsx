

export const Counter = () => {
  return (
    <div className="bg-slate-500 p-3 w-96 mx-auto text-center rounded-md">
      <p className="text-3xl text-white">0</p>
      <div className="flex items-center gap-4 justify-center mt-4">
        <button
          
          className="bg-green-600 px-3 py-1 rounded-md text-white"
        >
          Increments
        </button>
        <button
         
          className="bg-red-600 px-3 py-1 rounded-md text-white"
        >
          Decrements
        </button>
      </div>
    </div>
  );
}