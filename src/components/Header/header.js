import React from 'react';
import Counter from '../counter';
import './headerStyles.css';

export default function Header(props) {
    return (
        <nav className="sticky-top navStyles py-2">
            <ul className="d-block m-0 p-0">
                <li className="h4 brandAlign liStyles py-2">19th Century Presidents</li>
                <li className="h5 text-center liStyles py-2">{props.message}</li>
                <li className="h4 counterAlign liStyles py-2"><Counter score={props.score} topScore={props.topScore} /></li>
            </ul>
        </nav>
    );
}