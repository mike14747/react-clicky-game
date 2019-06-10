# 19th Century Presidents Clicky Game

## What the project does:

* This project uses React JS framework to create a clicky game with a 19th century presidents theme.

---

## How users can get started with the project:

* Clone the GitHub repo and deploy 'as is' wherever you'd like.

---

## About the code in this project:

This project use 5 components which are pieced together in **src/App.js** (which is the only file using **State**), then are rendered through **src/index.js** to the root id element in **public/index.html**... the main (and only) page. The default State of App.js is as follows:
```
state = {
    score: 0,
    topScore: 0,
    message: "Welcome to my clicky game!",
    pics
};
```

The 5 components are:
* header.js
* counter.js
* instructions.js
* pic.js
* footer.js
<br />

Each of the components reside in the **src/components** folder. Three of the components (header, instructions and pic) have their own subfolders within the components folder because they also have associated css files and/or images they need to be grouped with.
<br />

The president pics are stored in the **src/pics.json**, imported into App.js, then mapped into App.js' **State** after shuffling. This process is repeated with every click or page load.
<br />

I used an ES6 version of the classic Fisher-Yates shuffle to randomly display the president pics upon each click or page load.
```
shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
```

At the end of every game... whether that be because of an incorrect click or 12 consecutive successful clicks... the **resetGame()** function is called. That function resets the State of score and the pics array, but not topScore or message.
<br />

**Props** are passed from App.js to the header and pic components. The header component then redirects a couple of the props to one of its children, the **counter** component.

---

## This project was created and is maintained by:

* Mike Gullo
* Live version: 
* This project's github repo: https://github.com/mike14747/react-clicky-game
* Me on github: https://github.com/mike14747
* Contact me at: mike14747@oh.rr.com for more info about this project.