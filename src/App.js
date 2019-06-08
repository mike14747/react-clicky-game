import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Pic from './components/pic';
import pics from './pics.json';
import './appStyles.css';



function App() {
    return (
        <div>
            <Header></Header>
            <div className="d-flex flex-wrap justify-content-center mx-auto picContainer">
                {pics.map(pic => (
                    <Pic key={pic.id} image={pic.imageName} />
                ))}
            </div>
            <Footer></Footer>
        </div>
    );
}

export default App;