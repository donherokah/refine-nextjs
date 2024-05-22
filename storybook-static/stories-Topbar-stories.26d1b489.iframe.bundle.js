"use strict";(self.webpackChunkhorecah_client=self.webpackChunkhorecah_client||[]).push([[247],{"./src/stories/Topbar.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,primary:()=>primary});var _primary_parameters,_primary_parameters_docs,_primary_parameters1,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_Topbar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/Topbar.tsx"),_assets_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/assets/icons/index.ts");const __WEBPACK_DEFAULT_EXPORT__={component:_Topbar__WEBPACK_IMPORTED_MODULE_1__.A,tags:["autodocs"],parameters:{layout:""},args:{}},primary={args:{label:"Label",backgroundColor:"#113B73",color:"white",button:_assets_icons__WEBPACK_IMPORTED_MODULE_2__.kc,logo:_assets_icons__WEBPACK_IMPORTED_MODULE_2__.Mw,progress:"30%",onBack:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("Back button clicked")}};primary.parameters={...primary.parameters,docs:{...null===(_primary_parameters=primary.parameters)||void 0===_primary_parameters?void 0:_primary_parameters.docs,source:{originalSource:'{\n  args: {\n    label: "Label",\n    backgroundColor: "#113B73",\n    color: "white",\n    button: Back,\n    logo: PrimaryLogo,\n    // logoHeight: 50,\n    progress: \'30%\',\n    onBack: action(\'Back button clicked\')\n  }\n}',...null===(_primary_parameters1=primary.parameters)||void 0===_primary_parameters1||null===(_primary_parameters_docs=_primary_parameters1.docs)||void 0===_primary_parameters_docs?void 0:_primary_parameters_docs.source}}};const __namedExportsOrder=["primary"]},"./src/stories/Topbar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>src_stories_Topbar});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),injectStylesIntoStyleTag=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Topbar=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/stories/Topbar.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Topbar.A,options);Topbar.A&&Topbar.A.locals&&Topbar.A.locals;const Topbar_Topbar=param=>{let{label,logo,button,logoHeight,color,backgroundColor,progress,onBack,borderRadius,platform}=param;return(0,jsx_runtime.jsxs)("header",{className:"topbar-container clearfix",style:{backgroundColor,color,borderRadius},children:[(0,jsx_runtime.jsxs)("div",{className:"topbar-back-button",children:[button&&(0,jsx_runtime.jsx)(next_image.A,{src:button,alt:"",className:"",onClick:onBack}),(0,jsx_runtime.jsx)("div",{className:"topbar-label ".concat(button&&"topbar-label-button"),children:label})]}),logo&&(0,jsx_runtime.jsx)("div",{className:"topbar-logo",children:(0,jsx_runtime.jsx)(next_image.A,{src:logo,alt:"",className:"",height:null!=logoHeight?logoHeight:30})}),(0,jsx_runtime.jsx)("div",{className:"topbar-progress",children:(0,jsx_runtime.jsx)("div",{className:"bg-stroke dark:bg-dark-3 relative h-1.5 w-full rounded-2xl",children:(0,jsx_runtime.jsx)("div",{className:"bg-[#FE8B4C] absolute top-0 left-0 h-full rounded-2xl",style:{width:progress}})})})]})},src_stories_Topbar=Topbar_Topbar;Topbar_Topbar.__docgenInfo={description:"",methods:[],displayName:"Topbar",props:{label:{required:!1,tsType:{name:"string"},description:""},logo:{required:!1,tsType:{name:"any"},description:""},button:{required:!1,tsType:{name:"any"},description:""},logoHeight:{required:!1,tsType:{name:"number"},description:""},platform:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""},onBack:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},progress:{required:!1,tsType:{name:"string"},description:""},borderRadius:{required:!1,tsType:{name:"number"},description:""}}}},"./src/stories/assets/icons/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{kc:()=>back_namespaceObject,f5:()=>donwload_namespaceObject,ff:()=>Group_namespaceObject,bM:()=>eye_icon_namespaceObject,Nk:()=>gst_icon_namespaceObject,sg:()=>material_symbols_share_namespaceObject,uq:()=>pan_namespaceObject,Mw:()=>logo_namespaceObject,A8:()=>logo_secondary_namespaceObject});var logo_namespaceObject={};__webpack_require__.r(logo_namespaceObject),__webpack_require__.d(logo_namespaceObject,{default:()=>logo});var logo_secondary_namespaceObject={};__webpack_require__.r(logo_secondary_namespaceObject),__webpack_require__.d(logo_secondary_namespaceObject,{default:()=>logo_secondary});var eye_icon_namespaceObject={};__webpack_require__.r(eye_icon_namespaceObject),__webpack_require__.d(eye_icon_namespaceObject,{default:()=>eye_icon});var Group_namespaceObject={};__webpack_require__.r(Group_namespaceObject),__webpack_require__.d(Group_namespaceObject,{default:()=>Group});var material_symbols_share_namespaceObject={};__webpack_require__.r(material_symbols_share_namespaceObject),__webpack_require__.d(material_symbols_share_namespaceObject,{default:()=>material_symbols_share});var donwload_namespaceObject={};__webpack_require__.r(donwload_namespaceObject),__webpack_require__.d(donwload_namespaceObject,{default:()=>donwload});var gst_icon_namespaceObject={};__webpack_require__.r(gst_icon_namespaceObject),__webpack_require__.d(gst_icon_namespaceObject,{default:()=>gst_icon});var pan_namespaceObject={};__webpack_require__.r(pan_namespaceObject),__webpack_require__.d(pan_namespaceObject,{default:()=>pan});var back_namespaceObject={};__webpack_require__.r(back_namespaceObject),__webpack_require__.d(back_namespaceObject,{default:()=>back});const logo={src:"static/media/logo.0632bd72.svg",height:44,width:121,blurDataURL:"static/media/logo.0632bd72.svg"},logo_secondary={src:"static/media/logo-secondary.0275326c.svg",height:44,width:121,blurDataURL:"static/media/logo-secondary.0275326c.svg"},eye_icon={src:"static/media/eye-icon.3fb571d6.svg",height:24,width:24,blurDataURL:"static/media/eye-icon.3fb571d6.svg"},Group={src:"static/media/Group.25655356.svg",height:17,width:17,blurDataURL:"static/media/Group.25655356.svg"},material_symbols_share={src:"static/media/material-symbols_share.1c56aa84.svg",height:21,width:20,blurDataURL:"static/media/material-symbols_share.1c56aa84.svg"},donwload={src:"static/media/donwload.a37301f5.svg",height:45,width:45,blurDataURL:"static/media/donwload.a37301f5.svg"},gst_icon={src:"static/media/gst-icon.3af3d739.svg",height:74,width:52,blurDataURL:"static/media/gst-icon.3af3d739.svg"},pan={src:"static/media/pan.5cee0a0c.svg",height:22,width:27,blurDataURL:"static/media/pan.5cee0a0c.svg"},back={src:"static/media/back.d9de9bd7.svg",height:20,width:20,blurDataURL:"static/media/back.d9de9bd7.svg"}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/stories/Topbar.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.topbar-container{\n    background-color: #113B73;\n    width: 100%;\n    padding: 1rem 2rem;\n    display: flex;\n    align-items: center;\n    position: relative;\n    height: 5rem;\n    box-shadow: rgba(0, 35, 81, 0.03) 0px 4px 15px;\n}\n\n.topbar-back-button{\n    float: left;\n    display: flex;\n}\n\n.clearfix{\n    content: "";\n    clear: both;\n    display: table;\n}\n\n.topbar-logo{\n    float: right;\n}\n\n.topbar-label{\n    font-size: 1.44rem;\n}\n\n.topbar-label-button{\n    margin-left: 1rem;\n}\n\n.topbar-progress{\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    padding: 1rem 2rem;\n}\n\n@media only screen and (max-width: 576px) {\n    .topbar-label{\n        font-size: 1.2rem;\n    }\n\n    .topbar-label-button{\n        margin-left: 0.7rem;\n    }\n\n    .topbar-progress{\n        padding: 1rem 1rem;\n    }\n}',"",{version:3,sources:["webpack://./src/stories/Topbar.css"],names:[],mappings:"AAAA;IACI,yBAAyB;IACzB,WAAW;IACX,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;IACZ,8CAA8C;AAClD;;AAEA;IACI,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,WAAW;IACX,cAAc;AAClB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,OAAO;IACP,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI;QACI,iBAAiB;IACrB;;IAEA;QACI,mBAAmB;IACvB;;IAEA;QACI,kBAAkB;IACtB;AACJ",sourcesContent:['.topbar-container{\r\n    background-color: #113B73;\r\n    width: 100%;\r\n    padding: 1rem 2rem;\r\n    display: flex;\r\n    align-items: center;\r\n    position: relative;\r\n    height: 5rem;\r\n    box-shadow: rgba(0, 35, 81, 0.03) 0px 4px 15px;\r\n}\r\n\r\n.topbar-back-button{\r\n    float: left;\r\n    display: flex;\r\n}\r\n\r\n.clearfix{\r\n    content: "";\r\n    clear: both;\r\n    display: table;\r\n}\r\n\r\n.topbar-logo{\r\n    float: right;\r\n}\r\n\r\n.topbar-label{\r\n    font-size: 1.44rem;\r\n}\r\n\r\n.topbar-label-button{\r\n    margin-left: 1rem;\r\n}\r\n\r\n.topbar-progress{\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    padding: 1rem 2rem;\r\n}\r\n\r\n@media only screen and (max-width: 576px) {\r\n    .topbar-label{\r\n        font-size: 1.2rem;\r\n    }\r\n\r\n    .topbar-label-button{\r\n        margin-left: 0.7rem;\r\n    }\r\n\r\n    .topbar-progress{\r\n        padding: 1rem 1rem;\r\n    }\r\n}'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);