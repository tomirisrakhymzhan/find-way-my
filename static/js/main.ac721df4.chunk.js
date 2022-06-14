(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(28)},18:function(e,t,n){},20:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),i=n(5),o=n.n(i),l=n(4),c=n(3);function s(e){var t=a.a.useState(!1),n=Object(l.a)(t,2),r=n[0],i=n[1],o=e.handleDFSMaze,s=e.handleRandomMaze;return a.a.createElement(c.b,{isOpen:r,toggle:function(){i(!r)}},a.a.createElement(c.f,{color:"primary",caret:!0},"Generate Maze"),a.a.createElement(c.e,null,a.a.createElement(c.d,{onClick:function(){o()}},"Depth-First-Search"),a.a.createElement(c.d,{onClick:function(){s()}},"Random Maze")))}function u(e){var t=a.a.useState(!1),n=Object(l.a)(t,2),r=n[0],i=n[1],o=e.handleBFSPathfinder,s=e.handleDFSPathfinder,u=e.handleAstarPathfinder,f=e.handleDijkstraPathfinder;return a.a.createElement(c.b,{isOpen:r,toggle:function(){i(!r)}},a.a.createElement(c.f,{color:"primary",caret:!0},"Choose Pathfinding Algorithm"),a.a.createElement(c.e,null,a.a.createElement(c.d,{onClick:function(){o()}},"Breadth-First search"),a.a.createElement(c.d,{onClick:function(){s()}},"Depth-First search"),a.a.createElement(c.d,{onClick:function(){f()}},"Dijkstra search"),a.a.createElement(c.d,{onClick:function(){u()}},"A star search")))}n(18);function f(e){var t=e.x,n=e.y,r=e.isFinish,i=e.isStart,o=e.isBaseWall,l=e.onMouseDown,c=e.onMouseEnter,s=e.onMouseUp,u=e.onMouseLeave,f="cell"+(i?" isStart":"")+(r?" isFinish":"")+(o?" isBaseWall":"");return a.a.createElement("div",{id:"cell-".concat(n,"-").concat(t),className:f,onMouseDown:function(){return l(n,t)},onMouseEnter:function(){return c(n,t)},onMouseUp:function(){return s(n,t)},onMouseLeave:function(){return u(n,t)}})}function d(e){var t=e.options,n=e.header,r=a.a.useState(!1),i=Object(l.a)(r,2),o=i[0],s=i[1],u=e.handleDropdown;return a.a.createElement(c.b,{isOpen:o,toggle:function(){s(!o)}},a.a.createElement(c.f,{color:"primary",caret:!0},n),a.a.createElement(c.e,null,t.map(function(e,t){return a.a.createElement(c.d,{key:t,onClick:function(){return u({header:n,option:e})}},e)})))}var h=function(e,t,n){return{x:t,y:e,isWallToDestroy:!1,isBaseWall:!1,isStart:!1,isFinish:!1,visited:!1,previousNode:null,distance:1/0,distanceToFinishNode:Math.abs(n.y-e)+Math.abs(n.x-t)}},m=function(e,t,n,r){for(var a=[],i=0;i<e;i++){a.push([]);for(var o=0;o<t;o++)a[i][o]=h(i,o,r)}return a[n.y][n.x].isStart=!0,a[r.y][r.x].isFinish=!0,a};function v(e,t){var n=[[e.y-2,e.x],[e.y+2,e.x],[e.y,e.x+2],[e.y,e.x-2]].filter(function(e){return e[0]>0&&e[1]>0&&e[0]<t.length&&e[1]<t[0].length&&!t[e[0]][e[1]].visited});if(n.length){var r=n[Math.floor(Math.random()*n.length)];return t[r[0]][r[1]]}return null}function y(e,t,n){var r=e.x-t.x;if(2===r)return n[t.y][t.x+1].isWallToDestroy=!0,n[t.y][t.x+1];if(-2===r)return n[t.y][t.x-1].isWallToDestroy=!0,n[t.y][t.x-1];var a=e.y-t.y;return 2===a?(n[t.y+1][t.x].isWallToDestroy=!0,n[t.y+1][t.x]):-2===a?(n[t.y-1][t.x].isWallToDestroy=!0,n[t.y-1][t.x]):void 0}var p={createInitialBoardForDFS:function(e,t,n,r){for(var a=[],i=0;i<e;i++)if(a.push([]),i%2===0)for(var o=0;o<t;o++)a[i][o]=h(i,o,r),a[i][o].isBaseWall=!0;else for(var l=0;l<t;l++)l%2===0?(a[i][l]=h(i,l,r),a[i][l].isBaseWall=!0):a[i][l]=h(i,l,r);return a[n.y][n.x].isStart=!0,a[n.y][n.x].isBaseWall=!1,a[r.y][r.x].isFinish=!0,a[r.y][r.x].isBaseWall=!1,a},getVisitedCellsFromDFS:function(e){for(var t=e[1][1],n=[t],r=[];n.length;){t.visited=!0,r.push(t);var a=v(t,e);if(null!=a){a.visited=!0;var i=y(t,a,e);r.push(i),n.push(t),t=a}else t=n.pop()}return r.push("end"),r}},g=function(e,t,n){for(var r=[],a=[t];a.length;){var i=a.shift();if(i===n)return r;if(!i.isBaseWall&&(i.isStart||!i.visited)){i.visited=!0,r.push(i);var o=i.x,l=i.y,c=void 0;l>0&&((c=e[l-1][o]).visited||(c.previousNode=i,a.push(c))),l<e.length-1&&((c=e[l+1][o]).visited||(c.previousNode=i,a.push(c))),o>0&&((c=e[l][o-1]).visited||(c.previousNode=i,a.push(c))),o<e[0].length-1&&((c=e[l][o+1]).visited||(c.previousNode=i,a.push(c)))}}};function b(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){l=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(l)throw i}}}}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function E(e){var t,n=[],r=b(e);try{for(r.s();!(t=r.n()).done;){var a,i=b(t.value);try{for(i.s();!(a=i.n()).done;){var o=a.value;n.push(o)}}catch(l){i.e(l)}finally{i.f()}}}catch(l){r.e(l)}finally{r.f()}return n}function x(e){e.sort(function(e,t){return e.distance-t.distance})}function B(e,t){var n=[],r=e.y,a=e.x;return r>0&&n.push(t[r-1][a]),r<t.length-1&&n.push(t[r+1][a]),a>0&&n.push(t[r][a-1]),a<t[0].length-1&&n.push(t[r][a+1]),n.filter(function(e){return!e.visited})}function F(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){l=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(l)throw i}}}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var N=function(e,t,n){var r=[];t.distance=0;for(var a=E(e);a.length;){x(a);var i=a.shift();if(!i.isBaseWall){if(i.distance===1/0)return r;if(i.visited=!0,r.push(i),i===n)return r;j(i,e)}}};function j(e,t){var n,r=F(B(e,t));try{for(r.s();!(n=r.n()).done;){var a=n.value;a.distance=e.distance+1,a.previousNode=e}}catch(i){r.e(i)}finally{r.f()}}function A(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){l=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(l)throw i}}}}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var W=function(e,t,n){var r=[];t.distance=0;for(var a=E(e);a.length;){x(a);var i=a.shift();if(!i.isBaseWall){if(i.distance===1/0)return r;if(i.visited=!0,r.push(i),i===n)return r;O(i,e)}}};function O(e,t){var n,r=A(B(e,t));try{for(r.s();!(n=r.n()).done;){var a=n.value;a.distance=e.distance+1+a.distanceToFinishNode,a.previousNode=e}}catch(i){r.e(i)}finally{r.f()}}var D=function(e,t,n){for(var r=[],a=[t];a.length;){var i=a.pop();if(i===n)return r;if(!i.isBaseWall&&(i.isStart||!i.visited)){i.visited=!0,r.push(i);var o=i.x,l=i.y,c=void 0;l>0&&((c=e[l-1][o]).visited||(c.previousNode=i,a.push(c))),l<e.length-1&&((c=e[l+1][o]).visited||(c.previousNode=i,a.push(c))),o>0&&((c=e[l][o-1]).visited||(c.previousNode=i,a.push(c))),o<e[0].length-1&&((c=e[l][o+1]).visited||(c.previousNode=i,a.push(c)))}}};var M={createInitialBoardForRandomMaze:function(e,t,n,r){for(var a=[],i=0;i<e;i++){a.push([]);for(var o=0;o<t;o++)a[i][o]=h(i,o,r)}return a[n.y][n.x].isStart=!0,a[n.y][n.x].isBaseWall=!1,a[r.y][r.x].isFinish=!0,a[r.y][r.x].isBaseWall=!1,a},getRandomCells:function(e){for(var t=[],n=0;n<e.length;n++)for(var r=0;r<e[0].length;r++)!(Math.random()<.2)||e[n][r].isStart&&e[n][r].isFinish||(e[n][r].isBaseWall=!0,t.push(e[n][r]));return t.push("end"),t}};n(20);function T(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){l=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(l)throw i}}}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var C=31,P=21,z={x:1,y:0},R={x:C-2,y:P-1},G=function(){var e=Object(r.useState)("Speed: Extra-Fast"),t=Object(l.a)(e,2),n=t[0],i=t[1],o=Object(r.useState)("Maze Generator and Pathfinder Tool!"),h=Object(l.a)(o,2),v=h[0],y=h[1],b=Object(r.useState)(""),S=Object(l.a)(b,2),E=S[0],x=S[1],B=Object(r.useState)(""),F=Object(l.a)(B,2),w=F[0],j=F[1],A=Object(r.useState)(5),I=Object(l.a)(A,2),O=I[0],k=I[1],G=Object(r.useState)([]),U=Object(l.a)(G,2),$=U[0],L=U[1],J=Object(r.useState)(!1),V=Object(l.a)(J,2),q=V[0],H=V[1],K=Object(r.useRef)(null);function Q(e){var t,n=T(e);try{for(n.s();!(t=n.n()).done;){var r,a=T(t.value);try{for(a.s();!(r=a.n()).done;){var i=r.value;i.distance=1/0,i.visited&&(i.visited=!1,document.getElementById("cell-".concat(i.y,"-").concat(i.x)).className="cell"),i.isStart&&(document.getElementById("cell-".concat(i.y,"-").concat(i.x)).className="cell isStart"),i.isFinish&&(document.getElementById("cell-".concat(i.y,"-").concat(i.x)).className="cell isFinish"),i.isBaseWall&&i.isWallToDestroy&&(i.isBaseWall=!1),i.isBaseWall&&(document.getElementById("cell-".concat(i.y,"-").concat(i.x)).className="cell isBaseWall"),i.isWallToDestroy&&(document.getElementById("cell-".concat(i.y,"-").concat(i.x)).className="cell")}}catch(o){a.e(o)}finally{a.f()}}}catch(o){n.e(o)}finally{n.f()}}function X(e,t){for(var n=function(n){var r=e[n];n===e.length-1&&(K.current=setTimeout(function(){!function(e){for(var t=function(t){var n=e[t];K.current=setTimeout(function(){document.getElementById("cell-".concat(n.y,"-").concat(n.x)).className="cell shortestPath"},O*t)},n=1;n<e.length-1;n++)t(n)}(t),H(!1)},O*n)),K.current=setTimeout(function(){r.isStart||r.isFinish||(document.getElementById("cell-".concat(r.y,"-").concat(r.x)).className="cell visited")},O*n)},r=0;r<e.length;r++)n(r)}function Y(e){for(var t=0;t<e.length;t++)for(var n=0;n<e[0].length;n++)if(e[t][n].isStart)return e[t][n];return null}function Z(e){for(var t=0;t<e.length;t++)for(var n=0;n<e[0].length;n++)if(e[t][n].isFinish)return e[t][n];return null}function _(e){for(var t=[],n=e;null!==n;)t.unshift(n),n=n.previousNode;return t}function ee(){if(!q){for(var e=$.slice(),t=0;t<e.length;t++)for(var n=0;n<e[0].length;n++)t===z.y&&n===z.x?(e[t][n].isStart=!0,document.getElementById("cell-".concat(t,"-").concat(n)).className="cell isStart"):t===R.y&&n===R.x?(e[t][n].isFinish=!0,document.getElementById("cell-".concat(t,"-").concat(n)).className="cell isFinish"):(e[t][n].isStart=!1,e[t][n].isFinish=!1,e[t][n].isBaseWall=!1,e[t][n].visited=!1,e[t][n].isWallToDestroy=!1,e[t][n].previousNode=null,e[t][n].distance=1/0,document.getElementById("cell-".concat(t,"-").concat(n)).className="cell");L(e)}}return Object(r.useEffect)(function(){return function(){var e=m(P,C,z,R);L(e)}(),function(){K.current&&clearTimeout(K.current)}},[]),Object(r.useEffect)(function(){j(q?"Board is being visualized...":"")},[q]),$?a.a.createElement("div",{className:"board"},a.a.createElement(c.c,null,a.a.createElement(s,{handleDFSMaze:function(){if(!q){y("Maze Generation Algorithm : Depth-First-Search"),H(!0),ee();for(var e=p.createInitialBoardForDFS(P,C,z,R),t=p.getVisitedCellsFromDFS(e),n=0;n<e.length;n++)for(var r=0;r<e[0].length;r++)e[n][r].isBaseWall&&(document.getElementById("cell-".concat(n,"-").concat(r)).className="cell isBaseWall");L(e);for(var a=function(e){var n=t[e];"end"===t[e]&&(K.current=setTimeout(function(){document.getElementById("cell-".concat(Y($).y,"-").concat(Y($).x)).className="cell isStart",document.getElementById("cell-".concat(Z($).y,"-").concat(Z($).x)).className="cell isFinish",H(!1)},O*e)),K.current=setTimeout(function(){(n.visited||n.isWallToDestroy)&&(document.getElementById("cell-".concat(n.y,"-").concat(n.x)).className="cell visited")},O*e)},i=0;i<t.length;i++)a(i)}},handleRandomMaze:function(){if(!q){y("Maze Generation Algorithm : Randomized"),H(!0),ee();var e=M.createInitialBoardForRandomMaze(P,C,z,R),t=M.getRandomCells(e);L(e);for(var n=0;n<t.length;n++){var r=t[n];"end"===t[n]&&(document.getElementById("cell-".concat(Y($).y,"-").concat(Y($).x)).className="cell isStart",document.getElementById("cell-".concat(Z($).y,"-").concat(Z($).x)).className="cell isFinish",H(!1)),r.isBaseWall&&(document.getElementById("cell-".concat(r.y,"-").concat(r.x)).className="cell isBaseWall")}}}}),a.a.createElement(u,{handleBFSPathfinder:function(){if(!q){y("Pathfinding Algorithm : Breadth-First-Search"),x("Breadth-First-Search is unweighted and guarantees shortest path"),H(!0);var e=$.slice();Q(e);var t=g(e,Y(e),Z(e)),n=_(Z(e));if(void 0===t)return x("Path is not possible..."),void H(!1);L(e),X(t,n)}},handleDFSPathfinder:function(){if(!q){y("Pathfinding Algorithm : Depth-First-Search"),x("Depth-First-Search is unweighted and does NOT guarantee shortest path"),H(!0);var e=$.slice();Q(e);var t=D(e,Y(e),Z(e)),n=_(Z(e));if(void 0===t)return x("Path is not possible..."),void H(!1);L(e),X(t,n)}},handleAstarPathfinder:function(){if(!q){y("Pathfinding Algorithm : A-star"),x("A-star is weighted and guarantees shortest path"),H(!0);var e=$.slice();Q(e);var t=W(e,Y(e),Z(e)),n=_(Z(e));if(void 0===t)return x("Path is not possible..."),void H(!1);L(e),X(t,n)}},handleDijkstraPathfinder:function(){if(!q){y("Pathfinding Algorithm : Dijkstra"),x("Dijkstra is weighted and guarantees shortest path"),H(!0);var e=$.slice();Q(e);var t=N(e,Y(e),Z(e)),n=_(Z(e));if(void 0===t)return x("Path is not possible..."),void H(!1);L(e),X(t,n)}}}),a.a.createElement(d,{header:n,options:["Slow","Medium","Fast","Extra-Fast"],handleDropdown:function(e){i("Speed: ".concat(e.option)),"Slow"===e.option&&k(700),"Medium"===e.option&&k(50),"Fast"===e.option&&k(10),"Extra-Fast"===e.option&&k(5)}}),a.a.createElement(c.a,{className:q?"disabled":"",color:"info",onClick:function(){return ee()}},"Clear Grid")),a.a.createElement("h1",{id:"board-message-h1"},v),a.a.createElement("h4",null,E),a.a.createElement("h4",null,w),a.a.createElement("div",{className:"grid"},$.map(function(e,t){return a.a.createElement("div",{className:"grid-row",key:t},e.map(function(e,t){var n=e.x,r=e.y,i=e.isFinish,o=e.isStart,l=e.isBaseWall;return a.a.createElement(f,{key:t,x:n,y:r,isFinish:i,isStart:o,isBaseWall:l})}))}))):a.a.createElement("div",null,"Loading")};n(22),n(24),n(26);function U(){return a.a.createElement("footer",{className:"footer"},a.a.createElement("p",null,"Created with ",a.a.createElement("span",{role:"img","aria-label":"donut"},"\u2764\ufe0f")," by ",a.a.createElement("a",{href:"https://www.linkedin.com/in/tomiris-rakhymzhan/"}," Tomiris Rakhymzhan")),a.a.createElement("p",null,"See source code ",a.a.createElement("a",{href:"https://github.com/tomirisrakhymzhan/find-way-my"},"Github")))}var $=function(){return a.a.createElement("div",{className:"app"},a.a.createElement(G,null),a.a.createElement(U,null))};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement($,null)),document.getElementById("root"))}},[[11,2,1]]]);
//# sourceMappingURL=main.ac721df4.chunk.js.map