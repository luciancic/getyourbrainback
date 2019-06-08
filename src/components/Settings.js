import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import SettingsContext from '../context/SettingsContext'
import SettingsSelect from "./SettingsSelect"
import escapeable from './escapeable'

function Settings() {
    const [settings, setSettings] = useContext(SettingsContext)
    const options = {
        n: [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
        maxRounds: [ 10, 15, 20, 25, 30 ],
        duration: [ 1000, 1500, 2000, 2500, 3000, 3500 ]
    }

    return <div className='container center'>
        <h1>Settings</h1>
        <label>N:</label>
        <SettingsSelect name="n" value={settings.n} options={options.n} changeSetting={(val) => setSettings('n', val)}/>
        <label>Maximum Rounds:</label>
        <SettingsSelect name="maxRounds" value={settings.maxRounds} options={options.maxRounds} changeSetting={(val) => setSettings('maxRounds', val)}/>
        <label>Round Duration</label>
        <SettingsSelect name="duration" value={settings.duration} options={options.duration} changeSetting={(val) => setSettings('duration', val)}/>
        <Link to="/" className="btn">Back to Menu</Link>
    </div>
}

export default escapeable(Settings)
