webpackJsonp([1],{762:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(10),u=n(i),d=a(298),f=n(d),m=a(299),p=n(m),w=a(71),g=a(300),b=a(169),h=a(48),y=a(83),v=function(e){function t(){var e,a,n,l;s(this,t);for(var c=arguments.length,i=Array(c),u=0;u<c;u++)i[u]=arguments[u];return a=n=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.state={password:"",confirmPassword:"",errors:{},isLoading:!1,success:!1,message:""},n.onChange=function(e){n.setState(r({},e.target.name,e.target.value))},n.onSubmit=function(e){e.preventDefault(),n.setState({isLoading:!0});var t=(0,g.validateResetPasswordInput)(n.state);Object.keys(t).length?n.setState({errors:t,isLoading:!1}):(n.setState({errors:{}}),n.props.resetPassword({password:n.state.password,token:n.props.location.search.slice(1)}).then(function(e){"fail"===e.data.confirmation?n.setState({errors:{global:e.data.message},isLoading:!1,password:"",confirmPassword:""}):"success"===e.data.confirmation&&(console.log(e.data.message),n.setState({success:!0,message:e.data.message,isLoading:!1}))}).catch(function(e){return console.log(e)}))},l=a,o(n,l)}return l(t,e),c(t,[{key:"render",value:function(){var e=this.state,t=e.errors,a=e.password,n=e.isLoading,r=e.confirmPassword,s=e.success,o=e.message;return u.default.createElement("div",{style:{"padding-top":"10vh"}},u.default.createElement("div",{style:{"max-width":"400px",margin:"auto"}},u.default.createElement("h1",{className:"w3-text-teal w3-center",style:{textShadow:"1px 1px 0 #444"}},u.default.createElement("b",null,"Rebus")),u.default.createElement("div",{className:"w3-card"},u.default.createElement("div",{className:"w3-container primary-color w3-text-white"},u.default.createElement("h2",null,"Reset Password")),s&&u.default.createElement("div",{className:"w3-panel w3-margin w3-green"},u.default.createElement("p",null,o)),t.global&&u.default.createElement("div",{className:"w3-panel w3-margin w3-red"},u.default.createElement("p",null,t.global)),u.default.createElement("form",{className:"w3-container",onSubmit:this.onSubmit},u.default.createElement(f.default,{error:t.password,label:"New Password",name:"password",type:"password",value:a,onChange:this.onChange}),t.password&&u.default.createElement("span",{className:"w3-text-red"},t.password),u.default.createElement(f.default,{error:t.confirmPassword,label:"Confirm Password",name:"confirmPassword",type:"password",value:r,onChange:this.onChange}),t.confirmPassword&&u.default.createElement("span",{className:"w3-text-red"},t.confirmPassword),u.default.createElement("p",null),u.default.createElement(p.default,{isLoading:n,text:"Reset Password",loadingText:"Resetting Password"}),u.default.createElement("span",{className:"w3-right w3-padding"},u.default.createElement(w.Link,{to:"/login"},s?"Login":"Cancel")),u.default.createElement("p",null)))))}}]),t}(i.Component),E=function(e){return(0,h.bindActionCreators)({resetPassword:b.resetPassword},e)};t.default=(0,y.connect)(null,E)(v)}});