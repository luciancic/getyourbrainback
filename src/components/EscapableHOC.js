import React, { useEffect } from 'react'

function EscapableHOC(WrappedComponent) {
    return function EscapableComponentWrapper(props) {
        const escape = (e) => { 
            if (e.key === 'Escape') props.redirectTo('Menu') 
        }

        useEffect(() => {
            window.addEventListener('keydown', escape)
            return function cleanup() { window.removeEventListener('keydown', escape) }
        })
        
        return <WrappedComponent { ...props } />
    }
}

export default EscapableHOC