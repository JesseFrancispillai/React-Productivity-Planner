import React from 'react'

const SessionLength = ({ sessionLength, increaseSession, decreaseSession}) => {
    return (
        <section>
            <h4>Session</h4>
            <section className="interval-container">
                <button className="incrementBtn" onClick={decreaseSession} id="btn3">Down</button>
                <p className="interval-length" id="sessionNum">{sessionLength}</p>
                <button className="incrementBtn" onClick={increaseSession} id="btn4">Up</button>
            </section>
        </section>

    )
}

export default SessionLength