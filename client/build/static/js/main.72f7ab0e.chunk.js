(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(t,e,n){t.exports=n(209)},108:function(t,e,n){},110:function(t,e,n){},209:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(97),r=n.n(c),s=(n(108),n(5)),l=n(6),i=n(9),u=n(7),m=n(8),h=n(98),p=n.n(h),d=(n(110),n(39)),f=n(17),b=n(21),g=n.n(b),v=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(i.a)(this,Object(u.a)(e).call(this,t))).state={search:"",output:""},n.onChange=n.onChange.bind(Object(f.a)(Object(f.a)(n))),n.onSubmit=n.onSubmit.bind(Object(f.a)(Object(f.a)(n))),n}return Object(m.a)(e,t),Object(l.a)(e,[{key:"onSubmit",value:function(t){var e=this;t.preventDefault();var n=/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(this.state.search),a="q=".concat(this.state.search);!0===n&&(a="zip=".concat(this.state.search)),g.a.get("https://api.openweathermap.org/data/2.5/weather?".concat(a,"&APPID=bb9e615b330eecf16100fe0b2e388e96")).then(function(t){var n=Math.ceil(9*(t.data.main.temp-273.15)/5+35);e.setState({output:n})}).catch(function(t){e.setState({output:"sorry something went wrong"})})}},{key:"onChange",value:function(t){this.setState(Object(d.a)({},t.target.name,t.target.value))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Weather App"),o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("p",null,this.state.output," F\xba "),o.a.createElement("input",{type:"text",name:"search",onChange:this.onChange}),o.a.createElement("button",{type:"submit"},"Search")))}}]),e}(a.Component),E=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(i.a)(this,Object(u.a)(e).call(this,t))).state={userInfo:"",error:"",search:""},n.onChange=n.onChange.bind(Object(f.a)(Object(f.a)(n))),n.onSubmit=n.onSubmit.bind(Object(f.a)(Object(f.a)(n))),n}return Object(m.a)(e,t),Object(l.a)(e,[{key:"onSubmit",value:function(t){var e=this;t.preventDefault(),console.log(this.state.search),g.a.get("https://api.github.com/users/".concat(this.state.search)).then(function(t){e.setState({userInfo:t.data}),console.log(e.state.userInfo)}).catch(function(t){console.log(t),e.setState({error:"Sorry something went wrong"})})}},{key:"onChange",value:function(t){var e;this.setState((e={},Object(d.a)(e,t.target.name,t.target.value),Object(d.a)(e,"error",""),e))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"github app"),o.a.createElement("img",{src:"https://thumbsnap.com/t/acp0ghYY.jpg",alt:"ThumbSnap"}),o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",name:"search",onChange:this.onChange}),o.a.createElement("button",{type:"submit"}," Find")),o.a.createElement("h3",null,this.state.error),o.a.createElement("h3",null,this.state.userInfo.login),o.a.createElement("img",{src:this.state.userInfo.avatar_url,alt:""}))}}]),e}(a.Component),j=n(33),O=n(99),C=n.n(O),y=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(i.a)(this,Object(u.a)(e).call(this,t))).reset=function(){n.setState({gold:0,messages:[]})},n.onClick=function(t){t.preventDefault();var e=t.target.name,a=function(t,e,a){var o=Math.floor(Math.random()*(e-t+1))+t,c="green";o<0&&(c="red"),n.setState({gold:n.state.gold+o}),n.setState(function(t){return{messages:[{msg:"You went to ".concat(a," and found $ ").concat(o," coins"),style:c}].concat(Object(j.a)(t.messages))}})};"farm"===e?a(10,20,"farm"):"cave"===e?a(5,10,"cave"):"home"===e?a(2,5,"home"):"casino"===e&&a(-50,50,"casino")},n.state={gold:0,messages:[]},n}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Ninja Gold v3"),o.a.createElement("h3",null,"$",this.state.gold),o.a.createElement("h4",null,"$10-$20"),o.a.createElement("button",{name:"farm",onClick:this.onClick},"Farm"),o.a.createElement("h4",null,"$5-$10"),o.a.createElement("button",{name:"cave",onClick:this.onClick},"Cave"),o.a.createElement("h4",null,"$2-$5"),o.a.createElement("button",{name:"home",onClick:this.onClick},"Home"),o.a.createElement("h4",null,"$-50-$50"),o.a.createElement("button",{name:"casino",onClick:this.onClick},"Casino"),o.a.createElement("div",{style:{height:"200px",overflow:"auto"}},this.state.messages.map(function(t){return o.a.createElement("p",{style:{color:t.style},key:C()()},t.msg)})),o.a.createElement("button",{onClick:this.reset},"Reset"))}}]),e}(a.Component),k=n(100),S=n.n(k),w=n(65),x=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(i.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).responseGoogle=function(t){console.log(t)},n.handleResponse=function(t){console.log(t)},n.handleError=function(t){n.setState({error:t})},n}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(S.a,{clientId:"185642988994-vhduti3pdd54oa4hara1vvqd7v1vdtr3.apps.googleusercontent.com",buttonText:"Login",onSuccess:this.responseGoogle,onFailure:this.responseGoogle}),o.a.createElement(w.FacebookProvider,{appId:"299249414279206"},o.a.createElement(w.LoginButton,{scope:"email",onCompleted:this.handleResponse,onError:this.handleError},o.a.createElement("span",null,"Login via Facebook"))))}}]),e}(a.Component),$=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(i.a)(this,Object(u.a)(e).call(this,t))).onChange=function(t){n.setState({comment:t.target.value})},n.state={id:n.props.postId,comment:""},n}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e=this.props.addComment;return o.a.createElement("div",null,o.a.createElement("input",{onChange:this.onChange,value:this.state.comment}),o.a.createElement("button",{onClick:function(){e(t.state.id,t.state.comment),t.setState({comment:""})}},"add"))}}]),e}(a.Component),I=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(i.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).scrollToBottom=function(){n.messagesEnd.scrollIntoView({behavior:"smooth"})},n}return Object(m.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){var t=this,e=this.props.comments;return o.a.createElement("div",{style:{maxHeight:"200px",minHeight:"1px",overflow:"auto"}},e.map(function(t){return o.a.createElement("p",{key:t._id},t.comment)}),o.a.createElement("div",{style:{float:"left",clear:"both"},ref:function(e){t.messagesEnd=e}}))}}]),e}(a.Component),P=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(i.a)(this,Object(u.a)(e).call(this,t))).showCF=function(){!0===n.state.form?n.setState({form:!1}):n.setState({form:!0})},n.addComment=function(t,e){g.a.post("/api/comment/create",{comment:e,_post:t}).then(function(t){return n.setState(function(e){return{comments:[].concat(Object(j.a)(e.comments),[t.data])}})}).catch(function(t){return console.log(t)})},n.state={form:!1,comments:n.props.post._comments},n}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t,e=this.props,n=e.post,a=e.deletePost;return!0===this.state.form&&(t=o.a.createElement("div",null,o.a.createElement(I,{comments:this.state.comments}),o.a.createElement($,{postId:n._id,addComment:this.addComment}))),o.a.createElement("div",null,o.a.createElement("h4",null,n.text),o.a.createElement("button",{onClick:a,value:n._id},"Delete"),o.a.createElement("button",{onClick:this.showCF},"Comment"),t)}}]),e}(a.Component),T=function(t){function e(){return Object(s.a)(this,e),Object(i.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props,e=t.posts,n=t.deletePost,a=t.addComment;return e.map(function(t){return o.a.createElement(P,{key:t._id,post:t,addComment:a,deletePost:n})})}}]),e}(a.Component),A=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(i.a)(this,Object(u.a)(e).call(this,t))).onChange=function(t){n.setState({postText:t.target.value})},n.addPost=function(){g.a.post("/api/post/create",{text:n.state.postText}).then(function(t){return n.setState(function(e){return{posts:[t.data].concat(Object(j.a)(e.posts)),postText:""}})}).catch(function(t){return console.log(t)})},n.deletePost=function(t){var e=t.target.value,a=n.state.posts.filter(function(t){return t._id!==e});g.a.delete("/api/post/delete/".concat(e)).then(function(t){return n.setState({posts:a})}).catch(function(t){return console.log(t)})},n.addComment=function(t,e){console.log(t),console.log(e)},n.state={posts:null,postText:""},n}return Object(m.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=this;g.a.get("/api/post/all").then(function(e){return t.setState({posts:e.data})}).catch(function(t){return console.log(t)})}},{key:"render",value:function(){var t;return null!=this.state.posts&&(t=o.a.createElement(T,{posts:this.state.posts,addComment:this.addComment,deletePost:this.deletePost})),o.a.createElement("div",null,o.a.createElement("input",{type:"text",onChange:this.onChange,value:this.state.postText}),o.a.createElement("button",{onClick:this.addPost},"Post"),t)}}]),e}(a.Component),D=n(213),F=n(211),G=n(212),_=function(t){function e(){return Object(s.a)(this,e),Object(i.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return o.a.createElement(D.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"Adding react to the project is a success!"),o.a.createElement(F.a,{to:"/login"}," login "),o.a.createElement(F.a,{to:"/weather"}," Weather "),o.a.createElement(F.a,{to:"/git"}," Git "),o.a.createElement(F.a,{to:"/ninjaGold"}," Ninja Gold "),o.a.createElement(F.a,{to:"/wall"}," Wall "),o.a.createElement(G.a,{path:"/wall",component:A}),o.a.createElement(G.a,{path:"/login",component:x}),o.a.createElement(G.a,{path:"/weather",component:v}),o.a.createElement(G.a,{path:"/git",component:E}),o.a.createElement(G.a,{path:"/ninjaGold",component:y}))))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},98:function(t,e,n){t.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[102,2,1]]]);
//# sourceMappingURL=main.72f7ab0e.chunk.js.map