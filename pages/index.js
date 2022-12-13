import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import { useState } from 'react';

const Home = () => {
  const [userInput, setUserInput] = useState('');
  const onUserChangedText = (event) => {
  console.log(event.target.value);
  setUserInput(event.target.value);
};
  return (
    <div className="root">
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>MovieMate will tell you what to watch</h1>
          </div>
          <div className="header-subtitle">
            <h2>Talk with your MovieMate about your mood and movie genre preference</h2>
          </div>
        </div>
        {/* Add this code here*/}
        <div className="prompt-container">
          <textarea
          placeholder="start typing here"
          className="prompt-box"
          value={userInput}
          onChange={onUserChangedText}
        />
        <div className="prompt-buttons">
          <a class="generate-button" onClick={null}>
            <div className="generate">
              <p>Generate</p>
            </div>
          </a>
        </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
