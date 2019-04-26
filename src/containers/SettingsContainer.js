import { connect } from 'react-redux';
import { changeSettings } from "../actions/settingsActions";
import Settings from '../components/Settings';

const mapStateToProps = ({settings}) => { 
    return { 
        settings,
        options: settings.options
    } 
}

export default connect(mapStateToProps, { changeSettings })(Settings)