import React from 'react'

const BreakInterval = ({ breakInterval, increaseBreak, decreaseBreak}) => {

    return (
        <section>
            <h4>Break</h4>
            <section className="interval-container">
                
                <button className="incrementBtn" onClick={decreaseBreak} id="btn1">Down</button>
                <p className="interval-length" id="breakNum">{breakInterval}</p>
                <button className="incrementBtn" onClick={increaseBreak} id="btn2">Up</button>
            </section>
        </section>

    )
}

export default BreakInterval