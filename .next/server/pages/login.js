"use strict";
(() => {
var exports = {};
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 4984:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Login)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_atoms_Header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(121);
/* harmony import */ var flowbite_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7532);
/* harmony import */ var flowbite_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flowbite_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4648);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7104);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9915);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_i18next__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3966);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_atoms_Header_component__WEBPACK_IMPORTED_MODULE_1__, js_cookie__WEBPACK_IMPORTED_MODULE_8__, _utils_i18next__WEBPACK_IMPORTED_MODULE_11__]);
([_components_atoms_Header_component__WEBPACK_IMPORTED_MODULE_1__, js_cookie__WEBPACK_IMPORTED_MODULE_8__, _utils_i18next__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function Login() {
    const phoneMask = "+7-(999)-999-99-99";
    const passwordMask = "999999";
    const { 0: phone , 1: setPhone  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const { 0: showError , 1: setShowError  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { 0: errMessage , 1: setErrMesage  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const { 0: checkComplete , 1: setCheckComplete  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)();
    const onChangePhone = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((event)=>{
        setPhone(event.target.value);
        setError(undefined);
    }, []);
    const onChangePassword = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((event)=>{
        setPassword(event.target.value);
        setError(undefined);
    });
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        setCheckComplete(phone.length === 18 && password.length > 0);
    });
    const postLogin = ()=>{
        axios__WEBPACK_IMPORTED_MODULE_6___default()({
            method: "post",
            url: "https://api.jukte.kz/auth/login",
            data: qs__WEBPACK_IMPORTED_MODULE_7___default().stringify({
                phone: phone.replace(/(-)|\+|\(|\)/g, ""),
                password: password
            })
        }).then((res)=>{
            setShowError(false);
            js_cookie__WEBPACK_IMPORTED_MODULE_8__["default"].set("accessToken", res.data.accessToken);
            router.push("/home");
        }).catch((err)=>{
            setError(err);
            if (err.response.data.message === "User not found") {
                setErrMesage("Такого пользователя нету");
                setShowError(true);
            }
            if (err.response.data.message === "Invalid credentials") {
                setErrMesage("Вы ввели неверный пароль");
                setShowError(true);
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_atoms_Header_component__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                removeUrl: "/",
                mainHeader: true
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "login-main",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: t("login.title")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "mt-2",
                        children: [
                            t("login.desc"),
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Jukte.kz"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        className: "flex flex-col pt-6 login-form",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mb-auto",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "input-container",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mb-2 block",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(flowbite_react__WEBPACK_IMPORTED_MODULE_2__.Label, {
                                                    htmlFor: "phone",
                                                    value: t("login.phone_number")
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_input_mask__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                value: phone,
                                                maskChar: null,
                                                onChange: onChangePhone,
                                                mask: phoneMask,
                                                children: (inputProps)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(flowbite_react__WEBPACK_IMPORTED_MODULE_2__.TextInput, {
                                                        ...inputProps,
                                                        color: error && "#C92140",
                                                        id: "phone",
                                                        type: "tel",
                                                        placeholder: "+7-777-777-77-77",
                                                        required: true,
                                                        sizing: "lg"
                                                    })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "input-container",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mb-2 block",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(flowbite_react__WEBPACK_IMPORTED_MODULE_2__.Label, {
                                                    htmlFor: "password",
                                                    value: t("login.password_label")
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_input_mask__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                value: password,
                                                maskChar: null,
                                                onChange: onChangePassword,
                                                mask: passwordMask,
                                                children: (inputProps)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(flowbite_react__WEBPACK_IMPORTED_MODULE_2__.TextInput, {
                                                        ...inputProps,
                                                        id: "password",
                                                        type: "password",
                                                        placeholder: t("login.password"),
                                                        required: true,
                                                        sizing: "lg"
                                                    })
                                            })
                                        ]
                                    }),
                                    showError && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                width: 24,
                                                height: 25,
                                                src: "/assets/icon/attention.svg",
                                                alt: "errorIcon"
                                            }),
                                            errMessage
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                disabled: !checkComplete,
                                type: "button",
                                onClick: postLogin,
                                className: "flex login-button items-center px-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "w-full",
                                        children: t("login.btn")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        width: 24,
                                        height: 24,
                                        alt: "arrow-icon",
                                        src: "/assets/icon/right-arrow.svg"
                                    })
                                ]
                            })
                        ]
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

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

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

/***/ 4648:
/***/ ((module) => {

module.exports = require("react-input-mask");

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
var __webpack_exports__ = __webpack_require__.X(0, [675,121], () => (__webpack_exec__(4984)));
module.exports = __webpack_exports__;

})();