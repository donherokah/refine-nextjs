"use strict";(self.webpackChunkhorecah_client=self.webpackChunkhorecah_client||[]).push([[227],{"./src/stories/BottomSheet.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BottomSheet_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),dist=__webpack_require__("./node_modules/react-modal-sheet/dist/index.mjs"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),KeyboardBackspace=__webpack_require__("./node_modules/@mui/icons-material/KeyboardBackspace.js"),Button=__webpack_require__("./src/stories/Button.tsx"),useMediaQuery=__webpack_require__("./node_modules/@mui/system/esm/useMediaQuery/useMediaQuery.js"),console=__webpack_require__("./node_modules/console-browserify/index.js");const BottomSheet=param=>{let{children,...props}=param;const[isOpen,setOpen]=(0,react.useState)(!1),isMobile=(0,useMediaQuery.A)("(max-width:600px)");(0,react.useEffect)((()=>{const handleKeyDown=event=>{"Escape"===event.key&&setOpen(!1)};return document.addEventListener("keydown",handleKeyDown),()=>{document.removeEventListener("keydown",handleKeyDown)}}),[]);const handleClose=()=>{console.log("handle speed =>"),setOpen(!1)};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("button",{onClick:()=>setOpen(!0),children:"open bottom sheet"}),(0,jsx_runtime.jsxs)(dist.c,{isOpen,onClose:handleClose,detent:"content-height",children:[(0,jsx_runtime.jsxs)(dist.c.Container,{style:{maxWidth:isMobile?"100%":"40%",left:isMobile?"":"33%"},children:[(0,jsx_runtime.jsx)(dist.c.Header,{}),(0,jsx_runtime.jsx)(dist.c.Content,{children:(0,jsx_runtime.jsxs)("div",{className:"p-4",children:[(0,jsx_runtime.jsxs)("div",{className:"flex gap-2",children:[(0,jsx_runtime.jsx)("button",{onClick:handleClose,children:(0,jsx_runtime.jsx)(KeyboardBackspace.A,{})}),(0,jsx_runtime.jsx)("h3",{children:props.label})]}),children,(0,jsx_runtime.jsx)(Button.A,{title:props.buttonTitle,onClick:()=>props.buttonFunction?props.buttonFunction():handleClose()})]})})]}),(0,jsx_runtime.jsx)(dist.c.Backdrop,{onTap:()=>props.closeOnBackdropClick?handleClose():null})]})]})},stories_BottomSheet=BottomSheet;BottomSheet.__docgenInfo={description:"",methods:[],displayName:"BottomSheet",props:{label:{required:!0,tsType:{name:"string"},description:""},buttonTitle:{required:!0,tsType:{name:"string"},description:""},buttonFunction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},closeOnBackdropClick:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};var _Basic_parameters,_Basic_parameters_docs,_Basic_parameters1,BottomSheet_stories_console=__webpack_require__("./node_modules/console-browserify/index.js");const BottomSheet_stories={component:stories_BottomSheet,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},Basic={args:{label:"label",buttonTitle:"speedster",buttonFunction:()=>BottomSheet_stories_console.log("button pressed"),closeOnBackdropClick:!0,children:"Child Element Here..."}};Basic.parameters={...Basic.parameters,docs:{...null===(_Basic_parameters=Basic.parameters)||void 0===_Basic_parameters?void 0:_Basic_parameters.docs,source:{originalSource:"{\n  args: {\n    label: 'label',\n    buttonTitle: 'speedster',\n    buttonFunction: () => console.log('button pressed'),\n    closeOnBackdropClick: true,\n    children: 'Child Element Here...'\n  }\n}",...null===(_Basic_parameters1=Basic.parameters)||void 0===_Basic_parameters1||null===(_Basic_parameters_docs=_Basic_parameters1.docs)||void 0===_Basic_parameters_docs?void 0:_Basic_parameters_docs.source}}};const __namedExportsOrder=["Basic"]},"./src/stories/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Button=param=>{let{...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"w-full bg-[#0A3773] border-primary border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-[#0A2C5A] hover:border-[#1B44C8] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-[#0A2C5A] active:border-[#1B44C8]",onClick:props.onClick,children:props.title})})},__WEBPACK_DEFAULT_EXPORT__=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{title:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}}}]);