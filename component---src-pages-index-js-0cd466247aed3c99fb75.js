(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/eHF":function(e,t,n){"use strict";function i(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}function a(e,t){var n=t.distance,i=t.left,a=t.right,o=t.up,r=t.down,s=t.top,c=t.bottom,d=t.big,u=t.mirror,h=t.opposite,m=(n?n.toString():0)+((i?1:0)|(a?2:0)|(s||r?4:0)|(c||o?8:0)|(u?16:0)|(h?32:0)|(e?64:0)|(d?128:0));if(p.hasOwnProperty(m))return p[m];var f=i||a||o||r||s||c,v=void 0,y=void 0;if(f){if(!u!=!(e&&h)){var b=[a,i,c,s,r,o];i=b[0],a=b[1],s=b[2],c=b[3],o=b[4],r=b[5]}var E=n||(d?"2000px":"100%");v=i?"-"+E:a?E:"0",y=r||s?"-"+E:o||c?E:"0"}return p[m]=(0,l.animation)((e?"to":"from")+" {opacity: 0;"+(f?" transform: translate3d("+v+", "+y+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),p[m]}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.children,o=(e.out,e.forever),r=e.timeout,s=e.duration,c=void 0===s?l.defaults.duration:s,u=e.delay,p=void 0===u?l.defaults.delay:u,h=e.count,m=void 0===h?l.defaults.count:h,f=i(e,["children","out","forever","timeout","duration","delay","count"]),v={make:a,duration:void 0===r?c:r,delay:p,forever:o,count:m,style:{animationFillMode:"both"},reverse:f.left};return t?(0,d.default)(f,v,v,n):v}Object.defineProperty(t,"__esModule",{value:!0});var r,s=n("17x9"),l=n("ar19"),c=n("eH+L"),d=(r=c)&&r.__esModule?r:{default:r},u={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,big:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,distance:s.string,delay:s.number,count:s.number,forever:s.bool},p={};o.propTypes=u,t.default=o,e.exports=t.default},"28nh":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,a=!1,o=void 0;try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done)&&(n.push(r.value),!t||n.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{!i&&s.return&&s.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n("q1tI"),c=(i=l)&&i.__esModule?i:{default:i},d=n("17x9"),u=n("ar19"),p=(0,d.shape)({make:d.func,duration:d.number.isRequired,delay:d.number.isRequired,forever:d.bool,count:d.number.isRequired,style:d.object.isRequired,reverse:d.bool}),h={collapse:d.bool,collapseEl:d.element,cascade:d.bool,wait:d.number,force:d.bool,disabled:d.bool,appear:d.bool,enter:d.bool,exit:d.bool,fraction:d.number,refProp:d.string,innerRef:d.func,onReveal:d.func,unmountOnExit:d.bool,mountOnEnter:d.bool,inEffect:p.isRequired,outEffect:(0,d.oneOfType)([p,(0,d.oneOf)([!1])]).isRequired,ssrReveal:d.bool,collapseOnly:d.bool,ssrFadeout:d.bool},m={transitionGroup:d.object},f=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return i.isOn=void 0===e.when||!!e.when,i.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:i.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},i.savedChild=!1,i.isShown=!1,u.observerMode?i.handleObserve=i.handleObserve.bind(i):(i.revealHandler=i.makeHandler(i.reveal),i.resizeHandler=i.makeHandler(i.resize)),i.saveRef=i.saveRef.bind(i),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?r({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!u.observerMode&&this.props.collapse&&window.document.dispatchEvent(u.collapseend)))}},{key:"animationEnd",value:function(e,t,n){var i=this,a=n.forever,o=n.count,r=n.delay,s=n.duration;if(!a){this.animationEndTimeout=window.setTimeout((function(){i&&i.el&&(i.animationEndTimeout=void 0,e.call(i))}),r+(s+(t?s:0)*o))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,n){var i=n.duration+(t.cascade?n.duration:0),a=this.isOn?this.getDimensionValue():0,o=void 0,r=void 0;if(t.collapseOnly)o=n.duration/3,r=n.delay;else{var s=i>>2,l=s>>1;o=s,r=n.delay+(this.isOn?0:i-s-l),e.style.animationDuration=i-s+(this.isOn?l:-l)+"ms",e.style.animationDelay=n.delay+(this.isOn?s-l:0)+"ms"}return e.collapse={height:a,transition:"height "+o+"ms ease "+r+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,n=e[t?"outEffect":"inEffect"],i="style"in n&&n.style.animationName||void 0,a=void 0;e.collapseOnly?a={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&n.make&&(i=n.make),a={hasAppeared:!0,hasExited:!1,collapse:void 0,style:r({},n.style,{animationDuration:n.duration+"ms",animationDelay:n.delay+"ms",animationIterationCount:n.forever?"infinite":n.count,opacity:1,animationName:i}),className:n.className}),this.setState(e.collapse?this.collapse(a,e,n):a),t?(this.savedChild=c.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,n)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),u.ssr&&(0,u.disableSsr)()}},{key:"handleObserve",value:function(e,t){o(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&u.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];u.globalHide||(0,u.hideAll)(),this&&this.el&&(e||(e=this.props),u.ssr&&(0,u.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout((function(){return t.reveal(e)}),200)):n||this.inViewport(e)||e.force?this.animate(e):u.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var n=this.context.transitionGroup,i=n&&!n.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!i||u.ssr&&!u.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):u.ssr&&(u.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout((function(){return e.reveal(e.props,!0)}),2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,n=void 0;n="string"==typeof e?e.split("").map((function(e,t){return c.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)})):c.default.Children.toArray(e);var i=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],o=i.duration,s=i.reverse,l=n.length,d=2*o;this.props.collapse&&(d=parseInt(this.state.style.animationDuration,10),o=d/2);var p=s?l:0;return n.map((function(e){return"object"===(void 0===e?"undefined":a(e))&&e?c.default.cloneElement(e,{style:r({},e.props.style,t.state.style,{animationDuration:Math.round((0,u.cascade)(s?p--:p++,0,l,o,d))+"ms"})}):e}))}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===a(this.props.children)){var e=c.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:c.default.createElement("div",null,e)}return c.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var n=!1,i=t.props,a=i.style,o=i.className,s=i.children,l=this.props.disabled?o:(this.props.outEffect?u.namespace:"")+(this.state.className?" "+this.state.className:"")+(o?" "+o:"")||void 0,d=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&s&&this.state.style.animationName?(n=this.cascade(s),d=r({},a,{opacity:1})):d=this.props.disabled?a:r({},a,this.state.style);var p=r({},this.props.props,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({className:l,style:d},this.props.refProp,this.saveRef)),h=c.default.cloneElement(t,p,e?n||s:void 0);return void 0!==this.props.collapse?this.props.collapseEl?c.default.cloneElement(this.props.collapseEl,{style:r({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:h}):c.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:h}):h}},{key:"makeHandler",value:function(e){var t=this,n=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,u.raf)(n),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var n=this.el.offsetHeight,i=window.pageYOffset-t.getTop(this.el),a=Math.min(n,window.innerHeight)*(u.globalHide?e.fraction:0);return i>a-window.innerHeight&&i<n-a}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){u.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!u.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(c.default.Component);f.propTypes=h,f.defaultProps={fraction:.2,refProp:"ref"},f.contextTypes=m,f.displayName="RevealBase",t.default=f,e.exports=t.default},RXBc:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),a=n.n(i),o=n("Bl7J"),r=n("vrFN"),s=n("/eHF"),l=n.n(s),c=n("i9UJ"),d=function(){return a.a.createElement("div",{className:"section",id:"home"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"header-wrapper"},a.a.createElement(l.a,{bottom:!0},a.a.createElement("h2",null,"Hi, I'm ",c.a.name," ",a.a.createElement("span",{role:"img","aria-label":"Emoji"},"👋"))),a.a.createElement(l.a,{bottom:!0,cascade:!0},a.a.createElement("div",{className:"heading-wrapper"},a.a.createElement("h1",null,c.a.headerTagline[0]?c.a.headerTagline[0]:"Building digital"),a.a.createElement("h1",null," ",c.a.headerTagline[1]?c.a.headerTagline[1]:"products, brands"),a.a.createElement("h1",null," ",c.a.headerTagline[2]?c.a.headerTagline[2]:"and experience"))),a.a.createElement(l.a,{bottom:!0},a.a.createElement("p",null,c.a.headerParagraph)),a.a.createElement(l.a,{bottom:!0},a.a.createElement("a",{href:"mailto:"+(c.a.contactEmail?c.a.contactEmail:"hello@chetanverma.com"),className:"primary-btn"},"CONNECT WITH ME")))))},u=function(e){var t=e.heading,n=e.paragraph,i=e.imgUrl,o=e.projectLink;return a.a.createElement("div",{className:"card",style:{backgroundImage:"linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url("+i+")"}},a.a.createElement("div",{className:"content"},a.a.createElement("h1",{className:"header"},t),a.a.createElement("p",{className:"text"},n),a.a.createElement("a",{href:o||"#",target:"_blank",rel:"noopener noreferrer",className:"btn"},"Explore")))},p=function(){return a.a.createElement("div",{className:"section",id:"work"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"work-wrapper"},a.a.createElement(l.a,{bottom:!0},a.a.createElement("h1",null,"Work")),a.a.createElement("div",{className:"grid"},a.a.createElement(l.a,{bottom:!0,cascade:!0},c.a.projects.map((function(e,t){return a.a.createElement(u,{key:t,heading:e.title,paragraph:e.para,imgUrl:e.imageSrc,projectLink:e.url})})))))))},h=function(){return a.a.createElement("div",{className:"secion",id:"about"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"about-section"},a.a.createElement("div",{className:"content"},a.a.createElement(l.a,{bottom:!0,cascade:!0},a.a.createElement("h1",null,"About Me")),a.a.createElement("p",null,c.a.aboutParaOne,a.a.createElement("br",null),a.a.createElement("br",null),c.a.aboutParaTwo,a.a.createElement("br",null),a.a.createElement("br",null),c.a.aboutParaThree)),a.a.createElement("div",{className:"image-wrapper"},a.a.createElement("img",{src:c.a.aboutImage,alt:"about"})))))},m=function(){return a.a.createElement("div",{className:"section"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"skills-container"},a.a.createElement("h1",null,"Skills"),a.a.createElement("div",{className:"skills-grid"},c.a.skills.map((function(e,t){return a.a.createElement("div",{className:"skill",key:t},a.a.createElement("img",{src:e.img,alt:"css"}),a.a.createElement("p",null,e.para))}))))))},f=function(){return a.a.createElement("div",{className:"section"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"promotion-container"},a.a.createElement(l.a,{bottom:!0,cascade:!0},a.a.createElement("h1",null,c.a.promotionHeading)),a.a.createElement("p",null,c.a.promotionPara))))},v=function(){return a.a.createElement("div",{className:"section",id:"contact"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"footer-container"},a.a.createElement(l.a,{bottom:!0,cascade:!0},a.a.createElement("h1",null,"Contact"),a.a.createElement("h2",null,c.a.contactSubHeading)),a.a.createElement("a",{className:"email-link",href:"mailto:"+c.a.contactEmail},c.a.contactEmail),a.a.createElement("div",{className:"social-icons"},c.a.social.map((function(e,t){return a.a.createElement("a",{key:t,href:e.url,target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{src:e.img,alt:"icons"}))}))),a.a.createElement("span",null,"Made With ",a.a.createElement("icon",null,"❤")," by","Melody"))))};t.default=function(){return a.a.createElement(o.a,null,a.a.createElement(r.a,{title:"Melody's profile"}),a.a.createElement(d,null),a.a.createElement(p,null),a.a.createElement(h,null),a.a.createElement(m,null),a.a.createElement(f,null),a.a.createElement(v,null))}},ar19:function(e,t,n){"use strict";function i(e){try{return m.insertRule(e,m.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function a(){d||(t.globalHide=d=!0,window.removeEventListener("scroll",a,!0),i("."+o+" { opacity: 0; }"),window.removeEventListener("orientationchange",a,!0),window.document.removeEventListener("visibilitychange",a))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=i,t.cascade=function(e,t,n,i,a){var o=Math.log(i),r=(Math.log(a)-o)/(n-t);return Math.exp(o+r*(e-t))},t.animation=function(e){if(!m)return"";var t="@keyframes "+(f+p)+"{"+e+"}",n=h[e];return n?""+f+n:(m.insertRule(t,m.cssRules.length),h[e]=p,""+f+p++)},t.hideAll=a,t.default=function(e){var n=e.ssrFadeout;t.fadeOutEnabled=n};var o=t.namespace="react-reveal",r=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),s=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},c=t.disableSsr=function(){return t.ssr=r=!1},d=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),u=(t.ie10=!1,t.collapseend=void 0),p=1,h={},m=!1,f=o+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=s="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=r=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),r&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=r=!1),r&&window.setTimeout(c,1500),s||(t.collapseend=u=document.createEvent("Event"),u.initEvent("collapseend",!0,!0));var v=document.createElement("style");document.head.appendChild(v),v.sheet&&v.sheet.cssRules&&v.sheet.insertRule&&(m=v.sheet,window.addEventListener("scroll",a,!0),window.addEventListener("orientationchange",a,!0),window.document.addEventListener("visibilitychange",a))}},"eH+L":function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=function(e,t,n,i){return"in"in e&&(e.when=e.in),o.default.Children.count(i)<2?o.default.createElement(r.default,a({},e,{inEffect:t,outEffect:n,children:i})):(i=o.default.Children.map(i,(function(i){return o.default.createElement(r.default,a({},e,{inEffect:t,outEffect:n,children:i}))})),"Fragment"in o.default?o.default.createElement(o.default.Fragment,null,i):o.default.createElement("span",null,i))};var o=i(n("q1tI")),r=i(n("28nh"));e.exports=t.default}}]);
//# sourceMappingURL=component---src-pages-index-js-0cd466247aed3c99fb75.js.map