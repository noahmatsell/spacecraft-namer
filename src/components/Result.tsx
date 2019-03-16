import * as React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import './Result.css';

interface ResultProps {
  spacecraft: any;
}
const formattedName = (name: string) => {
  return name.replace(/\s+/g, '-').toLowerCase();
}

const Result: React.FunctionComponent<ResultProps> = (props) => {
  const { spacecraft } = props;
  const name = spacecraft.name.replace(/[*",]/g, '');
  const formatted = formattedName(name);
  const buttonRef: React.RefObject<HTMLButtonElement> = React.createRef();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    buttonRef.current!.textContent = 'Copied ✔';
    setTimeout(() => {
      buttonRef.current!.textContent = 'Copy'
    }, 1000);
  }

  return (
    <div className="result">
      <h1>{name}</h1>
      <h2>{formatted}</h2>
      <CopyToClipboard text={formatted}
        onCopy={() => console.log('copied')}>
        <button ref={buttonRef} className='copyButton' onClick={handleClick}>Copy</button>
      </CopyToClipboard>
      {spacecraft.class && <p>{`Class: ${spacecraft.class}`}</p>}
      {spacecraft.civilisation && <p>{`Civilisation: ${spacecraft.civilisation}`}</p>}
      {spacecraft.comments && <p>{`Comments: ${spacecraft.comments}`}</p>}
      {spacecraft.date && <p>{`Date: ${spacecraft.date}`}</p>}
      {spacecraft.owner && <p>{`Owner: ${spacecraft.owner}`}</p>}
    </div>
  );
};

export default Result;