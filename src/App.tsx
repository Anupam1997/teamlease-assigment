import React from "react";
import "./App.css";
import "bootstrap/scss/bootstrap.scss";
import Header from "./Components/Header/Header";
import Copy from "./Components/Copy/Copy";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <>
      <Header />
      <main>
        <Copy />
        <Projects />
      </main>
    </>
  );
}

export default App;
