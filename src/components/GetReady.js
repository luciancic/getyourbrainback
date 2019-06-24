import React, { Fragment, useState, useEffect } from 'react'

function GetReady(props) {
    const [readyStatus, setReadyStatus] = useState('ready')
    useEffect(function() {
        setTimeout(function() {
            setReadyStatus('start')
            setTimeout(function() {
                setReadyStatus('playing')
            }, 800)
        }, 1400)
    }, [])

    return <Fragment>
    { 
        readyStatus === 'ready' ? <div className='ready green'>Get Ready...</div> :
        readyStatus === 'start' ? <div className='ready green'>Start!</div> :
        readyStatus === 'playing' ? props.children : null
    }
    </Fragment>
}

export default GetReady