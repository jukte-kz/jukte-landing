(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[75],{121:function(e,s,t){"use strict";t.d(s,{Z:function(){return c}});var r=t(5893),l=t(5675),a=t.n(l),n=t(1163);function c(e){var s=e.removeUrl,t=e.text,l=(0,n.useRouter)(),c=function(){l.push(s)};return(0,r.jsxs)("div",{className:"flex items-center justify-between header-main w-full border-b-2 px-4 py-2",children:[(0,r.jsxs)("button",{onClick:c,className:"flex items-center",children:[(0,r.jsx)(a(),{width:24,height:24,src:"/assets/icon/left-arrow.svg",alt:""}),(0,r.jsx)("p",{className:"ml-4",children:t})]}),(0,r.jsx)(a(),{width:80,height:40,src:"/assets/image/logo.svg"})]})}},4028:function(e,s,t){"use strict";t.d(s,{Z:function(){return c}});var r=t(5893);t(381);var l=t(1664),a=t.n(l),n=t(7294);function c(e){var s=e.shipment,t=e.product,l=e.cub,c=e.price,i=e.logPrice,o=e.weight,d=e.date,u=e.type,f=e.from,$=e.to,m=e.distance,x=e.description,p=e.status,h=e.phone,v=e.role,j=e.id,g=e.onClick,N=(0,n.useState)(!1),b=N[0],y=N[1];return(0,r.jsxs)("div",{className:"rounded shadow-sm bg-white w-full myCard-container p-4",children:[(0,r.jsxs)("div",{className:"pb-2 mb-4 border-b-2 items-start justify-between",children:[(0,r.jsxs)("div",{className:"mb-2",children:["open"===p&&(0,r.jsx)("span",{className:"bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900",children:"открытая"}),"inProgress"===p&&(0,r.jsx)("span",{className:"bg-yellow-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900",children:"В процессе"})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("img",{className:"mr-2",src:"/assets/icon/distance.svg",alt:""}),(0,r.jsxs)("p",{className:"font-bold",children:[f," - ",$]})]})]}),b&&(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("img",{className:"mr-2",src:"/assets/icon/tenge.svg",alt:""}),(0,r.jsxs)("h1",{children:["Цена: ",c," ₸ ",(0,r.jsx)("br",{})," Услуги логиста: ",i," ₸"]})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("img",{className:"mr-2",src:"/assets/icon/weight.svg",alt:""}),(0,r.jsxs)("p",{children:[o," тонн ",l&&"/ "+l+" м3"]})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("img",{className:"mr-2",src:"/assets/icon/date.svg",alt:""}),(0,r.jsx)("p",{children:d})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("img",{className:"mr-2",src:"/assets/icon/truck.svg",alt:""}),(0,r.jsx)("p",{children:u})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("img",{className:"mr-2",src:"/assets/icon/Measure.svg",alt:""}),(0,r.jsxs)("p",{children:[m," км"]})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("img",{className:"mr-2",src:"/assets/icon/time.svg",alt:""}),(0,r.jsx)("p",{children:x})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("img",{className:"mr-2",src:"/assets/icon/carShipment.svg",alt:""}),(0,r.jsx)("p",{children:s})]}),(0,r.jsxs)("div",{className:"items-center",children:[(0,r.jsx)("p",{className:"font-bold",children:"Детали перевозки:"}),(0,r.jsx)("p",{children:t})]})]}),"driver"===v?"inProgress"!==p?(0,r.jsx)(a(),{href:{pathname:"/[slug]",as:"/slug-1",query:{slug:j}},children:(0,r.jsx)("div",{className:"mt-4 w-full flex justify-center link-button rounded",children:"Редактировать"})}):(0,r.jsx)(r.Fragment,{}):(0,r.jsx)("div",{onClick:g,children:(0,r.jsx)(a(),{href:"tel:+"+h,children:(0,r.jsx)("div",{className:"mt-4 w-full flex justify-center link-button rounded",children:"Позвонить водителю"})})})]}),(0,r.jsx)("button",{onClick:function(){y(!b)},className:"mt-2 w-full bg-blue-400 text-white rounded p-1",children:b?"Закрыть":"Подробнее"})]})}},891:function(e,s,t){"use strict";t.d(s,{Z:function(){return c}});var r=t(5893);t(381);var l=t(1664),a=t.n(l),n=t(7294);function c(e){var s=e.shipment,t=e.product,l=e.cub,c=e.price,i=e.logPrice,o=e.weight,d=e.date,u=e.type,f=e.from,$=e.to,m=e.distance,x=e.description,p=e.status,h=(e.phone,e.role,e.id),v=e.detail,j=(0,n.useState)(!1),g=j[0],N=j[1];return(0,r.jsxs)("div",{className:"rounded shadow-sm bg-white w-full myCard-container p-4",children:[(0,r.jsxs)("div",{className:"mb-2",children:["open"===p&&(0,r.jsx)("span",{className:"bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900",children:"открытая"}),"inProgress"===p&&(0,r.jsx)("span",{className:"bg-yellow-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900",children:"В процессе"})]}),(0,r.jsx)("div",{className:"pb-2 mb-4 border-b-2 flex items-start justify-between",children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("img",{className:"mr-2",src:"/assets/icon/product.svg",alt:""}),(0,r.jsx)("h2",{className:"mb-2",children:t})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("img",{className:"mr-2",src:"/assets/icon/distance.svg",alt:""}),(0,r.jsxs)("p",{className:"font-bold",children:[f," - ",$]})]})]})}),g&&(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("img",{className:"mr-2",src:"/assets/icon/tenge.svg",alt:""}),(0,r.jsxs)("h1",{children:["Цена: ",c," ₸ ",(0,r.jsx)("br",{})," Услуги логиста: ",i," ₸"]})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("img",{className:"mr-2",src:"/assets/icon/weight.svg",alt:""}),(0,r.jsxs)("p",{children:[o," тонн ",l&&"/ "+l+" м3"]})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("img",{className:"mr-2",src:"/assets/icon/date.svg",alt:""}),(0,r.jsx)("p",{children:d})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("img",{className:"mr-2",src:"/assets/icon/truck.svg",alt:""}),(0,r.jsx)("p",{children:u})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("img",{className:"mr-2",src:"/assets/icon/Measure.svg",alt:""}),(0,r.jsxs)("p",{children:[m," км"]})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("img",{className:"mr-2",src:"/assets/icon/time.svg",alt:""}),(0,r.jsx)("p",{children:x})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("img",{className:"mr-2",src:"/assets/icon/carShipment.svg",alt:""}),(0,r.jsx)("p",{children:s})]}),(0,r.jsxs)("div",{className:"items-center",children:[(0,r.jsx)("p",{className:"font-bold",children:"Детали перевозки:"}),(0,r.jsx)("p",{children:v})]})]}),"inProgress"!==p&&(0,r.jsx)(a(),{href:{pathname:"/[slug]",as:"/slug-1",query:{slug:h}},children:(0,r.jsx)("div",{className:"mt-4 w-full flex justify-center link-button rounded",children:"Редактировать"})})]}),(0,r.jsx)("button",{onClick:function(){N(!g)},className:"mt-2 w-full bg-blue-400 text-white rounded p-1",children:g?"Закрыть":"Подробнее"})]})}},1210:function(e,s){"use strict";function t(e,s,t,r){return!1}Object.defineProperty(s,"__esModule",{value:!0}),s.getDomainLocale=t,("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),e.exports=s.default)},8418:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var r=t(4941).Z;t(5753).default,Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var l=t(2648).Z,a=t(7273).Z,n=l(t(7294)),c=t(6273),i=t(2725),o=t(3462),d=t(1018),u=t(7190),f=t(1210),$=t(8684),m=void 0!==n.default.useTransition,x={};function p(e,s,t,r){if(e&&c.isLocalURL(s)){Promise.resolve(e.prefetch(s,t,r)).catch(function(e){});var l=r&&void 0!==r.locale?r.locale:e&&e.locale;x[s+"%"+t+(l?"%"+l:"")]=!0}}var h=n.default.forwardRef(function(e,s){var t,l,h=e.href,v=e.as,j=e.children,g=e.prefetch,N=e.passHref,b=e.replace,y=e.shallow,_=e.scroll,w=e.locale,C=e.onClick,k=e.onMouseEnter,L=e.onTouchStart,M=e.legacyBehavior,R=void 0===M?!0!==Boolean(!1):M,P=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);t=j,R&&("string"==typeof t||"number"==typeof t)&&(t=n.default.createElement("a",null,t));var E=!1!==g,S=r(m?n.default.useTransition():[],2)[1],T=n.default.useContext(o.RouterContext),U=n.default.useContext(d.AppRouterContext);U&&(T=U);var Z=n.default.useMemo(function(){var e=r(c.resolveHref(T,h,!0),2),s=e[0],t=e[1];return{href:s,as:v?c.resolveHref(T,v):t||s}},[T,h,v]),A=Z.href,D=Z.as,H=n.default.useRef(A),K=n.default.useRef(D);R&&(l=n.default.Children.only(t));var B=R?l&&"object"==typeof l&&l.ref:s,q=r(u.useIntersection({rootMargin:"200px"}),3),G=q[0],F=q[1],I=q[2],O=n.default.useCallback(function(e){(K.current!==D||H.current!==A)&&(I(),K.current=D,H.current=A),G(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[D,B,A,I,G]);n.default.useEffect(function(){var e=F&&E&&c.isLocalURL(A),s=void 0!==w?w:T&&T.locale,t=x[A+"%"+D+(s?"%"+s:"")];e&&!t&&p(T,A,D,{locale:s})},[D,A,F,w,E,T]);var z={ref:O,onClick:function(e){R||"function"!=typeof C||C(e),R&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(e),e.defaultPrevented||function(e,s,t,r,l,a,n,i,o,d){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(f=(u=e).currentTarget.target)||"_self"===f)&&!u.metaKey&&!u.ctrlKey&&!u.shiftKey&&!u.altKey&&(!u.nativeEvent||2!==u.nativeEvent.which)&&c.isLocalURL(t)){e.preventDefault();var u,f,$=function(){"beforePopState"in s?s[l?"replace":"push"](t,r,{shallow:a,locale:i,scroll:n}):s[l?"replace":"push"](t,{forceOptimisticNavigation:!d})};o?o($):$()}}(e,T,A,D,b,y,_,w,U?S:void 0,E)},onMouseEnter:function(e){R||"function"!=typeof k||k(e),R&&l.props&&"function"==typeof l.props.onMouseEnter&&l.props.onMouseEnter(e),!(!E&&U)&&c.isLocalURL(A)&&p(T,A,D,{priority:!0})},onTouchStart:function(e){R||"function"!=typeof L||L(e),R&&l.props&&"function"==typeof l.props.onTouchStart&&l.props.onTouchStart(e),!(!E&&U)&&c.isLocalURL(A)&&p(T,A,D,{priority:!0})}};if(!R||N||"a"===l.type&&!("href"in l.props)){var J=void 0!==w?w:T&&T.locale,Q=T&&T.isLocaleDomain&&f.getDomainLocale(D,J,T.locales,T.domainLocales);z.href=Q||$.addBasePath(i.addLocale(D,J,T&&T.defaultLocale))}return R?n.default.cloneElement(l,z):n.default.createElement("a",Object.assign({},P,z),t)});s.default=h,("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),e.exports=s.default)},1018:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.GlobalLayoutRouterContext=s.LayoutRouterContext=s.AppRouterContext=void 0;var r=(0,t(2648).Z)(t(7294)),l=r.default.createContext(null);s.AppRouterContext=l;var a=r.default.createContext(null);s.LayoutRouterContext=a;var n=r.default.createContext(null);s.GlobalLayoutRouterContext=n},1664:function(e,s,t){e.exports=t(8418)}}]);
//# sourceMappingURL=75-9232299d9cf6d173.js.map