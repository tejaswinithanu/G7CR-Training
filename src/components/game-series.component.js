import React,{useContext, useState} from 'react';
import { GameScoreboard } from './game-scoreboard.component';
import { Game } from './game.component';
import { Clock } from './clock.component';

export const GameSeries =()=>{

    let [games,updateGames]=useState(0);
    let [X,updateX]=useState(0);
    let [O,updateO]=useState(0);

    const handleGameResult=(winner,timers)=>{
        //var newState={...this.state};
        if(winner){
            if(winner==='X'){
                updateX(X+0.75)
                updateO(O+0.25)
            }else{
                updateX(X+0.25)
                updateO(O+0.75)
            }
        }
        else{
            if(timers['X']>timers['O']){
                updateX(X+0.25)
                updateO(O+0.75)
            }else{
                updateX(X+0.75)
                updateO(O+0.25)
            }
        }
        updateGames(games+1)

    }

    const gameState={
        games,X,O
    }

    return (
        <div className='game-series-component'>
            
            <GameScoreboard  {...gameState}/>
            <Game onGameResult={handleGameResult}/>
        </div>
    )
    
};