"use strict";(self.webpackChunkhorecah_client=self.webpackChunkhorecah_client||[]).push([[791],{"./src/stories/Button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DesktopCardList:()=>DesktopCardList,MobileCardList:()=>MobileCardList,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _DesktopCardList_parameters,_DesktopCardList_parameters_docs,_DesktopCardList_parameters1,_MobileCardList_parameters,_MobileCardList_parameters_docs,_MobileCardList_parameters1,_Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/Button.tsx"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/index.ts");const __WEBPACK_DEFAULT_EXPORT__={component:_Button__WEBPACK_IMPORTED_MODULE_0__.A,parameters:{layout:"centered"},tags:["autodocs"]},DesktopCardList={args:{roles:_constants__WEBPACK_IMPORTED_MODULE_1__.g,platform:"desktop"}},MobileCardList={args:{roles:_constants__WEBPACK_IMPORTED_MODULE_1__.g,platform:"mobile"}};DesktopCardList.parameters={...DesktopCardList.parameters,docs:{...null===(_DesktopCardList_parameters=DesktopCardList.parameters)||void 0===_DesktopCardList_parameters?void 0:_DesktopCardList_parameters.docs,source:{originalSource:"{\n  args: {\n    roles: ROLES,\n    platform: 'desktop'\n  }\n}",...null===(_DesktopCardList_parameters1=DesktopCardList.parameters)||void 0===_DesktopCardList_parameters1||null===(_DesktopCardList_parameters_docs=_DesktopCardList_parameters1.docs)||void 0===_DesktopCardList_parameters_docs?void 0:_DesktopCardList_parameters_docs.source}}},MobileCardList.parameters={...MobileCardList.parameters,docs:{...null===(_MobileCardList_parameters=MobileCardList.parameters)||void 0===_MobileCardList_parameters?void 0:_MobileCardList_parameters.docs,source:{originalSource:"{\n  args: {\n    roles: ROLES,\n    platform: 'mobile'\n  }\n}",...null===(_MobileCardList_parameters1=MobileCardList.parameters)||void 0===_MobileCardList_parameters1||null===(_MobileCardList_parameters_docs=_MobileCardList_parameters1.docs)||void 0===_MobileCardList_parameters_docs?void 0:_MobileCardList_parameters_docs.source}}};const __namedExportsOrder=["DesktopCardList","MobileCardList"]},"./src/constants/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>ROLES});const ROLES=[{id:1,banner:"static/media/fresher.8a4fedee.png",title:"Fresher"},{id:2,banner:"static/media/experienced.8a7cbfaa.png",title:"Experienced"}]},"./src/stories/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Button=param=>{let{...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"border-primary border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-primary hover:bg-blue-light-5 hover:text-body-color dark:hover:text-dark-3 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-blue-light-3",children:"Button"})},__WEBPACK_DEFAULT_EXPORT__=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{roles:{required:!0,tsType:{name:"Array",elements:[{name:"RoleProps"}],raw:"RoleProps[]"},description:""},platform:{required:!0,tsType:{name:"union",raw:"'desktop' | 'mobile'",elements:[{name:"literal",value:"'desktop'"},{name:"literal",value:"'mobile'"}]},description:""}}}},"./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/next/dist/compiled/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js")}}]);