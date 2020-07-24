
import React from 'react'

import './Timer.scss';

class Timer extends React.Component {
    state = {
               seconds: 40,
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (seconds === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ seconds }) => ({
                        seconds: 41
                    }))
                }
            } 
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { seconds } = this.state
        return (
            <div className="Timer">
                { seconds === 0
                    ? <h1 className="penalty">DELAY OF GAME PENALTY OFFENSE</h1>
                    : <h1 className="playclock">PLAY CLOCK {seconds < 10 ? `0${seconds}` : seconds}</h1>
                }
            </div>
        )
    }
}

export {Timer};