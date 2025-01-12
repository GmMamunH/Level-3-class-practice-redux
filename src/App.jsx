import { Counter } from "./components/Counter";

function App() {
  return (
    <>
      <div>
        <h1 className="text-3xl text-teal-800 text-center py-3">
          Simple Counter Application using Redux
        </h1>
        <Counter />
      </div>
    </>
  );
}

export default App;
