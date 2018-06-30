import React, { Component } from 'react';
import { connect } from 'react-redux';
import GameBoard from './GameBoard';

class Game extends Component {
    render() {
        return <GameBoard />
    }
}

export default connect()(Game)
