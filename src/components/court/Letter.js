import React, { Component } from 'react';

class Letter extends Component {
    constructor(props) {
        super(props)
        this.audioRef = React.createRef();
        this.audio = require(`../../audio/audio-${this.props.number}.wav`);
    }

    componentDidUpdate() {
        if (this.props.audioShouldPlay) {
            // Calls action creator to mark audioPlayed piece of state as true.
            this.audioRef.current.play();
            this.props.disableAudio();
        }
    }

    render() {
        return <audio src={this.audio} ref={this.audioRef}/>
    }
}

export default Letter;
