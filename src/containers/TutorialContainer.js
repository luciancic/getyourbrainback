import { connect } from 'react-redux';
import { startTutorial, exitTutorial, nextTutorial, previousTutorial } from '../actions/tutorialActions';
import Tutorial from '../components/Tutorial';

function mapStateToProps({ tutorial }) {
    return { tutorial }
}

const actions = {
    startTutorial,
    exitTutorial,
    nextTutorial,
    previousTutorial
}

export default connect(mapStateToProps, actions)(Tutorial)