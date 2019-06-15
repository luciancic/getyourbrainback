// Handles UI of the whole game at a high level
import React, { Component } from 'react'
import IndicatorBar from './IndicatorBar'
import Letters from './Letters'
import MatchButton from './MatchButton'
import PositionBoard from './PositionBoard'
import escapeable from '../escapeable'
import { mapFeedbackColor } from '../../utils'

export class Court extends Component {
    state = {
        canPlayAudio: false,
        currentRound: -1,
        isRoundActive: false,
        feedback: {
            letters: null,
            positions: null
        },
        userAnswered: {
            positions: false,
            letters: false
        }
    }

    componentDidMount() {
        const { endGame, duration, maxRounds, n } = this.props
        
        // First round starts immediately.
        this.playRound()

        // Set up a round loop.
        this.interval = setInterval(() => {
            // Do not destructure currentRound because it needs to check value by reference.
            if (this.state.currentRound === maxRounds + n - 1) {
                // if endGame handler provided, call it
                // else repeat the game again
                if (endGame) return endGame()
                else return setTimeout(() => { this.playRound() }, 1000)
            }
            this.playRound()
        }, duration + 300)

        window.addEventListener('keydown', this.gameListener, false);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval)
        clearTimeout(this.timeout)
        window.removeEventListener('keydown', this.gameListener, false)
    }

    // Don't use this function directly. Rather, use its bound versions:
    // checkPositions and checkLetters
    checkAnswer = (stim, handler) => { 
        const { n } = this.props
        const { currentRound, isRoundActive, userAnswered } = this.state

        if (currentRound < n || !isRoundActive || userAnswered[stim]) return
        else {
            let newState = { 
                feedback: this.state.feedback, 
                userAnswered: this.state.userAnswered
            }
            const arr = this.props[stim]
            const isAnswerCorrect = arr[currentRound] === arr[currentRound - n]
            
            newState.feedback[stim] = isAnswerCorrect ? 'correct' : 'mistake'
            newState.userAnswered[stim] = true
            this.setState(newState)
            handler(isAnswerCorrect)
        }
    }
    checkPositions = this.checkAnswer.bind(this, 'positions', this.props.handlePositionScore)
    checkLetters = this.checkAnswer.bind(this, 'letters', this.props.handleLettersScore)

    checkMissed = () => {
        const { handlePositionScore, handleLettersScore, n } = this.props
        const { currentRound, userAnswered } = this.state
        if (currentRound < n) return
        else {
            checkFor.call(this, 'positions', handlePositionScore)
            checkFor.call(this, 'letters', handleLettersScore)
        }

        function checkFor(stim, handler) {
            if (userAnswered[stim]) return;
            else {
                let newState = { feedback: this.state.feedback }
                const arr = this.props[stim]
                const isAnswerMissed = arr[currentRound] === arr[currentRound - n]
                
                if (isAnswerMissed) {
                    newState.feedback[stim] = 'missed'
                    this.setState(newState)
                    handler(false)
                }
            }
        }
    }
    
    gameListener = (e) => {
        switch (e.key) {
            case 'Escape':
                this.props.cancelGame()
                break
            case 'a':
                this.checkPositions()
                break
            case 'l':
                this.checkLetters()
                break
            default:
                break;
        }
    }

    playRound = () => {
        const { duration } = this.props;
        
        this.setState({ 
            canPlayAudio: true,
            currentRound: this.state.currentRound + 1,

            isRoundActive: true,
            feedback: {
                positions: null,
                letters: null
            },
            userAnswered: {
                positions: false,
                letters: false
            }
        })

        this.timeout = setTimeout(() => {
            this.setState({ isRoundActive: false })
            this.checkMissed()
        }, duration)

    }


    render() {
        const { letters, maxRounds, n, positions } = this.props
        const { canPlayAudio, currentRound, isRoundActive } = this.state
        const positionsColor = mapFeedbackColor(this.state.feedback.positions)
        const lettersColor = mapFeedbackColor(this.state.feedback.letters)

        return <div className="court top-container teal lighten-4">
            <section className="court__action">
                <IndicatorBar maxRounds={maxRounds} currentRound={currentRound} n={n} />
                <PositionBoard active={isRoundActive} currentPosition={positions[currentRound]}/>
                <Letters active={isRoundActive} currentLetter={letters[currentRound]} canPlayAudio={canPlayAudio} disableAudio={() => this.setState({ canPlayAudio: false })}/>
            </section>
            <section className="court__button-container">
                <MatchButton color={positionsColor} name="Position" onClick={this.checkPositions}/>
                <MatchButton color={lettersColor} name="Letter" onClick={this.checkLetters}/>
            </section>
        </div>
    }
}

export default escapeable(Court)
