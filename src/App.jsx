import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* prob need to set the wole container for regulating two big collumns then the riht card will have a bunch of rows. */}
      <div className="mx-auto columns-2	gap-3">
        {/* big container */}
        <div className="leftcard">
          <h2>your result</h2>

          <div className="score">
            <h1 className="rounded-full bg-zinc-600 w-64 h-64 flex justify-center items-center">
              76
            </h1>
            <p>out of 100</p>

            <h2> Great</h2>
            <p>
              {" "}
              You score d higher than 65% of the poeple who have taken these
              test.
            </p>
          </div>
        </div>
        {/* this is the seperation between left card and right card. */}

        <div className="right card ">
          <h2>Sumary</h2>
          <div className=" h-14 w-96 bg-red-500 rounded-lg">
            <h3>reaction</h3>
          </div>
          <div className=" h-14 w-96 bg-yellow-500 rounded-lg">
            {/* icon goes here */} <h3>memory</h3>
          </div>
          <div className=" h-14 w-96 bg-green-500 rounded-lg">
            {/* icon goes here */} <h3>verbal</h3>
          </div>
          <div className=" h-14 w-96 bg-purple-500 rounded-lg">
            {/* icon goes here */} <h3>visual</h3>
          </div>
        </div>

        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="submit"
        >
          {" "}
          Continue
        </button>
      </div>
    </div>
  );
}

export default App;
