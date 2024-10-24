import React from 'react';
import '../App.css'; // Ensure your styles are properly loaded
import TTTImage from '../assets/TTT.png'; // Path to the Tic-Tac-Toe image
import RPSImage from '../assets/RPS.png'; // Path to the Rock Paper Scissors image

const Projects = () => {
  return (
    <div className="projects-section">
      <h1>My Projects</h1>
      
      {/* Tic-Tac-Toe Project */}
      <div className="project">
        <h2>Game 1: Tic-Tac-Toe (Halloween Theme)</h2>
        <img src={TTTImage} alt="Tic-Tac-Toe Game" className="project-image"/>
        <p>
          This is a classic Tic-Tac-Toe game with a Halloween theme, built using HTML, CSS, and JavaScript. The game is fully responsive and features spooky icons and animations.
        </p>
        <a href="https://sauriddaedward.github.io/TicTacToe/" target="_blank" rel="noopener noreferrer">
          Play the Game
        </a>
        <a href="https://github.com/SauridDaedward/TicTacToe" target="_blank" rel="noopener noreferrer">
          View Source Code
        </a>
      </div>

      {/* Rock Paper Scissors Project */}
      <div className="project">
        <h2>Game 2: Rock Paper Scissors</h2>
        <img src={RPSImage} alt="Rock Paper Scissors Game" className="project-image"/>
        <p>
          This is a Rock Paper Scissors game built using HTML, CSS, and JavaScript. The game allows you to play against the computer, and it's fun and simple to play!
        </p>
        <a href="https://sauriddaedward.github.io/RockPaperSiccors/" target="_blank" rel="noopener noreferrer">
          Play the Game
        </a>
        <a href="https://github.com/SauridDaedward/RockPaperSiccors" target="_blank" rel="noopener noreferrer">
          View Source Code
        </a>
      </div>
    </div>
  );
};

export default Projects;
