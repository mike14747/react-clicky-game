(this["webpackJsonpreact-clicky-game"]=this["webpackJsonpreact-clicky-game"]||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Buchanon","imageName":"/images/Buchanan.jpg","clicked":false},{"id":2,"name":"Cleveland","imageName":"/images/Cleveland.jpg","clicked":false},{"id":3,"name":"Garfield","imageName":"/images/Garfield.jpg","clicked":false},{"id":4,"name":"Grant","imageName":"/images/Grant.jpg","clicked":false},{"id":5,"name":"Harrison","imageName":"/images/Harrison.jpg","clicked":false},{"id":6,"name":"Hayes","imageName":"/images/Hayes.jpg","clicked":false},{"id":7,"name":"Adams","imageName":"/images/JQA.jpg","clicked":false},{"id":8,"name":"Madison","imageName":"/images/Madison.jpg","clicked":false},{"id":9,"name":"McKinley","imageName":"/images/Mckinley.jpg","clicked":false},{"id":10,"name":"Monroe","imageName":"/images/Monroe.jpg","clicked":false},{"id":11,"name":"Polk","imageName":"/images/Polk.jpg","clicked":false},{"id":12,"name":"Van Buren","imageName":"/images/Van_Buren.jpg","clicked":false}]')},,,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(2),s=t.n(i),r=t(6),l=t(3),o=t(4),m=t(8),d=t(7);function u(e){return c.a.createElement("div",null,c.a.createElement("span",{className:"badge badge-secondary mx-2 py-2"},"Score: ",e.score),c.a.createElement("span",{className:"badge badge-secondary mx-2 py-2"},"Top Score: ",e.topScore))}t(14);function g(e){return c.a.createElement("nav",{className:"sticky-top navStyles py-2"},c.a.createElement("ul",{className:"d-block m-0 p-0"},c.a.createElement("li",{className:"h4 brandAlign liStyles py-2"},"19th Century Presidents"),c.a.createElement("li",{className:"h5 text-center liStyles py-2"},e.message),c.a.createElement("li",{className:"h4 counterAlign liStyles py-2"},c.a.createElement(u,{score:e.score,topScore:e.topScore}))))}t(15);function p(){return c.a.createElement("div",{className:"instFont instructionsDiv p-3 mb-4"},"Click on each 19th century president sequentially, without clicking on any of them twice, to win the game!")}function f(){return c.a.createElement("footer",{style:{backgroundColor:"#eeeeee",borderTop:"1px solid #999999",color:"#333333",fontSize:"12px"},className:"fixed-bottom d-flex align-items-center justify-content-center p-2 mt-4"},"Copyright \xa9 2019 mike14747")}t(16);function k(e){return c.a.createElement("div",{className:"myCol imgDiv"},c.a.createElement("img",{className:"imgStyles",alt:e.alt,title:e.alt,src:e.image,onClick:function(){return e.picClicked(e.id)}}))}var y=t(5),h=(t(17),t(18),function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=a.call.apply(a,[this].concat(c))).state={score:0,topScore:0,message:"Click any president to start!",pics:y},e.shuffleArray=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}return e},e.incrementScore=function(){e.setState({score:e.state.score+1},(function(){12===e.state.score?e.setState({message:"You've won the Game!"},(function(){e.restartGame()})):1===e.state.score?e.setState({message:"The Game has Begun!"}):e.setState({message:"Correct Guess!"}),e.state.score>e.state.topScore&&e.setState({topScore:e.state.score})}))},e.picClicked=function(a){e.state.pics.filter((function(e){return e.id===a}))[0].clicked?e.badClick():e.markClicked(a)},e.markClicked=function(a){e.incrementScore();var t=e.state.pics.findIndex((function(e){return e.id===a})),n=Object(r.a)(e.state.pics);n[t].clicked=!0,e.setState({pics:n})},e.restartGame=function(){e.setState({score:0});var a=e.state.pics.map((function(e){var a=e;return a.clicked=!1,a}));e.setState({pics:a})},e.badClick=function(){e.setState({message:"Incorrect Guess!"},(function(){e.restartGame()}))},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(g,{message:this.state.message,score:this.state.score,topScore:this.state.topScore}),c.a.createElement(p,null),c.a.createElement("div",{className:"d-flex flex-wrap justify-content-center mx-auto picContainer"},this.shuffleArray(this.state.pics).map((function(a){return c.a.createElement(k,{key:a.id,id:a.id,image:a.imageName,alt:a.name,picClicked:e.picClicked})}))),c.a.createElement(f,null))}}]),t}(n.Component));s.a.render(c.a.createElement(h,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.1cfc8380.chunk.js.map