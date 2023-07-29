import "./App.css";
import React from "react";
import Header from "./components/Header";
import Info from "./components/Info";

function App() {
  return (
    <>
      <Header />
      <Info />
    </>
  );
}

// const Swirly = styled.img`
//   position: absolute;
//   z-index: -1;
// `;
//
// const Title = styled.div`
//   position: relative;
//   color: white;
// `;
//
// const Intro = styled.h3`
//   padding-top: 100px;
// `;

export default App;
