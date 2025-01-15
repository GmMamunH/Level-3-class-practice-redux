import { Provider } from "react-redux";
import { Counter } from "./components/Counter";
import { store } from "./redux/store";
import { DynamicCounter } from "./components/DynamicCounter";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl text-teal-800 text-center py-3">
            Simple Counter Application using Redux
          </h1>
          <Counter />
          <DynamicCounter />
        </div>
      </Provider>
    </>
  );
}

export default App;
