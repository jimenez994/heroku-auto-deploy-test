(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,n){e.exports=n(209)},108:function(e,t,n){},110:function(e,t,n){},209:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(97),r=n.n(c),s=(n(108),n(7)),l=n(8),i=n(10),u=n(9),h=n(11),m=n(98),p=n.n(m),b=(n(110),n(38)),d=n(17),f=n(26),g=n.n(f),v=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={search:"",output:""},n.onChange=n.onChange.bind(Object(d.a)(Object(d.a)(n))),n.onSubmit=n.onSubmit.bind(Object(d.a)(Object(d.a)(n))),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var n=/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(this.state.search),a="q=".concat(this.state.search);!0===n&&(a="zip=".concat(this.state.search)),g.a.get("https://api.openweathermap.org/data/2.5/weather?".concat(a,"&APPID=bb9e615b330eecf16100fe0b2e388e96")).then(function(e){var n=Math.ceil(9*(e.data.main.temp-273.15)/5+35);t.setState({output:n})}).catch(function(e){t.setState({output:"sorry something went wrong"})})}},{key:"onChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Weather App"),o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("p",null,this.state.output," F\xba "),o.a.createElement("input",{type:"text",name:"search",onChange:this.onChange}),o.a.createElement("button",{type:"submit"},"Search")))}}]),t}(a.Component),E=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={userInfo:"",error:"",search:""},n.onChange=n.onChange.bind(Object(d.a)(Object(d.a)(n))),n.onSubmit=n.onSubmit.bind(Object(d.a)(Object(d.a)(n))),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),console.log(this.state.search),g.a.get("https://api.github.com/users/".concat(this.state.search)).then(function(e){t.setState({userInfo:e.data}),console.log(t.state.userInfo)}).catch(function(e){console.log(e),t.setState({error:"Sorry something went wrong"})})}},{key:"onChange",value:function(e){var t;this.setState((t={},Object(b.a)(t,e.target.name,e.target.value),Object(b.a)(t,"error",""),t))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"github app"),o.a.createElement("img",{src:"https://thumbsnap.com/t/acp0ghYY.jpg",alt:"ThumbSnap"}),o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",name:"search",onChange:this.onChange}),o.a.createElement("button",{type:"submit"}," Find")),o.a.createElement("h3",null,this.state.error),o.a.createElement("h3",null,this.state.userInfo.login),o.a.createElement("img",{src:this.state.userInfo.avatar_url,alt:""}))}}]),t}(a.Component),j=n(47),O=n(99),C=n.n(O),k=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).reset=function(){n.setState({gold:0,messages:[]})},n.onClick=function(e){e.preventDefault();var t=e.target.name,a=function(e,t,a){var o=Math.floor(Math.random()*(t-e+1))+e,c="green";o<0&&(c="red"),n.setState({gold:n.state.gold+o}),n.setState(function(e){return{messages:[{msg:"You went to ".concat(a," and found $ ").concat(o," coins"),style:c}].concat(Object(j.a)(e.messages))}})};"farm"===t?a(10,20,"farm"):"cave"===t?a(5,10,"cave"):"home"===t?a(2,5,"home"):"casino"===t&&a(-50,50,"casino")},n.state={gold:0,messages:[]},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Ninja Gold v3"),o.a.createElement("h3",null,"$",this.state.gold),o.a.createElement("h4",null,"$10-$20"),o.a.createElement("button",{name:"farm",onClick:this.onClick},"Farm"),o.a.createElement("h4",null,"$5-$10"),o.a.createElement("button",{name:"cave",onClick:this.onClick},"Cave"),o.a.createElement("h4",null,"$2-$5"),o.a.createElement("button",{name:"home",onClick:this.onClick},"Home"),o.a.createElement("h4",null,"$-50-$50"),o.a.createElement("button",{name:"casino",onClick:this.onClick},"Casino"),o.a.createElement("div",{style:{height:"200px",overflow:"auto"}},this.state.messages.map(function(e){return o.a.createElement("p",{style:{color:e.style},key:C()()},e.msg)})),o.a.createElement("button",{onClick:this.reset},"Reset"))}}]),t}(a.Component),y=n(100),S=n.n(y),w=n(65),x=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).responseGoogle=function(e){console.log(e)},n.handleResponse=function(e){console.log(e)},n.handleError=function(e){n.setState({error:e})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(S.a,{clientId:"185642988994-vhduti3pdd54oa4hara1vvqd7v1vdtr3.apps.googleusercontent.com",buttonText:"Login",onSuccess:this.responseGoogle,onFailure:this.responseGoogle}),o.a.createElement(w.FacebookProvider,{appId:"299249414279206"},o.a.createElement(w.LoginButton,{scope:"email",onCompleted:this.handleResponse,onError:this.handleError},o.a.createElement("span",null,"Login via Facebook"))))}}]),t}(a.Component),$=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.post,n=e.deletePost;return o.a.createElement("div",null,o.a.createElement("h4",null,t.text),o.a.createElement("button",{onClick:n,value:t._id},"Delete"))}}]),t}(a.Component),P=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.posts,n=e.deletePost;return t.map(function(e){return o.a.createElement($,{key:e._id,post:e,deletePost:n})})}}]),t}(a.Component),I=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){n.setState({postText:e.target.value})},n.addPost=function(){g.a.post("/api/post/create",{text:n.state.postText}).then(function(e){return n.setState(function(t){return{posts:[e.data].concat(Object(j.a)(t.posts)),postText:""}})}).catch(function(e){return console.log(e)})},n.deletePost=function(e){var t=e.target.value,a=n.state.posts.filter(function(e){return e._id!==t});g.a.delete("/api/post/delete/".concat(t)).then(function(e){return n.setState({posts:a})}).catch(function(e){return console.log(e)})},n.addComment=function(e){},n.state={posts:null,postText:""},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("/api/post/all").then(function(t){return e.setState({posts:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e;return null!=this.state.posts&&(e=o.a.createElement(P,{posts:this.state.posts,deletePost:this.deletePost})),o.a.createElement("div",null,o.a.createElement("input",{type:"text",onChange:this.onChange,value:this.state.postText}),o.a.createElement("button",{onClick:this.addPost},"Post"),e)}}]),t}(a.Component),G=n(212),A=n(211),T=n(213),D=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(G.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"Adding react to the project is a success!"),o.a.createElement(A.a,{to:"/login"}," login "),o.a.createElement(A.a,{to:"/weather"}," Weather "),o.a.createElement(A.a,{to:"/git"}," Git "),o.a.createElement(A.a,{to:"/ninjaGold"}," Ninja Gold "),o.a.createElement(A.a,{to:"/wall"}," Wall "),o.a.createElement(T.a,{path:"/wall",component:I}),o.a.createElement(T.a,{path:"/login",component:x}),o.a.createElement(T.a,{path:"/weather",component:v}),o.a.createElement(T.a,{path:"/git",component:E}),o.a.createElement(T.a,{path:"/ninjaGold",component:k}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},98:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[102,2,1]]]);
//# sourceMappingURL=main.170aaee2.chunk.js.map