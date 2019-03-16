import * as React from 'react';

interface ResultProps {
  spacecraft: any;
}
const formattedName = (name: string) => {
  return name.replace(/\s+/g, '-').toLowerCase();
}
const Result: React.FunctionComponent<ResultProps> = (props) => {
  const { spacecraft } = props;
  return (
    <div className="result">
      <h1>{spacecraft.name}</h1>
      <h2>{formattedName(spacecraft.name)}</h2>
      {spacecraft.date && <p>{`Date: ${spacecraft.date}`}</p>}
      {spacecraft.owner && <p>{`Owner: ${spacecraft.owner}`}</p>}
    </div>
  );
};

export default Result;