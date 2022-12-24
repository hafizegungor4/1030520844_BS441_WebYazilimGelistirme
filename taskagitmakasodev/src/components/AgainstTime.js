import React, { useState } from 'react';
import CountdownTimer from "./Timer";

function Game() {
    const [playerSelection, setPlayerSelection] = useState(null);
    const [computerSelection, setComputerSelection] = useState(null);
    const [result, setResult] = useState(null);

    function playRound(playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();

        if (playerSelection === computerSelection) {
            setResult("It's a tie!");
        } else if (playerSelection === 'rock') {
            if (computerSelection === 'scissors') {
                setResult("You win! Rock beats scissors.");
            } else {
                setResult("You lose! Paper beats rock.");
            }
        } else if (playerSelection === 'paper') {
            if (computerSelection === 'rock') {
                setResult("You win! Paper beats rock.");
            } else {
                setResult("You lose! Scissors beats paper.");
            }
        } else if (playerSelection === 'scissors') {
            if (computerSelection === 'paper') {
                setResult("You win! Scissors beats paper.");
            } else {
                setResult("You lose! Rock beats scissors.");
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
            <h1>Rock Paper Scissors</h1>
            <div>
                <button onClick={() => handleClick('rock')}>Rock</button>
                <button onClick={() => handleClick('paper')}>Paper</button>
                <button onClick={() => handleClick('scissors')}>Scissors</button>
            </div>
            <div>
                <p>You chose: {playerSelection}</p>
                <p>Computer chose: {computerSelection}</p>
                <p>{result}</p>
                <CountdownTimer seconds={5}/>
            </div>
        </div>
    );
}

export default Game
