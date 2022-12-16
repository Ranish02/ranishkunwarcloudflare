import React from "react";

import Board from "./Board";
import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./Info";
import Languages from "./Languages";


function App() {
  return (
    <div>
      <div className='snap-y snap-mandatory h-screen w-screen overflow-visible overflow-x-hidden'>
        <Info />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<>
              <div className=''>
                <Nav />
                <Board />
                <Info />
                <Languages />
              </div>

            </>} />
            <Route path="/path" element={<>
              <Board />
            </>} />

          </Routes>
          {/* <Nav /> */}
        </BrowserRouter>
      </div>

    </div>
  );
}

export default App;
