import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default (WrappedComponent) => class escapeable extends Component {
    state = { redirect: false };
    
    componentWillMount() {
        this.escapeListener = window.addEventListener('keydown', (e) => { 
            if(e.key === 'Escape') this.setState({redirect: true}) 
        });
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.escapeListener);
    }

    render() {
        return this.state.redirect ? 
            <Redirect to='/' />
            : <WrappedComponent {...this.props} />
    }
}