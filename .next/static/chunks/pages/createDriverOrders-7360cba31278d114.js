(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[657],{6587:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/createDriverOrders",function(){return s(2890)}])},121:function(e,t,s){"use strict";s.d(t,{Z:function(){return c}});var a=s(5893),l=s(5675),n=s.n(l),r=s(1163);function c(e){var t=e.removeUrl,s=e.text,l=(0,r.useRouter)(),c=function(){l.push(t)};return(0,a.jsxs)("div",{className:"flex items-center justify-between header-main w-full border-b-2 px-4 py-2",children:[(0,a.jsxs)("button",{onClick:c,className:"flex items-center",children:[(0,a.jsx)(n(),{width:24,height:24,src:"/assets/icon/left-arrow.svg",alt:""}),(0,a.jsx)("p",{className:"ml-4",children:s})]}),(0,a.jsx)(n(),{width:80,height:40,src:"/assets/image/logo.svg"})]})}},2890:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return P}});var a=s(4924),l=s(6042),n=s(9396),r=s(603),c=s(5893),i=s(121),o=s(9395),$=s(6627),u=s.n($),d=s(7294),h=s(1955),m=s(9669),p=s.n(m),x=s(129),f=s.n(x),b=s(9198),v=s.n(b);s(944);var g=s(3424),_=s(4298),j=s.n(_),N=s(1163),k=s(1806),y=s(5165),w=s(1751),C=s(381),S=s.n(C);function P(){var e,t=(0,d.useState)(" "),s=t[0],$=t[1],m=(0,d.useState)(""),x=m[0],b=m[1],_=(0,d.useState)(""),C=_[0],P=_[1],Z=(0,d.useState)(""),F=Z[0],z=Z[1],M=(0,d.useState)(""),E=M[0],R=M[1],q=(0,d.useState)([null,null]),D=q[0],T=q[1],L=(0,r.Z)(D,2),O=L[0],U=L[1],A=(0,d.useState)(""),B=A[0],X=A[1],I=(0,d.useState)(""),Y=I[0],G=I[1],H=(0,d.useState)(""),J=H[0],K=H[1],Q=(0,d.useState)(""),V=Q[0],W=Q[1],ee=(0,d.useState)(""),et=ee[0],es=ee[1],ea=(0,d.useState)(""),el=ea[0],en=ea[1],er=(0,d.useState)(!1),ec=er[0],ei=er[1],eo=(0,d.useState)(!1),e$=eo[0],eu=eo[1],ed=(0,d.useState)(!1),eh=ed[0],em=ed[1],ep=(0,d.useState)(!1),ex=(ep[0],ep[1]),ef=(0,d.useState)(!1),eb=ef[0],ev=ef[1],eg=(0,d.useRef)(),e_=(0,N.useRouter)(),ej=(0,d.useCallback)(function(e){b(e.target.value)},[]),e0=(0,d.useCallback)(function(e){$(e.target.value)},[]),eN=(0,d.useCallback)(function(e){z(e.target.value.split(" ")[2])}),e2=(0,d.useCallback)(function(e){R(e.target.value.split(" ")[2])});(0,d.useEffect)(function(){ei(C.length>0&&F.length>0),eu(C.length>0&&F.length>0&&O&&x.length>0&&parseInt(et.replace(/\s/g,""))>0)}),(0,d.useEffect)(function(){parseInt(F)>22?"Тралл"!==J&&"Самосвал"!==J&&ex(!0):ex(!1)});var ek=function(e){T(e)},e3=function(e){W(e.label)},ey=function(){p()({method:"post",url:"https://api.jukte.kz/orders/",data:f().stringify({product:s,description:x,price:parseInt(et.replace(/\s/g,"")),weight:parseInt(F.replace(/\s/g,"")),date:"".concat(S()(O).format("L")," - ").concat(S()(U).format("L")),type:J,from:B,to:Y,loadType:V,cubProduct:E,logPrice:parseInt(el.replace(/\s/g,"")),distance:parseInt(C.replace(/\s/g,""))}),headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8",token:h.Z.get("accessToken")}}).then(function(e){200===e.status&&em(!0)})};(0,d.useEffect)(function(){eb||p()({method:"get",url:"https://api.jukte.kz/user/info",headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8",token:h.Z.get("accessToken")}}).then(function(e){K(e.data.transport.type),ev(!0)}).catch(function(e){e&&ev(!0)})});var e8=function(){var e=parseInt(C.replace(/\s/g,"")),t=w.t.filter(function(e){return e.label===J})[0].price;if(27===t){var s=t*parseFloat(F)*e-t*parseFloat(F)*e*.1;es(s+" ₸"),en(.1*s+" ₸")}else{var a=e*t-e*t*.1;es(a+" ₸"),en(.1*a+" ₸")}},ew=function(){em(!1),e_.push("/home")};return(0,c.jsxs)("div",{children:[(0,c.jsx)(i.Z,{removeUrl:"/home",text:"На главную"}),(0,c.jsxs)("div",{className:"settings-main py-6 px-4",children:[(0,c.jsx)("h1",{children:"Создать заявку"}),(0,c.jsx)("hr",{className:"mt-4"}),(0,c.jsx)("form",{className:"flex flex-col mt-4 login-form",children:(0,c.jsxs)("div",{className:"mb-auto",children:[(0,c.jsxs)("div",{className:"w-full mb-4 relative",style:{height:"400px"},children:[(0,c.jsx)("div",{id:"map",ref:eg}),(0,c.jsx)(j(),{id:"yandex-maps",src:"https://api-maps.yandex.ru/2.1/?apikey=0fb09044-5132-48a3-8653-02425b40b298&lang=ru_RU",onLoad:function(){var e=function(){var e=new ymaps.Map(eg.current,{center:[51.128207,71.43042],zoom:9,controls:["routePanelControl"]}).controls.get("routePanelControl");e.routePanel.options.set({types:{auto:!0,pedestrian:!1}}),e.routePanel.getRouteAsync().then(function(t){t.model.events.add("requestsuccess",function(){var s=t.getActiveRoute();s&&(b(s.properties.get("duration").text),P(s.properties.get("distance").text),X(e.routePanel.state.get("from")),G(e.routePanel.state.get("to")))})},function(e){console.log(e)})};ymaps.ready(e)}})]}),(0,c.jsxs)("div",{className:"input-container",children:[(0,c.jsx)("div",{className:"mb-2 block",children:(0,c.jsx)(o.__,{htmlFor:"desc",value:"Детали перевозки"})}),(0,c.jsx)(o.gx,{value:s,onChange:e0})]}),(0,c.jsxs)("div",{className:"input-container",children:[(0,c.jsx)("div",{className:"mb-2 block",children:(0,c.jsx)(o.__,{htmlFor:"surname",value:"Выберите дату отправления"})}),(0,c.jsx)(v(),(e={selected:O,dateFormat:"dd.MM.yyyy",onChange:ek,startDate:O,endDate:U,placeholderText:"ДД.ММ.ГГГГ - ДД.ММ.ГГГГ",dateFormatCalendar:"MMMM",className:"block w-full border focus\\:ring-blue-500:focus disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 rounded-lg sm:text-md p-4",yearDropdownItemNumber:100,scrollableYearDropdown:!0,minDate:new Date,selectsRange:!0,isClearable:!0},(0,a.Z)(e,"onChange",function(e){T(e)}),(0,a.Z)(e,"locale",k.Z),e))]}),(0,c.jsxs)("div",{className:"input-container",children:[(0,c.jsx)("div",{className:"mb-2 block",children:(0,c.jsx)(o.__,{htmlFor:"transport",value:"Выберите тип погрузки"})}),(0,c.jsx)(g.ZP,{className:"react-select block w-full border focus\\:ring-blue-500:focus disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 rounded-lg sm:text-md p-2",classNamePrefix:"name",placeholder:"Выберите тип погрузки",options:y.t,onChange:e3,isSearchable:!1})]}),(0,c.jsxs)("div",{className:"input-container",children:[(0,c.jsx)("div",{className:"mb-2 block",children:(0,c.jsx)(o.__,{htmlFor:"weight",value:"Вес груза"})}),(0,c.jsx)(u(),{value:F,maskChar:null,onChange:eN,mask:"тонн | 99",children:function(e){return(0,c.jsx)(o.oi,(0,n.Z)((0,l.Z)({},e),{id:"distance",type:"tel",placeholder:"тонн | 0",required:!0,sizing:"lg"}))}})]}),(0,c.jsxs)("div",{className:"input-container",children:[(0,c.jsx)("div",{className:"mb-2 block",children:(0,c.jsx)(o.__,{htmlFor:"cubProduct",value:"Кубометр груза"})}),(0,c.jsx)(u(),{value:E,maskChar:null,onChange:e2,mask:"м3 | 999",children:function(e){return(0,c.jsx)(o.oi,(0,n.Z)((0,l.Z)({},e),{onChange:e2,value:E,id:"distance",type:"tel",placeholder:"м3 | 0",sizing:"lg"}))}})]}),(0,c.jsxs)("div",{className:"input-container",children:[(0,c.jsx)("div",{className:"mb-2 block",children:(0,c.jsx)(o.__,{htmlFor:"distance",value:"Расстояние"})}),(0,c.jsx)(o.oi,{disabled:!0,id:"distance",type:"tel",value:C,placeholder:"0 км",required:!0,sizing:"lg"})]}),(0,c.jsxs)("div",{className:"input-container",children:[(0,c.jsx)("div",{className:"mb-2 block",children:(0,c.jsx)(o.__,{htmlFor:"desc",value:"Время в пути"})}),(0,c.jsx)(o.oi,{onChange:ej,value:x,disabled:!0,id:"desc",type:"text",placeholder:"0 ч.",required:!0,sizing:"lg"})]}),(0,c.jsxs)("div",{className:"input-container",children:[(0,c.jsx)("div",{className:"mb-2 block",children:(0,c.jsx)(o.__,{htmlFor:"price",value:"Цена"})}),(0,c.jsx)(o.oi,{disabled:!0,id:"price",value:et,placeholder:"0 ₸",required:!0,sizing:"lg"})]}),(0,c.jsxs)("div",{className:"input-container",children:[(0,c.jsx)("div",{className:"mb-2 block",children:(0,c.jsx)(o.__,{htmlFor:"price",value:"Цена за услуги логиста"})}),(0,c.jsx)(o.oi,{disabled:!0,id:"price",value:el,placeholder:"0 ₸",required:!0,sizing:"lg"})]})]})}),(0,c.jsx)("button",{type:"button",disabled:!ec,className:"flex items-center settings-button px-4 mt-4",onClick:e8,children:(0,c.jsx)("p",{className:"w-full",children:"Посчиатать"})}),(0,c.jsx)("button",{type:"button",disabled:!e$,className:"flex items-center settings-button px-4 mt-4",onClick:ey,children:(0,c.jsx)("p",{className:"w-full",children:"Создать заявку"})})]}),(0,c.jsxs)(o.u_,{show:eh,position:"center",children:[(0,c.jsx)(o.u_.Body,{children:(0,c.jsxs)("div",{className:"w-full success-container",children:[(0,c.jsx)("p",{className:"text-center",children:"Заявка создана успешно!"}),(0,c.jsx)("div",{className:"success-animation mt-6",children:(0,c.jsxs)("svg",{className:"checkmark",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52",children:[(0,c.jsx)("circle",{className:"checkmark__circle",cx:"26",cy:"26",r:"25",fill:"none"}),(0,c.jsx)("path",{className:"checkmark__check",fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"})]})})]})}),(0,c.jsx)(o.u_.Footer,{children:(0,c.jsx)("button",{className:"w-full redirect-button",onClick:ew,children:"Перейти в меню"})})]})]})}},1751:function(e,t,s){"use strict";s.d(t,{t:function(){return a}});var a=[{value:1,label:"Рефрижератор",price:500},{value:2,label:"Самосвал",price:27},{value:3,label:"Тралл",price:1e3},{value:4,label:"Изотерм",price:400},{value:5,label:"Бортовой",price:400},{value:6,label:"Крытый",price:400},{value:7,label:"Открытый",price:400},{value:8,label:"Тент",price:400},{value:9,label:"Зерновоз",price:35},{value:10,label:"Газель",price:180},{value:11,label:"Мега 105",price:400}]},5165:function(e,t,s){"use strict";s.d(t,{t:function(){return a}});var a=[{value:1,label:"Задний"},{value:2,label:"Боковой"},{value:3,label:"Верхний"},{value:4,label:"Любой"},]},4654:function(){}},function(e){e.O(0,[556,885,873,656,129,646,588,774,888,179],function(){return e(e.s=6587)}),_N_E=e.O()}]);
//# sourceMappingURL=createDriverOrders-7360cba31278d114.js.map