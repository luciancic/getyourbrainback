import React, { Component } from 'react';
import { Link } from "react-router-dom";

import SettingsSelect from "./SettingsSelect";
import escapeable from './escapeable';

export class Settings extends Component {
    render() {
        return <div className='container center'>
            <h1>Settings</h1>
            <label>N:</label>
            <SettingsSelect name="n" { ...this.props } />
            <label>Maximum Rounds:</label>
            <SettingsSelect name="maxRounds" { ...this.props } />
            <label>Round Duration</label>
            <SettingsSelect name="duration" { ...this.props } />
            <Link to="/" className="btn">Back to Menu</Link>
        </div>
    }
}

export default escapeable(Settings);