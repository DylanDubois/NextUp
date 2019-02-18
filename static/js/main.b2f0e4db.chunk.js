(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,t,a){"use strict";a.r(t);a(59),a(44),a(60),a(61);var n=a(1),s=a.n(n),r=a(57),l=a.n(r),o=(a(66),a(25)),i=a(26),c=a(28),m=a(27),u=a(29),d=(a(67),a(68),a(69),function(e){var t=Object.keys(e.songs).reverse().map(function(t){var a=e.songs[t];return s.a.createElement("a",{className:"bg-dark row m-0 pt-2 text-left list-item text-primary",key:a.id,href:a.url},s.a.createElement("div",{className:"col-12"},s.a.createElement("h2",{className:"brand"},a.title," - ",a.artist),s.a.createElement("h5",{className:"header"},a.poster)))});return s.a.createElement("div",{className:"bg-dark max-height SongList"},s.a.createElement("div",{className:"list"},t))}),h=a(19),p=a.n(h),g=p.a.initializeApp({apiKey:"AIzaSyBZgI1DfP9GVTwxajGox48qaYNH0aKk7k0",authDomain:"nextup-15f4c.firebaseapp.com",databaseURL:"https://nextup-15f4c.firebaseio.com",projectId:"nextup-15f4c",storageBucket:"nextup-15f4c.appspot.com",messagingSenderId:"923940393576"}),f=new p.a.auth.GoogleAuthProvider,b=function(){p.a.auth().signInWithPopup(f).then(function(e){}).catch(function(e){})},v=function(){p.a.auth().signOut().then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})},E=g,N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={songs:[],title:"",artist:"",url:"",poster:"",user:null},a.handleNameChange=function(e){a.setState({title:e.target.value})},a.handleEstimationChange=function(e){a.setState({artist:e.target.value})},a.handleTasksChange=function(e){a.setState({url:e.target.value})},a.handleSubmit=function(e){e.preventDefault()},a.submitSong=function(){if(a.state.artist)if(a.state.title)if(a.state.url.includes("youtube.com")){var e=(new Date).getTime()-155e10,t={title:a.state.title,artist:a.state.artist,url:a.state.url,poster:a.state.user.displayName,id:e};a.setState({title:"",artist:"",url:""}),E.database().ref("/songs/"+e).update(t)}else alert("Must provide YouTube URL.");else alert("Must include song title.");else alert("Must include artist name.")},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.state.user!==e.user&&this.setState({user:e.user}),this.state.songs!==e.songs&&this.setState({songs:e.songs})}},{key:"componentDidUpdate",value:function(e,t){t.user!==e.user&&this.setState({user:e.user})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"jumbotron-fluid bg-primary text-primary p-5 text-left gradient border-bottom border-primary"},s.a.createElement("h1",{className:"display-2 brand ml-md-5 ml-sm-0"},"NextUp"),s.a.createElement("h2",{className:"header ml-md-5 ml-sm-0"},"Share. Like. Listen."),!this.state.user&&s.a.createElement("p",{className:"lead ml-md-5 ml-sm-0"},s.a.createElement("a",{className:"btn btn-outline-primary btn-lg mt-3 header",href:"#",role:"button",onClick:this.props.signIn},"Sign-In")),this.state.user&&s.a.createElement("p",{className:"lead ml-md-5 ml-sm-0"},s.a.createElement("a",{className:"btn btn-outline-primary btn-lg mt-3 header",href:"#",role:"button","data-toggle":"modal","data-target":"#exampleModal"},"Add Song"),s.a.createElement("a",{className:"btn btn-outline-primary btn-lg mt-3 ml-4 header",href:"#",role:"button",onClick:this.props.signOut},"Sign Out"))),s.a.createElement(d,{songs:this.state.songs}),s.a.createElement("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},s.a.createElement("div",{className:"modal-dialog",role:"document"},s.a.createElement("div",{className:"modal-content bg-dark"},s.a.createElement("div",{className:"modal-header"},s.a.createElement("h5",{className:"modal-title text-primary header"},"Add Song"),s.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},s.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),s.a.createElement("div",{className:"modal-body"},s.a.createElement("form",{className:"row"},s.a.createElement("div",{className:"form-group col-12"},s.a.createElement("input",{type:"text",className:"form-control",id:"title","aria-describedby":"name",placeholder:"Song Name",value:this.state.title,onChange:this.handleNameChange})),s.a.createElement("div",{className:"form-group col-12"},s.a.createElement("input",{type:"text",className:"form-control",id:"effort",placeholder:"Artist",value:this.state.artist,onChange:this.handleEstimationChange})),s.a.createElement("div",{className:"form-group col-12 m-0"},s.a.createElement("input",{type:"text",className:"form-control",id:"task",placeholder:"YouTube URL",value:this.state.url,onChange:this.handleTasksChange})))),s.a.createElement("div",{className:"modal-footer"},s.a.createElement("button",{type:"button",className:"btn btn-dark btn-outline-primary","data-dismiss":"modal",onClick:this.submitSong},"Add"))))))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={user:null,songs:[]},a.authListener=function(){E.auth().onAuthStateChanged(function(e){e?a.setState({user:e}):a.setState({user:null})})},a.songsListener=function(){E.database().ref("/songs/").on("value",function(e){console.log(e.val()),a.setState({songs:e.val()})})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.authListener(),this.songsListener()}},{key:"render",value:function(){var e=this.state,t=e.user,a=e.songs;return s.a.createElement("div",{className:"App"},s.a.createElement(N,{signIn:b,signOut:v,user:t,songs:a}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},58:function(e,t,a){e.exports=a(125)},66:function(e,t,a){},67:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},68:function(e,t,a){},69:function(e,t,a){}},[[58,1,2]]]);
//# sourceMappingURL=main.b2f0e4db.chunk.js.map