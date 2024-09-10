import React,{useContext,createContext} from "react";
import { TicTacToeGame } from "../services/tic-tac-toe-game.service";

let gameContext=createContext();

export const useGameContext =()=>{
    return useContext(gameContext); //ensure context is not null
}

export const GameProvider=({children})=>{
    let game=new TicTacToeGame();

    return(
        <gameContext.Provider value={game}>
            {children}
        </gameContext.Provider>
    )
}