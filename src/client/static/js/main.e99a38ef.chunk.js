(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,n,t){e.exports=t(38)},38:function(e,n,t){"use strict";t.r(n);var a=t(3),r=t.n(a),i=t(20);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=t(11),l=t(7),o=t(14),u=t.n(o),s=t(21),d=t(26),m=t(16),f=t(15),g=t(39);function p(){var e=Object(f.a)(["\n  mutation DeleteListing($id: ID!) {\n    deleteListing(id: $id) {\n      id\n      title\n    }\n  }\n"]);return p=function(){return e},e}function h(){var e=Object(f.a)(["\n  query Listings {\n    listings {\n      id\n      title\n      image\n      address\n      price\n      numOfGuests\n      numOfBeds\n      numOfBaths\n      rating\n    }\n  }\n"]);return h=function(){return e},e}var b=Object(c.b)(h()),v=Object(c.b)(p()),E=new c.a({uri:"/api"});Object(i.render)(r.a.createElement(l.a,{client:E},r.a.createElement((function(e){var n=e.title,t=void 0===n?"Listings":n,i=Object(g.b)(b),c=i.data,l=i.refetch,o=i.loading,f=i.error,p=Object(g.a)(v),h=Object(m.a)(p,2),E=h[0],O=h[1],y=O.loading,w=O.error,j=c?c.listings:[],k=Object(a.useReducer)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;return"request"===n.type?Array.from(new Set([].concat(Object(d.a)(e),[n.payload]))):"cancel"===n.type?e.filter((function(e){return e!==n.payload})):e}),[]),L=Object(m.a)(k,2),x=L[0],B=L[1],q=function(e){return function(){B({type:"request",payload:e})}},C=function(e){return Object(s.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,E({variables:{id:e}});case 2:B({type:"cancel",payload:e}),l();case 4:case"end":return n.stop()}}),n)})))};if(o)return r.a.createElement("h2",null,"Loading ...");if(f)return r.a.createElement("h2",null,"Something went wrong \ud83d\udc80");var D=y?r.a.createElement("h4",null,"Deleting ..."):null,$=w?r.a.createElement("h4",null,"Err!"):null;return r.a.createElement("div",null,r.a.createElement("h2",null,t),j.length>0&&r.a.createElement("ul",null,j.map((function(e){return r.a.createElement("li",{key:e.id},e.title," ",r.a.createElement("div",null,-1!==x.indexOf(e.id)?r.a.createElement("span",null,r.a.createElement("button",{onClick:(n=e.id,function(){B({type:"cancel",payload:n})})},"cancel"),r.a.createElement("button",{onClick:C(e.id)},"OK")):r.a.createElement("button",{onClick:q(e.id)},"delete")));var n}))),D,$)}),{title:"THouse Listings"})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.e99a38ef.chunk.js.map