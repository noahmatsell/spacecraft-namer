import * as React from 'react';
import Result from './Result';
import './SearchResults.css';

interface SearchResultsProps {
  results: any;
}

const SearchResults: React.FunctionComponent<SearchResultsProps> = (props) => {
  const { results } = props;
  return (
    <div className="resultsContainer">
      {
        results.map((spacecraft: any) => {
          return <Result spacecraft={spacecraft} />
        })
      }
    </div>
  );
};

export default SearchResults;