import React from "react";

import Board from "./components/Board";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./components/Info";
import Languages from "./components/Languages";
import PotatoGram from "./components/PotatoGram";
import Testfile from "./components/Testfile";


function App() {
  const scrolling = () => {
    console.log(window.scrollY);
  }
  window.addEventListener('scroll', scrolling);
  return (
    <div>
      {/* <div className='snap-y snap-mandatory h-screen w-screen overflow-visible overflow-x-hidden'> */}
      <BrowserRouter basename="/ranishkunwar">
        <Routes>
          <Route path="/" element={<>
            <div className='snap-y snap-mandatory h-screen w-screen overflow-visible overflow-x-hidden'>
              <Nav />
              <Board />
              <Info />
              <Languages />
              <PotatoGram />
              <div className="mt-0">
                <Languages />
              </div>

            </div>

          </>} />
          <Route path="/path" element={<>
            <Board />
          </>} />
          <Route path="/test" element={<>
            <Testfile />
          </>} />

        </Routes>
        {/* <Nav /> */}
      </BrowserRouter>
    </div>

    // </div >
  );
}

export default App;
