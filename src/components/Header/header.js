import React from 'react';
import Counter from '../counter';
import './headerStyles.css';

export default function Header(props) {
    return (
        <nav className="mb-4 sticky-top navStyles">
            <ul className="d-block m-0 p-0">
                <li className="h4 brandAlign liStyles">19th Century Presidents</li>
                <li className="h5 text-center liStyles">{props.message}</li>
                <li className="h4 counterAlign liStyles"><Counter score={props.score} topScore={props.topScore} /></li>
            </ul>
        </nav>
    );
}