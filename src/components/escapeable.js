import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default (WrappedComponent) => class escapeable extends Component {
    state = { redirect: false }
    
    componentWillMount() {
        window.addEventListener('keydown', this.escapeListener)
    }
    
    componentWillUnmount() {
        window.removeEventListener('keydown', this.escapeListener)
    }

    escapeListener = (e) => { 
        if(e.key === 'Escape') this.setState({redirect: true}) 
    }

    render() {
        return this.state.redirect ? 
            <Redirect to='/' />
            : <WrappedComponent {...this.props} />
    }
}