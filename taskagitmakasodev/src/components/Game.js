import React, { useState } from 'react';
import tas from './images/tas.png'
import kagit from './images/kagit.png'
import makas from './images/makas.png'

function Game() {
    const [playerSelection, setPlayerSelection] = useState(null);
    const [computerSelection, setComputerSelection] = useState(null);
    const [result, setResult] = useState(null);
    const [playerresult, setPlayerresult] = useState(0)

    function playRound(playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();

        if (playerSelection === computerSelection) {
            setResult("It's a tie!");
        } else if (playerSelection === 'rock') {
            if (computerSelection === 'scissors') {
                setResult("You win! Rock beats scissors.");
                setPlayerresult(playerresult+1)
            } else {
                setResult("You lose! Paper beats rock.");
                setPlayerresult(playerresult-1)
            }
        } else if (playerSelection === 'paper') {
            if (computerSelection === 'rock') {
                setResult("You win! Paper beats rock.");
                setPlayerresult(playerresult+1)
            } else {
                setResult("You lose! Scissors beats paper.");
                setPlayerresult(playerresult-1)
            }
        } else if (playerSelection === 'scissors') {
            if (computerSelection === 'paper') {
                setResult("You win! Scissors beats paper.");
                setPlayerresult(playerresult+1)
            } else {
                setResult("You lose! Rock beats scissors.");
                setPlayerresult(playerresult-1)
            }
        } else {
            setResult("Invalid input. Please enter 'rock', 'paper', or 'scissors'.");
        }
    }

    function computerPlay() {
        const choices = ['rock', 'paper', 'scissors'];
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function handleClick(playerSelection) {
        setPlayerSelection(playerSelection);
        setComputerSelection(computerPlay());
        playRound(playerSelection, computerSelection);
    }

    return (
        <div>
            <h1 className='baslik'>Rock Paper Scissors</h1>

            <div className='header'>
                <img src= {tas} alt="tas" style={{width: '150px',height:'150px'}}/>
                <img src={kagit} alt="kagit" style={{width: '150px',height:'150px'}}/>
                <img src={makas} alt="makas" style={{width: '150px',height:'150px'}}/>
            </div>
            <div className="buttom">
                <button onClick={() => handleClick('rock')}>Rock</button>
                <button onClick={() => handleClick('paper')}>Paper</button>
                <button onClick={() => handleClick('scissors')}>Scissors</button>
            </div>
            <div>
                <h2>You chose: {playerSelection}</h2>
                <h2>Computer chose: {computerSelection}</h2>
                <h2>{result}</h2>
                <h2>Total Score: {playerresult}</h2>
            </div>
        </div>
    );
}

export default Game;
