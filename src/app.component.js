import React,{useState} from 'react';
import './app.css'
import {AppHeader} from './components/app-header.component';
import { Game } from './components/game.component';
import { GameSeries } from './components/game-series.component';
//import { Clock } from './components/clock.component';
import {gameContext} from './context/game-context';
import { TicTacToeGame } from './services/tic-tac-toe-game.service';


export const App = () => {

    return (
        <gameContext.Provider>
            <AppHeader title="Tic Tac Toe" slogan="Let the game begin..." />
            <GameSeries/>
        </gameContext.Provider>
    );
};


