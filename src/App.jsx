import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Summary from './components/summary';
import data from "./data.json";
import "./App.css";

function App() {


  return (
    <div className="App">
      {/* prob need to set the wole container for regulating two big collumns then the riht card will have a bunch of rows. */}
      <div className="mx-auto columns-2	gap-3">
        {/* big container */}
        <div className="bg-gray-400 rounded-lg overflow-hidden shadow-md h-96">
          <h2>your result</h2>

          <div className="right card">
            <div className="flex justify-center items-center">
              <h1 className="rounded-full bg-zinc-600 w-64 h-64 flex justify-center items-center">
                76
              </h1>
            </div>

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

        <div className="bg-gray-400 rounded-lg overflow-hidden shadow-md h-96">
          <h2>Sumary</h2>
          <div className="summary-list">
            {data.map((data) => (
              <Summary
                key={data.category}
                category={data.category}
                score={data.score}
                icon={data.icon}
                style={data.style}
              />
            ))}

            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="submit"
            >
              {" "}
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
