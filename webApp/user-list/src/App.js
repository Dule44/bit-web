

import React, { useState } from "react";

import Header from "./components/Header";
import DisplayUsers from "./components/DisplayUsers";
import Footer from "./components/Footer";

import users from "./data/user-list";
import './App.css';

function App() {
  const [listView, setlistView] = useState(false);

  const listViewHandler = () => setlistView(!listView);

  return (
    <>
      <Header islistView={listView} buttonHandler={listViewHandler} />
      <DisplayUsers islistView={listView} users={users} />
      <Footer />
    </>
  );
}

export default App;
