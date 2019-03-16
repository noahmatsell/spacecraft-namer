import React, { useState } from 'react';
import Search from './components/Search'
import SearchResults from './components/SearchResults'
import './App.css';

const App: React.FunctionComponent<any> = () => {
  const [searchResult, setSearchResult] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Spacecraft Namer</h1>
      </header>
      <main>
        <SearchResults results={searchResult} />
        <Search setSearchResult={setSearchResult} />
      </main>
    </div>
  );
};

export default App;