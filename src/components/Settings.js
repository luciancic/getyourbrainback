import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { changeSettings } from "../actions/settingsActions";

import SettingsSelect from "./SettingsSelect";
import escapeable from './escapeable';

const nOptions = [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
const maxRoundsOptions = [ 10, 15, 20, 25, 30 ];
const durationOptions = [ 1000, 1500, 2000, 2500, 3000, 3500 ];



class Settings extends Component {
    render() {
        return <div className='container center'>
            <h1>Settings</h1>
            <label>N:</label>
            <SettingsSelect name="n" options={nOptions} />
            <label>Maximum Rounds:</label>
            <SettingsSelect name="maxRounds" options={maxRoundsOptions} />
            <label>Round Duration</label>
            <SettingsSelect name="duration" options={durationOptions} />
            <Link to="/" className="btn">Back to Menu</Link>
        </div>
    }
}

Settings = escapeable(Settings);

function mapStateToProps(state) { 
    return { settings: state.settings } 
}

export default connect(mapStateToProps, { changeSettings })(Settings)
