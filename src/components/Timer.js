import React from 'react'
import { useState, useEffect } from 'react';

const Timer = ({ isSession, timerMinute, breakLength, sessionLength, updateTimerMinute, toggleInterval, resetTimerMinute}) => {


    const [timerSecond, setTimerSecond] = useState(0);
    const [isActive, setIsActive] = useState(false);


    function start() {
        setIsActive(true);
        disableButton();
    }


    function stop() {
        setIsActive(false);
    }

    function reset() {
        setIsActive(false);
        setTimerSecond(0);
        resetTimerMinute();
        enableButton();
        
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                if (timerSecond === 0) {
                    if (timerMinute === 0) {
                        setTimerSecond(0);
                        setIsActive(false);
                    } else {
                        setTimerSecond(59);
                        updateTimerMinute();
                    }

                } else {
                    setTimerSecond(seconds => seconds - 1);
                }


            }, 1000);
        } else if (!isActive && timerSecond !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, timerSecond]);




    return (
        <section>
            <section className="timer-container">
                <h4 className="session-header">{isSession === true ? "Session" : "Break"}</h4>
                <span className="timer">{timerMinute}</span>
                <span className="timer">:</span>
                <span className="timer">{timerSecond === 0 ? "00" : timerSecond < 10 ? "0" + timerSecond : timerSecond}</span>
            </section>
            <section className="timer-actions">
                <button className="incrementBtn" onClick={start}>Start</button>
                <button className="incrementBtn" onClick={stop}>Stop</button>
                <button className="incrementBtn" onClick={reset}>Reset</button>
            </section>
        </section>
    )

    function disableButton() {
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn3").disabled = true;
        document.getElementById("btn4").disabled = true;
        document.getElementById("breakNum").style.color="#919191";
        document.getElementById("sessionNum").style.color="#919191";
    }

    function enableButton() {
        document.getElementById("btn1").disabled = false;
        document.getElementById("btn2").disabled = false;
        document.getElementById("btn3").disabled = false;
        document.getElementById("btn4").disabled = false;
        document.getElementById("breakNum").style.color="black";
        document.getElementById("sessionNum").style.color="black";

    }
}


export default Timer