
import React from "react";
import { Fragment } from 'react';
import "./App.css";
import { Header } from "./components/Header/Header";
import { ListOfNews } from "./components/ListOfNews/ListOfNews";

function App() {
  return (
    <Fragment>
      <Header />
      <ListOfNews />
    </Fragment>
  );
}

export default App;