(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{37:function(e,t,n){},57:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(29),r=n.n(c),i=(n(37),n(8)),o=n(2),l=n(17),j=n.n(l),u=n(30),m=n(11),d=n(12),v=n(14),b=n(13),h=n(31),p=n.n(h),O=(n(57),n(1));var x=function(e){var t=e.title,n=e.year,a=e.summary,s=e.poster,c=e.genres;return Object(O.jsx)("div",{className:"movie",children:Object(O.jsxs)(i.b,{to:{pathname:"/movie-detail",state:{year:n,title:t,summary:a,poster:s,genres:c}},children:[Object(O.jsx)("img",{src:s,alt:t,title:t}),Object(O.jsxs)("div",{className:"movie__data",children:[Object(O.jsx)("h3",{className:"movie__title",children:t}),Object(O.jsx)("h5",{className:"movie__year",children:n}),Object(O.jsx)("ul",{className:"movie__genres",children:c.map((function(e,t){return Object(O.jsx)("li",{className:"movei_genre",children:e},t)}))}),Object(O.jsxs)("p",{className:"movie__summary",children:[a.slice(0,180),"..."]})]})]})})},f=(n(64),function(e){Object(v.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(j.a.mark((function t(){var n,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,a=n.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(O.jsx)("section",{className:"container",children:t?Object(O.jsx)("div",{className:"loader",children:Object(O.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(O.jsx)("div",{className:"movies",children:n.map((function(e){return Object(O.jsx)(x,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(s.a.Component));n(65);var y=function(e){return console.log(e),Object(O.jsxs)("div",{className:"about__container",children:[Object(O.jsx)("span",{children:'"Freedom is the freedom to say that two plus two make four. If that is granted, all else follows."'}),Object(O.jsx)("span",{children:"- George Orwell, 1984"})]})};n(66);var _=function(){return Object(O.jsxs)("div",{className:"nav",children:[Object(O.jsx)(i.b,{to:"/",children:"Home"}),Object(O.jsx)(i.b,{to:"/about",children:"About"})]})},g=function(e){Object(v.a)(n,e);var t=Object(b.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return console.log(e),e.state?Object(O.jsx)("span",{children:e.state.title}):null}}]),n}(s.a.Component);var N=function(){return Object(O.jsxs)(i.a,{children:[Object(O.jsx)(_,{}),Object(O.jsx)(o.a,{path:"/",exact:!0,component:f}),Object(O.jsx)(o.a,{path:"/about",component:y}),Object(O.jsx)(o.a,{puth:"movie-detail",component:g})]})};r.a.render(Object(O.jsx)(N,{}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.db9597d0.chunk.js.map