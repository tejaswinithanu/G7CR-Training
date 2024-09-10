import React,{useState} from 'react';
import { Status } from './status-component.component';
import { GameBoard } from './game-board.component';
//import { RestartButton } from './restart-button.component';
import { GameMoves } from './game-moves.component';
import { TicTacToeGame } from '../services/tic-tac-toe-game.service';
import { Timer } from './timer.component';
import { If } from './if.component';
import { PlayButton } from './play-button.component';
import { useGameContext } from '../context/game-context';

export const Game =(props)=> {
    let {game}=useGameContext()
    let gameObject={
        next:game.currentPlayer,
        isOver:game.isOver,
        winningPlayer:game.winningPlayer,
        isStalemate:game.isStalemate,
        timers:{O:0,X:0},
        message:"",
        running:false,
        reset:false,
        moves:game.moves
    }

    let [gameState,updateGameState]=useState(gameObject)
    // let [next,updateNext]=useState(game.currentPlayer)
    // let [isOver,toggleIsOver]=useState(game.isOver)
    // let [winningPlayer,updateWinningPlayer]=useState(game.winningPlayer)
    // let [isStalemate,toggleIsStalemate]=useState(game.isStalemate)
    // let [bothTimers,updateBothTimers]=useState({O:0,X:0});
    // let [message,updateMessage]=useState("");
    // let [running,updateRunning]=useState(false);
    // let [reset,updateReset]=useState(false);
    // let [moves,updateMoves]=useState(game.moves)

    // const timers={
    //     O: React.createRef(),
    //     X: React.createRef()
    // }

    if(game.winner){
        updateMessage(`'${game.winningPlayer}' Wins`)
    } else if(isStalemate)
        updateMessage(`Stalemate`)
    else
        updateMessage(`Next Player '${game.currentPlayer}'`);



    const handleMove=(id)=>{

        if(game.move(id)===false)
            return;

        this.setState({
            ...this.fetchGameState,
        });

        if(game.isOver){
            props.onGameResult(this.game.winningPlayer);
            updateRunning(false);
        }

    }

    const handlePlay=()=>{

        this.timers.O.current.reset();
        this.timers.X.current.reset();

        
        this.game=new TicTacToeGame();
        this.setState({
            ...this.fetchGameState,
            running:true,
            reset:true,
        });

        
    }
    
    //obselete code
    // const __reStart=()=>{
    //     console.log('restarting');       
    //     this.game=new TicTacToeGame();
    //     this.setState({
    //         ...this.fetchGameState,
    //         running:true,
    //     });
    // }
    
    const handleReset=()=>{
        updateReset(false)
    }

    const handlePause=(name, value)=>{
        let timers= {...bothTimers};
        timers[name]=value;

        updateBothTimers(timers)

    }

    return (
            <div className='body'>
                <div className='game-component'>
                    <Status
                        message={message}
                    />
                        
                    <PlayButton onClick={handlePlay} disabled={running} />
                            
                    


                    <div className="same-row">
                        <GameBoard
                            winner={game.winner}
                            cells={game.cells}
                            onCellClick={handleMove}
                        />
                        <div>
                            <div className='timers same-row'>
                                <Timer 
                                        ref={timers.O}

                                        hideControls={true}
                                        
                                        running={next==='O' && running}
                                        name="O" 
                                        onPause={handlePause}
                                        reset={reset}
                                        onReset={handleReset}
                                        
                                        />
                                <Timer 
                                        ref={timers.X}
                                        running={next==='X' && running}
                                        hideControls name="X"
                                        onPause={handlePause}
                                        reset={reset}
                                        onReset={handleReset}
                                        
                                />
                            </div>
                            <GameMoves
                                moves={moves}
                            />

                        </div>
                    </div>
                </div>
            </div>
        )
    
}


