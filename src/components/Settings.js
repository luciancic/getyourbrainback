import React, { useContext } from 'react'
import SettingsContext from '../context/SettingsContext'
import SettingsSelect from "./SettingsSelect"

function Settings(props) {
    const { redirectTo } = props
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
        <button className="btn" onClick={ () => redirectTo('Menu') }>Back to Menu</button>
    </div>
}

export default Settings
