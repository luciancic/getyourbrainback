import { connect } from 'react-redux';
import { endGame, cancelGame } from '../actions/gameActions';
import { startRound, endRound, answer, playAudio } from '../actions/roundActions';
import Game from '../components/Game';

const mapStateToProps = ({ settings, game, feedback, audioPlayed }) => {
    return { settings, game, feedback, audioPlayed }
}

const actions = {
    answer,
    endGame, 
    cancelGame,
    startRound,
    endRound,
    playAudio
}

export default connect(mapStateToProps, actions)(Game)