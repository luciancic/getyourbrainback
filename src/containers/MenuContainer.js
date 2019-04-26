import { connect } from 'react-redux';
import { startGame } from '../actions/gameActions';
import { startTutorial } from '../actions/tutorialActions';
import Menu from '../components/Menu';

export default connect(null, { startGame, startTutorial })(Menu);