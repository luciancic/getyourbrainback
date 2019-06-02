import React, { Component } from 'react';
import M from 'materialize-css';

export class SettingsSelect extends Component {
    componentDidMount() {
        const elems = document.querySelectorAll('select');
        this.selectElemsInstances = M.FormSelect.init(elems, {});
    }

    handleSettingChange = (e) => {
        this.props.changeSetting(Number(e.target.value));
    }

    renderOptions(options) {
        return options.map(op => <option value={op} key={op}>{op}</option>)
    }

    renderDurations(options) {
        return options.map(op => {
            // Inner text of duration is human-readable but keep in milliseconds everywhere else
            let innerText = (op / 1000).toPrecision(2).toString() + ' sec'
            return <option value={op} key={op}>{innerText}</option>
        })
    }

    render() {
        let { name, value, options } = this.props;
        
        return <div  className='input-field'>
            <select style={{ borderColor: 'black' }} name={name} defaultValue={value} onChange={this.handleSettingChange}>
                { name === 'duration' ? this.renderDurations(options) : this.renderOptions(options) }
            </select>
        </div>
    }
}

export default SettingsSelect