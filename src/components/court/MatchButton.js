import React from 'react';

const MatchButton = ({ color, name, onClick }) => {
    return <button className={`btn ${color} lighten-4 blue-text text-darken-4`} onClick={onClick}>{name}</button>
}

export default MatchButton;
