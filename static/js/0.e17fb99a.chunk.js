(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{37:function(e,n,t){"use strict";t.r(n);var a=t(11),i=t(0),r=t.n(i),c=function(e){var n=e.episode,t=e.isFav,a=e.toggleFavAction;return r.a.createElement("div",null,r.a.createElement("img",{src:n.image.medium,alt:"Rich and Morty- Episode: ".concat(n.name)}),r.a.createElement("div",null,r.a.createElement("h4",null,n.name)),r.a.createElement("section",null,r.a.createElement("div",null,r.a.createElement("p",null,"Season: ",n.season," | Number: ",n.number),r.a.createElement("button",{className:t?"btn btn-disabled":"btn",type:"submit",onClick:function(){return a(n)}},t?"Bookmarked":"Bookmark"))))};n.default=function(e){var n=e.episodes,t=e.favourites;return n.map((function(n){var i=t.find((function(e){return e.id===n.id})),l=Object(a.a)({},e);return l.isFav=i,l.episode=n,r.a.createElement("section",{className:"episode-box",key:n.id},r.a.createElement(c,l))}))}}}]);
//# sourceMappingURL=0.e17fb99a.chunk.js.map