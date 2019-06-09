import React from 'react';

export default function counter(props) {
    return (
        <div className="px-2">
            Score: {props.score} | Top Score: {props.topScore}
        </div>
    );
}