(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4e3)}])},7932:function(e,n){"use strict";n.Z={src:"/_next/static/media/logo_bordered.d10c687d.png",height:727,width:944,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAx0lEQVR42mMAAZnK/yLMCW+qdd2WH9P02rSLIf1vUkT3fxYGEJjZ8p9FOOF1ibqq41sGYYb7DIIML7SMi28xZP4PYQCDCf+lGBxnr2AQYvj5XM2l4qCqfT+DMMM/3qCTrQzvgKZ8NsqueqLl+6tahuHxdxXL6svKpl2zZBm+vtONeftON86b4ZeS2t6PerH/+5TNrzNAANsGDZ+PP3Sj/n+RZehg+M/AIHbApt+UIe5ZlUfKtyCj5M8xDDGP89/KSard4WMQBAC100n5vbBPLQAAAABJRU5ErkJggg=="}},8418:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i=[],s=!0,c=!1;try{for(t=t.call(e);!(s=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);s=!0);}catch(o){c=!0,a=o}finally{try{s||null==t.return||t.return()}finally{if(c)throw a}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var i,s=(i=t(7294))&&i.__esModule?i:{default:i},c=t(6273),o=t(387),l=t(7190);var d={};function f(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;d[n+"%"+t+(a?"%"+a:"")]=!0}}var u=function(e){var n,t=!1!==e.prefetch,r=o.useRouter(),i=s.default.useMemo((function(){var n=a(c.resolveHref(r,e.href,!0),2),t=n[0],i=n[1];return{href:t,as:e.as?c.resolveHref(r,e.as):i||t}}),[r,e.href,e.as]),u=i.href,x=i.as,m=e.children,p=e.replace,h=e.shallow,b=e.scroll,j=e.locale;"string"===typeof m&&(m=s.default.createElement("a",null,m));var g=(n=s.default.Children.only(m))&&"object"===typeof n&&n.ref,y=a(l.useIntersection({rootMargin:"200px"}),2),v=y[0],w=y[1],N=s.default.useCallback((function(e){v(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,v]);s.default.useEffect((function(){var e=w&&t&&c.isLocalURL(u),n="undefined"!==typeof j?j:r&&r.locale,a=d[u+"%"+x+(n?"%"+n:"")];e&&!a&&f(r,u,x,{locale:n})}),[x,u,w,j,t,r]);var k={ref:N,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,i,s,o){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),n[a?"replace":"push"](t,r,{shallow:i,locale:o,scroll:s}))}(e,r,u,x,p,h,b,j)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),c.isLocalURL(u)&&f(r,u,x,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var A="undefined"!==typeof j?j:r&&r.locale,M=r&&r.isLocaleDomain&&c.getDomainLocale(x,A,r&&r.locales,r&&r.domainLocales);k.href=M||c.addBasePath(c.addLocale(x,A,r&&r.defaultLocale))}return s.default.cloneElement(n,k)};n.default=u},7190:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i=[],s=!0,c=!1;try{for(t=t.call(e);!(s=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);s=!0);}catch(o){c=!0,a=o}finally{try{s||null==t.return||t.return()}finally{if(c)throw a}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,t=e.rootMargin,r=e.disabled||!c,d=i.useRef(),f=a(i.useState(!1),2),u=f[0],x=f[1],m=a(i.useState(n?n.current:null),2),p=m[0],h=m[1],b=i.useCallback((function(e){d.current&&(d.current(),d.current=void 0),r||u||e&&e.tagName&&(d.current=function(e,n,t){var r=function(e){var n,t={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===t.root&&e.margin===t.margin}));r?n=o.get(r):(n=o.get(t),l.push(t));if(n)return n;var a=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=a.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return o.set(t,n={id:t,observer:i,elements:a}),n}(t),a=r.id,i=r.observer,s=r.elements;return s.set(e,n),i.observe(e),function(){if(s.delete(e),i.unobserve(e),0===s.size){i.disconnect(),o.delete(a);var n=l.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));n>-1&&l.splice(n,1)}}}(e,(function(e){return e&&x(e)}),{root:p,rootMargin:t}))}),[r,p,t,u]);return i.useEffect((function(){if(!c&&!u){var e=s.requestIdleCallback((function(){return x(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[u]),i.useEffect((function(){n&&h(n.current)}),[n]),[b,u]};var i=t(7294),s=t(9311),c="undefined"!==typeof IntersectionObserver;var o=new Map,l=[]},4e3:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return x}});var r=t(5893),a=t(5988),i=t.n(a),s=t(9008),c=t(7932),o="/_next/static/media/twitter_icon.a4706b53.png",l="/_next/static/media/github_icon.df059a84.png",d="/_next/static/media/meshiiru_icon.b4d571e6.png",f=(t(7294),function(e){return(0,r.jsxs)("a",{href:e.url,className:"jsx-e6bcab1696d32628 card",children:[(0,r.jsx)("div",{className:"jsx-e6bcab1696d32628 left",children:(0,r.jsx)("img",{src:e.image,width:"100",height:"100",className:"jsx-e6bcab1696d32628"})}),(0,r.jsxs)("div",{className:"jsx-e6bcab1696d32628 right",children:[(0,r.jsx)("h3",{className:"jsx-e6bcab1696d32628",children:e.name}),(0,r.jsx)("p",{className:"jsx-e6bcab1696d32628",children:e.description})]}),(0,r.jsx)(i(),{id:"e6bcab1696d32628",children:".card.jsx-e6bcab1696d32628{margin:0.4rem;\n-webkit-flex-basis:100%;\n-ms-flex-preferred-size:100%;\nflex-basis:100%;\npadding:1.5rem;\ntext-align:left;\ncolor:inherit;\n-webkit-text-decoration:none;\ntext-decoration:none;\nborder:1px solid #eaeaea;\nborder-radius:10px;\n-webkit-transition:color 0.15s ease, border-color 0.15s ease;\ntransition:color 0.15s ease, border-color 0.15s ease;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\n-webkit-justify-content:center;\njustify-content:center}\n.card.jsx-e6bcab1696d32628 h3.jsx-e6bcab1696d32628{margin:0 0 0.5rem 0;\nfont-size:1.2rem}\n.card.jsx-e6bcab1696d32628 p.jsx-e6bcab1696d32628{margin:0;\nfont-size:1rem;\nline-height:1.5;\ncolor:gray}\n.right.jsx-e6bcab1696d32628{margin-left:1rem}\n.appstoreLink.jsx-e6bcab1696d32628{bottom:0px}"})]})}),u=t(1664);function x(){return(0,r.jsxs)("div",{className:"jsx-796347da6c58e385 container",children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{className:"jsx-796347da6c58e385",children:"AKADA TEPPEI"}),(0,r.jsx)("link",{rel:"icon",href:"/logo_squire.png",className:"jsx-796347da6c58e385"})]}),(0,r.jsxs)("main",{className:"jsx-796347da6c58e385",children:[(0,r.jsx)("img",{src:c.Z.src,width:"200",height:"154",className:"jsx-796347da6c58e385"}),(0,r.jsx)("h1",{className:"jsx-796347da6c58e385 title",children:"Akada Teppei"}),(0,r.jsxs)("div",{className:"jsx-796347da6c58e385 icons",children:[(0,r.jsx)("a",{href:"https://twitter.com/potan2005",className:"jsx-796347da6c58e385",children:(0,r.jsx)("img",{src:o,width:"32",height:"32",className:"jsx-796347da6c58e385"})}),(0,r.jsx)("a",{href:"https://github.com/akadateppei",className:"jsx-796347da6c58e385",children:(0,r.jsx)("img",{src:l,width:"32",height:"32",className:"jsx-796347da6c58e385"})})]}),(0,r.jsx)("h2",{className:"jsx-796347da6c58e385",children:"Works"}),(0,r.jsx)("div",{className:"jsx-796347da6c58e385 grid",children:(0,r.jsx)(f,{name:"\u30e1\u30b7\u30a4\u30eb",description:"\u5bb6\u65cf\u3084\u30ab\u30c3\u30d7\u30eb\u3067\u6669\u5fa1\u98ef\u306e\u4e88\u5b9a\u3092\u5171\u6709",image:d,url:"https://itunes.apple.com/jp/app/%E3%83%A1%E3%82%B7%E3%82%A4%E3%83%AB/id1570150194"})}),(0,r.jsx)("h2",{className:"jsx-796347da6c58e385",children:"Job Experience"}),(0,r.jsxs)("p",{className:"jsx-796347da6c58e385 description",children:[(0,r.jsx)("span",{className:"jsx-796347da6c58e385 date",children:"4/2020~\u3000"}),"iOS Engineer",(0,r.jsx)("span",{className:"jsx-796347da6c58e385 corpName",children:" @Moi Corporation"})]}),(0,r.jsx)("h2",{className:"jsx-796347da6c58e385",children:"Education"}),(0,r.jsx)("p",{className:"jsx-796347da6c58e385 description",children:(0,r.jsxs)("a",{href:"https://www.mech.nagoya-u.ac.jp/MICRO/",className:"jsx-796347da6c58e385",children:["Master of Micro-Nano Systems Engineering",(0,r.jsx)("br",{className:"jsx-796347da6c58e385"}),(0,r.jsx)("span",{className:"jsx-796347da6c58e385 corpName",children:" @Nagoya University"})]})}),(0,r.jsx)("p",{className:"jsx-796347da6c58e385 description",children:(0,r.jsxs)("a",{href:"https://www.engg.nagoya-u.ac.jp/school/mechanical/index.html",className:"jsx-796347da6c58e385",children:["Bachelor of Mechanical and Aerospace Engineering",(0,r.jsx)("br",{className:"jsx-796347da6c58e385"}),(0,r.jsx)("span",{className:"jsx-796347da6c58e385 corpName",children:" @Nagoya University"})]})}),(0,r.jsx)("h2",{className:"jsx-796347da6c58e385",children:"Blogs"}),(0,r.jsx)("div",{className:"jsx-796347da6c58e385 blogLink",children:(0,r.jsx)(u.default,{href:"/blog",children:(0,r.jsx)("p",{className:"jsx-796347da6c58e385 description corpName",children:(0,r.jsx)("a",{className:"jsx-796347da6c58e385",children:"\u307a\u307a\u30da\u30fc\u307a\u307a\u30fc\u307a\u307a (Daily Blog)"})})})}),(0,r.jsx)("div",{className:"jsx-796347da6c58e385 blogLink",children:(0,r.jsx)(u.default,{href:"/teck-blog",children:(0,r.jsx)("p",{className:"jsx-796347da6c58e385 description corpName",children:(0,r.jsx)("a",{className:"jsx-796347da6c58e385",children:"\u3066\u307a\u3066\u30da\u30c6\u30c3\u30af (Tech Blog)"})})})}),(0,r.jsx)("h2",{className:"jsx-796347da6c58e385",children:"Illustrations"})]}),(0,r.jsx)(i(),{id:"a0b55ac8afd84ce9",children:"h2.jsx-796347da6c58e385{margin-top:3rem}\n.container.jsx-796347da6c58e385{min-height:100vh;\npadding:0 0.2rem;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex-direction:column;\n-ms-flex-direction:column;\nflex-direction:column;\n-webkit-justify-content:center;\njustify-content:center;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\nwidth:500px;\nmargin-left:auto;\nmargin-right:auto;\nbackground-color:white}\nmain.jsx-796347da6c58e385{padding:2rem 0;\n-webkit-flex:1;\n-ms-flex:1;\nflex:1;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex-direction:column;\n-ms-flex-direction:column;\nflex-direction:column;\n-webkit-justify-content:center;\njustify-content:center;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center}\na.jsx-796347da6c58e385{color:inherit;\n-webkit-text-decoration:none;\ntext-decoration:none}\np.jsx-796347da6c58e385{margin-block-start:0.5em}\n.title.jsx-796347da6c58e385{margin:0.6rem;\nline-height:1.15;\nfont-size:3rem}\n.title.jsx-796347da6c58e385, .description.jsx-796347da6c58e385{text-align:center}\n.description.jsx-796347da6c58e385{line-height:1.5;\nfont-size:1.2rem}\ncode.jsx-796347da6c58e385{background:#fafafa;\nborder-radius:5px;\npadding:0.75rem;\nfont-size:1.1rem;\nfont-family:Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace}\n.logo.jsx-796347da6c58e385{height:1em}\n.icons.jsx-796347da6c58e385{display:inline-block}\n.icons.jsx-796347da6c58e385 a.jsx-796347da6c58e385{padding:0.5rem}\n.grid.jsx-796347da6c58e385{display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\n-webkit-justify-content:center;\njustify-content:center;\nflex-wrap:wrap}\n.date.jsx-796347da6c58e385{color:gray}\n.corpName.jsx-796347da6c58e385{color:#0068ff}\n@media (max-width:600px) {.container.jsx-796347da6c58e385{width:100%;\n-webkit-flex-direction:column;\n-ms-flex-direction:column;\nflex-direction:column}}"}),(0,r.jsx)(i(),{id:"99b1ed68425345b1",children:"html, body{background-color:#0068ff;\npadding:0;\nmargin:0;\nfont-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif}\n*{box-sizing:border-box}"})]})}},1664:function(e,n,t){e.exports=t(8418)}},function(e){e.O(0,[774,12,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);