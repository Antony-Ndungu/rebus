webpackJsonp([2],{761:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(10),c=n(u),d=r(298),f=n(d),p=r(299),h=n(p),b=r(300),m=r(48),g=r(83),w=r(169),y=r(71),S=r(17),v=n(S),E=function(e){function t(){var e,r,n,l;o(this,t);for(var i=arguments.length,u=Array(i),c=0;c<i;c++)u[c]=arguments[c];return r=n=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),n.state={businessShortcode:"",errors:{},isLoading:!1},n.onChange=function(e){n.setState(a({},e.target.name,e.target.value))},n.onSubmit=function(e){e.preventDefault(),n.setState({isLoading:!0});var t=(0,b.validateForgotPasswordInput)(n.state);Object.keys(t).length?n.setState({errors:t,isLoading:!1}):(n.setState({errors:{}}),n.props.resetMerchantPassword({businessShortcode:n.state.businessShortcode}).then(function(e){"string"==typeof e&&n.setState({isLoading:!1,businessShortcode:"",errors:{global:e}})}).catch(function(e){return console.log(e)}))},l=r,s(n,l)}return l(t,e),i(t,[{key:"render",value:function(){return c.default.createElement("div",{style:{"padding-top":"10vh"}},c.default.createElement("div",{style:{"max-width":"400px",margin:"auto"}},c.default.createElement("h1",{className:"w3-text-teal w3-center",style:{textShadow:"1px 1px 0 #444"}},c.default.createElement("b",null,"Rebus")),c.default.createElement("div",{className:"w3-card"},c.default.createElement("div",{className:"w3-container primary-color w3-text-white"},c.default.createElement("h2",null,"Forgot Password?")),this.state.errors.global&&c.default.createElement("div",{className:"w3-panel w3-margin w3-red"},c.default.createElement("p",null,this.state.errors.global)),c.default.createElement("form",{className:"w3-container",onSubmit:this.onSubmit},c.default.createElement(f.default,{error:this.state.errors.businessShortcode,label:"Business Shortcode",name:"businessShortcode",type:"text",value:this.state.businessShortcode,onChange:this.onChange}),this.state.errors.businessShortcode&&c.default.createElement("span",{className:"w3-text-red"},this.state.errors.businessShortcode),c.default.createElement("p",null),c.default.createElement(h.default,{isLoading:this.state.isLoading,text:"Send reset email",loadingText:"Sending reset email"}),c.default.createElement("span",{className:"w3-right w3-padding"},c.default.createElement(y.Link,{to:"/login"},"Cancel")),c.default.createElement("p",null)))))}}]),t}(u.Component),x=function(e){return(0,m.bindActionCreators)({resetMerchantPassword:w.resetMerchantPassword},e)};E.protoTypes={resetMerchantPassword:v.default.func.isRequired},t.default=(0,g.connect)(null,x)(E)}});