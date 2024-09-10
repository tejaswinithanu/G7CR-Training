import React from 'react';

export const GameScoreboard=({games, X,  O, draw})=>{

    return (
        <div className='game-scoreboard-component'>
           <h2>Game Scoreboard</h2>
           <table>
                <thead>
                    <tr> 
                        <th>Games</th>
                        <th>O Wins</th>
                        <th>X Wins</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{games}</td>
                        <td>{O}</td>
                        <td>{X}</td>
                    </tr>
                </tbody>
           </table>
        </div>
    )
};