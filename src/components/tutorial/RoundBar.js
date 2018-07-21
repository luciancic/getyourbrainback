import React from 'react';
import PositionMini from './PositionMini';
import { connect } from 'react-redux';

const RoundBar = ({positions}) => {
    return (
        <div className="roundBar">
            { positions[0] ? <PositionMini currentPosition={positions[0]}/> : null}
            { positions[1] ? <PositionMini currentPosition={positions[1]}/> : null}
            { positions[2] ? <PositionMini currentPosition={positions[2]}/> : null}
        </div>
    );
}

function mapStateToProps({ game }) {
    return {
        positions: game.positions
    }
}

export default connect(mapStateToProps)(RoundBar);
