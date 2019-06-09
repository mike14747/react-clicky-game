import React from 'react';
import './picStyles.css';

export default function Pic(props) {
    return (
        <div className="myCol imgDiv">
            <img className="imgStyles" alt={props.alt} title={props.alt} src={props.image} onClick={() => props.picClicked(props.id)} />
        </div>
    );
}