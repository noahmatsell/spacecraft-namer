import React from 'react';
import './Search.css';
import { spacecraftsData } from '../startrek_spacecrafts';
import { cultureSpacecrafts } from '../theculture_spacecrafts';

interface SearchProps {
  setSearchResult(results: any): void;
}

const getRandNum = (spacecraftResults: any) => Math.floor(Math.random() * spacecraftResults.length);

const Search: React.FunctionComponent<SearchProps> = (props) => {

  const { setSearchResult } = props;

  const handleStarTrekSubmit = (e: React.FormEvent) => {
    const spacecraftResults = spacecraftsData.reduce((acc: any, red: any) => {
      const a = acc['spacecrafts'] || [];
      const b = red['spacecrafts'] || []
      return a.concat(b);
    });

    const threeRandomSpacecrafts: any = [
      // @ts-ignore
      spacecraftResults[getRandNum(spacecraftResults)],
      // @ts-ignore
      spacecraftResults[getRandNum(spacecraftResults)],
      // @ts-ignores
      spacecraftResults[getRandNum(spacecraftResults)],
    ];

    const spacecrafts = threeRandomSpacecrafts.map((spacecraft: any) => {
      const { name, dateStatus, owner, operator } = spacecraft;
      return { type: 'startrek', name, date: dateStatus, operator: operator ? operator.name : null, owner: owner ? owner.name : null };
    });

    setSearchResult(spacecrafts);
  }

  const handleTheCultureSubmit = (e: React.FormEvent) => {
    const threeRandomSpacecrafts: any = [
      // @ts-ignore
      cultureSpacecrafts[getRandNum(cultureSpacecrafts)],
      // @ts-ignore
      cultureSpacecrafts[getRandNum(cultureSpacecrafts)],
      // @ts-ignores
      cultureSpacecrafts[getRandNum(cultureSpacecrafts)],
    ];

    const spacecrafts = threeRandomSpacecrafts.map((spacecraft: any) => {
      const { gsx$name, gsx$comments, gsx$civilisation, gsx$class } = spacecraft;
      return { type: 'theculture', name: gsx$name['$t'], civilisation: gsx$civilisation['$t'], class: gsx$class['$t'], comments: gsx$comments['$t'] };
    });

    setSearchResult(spacecrafts);
  }

  return (
    <div className="searchContainer">
      <h2>Generate Your Spacecraft Name</h2>
      <button onClick={handleStarTrekSubmit}>Get Star Trek Spacecrafts</button>
      <button onClick={handleTheCultureSubmit}>Get The Culture Spacecrafts</button>
    </div>
  );
};

export default Search;