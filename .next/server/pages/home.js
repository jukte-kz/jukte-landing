"use strict";
(() => {
var exports = {};
exports.id = 229;
exports.ids = [229];
exports.modules = {

/***/ 6881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LinkBlock)
/* harmony export */ });
/* unused harmony export getServerSideProps */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



function LinkBlock({ removeUrl , image , title  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: removeUrl,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "p-4 rounded-b mt-0.5 link-block flex justify-between",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    width: 24,
                    height: 24,
                    src: image
                })
            ]
        })
    });
};
async function getServerSideProps({ params  }) {
    const image = await getImages() // fetch your data;
    ;
    const imageDynamic = image[param.id] //pass the prop from the url
    ;
    return {
        props: {
            imageDynamic: imageDynamic || null
        }
    };
}


/***/ }),

/***/ 2993:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_atoms_Header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(121);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9915);
/* harmony import */ var flowbite_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7532);
/* harmony import */ var flowbite_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flowbite_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_atoms_LinkBlock_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6881);
/* harmony import */ var _components_molecules_MyCard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(891);
/* harmony import */ var _components_molecules_OpenCard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3560);
/* harmony import */ var _components_molecules_DriverCard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4028);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7104);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_i18next__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3966);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_atoms_Header_component__WEBPACK_IMPORTED_MODULE_1__, js_cookie__WEBPACK_IMPORTED_MODULE_4__, _components_molecules_MyCard_component__WEBPACK_IMPORTED_MODULE_9__, _components_molecules_OpenCard_component__WEBPACK_IMPORTED_MODULE_10__, _components_molecules_DriverCard_component__WEBPACK_IMPORTED_MODULE_11__, _utils_i18next__WEBPACK_IMPORTED_MODULE_14__]);
([_components_atoms_Header_component__WEBPACK_IMPORTED_MODULE_1__, js_cookie__WEBPACK_IMPORTED_MODULE_4__, _components_molecules_MyCard_component__WEBPACK_IMPORTED_MODULE_9__, _components_molecules_OpenCard_component__WEBPACK_IMPORTED_MODULE_10__, _components_molecules_DriverCard_component__WEBPACK_IMPORTED_MODULE_11__, _utils_i18next__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















function Home() {
    const { 0: userSuccess , 1: setUserSuccess  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: userPay , 1: setUserPay  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const { 0: cancel , 1: setCancel  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: cancelArchive , 1: setCancelArchive  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: cancelOpenOrders , 1: setCancelOpenOrders  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const { 0: userInfo , 1: setUserInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const { 0: myOrders , 1: setMyOrders  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Array);
    const { 0: openOrders , 1: setOpenOrders  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Array);
    const { 0: showAskUser , 1: setShowAskUser  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: ownerId , 1: setOwnerId  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: userSuccessMessage , 1: setUserSuccessMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_13__.useTranslation)();
    const toAskUser = ()=>{
        setShowAskUser(!showAskUser);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{});
    const deleteOrder = (orderId)=>{
        axios__WEBPACK_IMPORTED_MODULE_3___default()({
            method: "put",
            url: `https://api.jukte.kz/orders/delete/${orderId}`,
            data: qs__WEBPACK_IMPORTED_MODULE_12___default().stringify({}),
            headers: {
                "content-type": "application/x-www-form-urlencoded;charset=utf-8",
                token: js_cookie__WEBPACK_IMPORTED_MODULE_4__["default"].get("accessToken")
            }
        }).then((res)=>{
            if (res.status === 200) {
                window.location.reload(false);
            }
        });
    };
    const matchOrder = (orderID)=>{
        axios__WEBPACK_IMPORTED_MODULE_3___default()({
            method: "put",
            url: `https://api.jukte.kz/orders/match/${orderID}`,
            data: qs__WEBPACK_IMPORTED_MODULE_12___default().stringify({}),
            headers: {
                "content-type": "application/x-www-form-urlencoded;charset=utf-8",
                token: js_cookie__WEBPACK_IMPORTED_MODULE_4__["default"].get("accessToken")
            }
        }).then((res)=>{
            if (res.status === 200) {
                window.location.reload(false);
            }
        });
    };
    const finishPay = ()=>{
        setUserPay(!userPay);
    };
    const goToSuccess = ()=>{
        router.push("/settings");
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!cancel) {
            axios__WEBPACK_IMPORTED_MODULE_3___default()({
                method: "get",
                url: "https://api.jukte.kz/user/info",
                headers: {
                    "content-type": "application/x-www-form-urlencoded;charset=utf-8",
                    token: js_cookie__WEBPACK_IMPORTED_MODULE_4__["default"].get("accessToken")
                }
            }).then((res)=>{
                setUserInfo(res.data);
                setCancel(true);
                setLoading(true);
                js_cookie__WEBPACK_IMPORTED_MODULE_4__["default"].set("role", res.data.role);
                if (JSON.stringify(res.data.company.director) === "{}") {
                    setUserSuccess(true);
                }
            }).catch((err)=>{
                if (err) {
                    setCancel(true);
                }
                if (err.response.data.message === "User has not access") {
                    js_cookie__WEBPACK_IMPORTED_MODULE_4__["default"].set("userSuccess", userSuccess);
                }
            });
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!cancelArchive) {
            axios__WEBPACK_IMPORTED_MODULE_3___default()({
                method: "get",
                url: "https://api.jukte.kz/orders/archive",
                headers: {
                    "content-type": "application/x-www-form-urlencoded;charset=utf-8",
                    token: js_cookie__WEBPACK_IMPORTED_MODULE_4__["default"].get("accessToken")
                }
            }).then((res)=>{
                if (res.data.data.orders.length) setMyOrders(res.data.data.orders);
                setCancelArchive(true);
            });
        }
        if (!userSuccess) {
            setUserSuccessMessage(t("home.statusVer"));
        } else {
            setUserSuccessMessage(t("home.statusUnver"));
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!cancelOpenOrders) {
            axios__WEBPACK_IMPORTED_MODULE_3___default()({
                method: "get",
                url: "https://api.jukte.kz/orders",
                headers: {
                    "content-type": "application/x-www-form-urlencoded;charset=utf-8",
                    token: js_cookie__WEBPACK_IMPORTED_MODULE_4__["default"].get("accessToken")
                }
            }).then((res)=>{
                if (res.data.data.orders.length) {
                    setOpenOrders(res.data.data.orders);
                }
                setCancelOpenOrders(true);
            });
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_atoms_Header_component__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                removeUrl: "/login",
                text: t("home.exit"),
                mainHeader: true
            }),
            loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "p-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex mb-3 justify-between items-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "font-bold text-lg",
                                    children: t("home.sharesTitle")
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    children: t("home.sharesText")
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex mb-6 justify-between items-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "font-bold text-lg",
                            children: t("home.homeTitle")
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full info-title-container",
                        children: [
                            userInfo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: userInfo.surname + " " + userInfo.name
                            }),
                            userSuccessMessage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "mb-1",
                                children: [
                                    "Статус: ",
                                    userSuccessMessage
                                ]
                            }),
                            userInfo && (userInfo.role === "driver" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: t("registration.driver")
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Отправитель"
                            })),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "elip1"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "elip2"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_atoms_LinkBlock_component__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        removeUrl: "/myOrders",
                        title: t("home.myOrder"),
                        image: "/assets/icon/myOrders.svg"
                    }),
                    userInfo.role === "logistician" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_atoms_LinkBlock_component__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        removeUrl: "/createOrders",
                        title: t("home.createLogOrder"),
                        image: "/assets/icon/createOrders.svg"
                    }),
                    userInfo.role === "logistician" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_atoms_LinkBlock_component__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        removeUrl: "/driverOrders",
                        title: t("home.freeCars"),
                        image: "/assets/icon/openCar.svg"
                    }),
                    userInfo.role === "driver" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_atoms_LinkBlock_component__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        removeUrl: "/openOrders",
                        title: t("home.openOrder"),
                        image: "/assets/icon/createOrders.svg"
                    }),
                    userInfo.role === "driver" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_atoms_LinkBlock_component__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        removeUrl: "/createDriverOrders",
                        image: "/assets/icon/createOrders.svg",
                        title: t("home.createDriverOrder")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_atoms_LinkBlock_component__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        removeUrl: "/settings",
                        title: t("home.settings"),
                        image: "/assets/icon/settings.svg"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_atoms_LinkBlock_component__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        removeUrl: "/faq",
                        title: t("home.faq"),
                        image: "/assets/icon/faq.svg"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_atoms_LinkBlock_component__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        removeUrl: "https://telegram.me/jukte/",
                        title: t("home.support"),
                        image: "/assets/icon/tech.svg"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "my-orders-container py-8",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex w-full justify-between items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: t("home.myOrder")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        href: "/myOrders",
                                        children: t("home.viewAll")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-end mt-2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "inline-flex shrink-0 items-center justify-center rounded bg-blue-50",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "p-2",
                                        children: [
                                            t("home.totalOrder"),
                                            " ",
                                            myOrders.length
                                        ]
                                    })
                                })
                            }),
                            myOrders.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-col gap-2 mt-4 bg-gray-400 p-4",
                                children: myOrders.slice(0, 1).map((data, index)=>{
                                    return data.ownerRole === "logistician" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_molecules_MyCard_component__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        transfer: data.transfer,
                                        shipment: data.loadType,
                                        cub: data.cubProduct,
                                        logPrice: data.logPrice,
                                        product: data.product,
                                        price: data.price,
                                        weight: data.weight,
                                        date: data.date,
                                        type: data.type,
                                        from: data.from,
                                        to: data.to,
                                        distance: data.distance,
                                        detail: data.detail,
                                        description: data.description,
                                        status: data.status,
                                        role: userInfo.role,
                                        phone: data.ownerPhone,
                                        id: data._id,
                                        clickDelete: ()=>{
                                            deleteOrder(data._id);
                                        }
                                    }, index) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_molecules_DriverCard_component__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        transfer: data.transfer,
                                        shipment: data.loadType,
                                        cub: data.cubProduct,
                                        logPrice: data.logPrice,
                                        price: data.price,
                                        weight: data.weight,
                                        date: data.date,
                                        type: data.type,
                                        from: data.from,
                                        to: data.to,
                                        distance: data.distance,
                                        description: data.description,
                                        status: data.status,
                                        role: userInfo.role,
                                        phone: data.ownerPhone,
                                        id: data._id,
                                        product: data.product
                                    }, index);
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mt-4",
                                children: t("home.noMyOrders")
                            })
                        ]
                    }),
                    userInfo.role === "driver" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "my-orders-container py-8",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex w-full justify-between items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: t("home.openOrder")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        href: "/openOrders",
                                        children: t("home.viewAll")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-end mt-2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "inline-flex shrink-0 items-center justify-center rounded bg-blue-50",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "p-2",
                                        children: [
                                            t("home.totalOrder"),
                                            " ",
                                            openOrders.length
                                        ]
                                    })
                                })
                            }),
                            openOrders.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-col gap-2 mt-4 bg-gray-400 p-4",
                                children: openOrders.slice(0, 1).map((data, index)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_molecules_OpenCard_component__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        onClick: ()=>{
                                            setOwnerId(data._id);
                                            toAskUser();
                                        },
                                        transfer: data.transfer,
                                        shipment: data.loadType,
                                        cub: data.cubProduct,
                                        logPrice: data.logPrice,
                                        product: data.product,
                                        price: data.price,
                                        weight: data.weight,
                                        date: data.date,
                                        type: data.type,
                                        from: data.from,
                                        to: data.to,
                                        distance: data.distance,
                                        detail: data.detail,
                                        description: data.description,
                                        status: data.status,
                                        role: userInfo.role,
                                        phone: data.ownerPhone,
                                        id: data._id
                                    }, index);
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mt-4",
                                children: t("home.noOpenOrders")
                            })
                        ]
                    }),
                    userInfo.role === "logistician" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "my-orders-container py-8",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex w-full justify-between items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: t("home.freeCars")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        href: "/driverOrders",
                                        children: t("home.viewAll")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-end mt-2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "inline-flex shrink-0 items-center justify-center rounded bg-blue-50",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "p-2",
                                        children: [
                                            t("home.totalOrder"),
                                            " ",
                                            openOrders.length
                                        ]
                                    })
                                })
                            }),
                            openOrders.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-col gap-2 mt-4 bg-gray-400 p-4",
                                children: openOrders.slice(0, 1).map((data, index)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_molecules_DriverCard_component__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        onClick: ()=>{
                                            setOwnerId(data._id);
                                            toAskUser();
                                        },
                                        shipment: data.loadType,
                                        cub: data.cubProduct,
                                        logPrice: data.logPrice,
                                        price: data.price,
                                        weight: data.weight,
                                        date: data.date,
                                        type: data.type,
                                        from: data.from,
                                        to: data.to,
                                        distance: data.distance,
                                        description: data.description,
                                        status: data.status,
                                        role: js_cookie__WEBPACK_IMPORTED_MODULE_4__["default"].get("role"),
                                        phone: data.ownerPhone,
                                        product: data.product,
                                        detail: data.detail,
                                        transfer: data.transfer
                                    }, index);
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mt-4",
                                children: t("home.noOpenOrders")
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full h-[calc(100vh-5rem)] flex items-center justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(flowbite_react__WEBPACK_IMPORTED_MODULE_5__.Spinner, {
                        "aria-label": "Center-aligned spinner example"
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(flowbite_react__WEBPACK_IMPORTED_MODULE_5__.Modal, {
                show: showAskUser,
                style: {
                    width: "100%"
                },
                id: "modal-width",
                position: "center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(flowbite_react__WEBPACK_IMPORTED_MODULE_5__.Modal.Body, {
                        style: {
                            width: "100%"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_atoms_Header_component__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                    removeUrl: "/home"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-base leading-relaxed",
                                    children: t("home.orderMatch")
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(flowbite_react__WEBPACK_IMPORTED_MODULE_5__.Modal.Footer, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex justify-between items-center w-full gap-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "w-full redirect-button",
                                    onClick: ()=>{
                                        if (ownerId) {
                                            matchOrder(ownerId);
                                        }
                                        toAskUser();
                                    },
                                    children: t("home.yes")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "w-full redirect-button",
                                    onClick: toAskUser,
                                    children: t("home.no")
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(flowbite_react__WEBPACK_IMPORTED_MODULE_5__.Modal, {
                show: userSuccess,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(flowbite_react__WEBPACK_IMPORTED_MODULE_5__.Modal.Body, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_atoms_Header_component__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                    removeUrl: "/login"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-base leading-relaxed",
                                    children: t("home.noVer")
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(flowbite_react__WEBPACK_IMPORTED_MODULE_5__.Modal.Footer, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "w-full redirect-button",
                            onClick: goToSuccess,
                            children: t("home.noVerButton")
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(flowbite_react__WEBPACK_IMPORTED_MODULE_5__.Modal, {
                show: !userPay,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(flowbite_react__WEBPACK_IMPORTED_MODULE_5__.Modal.Body, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_atoms_Header_component__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                    removeUrl: "/login"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-base leading-relaxed",
                                    children: t("home.noPay")
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(flowbite_react__WEBPACK_IMPORTED_MODULE_5__.Modal.Footer, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            onClick: finishPay,
                            className: "w-full redirect-button flex items-center justify-center",
                            href: "https://api.paybox.money/payment.php?pg_merchant_id=546728&pg_amount=5000&pg_currency=KZT&pg_description=%D0%A2%D0%B5%D1%81%D1%82&pg_salt=784hILVVmSh76ikD&pg_language=ru&pg_sig=a1232501fd238b5befe5378e2cf59d86",
                            children: "Оплатить \xabТест\xbb через PayBox.money"
                        })
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 7532:
/***/ ((module) => {

module.exports = require("flowbite-react");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 5786:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 7104:
/***/ ((module) => {

module.exports = require("qs");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9709:
/***/ ((module) => {

module.exports = require("react-i18next");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2021:
/***/ ((module) => {

module.exports = import("i18next");;

/***/ }),

/***/ 6252:
/***/ ((module) => {

module.exports = import("i18next-browser-languagedetector");;

/***/ }),

/***/ 4329:
/***/ ((module) => {

module.exports = import("i18next-http-backend");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,699,676,664,121,682,560], () => (__webpack_exec__(2993)));
module.exports = __webpack_exports__;

})();