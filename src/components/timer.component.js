import React, { useEffect, useState } from 'react';
import { If } from './if.component';


export const Timer =(props)=> {

    let [ms,updateMs]=useState(0);
    let [running,updateRunning]=useState(props.running);
    let [reset,updateReset]=useState(false);

    let iid;

    useEffect(()=>{
        if(running){
            toggle()
        }
        if(props.running !== running){
            _toggle();
            updateRunning(props.running)
        }
    },[props.running,running])

    // componentDidUpdate=(previousProps,previousState)=>{
    //     //console.log(`CDU: ${this.props.name} state: ${this.state.running} oldState: ${previousState.running} props:${this.props.running} `);
    //     if(this.props.running!==this.state.running){
    //          this._toggle();
    //          this.setState({running: this.props.running});
    //     } 
 
    //  }

    const resetTime = () => {
        if (running && iid)
            clearInterval(iid);
        updateMs(0);
        updateRunning(false);
    }


    let startButtonImage='/images/start.png'
    let pauseButtonImage='/images/pause.png'
    let resetButtonImage='/images/reset.png'

    const _toggle=()=>{
        if (running && iid) {
            //pause it.
            clearInterval(iid);
            if(props.onPause){
                props.onPause(props.name, ms);
            }
        } else {
            iid = setInterval(() => {
                updateMs(ms += 100)
            }, 100);
        }
    }

    const toggle = () => {

        this._toggle();
        updateRunning(!running)
    }

 
    const zeroPadded=(value,digits=2)=>{
        let str=value.toString();
        let zeros= digits-str.length;
        return '0'.repeat(zeros) + str;

    }

    // componentDidMount=()=>{
    //     if(this.state.running)
    //         this.toggle();
        
    // }

    // static getDerivedStateFromProps(props,state){
    //     console.log(`p:${JSON.stringify(props)} s: ${JSON.stringify(state)} `);
    //     return {running: props.running}; // add to state.
    // }

   

    let milliseconds = ms;
    let _ms = milliseconds % 1000;
    let seconds = Math.ceil((milliseconds - _ms) / 1000);
    let minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    milliseconds = _ms;

    

        

    return (
        <div className='timer-component'>
            <h3>{props.name}</h3>
            <div className='timer'>
                <span className='minutes'>{zeroPadded(minutes)}:</span>
                <span className='seconds'>{zeroPadded(seconds)}.</span>
                <span className='milliseconds'>{zeroPadded(milliseconds,3)}</span>
            </div>

            <If condition={!props.hideControls}>
                <div className='same-row'>
                    <img
                        onClick={toggle}
                        alt='toggle'
                        src={running ? pauseButtonImage : startButtonImage}
                    />
                    
                    <img
                        onClick={resetTime}
                        alt='reset'
                        src={resetButtonImage}
                    />      
                </div>
            </If>
        </div>
    )
    };

