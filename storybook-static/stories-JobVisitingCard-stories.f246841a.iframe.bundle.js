"use strict";(self.webpackChunkhorecah_client=self.webpackChunkhorecah_client||[]).push([[117],{"./src/stories/JobVisitingCard.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Basic_parameters,_Basic_parameters_docs,_Basic_parameters1;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./src/stories/JobVisitingCard.tsx").A,parameters:{layout:"centered"},tags:["autodocs"]},Basic={args:{name:"Yanis petros",experience:"2-4 years",position:"sous chef",department:"Japanese cuisine",imageURL:"https://as1.ftcdn.net/v2/jpg/02/43/12/34/1000_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",themeColor:"red",mobileNumber:"+123-456-7890",email:"hello@really.com",currentLocation:"current Locaion",preferredLocationOne:"Preferred Location 1",preferredLocationTwo:"Preferred Location 2"}};Basic.parameters={...Basic.parameters,docs:{...null===(_Basic_parameters=Basic.parameters)||void 0===_Basic_parameters?void 0:_Basic_parameters.docs,source:{originalSource:"{\n  args: {\n    name: 'Yanis petros',\n    experience: '2-4 years',\n    position: 'sous chef',\n    department: 'Japanese cuisine',\n    imageURL: 'https://as1.ftcdn.net/v2/jpg/02/43/12/34/1000_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',\n    themeColor: 'red',\n    mobileNumber: '+123-456-7890',\n    email: 'hello@really.com',\n    currentLocation: 'current Locaion',\n    preferredLocationOne: 'Preferred Location 1',\n    preferredLocationTwo: 'Preferred Location 2'\n  }\n}",...null===(_Basic_parameters1=Basic.parameters)||void 0===_Basic_parameters1||null===(_Basic_parameters_docs=_Basic_parameters1.docs)||void 0===_Basic_parameters_docs?void 0:_Basic_parameters_docs.source}}};const __namedExportsOrder=["Basic"]},"./src/stories/JobVisitingCard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>stories_JobVisitingCard});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const color_red_src="static/media/color-red.96c1b735.png",color_blue_src="static/media/color-blue.1ec6be56.png",color_yellow_src="static/media/color-yellow.d13f7f8e.png",color_green_src="static/media/color-green.21480fbc.png";var console=__webpack_require__("./node_modules/console-browserify/index.js");const JobVisitingCard=param=>{let{...props}=param;const[bgImage,setBgImage]=(0,react.useState)();return(0,react.useEffect)((()=>{switch(console.log("hi image ",props.themeColor),props.themeColor){case"red":setBgImage(color_red_src);break;case"blue":setBgImage(color_blue_src);break;case"green":setBgImage(color_green_src);break;case"yellow":setBgImage(color_yellow_src);break;default:return}}),[props.themeColor]),(0,jsx_runtime.jsx)("div",{className:"h-full",children:(0,jsx_runtime.jsx)("div",{className:"h-full",children:(0,jsx_runtime.jsx)("div",{style:{backgroundImage:"url(".concat(bgImage,")"),backgroundSize:"100% 100%",backgroundPosition:"center",backgroundRepeat:"no-repeat",width:"inherit",height:"100%",padding:"4%",paddingLeft:"5.9%"},className:"  text-white relative ",children:(0,jsx_runtime.jsxs)("div",{className:"grid justify-center h-full grid-cols-[1fr_1fr] h-[78%] items-center ",children:[(0,jsx_runtime.jsxs)("div",{className:" grid  text-end text-[100%]  left-[9%] h-full pt-[10%] ",children:[(0,jsx_runtime.jsxs)("div",{className:"",children:[(0,jsx_runtime.jsx)("h1",{className:"text-[100%] font-extrabold",children:props.name}),(0,jsx_runtime.jsxs)("div",{className:" flex justify-end text-[75%] ",children:[(0,jsx_runtime.jsx)("p",{children:props.experience}),",",(0,jsx_runtime.jsx)("p",{children:props.position})]}),(0,jsx_runtime.jsx)("p",{className:"text-[60%] pr-4",children:props.department})]}),(0,jsx_runtime.jsx)("h3",{className:"pr-[18%] pt-[3%]  text-[75%]",children:props.currentLocation}),(0,jsx_runtime.jsxs)("div",{className:"pr-[16%] pt-[4%]  text-[75%]",children:[(0,jsx_runtime.jsx)("h3",{className:"pl-[17%]",children:props.mobileNumber}),(0,jsx_runtime.jsx)("h3",{className:"pl-[16%]",children:props.email})]}),(0,jsx_runtime.jsxs)("div",{className:" text-[75%]",children:[(0,jsx_runtime.jsx)("h3",{className:"pl-[12%]",children:props.preferredLocationOne}),(0,jsx_runtime.jsx)("h3",{children:props.preferredLocationTwo})]})]}),(0,jsx_runtime.jsx)("div",{className:"grid justify-items-center items-center h-full",children:(0,jsx_runtime.jsx)("img",{style:{borderColor:props.themeColor},className:" left-[57.5%] top-[23%] mt-12% w-[72%] h-[65%]  rounded-[50%]  border-solid left-[52.7%] ",src:props.imageURL,alt:"hello image",width:500,height:500})})]})})})})},stories_JobVisitingCard=JobVisitingCard;JobVisitingCard.__docgenInfo={description:"",methods:[],displayName:"JobVisitingCard",props:{name:{required:!0,tsType:{name:"string"},description:""},experience:{required:!0,tsType:{name:"string"},description:""},position:{required:!0,tsType:{name:"string"},description:""},department:{required:!0,tsType:{name:"string"},description:""},imageURL:{required:!0,tsType:{name:"string"},description:""},themeColor:{required:!0,tsType:{name:"union",raw:"'red' | 'blue' | 'green' | 'yellow'",elements:[{name:"literal",value:"'red'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'green'"},{name:"literal",value:"'yellow'"}]},description:""},mobileNumber:{required:!0,tsType:{name:"string"},description:""},email:{required:!0,tsType:{name:"string"},description:""},currentLocation:{required:!0,tsType:{name:"string"},description:""},preferredLocationOne:{required:!0,tsType:{name:"string"},description:""},preferredLocationTwo:{required:!0,tsType:{name:"string"},description:""}}}},"./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/next/dist/compiled/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js")}}]);