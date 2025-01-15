import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/dynamicCounter/action";

export const DynamicCounter = () => {
  const { value } = useSelector((state) => state.dynamicCounter);
  console.log(value);

  const dispatch = useDispatch();
  const Increment = () => dispatch(increment());
  const Decrement = () => dispatch(decrement());
  const Reset = () => dispatch(reset());
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
          onClick={Reset}
          className="bg-teal-700 px-3 py-1 rounded-md text-white"
        >
          Reset
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
