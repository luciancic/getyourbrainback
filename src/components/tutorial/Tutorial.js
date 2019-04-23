// Needs to show text above, n, game board, and the match buttons.

// 1st page: "Welcome!: Get your brain back! is a memory game where you need to remember the 
// positions of the circles and the letters you hear. In this tutorial, you will get familiar
// with rounds, n, and matching."

// 2nd page: "Rounds: A round is time during which the circle is visible. When the circle fades
// out, the round ends. When the next circle appears, the next round starts, and so on."

// 3rd page: "N: n is number of rounds you will have to remember at a time.
// The lowest possible n is 2"

// 4th page: "Matching: When the circle appears in the same place as n rounds ago, press the
// match button."

// 5th page: "Advanced matching: Playing with position alone would be too easy; we want a thorough
// memory workout. You will have to watch out for the position and the letter at the same time.
// Be careful though! The position and letters may match at the same time, or not. Remember them
// separately."

// 6th page: "Raising n: As you get better at the game, n will be raised. See what happens with an 
// n of 3."

// 7th page: "Pro tips"

import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import Court from '../court/Court';
import { startTutorial, exitTutorial, nextTutorial, previousTutorial } from '../../actions/tutorialActions';

import "./Tutorial.css";

export class Tutorial extends Component {
    componentDidMount() {
        startTutorial();
    }

    render() {
        return <div className="tutorial">
            <section className="tutorial-info">
                <h1>Intro</h1>
                <p><em>Get your brain back!</em> is a memory game where you need to remember the positions of the circles and the letters you hear. In this tutorial, you will get familiar with rounds, n, and matching.</p>
                <div className="tutorial-buttons">
                    <button onClick={this.props.previousTutorial} className="btn">Back</button>
                    <button onClick={this.props.nextTutorial} className="btn">Next</button>
                    <button onClick={this.props.exitTutorial} className="btn">Quit</button>
                </div>
            </section>
            <Court 
                {...this.props}
                // activeLetter={1} // Placeholder value
                // activePosition={1} // Placeholder value 
                letters={[1]} 
                positions={[1]} 
            />
            { this.props.tutorial.running ? null : <Redirect to="/" /> }
        </div>
    }
} 

function mapStateToProps({ tutorial }) {
    return { tutorial }
}

const actions = {
    startTutorial,
    exitTutorial,
    nextTutorial,
    previousTutorial
}

export default connect(mapStateToProps, actions)(Tutorial)