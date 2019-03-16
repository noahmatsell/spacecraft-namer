import React from 'react';
import './Search.css';
import { spacecraftsData } from '../spacecrafts';

interface SearchProps {
  setSearchResult(results: any): void;
}

const getRandNum = () => Math.floor(Math.random() * 25);

const Search: React.FunctionComponent<SearchProps> = (props) => {

  const { setSearchResult } = props;

  const handleSubmit = (e: React.FormEvent) => {
    const spacecraftResults = spacecraftsData.reduce((acc: any, red: any) => {
      const a = acc['spacecrafts'] || [];
      const b = red['spacecrafts'] || []
      return a.concat(b);
    });

    const threeRandomSpacecrafts: any = [
      // @ts-ignore
      spacecraftResults[getRandNum()],
      // @ts-ignore
      spacecraftResults[getRandNum()],
      // @ts-ignores
      spacecraftResults[getRandNum()],
    ];

    const spacecrafts = threeRandomSpacecrafts.map((spacecraft: any) => {
      const { name, dateStatus, owner, operator } = spacecraft;
      return { name, date: dateStatus, operator: operator ? operator.name : null, owner: owner ? owner.name : null };
    });

    setSearchResult(spacecrafts);
  }

  return (
    <div className="searchContainer">
      <h2>Generate Your Spacecraft Name</h2>
      <button onClick={handleSubmit}>Get Star Trek Ships</button>
    </div>
  );
};

export default Search;