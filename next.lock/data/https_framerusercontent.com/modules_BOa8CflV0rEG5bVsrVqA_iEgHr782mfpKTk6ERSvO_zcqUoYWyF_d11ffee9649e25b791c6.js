import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";// Generated by Framer (bc41b64)
import*as React from"react";import{motion,LayoutGroup}from"framer-motion";import{addFonts,withCSS,addPropertyControls,ControlType,cx,useAddVariantProps,useVariantState,Vector,getFonts}from"framer";import{useRandomID}from"https://framer.com/m/framer/randomID.js@^2.0.0";import Memoji from"https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js";const MemojiFonts=getFonts(Memoji);const enabledGestures={"YyZzTOmoy":{"hover":true}};const cycleOrder=["YyZzTOmoy","XJgLUnR_3"];const variantClassNames={"YyZzTOmoy":"framer-v-104tc52","XJgLUnR_3":"framer-v-ap7rkg"};const humanReadableVariantMap={"Variant 1":"YyZzTOmoy","Variant 2":"XJgLUnR_3"};const transitions={"default":{"type":"spring","ease":[0.44,0,0.56,1],"duration":0.3,"delay":0,"stiffness":500,"damping":60,"mass":1}};const Component=/*#__PURE__*/ React.forwardRef(function({style,className,layoutId,width,height,variant:outerVariant="YyZzTOmoy",...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{variants,baseVariant,gestureVariant,classNames,transition,setVariant,setGestureState}=useVariantState({defaultVariant:"YyZzTOmoy",variant,transitions,variantClassNames,enabledGestures,cycleOrder});const variantProps=React.useMemo(()=>({"XJgLUnR_3":{"YyZzTOmoy":{"data-framer-name":"Variant 2"}}}),[]);const addVariantProps=useAddVariantProps(baseVariant,gestureVariant,variantProps);const isDisplayed1=()=>{if(gestureVariant==="YyZzTOmoy-hover")return false;return true;};const isDisplayed2=()=>{if(gestureVariant==="YyZzTOmoy-hover")return true;return false;};const defaultLayoutId=useRandomID();return(/*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-EMvD6",classNames),style:{"display":"contents","pointerEvents":"auto"},children:/*#__PURE__*/ _jsxs(motion.div,{...restProps,layoutId:"YyZzTOmoy",className:cx("framer-104tc52",className),style:{"backgroundColor":"rgb(255, 255, 255)",...style},"data-framer-name":"Variant 1",transition:transition,ref:ref,...addVariantProps("YyZzTOmoy"),children:[isDisplayed1()&&/*#__PURE__*/ _jsx(motion.div,{style:{},layout:"position",layoutId:"GMQ8TgHbk",className:"framer-1igkrs8",background:null,"data-framer-name":"Triangle",transition:transition,...addVariantProps("GMQ8TgHbk"),children:/*#__PURE__*/ _jsx(Vector,{style:{},d:"M 55.967603664379126 2.0002499999999994 C 57.50660366437913 -0.6667500000000004 61.35660366437912 -0.6667500000000004 62.895603664379124 2.0002499999999994 L 118.32160366437913 98.00025 C 119.86060366437913 100.66725 117.93660366437912 104.00025 114.85760366437913 104.00025 L 4.005603664379121 104.00025 C 0.9266036643791216 104.00025 -0.9973963356208784 100.66725 0.5416036643791218 98.00025 Z",id:"qQ_cUaHms",isRootVectorNode:true,shapeId:"id_qQ_cUaHms",strokeClipId:"id_qQ_cUaHms_clip",rect:{"x":4.5683963356208785,"y":11.99975,"width":118.86320732875825,"height":104.00025},strokeAlpha:1,name:"Path",rotation:0,lineCap:"butt",lineJoin:"miter",strokeColor:"rgb(102,102,255)",strokeDashOffset:0,strokeMiterLimit:10,strokeEnabled:true,insideStroke:false,strokeWidth:4,fill:null,transition:transition,...addVariantProps("qQ_cUaHms")})}),isDisplayed2()&&/*#__PURE__*/ _jsx(motion.div,{style:{},layoutId:"zViMgmhRh-container",className:"framer-1agfjde-container",transition:transition,...addVariantProps("zViMgmhRh-container"),children:/*#__PURE__*/ _jsx(Memoji,{width:"100%",height:"100%",layoutId:"zViMgmhRh",id:"zViMgmhRh",variant:"AD1uRb789",background:"rgb(255, 219, 222)",radius:60,rotation:0,transition:transition,...addVariantProps("zViMgmhRh")})})]})})}));});const css=[".framer-EMvD6 [data-border=\"true\"]::after { content: \"\"; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}",".framer-EMvD6 * { box-sizing: border-box; }",".framer-EMvD6 .framer-104tc52 { position: relative; overflow: hidden; width: 200px; height: 200px; }",".framer-EMvD6 .framer-1igkrs8 { position: absolute; width: 128px; height: 128px; left: 36px; top: 36px; flex: none; }",".framer-EMvD6 .framer-1agfjde-container { position: absolute; width: auto; height: auto; left: 50px; top: 50px; flex: none; }",".framer-EMvD6.framer-v-104tc52 .framer-104tc52 { cursor: pointer; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 200
 * @framerIntrinsicWidth 200
 * @framerCanvasComponentVariantDetails {"propertyName": "variant", "data": {"default": {"layout": ["fixed", "fixed"]}, "U3xHNCebl": {"layout": ["fixed", "fixed"]}, "XJgLUnR_3": {"layout": ["fixed", "fixed"]}}}
 */ const FramerzcqUoYWyF=withCSS(Component,css);export default FramerzcqUoYWyF;FramerzcqUoYWyF.displayName="card";FramerzcqUoYWyF.defaultProps={"width":200,"height":200};addPropertyControls(FramerzcqUoYWyF,{"variant":{"type":ControlType.Enum,"title":"Variant","options":["YyZzTOmoy","XJgLUnR_3"],"optionTitles":["Variant 1","Variant 2"]}});addFonts(FramerzcqUoYWyF,[...MemojiFonts]);
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"FramerzcqUoYWyF","slots":[],"annotations":{"framerIntrinsicHeight":"200","framerContractVersion":"1","framerCanvasComponentVariantDetails":"{\"propertyName\": \"variant\", \"data\": {\"default\": {\"layout\": [\"fixed\", \"fixed\"]}, \"U3xHNCebl\": {\"layout\": [\"fixed\", \"fixed\"]}, \"XJgLUnR_3\": {\"layout\": [\"fixed\", \"fixed\"]}}}","framerIntrinsicWidth":"200"}},"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./zcqUoYWyF.map