import { Provider } from "react-redux";
import { Counter } from "./components/Counter";
import { store } from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <div>
          <h1 className="text-3xl text-teal-800 text-center py-3">
            Simple Counter Application using Redux
          </h1>
          <Counter />
        </div>
      </Provider>
    </>
  );
}

export default App;
