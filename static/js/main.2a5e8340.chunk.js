(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(47)},45:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(15),i=a.n(s),c=a(8),u=a.n(c),o=a(16),l=a(2),m=a(3),p=a(5),h=a(4),f=a(6),d=a(17),b=a.n(d).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID 256003122cac2498549782b3da0f5c759f4735cebad8d827d8fb32c0faed0243"}}),g=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={userInput:""},a.onFormSubmit=function(e){e.preventDefault(),a.props.handleUserSubmit(a.state.userInput)},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui segment"},r.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Image Search"),r.a.createElement("input",{type:"text",onChange:function(t){return e.setState({userInput:t.target.value})},value:this.state.userInput}))))}}]),t}(r.a.Component),v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).setSpans=function(){var e=a.imageRef.current.clientHeight,t=Math.ceil(e/10);a.setState({spans:t})},a.imageRef=r.a.createRef(),a.state={spans:0},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var e=this.props.image,t=e.description,a=e.urls;return r.a.createElement("div",{style:{gridRowEnd:"span ".concat(this.state.spans)}},r.a.createElement("img",{ref:this.imageRef,src:a.regular,alt:t}))}}]),t}(r.a.Component),S=(a(45),function(e){var t=e.images.map(function(e){return r.a.createElement(v,{image:e,key:e.id})});return r.a.createElement("div",{className:"image-list"},t)}),j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={images:[]},a.onSearchSubmit=function(){var e=Object(o.a)(u.a.mark(function e(t){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("/search/photos",{params:{query:t}});case 2:n=e.sent,a.setState({images:n.data.results}),console.log(n.data.results);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.onSearchSubmit("waterfall")}},{key:"render",value:function(){return r.a.createElement("div",{className:"ui container",style:{marginTop:"10px"}},r.a.createElement(g,{handleUserSubmit:this.onSearchSubmit}),"Found: ",this.state.images.length," images",r.a.createElement(S,{images:this.state.images}))}}]),t}(r.a.Component);i.a.render(r.a.createElement(j,null),document.querySelector("#root"))}},[[18,2,1]]]);
//# sourceMappingURL=main.2a5e8340.chunk.js.map