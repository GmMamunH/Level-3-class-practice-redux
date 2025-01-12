import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrement, increment } from "../redux/staticCounter/action";

export const Counter = () => {
  const { value } = useSelector((state) => state);
  console.log(value);

  const dispatch = useDispatch();
  const Increment = () => dispatch(increment());
  const Decrement = () => dispatch(decrement());
  return (
    <div className="bg-slate-500 p-3 w-96 mx-auto text-center rounded-md">
      <p className="text-3xl text-white">{value}</p>
      <div className="flex items-center gap-4 justify-center mt-4">
        <button
          onClick={Increment}
          className="bg-green-600 px-3 py-1 rounded-md text-white"
        >
          Increments
        </button>
        <button
          onClick={Decrement}
          className="bg-red-600 px-3 py-1 rounded-md text-white"
        >
          Decrements
        </button>
      </div>
    </div>
  );
};
