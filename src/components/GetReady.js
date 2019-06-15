import React, { Fragment, useState, useEffect } from 'react'

function GetReady(props) {
    const [readyStatus, setReadyStatus] = useState('ready')
    useEffect(function() {
        setTimeout(function() {
            setReadyStatus('start')
            setTimeout(function() {
                setReadyStatus('playing')
            }, 800)
        }, 2000)
    }, [])

    return <Fragment>
    { 
        readyStatus === 'ready' ? <div>Get Ready...</div> :
        readyStatus === 'start' ? <div>Start!</div> :
        readyStatus === 'playing' ? props.children : null
    }
    </Fragment>
}

export default GetReady