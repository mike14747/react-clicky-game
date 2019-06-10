import React from 'react';

export default function counter(props) {
    return (
        <div>
            <span class="badge badge-secondary mx-2 py-2">Score: {props.score}</span>
            <span class="badge badge-secondary mx-2 py-2">Top Score: {props.topScore}</span>
        </div>
    );
}