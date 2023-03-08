

import React, { Fragment } from 'react'; // it is imported as a div element 
import { Header } from './components/Header/Header.jsx';
import { BlogList } from './components/BlogList/BlogList.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
        <Fragment>
          <Header />
          <BlogList />
        </Fragment>
    </div>
  );
}

export default App;
