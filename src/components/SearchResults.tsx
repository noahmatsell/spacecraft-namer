import * as React from 'react';
import Result from './Result';
import './SearchResults.css';
import Ship from './Ship.js';

interface SearchResultsProps {
  results: any;
}

const SearchResults: React.FunctionComponent<SearchResultsProps> = (props) => {
  const { results } = props;
  return (
    <div className="resultsContainer">
      {
        results.length == 0 ?
          <div className='spaceship' dangerouslySetInnerHTML={{ __html: Ship() }} />
          :
          results.map((spacecraft: any) => {
            return <Result spacecraft={spacecraft} />
          })
      }
    </div>
  );
};

export default SearchResults;