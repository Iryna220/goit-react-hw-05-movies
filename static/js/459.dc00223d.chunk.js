"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[459],{459:function(t,e,r){r.r(e),r.d(e,{default:function(){return v}});var n=r(861),a=r(439),u=r(757),c=r.n(u),s=r(791),i=r(689),o=r(690),p=r(525),f="Cast_list__oOD41",h="Cast_listItem__2rNHA",l="Cast_listImg__i57oh",d="Cast_extraInfo__M3H1G",m=r(184),v=function(){var t=(0,s.useState)([]),e=(0,a.Z)(t,2),r=e[0],u=e[1],v=(0,s.useState)(!1),x=(0,a.Z)(v,2),g=x[0],_=x[1],w=(0,s.useState)(null),b=(0,a.Z)(w,2),k=b[0],y=b[1],Z=(0,i.UO)().movieId;return(0,s.useEffect)((function(){var t=function(){var t=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return _(!0),t.prev=1,t.next=4,(0,o.Kd)(Z);case 4:e=t.sent,r=e.cast,u(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),y(t.t0.message);case 12:return t.prev=12,_(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[Z]),(0,m.jsxs)(m.Fragment,{children:[g&&(0,m.jsx)(p.Z,{}),k&&(0,m.jsx)("p",{children:"Something goes wrong"}),(0,m.jsx)("ul",{className:f,children:r.map((function(t){return(0,m.jsxs)("li",{className:h,children:[(0,m.jsx)("img",{className:l,width:"200px",src:t.profile_path?o.yA+t.profile_path:"https://bitsofco.de/content/images/2018/12/broken-1.png",alt:t.original_name}),(0,m.jsxs)("div",{className:d,children:[(0,m.jsx)("p",{children:t.name}),(0,m.jsxs)("p",{children:["Character: ",t.character]})]})]},t.id)}))})]})}},690:function(t,e,r){r.d(e,{AR:function(){return i},Hx:function(){return h},Kd:function(){return f},Y5:function(){return p},yA:function(){return s},z1:function(){return o}});var n=r(861),a=r(757),u=r.n(a),c=r(243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"0680db411350b9d223e12287a60e3b59",language:"en-US"}}),s="https://image.tmdb.org/t/p/w500",i=function(){var t=(0,n.Z)(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/trending/movie/day");case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("search/movie",{params:{page:1,include_adult:!1,query:e}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("movie/".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("movie/".concat(e,"/credits"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("movie/".concat(e,"/reviews"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=459.dc00223d.chunk.js.map