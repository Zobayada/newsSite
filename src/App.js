import React from 'react';
import Search from './component/Search';
import Pagination from './component/Pagination';
import News from './component/News';
import "./App.css"


const App = () => {
  return (
    <>
      <Search />
      <Pagination />
      <News />
    </>
  )
}

export default App