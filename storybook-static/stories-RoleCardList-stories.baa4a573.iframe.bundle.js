(self.webpackChunkhorecah_client=self.webpackChunkhorecah_client||[]).push([[749],{"./src/stories/RoleCardList.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DesktopCardList:()=>DesktopCardList,MobileCardList:()=>MobileCardList,__namedExportsOrder:()=>__namedExportsOrder,default:()=>RoleCardList_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),RoleCard=__webpack_require__("./src/stories/RoleCard.tsx");const RoleCardList=param=>{let{...props}=param;return(0,jsx_runtime.jsx)("div",{className:"grid gap-4 ".concat("mobile"===props.platform?"":"grid-flow-col"),children:props.roles.map(((role,index)=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(RoleCard.A,{...role,backgroundColor:props.backgroundColor,hoverColor:props.hoverColor}),index!==props.roles.length-1&&(0,jsx_runtime.jsx)("div",{className:"w-0.5 bg-[white] relative top-[-12%] h-[128%] mx-8 "})]},role.id)))})},stories_RoleCardList=RoleCardList;RoleCardList.__docgenInfo={description:"",methods:[],displayName:"RoleCardList",props:{roles:{required:!0,tsType:{name:"Array",elements:[{name:"RoleProps"}],raw:"RoleProps[]"},description:""},platform:{required:!0,tsType:{name:"union",raw:"'desktop' | 'mobile'",elements:[{name:"literal",value:"'desktop'"},{name:"literal",value:"'mobile'"}]},description:""},backgroundColor:{required:!0,tsType:{name:"string"},description:""},hoverColor:{required:!0,tsType:{name:"string"},description:""}}};var _DesktopCardList_parameters,_DesktopCardList_parameters_docs,_DesktopCardList_parameters1,_MobileCardList_parameters,_MobileCardList_parameters_docs,_MobileCardList_parameters1,constants=__webpack_require__("./src/constants/index.ts");const RoleCardList_stories={component:stories_RoleCardList,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"light",value:"#ffffff"},{name:"dark",value:"#002351"}]}},argTypes:{backgroundColor:{control:"color"},hoverColor:{control:"color"}},tags:["autodocs"]},DesktopCardList={args:{roles:constants.g,platform:"desktop",backgroundColor:"#002351",hoverColor:"#FE8B4C"}},MobileCardList={args:{roles:constants.g,platform:"mobile"}};DesktopCardList.parameters={...DesktopCardList.parameters,docs:{...null===(_DesktopCardList_parameters=DesktopCardList.parameters)||void 0===_DesktopCardList_parameters?void 0:_DesktopCardList_parameters.docs,source:{originalSource:"{\n  args: {\n    roles: ROLES,\n    platform: 'desktop',\n    backgroundColor: \"#002351\",\n    hoverColor: '#FE8B4C'\n  }\n}",...null===(_DesktopCardList_parameters1=DesktopCardList.parameters)||void 0===_DesktopCardList_parameters1||null===(_DesktopCardList_parameters_docs=_DesktopCardList_parameters1.docs)||void 0===_DesktopCardList_parameters_docs?void 0:_DesktopCardList_parameters_docs.source}}},MobileCardList.parameters={...MobileCardList.parameters,docs:{...null===(_MobileCardList_parameters=MobileCardList.parameters)||void 0===_MobileCardList_parameters?void 0:_MobileCardList_parameters.docs,source:{originalSource:"{\n  args: {\n    roles: ROLES,\n    platform: 'mobile'\n  }\n}",...null===(_MobileCardList_parameters1=MobileCardList.parameters)||void 0===_MobileCardList_parameters1||null===(_MobileCardList_parameters_docs=_MobileCardList_parameters1.docs)||void 0===_MobileCardList_parameters_docs?void 0:_MobileCardList_parameters_docs.source}}};const __namedExportsOrder=["DesktopCardList","MobileCardList"]},"./src/constants/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g:()=>ROLES});const ROLES=[{id:1,banner:"static/media/fresher.8a4fedee.png",title:"Fresher"},{id:2,banner:"static/media/experienced.8a7cbfaa.png",title:"Experienced"}]},"./src/stories/RoleCard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-jsx/style.js"),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__),next_image__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"));const RoleCard=param=>{let{backgroundColor="#002351",hoverColor="#FE8B4C",...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{onClick:props.onClick,className:styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["c60ef3339d1a24fa",[hoverColor,backgroundColor]]])+" main grid justify-items-center  w-[17rem] h-[17rem] grid-rows-[9fr_2fr] rounded-2xl shadow-[0px_5px_20px_0px_#00000066]",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["c60ef3339d1a24fa",[hoverColor,backgroundColor]]])+" speed content-end w-full h-full grid justify-items-center rounded-t-2xl",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_3__.A,{src:props.banner,width:100,height:100,alt:"role image",className:"cursor-pointer h-full w-48"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"c60ef3339d1a24fa",dynamic:[hoverColor,backgroundColor],children:".speed.__jsx-style-dynamic-selector:hover{background-color:".concat(hoverColor,"}.main.__jsx-style-dynamic-selector{background-color:").concat(backgroundColor,"}")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1",{className:styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["c60ef3339d1a24fa",[hoverColor,backgroundColor]]])+" text-[white]  rounded-b-2xl cursor-pointer shadow-[0px_-5px_20px_0px_rgba(11,11,11,0.4)] w-full text-center text-xl font-semibold content-evenly",children:props.title})]})},__WEBPACK_DEFAULT_EXPORT__=RoleCard;RoleCard.__docgenInfo={description:"",methods:[],displayName:"RoleCard",props:{backgroundColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#002351'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},id:{required:!0,tsType:{name:"number"},description:""},banner:{required:!0,tsType:{name:"any"},description:""},title:{required:!0,tsType:{name:"string"},description:""},hoverColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#FE8B4C'",computed:!1}}}}},"./node_modules/styled-jsx/style.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/styled-jsx/dist/index/index.js").style}}]);