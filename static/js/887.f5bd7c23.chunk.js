"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[887],{5120:function(n,e,t){t.d(e,{q:function(){return O}});var i,r,a,o,s,c,p,d=t(9439),l=t(1087),u=t(7689),x=t(7413),f=t(168),h=t(6444),g=h.default.div(i||(i=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  position: absolute;\n  width: 100%;\n  height: 300px;\n  top: 34px;\n  z-index: 1;\n  padding: 14px;\n  border: 2px solid black;\n  border-radius: 12px;\n  font-size: 14px;\n  color: black;\n  background-color: var(--text);\n  animation: toTop 250ms linear;\n  ::before {\n    content: '';\n    position: absolute;\n    width: 10px;\n    top: -13px;\n    right: 16px;\n    border-left: 20px solid transparent;\n    border-right: 2px solid transparent;\n    border-bottom: 12px solid var(--text);\n    animation: toTop 500ms ease-in-out;\n  }\n\n  a {\n    color: var(--bg);\n    font-weight: bold;\n  }\n\n  span {\n    font-weight: bold;\n  }\n"]))),m=t(184),v=function(n){var e=n.item,t=n.setIsShowDetails,i=(0,u.TH)();return(0,m.jsxs)(g,{onMouseOver:function(){t(!0),console.log("over")},onMouseOut:function(){return t(!1)},children:[(0,m.jsx)(l.rU,{to:"/details/".concat(e.media_type?e.media_type:"movie","/").concat(e.id),state:{from:i},children:e.title||e.name}),(0,m.jsxs)("p",{children:[(0,m.jsx)("span",{children:"User score:"})," ",e.vote_average.toFixed(2)]}),(0,m.jsxs)("p",{children:[(0,m.jsx)("span",{children:"Overview:"})," ",e.overview.slice(0,200)+"..."]})]})},j=t(1913),w=t(3853),b=h.default.div(r||(r=(0,f.Z)(["\n  position: relative;\n  overflow: hidden;\n  transition: transform 250ms ease;\n  ","\n\n  img {\n    width: 100%;\n    border-radius: 12px;\n    ","\n  }\n\n  h2 {\n    margin-top: 10px;\n    text-align: center;\n    font-size: 20px;\n    ","\n  }\n"])),(0,j.w)("desktop")(a||(a=(0,f.Z)([":hover {\n    transform: translateY(-5px);}"]))),(0,j.w)("tablet")(o||(o=(0,f.Z)(["\n    width: 222px;\n    height: 333px;"]))),(0,j.w)("tablet")(s||(s=(0,f.Z)(["\n    max-width: 200px;\n    margin-left: auto;\n    margin-right: auto;"])))),y=h.default.span(c||(c=(0,f.Z)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 6px;\n"]))),Z=(0,h.default)(w.H33)(p||(p=(0,f.Z)(["\n  width: 22px;\n  height: 22px;\n  color: var(--text);\n"]))),_=t(9019),k=t(2791),O=function(n){var e=n.item,t=(0,u.TH)(),i=(0,x.Z)(),r=(0,k.useState)(!1),a=(0,d.Z)(r,2),o=a[0],s=a[1];return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(b,{children:[(0,m.jsxs)(l.rU,{to:"/details/".concat(e.media_type?e.media_type:"movie","/").concat(e.id),state:{from:t},children:[(0,m.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):(0,_.i)(),alt:e.title||e.name}),(0,m.jsx)("h2",{children:e.title||e.name})]}),i>1280&&e.vote_count>0&&(0,m.jsx)(y,{onMouseOver:function(){return s(!0)},onMouseOut:function(){return s(!1)},children:(0,m.jsx)(Z,{})}),o&&(0,m.jsx)(v,{item:e,setIsShowDetails:s})]})})}},9019:function(n,e,t){t.d(e,{i:function(){return r}});var i={0:t(309),1:t(4526),2:t(3831),3:t(6651),4:t(8293)},r=function(){var n=Math.floor(5*Math.random());return i[n]}},887:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var i,r,a,o,s,c,p,d,l,u,x,f=t(9439),h=t(5861),g=t(7757),m=t.n(g),v=t(5178),j=t(2791),w=t(7689),b=t(3623),y=t(1087),Z=t(168),_=t(3853),k=t(6444),O=t(1913),U=k.default.ul(i||(i=(0,Z.Z)(["\n  display: flex;\n  margin-top: 30px;\n  justify-content: space-between;\n  ","\n  ","\n\n  a {\n    padding: 6px 2px;\n    &.active {\n      color: var(--title);\n    }\n  }\n"])),(0,O.w)("tablet")(r||(r=(0,Z.Z)(["\n  margin: 40px auto 0 auto;\n  width: 500px;"]))),(0,O.w)("desktop")(a||(a=(0,Z.Z)(["\n  margin-top: 50px;\n  width: 500px;"])))),S=(0,k.default)(_.aiR)(o||(o=(0,Z.Z)(["\n  width: 24px;\n  height: 24px;\n"]))),T=(0,k.default)(_.O3L)(s||(s=(0,Z.Z)(["\n  width: 24px;\n  height: 24px;\n"]))),q=t(184),z=function(n){var e=n.totalPages,t=(0,w.UO)(),i=(0,y.lr)(),r=(0,f.Z)(i,1)[0],a=Number(t.page)||1,o=e<=500?e:500,s=[],c=function(n){if("search"===t.type){var e=r.get("query");return"page/".concat(n,"?query=").concat(e)}return"page/".concat(n)};if(o<10)for(var p=2;p<o;p+=1)s.push(p);else{var d=6;a>o-5&&(d=o-5),a>5&&a<o-4&&(d=a);for(var l=d-4;l<d+5;l+=1)s.push(l)}if(o>1)return(0,q.jsxs)(U,{children:[1!==a&&(0,q.jsx)("li",{children:(0,q.jsx)(y.rU,{to:c(a-1),children:(0,q.jsx)(S,{})})}),(0,q.jsx)("li",{children:(0,q.jsx)(y.OL,{to:c(1),children:"1"})}),a>6&&(0,q.jsx)("span",{children:"..."}),s.filter((function(n){return 1!==n&&n!==o})).map((function(n){return(0,q.jsx)("li",{children:(0,q.jsx)(y.OL,{to:c(n),children:n})},n)})),a<o-5&&(0,q.jsx)("span",{children:"..."}),(0,q.jsx)("li",{children:(0,q.jsx)(y.OL,{to:c(o),children:o})}),a!==o&&(0,q.jsx)("li",{children:(0,q.jsx)(y.rU,{to:c(a+1),children:(0,q.jsx)(T,{})})})]})},M=t(5120),L=t(1467),D=k.default.section(c||(c=(0,Z.Z)(["\n  padding: 20px 0 30px;\n  @media screen and (min-width: 1280px) {\n    background-image: url(",");\n    background-size: cover;\n  }\n\n  h1 {\n    margin-bottom: 20px;\n    color: var(--title);\n    ","\n    ",";\n  }\n"])),L,(0,O.w)("tablet")(p||(p=(0,Z.Z)(["\n  font-size: 26px;"]))),(0,O.w)("desktop")(d||(d=(0,Z.Z)(["\n  font-size: 30px;"])))),H=k.default.ul(l||(l=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 20px;\n  ","\n  ","\n"])),(0,O.w)("tablet")(u||(u=(0,Z.Z)(["\n  flex-direction: row;\n  flex-wrap: wrap;"]))),(0,O.w)("desktop")(x||(x=(0,Z.Z)(["\n  gap: 30px 26px;"])))),I=function(n){var e=n.endpoint,t=n.title,i=(0,w.UO)(),r=(0,j.useState)({}),a=(0,f.Z)(r,2),o=a[0],s=a[1],c=(0,j.useState)(!1),p=(0,f.Z)(c,2),d=p[0],l=p[1],u=(0,j.useState)(null),x=(0,f.Z)(u,2),g=x[0],y=x[1];return(0,j.useEffect)((function(){var n=function(){var n=(0,h.Z)(m().mark((function n(){var t;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,l(!0),n.next=4,(0,v.h)("".concat(e,"&page=").concat(i.page||1));case 4:(t=n.sent).data.total_results>0?s(t.data):s([]),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),y(n.t0);case 11:return n.prev=11,l(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[e,i.page]),(0,q.jsx)(D,{children:(0,q.jsxs)(b.W,{children:[(0,q.jsx)("h1",{children:t}),(0,q.jsx)(H,{children:o.results&&o.results!==[]?o.results.map((function(n){return(0,q.jsx)("li",{children:(0,q.jsx)(M.q,{item:n})},n.id)})):(0,q.jsx)("p",{children:"We can't find anything for this query:("})}),o.results&&(0,q.jsx)(z,{totalPages:o.total_pages}),d&&(0,q.jsx)("p",{children:"Loading..."}),g&&(0,q.jsx)("p",{children:g})]})})},C=function(){var n=(0,w.UO)(),e=(0,y.lr)(),t=(0,f.Z)(e,1)[0],i="/trending/all/day?language=en-US&page=1",r="Trending today";if(n.type&&!n.id)if("search"===n.type){var a=t.get("query");i="/search/movie?language=en-US&query=".concat(a),r='Search results for "'.concat(a,'"')}else i="/trending/".concat(n.type,"/day?language=en-US"),r="Trending ".concat("tv"===n.type?"TV shows":"movies");return n.type&&n.id&&(i="/discover/".concat(n.type,"?language=en-US&with_genres=").concat(n.id),r="Trending ".concat(n.name," ").concat("tv"===n.type?"TV shows":"movies")),(0,q.jsx)(I,{endpoint:"".concat(i),title:r})}},1467:function(n,e,t){n.exports=t.p+"static/media/BGImgDesk.8acc9a9efdbaf02fd023.jpg"},309:function(n,e,t){n.exports=t.p+"static/media/cow.a351c5a295fc7ef8309f.jpg"},3831:function(n,e,t){n.exports=t.p+"static/media/dog.ee695316a638d6688eee.jpg"},6651:function(n,e,t){n.exports=t.p+"static/media/fox.ff0402131a2d2ad446c0.jpg"},8293:function(n,e,t){n.exports=t.p+"static/media/mole.a6968b4159509ffcbff9.jpg"},4526:function(n,e,t){n.exports=t.p+"static/media/sheep.02c6bde265eb2bbe02ae.jpg"}}]);
//# sourceMappingURL=887.f5bd7c23.chunk.js.map