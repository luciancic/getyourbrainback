import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import GameBoard from './GameBoard';
import * as actions from '../actions/gameActions';

class Game extends Component {
    componentDidMount() {
        this.interval = setInterval(() => {
            if (this.props.game.currentRound + 1 === this.props.settings.maxRounds) {
                return this.props.endGame();
            }
            this.props.startRound();
        }, this.props.settings.duration);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
        if (!this.props.game.ended) { this.props.cancelGame() }
    }
    
    render() {
        const remainingRounds = this.props.settings.maxRounds - this.props.game.currentRound;
        return <div className="container">
            <div style={{ display: 'block', marginTop: '15px' }}>
                <span className='left' style={{ paddingLeft: '15px'}}>Remaining rounds: { remainingRounds }</span>
                <span className='right' style={{ paddingRight: '15px'}}>N-back: {this.props.settings.n}</span>
            </div>
            <GameBoard />
            { this.props.game.ended ? <Redirect to="/" /> : null }
        </div>
    }
}

function mapStateToProps({ settings, game }) {
    return { settings, game }
}

export default connect(mapStateToProps, actions)(Game)
