import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import GameBoard from './GameBoard';
import * as actions from '../actions/gameActions';

class Game extends Component {
    componentDidMount() {
        // Do not destructure game because its values will not stay up to date in the interval
        const { settings, startRound, endGame } = this.props;

        startRound();
        this.interval = setInterval(() => {
            if (this.props.game.currentRound === settings.maxRounds + settings.n) {
                return endGame();
            }
            startRound();
        }, settings.duration);
    }
    
    componentWillUnmount() {
        const { game, cancelGame } = this.props;

        clearInterval(this.interval);
        if (!game.ended) { cancelGame() }
    }
    
    render() {
        const { n, maxRounds } = this.props.settings;
        const { currentRound, ended, positions } = this.props.game;
        const { round } = this.props;
        const remainingRounds = maxRounds - currentRound + n + 1;

        return <div className="container">
            <div style={{ display: 'block', marginTop: '15px' }}>
                <span className='left' style={{ paddingLeft: '15px'}}>Remaining rounds: { remainingRounds }</span>
                <span className='right' style={{ paddingRight: '15px'}}>N-back: {n}</span>
            </div>
            <GameBoard active={round.active} currentPosition={positions[0]}/>
            { ended ? <Redirect to="/" /> : null }
        </div>
    }
}

function mapStateToProps({ settings, game, round }) {
    return { settings, game, round }
}

export default connect(mapStateToProps, actions)(Game)
