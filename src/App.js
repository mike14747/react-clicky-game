import React, { Component } from 'react';
import Header from './components/Header/header';
import Instructions from './components/Instructions/instructions';
import Footer from './components/footer';
import Pic from './components/Pic/pic';
import pics from './pics.json';
import './appStyles.css';

export default class App extends Component {
    state = {
        score: 0,
        topScore: 0,
        message: "Welcome to my clicky game!",
        pics
    };

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    incrementScore = () => {
        this.setState({ score: this.state.score + 1 }, () => {
            if (this.state.score === 12) {
                this.setState({ message: "You've won the Game!" }, () => {
                    this.restartGame();
                });
            } else {
                this.setState({ message: "Correct Guess!" });
            }
            if (this.state.score > this.state.topScore) {
                this.setState({ topScore: this.state.score });
            }
        });
    };

    picClicked = id => {
        const currentPics = this.state.pics;
        const justClicked = currentPics.filter(pic => pic.id === id);
        if (justClicked[0].clicked) {
            this.badClick();
        } else {
            this.markClicked(id);
        }
    };

    markClicked = id => {
        this.incrementScore();
        const index = this.state.pics.findIndex(currentPic => currentPic.id === id);
        const newPics = [...this.state.pics]
        newPics[index].clicked = true;
        this.setState({ pics: newPics });
    };

    restartGame = () => {
        this.setState({ score: 0 });
        const resetPics = this.state.pics.map(pic => {
            const tempPic = pic;
            tempPic.clicked = false;
            return tempPic;
        })
        this.setState({ pics: resetPics });
    };

    badClick = () => {
        this.setState({ message: "Incorrect Guess!" }, () => {
            this.restartGame();
        });
    };

    render() {
        return (
            <div>
                <Header message={this.state.message} score={this.state.score} topScore={this.state.topScore} />
                <Instructions />
                <div className="d-flex flex-wrap justify-content-center mx-auto picContainer">
                    {this.shuffleArray(pics).map(pic => (
                        <Pic key={pic.id} id={pic.id} image={pic.imageName} alt={pic.name} picClicked={this.picClicked} />
                    ))}
                </div>
                <Footer />
            </div>
        );
    }
}