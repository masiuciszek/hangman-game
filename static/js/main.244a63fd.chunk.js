(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,n,t){e.exports=t.p+"static/media/bg.af4824cd.png"},19:function(e,n,t){e.exports=t(26)},26:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(14),i=t.n(o),c=t(5),u=t(2),l=t(1),s=t(3),d={haveUsed:!1,isWinner:!1,resentTypedKey:""},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"TOGGLE_USED_LETTER":return Object(s.a)({},e,{haveUsed:!e.haveUsed});case"SET_IS_WINNER":return Object(s.a)({},e,{isWinner:!e.isWinner});case"SET_RESENT_TYPED_LETTER":return Object(s.a)({},e,{resentTypedKey:n.payload});default:throw new Error("Unable Action Type")}},f=r.createContext(void 0),p=r.createContext(void 0),h=function(e){var n=e.children,t=r.useReducer(m,d),a=Object(c.a)(t,2),o=a[0],i=a[1];return r.createElement(f.Provider,{value:o},r.createElement(p.Provider,{value:i},n))},E=function(){var e=r.useContext(p);if(void 0===e)throw new Error("MessageDispatch need to bee wrapped inside MessageProvider");return e},g=t(6),x={gameWord:"",usedLetters:[],wrongLetters:[],isWinner:!1,isLoser:!1},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_GAME_WORD":return Object(s.a)({},e,{gameWord:n.payload});case"SET_CORRECT_WORD":return Object(s.a)({},e,{usedLetters:[].concat(Object(g.a)(e.usedLetters),[n.payload])});case"SET_WRONG_WORD":return Object(s.a)({},e,{wrongLetters:[].concat(Object(g.a)(e.wrongLetters),[n.payload])});case"CLEAR_GAME_WORD":return Object(s.a)({},e,{gameWord:"",isWinner:!1,isLoser:!1});case"SET_WINNER":return Object(s.a)({},e,{isWinner:!e.isWinner});case"CLEAR_USED_WORD_LIST":return Object(s.a)({},e,{usedLetters:[],isWinner:!1,isLoser:!1});case"CLEAR_WRONG_WORD_LIST":return Object(s.a)({},e,{wrongLetters:[],isWinner:!1,isLoser:!1});case"SET_LOOSER":return Object(s.a)({},e,{isLoser:!0});default:throw new Error("Unable Action Type")}},v=r.createContext(void 0),y=r.createContext(void 0),w=function(e){var n=e.children,t=r.useReducer(b,x),a=Object(c.a)(t,2),o=a[0],i=a[1];return r.createElement(v.Provider,{value:o},r.createElement(y.Provider,{value:i},n))},O=function(){var e=r.useContext(v);if(void 0===e)throw new Error("WordState need to bee wrapped inside WordProvider");return e},_=function(){var e=r.useContext(y);if(void 0===e)throw new Error("WordState need to bee wrapped inside WordProvider");return e},R={appSize:"10px",colors:{primary:"rgba(21,101,192,1)",text:"#fff",mainBg:"rgba(38,50,56,.8)",danger:"#E53935",warning:"#FFEE58",primaryShadow:"rgba(21,101,192,.7)",secondaryShadow:"rgba(0,0,0,0.5)"},size:{h1:"50px",h2:"40px",h3:"30px",h4:"27px",h5:"22px",p:"18px",a:"16px",maxWidth:"1200px"},shadow:{elevations:["box-shadow: inset 0 7px 9px -7px rgba(0,0,0, 0.7)","box-shadow: 0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0, 0.24)","box-shadow: 0 3px 6px rgba(0,0,0, 0.16), 0 3px 6px rgba(0,0,0, 0.23)","box-shadow: 3px 2px rgba(42, 43, 49,.3)"]},transition:{mainTransition:"all .3s linear",secondaryTransition:"all 1s ease",quickTransition:"all 200ms ease-in-out"}},L={appSize:"10px",colors:{primary:"rgba(220,231,117,1)",text:"#333",mainBg:"#fff",danger:"#E53935",warning:"#FFEE58",primaryShadow:"rgba(220,231,117,.7))",secondaryShadow:"rgba(0,0,0,0.5)"},size:{h1:"50px",h2:"40px",h3:"30px",h4:"27px",h5:"22px",p:"18px",a:"16px",maxWidth:"1200px"},shadow:{elevations:["box-shadow: inset 0 7px 9px -7px rgba(0,0,0, 0.7)","box-shadow: 0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0, 0.24)","box-shadow: 0 3px 6px rgba(0,0,0, 0.16), 0 3px 6px rgba(0,0,0, 0.23)","box-shadow: 3px 2px rgba(42, 43, 49,.3)"]},transition:{mainTransition:"all .3s linear",secondaryTransition:"all 1s ease",quickTransition:"all 200ms ease-in-out"}};function S(){var e=Object(u.a)(["\n  *::before,\n  *::after\n  ,* {\n      margin: 0;\n      padding: 0;\n      box-sizing: inherit;\n    }\n\n    html {\n      font-size: ",";\n      font-family: 'Montserrat', sans-serif;\n    }\n\n    body {\n      box-sizing: border-box;\n      font-family: 'Montserrat', sans-serif;\n      padding: 0;\n      margin: 0;\n      line-height: 2;\n    }\n\n    ul{\n      list-style:none;\n    }\n\n    a {\n    text-decoration: none;\n    color: ",";\n    font-size: ",";\n    }\n    h1{\n      font-size: ",";\n    }\n    h2{\n      font-size: ",";\n    }\n    h3{\n      font-size: ",";\n    }\n    p{\n      font-size: ",";\n    }\n\n"]);return S=function(){return e},e}var W=Object(l.b)(S(),(function(e){return e.theme.appSize}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.size.a}),(function(e){return e.theme.size.h1}),(function(e){return e.theme.size.h2}),(function(e){return e.theme.size.h3}),(function(e){return e.theme.size.p}));function T(){var e=Object(u.a)(["\n    display: flex;\n    flex-direction: ",";\n    justify-content: ",";\n    align-items: ",";\n  "]);return T=function(){return e},e}function j(){var e=Object(u.a)(["\n    @media (min-width: ","em) {\n      ","\n    }\n  "]);return j=function(){return e},e}function k(){var e=Object(u.a)(["\n    @media (max-width: ","em) {\n      ","\n    }\n  "]);return k=function(){return e},e}var D={small:500,medium:960,large:1140,xLarge:1400},C=function(e){return Object.keys(e)},N=(C(D).reduce((function(e,n){return e[n]=function(){return Object(l.c)(k(),D[n]/16,l.c.apply(void 0,arguments))},e}),{}),C(D).reduce((function(e,n){return e[n]=function(){return Object(l.c)(j(),D[n]/16,l.c.apply(void 0,arguments))},e}),{}),function(e,n,t){return Object(l.c)(T(),e,n,t)}),A=t(4);function G(e){return e[Math.floor(Math.random()*e.length)]}var z=["javascript","haskell","golang","elda","lisp","reason"];function I(){var e=Object(u.a)(["\n  display: block;\n  margin: 1.5rem auto;\n  font-size: 1.6rem;\n  width: 18rem;\n  border: 2px solid ",";\n  background: transparent;\n  padding: 0.5rem 0.8rem;\n  border-radius: 1rem;\n  ",";\n  cursor: pointer;\n  color: ",";\n  transition: ",";\n  &:hover {\n    background: ",";\n    ",";\n    text-transform: capitalize;\n    width: 17rem;\n  }\n  &:active {\n    position: relative;\n    top: 8px;\n  }\n"]);return I=function(){return e},e}var M=l.d.button(I(),(function(e){return e.theme.colors.text}),(function(e){return e.theme.shadow.elevations[2]}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.transition.mainTransition}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.shadow.elevations[1]}));function U(){var e=Object(u.a)(["\n  border: 2px solid ",";\n  background: ",";\n  border-radius: 1rem;\n  width: 70%;\n  height: 4rem;\n  display: block;\n  font-size: 2rem;\n  cursor: pointer;\n  padding: 0 0.3rem;\n"]);return U=function(){return e},e}function P(){var e=Object(u.a)(["\n  ",";\n  padding: 0 3rem;\n  .slide {\n    width: 15rem;\n  }\n"]);return P=function(){return e},e}function B(){var e=Object(u.a)(["\n  color: ",";\n  border: 2px solid ",";\n  margin: 0;\n  &:hover {\n    color: ",";\n  }\n"]);return B=function(){return e},e}function F(){var e=Object(u.a)(["\n  ",";\n\n  flex: 1;\n"]);return F=function(){return e},e}var Y=l.d.ul(F(),N("row","space-between","center")),K=Object(l.d)(M)(B(),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.text})),q=l.d.div(P(),N("row","space-between","center")),J=Object(l.d)(A.a.div)(U(),(function(e){return e.theme.colors.secondaryShadow}),(function(e){return e.theme.colors.secondaryShadow})),H=function(e){var n=e.isDark,t=e.setIsDark,a=O().gameWord,o=_(),i=Object(A.b)({x:n?0:40,textAlign:n?"left":"right"}),c=i.x,u=i.textAlign;return r.createElement(Y,null,a?r.createElement(K,{onClick:function(){o({type:"CLEAR_GAME_WORD"}),o({type:"CLEAR_USED_WORD_LIST"}),o({type:"CLEAR_WRONG_WORD_LIST"})}},"New Game"):r.createElement(K,{onClick:function(){var e=G(z);o({type:"SET_GAME_WORD",payload:e})}},"Start Game"),r.createElement(q,{isDark:n,onClick:function(){t(!n),localStorage.setItem("isDark",String(!n))}},r.createElement("div",{className:"slide"},r.createElement(J,{style:{transform:c.interpolate((function(e){return"translate3d(".concat(1*e,"px, 0, 0)")})),textAlign:u}},n?" \ud83c\udf1e":"\ud83c\udf12"))))};function $(){var e=Object(u.a)(["\n  padding: 2rem 1rem;\n  background: ",";\n  height: calc(12rem - 2rem);\n  ",";\n  .title {\n    flex: 1;\n  }\n"]);return $=function(){return e},e}var Q=Object(l.d)((function(e){var n=e.className,t=e.isDark,a=e.setIsDark;return r.createElement("nav",{className:n},r.createElement("div",{className:"title"},r.createElement("h3",null,"Hangman Game")),r.createElement(H,{isDark:t,setIsDark:a}))}))($(),(function(e){return e.theme.colors.mainBg}),N("row","space-evenly","center"));function V(){var e=Object(u.a)(["\n  margin: 0 auto;\n  max-width: ",";\n"]);return V=function(){return e},e}function X(){var e=Object(u.a)(["\n  background: ",";\n  color: ",";\n  height: 100vh;\n"]);return X=function(){return e},e}var Z=l.d.div(X(),(function(e){return e.theme.colors.mainBg}),(function(e){return e.theme.colors.text})),ee=l.d.main(V(),(function(e){return e.theme.size.maxWidth})),ne=function(e){var n=e.children,t=localStorage.getItem("isDark"),a=r.useState("true"===t),o=Object(c.a)(a,2),i=o[0],u=o[1];return r.createElement(l.a,{theme:i?L:R},r.createElement(w,null,r.createElement(h,null,r.createElement(W,null),r.createElement(Q,{className:"navbar",isDark:i,setIsDark:u}),r.createElement(Z,null,r.createElement(ee,null,n)))))},te=function(){var e=r.useState(""),n=Object(c.a)(e,2),t=n[0],a=n[1],o=function(e){e.keyCode>=65&&e.keyCode<=90&&a(e.key)};return r.useEffect((function(){return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}})),t};function re(){var e=Object(u.a)(["\n  width: 200;\n  height: 250;\n\n  fill: transparent;\n  stroke: ",";\n  stroke-width: 4px;\n  stroke-linecap: round;\n  transition: ",";\n  .figure-part {\n    transition: ",";\n  }\n"]);return re=function(){return e},e}var ae=l.d.svg(re(),(function(e){return e.theme.colors.text}),(function(e){return e.theme.transition.secondaryTransition}),(function(e){return e.theme.transition.secondaryTransition})),oe=function(){var e=O().wrongLetters,n=_();return r.useEffect((function(){console.log(e.length),6===e.length&&n({type:"SET_LOOSER"})}),[n,e]),r.createElement(ae,{width:"200",height:"250"},r.createElement("line",{x1:"60",y1:"20",x2:"140",y2:"20"}),r.createElement("line",{x1:"140",y1:"20",x2:"140",y2:"50"}),r.createElement("line",{x1:"60",y1:"20",x2:"60",y2:"240"}),r.createElement("line",{x1:"20",y1:"240",x2:"100",y2:"240"}),e.length>=1&&r.createElement("circle",{cx:"140",cy:"70",r:"20",className:"figure-part"}),e.length>=2&&r.createElement("line",{x1:"140",y1:"90",x2:"140",y2:"150",className:"figure-part figure-part-two"}),e.length>=3&&r.createElement("line",{x1:"140",y1:"90",x2:"90",y2:"120",className:"figure-part figure-part-three"}),e.length>=4&&r.createElement("line",{x1:"140",y1:"90",x2:"190",y2:"120",className:"figure-part figure-part-four"}),e.length>=5&&r.createElement("line",{x1:"140",y1:"150",x2:"120",y2:"180",className:"figure-part figure-part-five"}),e.length>=6&&r.createElement("line",{x1:"140",y1:"150",x2:"160",y2:"180",className:"figure-part figure-part-six"}))};function ie(){var e=Object(u.a)(["\n  background: ",";\n  padding: 2rem;\n  position: fixed;\n  top: 0;\n  /* transform: translate(-50%, -50%); */\n  padding: 3rem 5rem;\n  margin: 2rem auto;\n"]);return ie=function(){return e},e}var ce=Object(l.d)(A.a.section)(ie(),(function(e){return e.theme.colors.secondaryShadow})),ue=function(){var e=O().wrongLetters,n=E(),t=function(){var e=r.useContext(f);if(void 0===e)throw new Error("MessageState need to bee wrapped inside MessageProvider");return e}(),a=t.haveUsed,o=t.resentTypedKey;r.useEffect((function(){e.includes(o)&&(n({type:"TOGGLE_USED_LETTER"}),setTimeout((function(){n({type:"TOGGLE_USED_LETTER"})}),2300))}),[n,o,e]);var i=Object(A.b)({x:a?0:-1e3,opacity:a?1:0}),c=i.x,u=i.opacity;return r.createElement(ce,{style:{transform:c.interpolate((function(e){return"translate3d(".concat(1*e,"%,0,0)")})),opacity:u}},r.createElement("h3",null,o," is a wrong letter !!! \ud83d\ude02\ud83d\ude31"))};function le(){var e=Object(u.a)(["\n  background: ",";\n  padding: 2rem 4rem;\n  height: 50%;\n  width: 50%;\n  ",";\n  box-shadow: "," 2px 3px 5px;\n  border-radius: 0.3rem;\n"]);return le=function(){return e},e}function se(){var e=Object(u.a)(["\n  background: ",";\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  ",";\n"]);return se=function(){return e},e}var de=Object(l.d)(A.a.section)(se(),(function(e){return e.theme.colors.primaryShadow}),N("row","center","center")),me=l.d.div(le(),(function(e){return e.theme.colors.mainBg}),N("column","center","center"),(function(e){return e.theme.colors.primary})),fe=function(){var e=O(),n=e.isWinner,t=e.isLoser,a=_(),o=Object(A.b)({y:n?0:100,x:t?0:100}),i=o.y,c=o.x;return r.useEffect((function(){return function(){}}),[t,n]),r.createElement(r.Fragment,null,n&&r.createElement(de,{style:{transform:i.interpolate((function(e){return"translate3d(0,".concat(-1*e,"%,0)")}))}},r.createElement(me,null,r.createElement("h1",null," Winner "),r.createElement("h3",null,"You win the game"),r.createElement(M,{onClick:function(){a({type:"CLEAR_GAME_WORD"}),a({type:"CLEAR_USED_WORD_LIST"}),a({type:"CLEAR_WRONG_WORD_LIST"})}},"New game?"))),t&&r.createElement(de,{style:{transform:c.interpolate((function(e){return"translate3d(0,".concat(-1*e,"%,0)")}))}},r.createElement(me,null,r.createElement("h1",null," Looser "),r.createElement("h3",null,"You lose the game"),r.createElement(M,{onClick:function(){a({type:"CLEAR_GAME_WORD"}),a({type:"CLEAR_USED_WORD_LIST"}),a({type:"CLEAR_WRONG_WORD_LIST"})}},"New game?"))))};function pe(){var e=Object(u.a)(["\n  height: 100%;\n  position: relative;\n  margin: 0 auto;\n  padding: 3rem 1rem;\n"]);return pe=function(){return e},e}function he(){var e=Object(u.a)(["\n  max-width: 1100px;\n  margin: 0 auto;\n"]);return he=function(){return e},e}l.d.div(he());var Ee=l.d.div(pe()),ge=t(18),xe=t.n(ge);function be(){var e=Object(u.a)(["\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 30vmax;\n  margin: 0 auto;\n  border: 0;\n  h4 {\n    font-size: 3rem;\n  }\n"]);return be=function(){return e},e}function ve(){var e=Object(u.a)(["\n  display: inline-block;\n  position: relative;\n  font-size: 1.6rem;\n  color: ",";\n  padding: 0.5rem;\n  margin: 0.5rem 1.5rem;\n  line-height: 3em;\n  &:after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    padding: 0.2rem;\n    height: 0.2rem;\n    background: ",";\n  }\n"]);return ve=function(){return e},e}function ye(){var e=Object(u.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 20vmax;\n  margin: 0 auto;\n  border: 0;\n  h4 {\n    font-size: 3rem;\n  }\n"]);return ye=function(){return e},e}function we(){var e=Object(u.a)(["\n  padding: 2rem;\n  ",";\n  width: 80%;\n  margin: 1rem auto;\n  li {\n    padding: 1.5rem;\n    border: 2px solid ",";\n    background-image: url(",");\n  }\n"]);return we=function(){return e},e}function Oe(){var e=Object(u.a)(["\n  padding: 2rem 1rem;\n  width: 100%;\n  margin: 12rem auto;\n  text-align: center;\n"]);return Oe=function(){return e},e}var _e=l.d.div(Oe()),Re=l.d.ul(we(),N("row","space-evenly","center"),(function(e){return e.theme.colors.text}),xe.a),Le=Object(l.d)(_e)(ye()),Se=l.d.span(ve(),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),We=Object(l.d)(_e)(be()),Te=function(){var e=O(),n=e.gameWord,t=e.usedLetters;return r.createElement(We,null,t.length>0&&r.createElement("h4",null,"Used Letters"),t.map((function(e,a){return n.split("").includes(e)&&t.includes(e)?r.createElement(Se,{key:a},e):null})))},je=function(){var e=O(),n=e.gameWord,t=e.usedLetters,a=_();return r.useEffect((function(){(function(e,n){return!!e&&e.split("").filter((function(e){return n.includes(e)})).join("")===e})(n,t)&&a({type:"SET_WINNER"})}),[a,n,t]),r.createElement(_e,null,r.createElement(Re,null,n.split("").map((function(e,n){return r.createElement("li",{key:n},r.createElement(Se,null,t.includes(e)?e:""))}))))},ke=function(){var e=O().wrongLetters,n=_(),t=e.filter((function(n,t){return e.indexOf(n)===t}));return r.useEffect((function(){e.length>=6&&n({type:"SET_LOOSER"})}),[n,e]),r.createElement(Le,null,e.length>0&&r.createElement("h4",null,"Wrong-words "),t.map((function(e,n){return r.createElement(Se,{key:e},e)})))},De=function(){var e=O(),n=e.gameWord,t=e.wrongLetters,a=e.usedLetters,o=te(),i=_(),c=E();return r.useEffect((function(){n.includes(o)?a.includes(o)||i({type:"SET_CORRECT_WORD",payload:o}):t.includes(o)||(i({type:"SET_WRONG_WORD",payload:o}),c({type:"SET_RESENT_TYPED_LETTER",payload:o}))}),[o]),r.createElement(Ee,null,r.createElement(oe,null),r.createElement(Te,null),r.createElement(ke,null),r.createElement(je,null),!n&&r.createElement(M,{"data-testid":"startgame",onClick:function(){var e=G(z);i({type:"SET_GAME_WORD",payload:e})}},"Start Game"),n&&r.createElement(M,{"data-testid":"newgame",onClick:function(){i({type:"CLEAR_GAME_WORD"}),i({type:"CLEAR_USED_WORD_LIST"}),i({type:"CLEAR_WRONG_WORD_LIST"})}},"New Game"),r.createElement(ue,null),r.createElement(fe,null))};var Ce=function(){return a.a.createElement(ne,null,a.a.createElement(De,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.244a63fd.chunk.js.map