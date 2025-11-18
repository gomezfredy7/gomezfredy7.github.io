/*! For license information please see main.aaeb6ffa.js.LICENSE.txt */
(()=>{"use strict";var e={730:(e,t,n)=>{var r=n(43),o=n(853);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,l={};function s(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(l[e]=t,e=0;e<t.length;e++)a.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,h={},f={};function m(e,t,n,r,o,i,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var b=/[\-:]([a-z])/g;function v(e){return e[1].toUpperCase()}function y(e,t,n,r){var o=g.hasOwnProperty(t)?g[t]:null;(null!==o?0!==o.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,o,r)&&(n=null),r||null===o?function(e){return!!d.call(f,e)||!d.call(h,e)&&(p.test(e)?f[e]=!0:(h[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=null===n?3!==o.type&&"":n:(t=o.attributeName,r=o.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(o=o.type)||4===o&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(b,v);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(b,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(b,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var w=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_=Symbol.for("react.element"),x=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),N=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),R=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var j=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var O=Symbol.iterator;function z(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=O&&e[O]||e["@@iterator"])?e:null}var L,F=Object.assign;function U(e){if(void 0===L)try{throw Error()}catch(xt){var t=xt.stack.trim().match(/\n( *(at )?)/);L=t&&t[1]||""}return"\n"+L+e}var D=!1;function M(e,t){if(!e||D)return"";D=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch($t){var r=$t}Reflect.construct(e,[],t)}else{try{t.call()}catch($t){r=$t}e.call(t.prototype)}else{try{throw Error()}catch($t){r=$t}e()}}catch($t){if($t&&r&&"string"===typeof $t.stack){for(var o=$t.stack.split("\n"),i=r.stack.split("\n"),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(1!==a||1!==l)do{if(a--,0>--l||o[a]!==i[l]){var s="\n"+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=a&&0<=l);break}}}finally{D=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?U(e):""}function I(e){switch(e.tag){case 5:return U(e.type);case 16:return U("Lazy");case 13:return U("Suspense");case 19:return U("SuspenseList");case 0:case 2:case 15:return e=M(e.type,!1);case 11:return e=M(e.type.render,!1);case 1:return e=M(e.type,!0);default:return""}}function B(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case k:return"Fragment";case x:return"Portal";case C:return"Profiler";case S:return"StrictMode";case T:return"Suspense";case P:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case N:return(e.displayName||"Context")+".Consumer";case E:return(e._context.displayName||"Context")+".Provider";case A:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case $:return null!==(t=e.displayName||null)?t:B(e.type)||"Memo";case R:t=e._payload,e=e._init;try{return B(e(t))}catch(xt){}}return null}function H(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return B(t);case 8:return t===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function V(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function W(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function q(e){e._valueTracker||(e._valueTracker=function(e){var t=W(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=W(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Q(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(Ft){return e.body}}function J(e,t){var n=t.checked;return F({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function X(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=V(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Y(e,t){null!=(t=t.checked)&&y(e,"checked",t,!1)}function G(e,t){Y(e,t);var n=V(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,V(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Q(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+V(n),t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(i(91));return F({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oe(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(i(92));if(te(n)){if(1<n.length)throw Error(i(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:V(n)}}function ie(e,t){var n=V(t.value),r=V(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ae(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce=function(e){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction((function(){return e(t,n)}))}:e}((function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}}));function de(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function fe(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function me(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),o=fe(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}Object.keys(pe).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var ge=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function be(e,t){if(t){if(ge[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(i(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(i(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(i(62))}}function ve(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ye=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var _e=null,xe=null,ke=null;function Se(e){if(e=Po(e)){if("function"!==typeof _e)throw Error(i(280));var t=e.stateNode;t&&(t=Ro(t),_e(e.stateNode,e.type,t))}}function Ce(e){xe?ke?ke.push(e):ke=[e]:xe=e}function Ee(){if(xe){var e=xe,t=ke;if(ke=xe=null,Se(e),t)for(e=0;e<t.length;e++)Se(t[e])}}function Ne(e,t){return e(t)}function Ae(){}var Te=!1;function Pe(e,t,n){if(Te)return e(t,n);Te=!0;try{return Ne(e,t,n)}finally{Te=!1,(null!==xe||null!==ke)&&(Ae(),Ee())}}function $e(e,t){var n=e.stateNode;if(null===n)return null;var r=Ro(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(i(231,t,typeof n));return n}var Re=!1;if(c)try{var je={};Object.defineProperty(je,"passive",{get:function(){Re=!0}}),window.addEventListener("test",je,je),window.removeEventListener("test",je,je)}catch(Tt){Re=!1}function Oe(e,t,n,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(en){this.onError(en)}}var ze=!1,Le=null,Fe=!1,Ue=null,De={onError:function(e){ze=!0,Le=e}};function Me(e,t,n,r,o,i,a,l,s){ze=!1,Le=null,Oe.apply(De,arguments)}function Ie(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Be(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function He(e){if(Ie(e)!==e)throw Error(i(188))}function Ve(e){return e=function(e){var t=e.alternate;if(!t){if(null===(t=Ie(e)))throw Error(i(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(null===o)break;var a=o.alternate;if(null===a){if(null!==(r=o.return)){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return He(o),e;if(a===r)return He(o),t;a=a.sibling}throw Error(i(188))}if(n.return!==r.return)n=o,r=a;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=a;break}if(s===r){l=!0,r=o,n=a;break}s=s.sibling}if(!l){for(s=a.child;s;){if(s===n){l=!0,n=a,r=o;break}if(s===r){l=!0,r=a,n=o;break}s=s.sibling}if(!l)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(3!==n.tag)throw Error(i(188));return n.stateNode.current===n?e:t}(e),null!==e?We(e):null}function We(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=We(e);if(null!==t)return t;e=e.sibling}return null}var qe=o.unstable_scheduleCallback,Ke=o.unstable_cancelCallback,Qe=o.unstable_shouldYield,Je=o.unstable_requestPaint,Xe=o.unstable_now,Ye=o.unstable_getCurrentPriorityLevel,Ge=o.unstable_ImmediatePriority,Ze=o.unstable_UserBlockingPriority,et=o.unstable_NormalPriority,tt=o.unstable_LowPriority,nt=o.unstable_IdlePriority,rt=null,ot=null;var it=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(at(e)/lt|0)|0},at=Math.log,lt=Math.LN2;var st=64,ut=4194304;function ct(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function dt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=268435455&n;if(0!==a){var l=a&~o;0!==l?r=ct(l):0!==(i&=a)&&(r=ct(i))}else 0!==(a=n&~o)?r=ct(a):0!==i&&(r=ct(i));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&o)&&((o=r&-r)>=(i=t&-t)||16===o&&0!==(4194240&i)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)o=1<<(n=31-it(t)),r|=e[n],t&=~o;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function ft(){var e=st;return 0===(4194240&(st<<=1))&&(st=64),e}function bt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-it(t)]=n}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var wt=0;function _t(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var kt,St,Ct,Nt,At,Pt=!1,Rt=[],Ot=null,Lt=null,Ut=null,Dt=new Map,Mt=new Map,It=[],Bt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ht(e,t){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":Lt=null;break;case"mouseover":case"mouseout":Ut=null;break;case"pointerover":case"pointerout":Dt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mt.delete(t.pointerId)}}function Vt(e,t,n,r,o,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},null!==t&&(null!==(t=Po(t))&&St(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function Wt(e){var t=To(e.target);if(null!==t){var n=Ie(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Be(n)))return e.blockedOn=t,void At(e.priority,(function(){Ct(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function qt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=on(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=Po(n))&&St(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);ye=r,n.target.dispatchEvent(r),ye=null,t.shift()}return!0}function Kt(e,t,n){qt(e)&&n.delete(t)}function Qt(){Pt=!1,null!==Ot&&qt(Ot)&&(Ot=null),null!==Lt&&qt(Lt)&&(Lt=null),null!==Ut&&qt(Ut)&&(Ut=null),Dt.forEach(Kt),Mt.forEach(Kt)}function Jt(e,t){e.blockedOn===t&&(e.blockedOn=null,Pt||(Pt=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Qt)))}function Xt(e){function t(t){return Jt(t,e)}if(0<Rt.length){Jt(Rt[0],e);for(var n=1;n<Rt.length;n++){var r=Rt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Ot&&Jt(Ot,e),null!==Lt&&Jt(Lt,e),null!==Ut&&Jt(Ut,e),Dt.forEach(t),Mt.forEach(t),n=0;n<It.length;n++)(r=It[n]).blockedOn===e&&(r.blockedOn=null);for(;0<It.length&&null===(n=It[0]).blockedOn;)Wt(n),null===n.blockedOn&&It.shift()}var Yt=w.ReactCurrentBatchConfig,Gt=!0;function Zt(e,t,n,r){var o=wt,i=Yt.transition;Yt.transition=null;try{wt=1,nn(e,t,n,r)}finally{wt=o,Yt.transition=i}}function tn(e,t,n,r){var o=wt,i=Yt.transition;Yt.transition=null;try{wt=4,nn(e,t,n,r)}finally{wt=o,Yt.transition=i}}function nn(e,t,n,r){if(Gt){var o=on(e,t,n,r);if(null===o)eo(e,t,r,rn,n),Ht(e,r);else if(function(e,t,n,r,o){switch(t){case"focusin":return Ot=Vt(Ot,e,t,n,r,o),!0;case"dragenter":return Lt=Vt(Lt,e,t,n,r,o),!0;case"mouseover":return Ut=Vt(Ut,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Dt.set(i,Vt(Dt.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Mt.set(i,Vt(Mt.get(i)||null,e,t,n,r,o)),!0}return!1}(o,e,t,n,r))r.stopPropagation();else if(Ht(e,r),4&t&&-1<Bt.indexOf(e)){for(;null!==o;){var i=Po(o);if(null!==i&&kt(i),null===(i=on(e,t,n,r))&&eo(e,t,r,rn,n),i===o)break;o=i}null!==o&&r.stopPropagation()}else eo(e,t,r,null,n)}}var rn=null;function on(e,t,n,r){if(rn=null,null!==(e=To(e=we(r))))if(null===(t=Ie(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Be(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return rn=e,null}function an(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ye()){case Ge:return 1;case Ze:return 4;case et:case tt:return 16;case nt:return 536870912;default:return 16}default:return 16}}var ln=null,sn=null,un=null;function cn(){if(un)return un;var e,t,n=sn,r=n.length,o="value"in ln?ln.value:ln.textContent,i=o.length;for(e=0;e<r&&n[e]===o[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===o[i-t];t++);return un=o.slice(e,1<t?1-t:void 0)}function dn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function pn(){return!0}function hn(){return!1}function fn(e){function t(t,n,r,o,i){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?pn:hn,this.isPropagationStopped=hn,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=pn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=pn)},persist:function(){},isPersistent:pn}),t}var mn,gn,bn,vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wn=fn(vn),_n=F({},vn,{view:0,detail:0}),xn=fn(_n),kn=F({},_n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bn&&(bn&&"mousemove"===e.type?(mn=e.screenX-bn.screenX,gn=e.screenY-bn.screenY):gn=mn=0,bn=e),mn)},movementY:function(e){return"movementY"in e?e.movementY:gn}}),Sn=fn(kn),Cn=fn(F({},kn,{dataTransfer:0})),En=fn(F({},_n,{relatedTarget:0})),Nn=fn(F({},vn,{animationName:0,elapsedTime:0,pseudoElement:0})),An=F({},vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Tn=fn(An),Pn=fn(F({},vn,{data:0})),$n={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function On(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=jn[e])&&!!t[e]}function zn(){return On}var Ln=F({},_n,{key:function(e){if(e.key){var t=$n[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=dn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Rn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zn,charCode:function(e){return"keypress"===e.type?dn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?dn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Fn=fn(Ln),Un=fn(F({},kn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Dn=fn(F({},_n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zn})),Mn=fn(F({},vn,{propertyName:0,elapsedTime:0,pseudoElement:0})),In=F({},kn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bn=fn(In),Hn=[9,13,27,32],Vn=c&&"CompositionEvent"in window,Wn=null;c&&"documentMode"in document&&(Wn=document.documentMode);var qn=c&&"TextEvent"in window&&!Wn,Kn=c&&(!Vn||Wn&&8<Wn&&11>=Wn),Qn=String.fromCharCode(32),Jn=!1;function Xn(e,t){switch(e){case"keyup":return-1!==Hn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Gn=!1;var Zn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function er(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Zn[e.type]:"textarea"===t}function tr(e,t,n,r){Ce(r),0<(t=no(t,"onChange")).length&&(n=new wn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var nr=null,rr=null;function or(e){Qr(e,0)}function ir(e){if(K($o(e)))return e}function ar(e,t){if("change"===e)return t}var lr=!1;if(c){var sr;if(c){var ur="oninput"in document;if(!ur){var cr=document.createElement("div");cr.setAttribute("oninput","return;"),ur="function"===typeof cr.oninput}sr=ur}else sr=!1;lr=sr&&(!document.documentMode||9<document.documentMode)}function dr(){nr&&(nr.detachEvent("onpropertychange",pr),rr=nr=null)}function pr(e){if("value"===e.propertyName&&ir(rr)){var t=[];tr(t,rr,e,we(e)),Pe(or,t)}}function hr(e,t,n){"focusin"===e?(dr(),rr=n,(nr=t).attachEvent("onpropertychange",pr)):"focusout"===e&&dr()}function fr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return ir(rr)}function mr(e,t){if("click"===e)return ir(t)}function gr(e,t){if("input"===e||"change"===e)return ir(t)}var br="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function vr(e,t){if(br(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!d.call(t,o)||!br(e[o],t[o]))return!1}return!0}function yr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wr(e,t){var n,r=yr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=yr(r)}}function _r(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?_r(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function xr(){for(var e=window,t=Q();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(jt){n=!1}if(!n)break;t=Q((e=t.contentWindow).document)}return t}function kr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function Sr(e){var t=xr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&_r(n.ownerDocument.documentElement,n)){if(null!==r&&kr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=void 0===r.end?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=wr(n,i);var a=wr(n,r);o&&a&&(1!==e.rangeCount||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Cr=c&&"documentMode"in document&&11>=document.documentMode,Er=null,Nr=null,Ar=null,Tr=!1;function Pr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;Tr||null==Er||Er!==Q(r)||("selectionStart"in(r=Er)&&kr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},Ar&&vr(Ar,r)||(Ar=r,0<(r=no(Nr,"onSelect")).length&&(t=new wn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Er)))}function $r(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Rr={animationend:$r("Animation","AnimationEnd"),animationiteration:$r("Animation","AnimationIteration"),animationstart:$r("Animation","AnimationStart"),transitionend:$r("Transition","TransitionEnd")},jr={},Or={};function zr(e){if(jr[e])return jr[e];if(!Rr[e])return e;var t,n=Rr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Or)return jr[e]=n[t];return e}c&&(Or=document.createElement("div").style,"AnimationEvent"in window||(delete Rr.animationend.animation,delete Rr.animationiteration.animation,delete Rr.animationstart.animation),"TransitionEvent"in window||delete Rr.transitionend.transition);var Lr=zr("animationend"),Fr=zr("animationiteration"),Ur=zr("animationstart"),Dr=zr("transitionend"),Mr=new Map,Ir="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Br(e,t){Mr.set(e,t),s(t,[e])}for(var Hr=0;Hr<Ir.length;Hr++){var Vr=Ir[Hr];Br(Vr.toLowerCase(),"on"+(Vr[0].toUpperCase()+Vr.slice(1)))}Br(Lr,"onAnimationEnd"),Br(Fr,"onAnimationIteration"),Br(Ur,"onAnimationStart"),Br("dblclick","onDoubleClick"),Br("focusin","onFocus"),Br("focusout","onBlur"),Br(Dr,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));function Kr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,o,a,l,s,u){if(Me.apply(this,arguments),ze){if(!ze)throw Error(i(198));var c=Le;ze=!1,Le=null,Fe||(Fe=!0,Ue=c)}}(r,t,void 0,e),e.currentTarget=null}function Qr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;Kr(o,l,u),i=s}else for(a=0;a<r.length;a++){if(s=(l=r[a]).instance,u=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;Kr(o,l,u),i=s}}}if(Fe)throw e=Ue,Fe=!1,Ue=null,e}function Jr(e,t){var n=t[Eo];void 0===n&&(n=t[Eo]=new Set);var r=e+"__bubble";n.has(r)||(Zr(t,e,2,!1),n.add(r))}function Xr(e,t,n){var r=0;t&&(r|=4),Zr(n,e,r,t)}var Yr="_reactListening"+Math.random().toString(36).slice(2);function Gr(e){if(!e[Yr]){e[Yr]=!0,a.forEach((function(t){"selectionchange"!==t&&(qr.has(t)||Xr(t,!1,e),Xr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Yr]||(t[Yr]=!0,Xr("selectionchange",!1,t))}}function Zr(e,t,n,r){switch(an(t)){case 1:var o=Zt;break;case 4:o=tn;break;default:o=nn}n=o.bind(null,t,n,e),o=void 0,!Re||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),r?void 0!==o?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):void 0!==o?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function eo(e,t,n,r,o){var i=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var l=r.stateNode.containerInfo;if(l===o||8===l.nodeType&&l.parentNode===o)break;if(4===a)for(a=r.return;null!==a;){var s=a.tag;if((3===s||4===s)&&((s=a.stateNode.containerInfo)===o||8===s.nodeType&&s.parentNode===o))return;a=a.return}for(;null!==l;){if(null===(a=To(l)))return;if(5===(s=a.tag)||6===s){r=i=a;continue e}l=l.parentNode}}r=r.return}Pe((function(){var r=i,o=we(n),a=[];e:{var l=Mr.get(e);if(void 0!==l){var s=wn,u=e;switch(e){case"keypress":if(0===dn(n))break e;case"keydown":case"keyup":s=Fn;break;case"focusin":u="focus",s=En;break;case"focusout":u="blur",s=En;break;case"beforeblur":case"afterblur":s=En;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=Sn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=Cn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Dn;break;case Lr:case Fr:case Ur:s=Nn;break;case Dr:s=Mn;break;case"scroll":s=xn;break;case"wheel":s=Bn;break;case"copy":case"cut":case"paste":s=Tn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=Un}var c=0!==(4&t),d=!c&&"scroll"===e,p=c?null!==l?l+"Capture":null:l;c=[];for(var h,f=r;null!==f;){var m=(h=f).stateNode;if(5===h.tag&&null!==m&&(h=m,null!==p&&(null!=(m=$e(f,p))&&c.push(to(f,m,h)))),d)break;f=f.return}0<c.length&&(l=new s(l,u,null,n,o),a.push({event:l,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===ye||!(u=n.relatedTarget||n.fromElement)||!To(u)&&!u[Co])&&(s||l)&&(l=o.window===o?o:(l=o.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?To(u):null)&&(u!==(d=Ie(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=Sn,m="onMouseLeave",p="onMouseEnter",f="mouse","pointerout"!==e&&"pointerover"!==e||(c=Un,m="onPointerLeave",p="onPointerEnter",f="pointer"),d=null==s?l:$o(s),h=null==u?l:$o(u),(l=new c(m,f+"leave",s,n,o)).target=d,l.relatedTarget=h,m=null,To(o)===r&&((c=new c(p,f+"enter",u,n,o)).target=h,c.relatedTarget=d,m=c),d=m,s&&u)e:{for(p=u,f=0,h=c=s;h;h=ro(h))f++;for(h=0,m=p;m;m=ro(m))h++;for(;0<f-h;)c=ro(c),f--;for(;0<h-f;)p=ro(p),h--;for(;f--;){if(c===p||null!==p&&c===p.alternate)break e;c=ro(c),p=ro(p)}c=null}else c=null;null!==s&&oo(a,l,s,c,!1),null!==u&&null!==d&&oo(a,d,u,c,!0)}if("select"===(s=(l=r?$o(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=ar;else if(er(l))if(lr)g=gr;else{g=fr;var b=hr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=mr);switch(g&&(g=g(e,r))?tr(a,g,n,o):(b&&b(e,l,r),"focusout"===e&&(b=l._wrapperState)&&b.controlled&&"number"===l.type&&ee(l,"number",l.value)),b=r?$o(r):window,e){case"focusin":(er(b)||"true"===b.contentEditable)&&(Er=b,Nr=r,Ar=null);break;case"focusout":Ar=Nr=Er=null;break;case"mousedown":Tr=!0;break;case"contextmenu":case"mouseup":case"dragend":Tr=!1,Pr(a,n,o);break;case"selectionchange":if(Cr)break;case"keydown":case"keyup":Pr(a,n,o)}var v;if(Vn)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Gn?Xn(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(Kn&&"ko"!==n.locale&&(Gn||"onCompositionStart"!==y?"onCompositionEnd"===y&&Gn&&(v=cn()):(sn="value"in(ln=o)?ln.value:ln.textContent,Gn=!0)),0<(b=no(r,y)).length&&(y=new Pn(y,e,null,n,o),a.push({event:y,listeners:b}),v?y.data=v:null!==(v=Yn(n))&&(y.data=v))),(v=qn?function(e,t){switch(e){case"compositionend":return Yn(t);case"keypress":return 32!==t.which?null:(Jn=!0,Qn);case"textInput":return(e=t.data)===Qn&&Jn?null:e;default:return null}}(e,n):function(e,t){if(Gn)return"compositionend"===e||!Vn&&Xn(e,t)?(e=cn(),un=sn=ln=null,Gn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=no(r,"onBeforeInput")).length&&(o=new Pn("onBeforeInput","beforeinput",null,n,o),a.push({event:o,listeners:r}),o.data=v))}Qr(a,t)}))}function to(e,t,n){return{instance:e,listener:t,currentTarget:n}}function no(e,t){for(var n=t+"Capture",r=[];null!==e;){var o=e,i=o.stateNode;5===o.tag&&null!==i&&(o=i,null!=(i=$e(e,n))&&r.unshift(to(e,i,o)),null!=(i=$e(e,t))&&r.push(to(e,i,o))),e=e.return}return r}function ro(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function oo(e,t,n,r,o){for(var i=t._reactName,a=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==u&&(l=u,o?null!=(s=$e(n,i))&&a.unshift(to(n,s,l)):o||null!=(s=$e(n,i))&&a.push(to(n,s,l))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var io=/\r\n?/g,ao=/\u0000|\uFFFD/g;function lo(e){return("string"===typeof e?e:""+e).replace(io,"\n").replace(ao,"")}function so(e,t,n){if(t=lo(t),lo(e)!==t&&n)throw Error(i(425))}function uo(){}var co=null,po=null;function ho(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var fo="function"===typeof setTimeout?setTimeout:void 0,mo="function"===typeof clearTimeout?clearTimeout:void 0,go="function"===typeof Promise?Promise:void 0,bo="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof go?function(e){return go.resolve(null).then(e).catch(vo)}:fo;function vo(e){setTimeout((function(){throw e}))}function yo(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&8===o.nodeType)if("/$"===(n=o.data)){if(0===r)return e.removeChild(o),void Xt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=o}while(n);Xt(t)}function wo(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function _o(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var xo=Math.random().toString(36).slice(2),ko="__reactFiber$"+xo,So="__reactProps$"+xo,Co="__reactContainer$"+xo,Eo="__reactEvents$"+xo,No="__reactListeners$"+xo,Ao="__reactHandles$"+xo;function To(e){var t=e[ko];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Co]||n[ko]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=_o(e);null!==e;){if(n=e[ko])return n;e=_o(e)}return t}n=(e=n).parentNode}return null}function Po(e){return!(e=e[ko]||e[Co])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function $o(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(i(33))}function Ro(e){return e[So]||null}var jo=[],Oo=-1;function zo(e){return{current:e}}function Lo(e){0>Oo||(e.current=jo[Oo],jo[Oo]=null,Oo--)}function Fo(e,t){Oo++,jo[Oo]=e.current,e.current=t}var Uo={},Do=zo(Uo),Mo=zo(!1),Io=Uo;function Bo(e,t){var n=e.type.contextTypes;if(!n)return Uo;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o,i={};for(o in n)i[o]=t[o];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ho(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Vo(){Lo(Mo),Lo(Do)}function Wo(e,t,n){if(Do.current!==Uo)throw Error(i(168));Fo(Do,t),Fo(Mo,n)}function qo(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var o in r=r.getChildContext())if(!(o in t))throw Error(i(108,H(e)||"Unknown",o));return F({},n,r)}function Ko(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Uo,Io=Do.current,Fo(Do,e),Fo(Mo,Mo.current),!0}function Qo(e,t,n){var r=e.stateNode;if(!r)throw Error(i(169));n?(e=qo(e,t,Io),r.__reactInternalMemoizedMergedChildContext=e,Lo(Mo),Lo(Do),Fo(Do,e)):Lo(Mo),Fo(Mo,n)}var Jo=null,Xo=!1,Yo=!1;function Go(e){null===Jo?Jo=[e]:Jo.push(e)}function Zo(){if(!Yo&&null!==Jo){Yo=!0;var e=0,t=wt;try{var n=Jo;for(wt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Jo=null,Xo=!1}catch(gt){throw null!==Jo&&(Jo=Jo.slice(e+1)),qe(Ge,Zo),gt}finally{wt=t,Yo=!1}}return null}var ei=[],ti=0,ni=null,ri=0,oi=[],ii=0,ai=null,li=1,si="";function ui(e,t){ei[ti++]=ri,ei[ti++]=ni,ni=e,ri=t}function ci(e,t,n){oi[ii++]=li,oi[ii++]=si,oi[ii++]=ai,ai=e;var r=li;e=si;var o=32-it(r)-1;r&=~(1<<o),n+=1;var i=32-it(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,li=1<<32-it(t)+o|n<<o|r,si=i+e}else li=1<<i|n<<o|r,si=e}function di(e){null!==e.return&&(ui(e,1),ci(e,1,0))}function pi(e){for(;e===ni;)ni=ei[--ti],ei[ti]=null,ri=ei[--ti],ei[ti]=null;for(;e===ai;)ai=oi[--ii],oi[ii]=null,si=oi[--ii],oi[ii]=null,li=oi[--ii],oi[ii]=null}var hi=null,fi=null,mi=!1,gi=null;function bi(e,t){var n=Bu(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function vi(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,hi=e,fi=wo(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,hi=e,fi=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==ai?{id:li,overflow:si}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Bu(18,null,null,0)).stateNode=t,n.return=e,e.child=n,hi=e,fi=null,!0);default:return!1}}function yi(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function wi(e){if(mi){var t=fi;if(t){var n=t;if(!vi(e,t)){if(yi(e))throw Error(i(418));t=wo(n.nextSibling);var r=hi;t&&vi(e,t)?bi(r,n):(e.flags=-4097&e.flags|2,mi=!1,hi=e)}}else{if(yi(e))throw Error(i(418));e.flags=-4097&e.flags|2,mi=!1,hi=e}}}function _i(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;hi=e}function xi(e){if(e!==hi)return!1;if(!mi)return _i(e),mi=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ho(e.type,e.memoizedProps)),t&&(t=fi)){if(yi(e))throw ki(),Error(i(418));for(;t;)bi(e,t),t=wo(t.nextSibling)}if(_i(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){fi=wo(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}fi=null}}else fi=hi?wo(e.stateNode.nextSibling):null;return!0}function ki(){for(var e=fi;e;)e=wo(e.nextSibling)}function Si(){fi=hi=null,mi=!1}function Ci(e){null===gi?gi=[e]:gi.push(e)}var Ei=w.ReactCurrentBatchConfig;function Ni(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(i(309));var r=n.stateNode}if(!r)throw Error(i(147,e));var o=r,a=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===a?t.ref:(t=function(e){var t=o.refs;null===e?delete t[a]:t[a]=e},t._stringRef=a,t)}if("string"!==typeof e)throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function Ai(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ti(e){return(0,e._init)(e._payload)}function Pi(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=Vu(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Qu(n,e.mode,r)).return=e,t):((t=o(t,n)).return=e,t)}function u(e,t,n,r){var i=n.type;return i===k?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===R&&Ti(i)===t.type)?((r=o(t,n.props)).ref=Ni(e,t,n),r.return=e,r):((r=Wu(n.type,n.key,n.props,null,e.mode,r)).ref=Ni(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Ju(n,e.mode,r)).return=e,t):((t=o(t,n.children||[])).return=e,t)}function d(e,t,n,r,i){return null===t||7!==t.tag?((t=qu(n,e.mode,r,i)).return=e,t):((t=o(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Qu(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case _:return(n=Wu(t.type,t.key,t.props,null,e.mode,n)).ref=Ni(e,null,t),n.return=e,n;case x:return(t=Ju(t,e.mode,n)).return=e,t;case R:return p(e,(0,t._init)(t._payload),n)}if(te(t)||z(t))return(t=qu(t,e.mode,n,null)).return=e,t;Ai(e,t)}return null}function h(e,t,n,r){var o=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==o?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case _:return n.key===o?u(e,t,n,r):null;case x:return n.key===o?c(e,t,n,r):null;case R:return h(e,t,(o=n._init)(n._payload),r)}if(te(n)||z(n))return null!==o?null:d(e,t,n,r,null);Ai(e,n)}return null}function f(e,t,n,r,o){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,o);if("object"===typeof r&&null!==r){switch(r.$$typeof){case _:return u(t,e=e.get(null===r.key?n:r.key)||null,r,o);case x:return c(t,e=e.get(null===r.key?n:r.key)||null,r,o);case R:return f(e,t,n,(0,r._init)(r._payload),o)}if(te(r)||z(r))return d(t,e=e.get(n)||null,r,o,null);Ai(t,r)}return null}function m(o,i,l,s){for(var u=null,c=null,d=i,m=i=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var b=h(o,d,l[m],s);if(null===b){null===d&&(d=g);break}e&&d&&null===b.alternate&&t(o,d),i=a(b,i,m),null===c?u=b:c.sibling=b,c=b,d=g}if(m===l.length)return n(o,d),mi&&ui(o,m),u;if(null===d){for(;m<l.length;m++)null!==(d=p(o,l[m],s))&&(i=a(d,i,m),null===c?u=d:c.sibling=d,c=d);return mi&&ui(o,m),u}for(d=r(o,d);m<l.length;m++)null!==(g=f(d,o,m,l[m],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),i=a(g,i,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach((function(e){return t(o,e)})),mi&&ui(o,m),u}function g(o,l,s,u){var c=z(s);if("function"!==typeof c)throw Error(i(150));if(null==(s=c.call(s)))throw Error(i(151));for(var d=c=null,m=l,g=l=0,b=null,v=s.next();null!==m&&!v.done;g++,v=s.next()){m.index>g?(b=m,m=null):b=m.sibling;var y=h(o,m,v.value,u);if(null===y){null===m&&(m=b);break}e&&m&&null===y.alternate&&t(o,m),l=a(y,l,g),null===d?c=y:d.sibling=y,d=y,m=b}if(v.done)return n(o,m),mi&&ui(o,g),c;if(null===m){for(;!v.done;g++,v=s.next())null!==(v=p(o,v.value,u))&&(l=a(v,l,g),null===d?c=v:d.sibling=v,d=v);return mi&&ui(o,g),c}for(m=r(o,m);!v.done;g++,v=s.next())null!==(v=f(m,o,g,v.value,u))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),l=a(v,l,g),null===d?c=v:d.sibling=v,d=v);return e&&m.forEach((function(e){return t(o,e)})),mi&&ui(o,g),c}return function e(r,i,a,s){if("object"===typeof a&&null!==a&&a.type===k&&null===a.key&&(a=a.props.children),"object"===typeof a&&null!==a){switch(a.$$typeof){case _:e:{for(var u=a.key,c=i;null!==c;){if(c.key===u){if((u=a.type)===k){if(7===c.tag){n(r,c.sibling),(i=o(c,a.props.children)).return=r,r=i;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===R&&Ti(u)===c.type){n(r,c.sibling),(i=o(c,a.props)).ref=Ni(r,c,a),i.return=r,r=i;break e}n(r,c);break}t(r,c),c=c.sibling}a.type===k?((i=qu(a.props.children,r.mode,s,a.key)).return=r,r=i):((s=Wu(a.type,a.key,a.props,null,r.mode,s)).ref=Ni(r,i,a),s.return=r,r=s)}return l(r);case x:e:{for(c=a.key;null!==i;){if(i.key===c){if(4===i.tag&&i.stateNode.containerInfo===a.containerInfo&&i.stateNode.implementation===a.implementation){n(r,i.sibling),(i=o(i,a.children||[])).return=r,r=i;break e}n(r,i);break}t(r,i),i=i.sibling}(i=Ju(a,r.mode,s)).return=r,r=i}return l(r);case R:return e(r,i,(c=a._init)(a._payload),s)}if(te(a))return m(r,i,a,s);if(z(a))return g(r,i,a,s);Ai(r,a)}return"string"===typeof a&&""!==a||"number"===typeof a?(a=""+a,null!==i&&6===i.tag?(n(r,i.sibling),(i=o(i,a)).return=r,r=i):(n(r,i),(i=Qu(a,r.mode,s)).return=r,r=i),l(r)):n(r,i)}}var $i=Pi(!0),Ri=Pi(!1),ji=zo(null),Oi=null,zi=null,Li=null;function Fi(){Li=zi=Oi=null}function Ui(e){var t=ji.current;Lo(ji),e._currentValue=t}function Di(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Mi(e,t){Oi=e,Li=zi=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(Tl=!0),e.firstContext=null)}function Ii(e){var t=e._currentValue;if(Li!==e)if(e={context:e,memoizedValue:t,next:null},null===zi){if(null===Oi)throw Error(i(308));zi=e,Oi.dependencies={lanes:0,firstContext:e}}else zi=zi.next=e;return t}var Bi=null;function Hi(e){null===Bi?Bi=[e]:Bi.push(e)}function Vi(e,t,n,r){var o=t.interleaved;return null===o?(n.next=n,Hi(t)):(n.next=o.next,o.next=n),t.interleaved=n,Wi(e,r)}function Wi(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var qi=!1;function Ki(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ji(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Xi(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Ds)){var o=r.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Wi(e,n)}return null===(o=r.interleaved)?(t.next=t,Hi(r)):(t.next=o.next,o.next=t),r.interleaved=t,Wi(e,n)}function Yi(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}function Gi(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var o=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===i?o=i=a:i=i.next=a,n=n.next}while(null!==n);null===i?o=i=t:i=i.next=t}else o=i=t;return n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Zi(e,t,n,r){var o=e.updateQueue;qi=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(null!==l){o.shared.pending=null;var s=l,u=s.next;s.next=null,null===a?i=u:a.next=u,a=s;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==a&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(null!==i){var d=o.baseState;for(a=0,c=u=s=null,l=i;;){var p=l.lane,h=l.eventTime;if((r&p)===p){null!==c&&(c=c.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var f=e,m=l;switch(p=t,h=n,m.tag){case 1:if("function"===typeof(f=m.payload)){d=f.call(h,d,p);break e}d=f;break e;case 3:f.flags=-65537&f.flags|128;case 0:if(null===(p="function"===typeof(f=m.payload)?f.call(h,d,p):f)||void 0===p)break e;d=F({},d,p);break e;case 2:qi=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(p=o.effects)?o.effects=[l]:p.push(l))}else h={eventTime:h,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=h,s=d):c=c.next=h,a|=p;if(null===(l=l.next)){if(null===(l=o.shared.pending))break;l=(p=l).next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}if(null===c&&(s=d),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=c,null!==(t=o.shared.interleaved)){o=t;do{a|=o.lane,o=o.next}while(o!==t)}else null===i&&(o.shared.lanes=0);Ks|=a,e.lanes=a,e.memoizedState=d}}function ea(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(null!==o){if(r.callback=null,r=n,"function"!==typeof o)throw Error(i(191,o));o.call(r)}}}var ta={},na=zo(ta),ra=zo(ta),oa=zo(ta);function ia(e){if(e===ta)throw Error(i(174));return e}function aa(e,t){switch(Fo(oa,t),Fo(ra,e),Fo(na,ta),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Lo(na),Fo(na,t)}function la(){Lo(na),Lo(ra),Lo(oa)}function sa(e){ia(oa.current);var t=ia(na.current),n=se(t,e.type);t!==n&&(Fo(ra,e),Fo(na,n))}function ua(e){ra.current===e&&(Lo(na),Lo(ra))}var ca=zo(0);function da(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var pa=[];function ha(){for(var e=0;e<pa.length;e++)pa[e]._workInProgressVersionPrimary=null;pa.length=0}var fa=w.ReactCurrentDispatcher,ma=w.ReactCurrentBatchConfig,ga=0,ba=null,va=null,ya=null,wa=!1,_a=!1,xa=0,ka=0;function Sa(){throw Error(i(321))}function Ca(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!br(e[n],t[n]))return!1;return!0}function Ea(e,t,n,r,o,a){if(ga=a,ba=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fa.current=null===e||null===e.memoizedState?ul:cl,e=n(r,o),_a){a=0;do{if(_a=!1,xa=0,25<=a)throw Error(i(301));a+=1,ya=va=null,t.updateQueue=null,fa.current=dl,e=n(r,o)}while(_a)}if(fa.current=sl,t=null!==va&&null!==va.next,ga=0,ya=va=ba=null,wa=!1,t)throw Error(i(300));return e}function Na(){var e=0!==xa;return xa=0,e}function Aa(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ya?ba.memoizedState=ya=e:ya=ya.next=e,ya}function Ta(){if(null===va){var e=ba.alternate;e=null!==e?e.memoizedState:null}else e=va.next;var t=null===ya?ba.memoizedState:ya.next;if(null!==t)ya=t,va=e;else{if(null===e)throw Error(i(310));e={memoizedState:(va=e).memoizedState,baseState:va.baseState,baseQueue:va.baseQueue,queue:va.queue,next:null},null===ya?ba.memoizedState=ya=e:ya=ya.next=e}return ya}function Pa(e,t){return"function"===typeof t?t(e):t}function $a(e){var t=Ta(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=va,o=r.baseQueue,a=n.pending;if(null!==a){if(null!==o){var l=o.next;o.next=a.next,a.next=l}r.baseQueue=o=a,n.pending=null}if(null!==o){a=o.next,r=r.baseState;var s=l=null,u=null,c=a;do{var d=c.lane;if((ga&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(s=u=p,l=r):u=u.next=p,ba.lanes|=d,Ks|=d}c=c.next}while(null!==c&&c!==a);null===u?l=r:u.next=s,br(r,t.memoizedState)||(Tl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){o=e;do{a=o.lane,ba.lanes|=a,Ks|=a,o=o.next}while(o!==e)}else null===o&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ra(e){var t=Ta(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(null!==o){n.pending=null;var l=o=o.next;do{a=e(a,l.action),l=l.next}while(l!==o);br(a,t.memoizedState)||(Tl=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function ja(){}function Oa(e,t){var n=ba,r=Ta(),o=t(),a=!br(r.memoizedState,o);if(a&&(r.memoizedState=o,Tl=!0),r=r.queue,qa(Fa.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||null!==ya&&1&ya.memoizedState.tag){if(n.flags|=2048,Ia(9,La.bind(null,n,r,o,t),void 0,null),null===Ms)throw Error(i(349));0!==(30&ga)||za(n,t,o)}return o}function za(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=ba.updateQueue)?(t={lastEffect:null,stores:null},ba.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function La(e,t,n,r){t.value=n,t.getSnapshot=r,Ua(t)&&Da(e)}function Fa(e,t,n){return n((function(){Ua(t)&&Da(e)}))}function Ua(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!br(e,n)}catch(jt){return!0}}function Da(e){var t=Wi(e,1);null!==t&&hu(t,e,1,-1)}function Ma(e){var t=Aa();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:e},t.queue=e,e=e.dispatch=ol.bind(null,ba,e),[t.memoizedState,e]}function Ia(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=ba.updateQueue)?(t={lastEffect:null,stores:null},ba.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ba(){return Ta().memoizedState}function Ha(e,t,n,r){var o=Aa();ba.flags|=e,o.memoizedState=Ia(1|t,n,void 0,void 0===r?null:r)}function Va(e,t,n,r){var o=Ta();r=void 0===r?null:r;var i=void 0;if(null!==va){var a=va.memoizedState;if(i=a.destroy,null!==r&&Ca(r,a.deps))return void(o.memoizedState=Ia(t,n,i,r))}ba.flags|=e,o.memoizedState=Ia(1|t,n,i,r)}function Wa(e,t){return Ha(8390656,8,e,t)}function qa(e,t){return Va(2048,8,e,t)}function Ka(e,t){return Va(4,2,e,t)}function Qa(e,t){return Va(4,4,e,t)}function Ja(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Xa(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Va(4,4,Ja.bind(null,t,e),n)}function Ya(){}function Ga(e,t){var n=Ta();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Ca(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Za(e,t){var n=Ta();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Ca(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function el(e,t,n){return 0===(21&ga)?(e.baseState&&(e.baseState=!1,Tl=!0),e.memoizedState=n):(br(n,t)||(n=ft(),ba.lanes|=n,Ks|=n,e.baseState=!0),t)}function tl(e,t){var n=wt;wt=0!==n&&4>n?n:4,e(!0);var r=ma.transition;ma.transition={};try{e(!1),t()}finally{wt=n,ma.transition=r}}function nl(){return Ta().memoizedState}function rl(e,t,n){var r=pu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},il(e))al(t,n);else if(null!==(n=Vi(e,t,n,r))){hu(n,e,r,du()),ll(n,t,r)}}function ol(e,t,n){var r=pu(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(il(e))al(t,o);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,br(l,a)){var s=t.interleaved;return null===s?(o.next=o,Hi(t)):(o.next=s.next,s.next=o),void(t.interleaved=o)}}catch($t){}null!==(n=Vi(e,t,o,r))&&(hu(n,e,r,o=du()),ll(n,t,r))}}function il(e){var t=e.alternate;return e===ba||null!==t&&t===ba}function al(e,t){_a=wa=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ll(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}var sl={readContext:Ii,useCallback:Sa,useContext:Sa,useEffect:Sa,useImperativeHandle:Sa,useInsertionEffect:Sa,useLayoutEffect:Sa,useMemo:Sa,useReducer:Sa,useRef:Sa,useState:Sa,useDebugValue:Sa,useDeferredValue:Sa,useTransition:Sa,useMutableSource:Sa,useSyncExternalStore:Sa,useId:Sa,unstable_isNewReconciler:!1},ul={readContext:Ii,useCallback:function(e,t){return Aa().memoizedState=[e,void 0===t?null:t],e},useContext:Ii,useEffect:Wa,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ha(4194308,4,Ja.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ha(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ha(4,2,e,t)},useMemo:function(e,t){var n=Aa();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Aa();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=rl.bind(null,ba,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Aa().memoizedState=e},useState:Ma,useDebugValue:Ya,useDeferredValue:function(e){return Aa().memoizedState=e},useTransition:function(){var e=Ma(!1),t=e[0];return e=tl.bind(null,e[1]),Aa().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ba,o=Aa();if(mi){if(void 0===n)throw Error(i(407));n=n()}else{if(n=t(),null===Ms)throw Error(i(349));0!==(30&ga)||za(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,Wa(Fa.bind(null,r,a,e),[e]),r.flags|=2048,Ia(9,La.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Aa(),t=Ms.identifierPrefix;if(mi){var n=si;t=":"+t+"R"+(n=(li&~(1<<32-it(li)-1)).toString(32)+n),0<(n=xa++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=ka++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},cl={readContext:Ii,useCallback:Ga,useContext:Ii,useEffect:qa,useImperativeHandle:Xa,useInsertionEffect:Ka,useLayoutEffect:Qa,useMemo:Za,useReducer:$a,useRef:Ba,useState:function(){return $a(Pa)},useDebugValue:Ya,useDeferredValue:function(e){return el(Ta(),va.memoizedState,e)},useTransition:function(){return[$a(Pa)[0],Ta().memoizedState]},useMutableSource:ja,useSyncExternalStore:Oa,useId:nl,unstable_isNewReconciler:!1},dl={readContext:Ii,useCallback:Ga,useContext:Ii,useEffect:qa,useImperativeHandle:Xa,useInsertionEffect:Ka,useLayoutEffect:Qa,useMemo:Za,useReducer:Ra,useRef:Ba,useState:function(){return Ra(Pa)},useDebugValue:Ya,useDeferredValue:function(e){var t=Ta();return null===va?t.memoizedState=e:el(t,va.memoizedState,e)},useTransition:function(){return[Ra(Pa)[0],Ta().memoizedState]},useMutableSource:ja,useSyncExternalStore:Oa,useId:nl,unstable_isNewReconciler:!1};function pl(e,t){if(e&&e.defaultProps){for(var n in t=F({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function hl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:F({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var fl={isMounted:function(e){return!!(e=e._reactInternals)&&Ie(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=du(),o=pu(e),i=Ji(r,o);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Xi(e,i,o))&&(hu(t,e,o,r),Yi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=du(),o=pu(e),i=Ji(r,o);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Xi(e,i,o))&&(hu(t,e,o,r),Yi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=du(),r=pu(e),o=Ji(n,r);o.tag=2,void 0!==t&&null!==t&&(o.callback=t),null!==(t=Xi(e,o,r))&&(hu(t,e,r,n),Yi(t,e,r))}};function ml(e,t,n,r,o,i,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,a):!t.prototype||!t.prototype.isPureReactComponent||(!vr(n,r)||!vr(o,i))}function gl(e,t,n){var r=!1,o=Uo,i=t.contextType;return"object"===typeof i&&null!==i?i=Ii(i):(o=Ho(t)?Io:Do.current,i=(r=null!==(r=t.contextTypes)&&void 0!==r)?Bo(e,o):Uo),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=fl,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function bl(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fl.enqueueReplaceState(t,t.state,null)}function vl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ki(e);var i=t.contextType;"object"===typeof i&&null!==i?o.context=Ii(i):(i=Ho(t)?Io:Do.current,o.context=Bo(e,i)),o.state=e.memoizedState,"function"===typeof(i=t.getDerivedStateFromProps)&&(hl(e,t,i,n),o.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(t=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&fl.enqueueReplaceState(o,o.state,null),Zi(e,n,o,r),o.state=e.memoizedState),"function"===typeof o.componentDidMount&&(e.flags|=4194308)}function yl(e,t){try{var n="",r=t;do{n+=I(r),r=r.return}while(r);var o=n}catch(zt){o="\nError generating stack: "+zt.message+"\n"+zt.stack}return{value:e,source:t,stack:o,digest:null}}function wl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function _l(e,t){try{console.error(t.value)}catch(xt){setTimeout((function(){throw xt}))}}var xl="function"===typeof WeakMap?WeakMap:Map;function kl(e,t,n){(n=Ji(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){tu||(tu=!0,nu=r),_l(0,t)},n}function Sl(e,t,n){(n=Ji(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){_l(0,t)}}var i=e.stateNode;return null!==i&&"function"===typeof i.componentDidCatch&&(n.callback=function(){_l(0,t),"function"!==typeof r&&(null===ru?ru=new Set([this]):ru.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function Cl(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new xl;var o=new Set;r.set(t,o)}else void 0===(o=r.get(t))&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Lu.bind(null,e,t,n),t.then(e,e))}function El(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function Nl(e,t,n,r,o){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Ji(-1,1)).tag=2,Xi(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Al=w.ReactCurrentOwner,Tl=!1;function Pl(e,t,n,r){t.child=null===e?Ri(t,null,n,r):$i(t,e.child,n,r)}function $l(e,t,n,r,o){n=n.render;var i=t.ref;return Mi(t,o),r=Ea(e,t,n,r,i,o),n=Na(),null===e||Tl?(mi&&n&&di(t),t.flags|=1,Pl(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,es(e,t,o))}function Rl(e,t,n,r,o){if(null===e){var i=n.type;return"function"!==typeof i||Hu(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Wu(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,jl(e,t,i,r,o))}if(i=e.child,0===(e.lanes&o)){var a=i.memoizedProps;if((n=null!==(n=n.compare)?n:vr)(a,r)&&e.ref===t.ref)return es(e,t,o)}return t.flags|=1,(e=Vu(i,r)).ref=t.ref,e.return=t,t.child=e}function jl(e,t,n,r,o){if(null!==e){var i=e.memoizedProps;if(vr(i,r)&&e.ref===t.ref){if(Tl=!1,t.pendingProps=r=i,0===(e.lanes&o))return t.lanes=e.lanes,es(e,t,o);0!==(131072&e.flags)&&(Tl=!0)}}return Ll(e,t,n,r,o)}function Ol(e,t,n){var r=t.pendingProps,o=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Fo(Vs,Hs),Hs|=n;else{if(0===(1073741824&n))return e=null!==i?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Fo(Vs,Hs),Hs|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==i?i.baseLanes:n,Fo(Vs,Hs),Hs|=r}else null!==i?(r=i.baseLanes|n,t.memoizedState=null):r=n,Fo(Vs,Hs),Hs|=r;return Pl(e,t,o,n),t.child}function zl(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ll(e,t,n,r,o){var i=Ho(n)?Io:Do.current;return i=Bo(t,i),Mi(t,o),n=Ea(e,t,n,r,i,o),r=Na(),null===e||Tl?(mi&&r&&di(t),t.flags|=1,Pl(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,es(e,t,o))}function Fl(e,t,n,r,o){if(Ho(n)){var i=!0;Ko(t)}else i=!1;if(Mi(t,o),null===t.stateNode)Zl(e,t),gl(t,n,r),vl(t,n,r,o),r=!0;else if(null===e){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;"object"===typeof u&&null!==u?u=Ii(u):u=Bo(t,u=Ho(n)?Io:Do.current);var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof a.getSnapshotBeforeUpdate;d||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(l!==r||s!==u)&&bl(t,a,r,u),qi=!1;var p=t.memoizedState;a.state=p,Zi(t,r,a,o),s=t.memoizedState,l!==r||p!==s||Mo.current||qi?("function"===typeof c&&(hl(t,n,c,r),s=t.memoizedState),(l=qi||ml(t,n,l,r,p,s,u))?(d||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Qi(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:pl(t.type,l),a.props=u,d=t.pendingProps,p=a.context,"object"===typeof(s=n.contextType)&&null!==s?s=Ii(s):s=Bo(t,s=Ho(n)?Io:Do.current);var h=n.getDerivedStateFromProps;(c="function"===typeof h||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(l!==d||p!==s)&&bl(t,a,r,s),qi=!1,p=t.memoizedState,a.state=p,Zi(t,r,a,o);var f=t.memoizedState;l!==d||p!==f||Mo.current||qi?("function"===typeof h&&(hl(t,n,h,r),f=t.memoizedState),(u=qi||ml(t,n,u,r,p,f,s)||!1)?(c||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,f,s),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,f,s)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=f),a.props=r,a.state=f,a.context=s,r=u):("function"!==typeof a.componentDidUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Ul(e,t,n,r,i,o)}function Ul(e,t,n,r,o,i){zl(e,t);var a=0!==(128&t.flags);if(!r&&!a)return o&&Qo(t,n,!1),es(e,t,i);r=t.stateNode,Al.current=t;var l=a&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=$i(t,e.child,null,i),t.child=$i(t,null,l,i)):Pl(e,t,l,i),t.memoizedState=r.state,o&&Qo(t,n,!0),t.child}function Dl(e){var t=e.stateNode;t.pendingContext?Wo(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Wo(0,t.context,!1),aa(e,t.containerInfo)}function Ml(e,t,n,r,o){return Si(),Ci(o),t.flags|=256,Pl(e,t,n,r),t.child}var Il,Bl,Hl,Vl,Wl={dehydrated:null,treeContext:null,retryLane:0};function ql(e){return{baseLanes:e,cachePool:null,transitions:null}}function Kl(e,t,n){var r,o=t.pendingProps,a=ca.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&a)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(a|=1),Fo(ca,1&a),null===e)return wi(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=o.children,e=o.fallback,l?(o=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&o)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Ku(s,o,0,null),e=qu(e,o,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ql(n),t.memoizedState=Wl,e):Ql(t,s));if(null!==(a=e.memoizedState)&&null!==(r=a.dehydrated))return function(e,t,n,r,o,a,l){if(n)return 256&t.flags?(t.flags&=-257,Jl(e,t,l,r=wl(Error(i(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=Ku({mode:"visible",children:r.children},o,0,null),(a=qu(a,o,l,null)).flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,0!==(1&t.mode)&&$i(t,e.child,null,l),t.child.memoizedState=ql(l),t.memoizedState=Wl,a);if(0===(1&t.mode))return Jl(e,t,l,null);if("$!"===o.data){if(r=o.nextSibling&&o.nextSibling.dataset)var s=r.dgst;return r=s,Jl(e,t,l,r=wl(a=Error(i(419)),r,void 0))}if(s=0!==(l&e.childLanes),Tl||s){if(null!==(r=Ms)){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}0!==(o=0!==(o&(r.suspendedLanes|l))?0:o)&&o!==a.retryLane&&(a.retryLane=o,Wi(e,o),hu(r,e,o,-1))}return Eu(),Jl(e,t,l,r=wl(Error(i(421))))}return"$?"===o.data?(t.flags|=128,t.child=e.child,t=Uu.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,fi=wo(o.nextSibling),hi=t,mi=!0,gi=null,null!==e&&(oi[ii++]=li,oi[ii++]=si,oi[ii++]=ai,li=e.id,si=e.overflow,ai=t),t=Ql(t,r.children),t.flags|=4096,t)}(e,t,s,o,r,a,n);if(l){l=o.fallback,s=t.mode,r=(a=e.child).sibling;var u={mode:"hidden",children:o.children};return 0===(1&s)&&t.child!==a?((o=t.child).childLanes=0,o.pendingProps=u,t.deletions=null):(o=Vu(a,u)).subtreeFlags=14680064&a.subtreeFlags,null!==r?l=Vu(r,l):(l=qu(l,s,n,null)).flags|=2,l.return=t,o.return=t,o.sibling=l,t.child=o,o=l,l=t.child,s=null===(s=e.child.memoizedState)?ql(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Wl,o}return e=(l=e.child).sibling,o=Vu(l,{mode:"visible",children:o.children}),0===(1&t.mode)&&(o.lanes=n),o.return=t,o.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Ql(e,t){return(t=Ku({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Jl(e,t,n,r){return null!==r&&Ci(r),$i(t,e.child,null,n),(e=Ql(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Xl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Di(e.return,t,n)}function Yl(e,t,n,r,o){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Gl(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Pl(e,t,r.children,n),0!==(2&(r=ca.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Xl(e,n,t);else if(19===e.tag)Xl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Fo(ca,r),0===(1&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;null!==n;)null!==(e=n.alternate)&&null===da(e)&&(o=n),n=n.sibling;null===(n=o)?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Yl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===da(e)){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Yl(t,!0,n,null,i);break;case"together":Yl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Zl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function es(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ks|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(n=Vu(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Vu(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function ts(e,t){if(!mi)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ns(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=14680064&o.subtreeFlags,r|=14680064&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rs(e,t,n){var r=t.pendingProps;switch(pi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ns(t),null;case 1:case 17:return Ho(t.type)&&Vo(),ns(t),null;case 3:return r=t.stateNode,la(),Lo(Mo),Lo(Do),ha(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(xi(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==gi&&(bu(gi),gi=null))),Bl(e,t),ns(t),null;case 5:ua(t);var o=ia(oa.current);if(n=t.type,null!==e&&null!=t.stateNode)Hl(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(i(166));return ns(t),null}if(e=ia(na.current),xi(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[ko]=t,r[So]=a,e=0!==(1&t.mode),n){case"dialog":Jr("cancel",r),Jr("close",r);break;case"iframe":case"object":case"embed":Jr("load",r);break;case"video":case"audio":for(o=0;o<Wr.length;o++)Jr(Wr[o],r);break;case"source":Jr("error",r);break;case"img":case"image":case"link":Jr("error",r),Jr("load",r);break;case"details":Jr("toggle",r);break;case"input":X(r,a),Jr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Jr("invalid",r);break;case"textarea":oe(r,a),Jr("invalid",r)}for(var s in be(n,a),o=null,a)if(a.hasOwnProperty(s)){var u=a[s];"children"===s?"string"===typeof u?r.textContent!==u&&(!0!==a.suppressHydrationWarning&&so(r.textContent,u,e),o=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==a.suppressHydrationWarning&&so(r.textContent,u,e),o=["children",""+u]):l.hasOwnProperty(s)&&null!=u&&"onScroll"===s&&Jr("scroll",r)}switch(n){case"input":q(r),Z(r,a,!0);break;case"textarea":q(r),ae(r);break;case"select":case"option":break;default:"function"===typeof a.onClick&&(r.onclick=uo)}r=o,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===o.nodeType?o:o.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[ko]=t,e[So]=r,Il(e,t,!1,!1),t.stateNode=e;e:{switch(s=ve(n,r),n){case"dialog":Jr("cancel",e),Jr("close",e),o=r;break;case"iframe":case"object":case"embed":Jr("load",e),o=r;break;case"video":case"audio":for(o=0;o<Wr.length;o++)Jr(Wr[o],e);o=r;break;case"source":Jr("error",e),o=r;break;case"img":case"image":case"link":Jr("error",e),Jr("load",e),o=r;break;case"details":Jr("toggle",e),o=r;break;case"input":X(e,r),o=J(e,r),Jr("invalid",e);break;case"option":default:o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=F({},r,{value:void 0}),Jr("invalid",e);break;case"textarea":oe(e,r),o=re(e,r),Jr("invalid",e)}for(a in be(n,o),u=o)if(u.hasOwnProperty(a)){var c=u[a];"style"===a?me(e,c):"dangerouslySetInnerHTML"===a?null!=(c=c?c.__html:void 0)&&ce(e,c):"children"===a?"string"===typeof c?("textarea"!==n||""!==c)&&de(e,c):"number"===typeof c&&de(e,""+c):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(l.hasOwnProperty(a)?null!=c&&"onScroll"===a&&Jr("scroll",e):null!=c&&y(e,a,c,s))}switch(n){case"input":q(e),Z(e,r,!1);break;case"textarea":q(e),ae(e);break;case"option":null!=r.value&&e.setAttribute("value",""+V(r.value));break;case"select":e.multiple=!!r.multiple,null!=(a=r.value)?ne(e,!!r.multiple,a,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof o.onClick&&(e.onclick=uo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return ns(t),null;case 6:if(e&&null!=t.stateNode)Vl(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(i(166));if(n=ia(oa.current),ia(na.current),xi(t)){if(r=t.stateNode,n=t.memoizedProps,r[ko]=t,(a=r.nodeValue!==n)&&null!==(e=hi))switch(e.tag){case 3:so(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&so(r.nodeValue,n,0!==(1&e.mode))}a&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[ko]=t,t.stateNode=r}return ns(t),null;case 13:if(Lo(ca),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(mi&&null!==fi&&0!==(1&t.mode)&&0===(128&t.flags))ki(),Si(),t.flags|=98560,a=!1;else if(a=xi(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(i(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(i(317));a[ko]=t}else Si(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;ns(t),a=!1}else null!==gi&&(bu(gi),gi=null),a=!0;if(!a)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ca.current)?0===Ws&&(Ws=3):Eu())),null!==t.updateQueue&&(t.flags|=4),ns(t),null);case 4:return la(),Bl(e,t),null===e&&Gr(t.stateNode.containerInfo),ns(t),null;case 10:return Ui(t.type._context),ns(t),null;case 19:if(Lo(ca),null===(a=t.memoizedState))return ns(t),null;if(r=0!==(128&t.flags),null===(s=a.rendering))if(r)ts(a,!1);else{if(0!==Ws||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=da(e))){for(t.flags|=128,ts(a,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(a=n).flags&=14680066,null===(s=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Fo(ca,1&ca.current|2),t.child}e=e.sibling}null!==a.tail&&Xe()>Zs&&(t.flags|=128,r=!0,ts(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=da(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),ts(a,!0),null===a.tail&&"hidden"===a.tailMode&&!s.alternate&&!mi)return ns(t),null}else 2*Xe()-a.renderingStartTime>Zs&&1073741824!==n&&(t.flags|=128,r=!0,ts(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=a.last)?n.sibling=s:t.child=s,a.last=s)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Xe(),t.sibling=null,n=ca.current,Fo(ca,r?1&n|2:1&n),t):(ns(t),null);case 22:case 23:return xu(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Hs)&&(ns(t),6&t.subtreeFlags&&(t.flags|=8192)):ns(t),null;case 24:case 25:return null}throw Error(i(156,t.tag))}function os(e,t){switch(pi(t),t.tag){case 1:return Ho(t.type)&&Vo(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return la(),Lo(Mo),Lo(Do),ha(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return ua(t),null;case 13:if(Lo(ca),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));Si()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Lo(ca),null;case 4:return la(),null;case 10:return Ui(t.type._context),null;case 22:case 23:return xu(),null;default:return null}}Il=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Bl=function(){},Hl=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,ia(na.current);var i,a=null;switch(n){case"input":o=J(e,o),r=J(e,r),a=[];break;case"select":o=F({},o,{value:void 0}),r=F({},r,{value:void 0}),a=[];break;case"textarea":o=re(e,o),r=re(e,r),a=[];break;default:"function"!==typeof o.onClick&&"function"===typeof r.onClick&&(e.onclick=uo)}for(c in be(n,r),n=null,o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&null!=o[c])if("style"===c){var s=o[c];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(l.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var u=r[c];if(s=null!=o?o[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(null!=u||null!=s))if("style"===c)if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(a||(a=[]),a.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,s=s?s.__html:void 0,null!=u&&s!==u&&(a=a||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(a=a||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(l.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Jr("scroll",e),a||s===u||(a=[])):(a=a||[]).push(c,u))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}},Vl=function(e,t,n,r){n!==r&&(t.flags|=4)};var is=!1,as=!1,ls="function"===typeof WeakSet?WeakSet:Set,ss=null;function us(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(jt){zu(e,t,jt)}else n.current=null}function cs(e,t,n){try{n()}catch(jt){zu(e,t,jt)}}var ds=!1;function hs(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,void 0!==i&&cs(t,n,i)}o=o.next}while(o!==r)}}function fs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ms(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function gs(e){var t=e.alternate;null!==t&&(e.alternate=null,gs(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[ko],delete t[So],delete t[Eo],delete t[No],delete t[Ao])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bs(e){return 5===e.tag||3===e.tag||4===e.tag}function vs(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||bs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ys(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=uo));else if(4!==r&&null!==(e=e.child))for(ys(e,t,n),e=e.sibling;null!==e;)ys(e,t,n),e=e.sibling}function ws(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(ws(e,t,n),e=e.sibling;null!==e;)ws(e,t,n),e=e.sibling}var _s=null,xs=!1;function ks(e,t,n){for(n=n.child;null!==n;)Ss(e,t,n),n=n.sibling}function Ss(e,t,n){if(ot&&"function"===typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(rt,n)}catch(Et){}switch(n.tag){case 5:as||us(n,t);case 6:var r=_s,o=xs;_s=null,ks(e,t,n),xs=o,null!==(_s=r)&&(xs?(e=_s,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):_s.removeChild(n.stateNode));break;case 18:null!==_s&&(xs?(e=_s,n=n.stateNode,8===e.nodeType?yo(e.parentNode,n):1===e.nodeType&&yo(e,n),Xt(e)):yo(_s,n.stateNode));break;case 4:r=_s,o=xs,_s=n.stateNode.containerInfo,xs=!0,ks(e,t,n),_s=r,xs=o;break;case 0:case 11:case 14:case 15:if(!as&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,void 0!==a&&(0!==(2&i)||0!==(4&i))&&cs(n,t,a),o=o.next}while(o!==r)}ks(e,t,n);break;case 1:if(!as&&(us(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(Et){zu(n,t,Et)}ks(e,t,n);break;case 21:ks(e,t,n);break;case 22:1&n.mode?(as=(r=as)||null!==n.memoizedState,ks(e,t,n),as=r):ks(e,t,n);break;default:ks(e,t,n)}}function Cs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new ls),t.forEach((function(t){var r=Du.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function Es(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:_s=s.stateNode,xs=!1;break e;case 3:case 4:_s=s.stateNode.containerInfo,xs=!0;break e}s=s.return}if(null===_s)throw Error(i(160));Ss(a,l,o),_s=null,xs=!1;var u=o.alternate;null!==u&&(u.return=null),o.return=null}catch($t){zu(o,t,$t)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)Ns(t,e),t=t.sibling}function Ns(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Es(t,e),As(e),4&r){try{hs(3,e,e.return),fs(3,e)}catch(mt){zu(e,e.return,mt)}try{hs(5,e,e.return)}catch(mt){zu(e,e.return,mt)}}break;case 1:Es(t,e),As(e),512&r&&null!==n&&us(n,n.return);break;case 5:if(Es(t,e),As(e),512&r&&null!==n&&us(n,n.return),32&e.flags){var o=e.stateNode;try{de(o,"")}catch(mt){zu(e,e.return,mt)}}if(4&r&&null!=(o=e.stateNode)){var a=e.memoizedProps,l=null!==n?n.memoizedProps:a,s=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===s&&"radio"===a.type&&null!=a.name&&Y(o,a),ve(s,l);var c=ve(s,a);for(l=0;l<u.length;l+=2){var d=u[l],p=u[l+1];"style"===d?me(o,p):"dangerouslySetInnerHTML"===d?ce(o,p):"children"===d?de(o,p):y(o,d,p,c)}switch(s){case"input":G(o,a);break;case"textarea":ie(o,a);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var f=a.value;null!=f?ne(o,!!a.multiple,f,!1):h!==!!a.multiple&&(null!=a.defaultValue?ne(o,!!a.multiple,a.defaultValue,!0):ne(o,!!a.multiple,a.multiple?[]:"",!1))}o[So]=a}catch(mt){zu(e,e.return,mt)}}break;case 6:if(Es(t,e),As(e),4&r){if(null===e.stateNode)throw Error(i(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(mt){zu(e,e.return,mt)}}break;case 3:if(Es(t,e),As(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Xt(t.containerInfo)}catch(mt){zu(e,e.return,mt)}break;case 4:default:Es(t,e),As(e);break;case 13:Es(t,e),As(e),8192&(o=e.child).flags&&(a=null!==o.memoizedState,o.stateNode.isHidden=a,!a||null!==o.alternate&&null!==o.alternate.memoizedState||(Gs=Xe())),4&r&&Cs(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(as=(c=as)||d,Es(t,e),as=c):Es(t,e),As(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(ss=e,d=e.child;null!==d;){for(p=ss=d;null!==ss;){switch(f=(h=ss).child,h.tag){case 0:case 11:case 14:case 15:hs(4,h,h.return);break;case 1:us(h,h.return);var m=h.stateNode;if("function"===typeof m.componentWillUnmount){r=h,n=h.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(mt){zu(r,n,mt)}}break;case 5:us(h,h.return);break;case 22:if(null!==h.memoizedState){Rs(p);continue}}null!==f?(f.return=h,ss=f):Rs(p)}d=d.sibling}e:for(d=null,p=e;;){if(5===p.tag){if(null===d){d=p;try{o=p.stateNode,c?"function"===typeof(a=o.style).setProperty?a.setProperty("display","none","important"):a.display="none":(s=p.stateNode,l=void 0!==(u=p.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,s.style.display=fe("display",l))}catch(mt){zu(e,e.return,mt)}}}else if(6===p.tag){if(null===d)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(mt){zu(e,e.return,mt)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Es(t,e),As(e),4&r&&Cs(e);case 21:}}function As(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(bs(n)){var r=n;break e}n=n.return}throw Error(i(160))}switch(r.tag){case 5:var o=r.stateNode;32&r.flags&&(de(o,""),r.flags&=-33),ws(e,vs(e),o);break;case 3:case 4:var a=r.stateNode.containerInfo;ys(e,vs(e),a);break;default:throw Error(i(161))}}catch(yn){zu(e,e.return,yn)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Ts(e,t,n){ss=e,Ps(e,t,n)}function Ps(e,t,n){for(var r=0!==(1&e.mode);null!==ss;){var o=ss,i=o.child;if(22===o.tag&&r){var a=null!==o.memoizedState||is;if(!a){var l=o.alternate,s=null!==l&&null!==l.memoizedState||as;l=is;var u=as;if(is=a,(as=s)&&!u)for(ss=o;null!==ss;)s=(a=ss).child,22===a.tag&&null!==a.memoizedState?js(o):null!==s?(s.return=a,ss=s):js(o);for(;null!==i;)ss=i,Ps(i,t,n),i=i.sibling;ss=o,is=l,as=u}$s(e)}else 0!==(8772&o.subtreeFlags)&&null!==i?(i.return=o,ss=i):$s(e)}}function $s(e){for(;null!==ss;){var t=ss;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:as||fs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!as)if(null===n)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:pl(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;null!==a&&ea(t,a,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}ea(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var p=d.dehydrated;null!==p&&Xt(p)}}}break;default:throw Error(i(163))}as||512&t.flags&&ms(t)}catch(h){zu(t,t.return,h)}}if(t===e){ss=null;break}if(null!==(n=t.sibling)){n.return=t.return,ss=n;break}ss=t.return}}function Rs(e){for(;null!==ss;){var t=ss;if(t===e){ss=null;break}var n=t.sibling;if(null!==n){n.return=t.return,ss=n;break}ss=t.return}}function js(e){for(;null!==ss;){var t=ss;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fs(4,t)}catch(yn){zu(t,n,yn)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var o=t.return;try{r.componentDidMount()}catch(yn){zu(t,o,yn)}}var i=t.return;try{ms(t)}catch(yn){zu(t,i,yn)}break;case 5:var a=t.return;try{ms(t)}catch(yn){zu(t,a,yn)}}}catch(yn){zu(t,t.return,yn)}if(t===e){ss=null;break}var l=t.sibling;if(null!==l){l.return=t.return,ss=l;break}ss=t.return}}var Os,zs=Math.ceil,Ls=w.ReactCurrentDispatcher,Fs=w.ReactCurrentOwner,Us=w.ReactCurrentBatchConfig,Ds=0,Ms=null,Is=null,Bs=0,Hs=0,Vs=zo(0),Ws=0,qs=null,Ks=0,Qs=0,Js=0,Xs=null,Ys=null,Gs=0,Zs=1/0,eu=null,tu=!1,nu=null,ru=null,ou=!1,iu=null,au=0,lu=0,su=null,uu=-1,cu=0;function du(){return 0!==(6&Ds)?Xe():-1!==uu?uu:uu=Xe()}function pu(e){return 0===(1&e.mode)?1:0!==(2&Ds)&&0!==Bs?Bs&-Bs:null!==Ei.transition?(0===cu&&(cu=ft()),cu):0!==(e=wt)?e:e=void 0===(e=window.event)?16:an(e.type)}function hu(e,t,n,r){if(50<lu)throw lu=0,su=null,Error(i(185));vt(e,n,r),0!==(2&Ds)&&e===Ms||(e===Ms&&(0===(2&Ds)&&(Qs|=n),4===Ws&&vu(e,Bs)),fu(e,r),1===n&&0===Ds&&0===(1&t.mode)&&(Zs=Xe()+500,Xo&&Zo()))}function fu(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-it(i),l=1<<a,s=o[a];-1===s?0!==(l&n)&&0===(l&r)||(o[a]=pt(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}(e,t);var r=dt(e,e===Ms?Bs:0);if(0===r)null!==n&&Ke(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ke(n),1===t)0===e.tag?function(e){Xo=!0,Go(e)}(yu.bind(null,e)):Go(yu.bind(null,e)),bo((function(){0===(6&Ds)&&Zo()})),n=null;else{switch(_t(r)){case 1:n=Ge;break;case 4:n=Ze;break;case 16:default:n=et;break;case 536870912:n=nt}n=Mu(n,mu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function mu(e,t){if(uu=-1,cu=0,0!==(6&Ds))throw Error(i(327));var n=e.callbackNode;if(ju()&&e.callbackNode!==n)return null;var r=dt(e,e===Ms?Bs:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=Nu(e,r);else{t=r;var o=Ds;Ds|=2;var a=Cu();for(Ms===e&&Bs===t||(eu=null,Zs=Xe()+500,ku(e,t));;)try{Tu();break}catch(Et){Su(e,Et)}Fi(),Ls.current=a,Ds=o,null!==Is?t=0:(Ms=null,Bs=0,t=Ws)}if(0!==t){if(2===t&&(0!==(o=ht(e))&&(r=o,t=gu(e,o))),1===t)throw n=qs,ku(e,0),vu(e,r),fu(e,Xe()),n;if(6===t)vu(e,r);else{if(o=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!br(i(),o))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(o)&&(2===(t=Nu(e,r))&&(0!==(a=ht(e))&&(r=a,t=gu(e,a))),1===t))throw n=qs,ku(e,0),vu(e,r),fu(e,Xe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(i(345));case 2:case 5:Ru(e,Ys,eu);break;case 3:if(vu(e,r),(130023424&r)===r&&10<(t=Gs+500-Xe())){if(0!==dt(e,0))break;if(((o=e.suspendedLanes)&r)!==r){du(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=fo(Ru.bind(null,e,Ys,eu),t);break}Ru(e,Ys,eu);break;case 4:if(vu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-it(r);a=1<<l,(l=t[l])>o&&(o=l),r&=~a}if(r=o,10<(r=(120>(r=Xe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zs(r/1960))-r)){e.timeoutHandle=fo(Ru.bind(null,e,Ys,eu),r);break}Ru(e,Ys,eu);break;default:throw Error(i(329))}}}return fu(e,Xe()),e.callbackNode===n?mu.bind(null,e):null}function gu(e,t){var n=Xs;return e.current.memoizedState.isDehydrated&&(ku(e,t).flags|=256),2!==(e=Nu(e,t))&&(t=Ys,Ys=n,null!==t&&bu(t)),e}function bu(e){null===Ys?Ys=e:Ys.push.apply(Ys,e)}function vu(e,t){for(t&=~Js,t&=~Qs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function yu(e){if(0!==(6&Ds))throw Error(i(327));ju();var t=dt(e,0);if(0===(1&t))return fu(e,Xe()),null;var n=Nu(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=gu(e,r))}if(1===n)throw n=qs,ku(e,0),vu(e,t),fu(e,Xe()),n;if(6===n)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ru(e,Ys,eu),fu(e,Xe()),null}function wu(e,t){var n=Ds;Ds|=1;try{return e(t)}finally{0===(Ds=n)&&(Zs=Xe()+500,Xo&&Zo())}}function _u(e){null!==iu&&0===iu.tag&&0===(6&Ds)&&ju();var t=Ds;Ds|=1;var n=Us.transition,r=wt;try{if(Us.transition=null,wt=1,e)return e()}finally{wt=r,Us.transition=n,0===(6&(Ds=t))&&Zo()}}function xu(){Hs=Vs.current,Lo(Vs)}function ku(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,mo(n)),null!==Is)for(n=Is.return;null!==n;){var r=n;switch(pi(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Vo();break;case 3:la(),Lo(Mo),Lo(Do),ha();break;case 5:ua(r);break;case 4:la();break;case 13:case 19:Lo(ca);break;case 10:Ui(r.type._context);break;case 22:case 23:xu()}n=n.return}if(Ms=e,Is=e=Vu(e.current,null),Bs=Hs=t,Ws=0,qs=null,Js=Qs=Ks=0,Ys=Xs=null,null!==Bi){for(t=0;t<Bi.length;t++)if(null!==(r=(n=Bi[t]).interleaved)){n.interleaved=null;var o=r.next,i=n.pending;if(null!==i){var a=i.next;i.next=o,r.next=a}n.pending=r}Bi=null}return e}function Su(e,t){for(;;){var n=Is;try{if(Fi(),fa.current=sl,wa){for(var r=ba.memoizedState;null!==r;){var o=r.queue;null!==o&&(o.pending=null),r=r.next}wa=!1}if(ga=0,ya=va=ba=null,_a=!1,xa=0,Fs.current=null,null===n||null===n.return){Ws=1,qs=t,Is=null;break}e:{var a=e,l=n.return,s=n,u=t;if(t=Bs,s.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,d=s,p=d.tag;if(0===(1&d.mode)&&(0===p||11===p||15===p)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var f=El(l);if(null!==f){f.flags&=-257,Nl(f,l,s,0,t),1&f.mode&&Cl(a,c,t),u=c;var m=(t=f).updateQueue;if(null===m){var g=new Set;g.add(u),t.updateQueue=g}else m.add(u);break e}if(0===(1&t)){Cl(a,c,t),Eu();break e}u=Error(i(426))}else if(mi&&1&s.mode){var b=El(l);if(null!==b){0===(65536&b.flags)&&(b.flags|=256),Nl(b,l,s,0,t),Ci(yl(u,s));break e}}a=u=yl(u,s),4!==Ws&&(Ws=2),null===Xs?Xs=[a]:Xs.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t,Gi(a,kl(0,u,t));break e;case 1:s=u;var v=a.type,y=a.stateNode;if(0===(128&a.flags)&&("function"===typeof v.getDerivedStateFromError||null!==y&&"function"===typeof y.componentDidCatch&&(null===ru||!ru.has(y)))){a.flags|=65536,t&=-t,a.lanes|=t,Gi(a,Sl(a,s,t));break e}}a=a.return}while(null!==a)}$u(n)}catch(w){t=w,Is===n&&null!==n&&(Is=n=n.return);continue}break}}function Cu(){var e=Ls.current;return Ls.current=sl,null===e?sl:e}function Eu(){0!==Ws&&3!==Ws&&2!==Ws||(Ws=4),null===Ms||0===(268435455&Ks)&&0===(268435455&Qs)||vu(Ms,Bs)}function Nu(e,t){var n=Ds;Ds|=2;var r=Cu();for(Ms===e&&Bs===t||(eu=null,ku(e,t));;)try{Au();break}catch(gt){Su(e,gt)}if(Fi(),Ds=n,Ls.current=r,null!==Is)throw Error(i(261));return Ms=null,Bs=0,Ws}function Au(){for(;null!==Is;)Pu(Is)}function Tu(){for(;null!==Is&&!Qe();)Pu(Is)}function Pu(e){var t=Os(e.alternate,e,Hs);e.memoizedProps=e.pendingProps,null===t?$u(e):Is=t,Fs.current=null}function $u(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=rs(n,t,Hs)))return void(Is=n)}else{if(null!==(n=os(n,t)))return n.flags&=32767,void(Is=n);if(null===e)return Ws=6,void(Is=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Is=t);Is=t=e}while(null!==t);0===Ws&&(Ws=5)}function Ru(e,t,n){var r=wt,o=Us.transition;try{Us.transition=null,wt=1,function(e,t,n,r){do{ju()}while(null!==iu);if(0!==(6&Ds))throw Error(i(327));n=e.finishedWork;var o=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-it(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}(e,a),e===Ms&&(Is=Ms=null,Bs=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||ou||(ou=!0,Mu(et,(function(){return ju(),null}))),a=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||a){a=Us.transition,Us.transition=null;var l=wt;wt=1;var s=Ds;Ds|=4,Fs.current=null,function(e,t){if(co=Gt,kr(e=xr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(ps){n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,p=e,h=null;t:for(;;){for(var f;p!==n||0!==o&&3!==p.nodeType||(s=l+o),p!==a||0!==r&&3!==p.nodeType||(u=l+r),3===p.nodeType&&(l+=p.nodeValue.length),null!==(f=p.firstChild);)h=p,p=f;for(;;){if(p===e)break t;if(h===n&&++c===o&&(s=l),h===a&&++d===r&&(u=l),null!==(f=p.nextSibling))break;h=(p=h).parentNode}p=f}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(po={focusedElem:e,selectionRange:n},Gt=!1,ss=t;null!==ss;)if(e=(t=ss).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,ss=e;else for(;null!==ss;){t=ss;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,b=m.memoizedState,v=t.stateNode,y=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:pl(t.type,g),b);v.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(i(163))}}catch(ps){zu(t,t.return,ps)}if(null!==(e=t.sibling)){e.return=t.return,ss=e;break}ss=t.return}m=ds,ds=!1}(e,n),Ns(n,e),Sr(po),Gt=!!co,po=co=null,e.current=n,Ts(n,e,o),Je(),Ds=s,wt=l,Us.transition=a}else e.current=n;if(ou&&(ou=!1,iu=e,au=o),a=e.pendingLanes,0===a&&(ru=null),function(e){if(ot&&"function"===typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(rt,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),fu(e,Xe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(tu)throw tu=!1,e=nu,nu=null,e;0!==(1&au)&&0!==e.tag&&ju(),a=e.pendingLanes,0!==(1&a)?e===su?lu++:(lu=0,su=e):lu=0,Zo()}(e,t,n,r)}finally{Us.transition=o,wt=r}return null}function ju(){if(null!==iu){var e=_t(au),t=Us.transition,n=wt;try{if(Us.transition=null,wt=16>e?16:e,null===iu)var r=!1;else{if(e=iu,iu=null,au=0,0!==(6&Ds))throw Error(i(331));var o=Ds;for(Ds|=4,ss=e.current;null!==ss;){var a=ss,l=a.child;if(0!==(16&ss.flags)){var s=a.deletions;if(null!==s){for(var u=0;u<s.length;u++){var c=s[u];for(ss=c;null!==ss;){var d=ss;switch(d.tag){case 0:case 11:case 15:hs(8,d,a)}var p=d.child;if(null!==p)p.return=d,ss=p;else for(;null!==ss;){var h=(d=ss).sibling,f=d.return;if(gs(d),d===c){ss=null;break}if(null!==h){h.return=f,ss=h;break}ss=f}}}var m=a.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var b=g.sibling;g.sibling=null,g=b}while(null!==g)}}ss=a}}if(0!==(2064&a.subtreeFlags)&&null!==l)l.return=a,ss=l;else e:for(;null!==ss;){if(0!==(2048&(a=ss).flags))switch(a.tag){case 0:case 11:case 15:hs(9,a,a.return)}var v=a.sibling;if(null!==v){v.return=a.return,ss=v;break e}ss=a.return}}var y=e.current;for(ss=y;null!==ss;){var w=(l=ss).child;if(0!==(2064&l.subtreeFlags)&&null!==w)w.return=l,ss=w;else e:for(l=y;null!==ss;){if(0!==(2048&(s=ss).flags))try{switch(s.tag){case 0:case 11:case 15:fs(9,s)}}catch(x){zu(s,s.return,x)}if(s===l){ss=null;break e}var _=s.sibling;if(null!==_){_.return=s.return,ss=_;break e}ss=s.return}}if(Ds=o,Zo(),ot&&"function"===typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(rt,e)}catch(x){}r=!0}return r}finally{wt=n,Us.transition=t}}return!1}function Ou(e,t,n){e=Xi(e,t=kl(0,t=yl(n,t),1),1),t=du(),null!==e&&(vt(e,1,t),fu(e,t))}function zu(e,t,n){if(3===e.tag)Ou(e,e,n);else for(;null!==t;){if(3===t.tag){Ou(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===ru||!ru.has(r))){t=Xi(t,e=Sl(t,e=yl(n,e),1),1),e=du(),null!==t&&(vt(t,1,e),fu(t,e));break}}t=t.return}}function Lu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=du(),e.pingedLanes|=e.suspendedLanes&n,Ms===e&&(Bs&n)===n&&(4===Ws||3===Ws&&(130023424&Bs)===Bs&&500>Xe()-Gs?ku(e,0):Js|=n),fu(e,t)}function Fu(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ut,0===(130023424&(ut<<=1))&&(ut=4194304)));var n=du();null!==(e=Wi(e,t))&&(vt(e,t,n),fu(e,n))}function Uu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Fu(e,n)}function Du(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;null!==o&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(i(314))}null!==r&&r.delete(t),Fu(e,n)}function Mu(e,t){return qe(e,t)}function Iu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bu(e,t,n,r){return new Iu(e,t,n,r)}function Hu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Vu(e,t){var n=e.alternate;return null===n?((n=Bu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Wu(e,t,n,r,o,a){var l=2;if(r=e,"function"===typeof e)Hu(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case k:return qu(n.children,o,a,t);case S:l=8,o|=8;break;case C:return(e=Bu(12,n,t,2|o)).elementType=C,e.lanes=a,e;case T:return(e=Bu(13,n,t,o)).elementType=T,e.lanes=a,e;case P:return(e=Bu(19,n,t,o)).elementType=P,e.lanes=a,e;case j:return Ku(n,o,a,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case E:l=10;break e;case N:l=9;break e;case A:l=11;break e;case $:l=14;break e;case R:l=16,r=null;break e}throw Error(i(130,null==e?e:typeof e,""))}return(t=Bu(l,n,t,o)).elementType=e,t.type=r,t.lanes=a,t}function qu(e,t,n,r){return(e=Bu(7,e,r,t)).lanes=n,e}function Ku(e,t,n,r){return(e=Bu(22,e,r,t)).elementType=j,e.lanes=n,e.stateNode={isHidden:!1},e}function Qu(e,t,n){return(e=Bu(6,e,null,t)).lanes=n,e}function Ju(e,t,n){return(t=Bu(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Xu(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bt(0),this.expirationTimes=bt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Yu(e,t,n,r,o,i,a,l,s){return e=new Xu(e,t,n,l,s),1===t?(t=1,!0===i&&(t|=8)):t=0,i=Bu(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ki(i),e}function Gu(e){if(!e)return Uo;e:{if(Ie(e=e._reactInternals)!==e||1!==e.tag)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ho(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(i(171))}if(1===e.tag){var n=e.type;if(Ho(n))return qo(e,n,t)}return t}function Zu(e,t,n,r,o,i,a,l,s){return(e=Yu(n,r,!0,e,0,i,0,l,s)).context=Gu(null),n=e.current,(i=Ji(r=du(),o=pu(n))).callback=void 0!==t&&null!==t?t:null,Xi(n,i,o),e.current.lanes=o,vt(e,o,r),fu(e,r),e}function ec(e,t,n,r){var o=t.current,i=du(),a=pu(o);return n=Gu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Ji(i,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Xi(o,t,a))&&(hu(e,o,a,i),Yi(e,o,a)),a}function tc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function nc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function rc(e,t){nc(e,t),(e=e.alternate)&&nc(e,t)}Os=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Mo.current)Tl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return Tl=!1,function(e,t,n){switch(t.tag){case 3:Dl(t),Si();break;case 5:sa(t);break;case 1:Ho(t.type)&&Ko(t);break;case 4:aa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Fo(ji,r._currentValue),r._currentValue=o;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Fo(ca,1&ca.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Kl(e,t,n):(Fo(ca,1&ca.current),null!==(e=es(e,t,n))?e.sibling:null);Fo(ca,1&ca.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Gl(e,t,n);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),Fo(ca,ca.current),r)break;return null;case 22:case 23:return t.lanes=0,Ol(e,t,n)}return es(e,t,n)}(e,t,n);Tl=0!==(131072&e.flags)}else Tl=!1,mi&&0!==(1048576&t.flags)&&ci(t,ri,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Zl(e,t),e=t.pendingProps;var o=Bo(t,Do.current);Mi(t,n),o=Ea(null,t,r,e,o,n);var a=Na();return t.flags|=1,"object"===typeof o&&null!==o&&"function"===typeof o.render&&void 0===o.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ho(r)?(a=!0,Ko(t)):a=!1,t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,Ki(t),o.updater=fl,t.stateNode=o,o._reactInternals=t,vl(t,r,e,n),t=Ul(null,t,r,!0,a,n)):(t.tag=0,mi&&a&&di(t),Pl(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Zl(e,t),e=t.pendingProps,r=(o=r._init)(r._payload),t.type=r,o=t.tag=function(e){if("function"===typeof e)return Hu(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===A)return 11;if(e===$)return 14}return 2}(r),e=pl(r,e),o){case 0:t=Ll(null,t,r,e,n);break e;case 1:t=Fl(null,t,r,e,n);break e;case 11:t=$l(null,t,r,e,n);break e;case 14:t=Rl(null,t,r,pl(r.type,e),n);break e}throw Error(i(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,Ll(e,t,r,o=t.elementType===r?o:pl(r,o),n);case 1:return r=t.type,o=t.pendingProps,Fl(e,t,r,o=t.elementType===r?o:pl(r,o),n);case 3:e:{if(Dl(t),null===e)throw Error(i(387));r=t.pendingProps,o=(a=t.memoizedState).element,Qi(e,t),Zi(t,r,null,n);var l=t.memoizedState;if(r=l.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=Ml(e,t,r,n,o=yl(Error(i(423)),t));break e}if(r!==o){t=Ml(e,t,r,n,o=yl(Error(i(424)),t));break e}for(fi=wo(t.stateNode.containerInfo.firstChild),hi=t,mi=!0,gi=null,n=Ri(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(Si(),r===o){t=es(e,t,n);break e}Pl(e,t,r,n)}t=t.child}return t;case 5:return sa(t),null===e&&wi(t),r=t.type,o=t.pendingProps,a=null!==e?e.memoizedProps:null,l=o.children,ho(r,o)?l=null:null!==a&&ho(r,a)&&(t.flags|=32),zl(e,t),Pl(e,t,l,n),t.child;case 6:return null===e&&wi(t),null;case 13:return Kl(e,t,n);case 4:return aa(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=$i(t,null,r,n):Pl(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,$l(e,t,r,o=t.elementType===r?o:pl(r,o),n);case 7:return Pl(e,t,t.pendingProps,n),t.child;case 8:case 12:return Pl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,l=o.value,Fo(ji,r._currentValue),r._currentValue=l,null!==a)if(br(a.value,l)){if(a.children===o.children&&!Mo.current){t=es(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var s=a.dependencies;if(null!==s){l=a.child;for(var u=s.firstContext;null!==u;){if(u.context===r){if(1===a.tag){(u=Ji(-1,n&-n)).tag=2;var c=a.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}a.lanes|=n,null!==(u=a.alternate)&&(u.lanes|=n),Di(a.return,n,t),s.lanes|=n;break}u=u.next}}else if(10===a.tag)l=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(l=a.return))throw Error(i(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),Di(l,n,t),l=a.sibling}else l=a.child;if(null!==l)l.return=a;else for(l=a;null!==l;){if(l===t){l=null;break}if(null!==(a=l.sibling)){a.return=l.return,l=a;break}l=l.return}a=l}Pl(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Mi(t,n),r=r(o=Ii(o)),t.flags|=1,Pl(e,t,r,n),t.child;case 14:return o=pl(r=t.type,t.pendingProps),Rl(e,t,r,o=pl(r.type,o),n);case 15:return jl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:pl(r,o),Zl(e,t),t.tag=1,Ho(r)?(e=!0,Ko(t)):e=!1,Mi(t,n),gl(t,r,o),vl(t,r,o,n),Ul(null,t,r,!0,e,n);case 19:return Gl(e,t,n);case 22:return Ol(e,t,n)}throw Error(i(156,t.tag))};var oc="function"===typeof reportError?reportError:function(e){console.error(e)};function ic(e){this._internalRoot=e}function ac(e){this._internalRoot=e}function lc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function sc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function uc(){}function cc(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if("function"===typeof o){var l=o;o=function(){var e=tc(a);l.call(e)}}ec(t,a,e,o)}else a=function(e,t,n,r,o){if(o){if("function"===typeof r){var i=r;r=function(){var e=tc(a);i.call(e)}}var a=Zu(t,r,e,0,null,!1,0,"",uc);return e._reactRootContainer=a,e[Co]=a.current,Gr(8===e.nodeType?e.parentNode:e),_u(),a}for(;o=e.lastChild;)e.removeChild(o);if("function"===typeof r){var l=r;r=function(){var e=tc(s);l.call(e)}}var s=Yu(e,0,!1,null,0,!1,0,"",uc);return e._reactRootContainer=s,e[Co]=s.current,Gr(8===e.nodeType?e.parentNode:e),_u((function(){ec(t,s,n,r)})),s}(n,t,e,o,r);return tc(a)}ac.prototype.render=ic.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));ec(e,t,null,null)},ac.prototype.unmount=ic.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;_u((function(){ec(null,e,null,null)})),t[Co]=null}},ac.prototype.unstable_scheduleHydration=function(e){if(e){var t=Nt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<It.length&&0!==t&&t<It[n].priority;n++);It.splice(n,0,e),0===n&&Wt(e)}},kt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ct(t.pendingLanes);0!==n&&(yt(t,1|n),fu(t,Xe()),0===(6&Ds)&&(Zs=Xe()+500,Zo()))}break;case 13:_u((function(){var t=Wi(e,1);if(null!==t){var n=du();hu(t,e,1,n)}})),rc(e,1)}},St=function(e){if(13===e.tag){var t=Wi(e,134217728);if(null!==t)hu(t,e,134217728,du());rc(e,134217728)}},Ct=function(e){if(13===e.tag){var t=pu(e),n=Wi(e,t);if(null!==n)hu(n,e,t,du());rc(e,t)}},Nt=function(){return wt},At=function(e,t){var n=wt;try{return wt=e,t()}finally{wt=n}},_e=function(e,t,n){switch(t){case"input":if(G(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ro(r);if(!o)throw Error(i(90));K(r),G(r,o)}}}break;case"textarea":ie(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Ne=wu,Ae=_u;var dc={usingClientEntryPoint:!1,Events:[Po,$o,Ro,Ce,Ee,wu]},pc={findFiberByHostInstance:To,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hc={bundleType:pc.bundleType,version:pc.version,rendererPackageName:pc.rendererPackageName,rendererConfig:pc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:pc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fc.isDisabled&&fc.supportsFiber)try{rt=fc.inject(hc),ot=fc}catch(Tt){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dc,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!lc(t))throw Error(i(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:x,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!lc(e))throw Error(i(299));var n=!1,r="",o=oc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(o=t.onRecoverableError)),t=Yu(e,1,!1,null,0,n,0,r,o),e[Co]=t.current,Gr(8===e.nodeType?e.parentNode:e),new ic(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=null===(e=Ve(t))?null:e.stateNode},t.flushSync=function(e){return _u(e)},t.hydrate=function(e,t,n){if(!sc(t))throw Error(i(200));return cc(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!lc(e))throw Error(i(405));var r=null!=n&&n.hydratedSources||null,o=!1,a="",l=oc;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(o=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Zu(t,null,e,1,null!=n?n:null,o,0,a,l),e[Co]=t.current,Gr(e),r)for(e=0;e<r.length;e++)o=(o=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ac(t)},t.render=function(e,t,n){if(!sc(t))throw Error(i(200));return cc(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!sc(e))throw Error(i(40));return!!e._reactRootContainer&&(_u((function(){cc(null,null,e,!1,(function(){e._reactRootContainer=null,e[Co]=null}))})),!0)},t.unstable_batchedUpdates=wu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!sc(n))throw Error(i(200));if(null==e||void 0===e._reactInternals)throw Error(i(38));return cc(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},391:(e,t,n)=>{var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},950:(e,t,n)=>{!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)},153:(e,t,n)=>{var r=n(43),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,i={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,r)&&!s.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:c,props:i,_owner:l.current}}t.Fragment=i,t.jsx=u,t.jsxs=u},202:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function v(){}function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=b.prototype;var w=y.prototype=new v;w.constructor=y,m(w,b.prototype),w.isPureReactComponent=!0;var _=Array.isArray,x=Object.prototype.hasOwnProperty,k={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var o,i={},a=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)x.call(t,o)&&!S.hasOwnProperty(o)&&(i[o]=t[o]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===i[o]&&(i[o]=s[o]);return{$$typeof:n,type:e,key:a,ref:l,props:i,_owner:k.current}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var N=/\/+/g;function A(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,o,i,a){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return a=a(s=e),e=""===i?"."+A(s,0):i,_(a)?(o="",null!=e&&(o=e.replace(N,"$&/")+"/"),T(a,t,o,"",(function(e){return e}))):null!=a&&(E(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(N,"$&/")+"/")+e)),t.push(a)),1;if(s=0,i=""===i?".":i+":",_(e))for(var u=0;u<e.length;u++){var c=i+A(l=e[u],u);s+=T(l,t,o,c,a)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)s+=T(l=l.value,t,o,c=i+A(l,u++),a);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function P(e,t,n){if(null==e)return e;var r=[],o=0;return T(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R={current:null},j={transition:null},O={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:j,ReactCurrentOwner:k};function z(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:P,forEach:function(e,t,n){P(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=o,t.Profiler=a,t.PureComponent=y,t.StrictMode=i,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,t.act=z,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),i=e.key,a=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,l=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)x.call(t,u)&&!S.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];o.children=s}return{$$typeof:n,type:e.type,key:i,ref:a,props:o,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=j.transition;j.transition={};try{e()}finally{j.transition=t}},t.unstable_act=z,t.useCallback=function(e,t){return R.current.useCallback(e,t)},t.useContext=function(e){return R.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return R.current.useDeferredValue(e)},t.useEffect=function(e,t){return R.current.useEffect(e,t)},t.useId=function(){return R.current.useId()},t.useImperativeHandle=function(e,t,n){return R.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return R.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return R.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return R.current.useMemo(e,t)},t.useReducer=function(e,t,n){return R.current.useReducer(e,t,n)},t.useRef=function(e){return R.current.useRef(e)},t.useState=function(e){return R.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return R.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return R.current.useTransition()},t.version="18.3.1"},43:(e,t,n)=>{e.exports=n(202)},579:(e,t,n)=>{e.exports=n(153)},234:(e,t)=>{function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(!(0<i(o,t)))break e;e[r]=t,e[n]=o,n=r}}function r(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,a=o>>>1;r<a;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>i(s,n))u<o&&0>i(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else{if(!(u<o&&0>i(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var u=[],c=[],d=1,p=null,h=3,f=!1,m=!1,g=!1,b="function"===typeof setTimeout?setTimeout:null,v="function"===typeof clearTimeout?clearTimeout:null,y="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(c);null!==t;){if(null===t.callback)o(c);else{if(!(t.startTime<=e))break;o(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function _(e){if(g=!1,w(e),!m)if(null!==r(u))m=!0,j(x);else{var t=r(c);null!==t&&O(_,t.startTime-e)}}function x(e,n){m=!1,g&&(g=!1,v(E),E=-1),f=!0;var i=h;try{for(w(n),p=r(u);null!==p&&(!(p.expirationTime>n)||e&&!T());){var a=p.callback;if("function"===typeof a){p.callback=null,h=p.priorityLevel;var l=a(p.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?p.callback=l:p===r(u)&&o(u),w(n)}else o(u);p=r(u)}if(null!==p)var s=!0;else{var d=r(c);null!==d&&O(_,d.startTime-n),s=!1}return s}finally{p=null,h=i,f=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,S=!1,C=null,E=-1,N=5,A=-1;function T(){return!(t.unstable_now()-A<N)}function P(){if(null!==C){var e=t.unstable_now();A=e;var n=!0;try{n=C(!0,e)}finally{n?k():(S=!1,C=null)}}else S=!1}if("function"===typeof y)k=function(){y(P)};else if("undefined"!==typeof MessageChannel){var $=new MessageChannel,R=$.port2;$.port1.onmessage=P,k=function(){R.postMessage(null)}}else k=function(){b(P,0)};function j(e){C=e,S||(S=!0,k())}function O(e,n){E=b((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||f||(m=!0,j(x))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(h){case 1:case 2:case 3:var t=3;break;default:t=h}var n=h;h=t;try{return e()}finally{h=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=h;h=e;try{return t()}finally{h=n}},t.unstable_scheduleCallback=function(e,o,i){var a=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?a+i:a:i=a,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:o,priorityLevel:e,startTime:i,expirationTime:l=i+l,sortIndex:-1},i>a?(e.sortIndex=i,n(c,e),null===r(u)&&e===r(c)&&(g?(v(E),E=-1):g=!0,O(_,i-a))):(e.sortIndex=l,n(u,e),m||f||(m=!0,j(x))),e},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(e){var t=h;return function(){var n=h;h=t;try{return e.apply(this,arguments)}finally{h=n}}}},853:(e,t,n)=>{e.exports=n(234)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var l=2&o&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,n.d(i,a),i}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".28cd44cf.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="serale2:";n.l=(r,o,i,a)=>{if(e[r])e[r].push(o);else{var l,s;if(void 0!==i)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){l=d;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+i),l.src=r),e[r]=[o];var p=(t,n)=>{l.onerror=l.onload=null,clearTimeout(h);var o=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(n))),t)return t(n)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={792:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise(((n,r)=>o=e[t]=[n,r]));r.push(o[2]=i);var a=n.p+n.u(t),l=new Error;n.l(a,(r=>{if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,o[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,i,a=r[0],l=r[1],s=r[2],u=0;if(a.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(s)s(n)}for(t&&t(r);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0},r=self.webpackChunkserale2=self.webpackChunkserale2||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r={};n.r(r),n.d(r,{hasBrowserEnv:()=>qi,hasStandardBrowserEnv:()=>Qi,hasStandardBrowserWebWorkerEnv:()=>Ji,navigator:()=>Ki,origin:()=>Xi});var o=n(43),i=n.t(o,2),a=n(391),l="popstate";function s(){return m((function(e,t){let{pathname:n,search:r,hash:o}=e.location;return p("",{pathname:n,search:r,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:h(t)}),null,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function u(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function c(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(gt){}}}function d(e,t){return{usr:e.state,key:e.key,idx:t}}function p(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?f(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function h(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function f(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function m(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,s="POP",u=null,c=h();function h(){return(a.state||{idx:null}).idx}function f(){s="POP";let e=h(),t=null==e?null:e-c;c=e,u&&u({action:s,location:b.location,delta:t})}function m(e){return g(e)}null==c&&(c=0,a.replaceState({...a.state,idx:c},""));let b={get action(){return s},get location(){return e(o,a)},listen(e){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(l,f),u=e,()=>{o.removeEventListener(l,f),u=null}},createHref:e=>t(o,e),createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){s="PUSH";let r=p(b.location,e,t);n&&n(r,e),c=h()+1;let l=d(r,c),f=b.createHref(r);try{a.pushState(l,"",f)}catch(m){if(m instanceof DOMException&&"DataCloneError"===m.name)throw m;o.location.assign(f)}i&&u&&u({action:s,location:b.location,delta:1})},replace:function(e,t){s="REPLACE";let r=p(b.location,e,t);n&&n(r,e),c=h();let o=d(r,c),l=b.createHref(r);a.replaceState(o,"",l),i&&u&&u({action:s,location:b.location,delta:0})},go:e=>a.go(e)};return b}function g(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="http://localhost";"undefined"!==typeof window&&(n="null"!==window.location.origin?window.location.origin:window.location.href),u(n,"No window.location.(origin|href) available to create URL");let r="string"===typeof e?e:h(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}new WeakMap;function b(e,t){return v(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function v(e,t,n,r){let o=j(("string"===typeof t?f(t):t).pathname||"/",n);if(null==o)return null;let i=y(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let a=null;for(let l=0;null==a&&l<i.length;++l){let e=R(o);a=T(i[l],e,r)}return a}function y(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=function(e,i){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o,l=arguments.length>3?arguments[3]:void 0,s={relativePath:void 0===l?e.path||"":l,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};if(s.relativePath.startsWith("/")){if(!s.relativePath.startsWith(r)&&a)return;u(s.relativePath.startsWith(r),`Absolute route path "${s.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),s.relativePath=s.relativePath.slice(r.length)}let c=U([r,s.relativePath]),d=n.concat(s);e.children&&e.children.length>0&&(u(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),y(e.children,t,d,c,a)),(null!=e.path||e.index)&&t.push({path:c,score:A(c,e.index),routesMeta:d})};return e.forEach(((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of w(e.path))i(e,t,!0,n);else i(e,t)})),t}function w(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(0===r.length)return o?[i,""]:[i];let a=w(r.join("/")),l=[];return l.push(...a.map((e=>""===e?i:[i,e].join("/")))),o&&l.push(...a),l.map((t=>e.startsWith("/")&&""===t?"/":t))}var _=/^:[\w-]+$/,x=3,k=2,S=1,C=10,E=-2,N=e=>"*"===e;function A(e,t){let n=e.split("/"),r=n.length;return n.some(N)&&(r+=E),t&&(r+=k),n.filter((e=>!N(e))).reduce(((e,t)=>e+(_.test(t)?x:""===t?S:C)),r)}function T(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:r}=e,o={},i="/",a=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,u="/"===i?t:t.slice(i.length)||"/",c=P({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},u),d=e.route;if(!c&&s&&n&&!r[r.length-1].route.index&&(c=P({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(o,c.params),a.push({params:o,pathname:U([i,c.pathname]),pathnameBase:D(U([i,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(i=U([i,c.pathnameBase]))}return a}function P(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=$(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:o}=t;if("*"===r){let e=l[n]||"";a=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=o&&!s?void 0:(s||"").replace(/%2F/g,"/"),e}),{}),pathname:i,pathnameBase:a,pattern:e}}function $(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];c("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"))).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function R(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return c(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function j(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function O(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function z(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function L(e){let t=z(e);return t.map(((e,n)=>n===t.length-1?e.pathname:e.pathnameBase))}function F(e,t,n){let r,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?r=f(e):(r={...e},u(!r.pathname||!r.pathname.includes("?"),O("?","pathname","search",r)),u(!r.pathname||!r.pathname.includes("#"),O("#","pathname","hash",r)),u(!r.search||!r.search.includes("#"),O("#","search","hash",r)));let i,a=""===e||""===r.pathname,l=a?"/":r.pathname;if(null==l)i=n;else{let e=t.length-1;if(!o&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}i=e>=0?t[e]:"/"}let s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:n,search:r="",hash:o=""}="string"===typeof e?f(e):e,i=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:i,search:M(r),hash:I(o)}}(r,i),c=l&&"/"!==l&&l.endsWith("/"),d=(a||"."===l)&&n.endsWith("/");return s.pathname.endsWith("/")||!c&&!d||(s.pathname+="/"),s}var U=e=>e.join("/").replace(/\/\/+/g,"/"),D=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),M=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",I=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function B(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}Symbol("Uninstrumented");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var H=["POST","PUT","PATCH","DELETE"],V=(new Set(H),["GET",...H]);new Set(V),Symbol("ResetLoaderData");var W=o.createContext(null);W.displayName="DataRouter";var q=o.createContext(null);q.displayName="DataRouterState";var K=o.createContext(!1);var Q=o.createContext({isTransitioning:!1});Q.displayName="ViewTransition";var J=o.createContext(new Map);J.displayName="Fetchers";var X=o.createContext(null);X.displayName="Await";var Y=o.createContext(null);Y.displayName="Navigation";var G=o.createContext(null);G.displayName="Location";var Z=o.createContext({outlet:null,matches:[],isDataRoute:!1});Z.displayName="Route";var ee=o.createContext(null);ee.displayName="RouteError";function te(){return null!=o.useContext(G)}function ne(){return u(te(),"useLocation() may be used only in the context of a <Router> component."),o.useContext(G).location}var re="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function oe(e){o.useContext(Y).static||o.useLayoutEffect(e)}function ie(){let{isDataRoute:e}=o.useContext(Z);return e?function(){let{router:e}=me("useNavigate"),t=be("useNavigate"),n=o.useRef(!1);oe((()=>{n.current=!0}));let r=o.useCallback((async function(r){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c(n.current,re),n.current&&("number"===typeof r?e.navigate(r):await e.navigate(r,{fromRouteId:t,...o}))}),[e,t]);return r}():function(){u(te(),"useNavigate() may be used only in the context of a <Router> component.");let e=o.useContext(W),{basename:t,navigator:n}=o.useContext(Y),{matches:r}=o.useContext(Z),{pathname:i}=ne(),a=JSON.stringify(L(r)),l=o.useRef(!1);oe((()=>{l.current=!0}));let s=o.useCallback((function(r){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(c(l.current,re),!l.current)return;if("number"===typeof r)return void n.go(r);let s=F(r,JSON.parse(a),i,"path"===o.relative);null==e&&"/"!==t&&(s.pathname="/"===s.pathname?t:U([t,s.pathname])),(o.replace?n.replace:n.push)(s,o.state,o)}),[t,n,a,i,e]);return s}()}var ae=o.createContext(null);function le(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:n}=o.useContext(Z),{pathname:r}=ne(),i=JSON.stringify(L(n));return o.useMemo((()=>F(e,JSON.parse(i),r,"path"===t)),[e,i,r,t])}function se(e,t,n,r,i){u(te(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=o.useContext(Y),{matches:l}=o.useContext(Z),s=l[l.length-1],d=s?s.params:{},p=s?s.pathname:"/",h=s?s.pathnameBase:"/",m=s&&s.route;{let e=m&&m.path||"";we(p,!m||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let g,v=ne();if(t){let e="string"===typeof t?f(t):t;u("/"===h||e.pathname?.startsWith(h),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${e.pathname}" was given in the \`location\` prop.`),g=e}else g=v;let y=g.pathname||"/",w=y;if("/"!==h){let e=h.replace(/^\//,"").split("/");w="/"+y.replace(/^\//,"").split("/").slice(e.length).join("/")}let _=b(e,{pathname:w});c(m||null!=_,`No routes matched location "${g.pathname}${g.search}${g.hash}" `),c(null==_||void 0!==_[_.length-1].route.element||void 0!==_[_.length-1].route.Component||void 0!==_[_.length-1].route.lazy,`Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=he(_&&_.map((e=>Object.assign({},e,{params:Object.assign({},d,e.params),pathname:U([h,a.encodeLocation?a.encodeLocation(e.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?h:U([h,a.encodeLocation?a.encodeLocation(e.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathnameBase])}))),l,n,r,i);return t&&x?o.createElement(G.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...g},navigationType:"POP"}},x):x}function ue(){let e=ve(),t=B(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},a={padding:"2px 4px",backgroundColor:r},l=null;return console.error("Error handled by React Router default ErrorBoundary:",e),l=o.createElement(o.Fragment,null,o.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),o.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",o.createElement("code",{style:a},"ErrorBoundary")," or"," ",o.createElement("code",{style:a},"errorElement")," prop on your route.")),o.createElement(o.Fragment,null,o.createElement("h2",null,"Unexpected Application Error!"),o.createElement("h3",{style:{fontStyle:"italic"}},t),n?o.createElement("pre",{style:i},n):null,l)}var ce=o.createElement(ue,null),de=class extends o.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error("React Router caught the following error during render",e)}render(){return void 0!==this.state.error?o.createElement(Z.Provider,{value:this.props.routeContext},o.createElement(ee.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function pe(e){let{routeContext:t,match:n,children:r}=e,i=o.useContext(W);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),o.createElement(Z.Provider,{value:t},r)}function he(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if(null==e){if(!n)return null;if(n.errors)e=n.matches;else{if(0!==t.length||n.initialized||!(n.matches.length>0))return null;e=n.matches}}let i=e,a=n?.errors;if(null!=a){let e=i.findIndex((e=>e.route.id&&void 0!==a?.[e.route.id]));u(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),i=i.slice(0,Math.min(i.length,e+1))}let l=!1,s=-1;if(n)for(let o=0;o<i.length;o++){let e=i[o];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(s=o),e.route.id){let{loaderData:t,errors:r}=n,o=e.route.loader&&!t.hasOwnProperty(e.route.id)&&(!r||void 0===r[e.route.id]);if(e.route.lazy||o){l=!0,i=s>=0?i.slice(0,s+1):[i[0]];break}}}return i.reduceRight(((e,u,c)=>{let d,p=!1,h=null,f=null;n&&(d=a&&u.route.id?a[u.route.id]:void 0,h=u.route.errorElement||ce,l&&(s<0&&0===c?(we("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),p=!0,f=null):s===c&&(p=!0,f=u.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),g=()=>{let t;return t=d?h:p?f:u.route.Component?o.createElement(u.route.Component,null):u.route.element?u.route.element:e,o.createElement(pe,{match:u,routeContext:{outlet:e,matches:m,isDataRoute:null!=n},children:t})};return n&&(u.route.ErrorBoundary||u.route.errorElement||0===c)?o.createElement(de,{location:n.location,revalidation:n.revalidation,component:h,error:d,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0},unstable_onError:r}):g()}),null)}function fe(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function me(e){let t=o.useContext(W);return u(t,fe(e)),t}function ge(e){let t=o.useContext(q);return u(t,fe(e)),t}function be(e){let t=function(e){let t=o.useContext(Z);return u(t,fe(e)),t}(e),n=t.matches[t.matches.length-1];return u(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function ve(){let e=o.useContext(ee),t=ge("useRouteError"),n=be("useRouteError");return void 0!==e?e:t.errors?.[n]}var ye={};function we(e,t,n){t||ye[e]||(ye[e]=!0,c(!1,n))}var _e={};function xe(e,t){e||_e[t]||(_e[t]=!0,console.warn(t))}o.memo((function(e){let{routes:t,future:n,state:r,unstable_onError:o}=e;return se(t,void 0,r,o,n)}));function ke(e){let{to:t,replace:n,state:r,relative:i}=e;u(te(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=o.useContext(Y);c(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=o.useContext(Z),{pathname:s}=ne(),d=ie(),p=F(t,L(l),s,"path"===i),h=JSON.stringify(p);return o.useEffect((()=>{d(JSON.parse(h),{replace:n,state:r,relative:i})}),[d,h,i,n,r]),null}function Se(e){return function(e){let t=o.useContext(Z).outlet;return o.useMemo((()=>t&&o.createElement(ae.Provider,{value:e},t)),[t,e])}(e.context)}function Ce(e){u(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ee(e){let{basename:t="/",children:n=null,location:r,navigationType:i="POP",navigator:a,static:l=!1}=e;u(!te(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=t.replace(/^\/*/,"/"),d=o.useMemo((()=>({basename:s,navigator:a,static:l,future:{}})),[s,a,l]);"string"===typeof r&&(r=f(r));let{pathname:p="/",search:h="",hash:m="",state:g=null,key:b="default"}=r,v=o.useMemo((()=>{let e=j(p,s);return null==e?null:{location:{pathname:e,search:h,hash:m,state:g,key:b},navigationType:i}}),[s,p,h,m,g,b,i]);return c(null!=v,`<Router basename="${s}"> is not able to match the URL "${p}${h}${m}" because it does not start with the basename, so the <Router> won't render anything.`),null==v?null:o.createElement(Y.Provider,{value:d},o.createElement(G.Provider,{children:n,value:v}))}function Ne(e){let{children:t,location:n}=e;return se(Ae(t),n)}o.Component;function Ae(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[];return o.Children.forEach(e,((e,r)=>{if(!o.isValidElement(e))return;let i=[...t,r];if(e.type===o.Fragment)return void n.push.apply(n,Ae(e.props.children,i));u(e.type===Ce,`[${"string"===typeof e.type?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),u(!e.props.index||!e.props.children,"An index route cannot have child routes.");let a={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:!0===e.props.hasErrorBoundary||null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Ae(e.props.children,i)),n.push(a)})),n}var Te="get",Pe="application/x-www-form-urlencoded";function $e(e){return null!=e&&"string"===typeof e.tagName}var Re=null;var je=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Oe(e){return null==e||je.has(e)?e:(c(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Pe}"`),null)}function ze(e,t){let n,r,o,i,a;if($e(l=e)&&"form"===l.tagName.toLowerCase()){let a=e.getAttribute("action");r=a?j(a,t):null,n=e.getAttribute("method")||Te,o=Oe(e.getAttribute("enctype"))||Pe,i=new FormData(e)}else if(function(e){return $e(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return $e(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let a=e.form;if(null==a)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||a.getAttribute("action");if(r=l?j(l,t):null,n=e.getAttribute("formmethod")||a.getAttribute("method")||Te,o=Oe(e.getAttribute("formenctype"))||Oe(a.getAttribute("enctype"))||Pe,i=new FormData(a,e),!function(){if(null===Re)try{new FormData(document.createElement("form"),0),Re=!1}catch(gt){Re=!0}return Re}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";i.append(`${e}x`,"0"),i.append(`${e}y`,"0")}else t&&i.append(t,r)}}else{if($e(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Te,r=null,o=Pe,a=e}var l;return i&&"text/plain"===o&&(a=i,i=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:i,body:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");"undefined"!==typeof window?window:"undefined"!==typeof globalThis&&globalThis;function Le(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}Symbol("SingleFetchRedirect");function Fe(e,t,n){let r="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return"/"===r.pathname?r.pathname=`_root.${n}`:t&&"/"===j(r.pathname,t)?r.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function Ue(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise((()=>{}))}}function De(e){return null!=e&&"string"===typeof e.page}function Me(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function Ie(e,t,n,r,o,i){let a=(e,t)=>!n[t]||e.route.id!==n[t].route.id,l=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===i?t.filter(((e,t)=>a(e,t)||l(e,t))):"data"===i?t.filter(((t,i)=>{let s=r.routes[t.route.id];if(!s||!s.hasLoader)return!1;if(a(t,i)||l(t,i))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof r)return r}return!0})):[]}function Be(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=e.map((e=>{let r=t.routes[e.route.id];if(!r)return[];let o=[r.module];return r.clientActionModule&&(o=o.concat(r.clientActionModule)),r.clientLoaderModule&&(o=o.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(o=o.concat(r.hydrateFallbackModule)),r.imports&&(o=o.concat(r.imports)),o})).flat(1),[...new Set(r)];var r}function He(e,t){let n=new Set,r=new Set(t);return e.reduce(((e,o)=>{if(t&&!De(o)&&"script"===o.as&&o.href&&r.has(o.href))return e;let i=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(o));return n.has(i)||(n.add(i),e.push({key:i,link:o})),e}),[])}function Ve(e,t){return"lazy"===e.mode&&!0===t}function We(){let e=o.useContext(W);return Le(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function qe(){let e=o.useContext(q);return Le(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Ke=o.createContext(void 0);function Qe(){let e=o.useContext(Ke);return Le(e,"You must render this element inside a <HydratedRouter> element"),e}function Je(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Xe(e,t,n){if(n&&!et)return[e[0]];if(t){let n=e.findIndex((e=>void 0!==t[e.route.id]));return e.slice(0,n+1)}return e}Ke.displayName="FrameworkContext";function Ye(e){let{page:t,...n}=e,{router:r}=We(),i=o.useMemo((()=>b(r.routes,t,r.basename)),[r.routes,t,r.basename]);return i?o.createElement(Ze,{page:t,matches:i,...n}):null}function Ge(e){let{manifest:t,routeModules:n}=Qe(),[r,i]=o.useState([]);return o.useEffect((()=>{let r=!1;return async function(e,t,n){return He((await Promise.all(e.map((async e=>{let r=t.routes[e.route.id];if(r){let e=await Ue(r,n);return e.links?e.links():[]}return[]})))).flat(1).filter(Me).filter((e=>"stylesheet"===e.rel||"preload"===e.rel)).map((e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"})))}(e,t,n).then((e=>{r||i(e)})),()=>{r=!0}}),[e,t,n]),r}function Ze(e){let{page:t,matches:n,...r}=e,i=ne(),{manifest:a,routeModules:l}=Qe(),{basename:s}=We(),{loaderData:u,matches:c}=qe(),d=o.useMemo((()=>Ie(t,n,c,a,i,"data")),[t,n,c,a,i]),p=o.useMemo((()=>Ie(t,n,c,a,i,"assets")),[t,n,c,a,i]),h=o.useMemo((()=>{if(t===i.pathname+i.search+i.hash)return[];let e=new Set,r=!1;if(n.forEach((t=>{let n=a.routes[t.route.id];n&&n.hasLoader&&(!d.some((e=>e.route.id===t.route.id))&&t.route.id in u&&l[t.route.id]?.shouldRevalidate||n.hasClientLoader?r=!0:e.add(t.route.id))})),0===e.size)return[];let o=Fe(t,s,"data");return r&&e.size>0&&o.searchParams.set("_routes",n.filter((t=>e.has(t.route.id))).map((e=>e.route.id)).join(",")),[o.pathname+o.search]}),[s,u,i,a,d,n,t,l]),f=o.useMemo((()=>Be(p,a)),[p,a]),m=Ge(p);return o.createElement(o.Fragment,null,h.map((e=>o.createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...r}))),f.map((e=>o.createElement("link",{key:e,rel:"modulepreload",href:e,...r}))),m.map((e=>{let{key:t,link:n}=e;return o.createElement("link",{key:t,nonce:r.nonce,...n})})))}var et=!1;function tt(e){let{manifest:t,serverHandoffString:n,isSpaMode:r,renderMeta:i,routeDiscovery:a,ssr:l}=Qe(),{router:s,static:u,staticContext:c}=We(),{matches:d}=qe(),p=o.useContext(K),h=Ve(a,l);i&&(i.didRenderScripts=!0);let f=Xe(d,null,r);o.useEffect((()=>{et=!0}),[]);let m=o.useMemo((()=>{if(p)return null;let r=c?`window.__reactRouterContext = ${n};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",i=u?`${t.hmr?.runtime?`import ${JSON.stringify(t.hmr.runtime)};`:""}${h?"":`import ${JSON.stringify(t.url)}`};\n${f.map(((e,n)=>{let r=`route${n}`,o=t.routes[e.route.id];Le(o,`Route ${e.route.id} not found in manifest`);let{clientActionModule:i,clientLoaderModule:a,clientMiddlewareModule:l,hydrateFallbackModule:s,module:u}=o,c=[...i?[{module:i,varName:`${r}_clientAction`}]:[],...a?[{module:a,varName:`${r}_clientLoader`}]:[],...l?[{module:l,varName:`${r}_clientMiddleware`}]:[],...s?[{module:s,varName:`${r}_HydrateFallback`}]:[],{module:u,varName:`${r}_main`}];return 1===c.length?`import * as ${r} from ${JSON.stringify(u)};`:[c.map((e=>`import * as ${e.varName} from "${e.module}";`)).join("\n"),`const ${r} = {${c.map((e=>`...${e.varName}`)).join(",")}};`].join("\n")})).join("\n")}\n  ${h?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let{sri:n,...r}=e,o=new Set(t.state.matches.map((e=>e.route.id))),i=t.state.location.pathname.split("/").filter(Boolean),a=["/"];for(i.pop();i.length>0;)a.push(`/${i.join("/")}`),i.pop();a.forEach((e=>{let n=b(t.routes,e,t.basename);n&&n.forEach((e=>o.add(e.route.id)))}));let l=[...o].reduce(((e,t)=>Object.assign(e,{[t]:r.routes[t]})),{});return{...r,routes:l,sri:!!n||void 0}}(t,s),null,2)};`:""}\n  window.__reactRouterRouteModules = {${f.map(((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`)).join(",")}};\n\nimport(${JSON.stringify(t.entry.module)});`:" ";return o.createElement(o.Fragment,null,o.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:r},type:void 0}),o.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:i},type:"module",async:!0}))}),[]),g=et||p?[]:(v=t.entry.imports.concat(Be(f,t,{includeHydrateFallback:!0})),[...new Set(v)]);var v;let y="object"===typeof t.sri?t.sri:{};return xe(!p,"The <Scripts /> element is a no-op when using RSC and can be safely removed."),et||p?null:o.createElement(o.Fragment,null,"object"===typeof t.sri?o.createElement("script",{"rr-importmap":"",type:"importmap",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({integrity:y})}}):null,h?null:o.createElement("link",{rel:"modulepreload",href:t.url,crossOrigin:e.crossOrigin,integrity:y[t.url],suppressHydrationWarning:!0}),o.createElement("link",{rel:"modulepreload",href:t.entry.module,crossOrigin:e.crossOrigin,integrity:y[t.entry.module],suppressHydrationWarning:!0}),g.map((t=>o.createElement("link",{key:t,rel:"modulepreload",href:t,crossOrigin:e.crossOrigin,integrity:y[t],suppressHydrationWarning:!0}))),m)}function nt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach((t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)}))}}o.Component;function rt(e){let{error:t,isOutsideRemixApp:n}=e;console.error(t);let r,i=o.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."\n        );\n      '}});if(B(t))return o.createElement(ot,{title:"Unhandled Thrown Response!"},o.createElement("h1",{style:{fontSize:"24px"}},t.status," ",t.statusText),i);if(t instanceof Error)r=t;else{let e=null==t?"Unknown Error":"object"===typeof t&&"toString"in t?t.toString():JSON.stringify(t);r=new Error(e)}return o.createElement(ot,{title:"Application Error!",isOutsideRemixApp:n},o.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),o.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},r.stack),i)}function ot(e){let{title:t,renderScripts:n,isOutsideRemixApp:r,children:i}=e,{routeModules:a}=Qe();return a.root?.Layout&&!r?i:o.createElement("html",{lang:"en"},o.createElement("head",null,o.createElement("meta",{charSet:"utf-8"}),o.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),o.createElement("title",null,t)),o.createElement("body",null,o.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},i,n?o.createElement(tt,null):null)))}var it="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{it&&(window.__reactRouterVersion="7.9.5")}catch(gt){}function at(e){let{basename:t,children:n,window:r}=e,i=o.useRef();null==i.current&&(i.current=s({window:r,v5Compat:!0}));let a=i.current,[l,u]=o.useState({action:a.action,location:a.location}),c=o.useCallback((e=>{o.startTransition((()=>u(e)))}),[u]);return o.useLayoutEffect((()=>a.listen(c)),[a,c]),o.createElement(Ee,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a})}var lt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,st=o.forwardRef((function(e,t){let n,{onClick:r,discover:i="render",prefetch:a="none",relative:l,reloadDocument:s,replace:d,state:p,target:f,to:m,preventScrollReset:g,viewTransition:b,...v}=e,{basename:y}=o.useContext(Y),w="string"===typeof m&&lt.test(m),_=!1;if("string"===typeof m&&w&&(n=m,it))try{let e=new URL(window.location.href),t=m.startsWith("//")?new URL(e.protocol+m):new URL(m),n=j(t.pathname,y);t.origin===e.origin&&null!=n?m=n+t.search+t.hash:_=!0}catch(gt){c(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let x=function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};u(te(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=o.useContext(Y),{hash:i,pathname:a,search:l}=le(e,{relative:t}),s=a;return"/"!==n&&(s="/"===a?n:U([n,a])),r.createHref({pathname:s,search:l,hash:i})}(m,{relative:l}),[k,S,C]=function(e,t){let n=o.useContext(Ke),[r,i]=o.useState(!1),[a,l]=o.useState(!1),{onFocus:s,onBlur:u,onMouseEnter:c,onMouseLeave:d,onTouchStart:p}=t,h=o.useRef(null);o.useEffect((()=>{if("render"===e&&l(!0),"viewport"===e){let e=new IntersectionObserver((e=>{e.forEach((e=>{l(e.isIntersecting)}))}),{threshold:.5});return h.current&&e.observe(h.current),()=>{e.disconnect()}}}),[e]),o.useEffect((()=>{if(r){let e=setTimeout((()=>{l(!0)}),100);return()=>{clearTimeout(e)}}}),[r]);let f=()=>{i(!0)},m=()=>{i(!1),l(!1)};return n?"intent"!==e?[a,h,{}]:[a,h,{onFocus:Je(s,f),onBlur:Je(u,m),onMouseEnter:Je(c,f),onMouseLeave:Je(d,m),onTouchStart:Je(p,f)}]:[!1,h,{}]}(a,v),E=function(e){let{target:t,replace:n,state:r,preventScrollReset:i,relative:a,viewTransition:l}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=ie(),u=ne(),c=le(e,{relative:a});return o.useCallback((o=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(o,t)){o.preventDefault();let t=void 0!==n?n:h(u)===h(c);s(e,{replace:t,state:r,preventScrollReset:i,relative:a,viewTransition:l})}}),[u,s,c,n,r,t,e,i,a,l])}(m,{replace:d,state:p,target:f,preventScrollReset:g,relative:l,viewTransition:b});let N=o.createElement("a",{...v,...C,href:n||x,onClick:_||s?r:function(e){r&&r(e),e.defaultPrevented||E(e)},ref:nt(t,S),target:f,"data-discover":w||"render"!==i?void 0:"true"});return k&&!w?o.createElement(o.Fragment,null,N,o.createElement(Ye,{page:x})):N}));st.displayName="Link",o.forwardRef((function(e,t){let{"aria-current":n="page",caseSensitive:r=!1,className:i="",end:a=!1,style:l,to:s,viewTransition:c,children:d,...p}=e,h=le(s,{relative:p.relative}),f=ne(),m=o.useContext(q),{navigator:g,basename:b}=o.useContext(Y),v=null!=m&&function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=o.useContext(Q);u(null!=n,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=dt("useViewTransitionState"),i=le(e,{relative:t});if(!n.isTransitioning)return!1;let a=j(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=j(n.nextLocation.pathname,r)||n.nextLocation.pathname;return null!=P(i.pathname,l)||null!=P(i.pathname,a)}(h)&&!0===c,y=g.encodeLocation?g.encodeLocation(h).pathname:h.pathname,w=f.pathname,_=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;r||(w=w.toLowerCase(),_=_?_.toLowerCase():null,y=y.toLowerCase()),_&&b&&(_=j(_,b)||_);const x="/"!==y&&y.endsWith("/")?y.length-1:y.length;let k,S=w===y||!a&&w.startsWith(y)&&"/"===w.charAt(x),C=null!=_&&(_===y||!a&&_.startsWith(y)&&"/"===_.charAt(y.length)),E={isActive:S,isPending:C,isTransitioning:v},N=S?n:void 0;k="function"===typeof i?i(E):[i,S?"active":null,C?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let A="function"===typeof l?l(E):l;return o.createElement(st,{...p,"aria-current":N,className:k,ref:t,style:A,to:s,viewTransition:c},"function"===typeof d?d(E):d)})).displayName="NavLink";var ut=o.forwardRef(((e,t)=>{let{discover:n="render",fetcherKey:r,navigate:i,reloadDocument:a,replace:l,state:s,method:c=Te,action:d,onSubmit:p,relative:f,preventScrollReset:m,viewTransition:g,...b}=e,v=ft(),y=function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:n}=o.useContext(Y),r=o.useContext(Z);u(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),a={...le(e||".",{relative:t})},l=ne();if(null==e){a.search=l.search;let e=new URLSearchParams(a.search),t=e.getAll("index"),n=t.some((e=>""===e));if(n){e.delete("index"),t.filter((e=>e)).forEach((t=>e.append("index",t)));let n=e.toString();a.search=n?`?${n}`:""}}e&&"."!==e||!i.route.index||(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index");"/"!==n&&(a.pathname="/"===a.pathname?n:U([n,a.pathname]));return h(a)}(d,{relative:f}),w="get"===c.toLowerCase()?"get":"post",_="string"===typeof d&&lt.test(d);return o.createElement("form",{ref:t,method:w,action:y,onSubmit:a?p:e=>{if(p&&p(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||c;v(t||e.currentTarget,{fetcherKey:r,method:n,navigate:i,replace:l,state:s,relative:f,preventScrollReset:m,viewTransition:g})},...b,"data-discover":_||"render"!==n?void 0:"true"})}));function ct(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function dt(e){let t=o.useContext(W);return u(t,ct(e)),t}ut.displayName="Form";var pt=0,ht=()=>`__${String(++pt)}__`;function ft(){let{router:e}=dt("useSubmit"),{basename:t}=o.useContext(Y),n=be("useRouteId");return o.useCallback((async function(r){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:i,method:a,encType:l,formData:s,body:u}=ze(r,t);if(!1===o.navigate){let t=o.fetcherKey||ht();await e.fetch(t,n,o.action||i,{preventScrollReset:o.preventScrollReset,formData:s,body:u,formMethod:o.method||a,formEncType:o.encType||l,flushSync:o.flushSync})}else await e.navigate(o.action||i,{preventScrollReset:o.preventScrollReset,formData:s,body:u,formMethod:o.method||a,formEncType:o.encType||l,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})}),[e,t,n])}const mt=globalThis,gt=mt.ShadowRoot&&(void 0===mt.ShadyCSS||mt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,bt=Symbol(),vt=new WeakMap;class yt{constructor(e,t,n){if(this._$cssResult$=!0,n!==bt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(gt&&void 0===e){const n=void 0!==t&&1===t.length;n&&(e=vt.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&vt.set(t,e))}return e}toString(){return this.cssText}}const wt=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const o=1===e.length?e[0]:n.reduce(((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[r+1]),e[0]);return new yt(o,e,bt)},_t=(e,t)=>{if(gt)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const n of t){const t=document.createElement("style"),r=mt.litNonce;void 0!==r&&t.setAttribute("nonce",r),t.textContent=n.cssText,e.appendChild(t)}},xt=gt?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return(e=>new yt("string"==typeof e?e:e+"",void 0,bt))(t)})(e):e,{is:kt,defineProperty:St,getOwnPropertyDescriptor:Ct,getOwnPropertyNames:Et,getOwnPropertySymbols:Nt,getPrototypeOf:At}=Object,Tt=globalThis,Pt=Tt.trustedTypes,$t=Pt?Pt.emptyScript:"",Rt=Tt.reactiveElementPolyfillSupport,jt=(e,t)=>e,Ot={toAttribute(e,t){switch(t){case Boolean:e=e?$t:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},zt=(e,t)=>!kt(e,t),Lt={attribute:!0,type:String,converter:Ot,reflect:!1,hasChanged:zt};Symbol.metadata??=Symbol("metadata"),Tt.litPropertyMetadata??=new WeakMap;class Ft extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Lt;if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),r=this.getPropertyDescriptor(e,n,t);void 0!==r&&St(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){const{get:r,set:o}=Ct(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return r?.call(this)},set(t){const i=r?.call(this);o.call(this,t),this.requestUpdate(e,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Lt}static _$Ei(){if(this.hasOwnProperty(jt("elementProperties")))return;const e=At(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(jt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(jt("properties"))){const e=this.properties,t=[...Et(e),...Nt(e)];for(const n of t)this.createProperty(n,e[n])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const e=this._$Eu(t,n);void 0!==e&&this._$Eh.set(e,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(xt(e))}else void 0!==e&&t.push(xt(e));return t}static _$Eu(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _t(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EC(e,t){const n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(void 0!==r&&!0===n.reflect){const o=(void 0!==n.converter?.toAttribute?n.converter:Ot).toAttribute(t,n.type);this._$Em=e,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){const n=this.constructor,r=n._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=n.getPropertyOptions(r),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:Ot;this._$Em=r,this[r]=o.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,n){if(void 0!==e){if(n??=this.constructor.getPropertyOptions(e),!(n.hasChanged??zt)(this[e],t))return;this.P(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,n]of e)!0!==n.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],n)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}Ft.elementStyles=[],Ft.shadowRootOptions={mode:"open"},Ft[jt("elementProperties")]=new Map,Ft[jt("finalized")]=new Map,Rt?.({ReactiveElement:Ft}),(Tt.reactiveElementVersions??=[]).push("2.0.4");const Ut=globalThis,Dt=Ut.trustedTypes,Mt=Dt?Dt.createPolicy("lit-html",{createHTML:e=>e}):void 0,It="$lit$",Bt=`lit$${Math.random().toFixed(9).slice(2)}$`,Ht="?"+Bt,Vt=`<${Ht}>`,Wt=document,qt=()=>Wt.createComment(""),Kt=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Qt=Array.isArray,Jt=e=>Qt(e)||"function"==typeof e?.[Symbol.iterator],Xt="[ \t\n\f\r]",Yt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Gt=/-->/g,Zt=/>/g,en=RegExp(`>|${Xt}(?:([^\\s"'>=/]+)(${Xt}*=${Xt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),tn=/'/g,nn=/"/g,rn=/^(?:script|style|textarea|title)$/i,on=e=>function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return{_$litType$:e,strings:t,values:r}},an=on(1),ln=on(2),sn=on(3),un=Symbol.for("lit-noChange"),cn=Symbol.for("lit-nothing"),dn=new WeakMap,pn=Wt.createTreeWalker(Wt,129);function hn(e,t){if(!Qt(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Mt?Mt.createHTML(t):t}const fn=(e,t)=>{const n=e.length-1,r=[];let o,i=2===t?"<svg>":3===t?"<math>":"",a=Yt;for(let l=0;l<n;l++){const t=e[l];let n,s,u=-1,c=0;for(;c<t.length&&(a.lastIndex=c,s=a.exec(t),null!==s);)c=a.lastIndex,a===Yt?"!--"===s[1]?a=Gt:void 0!==s[1]?a=Zt:void 0!==s[2]?(rn.test(s[2])&&(o=RegExp("</"+s[2],"g")),a=en):void 0!==s[3]&&(a=en):a===en?">"===s[0]?(a=o??Yt,u=-1):void 0===s[1]?u=-2:(u=a.lastIndex-s[2].length,n=s[1],a=void 0===s[3]?en:'"'===s[3]?nn:tn):a===nn||a===tn?a=en:a===Gt||a===Zt?a=Yt:(a=en,o=void 0);const d=a===en&&e[l+1].startsWith("/>")?" ":"";i+=a===Yt?t+Vt:u>=0?(r.push(n),t.slice(0,u)+It+t.slice(u)+Bt+d):t+Bt+(-2===u?l:d)}return[hn(e,i+(e[n]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};class mn{constructor(e,t){let n,{strings:r,_$litType$:o}=e;this.parts=[];let i=0,a=0;const l=r.length-1,s=this.parts,[u,c]=fn(r,o);if(this.el=mn.createElement(u,t),pn.currentNode=this.el.content,2===o||3===o){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=pn.nextNode())&&s.length<l;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(It)){const t=c[a++],r=n.getAttribute(e).split(Bt),o=/([.?@])?(.*)/.exec(t);s.push({type:1,index:i,name:o[2],strings:r,ctor:"."===o[1]?wn:"?"===o[1]?_n:"@"===o[1]?xn:yn}),n.removeAttribute(e)}else e.startsWith(Bt)&&(s.push({type:6,index:i}),n.removeAttribute(e));if(rn.test(n.tagName)){const e=n.textContent.split(Bt),t=e.length-1;if(t>0){n.textContent=Dt?Dt.emptyScript:"";for(let r=0;r<t;r++)n.append(e[r],qt()),pn.nextNode(),s.push({type:2,index:++i});n.append(e[t],qt())}}}else if(8===n.nodeType)if(n.data===Ht)s.push({type:2,index:i});else{let e=-1;for(;-1!==(e=n.data.indexOf(Bt,e+1));)s.push({type:7,index:i}),e+=Bt.length-1}i++}}static createElement(e,t){const n=Wt.createElement("template");return n.innerHTML=e,n}}function gn(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,r=arguments.length>3?arguments[3]:void 0;if(t===un)return t;let o=void 0!==r?n._$Co?.[r]:n._$Cl;const i=Kt(t)?void 0:t._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),void 0===i?o=void 0:(o=new i(e),o._$AT(e,n,r)),void 0!==r?(n._$Co??=[])[r]=o:n._$Cl=o),void 0!==o&&(t=gn(e,o._$AS(e,t.values),o,r)),t}class bn{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Wt).importNode(t,!0);pn.currentNode=r;let o=pn.nextNode(),i=0,a=0,l=n[0];for(;void 0!==l;){if(i===l.index){let t;2===l.type?t=new vn(o,o.nextSibling,this,e):1===l.type?t=new l.ctor(o,l.name,l.strings,this,e):6===l.type&&(t=new kn(o,this,e)),this._$AV.push(t),l=n[++a]}i!==l?.index&&(o=pn.nextNode(),i++)}return pn.currentNode=Wt,r}p(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class vn{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=cn,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e){e=gn(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),Kt(e)?e===cn||null==e||""===e?(this._$AH!==cn&&this._$AR(),this._$AH=cn):e!==this._$AH&&e!==un&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):Jt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==cn&&Kt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Wt.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:n}=e,r="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=mn.createElement(hn(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{const e=new bn(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=dn.get(e.strings);return void 0===t&&dn.set(e.strings,t=new mn(e)),t}k(e){Qt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const o of e)r===t.length?t.push(n=new vn(this.O(qt()),this.O(qt()),this,this.options)):n=t[r],n._$AI(o),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,t=arguments.length>1?arguments[1]:void 0;for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class yn{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,o){this.type=1,this._$AH=cn,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=cn}_$AI(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;const o=this.strings;let i=!1;if(void 0===o)e=gn(this,e,t,0),i=!Kt(e)||e!==this._$AH&&e!==un,i&&(this._$AH=e);else{const r=e;let a,l;for(e=o[0],a=0;a<o.length-1;a++)l=gn(this,r[n+a],t,a),l===un&&(l=this._$AH[a]),i||=!Kt(l)||l!==this._$AH[a],l===cn?e=cn:e!==cn&&(e+=(l??"")+o[a+1]),this._$AH[a]=l}i&&!r&&this.j(e)}j(e){e===cn?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class wn extends yn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===cn?void 0:e}}class _n extends yn{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==cn)}}class xn extends yn{constructor(e,t,n,r,o){super(e,t,n,r,o),this.type=5}_$AI(e){if((e=gn(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0)??cn)===un)return;const t=this._$AH,n=e===cn&&t!==cn||e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive,r=e!==cn&&(t===cn||n);n&&this.element.removeEventListener(this.name,this,t),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class kn{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){gn(this,e)}}const Sn={M:It,P:Bt,A:Ht,C:1,L:fn,R:bn,D:Jt,V:gn,I:vn,H:yn,N:_n,U:xn,B:wn,F:kn},Cn=Ut.litHtmlPolyfillSupport;Cn?.(mn,vn),(Ut.litHtmlVersions??=[]).push("3.2.1");class En extends Ft{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,n)=>{const r=n?.renderBefore??t;let o=r._$litPart$;if(void 0===o){const e=n?.renderBefore??null;r._$litPart$=o=new vn(t.insertBefore(qt(),e),e,void 0,n??{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return un}}En._$litElement$=!0,En.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:En});const Nn=globalThis.litElementPolyfillSupport;Nn?.({LitElement:En});(globalThis.litElementVersions??=[]).push("4.1.1");var An=wt`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;const Tn=new Set,Pn=new Map;let $n,Rn="ltr",jn="en";const On="undefined"!==typeof MutationObserver&&"undefined"!==typeof document&&"undefined"!==typeof document.documentElement;if(On){const e=new MutationObserver(Ln);Rn=document.documentElement.dir||"ltr",jn=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function zn(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.map((e=>{const t=e.$code.toLowerCase();Pn.has(t)?Pn.set(t,Object.assign(Object.assign({},Pn.get(t)),e)):Pn.set(t,e),$n||($n=e)})),Ln()}function Ln(){On&&(Rn=document.documentElement.dir||"ltr",jn=document.documentElement.lang||navigator.language),[...Tn.keys()].map((e=>{"function"===typeof e.requestUpdate&&e.requestUpdate()}))}class Fn{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Tn.add(this.host)}hostDisconnected(){Tn.delete(this.host)}dir(){return`${this.host.dir||Rn}`.toLowerCase()}lang(){return`${this.host.lang||jn}`.toLowerCase()}getTranslationData(e){var t,n;const r=new Intl.Locale(e.replace(/_/g,"-")),o=null===r||void 0===r?void 0:r.language.toLowerCase(),i=null!==(n=null===(t=null===r||void 0===r?void 0:r.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==n?n:"";return{locale:r,language:o,region:i,primary:Pn.get(`${o}-${i}`),secondary:Pn.get(o)}}exists(e,t){var n;const{primary:r,secondary:o}=this.getTranslationData(null!==(n=t.lang)&&void 0!==n?n:this.lang());return t=Object.assign({includeFallback:!1},t),!!(r&&r[e]||o&&o[e]||t.includeFallback&&$n&&$n[e])}term(e){const{primary:t,secondary:n}=this.getTranslationData(this.lang());let r;if(t&&t[e])r=t[e];else if(n&&n[e])r=n[e];else{if(!$n||!$n[e])return console.error(`No translation found for: ${String(e)}`),String(e);r=$n[e]}if("function"===typeof r){for(var o=arguments.length,i=new Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];return r(...i)}return r}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}}var Un={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};zn(Un);var Dn=Un,Mn=class extends Fn{};zn(Dn);var In=wt`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,Bn=Object.defineProperty,Hn=Object.defineProperties,Vn=Object.getOwnPropertyDescriptor,Wn=Object.getOwnPropertyDescriptors,qn=Object.getOwnPropertySymbols,Kn=Object.prototype.hasOwnProperty,Qn=Object.prototype.propertyIsEnumerable,Jn=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Xn=(e,t,n)=>t in e?Bn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Yn=(e,t)=>{for(var n in t||(t={}))Kn.call(t,n)&&Xn(e,n,t[n]);if(qn)for(var n of qn(t))Qn.call(t,n)&&Xn(e,n,t[n]);return e},Gn=(e,t)=>Hn(e,Wn(t)),Zn=(e,t,n,r)=>{for(var o,i=r>1?void 0:r?Vn(t,n):t,a=e.length-1;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Bn(t,n,i),i},er=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},tr=function(e,t){this[0]=e,this[1]=t};const nr={attribute:!0,type:String,converter:Ot,reflect:!1,hasChanged:zt};function rr(e){return(t,n)=>"object"==typeof n?function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nr,t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;const{kind:r,metadata:o}=n;let i=globalThis.litPropertyMetadata.get(o);if(void 0===i&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(n.name,e),"accessor"===r){const{name:r}=n;return{set(n){const o=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,o,e)},init(t){return void 0!==t&&this.P(r,void 0,e),t}}}if("setter"===r){const{name:r}=n;return function(n){const o=this[r];t.call(this,n),this.requestUpdate(r,o,e)}}throw Error("Unsupported decorator location: "+r)}(e,t,n):((e,t,n)=>{const r=t.hasOwnProperty(n);return t.constructor.createProperty(n,r?{...e,wrapped:!0}:e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function or(e){return rr({...e,state:!0,attribute:!1})}const ir=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,n),n);function ar(e,t){return(n,r,o)=>{const i=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof r?n:o??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return ir(n,r,{get(){let n=e.call(this);return void 0===n&&(n=i(this),(null!==n||this.hasUpdated)&&t.call(this,n)),n}})}return ir(n,r,{get(){return i(this)}})}}var lr,sr=class extends En{constructor(){super(),((e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)})(this,lr,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach((e=>{let[t,n]=e;this.constructor.define(t,n)}))}emit(e,t){const n=new CustomEvent(e,Yn({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(n),n}static define(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=customElements.get(e);if(!r){try{customElements.define(e,t,n)}catch(a){customElements.define(e,class extends t{},n)}return}let o=" (unknown version)",i=o;"version"in t&&t.version&&(o=" v"+t.version),"version"in r&&r.version&&(i=" v"+r.version),o&&i&&o===i||console.warn(`Attempted to register <${e}>${o}, but <${e}>${i} has already been registered.`)}attributeChangedCallback(e,t,n){var r,o,i;er(r=this,o=lr,"read from private field"),(i?i.call(r):o.get(r))||(this.constructor.elementProperties.forEach(((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])})),((e,t,n,r)=>{er(e,t,"write to private field"),r?r.call(e,n):t.set(e,n)})(this,lr,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach(((t,n)=>{e.has(n)&&null==this[n]&&(this[n]=t)}))}};lr=new WeakMap,sr.version="2.18.0",sr.dependencies={},Zn([rr()],sr.prototype,"dir",2),Zn([rr()],sr.prototype,"lang",2);var ur=class extends sr{constructor(){super(...arguments),this.localize=new Mn(this)}render(){return an`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};ur.styles=[In,An];var cr=new WeakMap,dr=new WeakMap,pr=new WeakMap,hr=new WeakSet,fr=new WeakMap,mr=class{constructor(e,t){this.handleFormData=e=>{const t=this.options.disabled(this.host),n=this.options.name(this.host),r=this.options.value(this.host),o="sl-button"===this.host.tagName.toLowerCase();this.host.isConnected&&!t&&!o&&"string"===typeof n&&n.length>0&&"undefined"!==typeof r&&(Array.isArray(r)?r.forEach((t=>{e.formData.append(n,t.toString())})):e.formData.append(n,r.toString()))},this.handleFormSubmit=e=>{var t;const n=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(t=cr.get(this.form))||t.forEach((e=>{this.setUserInteracted(e,!0)}))),!this.form||this.form.noValidate||n||r(this.host)||(e.preventDefault(),e.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),fr.set(this.host,[])},this.handleInteraction=e=>{const t=fr.get(this.host);t.includes(e.type)||t.push(e.type),t.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if("function"===typeof t.checkValidity&&!t.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if("function"===typeof t.reportValidity&&!t.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=Yn({form:e=>{const t=e.form;if(t){const n=e.getRootNode().querySelector(`#${t}`);if(n)return n}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>{var t;return null!=(t=e.disabled)&&t},reportValidity:e=>"function"!==typeof e.reportValidity||e.reportValidity(),checkValidity:e=>"function"!==typeof e.checkValidity||e.checkValidity(),setValue:(e,t)=>e.value=t,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),fr.set(this.host,[]),this.options.assumeInteractionOn.forEach((e=>{this.host.addEventListener(e,this.handleInteraction)}))}hostDisconnected(){this.detachForm(),fr.delete(this.host),this.options.assumeInteractionOn.forEach((e=>{this.host.removeEventListener(e,this.handleInteraction)}))}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,cr.has(this.form)?cr.get(this.form).add(this.host):cr.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),dr.has(this.form)||(dr.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),pr.has(this.form)||(pr.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=cr.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),dr.has(this.form)&&(this.form.reportValidity=dr.get(this.form),dr.delete(this.form)),pr.has(this.form)&&(this.form.checkValidity=pr.get(this.form),pr.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?hr.add(e):hr.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const n=document.createElement("button");n.type=e,n.style.position="absolute",n.style.width="0",n.style.height="0",n.style.clipPath="inset(50%)",n.style.overflow="hidden",n.style.whiteSpace="nowrap",t&&(n.name=t.name,n.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach((e=>{t.hasAttribute(e)&&n.setAttribute(e,t.getAttribute(e))}))),this.form.append(n),n.click(),n.remove()}}getForm(){var e;return null!=(e=this.form)?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,n=Boolean(hr.has(t)),r=Boolean(t.required);t.toggleAttribute("data-required",r),t.toggleAttribute("data-optional",!r),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&n),t.toggleAttribute("data-user-valid",e&&n)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||null==e||e.preventDefault()}},gr=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),br=(Object.freeze(Gn(Yn({},gr),{valid:!1,valueMissing:!0})),Object.freeze(Gn(Yn({},gr),{valid:!1,customError:!0})),wt`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`),vr=class{constructor(e){this.slotNames=[],this.handleSlotChange=e=>{const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this);for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.slotNames=n}hasDefaultSlot(){return[...this.host.childNodes].some((e=>{if(e.nodeType===e.TEXT_NODE&&""!==e.textContent.trim())return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if("sl-visually-hidden"===t.tagName.toLowerCase())return!1;if(!t.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(e){return null!==this.host.querySelector(`:scope > [slot="${e}"]`)}test(e){return"[default]"===e?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};var yr="";function wr(e){yr=e}var _r={name:"default",resolver:e=>function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!yr){const e=[...document.getElementsByTagName("script")],t=e.find((e=>e.hasAttribute("data-shoelace")));if(t)wr(t.getAttribute("data-shoelace"));else{const t=e.find((e=>/shoelace(\.min)?\.js($|\?)/.test(e.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(e.src)));let n="";t&&(n=t.getAttribute("src")),wr(n.split("/").slice(0,-1).join("/"))}}return yr.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}(`assets/icons/${e}.svg`)},xr={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',copy:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',"x-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '},kr=[_r,{name:"system",resolver:e=>e in xr?`data:image/svg+xml,${encodeURIComponent(xr[e])}`:""}],Sr=[];function Cr(e){return kr.find((t=>t.name===e))}var Er=wt`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function Nr(e,t){const n=Yn({waitUntilFirstUpdate:!1},t);return(t,r)=>{const{update:o}=t,i=Array.isArray(e)?e:[e];t.update=function(e){i.forEach((t=>{const o=t;if(e.has(o)){const t=e.get(o),i=this[o];t!==i&&(n.waitUntilFirstUpdate&&!this.hasUpdated||this[r](t,i))}})),o.call(this,e)}}}const{I:Ar}=Sn,Tr={};var Pr,$r=Symbol(),Rr=Symbol(),jr=new Map,Or=class extends sr{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var n;let r;if(null==t?void 0:t.spriteSheet)return this.svg=an`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(r=await fetch(e,{mode:"cors"}),!r.ok)return 410===r.status?$r:Rr}catch(gt){return Rr}try{const e=document.createElement("div");e.innerHTML=await r.text();const t=e.firstElementChild;if("svg"!==(null==(n=null==t?void 0:t.tagName)?void 0:n.toLowerCase()))return $r;Pr||(Pr=new DOMParser);const o=Pr.parseFromString(t.outerHTML,"text/html").body.querySelector("svg");return o?(o.part.add("svg"),document.adoptNode(o)):$r}catch(gt){return $r}}connectedCallback(){var e;super.connectedCallback(),e=this,Sr.push(e)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){var e;super.disconnectedCallback(),e=this,Sr=Sr.filter((t=>t!==e))}getIconSource(){const e=Cr(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){"string"===typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:n}=this.getIconSource(),r=n?Cr(this.library):void 0;if(!t)return void(this.svg=null);let o=jr.get(t);if(o||(o=this.resolveIcon(t,r),jr.set(t,o)),!this.initialRender)return;const i=await o;if(i===Rr&&jr.delete(t),t===this.getIconSource().url)if(((e,t)=>void 0===t?void 0!==e?._$litType$:e?._$litType$===t)(i)){if(this.svg=i,r){await this.updateComplete;const e=this.shadowRoot.querySelector("[part='svg']");"function"===typeof r.mutator&&e&&r.mutator(e)}}else switch(i){case Rr:case $r:this.svg=null,this.emit("sl-error");break;default:this.svg=i.cloneNode(!0),null==(e=null==r?void 0:r.mutator)||e.call(r,this.svg),this.emit("sl-load")}}render(){return this.svg}};Or.styles=[In,Er],Zn([or()],Or.prototype,"svg",2),Zn([rr({reflect:!0})],Or.prototype,"name",2),Zn([rr()],Or.prototype,"src",2),Zn([rr()],Or.prototype,"label",2),Zn([rr({reflect:!0})],Or.prototype,"library",2),Zn([Nr("label")],Or.prototype,"handleLabelChange",1),Zn([Nr(["name","src","library"])],Or.prototype,"setIcon",1);const zr=1,Lr=3,Fr=4,Ur=e=>function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return{_$litDirective$:e,values:n}};class Dr{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const Mr=Ur(class extends Dr{constructor(e){if(super(e),e.type!==zr||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,t){let[n]=t;if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in n)n[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(n)}const r=e.element.classList;for(const o of this.st)o in n||(r.remove(o),this.st.delete(o));for(const o in n){const e=!!n[o];e===this.st.has(o)||this.nt?.has(o)||(e?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return un}}),Ir=Symbol.for(""),Br=e=>{if(e?.r===Ir)return e?._$litStatic$},Hr=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return{_$litStatic$:n.reduce(((t,n,r)=>t+(e=>{if(void 0!==e._$litStatic$)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]),r:Ir}},Vr=new Map,Wr=e=>function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];const i=r.length;let a,l;const s=[],u=[];let c,d=0,p=!1;for(;d<i;){for(c=t[d];d<i&&void 0!==(l=r[d],a=Br(l));)c+=a+t[++d],p=!0;d!==i&&u.push(l),s.push(c),d++}if(d===i&&s.push(t[i]),p){const e=s.join("$$lit$$");void 0===(t=Vr.get(e))&&(s.raw=s,Vr.set(e,t=s)),r=u}return e(t,...r)},qr=Wr(an),Kr=(Wr(ln),Wr(sn),e=>e??cn);var Qr=class extends sr{constructor(){super(...arguments),this.formControlController=new mr(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new vr(this,"[default]","prefix","suffix"),this.localize=new Mn(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:gr}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){"submit"===this.type&&this.formControlController.submit(this),"reset"===this.type&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Hr`a`:Hr`button`;return qr`
      <${t}
        part="base"
        class=${Mr({button:!0,"button--default":"default"===this.variant,"button--primary":"primary"===this.variant,"button--success":"success"===this.variant,"button--neutral":"neutral"===this.variant,"button--warning":"warning"===this.variant,"button--danger":"danger"===this.variant,"button--text":"text"===this.variant,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":"rtl"===this.localize.dir(),"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${Kr(e?void 0:this.disabled)}
        type=${Kr(e?void 0:this.type)}
        title=${this.title}
        name=${Kr(e?void 0:this.name)}
        value=${Kr(e?void 0:this.value)}
        href=${Kr(e&&!this.disabled?this.href:void 0)}
        target=${Kr(e?this.target:void 0)}
        download=${Kr(e?this.download:void 0)}
        rel=${Kr(e?this.rel:void 0)}
        role=${Kr(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?qr` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?qr`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};Qr.styles=[In,br],Qr.dependencies={"sl-icon":Or,"sl-spinner":ur},Zn([ar(".button")],Qr.prototype,"button",2),Zn([or()],Qr.prototype,"hasFocus",2),Zn([or()],Qr.prototype,"invalid",2),Zn([rr()],Qr.prototype,"title",2),Zn([rr({reflect:!0})],Qr.prototype,"variant",2),Zn([rr({reflect:!0})],Qr.prototype,"size",2),Zn([rr({type:Boolean,reflect:!0})],Qr.prototype,"caret",2),Zn([rr({type:Boolean,reflect:!0})],Qr.prototype,"disabled",2),Zn([rr({type:Boolean,reflect:!0})],Qr.prototype,"loading",2),Zn([rr({type:Boolean,reflect:!0})],Qr.prototype,"outline",2),Zn([rr({type:Boolean,reflect:!0})],Qr.prototype,"pill",2),Zn([rr({type:Boolean,reflect:!0})],Qr.prototype,"circle",2),Zn([rr()],Qr.prototype,"type",2),Zn([rr()],Qr.prototype,"name",2),Zn([rr()],Qr.prototype,"value",2),Zn([rr()],Qr.prototype,"href",2),Zn([rr()],Qr.prototype,"target",2),Zn([rr()],Qr.prototype,"rel",2),Zn([rr()],Qr.prototype,"download",2),Zn([rr()],Qr.prototype,"form",2),Zn([rr({attribute:"formaction"})],Qr.prototype,"formAction",2),Zn([rr({attribute:"formenctype"})],Qr.prototype,"formEnctype",2),Zn([rr({attribute:"formmethod"})],Qr.prototype,"formMethod",2),Zn([rr({attribute:"formnovalidate",type:Boolean})],Qr.prototype,"formNoValidate",2),Zn([rr({attribute:"formtarget"})],Qr.prototype,"formTarget",2),Zn([Nr("disabled",{waitUntilFirstUpdate:!0})],Qr.prototype,"handleDisabledChange",1);const Jr=new Set(["children","localName","ref","style","className"]),Xr=new WeakMap,Yr=(e,t,n,r,o)=>{const i=o?.[t];void 0===i?(e[t]=n,null==n&&t in HTMLElement.prototype&&e.removeAttribute(t)):n!==r&&((e,t,n)=>{let r=Xr.get(e);void 0===r&&Xr.set(e,r=new Map);let o=r.get(t);void 0!==n?void 0===o?(r.set(t,o={handleEvent:n}),e.addEventListener(t,o)):o.handleEvent=n:void 0!==o&&(r.delete(t),e.removeEventListener(t,o))})(e,i,n)},Gr=e=>{let{react:t,tagName:n,elementClass:r,events:o,displayName:i}=e;const a=new Set(Object.keys(o??{})),l=t.forwardRef(((e,i)=>{const l=t.useRef(new Map),s=t.useRef(null),u={},c={};for(const[t,n]of Object.entries(e))Jr.has(t)?u["className"===t?"class":t]=n:a.has(t)||t in r.prototype?c[t]=n:u[t]=n;return t.useLayoutEffect((()=>{if(null===s.current)return;const t=new Map;for(const n in c)Yr(s.current,n,e[n],l.current.get(n),o),l.current.delete(n),t.set(n,e[n]);for(const[e,n]of l.current)Yr(s.current,e,void 0,n,o);l.current=t})),t.useLayoutEffect((()=>{s.current?.removeAttribute("defer-hydration")}),[]),u.suppressHydrationWarning=!0,t.createElement(n,{...u,ref:t.useCallback((e=>{s.current=e,"function"==typeof i?i(e):null!==i&&(i.current=e)}),[i])})}));return l.displayName=i??r.name,l};Qr.define("sl-button");var Zr=Gr({tagName:"sl-button",elementClass:Qr,react:i,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlButton"}),eo=wt`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,to=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value";return(t,n)=>{const r=t.constructor,o=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(t,i,a){var l;const s=r.getPropertyOptions(e);if(t===("string"===typeof s.attribute?s.attribute:e)){const t=s.converter||Ot,r=("function"===typeof t?t:null!=(l=null==t?void 0:t.fromAttribute)?l:Ot.fromAttribute)(a,s.type);this[e]!==r&&(this[n]=r)}o.call(this,t,i,a)}}},no=wt`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;const ro=Ur(class extends Dr{constructor(e){if(super(e),e.type!==Lr&&e.type!==zr&&e.type!==Fr)throw Error("The `live` directive is not allowed on child or event bindings");if(!(e=>void 0===e.strings)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,t){let[n]=t;if(n===un||n===cn)return n;const r=e.element,o=e.name;if(e.type===Lr){if(n===r[o])return un}else if(e.type===Fr){if(!!n===r.hasAttribute(o))return un}else if(e.type===zr&&r.getAttribute(o)===n+"")return un;return function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Tr;e._$AH=t}(e),n}});var oo=class extends sr{constructor(){super(...arguments),this.formControlController=new mr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new vr(this,"help-text","label"),this.localize=new Mn(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,(null==(e=this.input)?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,(null==(e=this.input)?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){e.preventDefault(),""!==this.value&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;"Enter"!==e.key||t||setTimeout((()=>{e.defaultPrevented||e.isComposing||this.formControlController.submit()}))}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"none";this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"preserve";const o=null!=t?t:this.input.selectionStart,i=null!=n?n:this.input.selectionEnd;this.input.setRangeText(e,o,i,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),n=!!this.label||!!e,r=!!this.helpText||!!t,o=this.clearable&&!this.disabled&&!this.readonly&&("number"===typeof this.value||this.value.length>0);return an`
      <div
        part="form-control"
        class=${Mr({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":n,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${Mr({input:!0,"input--small":"small"===this.size,"input--medium":"medium"===this.size,"input--large":"large"===this.size,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${"password"===this.type&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${Kr(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${Kr(this.placeholder)}
              minlength=${Kr(this.minlength)}
              maxlength=${Kr(this.maxlength)}
              min=${Kr(this.min)}
              max=${Kr(this.max)}
              step=${Kr(this.step)}
              .value=${ro(this.value)}
              autocapitalize=${Kr(this.autocapitalize)}
              autocomplete=${Kr(this.autocomplete)}
              autocorrect=${Kr(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${Kr(this.pattern)}
              enterkeyhint=${Kr(this.enterkeyhint)}
              inputmode=${Kr(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${o?an`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?an`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?an`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:an`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};oo.styles=[In,no,eo],oo.dependencies={"sl-icon":Or},Zn([ar(".input__control")],oo.prototype,"input",2),Zn([or()],oo.prototype,"hasFocus",2),Zn([rr()],oo.prototype,"title",2),Zn([rr({reflect:!0})],oo.prototype,"type",2),Zn([rr()],oo.prototype,"name",2),Zn([rr()],oo.prototype,"value",2),Zn([to()],oo.prototype,"defaultValue",2),Zn([rr({reflect:!0})],oo.prototype,"size",2),Zn([rr({type:Boolean,reflect:!0})],oo.prototype,"filled",2),Zn([rr({type:Boolean,reflect:!0})],oo.prototype,"pill",2),Zn([rr()],oo.prototype,"label",2),Zn([rr({attribute:"help-text"})],oo.prototype,"helpText",2),Zn([rr({type:Boolean})],oo.prototype,"clearable",2),Zn([rr({type:Boolean,reflect:!0})],oo.prototype,"disabled",2),Zn([rr()],oo.prototype,"placeholder",2),Zn([rr({type:Boolean,reflect:!0})],oo.prototype,"readonly",2),Zn([rr({attribute:"password-toggle",type:Boolean})],oo.prototype,"passwordToggle",2),Zn([rr({attribute:"password-visible",type:Boolean})],oo.prototype,"passwordVisible",2),Zn([rr({attribute:"no-spin-buttons",type:Boolean})],oo.prototype,"noSpinButtons",2),Zn([rr({reflect:!0})],oo.prototype,"form",2),Zn([rr({type:Boolean,reflect:!0})],oo.prototype,"required",2),Zn([rr()],oo.prototype,"pattern",2),Zn([rr({type:Number})],oo.prototype,"minlength",2),Zn([rr({type:Number})],oo.prototype,"maxlength",2),Zn([rr()],oo.prototype,"min",2),Zn([rr()],oo.prototype,"max",2),Zn([rr()],oo.prototype,"step",2),Zn([rr()],oo.prototype,"autocapitalize",2),Zn([rr()],oo.prototype,"autocorrect",2),Zn([rr()],oo.prototype,"autocomplete",2),Zn([rr({type:Boolean})],oo.prototype,"autofocus",2),Zn([rr()],oo.prototype,"enterkeyhint",2),Zn([rr({type:Boolean,converter:{fromAttribute:e=>!(!e||"false"===e),toAttribute:e=>e?"true":"false"}})],oo.prototype,"spellcheck",2),Zn([rr()],oo.prototype,"inputmode",2),Zn([Nr("disabled",{waitUntilFirstUpdate:!0})],oo.prototype,"handleDisabledChange",1),Zn([Nr("step",{waitUntilFirstUpdate:!0})],oo.prototype,"handleStepChange",1),Zn([Nr("value",{waitUntilFirstUpdate:!0})],oo.prototype,"handleValueChange",1);oo.define("sl-input");var io=Gr({tagName:"sl-input",elementClass:oo,react:i,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlClear:"sl-clear",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlInput"}),ao=new WeakMap;function lo(e){let t=ao.get(e);return t||(t=window.getComputedStyle(e,null),ao.set(e,t)),t}function so(e){const t=e.tagName.toLowerCase(),n=Number(e.getAttribute("tabindex"));if(e.hasAttribute("tabindex")&&(isNaN(n)||n<=-1))return!1;if(e.hasAttribute("disabled"))return!1;if(e.closest("[inert]"))return!1;if("input"===t&&"radio"===e.getAttribute("type")&&!e.hasAttribute("checked"))return!1;if(!function(e){if("function"===typeof e.checkVisibility)return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=lo(e);return"hidden"!==t.visibility&&"none"!==t.display}(e))return!1;if(("audio"===t||"video"===t)&&e.hasAttribute("controls"))return!0;if(e.hasAttribute("tabindex"))return!0;if(e.hasAttribute("contenteditable")&&"false"!==e.getAttribute("contenteditable"))return!0;return!!["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)||function(e){const t=lo(e),{overflowY:n,overflowX:r}=t;return"scroll"===n||"scroll"===r||"auto"===n&&"auto"===r&&(e.scrollHeight>e.clientHeight&&"auto"===n||!(!(e.scrollWidth>e.clientWidth)||"auto"!==r))}(e)}function uo(e){const t=new WeakMap,n=[];return function r(o){if(o instanceof Element){if(o.hasAttribute("inert")||o.closest("[inert]"))return;if(t.has(o))return;t.set(o,!0),!n.includes(o)&&so(o)&&n.push(o),o instanceof HTMLSlotElement&&function(e,t){var n;return(null==(n=e.getRootNode({composed:!0}))?void 0:n.host)!==t}(o,e)&&o.assignedElements({flatten:!0}).forEach((e=>{r(e)})),null!==o.shadowRoot&&"open"===o.shadowRoot.mode&&r(o.shadowRoot)}for(const e of o.children)r(e)}(e),n.sort(((e,t)=>{const n=Number(e.getAttribute("tabindex"))||0;return(Number(t.getAttribute("tabindex"))||0)-n}))}function co(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.activeElement;return function*(){null!==e&&void 0!==e&&(yield e,"shadowRoot"in e&&e.shadowRoot&&"closed"!==e.shadowRoot.mode&&(yield*(e=>{var t,n=e[Jn("asyncIterator")],r=!1,o={};return null==n?(n=e[Jn("iterator")](),t=e=>o[e]=t=>n[e](t)):(n=n.call(e),t=e=>o[e]=t=>{if(r){if(r=!1,"throw"===e)throw t;return t}return r=!0,{done:!1,value:new tr(new Promise((r=>{var o=n[e](t);if(!(o instanceof Object))throw TypeError("Object expected");r(o)})),1)}}),o[Jn("iterator")]=()=>o,t("next"),"throw"in n?t("throw"):o.throw=e=>{throw e},"return"in n&&t("return"),o})(co(e.shadowRoot.activeElement))))}()}var po=[],ho=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var t;if("Tab"!==e.key||this.isExternalActivated)return;if(!this.isActive())return;const n=[...co()].pop();if(this.previousFocus=n,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const r=uo(this.element);let o=r.findIndex((e=>e===n));this.previousFocus=this.currentFocus;const i="forward"===this.tabDirection?1:-1;for(;;){o+i>=r.length?o=0:o+i<0?o=r.length-1:o+=i,this.previousFocus=this.currentFocus;const n=r[o];if("backward"===this.tabDirection&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;if(n&&this.possiblyHasTabbableChildren(n))return;e.preventDefault(),this.currentFocus=n,null==(t=this.currentFocus)||t.focus({preventScroll:!1});const a=[...co()];if(a.includes(this.currentFocus)||!a.includes(this.previousFocus))break}setTimeout((()=>this.checkFocus()))},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){po.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){po=po.filter((e=>e!==this.element)),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return po[po.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=uo(this.element);if(!this.element.matches(":focus-within")){const t=e[0],n=e[e.length-1],r="forward"===this.tabDirection?t:n;"function"===typeof(null==r?void 0:r.focus)&&(this.currentFocus=r,r.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}};var fo=new Set;function mo(e){if(fo.add(e),!document.documentElement.classList.contains("sl-scroll-lock")){const e=function(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}()+function(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}();let t=getComputedStyle(document.documentElement).scrollbarGutter;t&&"auto"!==t||(t="stable"),e<2&&(t=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",t),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function go(e){fo.delete(e),0===fo.size&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function bo(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"vertical",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"smooth";const o=function(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}(e,t),i=o.top+t.scrollTop,a=o.left+t.scrollLeft,l=t.scrollLeft,s=t.scrollLeft+t.offsetWidth,u=t.scrollTop,c=t.scrollTop+t.offsetHeight;"horizontal"!==n&&"both"!==n||(a<l?t.scrollTo({left:a,behavior:r}):a+e.clientWidth>s&&t.scrollTo({left:a-t.offsetWidth+e.clientWidth,behavior:r})),"vertical"!==n&&"both"!==n||(i<u?t.scrollTo({top:i,behavior:r}):i+e.clientHeight>c&&t.scrollTo({top:i-t.offsetHeight+e.clientHeight,behavior:r}))}var vo=wt`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,yo=wt`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,wo=class extends sr{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?Hr`a`:Hr`button`;return qr`
      <${t}
        part="base"
        class=${Mr({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${Kr(e?void 0:this.disabled)}
        type=${Kr(e?void 0:"button")}
        href=${Kr(e?this.href:void 0)}
        target=${Kr(e?this.target:void 0)}
        download=${Kr(e?this.download:void 0)}
        rel=${Kr(e&&this.target?"noreferrer noopener":void 0)}
        role=${Kr(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${Kr(this.name)}
          library=${Kr(this.library)}
          src=${Kr(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};wo.styles=[In,yo],wo.dependencies={"sl-icon":Or},Zn([ar(".icon-button")],wo.prototype,"button",2),Zn([or()],wo.prototype,"hasFocus",2),Zn([rr()],wo.prototype,"name",2),Zn([rr()],wo.prototype,"library",2),Zn([rr()],wo.prototype,"src",2),Zn([rr()],wo.prototype,"href",2),Zn([rr()],wo.prototype,"target",2),Zn([rr()],wo.prototype,"download",2),Zn([rr()],wo.prototype,"label",2),Zn([rr({type:Boolean,reflect:!0})],wo.prototype,"disabled",2);var _o=new Map,xo=new WeakMap;function ko(e){return null!=e?e:{keyframes:[],options:{duration:0}}}function So(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function Co(e,t){_o.set(e,ko(t))}function Eo(e,t,n){const r=xo.get(e);if(null==r?void 0:r[t])return So(r[t],n.dir);const o=_o.get(t);return o?So(o,n.dir):{keyframes:[],options:{duration:0}}}function No(e,t){return new Promise((n=>{e.addEventListener(t,(function r(o){o.target===e&&(e.removeEventListener(t,r),n())}))}))}function Ao(e,t,n){return new Promise((r=>{if((null==n?void 0:n.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=e.animate(t,Gn(Yn({},n),{duration:To()?0:n.duration}));o.addEventListener("cancel",r,{once:!0}),o.addEventListener("finish",r,{once:!0})}))}function To(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Po(e){return Promise.all(e.getAnimations().map((e=>new Promise((t=>{e.cancel(),requestAnimationFrame(t)})))))}var $o=class extends sr{constructor(){super(...arguments),this.hasSlotController=new vr(this,"footer"),this.localize=new Mn(this),this.modal=new ho(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{"Escape"===e.key&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),mo(this))}disconnectedCallback(){var e;super.disconnectedCallback(),this.modal.deactivate(),go(this),null==(e=this.closeWatcher)||e.destroy()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const e=Eo(this,"dialog.denyClose",{dir:this.localize.dir()});Ao(this.panel,e.keyframes,e.options)}else this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),mo(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Po(this.dialog),Po(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame((()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")}));const t=Eo(this,"dialog.show",{dir:this.localize.dir()}),n=Eo(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Ao(this.panel,t.keyframes,t.options),Ao(this.overlay,n.keyframes,n.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Po(this.dialog),Po(this.overlay)]);const e=Eo(this,"dialog.hide",{dir:this.localize.dir()}),t=Eo(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Ao(this.overlay,t.keyframes,t.options).then((()=>{this.overlay.hidden=!0})),Ao(this.panel,e.keyframes,e.options).then((()=>{this.panel.hidden=!0}))]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,go(this);const n=this.originalTrigger;"function"===typeof(null==n?void 0:n.focus)&&setTimeout((()=>n.focus())),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,No(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,No(this,"sl-after-hide")}render(){return an`
      <div
        part="base"
        class=${Mr({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${Kr(this.noHeader?this.label:void 0)}
          aria-labelledby=${Kr(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":an`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};$o.styles=[In,vo],$o.dependencies={"sl-icon-button":wo},Zn([ar(".dialog")],$o.prototype,"dialog",2),Zn([ar(".dialog__panel")],$o.prototype,"panel",2),Zn([ar(".dialog__overlay")],$o.prototype,"overlay",2),Zn([rr({type:Boolean,reflect:!0})],$o.prototype,"open",2),Zn([rr({reflect:!0})],$o.prototype,"label",2),Zn([rr({attribute:"no-header",type:Boolean,reflect:!0})],$o.prototype,"noHeader",2),Zn([Nr("open",{waitUntilFirstUpdate:!0})],$o.prototype,"handleOpenChange",1),Co("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),Co("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),Co("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),Co("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),Co("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});$o.define("sl-dialog");var Ro=Gr({tagName:"sl-dialog",elementClass:$o,react:i,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDialog"}),jo=wt`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,Oo=class extends sr{constructor(){super(...arguments),this.formControlController=new mr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new vr(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((()=>this.setTextareaHeight())),this.updateComplete.then((()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)}))}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var e;super.disconnectedCallback(),this.input&&(null==(e=this.resizeObserver)||e.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){"auto"===this.resize?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){return e?("number"===typeof e.top&&(this.input.scrollTop=e.top),void("number"===typeof e.left&&(this.input.scrollLeft=e.left))):{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"none";this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"preserve";const o=null!=t?t:this.input.selectionStart,i=null!=n?n:this.input.selectionEnd;this.input.setRangeText(e,o,i,r),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),n=!!this.label||!!e,r=!!this.helpText||!!t;return an`
      <div
        part="form-control"
        class=${Mr({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":n,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${Mr({textarea:!0,"textarea--small":"small"===this.size,"textarea--medium":"medium"===this.size,"textarea--large":"large"===this.size,"textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":"none"===this.resize,"textarea--resize-vertical":"vertical"===this.resize,"textarea--resize-auto":"auto"===this.resize})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${Kr(this.name)}
              .value=${ro(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${Kr(this.placeholder)}
              rows=${Kr(this.rows)}
              minlength=${Kr(this.minlength)}
              maxlength=${Kr(this.maxlength)}
              autocapitalize=${Kr(this.autocapitalize)}
              autocorrect=${Kr(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${Kr(this.spellcheck)}
              enterkeyhint=${Kr(this.enterkeyhint)}
              inputmode=${Kr(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${"auto"!==this.resize}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Oo.styles=[In,no,jo],Zn([ar(".textarea__control")],Oo.prototype,"input",2),Zn([ar(".textarea__size-adjuster")],Oo.prototype,"sizeAdjuster",2),Zn([or()],Oo.prototype,"hasFocus",2),Zn([rr()],Oo.prototype,"title",2),Zn([rr()],Oo.prototype,"name",2),Zn([rr()],Oo.prototype,"value",2),Zn([rr({reflect:!0})],Oo.prototype,"size",2),Zn([rr({type:Boolean,reflect:!0})],Oo.prototype,"filled",2),Zn([rr()],Oo.prototype,"label",2),Zn([rr({attribute:"help-text"})],Oo.prototype,"helpText",2),Zn([rr()],Oo.prototype,"placeholder",2),Zn([rr({type:Number})],Oo.prototype,"rows",2),Zn([rr()],Oo.prototype,"resize",2),Zn([rr({type:Boolean,reflect:!0})],Oo.prototype,"disabled",2),Zn([rr({type:Boolean,reflect:!0})],Oo.prototype,"readonly",2),Zn([rr({reflect:!0})],Oo.prototype,"form",2),Zn([rr({type:Boolean,reflect:!0})],Oo.prototype,"required",2),Zn([rr({type:Number})],Oo.prototype,"minlength",2),Zn([rr({type:Number})],Oo.prototype,"maxlength",2),Zn([rr()],Oo.prototype,"autocapitalize",2),Zn([rr()],Oo.prototype,"autocorrect",2),Zn([rr()],Oo.prototype,"autocomplete",2),Zn([rr({type:Boolean})],Oo.prototype,"autofocus",2),Zn([rr()],Oo.prototype,"enterkeyhint",2),Zn([rr({type:Boolean,converter:{fromAttribute:e=>!(!e||"false"===e),toAttribute:e=>e?"true":"false"}})],Oo.prototype,"spellcheck",2),Zn([rr()],Oo.prototype,"inputmode",2),Zn([to()],Oo.prototype,"defaultValue",2),Zn([Nr("disabled",{waitUntilFirstUpdate:!0})],Oo.prototype,"handleDisabledChange",1),Zn([Nr("rows",{waitUntilFirstUpdate:!0})],Oo.prototype,"handleRowsChange",1),Zn([Nr("value",{waitUntilFirstUpdate:!0})],Oo.prototype,"handleValueChange",1);Oo.define("sl-textarea");var zo=Gr({tagName:"sl-textarea",elementClass:Oo,react:i,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlTextarea"}),Lo=wt`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,Fo=class extends sr{constructor(){super(...arguments),this.formControlController=new mr(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new vr(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=!!this.helpText||!!e;return an`
      <div
        class=${Mr({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${Mr({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":"small"===this.size,"checkbox--medium":"medium"===this.size,"checkbox--large":"large"===this.size})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${Kr(this.value)}
            .indeterminate=${ro(this.indeterminate)}
            .checked=${ro(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?an`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?an`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Fo.styles=[In,no,Lo],Fo.dependencies={"sl-icon":Or},Zn([ar('input[type="checkbox"]')],Fo.prototype,"input",2),Zn([or()],Fo.prototype,"hasFocus",2),Zn([rr()],Fo.prototype,"title",2),Zn([rr()],Fo.prototype,"name",2),Zn([rr()],Fo.prototype,"value",2),Zn([rr({reflect:!0})],Fo.prototype,"size",2),Zn([rr({type:Boolean,reflect:!0})],Fo.prototype,"disabled",2),Zn([rr({type:Boolean,reflect:!0})],Fo.prototype,"checked",2),Zn([rr({type:Boolean,reflect:!0})],Fo.prototype,"indeterminate",2),Zn([to("checked")],Fo.prototype,"defaultChecked",2),Zn([rr({reflect:!0})],Fo.prototype,"form",2),Zn([rr({type:Boolean,reflect:!0})],Fo.prototype,"required",2),Zn([rr({attribute:"help-text"})],Fo.prototype,"helpText",2),Zn([Nr("disabled",{waitUntilFirstUpdate:!0})],Fo.prototype,"handleDisabledChange",1),Zn([Nr(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],Fo.prototype,"handleStateChange",1);Fo.define("sl-checkbox");var Uo=Gr({tagName:"sl-checkbox",elementClass:Fo,react:i,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlCheckbox"}),Do=n(579);const Mo=function(e){const[t,n]=(0,o.useState)(!1);return console.log(e.input),(0,Do.jsxs)("div",{className:"form-content",children:[(0,Do.jsx)("small",{children:"For maintenance item, make sure to fillout the recurring field"}),(0,Do.jsx)(io,{label:"Title","help-text":"Main title for this task",onSlChange:t=>e.setInputs({title:t.target.value,description:e.input.description,recurring:e.input.recurring,date:e.input.date,unit:e.input.unit}),clearable:!0}),(0,Do.jsx)(io,{label:"Unit","help-text":"Either Unit, Apt #, etc",onSlChange:t=>e.setInputs({title:e.input.title,description:e.input.description,recurring:e.input.recurring,date:e.input.date,unit:t.target.value}),clearable:!0}),(0,Do.jsx)(zo,{label:"Description",resize:"none","help-text":"Describe in few words the issue you are having",onSlChange:t=>e.setInputs({title:e.input.title,description:t.target.value,recurring:e.input.recurring,date:e.input.date,unit:e.input.unit})}),(0,Do.jsx)(Uo,{onSlChange:()=>n(!t),children:" Is this a recurring task ?"}),t&&(0,Do.jsx)(zo,{label:"Description",resize:"none","help-text":"Describe when this task should be performed. Once a week on Monday, etc.",onSlChange:t=>e.setInputs({title:e.input.title,description:e.input.description,recurring:t.target.value,date:e.input.date,unit:e.input.unit})}),(0,Do.jsx)("style",{children:"\n    sl-dialog {\n        --width: 75rem;\n    }\n    .form-content {\n        text-align: left;\n\n        small, sl-input, sl-textarea, sl-checkbox {\n            margin: 25px 0px;\n            display: block;\n        }\n    }\n    \n \n"})]})};function Io(e,t){return function(){return e.apply(t,arguments)}}const{toString:Bo}=Object.prototype,{getPrototypeOf:Ho}=Object,{iterator:Vo,toStringTag:Wo}=Symbol,qo=(Ko=Object.create(null),e=>{const t=Bo.call(e);return Ko[t]||(Ko[t]=t.slice(8,-1).toLowerCase())});var Ko;const Qo=e=>(e=e.toLowerCase(),t=>qo(t)===e),Jo=e=>t=>typeof t===e,{isArray:Xo}=Array,Yo=Jo("undefined");function Go(e){return null!==e&&!Yo(e)&&null!==e.constructor&&!Yo(e.constructor)&&ti(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Zo=Qo("ArrayBuffer");const ei=Jo("string"),ti=Jo("function"),ni=Jo("number"),ri=e=>null!==e&&"object"===typeof e,oi=e=>{if("object"!==qo(e))return!1;const t=Ho(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Wo in e)&&!(Vo in e)},ii=Qo("Date"),ai=Qo("File"),li=Qo("Blob"),si=Qo("FileList"),ui=Qo("URLSearchParams"),[ci,di,pi,hi]=["ReadableStream","Request","Response","Headers"].map(Qo);function fi(e,t){let n,r,{allOwnKeys:o=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),Xo(e))for(n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else{if(Go(e))return;const r=o?Object.getOwnPropertyNames(e):Object.keys(e),i=r.length;let a;for(n=0;n<i;n++)a=r[n],t.call(null,e[a],a,e)}}function mi(e,t){if(Go(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const gi="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global,bi=e=>!Yo(e)&&e!==gi;const vi=(yi="undefined"!==typeof Uint8Array&&Ho(Uint8Array),e=>yi&&e instanceof yi);var yi;const wi=Qo("HTMLFormElement"),_i=(e=>{let{hasOwnProperty:t}=e;return(e,n)=>t.call(e,n)})(Object.prototype),xi=Qo("RegExp"),ki=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};fi(n,((n,o)=>{let i;!1!==(i=t(n,o,e))&&(r[o]=i||n)})),Object.defineProperties(e,r)};const Si=Qo("AsyncFunction"),Ci=((e,t)=>{return e?setImmediate:t?(n=`axios@${Math.random()}`,r=[],gi.addEventListener("message",(e=>{let{source:t,data:o}=e;t===gi&&o===n&&r.length&&r.shift()()}),!1),e=>{r.push(e),gi.postMessage(n,"*")}):e=>setTimeout(e);var n,r})("function"===typeof setImmediate,ti(gi.postMessage)),Ei="undefined"!==typeof queueMicrotask?queueMicrotask.bind(gi):"undefined"!==typeof process&&process.nextTick||Ci,Ni={isArray:Xo,isArrayBuffer:Zo,isBuffer:Go,isFormData:e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||ti(e.append)&&("formdata"===(t=qo(e))||"object"===t&&ti(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&Zo(e.buffer),t},isString:ei,isNumber:ni,isBoolean:e=>!0===e||!1===e,isObject:ri,isPlainObject:oi,isEmptyObject:e=>{if(!ri(e)||Go(e))return!1;try{return 0===Object.keys(e).length&&Object.getPrototypeOf(e)===Object.prototype}catch(gt){return!1}},isReadableStream:ci,isRequest:di,isResponse:pi,isHeaders:hi,isUndefined:Yo,isDate:ii,isFile:ai,isBlob:li,isRegExp:xi,isFunction:ti,isStream:e=>ri(e)&&ti(e.pipe),isURLSearchParams:ui,isTypedArray:vi,isFileList:si,forEach:fi,merge:function e(){const{caseless:t,skipUndefined:n}=bi(this)&&this||{},r={},o=(o,i)=>{const a=t&&mi(r,i)||i;oi(r[a])&&oi(o)?r[a]=e(r[a],o):oi(o)?r[a]=e({},o):Xo(o)?r[a]=o.slice():n&&Yo(o)||(r[a]=o)};for(let i=0,a=arguments.length;i<a;i++)arguments[i]&&fi(arguments[i],o);return r},extend:function(e,t,n){let{allOwnKeys:r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return fi(t,((t,r)=>{n&&ti(t)?e[r]=Io(t,n):e[r]=t}),{allOwnKeys:r}),e},trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,i,a;const l={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],r&&!r(a,e,t)||l[a]||(t[a]=e[a],l[a]=!0);e=!1!==n&&Ho(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:qo,kindOfTest:Qo,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(Xo(e))return e;let t=e.length;if(!ni(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Vo]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:wi,hasOwnProperty:_i,hasOwnProp:_i,reduceDescriptors:ki,freezeMethods:e=>{ki(e,((t,n)=>{if(ti(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];ti(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return Xo(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:mi,global:gi,isContextDefined:bi,isSpecCompliantForm:function(e){return!!(e&&ti(e.append)&&"FormData"===e[Wo]&&e[Vo])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(ri(e)){if(t.indexOf(e)>=0)return;if(Go(e))return e;if(!("toJSON"in e)){t[r]=e;const o=Xo(e)?[]:{};return fi(e,((e,t)=>{const i=n(e,r+1);!Yo(i)&&(o[t]=i)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:Si,isThenable:e=>e&&(ri(e)||ti(e))&&ti(e.then)&&ti(e.catch),setImmediate:Ci,asap:Ei,isIterable:e=>null!=e&&ti(e[Vo])};function Ai(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}Ni.inherits(Ai,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Ni.toJSONObject(this.config),code:this.code,status:this.status}}});const Ti=Ai.prototype,Pi={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{Pi[e]={value:e}})),Object.defineProperties(Ai,Pi),Object.defineProperty(Ti,"isAxiosError",{value:!0}),Ai.from=(e,t,n,r,o,i)=>{const a=Object.create(Ti);Ni.toFlatObject(e,a,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e));const l=e&&e.message?e.message:"Error",s=null==t&&e?e.code:t;return Ai.call(a,l,s,n,r,o),e&&null==a.cause&&Object.defineProperty(a,"cause",{value:e,configurable:!0}),a.name=e&&e.name||"Error",i&&Object.assign(a,i),a};const $i=Ai;function Ri(e){return Ni.isPlainObject(e)||Ni.isArray(e)}function ji(e){return Ni.endsWith(e,"[]")?e.slice(0,-2):e}function Oi(e,t,n){return e?e.concat(t).map((function(e,t){return e=ji(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const zi=Ni.toFlatObject(Ni,{},null,(function(e){return/^is[A-Z]/.test(e)}));const Li=function(e,t,n){if(!Ni.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=Ni.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!Ni.isUndefined(t[e])}))).metaTokens,o=n.visitor||u,i=n.dots,a=n.indexes,l=(n.Blob||"undefined"!==typeof Blob&&Blob)&&Ni.isSpecCompliantForm(t);if(!Ni.isFunction(o))throw new TypeError("visitor must be a function");function s(e){if(null===e)return"";if(Ni.isDate(e))return e.toISOString();if(Ni.isBoolean(e))return e.toString();if(!l&&Ni.isBlob(e))throw new $i("Blob is not supported. Use a Buffer instead.");return Ni.isArrayBuffer(e)||Ni.isTypedArray(e)?l&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function u(e,n,o){let l=e;if(e&&!o&&"object"===typeof e)if(Ni.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(Ni.isArray(e)&&function(e){return Ni.isArray(e)&&!e.some(Ri)}(e)||(Ni.isFileList(e)||Ni.endsWith(n,"[]"))&&(l=Ni.toArray(e)))return n=ji(n),l.forEach((function(e,r){!Ni.isUndefined(e)&&null!==e&&t.append(!0===a?Oi([n],r,i):null===a?n:n+"[]",s(e))})),!1;return!!Ri(e)||(t.append(Oi(o,n,i),s(e)),!1)}const c=[],d=Object.assign(zi,{defaultVisitor:u,convertValue:s,isVisitable:Ri});if(!Ni.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!Ni.isUndefined(n)){if(-1!==c.indexOf(n))throw Error("Circular reference detected in "+r.join("."));c.push(n),Ni.forEach(n,(function(n,i){!0===(!(Ni.isUndefined(n)||null===n)&&o.call(t,n,Ni.isString(i)?i.trim():i,r,d))&&e(n,r?r.concat(i):[i])})),c.pop()}}(e),t};function Fi(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Ui(e,t){this._pairs=[],e&&Li(e,this,t)}const Di=Ui.prototype;Di.append=function(e,t){this._pairs.push([e,t])},Di.toString=function(e){const t=e?function(t){return e.call(this,t,Fi)}:Fi;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const Mi=Ui;function Ii(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Bi(e,t,n){if(!t)return e;const r=n&&n.encode||Ii;Ni.isFunction(n)&&(n={serialize:n});const o=n&&n.serialize;let i;if(i=o?o(t,n):Ni.isURLSearchParams(t)?t.toString():new Mi(t,n).toString(r),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}const Hi=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Ni.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},Vi={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Wi={isBrowser:!0,classes:{URLSearchParams:"undefined"!==typeof URLSearchParams?URLSearchParams:Mi,FormData:"undefined"!==typeof FormData?FormData:null,Blob:"undefined"!==typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},qi="undefined"!==typeof window&&"undefined"!==typeof document,Ki="object"===typeof navigator&&navigator||void 0,Qi=qi&&(!Ki||["ReactNative","NativeScript","NS"].indexOf(Ki.product)<0),Ji="undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts,Xi=qi&&window.location.href||"http://localhost",Yi={...r,...Wi};const Gi=function(e){function t(e,n,r,o){let i=e[o++];if("__proto__"===i)return!0;const a=Number.isFinite(+i),l=o>=e.length;if(i=!i&&Ni.isArray(r)?r.length:i,l)return Ni.hasOwnProp(r,i)?r[i]=[r[i],n]:r[i]=n,!a;r[i]&&Ni.isObject(r[i])||(r[i]=[]);return t(e,n,r[i],o)&&Ni.isArray(r[i])&&(r[i]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}(r[i])),!a}if(Ni.isFormData(e)&&Ni.isFunction(e.entries)){const n={};return Ni.forEachEntry(e,((e,r)=>{t(function(e){return Ni.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null};const Zi={transitional:Vi,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=Ni.isObject(e);o&&Ni.isHTMLForm(e)&&(e=new FormData(e));if(Ni.isFormData(e))return r?JSON.stringify(Gi(e)):e;if(Ni.isArrayBuffer(e)||Ni.isBuffer(e)||Ni.isStream(e)||Ni.isFile(e)||Ni.isBlob(e)||Ni.isReadableStream(e))return e;if(Ni.isArrayBufferView(e))return e.buffer;if(Ni.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return Li(e,new Yi.classes.URLSearchParams,{visitor:function(e,t,n,r){return Yi.isNode&&Ni.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...t})}(e,this.formSerializer).toString();if((i=Ni.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Li(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(Ni.isString(e))try{return(t||JSON.parse)(e),Ni.trim(e)}catch(gt){if("SyntaxError"!==gt.name)throw gt}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||Zi.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(Ni.isResponse(e)||Ni.isReadableStream(e))return e;if(e&&Ni.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e,this.parseReviver)}catch(gt){if(n){if("SyntaxError"===gt.name)throw $i.from(gt,$i.ERR_BAD_RESPONSE,this,null,this.response);throw gt}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Yi.classes.FormData,Blob:Yi.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Ni.forEach(["delete","get","head","post","put","patch"],(e=>{Zi.headers[e]={}}));const ea=Zi,ta=Ni.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),na=Symbol("internals");function ra(e){return e&&String(e).trim().toLowerCase()}function oa(e){return!1===e||null==e?e:Ni.isArray(e)?e.map(oa):String(e)}function ia(e,t,n,r,o){return Ni.isFunction(r)?r.call(this,t,n):(o&&(t=n),Ni.isString(t)?Ni.isString(r)?-1!==t.indexOf(r):Ni.isRegExp(r)?r.test(t):void 0:void 0)}class aa{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=ra(t);if(!o)throw new Error("header name must be a non-empty string");const i=Ni.findKey(r,o);(!i||void 0===r[i]||!0===n||void 0===n&&!1!==r[i])&&(r[i||t]=oa(e))}const i=(e,t)=>Ni.forEach(e,((e,n)=>o(e,n,t)));if(Ni.isPlainObject(e)||e instanceof this.constructor)i(e,t);else if(Ni.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))i((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&ta[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t);else if(Ni.isObject(e)&&Ni.isIterable(e)){let n,r,o={};for(const t of e){if(!Ni.isArray(t))throw TypeError("Object iterator must return a key-value pair");o[r=t[0]]=(n=o[r])?Ni.isArray(n)?[...n,t[1]]:[n,t[1]]:t[1]}i(o,t)}else null!=e&&o(t,e,n);return this}get(e,t){if(e=ra(e)){const n=Ni.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(Ni.isFunction(t))return t.call(this,e,n);if(Ni.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ra(e)){const n=Ni.findKey(this,e);return!(!n||void 0===this[n]||t&&!ia(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=ra(e)){const o=Ni.findKey(n,e);!o||t&&!ia(0,n[o],o,t)||(delete n[o],r=!0)}}return Ni.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!ia(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return Ni.forEach(this,((r,o)=>{const i=Ni.findKey(n,o);if(i)return t[i]=oa(r),void delete t[o];const a=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();a!==o&&delete t[o],t[a]=oa(r),n[a]=!0})),this}concat(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.constructor.concat(this,...t)}toJSON(e){const t=Object.create(null);return Ni.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&Ni.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((e=>{let[t,n]=e;return t+": "+n})).join("\n")}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e){const t=new this(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return r.forEach((e=>t.set(e))),t}static accessor(e){const t=(this[na]=this[na]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=ra(e);t[r]||(!function(e,t){const n=Ni.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return Ni.isArray(e)?e.forEach(r):r(e),this}}aa.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),Ni.reduceDescriptors(aa.prototype,((e,t)=>{let{value:n}=e,r=t[0].toUpperCase()+t.slice(1);return{get:()=>n,set(e){this[r]=e}}})),Ni.freezeMethods(aa);const la=aa;function sa(e,t){const n=this||ea,r=t||n,o=la.from(r.headers);let i=r.data;return Ni.forEach(e,(function(e){i=e.call(n,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function ua(e){return!(!e||!e.__CANCEL__)}function ca(e,t,n){$i.call(this,null==e?"canceled":e,$i.ERR_CANCELED,t,n),this.name="CanceledError"}Ni.inherits(ca,$i,{__CANCEL__:!0});const da=ca;function pa(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new $i("Request failed with status code "+n.status,[$i.ERR_BAD_REQUEST,$i.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}const ha=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,i=0,a=0;return t=void 0!==t?t:1e3,function(l){const s=Date.now(),u=r[a];o||(o=s),n[i]=l,r[i]=s;let c=a,d=0;for(;c!==i;)d+=n[c++],c%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),s-o<t)return;const p=u&&s-u;return p?Math.round(1e3*d/p):void 0}};const fa=function(e,t){let n,r,o=0,i=1e3/t;const a=function(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();o=i,n=null,r&&(clearTimeout(r),r=null),e(...t)};return[function(){const e=Date.now(),t=e-o;for(var l=arguments.length,s=new Array(l),u=0;u<l;u++)s[u]=arguments[u];t>=i?a(s,e):(n=s,r||(r=setTimeout((()=>{r=null,a(n)}),i-t)))},()=>n&&a(n)]},ma=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=0;const o=ha(50,250);return fa((n=>{const i=n.loaded,a=n.lengthComputable?n.total:void 0,l=i-r,s=o(l);r=i;e({loaded:i,total:a,progress:a?i/a:void 0,bytes:l,rate:s||void 0,estimated:s&&a&&i<=a?(a-i)/s:void 0,event:n,lengthComputable:null!=a,[t?"download":"upload"]:!0})}),n)},ga=(e,t)=>{const n=null!=e;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},ba=e=>function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return Ni.asap((()=>e(...n)))},va=Yi.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,Yi.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(Yi.origin),Yi.navigator&&/(msie|trident)/i.test(Yi.navigator.userAgent)):()=>!0,ya=Yi.hasStandardBrowserEnv?{write(e,t,n,r,o,i,a){if("undefined"===typeof document)return;const l=[`${e}=${encodeURIComponent(t)}`];Ni.isNumber(n)&&l.push(`expires=${new Date(n).toUTCString()}`),Ni.isString(r)&&l.push(`path=${r}`),Ni.isString(o)&&l.push(`domain=${o}`),!0===i&&l.push("secure"),Ni.isString(a)&&l.push(`SameSite=${a}`),document.cookie=l.join("; ")},read(e){if("undefined"===typeof document)return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read:()=>null,remove(){}};function wa(e,t,n){let r=!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);return e&&(r||0==n)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const _a=e=>e instanceof la?{...e}:e;function xa(e,t){t=t||{};const n={};function r(e,t,n,r){return Ni.isPlainObject(e)&&Ni.isPlainObject(t)?Ni.merge.call({caseless:r},e,t):Ni.isPlainObject(t)?Ni.merge({},t):Ni.isArray(t)?t.slice():t}function o(e,t,n,o){return Ni.isUndefined(t)?Ni.isUndefined(e)?void 0:r(void 0,e,0,o):r(e,t,0,o)}function i(e,t){if(!Ni.isUndefined(t))return r(void 0,t)}function a(e,t){return Ni.isUndefined(t)?Ni.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function l(n,o,i){return i in t?r(n,o):i in e?r(void 0,n):void 0}const s={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(e,t,n)=>o(_a(e),_a(t),0,!0)};return Ni.forEach(Object.keys({...e,...t}),(function(r){const i=s[r]||o,a=i(e[r],t[r],r);Ni.isUndefined(a)&&i!==l||(n[r]=a)})),n}const ka=e=>{const t=xa({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:a,auth:l}=t;if(t.headers=a=la.from(a),t.url=Bi(wa(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&a.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),Ni.isFormData(n))if(Yi.hasStandardBrowserEnv||Yi.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(Ni.isFunction(n.getHeaders)){const e=n.getHeaders(),t=["content-type","content-length"];Object.entries(e).forEach((e=>{let[n,r]=e;t.includes(n.toLowerCase())&&a.set(n,r)}))}if(Yi.hasStandardBrowserEnv&&(r&&Ni.isFunction(r)&&(r=r(t)),r||!1!==r&&va(t.url))){const e=o&&i&&ya.read(i);e&&a.set(o,e)}return t},Sa="undefined"!==typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){const r=ka(e);let o=r.data;const i=la.from(r.headers).normalize();let a,l,s,u,c,{responseType:d,onUploadProgress:p,onDownloadProgress:h}=r;function f(){u&&u(),c&&c(),r.cancelToken&&r.cancelToken.unsubscribe(a),r.signal&&r.signal.removeEventListener("abort",a)}let m=new XMLHttpRequest;function g(){if(!m)return;const r=la.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders());pa((function(e){t(e),f()}),(function(e){n(e),f()}),{data:d&&"text"!==d&&"json"!==d?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:r,config:e,request:m}),m=null}m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout,"onloadend"in m?m.onloadend=g:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(g)},m.onabort=function(){m&&(n(new $i("Request aborted",$i.ECONNABORTED,e,m)),m=null)},m.onerror=function(t){const r=t&&t.message?t.message:"Network Error",o=new $i(r,$i.ERR_NETWORK,e,m);o.event=t||null,n(o),m=null},m.ontimeout=function(){let t=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const o=r.transitional||Vi;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new $i(t,o.clarifyTimeoutError?$i.ETIMEDOUT:$i.ECONNABORTED,e,m)),m=null},void 0===o&&i.setContentType(null),"setRequestHeader"in m&&Ni.forEach(i.toJSON(),(function(e,t){m.setRequestHeader(t,e)})),Ni.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),d&&"json"!==d&&(m.responseType=r.responseType),h&&([s,c]=ma(h,!0),m.addEventListener("progress",s)),p&&m.upload&&([l,u]=ma(p),m.upload.addEventListener("progress",l),m.upload.addEventListener("loadend",u)),(r.cancelToken||r.signal)&&(a=t=>{m&&(n(!t||t.type?new da(null,e,m):t),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(a),r.signal&&(r.signal.aborted?a():r.signal.addEventListener("abort",a)));const b=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(r.url);b&&-1===Yi.protocols.indexOf(b)?n(new $i("Unsupported protocol "+b+":",$i.ERR_BAD_REQUEST,e)):m.send(o||null)}))},Ca=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n,r=new AbortController;const o=function(e){if(!n){n=!0,a();const t=e instanceof Error?e:this.reason;r.abort(t instanceof $i?t:new da(t instanceof Error?t.message:t))}};let i=t&&setTimeout((()=>{i=null,o(new $i(`timeout ${t} of ms exceeded`,$i.ETIMEDOUT))}),t);const a=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(o):e.removeEventListener("abort",o)})),e=null)};e.forEach((e=>e.addEventListener("abort",o)));const{signal:l}=r;return l.unsubscribe=()=>Ni.asap(a),l}},Ea=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,o=0;for(;o<n;)r=o+t,yield e.slice(o,r),o=r},Na=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},Aa=(e,t,n,r)=>{const o=async function*(e,t){for await(const n of Na(e))yield*Ea(n,t)}(e,t);let i,a=0,l=e=>{i||(i=!0,r&&r(e))};return new ReadableStream({async pull(e){try{const{done:t,value:r}=await o.next();if(t)return l(),void e.close();let i=r.byteLength;if(n){let e=a+=i;n(e)}e.enqueue(new Uint8Array(r))}catch(t){throw l(t),t}},cancel:e=>(l(e),o.return())},{highWaterMark:2})},{isFunction:Ta}=Ni,Pa=(e=>{let{Request:t,Response:n}=e;return{Request:t,Response:n}})(Ni.global),{ReadableStream:$a,TextEncoder:Ra}=Ni.global,ja=function(e){try{for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return!!e(...n)}catch(gt){return!1}},Oa=e=>{e=Ni.merge.call({skipUndefined:!0},Pa,e);const{fetch:t,Request:n,Response:r}=e,o=t?Ta(t):"function"===typeof fetch,i=Ta(n),a=Ta(r);if(!o)return!1;const l=o&&Ta($a),s=o&&("function"===typeof Ra?(u=new Ra,e=>u.encode(e)):async e=>new Uint8Array(await new n(e).arrayBuffer()));var u;const c=i&&l&&ja((()=>{let e=!1;const t=new n(Yi.origin,{body:new $a,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),d=a&&l&&ja((()=>Ni.isReadableStream(new r("").body))),p={stream:d&&(e=>e.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!p[e]&&(p[e]=(t,n)=>{let r=t&&t[e];if(r)return r.call(t);throw new $i(`Response type '${e}' is not supported`,$i.ERR_NOT_SUPPORT,n)})}));const h=async(e,t)=>{const r=Ni.toFiniteNumber(e.getContentLength());return null==r?(async e=>{if(null==e)return 0;if(Ni.isBlob(e))return e.size;if(Ni.isSpecCompliantForm(e)){const t=new n(Yi.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return Ni.isArrayBufferView(e)||Ni.isArrayBuffer(e)?e.byteLength:(Ni.isURLSearchParams(e)&&(e+=""),Ni.isString(e)?(await s(e)).byteLength:void 0)})(t):r};return async e=>{let{url:o,method:a,data:l,signal:s,cancelToken:u,timeout:f,onDownloadProgress:m,onUploadProgress:g,responseType:b,headers:v,withCredentials:y="same-origin",fetchOptions:w}=ka(e),_=t||fetch;b=b?(b+"").toLowerCase():"text";let x=Ca([s,u&&u.toAbortSignal()],f),k=null;const S=x&&x.unsubscribe&&(()=>{x.unsubscribe()});let C;try{if(g&&c&&"get"!==a&&"head"!==a&&0!==(C=await h(v,l))){let e,t=new n(o,{method:"POST",body:l,duplex:"half"});if(Ni.isFormData(l)&&(e=t.headers.get("content-type"))&&v.setContentType(e),t.body){const[e,n]=ga(C,ma(ba(g)));l=Aa(t.body,65536,e,n)}}Ni.isString(y)||(y=y?"include":"omit");const t=i&&"credentials"in n.prototype,s={...w,signal:x,method:a.toUpperCase(),headers:v.normalize().toJSON(),body:l,duplex:"half",credentials:t?y:void 0};k=i&&new n(o,s);let u=await(i?_(k,w):_(o,s));const f=d&&("stream"===b||"response"===b);if(d&&(m||f&&S)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=u[t]}));const t=Ni.toFiniteNumber(u.headers.get("content-length")),[n,o]=m&&ga(t,ma(ba(m),!0))||[];u=new r(Aa(u.body,65536,n,(()=>{o&&o(),S&&S()})),e)}b=b||"text";let E=await p[Ni.findKey(p,b)||"text"](u,e);return!f&&S&&S(),await new Promise(((t,n)=>{pa(t,n,{data:E,headers:la.from(u.headers),status:u.status,statusText:u.statusText,config:e,request:k})}))}catch(E){if(S&&S(),E&&"TypeError"===E.name&&/Load failed|fetch/i.test(E.message))throw Object.assign(new $i("Network Error",$i.ERR_NETWORK,e,k),{cause:E.cause||E});throw $i.from(E,E&&E.code,e,k)}}},za=new Map,La=e=>{let t=e&&e.env||{};const{fetch:n,Request:r,Response:o}=t,i=[r,o,n];let a,l,s=i.length,u=za;for(;s--;)a=i[s],l=u.get(a),void 0===l&&u.set(a,l=s?new Map:Oa(t)),u=l;return l},Fa=(La(),{http:null,xhr:Sa,fetch:{get:La}});Ni.forEach(Fa,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(gt){}Object.defineProperty(e,"adapterName",{value:t})}}));const Ua=e=>`- ${e}`,Da=e=>Ni.isFunction(e)||null===e||!1===e;const Ma={getAdapter:function(e,t){e=Ni.isArray(e)?e:[e];const{length:n}=e;let r,o;const i={};for(let a=0;a<n;a++){let n;if(r=e[a],o=r,!Da(r)&&(o=Fa[(n=String(r)).toLowerCase()],void 0===o))throw new $i(`Unknown adapter '${n}'`);if(o&&(Ni.isFunction(o)||(o=o.get(t))))break;i[n||"#"+a]=o}if(!o){const e=Object.entries(i).map((e=>{let[t,n]=e;return`adapter ${t} `+(!1===n?"is not supported by the environment":"is not available in the build")}));let t=n?e.length>1?"since :\n"+e.map(Ua).join("\n"):" "+Ua(e[0]):"as no adapter specified";throw new $i("There is no suitable adapter to dispatch the request "+t,"ERR_NOT_SUPPORT")}return o},adapters:Fa};function Ia(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new da(null,e)}function Ba(e){Ia(e),e.headers=la.from(e.headers),e.data=sa.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Ma.getAdapter(e.adapter||ea.adapter,e)(e).then((function(t){return Ia(e),t.data=sa.call(e,e.transformResponse,t),t.headers=la.from(t.headers),t}),(function(t){return ua(t)||(Ia(e),t&&t.response&&(t.response.data=sa.call(e,e.transformResponse,t.response),t.response.headers=la.from(t.response.headers))),Promise.reject(t)}))}const Ha="1.13.2",Va={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Va[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Wa={};Va.transitional=function(e,t,n){function r(e,t){return"[Axios v"+Ha+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,i)=>{if(!1===e)throw new $i(r(o," has been removed"+(t?" in "+t:"")),$i.ERR_DEPRECATED);return t&&!Wa[o]&&(Wa[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}},Va.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};const qa={assertOptions:function(e,t,n){if("object"!==typeof e)throw new $i("options must be an object",$i.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],a=t[i];if(a){const t=e[i],n=void 0===t||a(t,i,e);if(!0!==n)throw new $i("option "+i+" must be "+n,$i.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new $i("Unknown option "+i,$i.ERR_BAD_OPTION)}},validators:Va},Ka=qa.validators;class Qa{constructor(e){this.defaults=e||{},this.interceptors={request:new Hi,response:new Hi}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e={};Error.captureStackTrace?Error.captureStackTrace(e):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}catch(gt){}}throw n}}_request(e,t){"string"===typeof e?(t=t||{}).url=e:t=e||{},t=xa(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&qa.assertOptions(n,{silentJSONParsing:Ka.transitional(Ka.boolean),forcedJSONParsing:Ka.transitional(Ka.boolean),clarifyTimeoutError:Ka.transitional(Ka.boolean)},!1),null!=r&&(Ni.isFunction(r)?t.paramsSerializer={serialize:r}:qa.assertOptions(r,{encode:Ka.function,serialize:Ka.function},!0)),void 0!==t.allowAbsoluteUrls||(void 0!==this.defaults.allowAbsoluteUrls?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),qa.assertOptions(t,{baseUrl:Ka.spelling("baseURL"),withXsrfToken:Ka.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let i=o&&Ni.merge(o.common,o[t.method]);o&&Ni.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=la.concat(i,o);const a=[];let l=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(l=l&&e.synchronous,a.unshift(e.fulfilled,e.rejected))}));const s=[];let u;this.interceptors.response.forEach((function(e){s.push(e.fulfilled,e.rejected)}));let c,d=0;if(!l){const e=[Ba.bind(this),void 0];for(e.unshift(...a),e.push(...s),c=e.length,u=Promise.resolve(t);d<c;)u=u.then(e[d++],e[d++]);return u}c=a.length;let p=t;for(;d<c;){const e=a[d++],t=a[d++];try{p=e(p)}catch(h){t.call(this,h);break}}try{u=Ba.call(this,p)}catch(h){return Promise.reject(h)}for(d=0,c=s.length;d<c;)u=u.then(s[d++],s[d++]);return u}getUri(e){return Bi(wa((e=xa(this.defaults,e)).baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}}Ni.forEach(["delete","get","head","options"],(function(e){Qa.prototype[e]=function(t,n){return this.request(xa(n||{},{method:e,url:t,data:(n||{}).data}))}})),Ni.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(xa(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Qa.prototype[e]=t(),Qa.prototype[e+"Form"]=t(!0)}));const Ja=Qa;class Xa{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new da(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;const t=new Xa((function(t){e=t}));return{token:t,cancel:e}}}const Ya=Xa;const Ga={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Ga).forEach((e=>{let[t,n]=e;Ga[n]=t}));const Za=Ga;const el=function e(t){const n=new Ja(t),r=Io(Ja.prototype.request,n);return Ni.extend(r,Ja.prototype,n,{allOwnKeys:!0}),Ni.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(xa(t,n))},r}(ea);el.Axios=Ja,el.CanceledError=da,el.CancelToken=Ya,el.isCancel=ua,el.VERSION=Ha,el.toFormData=Li,el.AxiosError=$i,el.Cancel=el.CanceledError,el.all=function(e){return Promise.all(e)},el.spread=function(e){return function(t){return e.apply(null,t)}},el.isAxiosError=function(e){return Ni.isObject(e)&&!0===e.isAxiosError},el.mergeConfig=xa,el.AxiosHeaders=la,el.formToJSON=e=>Gi(Ni.isHTMLForm(e)?new FormData(e):e),el.getAdapter=Ma.getAdapter,el.HttpStatusCode=Za,el.default=el;const tl=el,nl={container:{fontFamily:"Arial, sans-serif",lineHeight:"1.6",color:"#333",margin:"0 auto",backgroundColor:"#aea49e",backgroundImage:"url(images/background3.png)",backgroundSize:"contain"},header:{textAlign:"center",marginBottom:"40px"},title:{fontSize:"36px",marginBottom:"10px"},subtitle:{fontSize:"20px",color:"#666"},benefitsSection:{marginBottom:"40px"},sectionTitle:{fontSize:"28px",marginBottom:"20px",textAlign:"center"},benefitsGrid:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"20px"},benefit:{flex:"1 1 200px",backgroundColor:"rgb(249, 249, 249, 0.7)",padding:"20px",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0,0,0,0.1)",textAlign:"center"},keyValuesSection:{marginBottom:"40px"},valuesList:{listStyleType:"none",padding:0,fontSize:"18px"},footer:{textAlign:"center",marginTop:"40px"}};const rl=function(){const[e,t]=(0,o.useState)(!1),[n,r]=(0,o.useState)({username:"",password:""}),[i,a]=(0,o.useState)({title:"",description:"",recurring:"",date:(new Date).toLocaleDateString("en-US"),unit:""}),[l,s]=(0,o.useState)(!1),u=ie(),c=e=>{console.log(e.target),console.log(e.target.name),console.log(e.target.value),console.log(n),r({...n,[e.target.name]:e.target.value})},d=()=>{r({username:"",password:""}),t(!1)};return(0,Do.jsxs)("div",{className:"app",children:[(0,Do.jsxs)(Ro,{label:"Maintanance Request",open:l,onSlAfterHide:()=>{a({title:"",description:"",recurring:"",date:(new Date).toLocaleDateString("en-US"),unit:""}),s(!1)},children:[(0,Do.jsx)("div",{style:{padding:"0 1rem"},children:(0,Do.jsx)(Mo,{input:i,setInputs:a})}),(0,Do.jsx)(Zr,{slot:"footer",variant:"default",onClick:()=>d,children:"Cancel"}),(0,Do.jsx)(Zr,{slot:"footer",variant:"primary",onClick:async()=>{try{await tl.post("http://localhost:5000/api/tasks",i),a({title:"",description:"",recurring:"",date:(new Date).toLocaleDateString("en-US"),unit:""}),s(!1)}catch(e){console.error("Error adding item:",e)}},children:"Submit"})]}),(0,Do.jsxs)(Ro,{label:"New User",open:e,onSlAfterHide:d,children:[(0,Do.jsxs)("div",{className:"form-content",children:[(0,Do.jsx)(io,{placeholder:"Email",onSlChange:e=>r({username:e.target.value,password:n.password})}),(0,Do.jsx)(io,{type:"password",placeholder:"Create Password","help-text":"Minimum 8 characters","password-toggle":!0,onSlChange:e=>r({username:n.username,password:e.target.value})})]}),(0,Do.jsx)(Zr,{slot:"footer",variant:"default",onClick:()=>d,children:"Cancel"}),(0,Do.jsx)(Zr,{slot:"footer",variant:"primary",onClick:async()=>{console.log("createUser");try{await tl.post("http://localhost:5000/api/register",n).then((e=>{console.log(e)})),r({username:"",password:""}),t(!1)}catch(e){console.error("Error creating user",e)}},children:"Submit"})]}),(0,Do.jsxs)("header",{className:"app-header",children:[(0,Do.jsx)(Zr,{variant:"primary",onClick:()=>s(!0),children:"Maintenance Request"}),(0,Do.jsxs)("div",{className:"app-header-right",children:[(0,Do.jsx)(io,{value:n.username,name:"username",placeholder:"Username",onSlChange:e=>c(e)}),(0,Do.jsx)(io,{type:"password",name:"password",value:n.password,placeholder:"Password","password-toggle":!0,onSlChange:e=>c(e)}),(0,Do.jsx)(Zr,{variant:"primary",onClick:async e=>{e.preventDefault(),console.log(n);const t=btoa(`${n.username}:${n.password}`);try{await tl.post("http://localhost:5000/api/login",{},{headers:{Authorization:`Basic ${t}`}}).then((e=>{console.log(e),"Authentication successful"===e.data.message&&(r({username:"",password:""}),localStorage.setItem("authToken","your-jwt-token"),u("/propertymanagement"))}))}catch(o){console.error("Error creating user",o),"Authentication failed. User not found."===o.response.data.error&&alert("User not found")}},children:"Login"}),(0,Do.jsx)(Zr,{variant:"default",onClick:()=>t(!0),children:"New User"}),(0,Do.jsx)("img",{slot:"image",src:"./images/LogoSerale.png",alt:"JADU."})]})]}),(0,Do.jsxs)("div",{style:nl.container,children:[(0,Do.jsxs)("header",{style:nl.header,children:[(0,Do.jsx)("h1",{style:nl.title,children:"Welcome to Property Management Portal"}),(0,Do.jsx)("p",{style:nl.subtitle,children:"Stress-free property and maintenance management for everyone (Including Homeowners)"})]}),(0,Do.jsxs)("section",{style:nl.benefitsSection,children:[(0,Do.jsx)("h2",{style:nl.sectionTitle,children:"Services"}),(0,Do.jsxs)("div",{style:nl.benefitsGrid,children:[(0,Do.jsxs)("div",{style:nl.benefit,children:[(0,Do.jsx)("h3",{children:"Submit a Repair Request"}),(0,Do.jsx)("p",{children:"Renters can submit requests and attach information to expedite the process"})]}),(0,Do.jsxs)("div",{style:nl.benefit,children:[(0,Do.jsx)("h3",{children:"Manage Maintenance Requests"}),(0,Do.jsx)("p",{children:"Create an account and have accesss to historical requests, alerts, calendar, reports."})]}),(0,Do.jsxs)("div",{style:nl.benefit,children:[(0,Do.jsx)("h3",{children:"Powered with AI"}),(0,Do.jsx)("p",{children:"On every repair submition we run AI to triage problem, analyze potential solutions, setup process/cost and supplies"})]}),(0,Do.jsxs)("div",{style:nl.benefit,children:[(0,Do.jsx)("h3",{children:"Free Access!!!"}),(0,Do.jsx)("p",{children:"Access all these tools for free. Enjoy!."})]})]})]}),(0,Do.jsxs)("footer",{style:nl.footer,children:[(0,Do.jsx)("p",{children:"Contact us today for a free consultation!"}),(0,Do.jsx)("a",{href:"mailto: admin@seralehousing.com",children:(0,Do.jsx)(Zr,{slot:"footer",variant:"primary",children:"Contact Us"})})]})]}),(0,Do.jsx)("style",{children:"\n  .app {\n    text-align: center;\n    padding: 1vw;\n  }\n  .form-content {\n    text-align: left;\n    padding: '0 1rem';\n}\n\n  .app-header {\n    text-align: right;\n    border-bottom: 1px solid lightgray;\n    gap: 17px;\n    display: flex;\n    flex-direction: column;\n    justify-content: end;\n  }\n\n  @media screen and (min-width: 600px) {\n    .app-header {\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n\n        .app-header-right {\n            text-align: right;\n            gap: 17px;\n            display: flex;\n            flex-direction: row;\n            justify-content: end;\n        }\n    }\n  }\n  sl-dialog {\n    sl-input {\n        margin: 35px 0px;\n      }\n  }\n  \n\n  .app-header-right > img {\n    width: 188px;\n  }\n"})]})},ol={container:{fontFamily:"Arial, sans-serif",padding:"20px",lineHeight:"1.6",color:"#333",maxWidth:"1200px",margin:"0 auto"},header:{textAlign:"center",marginBottom:"40px"},title:{fontSize:"36px",marginBottom:"10px"},subtitle:{fontSize:"20px",color:"#666"},benefitsSection:{marginBottom:"40px"},sectionTitle:{fontSize:"28px",marginBottom:"20px",textAlign:"center"},benefitsGrid:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"20px"},benefit:{flex:"1 1 200px",backgroundColor:"rgb(249, 249, 249, 0.7)",padding:"20px",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0,0,0,0.1)",textAlign:"center",cursor:"pointer"},keyValuesSection:{marginBottom:"40px"},valuesList:{listStyleType:"none",padding:0,fontSize:"18px"},footer:{textAlign:"center",marginTop:"40px"},button:{backgroundColor:"#007BFF",color:"#fff",padding:"12px 24px",border:"none",borderRadius:"4px",fontSize:"18px",cursor:"pointer",marginTop:"20px"}};const il=function(){const e=ie(),t=t=>{console.log(t),e(t)};return(0,Do.jsxs)("div",{className:"app",children:[(0,Do.jsx)("header",{className:"app-header",children:(0,Do.jsx)("img",{slot:"image",src:"./images/LogoSerale.png",alt:"JADU."})}),(0,Do.jsxs)("div",{style:ol.container,children:[(0,Do.jsxs)("header",{style:ol.header,children:[(0,Do.jsx)("h1",{style:ol.title,children:"Welcome to Serale Housing"}),(0,Do.jsx)("p",{style:ol.subtitle,children:"We specialize in Residential Property Managemente and Property Development in the Bay Area"})]}),(0,Do.jsxs)("section",{style:ol.benefitsSection,children:[(0,Do.jsx)("h2",{style:ol.sectionTitle,children:"Make a Selection"}),(0,Do.jsxs)("div",{style:ol.benefitsGrid,children:[(0,Do.jsxs)("div",{style:ol.benefit,onClick:()=>t("/propertydevelopment"),children:[(0,Do.jsx)("h3",{children:"Property Development"}),(0,Do.jsx)("p",{children:"Current, past and future projects. Investement opportunities"})]}),(0,Do.jsxs)("div",{style:ol.benefit,onClick:()=>t("/propertymanagement"),children:[(0,Do.jsx)("h3",{children:"Property Management"}),(0,Do.jsx)("p",{children:"Tenant Portal, Propery Management Portal, Analytics"})]})]})]})]}),(0,Do.jsx)("style",{children:"\n  .app {\n    text-align: center;\n    padding: 1vw;\n  }\n  .form-content {\n    text-align: left;\n    padding: '0 1rem';\n}\n\n  .app-header {\n    text-align: right;\n    border-bottom: 1px solid lightgray;\n    gap: 17px;\n    display: flex;\n    flex-direction: column;\n    justify-content: end;\n  }\n\n  @media screen and (min-width: 600px) {\n    .app-header {\n        display: flex;\n        flex-direction: row;\n    }\n  }\n  sl-dialog {\n    sl-input {\n        margin: 35px 0px;\n      }\n  }\n  \n\n  .app-header > img {\n    width: 188px;\n  }\n"})]})};var al=wt`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible):not([disabled]) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus-visible) {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,ll=0,sl=class extends sr{constructor(){super(...arguments),this.localize=new Mn(this),this.attrId=++ll,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,an`
      <div
        part="base"
        class=${Mr({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?an`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};sl.styles=[In,al],sl.dependencies={"sl-icon-button":wo},Zn([ar(".tab")],sl.prototype,"tab",2),Zn([rr({reflect:!0})],sl.prototype,"panel",2),Zn([rr({type:Boolean,reflect:!0})],sl.prototype,"active",2),Zn([rr({type:Boolean,reflect:!0})],sl.prototype,"closable",2),Zn([rr({type:Boolean,reflect:!0})],sl.prototype,"disabled",2),Zn([rr({type:Number,reflect:!0})],sl.prototype,"tabIndex",2),Zn([Nr("active")],sl.prototype,"handleActiveChange",1),Zn([Nr("disabled")],sl.prototype,"handleDisabledChange",1);sl.define("sl-tab");var ul=Gr({tagName:"sl-tab",elementClass:sl,react:i,events:{onSlClose:"sl-close"},displayName:"SlTab"}),cl=wt`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,dl=wt`
  :host {
    display: contents;
  }
`,pl=class extends sr{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((e=>{this.emit("sl-resize",{detail:{entries:e}})})),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(null!==e){const t=e.assignedElements({flatten:!0});this.observedElements.forEach((e=>this.resizeObserver.unobserve(e))),this.observedElements=[],t.forEach((e=>{this.resizeObserver.observe(e),this.observedElements.push(e)}))}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return an` <slot @slotchange=${this.handleSlotChange}></slot> `}};pl.styles=[In,dl],Zn([rr({type:Boolean,reflect:!0})],pl.prototype,"disabled",2),Zn([Nr("disabled",{waitUntilFirstUpdate:!0})],pl.prototype,"handleDisabledChange",1);var hl=class extends sr{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new Mn(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const e=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver((()=>{this.repositionIndicator(),this.updateScrollControls()})),this.mutationObserver=new MutationObserver((e=>{e.some((e=>!["aria-labelledby","aria-controls"].includes(e.attributeName)))&&setTimeout((()=>this.setAriaLabels())),e.some((e=>"disabled"===e.attributeName))&&this.syncTabsAndPanels()})),this.updateComplete.then((()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then((()=>{new IntersectionObserver(((e,t)=>{var n;e[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab(null!=(n=this.getActiveTab())?n:this.tabs[0],{emitEvents:!1}),t.unobserve(e[0].target))})).observe(this.tabGroup)}))}))}disconnectedCallback(){var e,t;super.disconnectedCallback(),null==(e=this.mutationObserver)||e.disconnect(),this.nav&&(null==(t=this.resizeObserver)||t.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter((e=>"sl-tab-panel"===e.tagName.toLowerCase()))}getActiveTab(){return this.tabs.find((e=>e.active))}handleClick(e){const t=e.target.closest("sl-tab");(null==t?void 0:t.closest("sl-tab-group"))===this&&null!==t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}handleKeyDown(e){const t=e.target.closest("sl-tab");if((null==t?void 0:t.closest("sl-tab-group"))===this&&(["Enter"," "].includes(e.key)&&null!==t&&(this.setActiveTab(t,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const t=this.tabs.find((e=>e.matches(":focus"))),n="rtl"===this.localize.dir();let r=null;if("sl-tab"===(null==t?void 0:t.tagName.toLowerCase())){if("Home"===e.key)r=this.focusableTabs[0];else if("End"===e.key)r=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&e.key===(n?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&"ArrowUp"===e.key){const e=this.tabs.findIndex((e=>e===t));r=this.findNextFocusableTab(e,"backward")}else if(["top","bottom"].includes(this.placement)&&e.key===(n?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&"ArrowDown"===e.key){const e=this.tabs.findIndex((e=>e===t));r=this.findNextFocusableTab(e,"forward")}if(!r)return;r.tabIndex=0,r.focus({preventScroll:!0}),"auto"===this.activation?this.setActiveTab(r,{scrollBehavior:"smooth"}):this.tabs.forEach((e=>{e.tabIndex=e===r?0:-1})),["top","bottom"].includes(this.placement)&&bo(r,this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:"rtl"===this.localize.dir()?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:"rtl"===this.localize.dir()?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t=Yn({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const n=this.activeTab;this.activeTab=e,this.tabs.forEach((e=>{e.active=e===this.activeTab,e.tabIndex=e===this.activeTab?0:-1})),this.panels.forEach((e=>{var t;return e.active=e.name===(null==(t=this.activeTab)?void 0:t.panel)})),this.syncIndicator(),["top","bottom"].includes(this.placement)&&bo(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(n&&this.emit("sl-tab-hide",{detail:{name:n.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach((e=>{const t=this.panels.find((t=>t.name===e.panel));t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))}))}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,n=e.clientHeight,r="rtl"===this.localize.dir(),o=this.getAllTabs(),i=o.slice(0,o.indexOf(e)).reduce(((e,t)=>({left:e.left+t.clientWidth,top:e.top+t.clientHeight})),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=r?-1*i.left+"px":`${i.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${n}px`,this.indicator.style.translate=`0 ${i.top}px`}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter((e=>!e.disabled)),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then((()=>this.updateScrollControls()))}findNextFocusableTab(e,t){let n=null;const r="forward"===t?1:-1;let o=e+r;for(;e<this.tabs.length;){if(n=this.tabs[o]||null,null===n){n="forward"===t?this.focusableTabs[0]:this.focusableTabs[this.focusableTabs.length-1];break}if(!n.disabled)break;o+=r}return n}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return"rtl"===this.localize.dir()?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const t=this.tabs.find((t=>t.panel===e));t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}render(){const e="rtl"===this.localize.dir();return an`
      <div
        part="base"
        class=${Mr({"tab-group":!0,"tab-group--top":"top"===this.placement,"tab-group--bottom":"bottom"===this.placement,"tab-group--start":"start"===this.placement,"tab-group--end":"end"===this.placement,"tab-group--rtl":"rtl"===this.localize.dir(),"tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?an`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${Mr({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${e?"chevron-right":"chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?an`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${Mr({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${e?"chevron-left":"chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};hl.styles=[In,cl],hl.dependencies={"sl-icon-button":wo,"sl-resize-observer":pl},Zn([ar(".tab-group")],hl.prototype,"tabGroup",2),Zn([ar(".tab-group__body")],hl.prototype,"body",2),Zn([ar(".tab-group__nav")],hl.prototype,"nav",2),Zn([ar(".tab-group__indicator")],hl.prototype,"indicator",2),Zn([or()],hl.prototype,"hasScrollControls",2),Zn([or()],hl.prototype,"shouldHideScrollStartButton",2),Zn([or()],hl.prototype,"shouldHideScrollEndButton",2),Zn([rr()],hl.prototype,"placement",2),Zn([rr()],hl.prototype,"activation",2),Zn([rr({attribute:"no-scroll-controls",type:Boolean})],hl.prototype,"noScrollControls",2),Zn([rr({attribute:"fixed-scroll-controls",type:Boolean})],hl.prototype,"fixedScrollControls",2),Zn([function(e){return(t,n)=>{const r="function"==typeof t?t:t[n];Object.assign(r,e)}}({passive:!0})],hl.prototype,"updateScrollButtons",1),Zn([Nr("noScrollControls",{waitUntilFirstUpdate:!0})],hl.prototype,"updateScrollControls",1),Zn([Nr("placement",{waitUntilFirstUpdate:!0})],hl.prototype,"syncIndicator",1);hl.define("sl-tab-group");var fl=Gr({tagName:"sl-tab-group",elementClass:hl,react:i,events:{onSlTabShow:"sl-tab-show",onSlTabHide:"sl-tab-hide"},displayName:"SlTabGroup"}),ml=(e,t)=>{let n=0;return function(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];window.clearTimeout(n),n=window.setTimeout((()=>{e.call(this,...o)}),t)}},gl=(e,t,n)=>{const r=e[t];e[t]=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];r.call(this,...t),n.call(this,r,...t)}};if(!("onscrollend"in window)){const e=new Set,t=new WeakMap,n=t=>{for(const n of t.changedTouches)e.add(n.identifier)},r=t=>{for(const n of t.changedTouches)e.delete(n.identifier)};document.addEventListener("touchstart",n,!0),document.addEventListener("touchend",r,!0),document.addEventListener("touchcancel",r,!0),gl(EventTarget.prototype,"addEventListener",(function(n,r){if("scrollend"!==r)return;const o=ml((()=>{e.size?o():this.dispatchEvent(new Event("scrollend"))}),100);n.call(this,"scroll",o,{passive:!0}),t.set(this,o)})),gl(EventTarget.prototype,"removeEventListener",(function(e,n){if("scrollend"!==n)return;const r=t.get(this);r&&e.call(this,"scroll",r,{passive:!0})}))}var bl=wt`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,vl=0,yl=class extends sr{constructor(){super(...arguments),this.attrId=++vl,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return an`
      <slot
        part="base"
        class=${Mr({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};yl.styles=[In,bl],Zn([rr({reflect:!0})],yl.prototype,"name",2),Zn([rr({type:Boolean,reflect:!0})],yl.prototype,"active",2),Zn([Nr("active")],yl.prototype,"handleActiveChange",1);yl.define("sl-tab-panel");var wl=Gr({tagName:"sl-tab-panel",elementClass:yl,react:i,events:{},displayName:"SlTabPanel"}),_l=wt`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,xl=class extends sr{constructor(){super(...arguments),this.hasSlotController=new vr(this,"footer","header","image")}render(){return an`
      <div
        part="base"
        class=${Mr({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};xl.styles=[In,_l];xl.define("sl-card");var kl=Gr({tagName:"sl-card",elementClass:xl,react:i,events:{},displayName:"SlCard"});const Sl={container:{fontFamily:"Arial, sans-serif",padding:"20px",lineHeight:"1.6",color:"#333",maxWidth:"1200px",margin:"0 auto"},header:{textAlign:"center",marginBottom:"40px"},title:{fontSize:"36px",marginBottom:"10px"},subtitle:{fontSize:"20px",color:"#666"},benefitsSection:{marginBottom:"40px"},sectionTitle:{fontSize:"28px",marginBottom:"20px",textAlign:"center"},benefitsGrid:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"20px"},benefit:{flex:"1 1 200px",backgroundColor:"rgb(249, 249, 249, 0.7)",padding:"20px",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0,0,0,0.1)",textAlign:"center"},keyValuesSection:{marginBottom:"40px"},valuesList:{listStyleType:"none",padding:0,fontSize:"18px"},footer:{textAlign:"center",marginTop:"40px"}},Cl=()=>{const e=(e,t)=>{console.log(e),console.log(t),console.log(e.currentTarget.id)};return(0,Do.jsxs)(Do.Fragment,{children:[(0,Do.jsx)("div",{className:"hero-block",children:(0,Do.jsx)("div",{className:"hero-sub-page",children:(0,Do.jsx)("div",{className:"hero-sub-page__text-content",children:(0,Do.jsx)("div",{className:"hero-sub-page__heading",children:(0,Do.jsx)("div",{className:"feature-text",children:(0,Do.jsxs)("div",{className:"feature-text__inner-wrapper ",children:[(0,Do.jsxs)("div",{className:"feature-text__left",children:[(0,Do.jsx)("div",{className:"eyebrow"}),(0,Do.jsx)("h1",{children:"Multifamily Housing Development"})]}),(0,Do.jsx)("div",{className:"feature-text__right",children:(0,Do.jsx)("div",{className:"feature-text__paragraphs",children:"Feasibility Analysis, Permit Application, Construction, Property Management."})})]})})})})})}),(0,Do.jsx)(kl,{className:"card-overview",children:(0,Do.jsxs)("div",{style:Sl.container,children:[(0,Do.jsx)("header",{style:Sl.header,children:(0,Do.jsx)("p",{style:Sl.subtitle,children:"We help small developers and home owners in the development: from idea conception/feasibility to final inspection and post construction (Property Management)"})}),(0,Do.jsxs)("section",{style:Sl.benefitsSection,children:[(0,Do.jsx)("h2",{style:Sl.sectionTitle,children:"Services"}),(0,Do.jsxs)("div",{style:Sl.benefitsGrid,children:[(0,Do.jsxs)("div",{style:Sl.benefit,children:[(0,Do.jsx)("h3",{children:"Feasibility analysis"}),(0,Do.jsx)("p",{children:"Run analysis and calculate ROI and other metrics"})]}),(0,Do.jsxs)("div",{style:Sl.benefit,children:[(0,Do.jsx)("h3",{children:"Lot split & acquisition"}),(0,Do.jsx)("p",{children:"Use current California laws (ADUs, SB9, SB684, SB1123, SB1211) to increase value and ROI."})]}),(0,Do.jsxs)("div",{style:Sl.benefit,children:[(0,Do.jsx)("h3",{children:"Building design and permit application"}),(0,Do.jsx)("p",{children:"Coordination between stakeholders and building departments is key to get projects approved afficiently"})]}),(0,Do.jsxs)("div",{style:Sl.benefit,children:[(0,Do.jsx)("h3",{children:"Construction"}),(0,Do.jsx)("p",{children:"List of Materials, Contractors, Suppliers"})]})]})]}),(0,Do.jsx)("h2",{children:"Types of Construction"}),(0,Do.jsxs)("div",{slot:"footer",children:[(0,Do.jsxs)(kl,{className:"card-image",id:"DUPLEX + 2 ADUS",onClick:e,children:[(0,Do.jsx)("img",{slot:"image",src:"./images/DUPLEX+2ADU.png",alt:"A kitten walks towards camera on top of pallet."}),(0,Do.jsx)("div",{className:"card-title",children:"DUPLEX + 2 ADUS"})]}),(0,Do.jsxs)(kl,{className:"card-image",id:"TOWNHOMES",onClick:e,children:[(0,Do.jsx)("img",{slot:"image",src:"./images/TOWNHOMES.png",alt:"A kitten walks towards camera on top of pallet."}),(0,Do.jsx)("div",{className:"card-title",children:"TOWNHOMES"})]}),(0,Do.jsxs)(kl,{className:"card-image",id:"JADU",onClick:e,children:[(0,Do.jsx)("img",{slot:"image",src:"./images/JADU.png",alt:"JADU."}),(0,Do.jsx)("div",{className:"card-title",children:"JADU"})]}),(0,Do.jsxs)(kl,{className:"card-image",id:"JADU",onClick:e,children:[(0,Do.jsx)("img",{slot:"image",src:"./images/ADU.png",alt:"A kitten walks towards camera on top of pallet."}),(0,Do.jsx)("div",{className:"card-title",children:"ADU"})]}),(0,Do.jsxs)(kl,{className:"card-image",id:"ADU + JADU",onClick:e,children:[(0,Do.jsx)("img",{slot:"image",src:"./images/ADU+JADU.png",alt:"A kitten walks towards camera on top of pallet."}),(0,Do.jsx)("div",{className:"card-title",children:"ADU + JADU"})]}),(0,Do.jsxs)(kl,{className:"card-image",id:"UNIT + ADU + JADU",onClick:e,children:[(0,Do.jsx)("img",{slot:"image",src:"./images/ADU+JADU+UNIT.png",alt:"A kitten walks towards camera on top of pallet."}),(0,Do.jsx)("div",{className:"card-title",children:"UNIT + ADU + JADU"})]})]})]})}),(0,Do.jsx)("style",{children:'\n  .hero-block {\n    /* change color to shoelace for dark mode */\n    background-color: #aea49e;\n    background-image: url(images/background1.png);\n    background-size: contain;\n  }\n\n  .hero-sub-page {\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    padding-bottom: 0;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    min-height: 50vw;\n    height: 80vh;\n    max-height: 62.5vw;\n}\n.hero-sub-page__text-content {\n    z-index: 3;\n    display: flex;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n}\n\n.hero-sub-page__heading {\n    padding-top: 0;\n    padding-bottom: 0;\n    position: relative;\n    z-index: 2;\n    padding-left: 40px;\n    padding-right: 40px;\n}\n\n.feature-text {\n    text-align: left;\n    height: 100%;\n}\n\n.feature-text__inner-wrapper {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    overflow: visible;\n    text-align: left;\n    display: flex;\n}\n.feature-text__left {\n    text-align: left;\n}\n\n.eyebrow {\n    margin-bottom: 12px;\n    text-align: left;\n    font-family: "Clarkson", Helvetica, sans-serif;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 1.2em;\n    letter-spacing: 0;\n    text-rendering: geometricPrecision;\n    text-transform: uppercase;\n    text-decoration: none;\n    font-size: 14px;\n    -webkit-font-smoothing: antialiased;\n}\n\nh1 {\n    font-size: 5vw;\n    max-width: 8em;\n    text-align: left;\n    margin-bottom: 16px;\n}\n\n.feature-text__right {\n    text-align: left;\n}\n\n.feature-text__paragraphs {\n    text-align: left;\n}\n\n.feature-text__links {\n    text-align: left;\n    position: relative;\n    border-bottom: none;\n    font-family: "Clarkson", Helvetica, sans-serif;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 1.2em;\n    letter-spacing: 0;\n    text-rendering: geometricPrecision;\n    text-transform: uppercase;\n    text-decoration: none;\n    font-size: 2vw;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    margin-top: 24px;\n}\n\n.link {\n    white-space: nowrap;\n    text-align: left;\n}\n\n.link__text {\n    text-align: left;\n}\n\n.hero-sub-page__background-images {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n}\n\n.hero-sub-page__background-image-container {\n    display: block;\n    width: 100%;\n    height: 100%;\n}\n\n\n\n\n  .card-overview {\n    min-width: 300px;\n  }\n\n  .card-overview small {\n    color: var(--sl-color-neutral-500);\n  }\n\n  .card-overview [slot="footer"] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n  }\n  .card-maintitle {\n    font-size: 2vw;\n    text-align: center;\n\n    ul {\n      text-align: left;\n    }\n  }\n  .card-title {\n    text-align: center;\n  }\n  .card-image {\n    min-width: 200px;\n    padding: 20px;\n    max-width: 250px;\n    border: 2px solid var(--sl-color-gray-300);\n    margin: 1vw;\n  }\n\n  .card-image:hover {\n    border: 2px solid var(--sl-color-neutral-1000);\n    box-shadow: 2px 2px 2px var(--sl-color-gray-400);\n    /* cursor: pointer; */\n  }\n'})]})},El=()=>(0,Do.jsxs)(Do.Fragment,{children:[(0,Do.jsxs)("h2",{className:"feature-text__paragraphs",children:["San Jose, CA. 4 Units",(0,Do.jsx)("br",{}),"Multifamily addition. Two story Unit + ADU + JADU"]}),(0,Do.jsx)("h5",{className:"feature-text__paragraphs",children:"Status: Under Construction (100%)"}),(0,Do.jsxs)(kl,{className:"card-image-current-projects",id:"sanjose",children:[(0,Do.jsx)("img",{slot:"image",src:"./images/sanjose.png",alt:"JADU."}),(0,Do.jsx)("div",{className:"card-title",children:"San Jose, CA"})]}),(0,Do.jsxs)("h2",{className:"feature-text__paragraphs",children:["Redwood City, CA. 4 Units ",(0,Do.jsx)("br",{}),"Two story Duplex + 2 ADUs"]}),(0,Do.jsx)("h5",{className:"feature-text__paragraphs",children:"Status: Under Construction (5%)"}),(0,Do.jsxs)(kl,{className:"card-image-current-projects",id:"redwood",children:[(0,Do.jsx)("img",{slot:"image",src:"./images/redwood.png",alt:"JADU."}),(0,Do.jsx)("div",{className:"card-title",children:"Redwood City, CA"})]}),(0,Do.jsxs)("h2",{className:"feature-text__paragraphs",children:["Salinas, CA. 4 Units",(0,Do.jsx)("br",{}),"Multifamily addition. ADU + JADU + Garage Conversion"]}),(0,Do.jsx)("h5",{className:"feature-text__paragraphs",children:"Status: Under Construction (90%)"}),(0,Do.jsxs)(kl,{className:"card-image-current-projects",id:"redwood",children:[(0,Do.jsx)("img",{slot:"image",src:"./images/salinas.png",alt:"JADU."}),(0,Do.jsx)("div",{className:"card-title",children:"Salinas, CA"})]}),(0,Do.jsxs)("h2",{className:"feature-text__paragraphs",children:["Redwood, CA. 6 Units",(0,Do.jsx)("br",{}),"Townhomes 6 Units  Three Stories"]}),(0,Do.jsx)("h5",{className:"feature-text__paragraphs",children:"Status: Under Permit Application (10%)"}),(0,Do.jsxs)(kl,{className:"card-image-current-projects",id:"redwood",children:[(0,Do.jsx)("img",{slot:"image",src:"./images/townhomeredwood.png",alt:"JADU."}),(0,Do.jsx)("div",{className:"card-title",children:"Redwood City, CA"})]}),(0,Do.jsx)("br",{}),(0,Do.jsx)("br",{}),(0,Do.jsx)("h2",{className:"title-centered",children:"Interested in investing in one of the current/next development projects or just want more info?"}),(0,Do.jsxs)("p",{children:["If you're an accredited investor and like the idea of allocating capital for build-to-sell and/or build-to-rent projects in the Bay Are, CA area - send me an ",(0,Do.jsx)("a",{href:"mailto: admin@seralehousing.com",children:"email"})," to begin the conversation!"]}),(0,Do.jsx)("style",{children:"\n.card-image-current-projects {\n    width: 100%;\n    padding: 20px;\n    border: 2px solid var(--sl-color-gray-300);\n    margin: 1vw;\n    margin-bottom: 40px;\n  }\n\n  .card-image-current-projects::part(image) {\n    flex-direction: column;\n  }\n\n  .card-image-current-projects:hover {\n    border: 2px solid var(--sl-color-neutral-1000);\n    box-shadow: 2px 2px 2px var(--sl-color-gray-400);\n    cursor: pointer;\n  }\n  .card-title {\n    text-align: center;\n  }\n\n  .feature-text__paragraphs {\n    text-align: left;\n    margin: 10px;\n}\n\n\n"})]});const Nl=function(){const[e,t]=(0,o.useState)(!1),n=ie(),[r,i]=(0,o.useState)({username:"",password:""}),a=e=>{console.log(e.target),console.log(e.target.name),console.log(e.target.value),console.log(r),i({...r,[e.target.name]:e.target.value})},l=()=>{i({username:"",password:""}),t(!1)};return(0,Do.jsxs)("div",{className:"app",children:[(0,Do.jsxs)(Ro,{label:"New User",open:e,onSlAfterHide:l,children:[(0,Do.jsxs)("div",{className:"form-content",children:[(0,Do.jsx)(io,{placeholder:"Email",onSlChange:e=>i({username:e.target.value,password:r.password})}),(0,Do.jsx)(io,{type:"password",placeholder:"Create Password","help-text":"Minimum 8 characters","password-toggle":!0,onSlChange:e=>i({username:r.username,password:e.target.value})})]}),(0,Do.jsx)(Zr,{slot:"footer",variant:"default",onClick:()=>l,children:"Cancel"}),(0,Do.jsx)(Zr,{slot:"footer",variant:"primary",onClick:async()=>{console.log("createUser")},children:"Submit"})]}),(0,Do.jsxs)("header",{className:"app-header",children:[(0,Do.jsx)(Zr,{variant:"primary",onClick:()=>n("/"),children:"Welcome Page"}),(0,Do.jsxs)("div",{className:"app-header-right",children:[(0,Do.jsx)(io,{value:r.username,name:"username",placeholder:"Username",onSlChange:e=>a(e)}),(0,Do.jsx)(io,{type:"password",name:"password",value:r.password,placeholder:"Password","password-toggle":!0,onSlChange:e=>a(e)}),(0,Do.jsx)(Zr,{variant:"primary",onClick:async e=>{e.preventDefault(),console.log(r),"user"===r.username&&"password"===r.password?(localStorage.setItem("authToken","your-jwt-token"),n("/")):alert("Invalid credentials")},children:"Login"}),(0,Do.jsx)(Zr,{variant:"default",onClick:()=>t(!0),children:"New User"}),(0,Do.jsx)("img",{slot:"image",src:"./images/LogoSerale.png",alt:"JADU."})]})]}),(0,Do.jsxs)(fl,{children:[(0,Do.jsx)(ul,{slot:"nav",panel:"tab-0",children:"Home"}),(0,Do.jsx)(ul,{slot:"nav",panel:"tab-2",children:"Current Projects"}),(0,Do.jsx)(wl,{name:"tab-0",children:(0,Do.jsx)(Cl,{})}),(0,Do.jsx)(wl,{name:"tab-2",children:(0,Do.jsx)(El,{})})]}),(0,Do.jsx)("style",{children:"\n  .app {\n    text-align: center;\n    padding: 1vw;\n  }\n  .form-content {\n    text-align: left;\n    padding: '0 1rem';\n}\n\n  .app-header {\n    text-align: right;\n    border-bottom: 1px solid lightgray;\n    gap: 17px;\n    display: flex;\n    flex-direction: column;\n    justify-content: end;\n  }\n\n  .app-header-right > img {\n    width: 188px;\n  }\n\n  @media screen and (min-width: 600px) {\n    .app-header {\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n\n        .app-header-right {\n          text-align: right;\n          gap: 17px;\n          display: flex;\n          flex-direction: row;\n          justify-content: end;\n      }\n    }\n  }\n  sl-dialog {\n    sl-input {\n        margin: 35px 0px;\n      }\n  }\n\n  sl-tab-group::part(tabs) {\n    --track-width: 5px;\n  }\n\n  sl-tab-panel::part(base) {\n   padding: 50px;\n  }\n\n  .card-image-profile {\n    min-width: 200px;\n    padding: 20px;\n    max-width: 250px;\n    border: 2px solid var(--sl-color-gray-300);\n    margin: 1vw;\n  }\n"})]})};const Al=function(e){let{children:t}=e;return localStorage.getItem("authToken")?t||(0,Do.jsx)(Se,{}):(0,Do.jsx)(ke,{to:"/login",replace:!0})};function Tl(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,"symbol"==typeof(o=function(e){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key))?o:String(o),r)}var o}function Pl(e,t,n){return t&&Tl(e.prototype,t),n&&Tl(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function $l(){return $l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$l.apply(this,arguments)}function Rl(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,jl(e,t)}function jl(e,t){return jl=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},jl(e,t)}function Ol(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function zl(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ll(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return zl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?zl(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var Fl;!function(e){e[e.Init=0]="Init",e[e.Loading=1]="Loading",e[e.Loaded=2]="Loaded",e[e.Rendered=3]="Rendered",e[e.Error=4]="Error"}(Fl||(Fl={}));var Ul,Dl,Ml,Il,Bl,Hl,Vl,Wl={},ql=[],Kl=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Ql(e,t){for(var n in t)e[n]=t[n];return e}function Jl(e){var t=e.parentNode;t&&t.removeChild(e)}function Xl(e,t,n){var r,o,i,a={};for(i in t)"key"==i?r=t[i]:"ref"==i?o=t[i]:a[i]=t[i];if(arguments.length>2&&(a.children=arguments.length>3?Ul.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===a[i]&&(a[i]=e.defaultProps[i]);return Yl(e,a,r,o,null)}function Yl(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++Ml:o};return null==o&&null!=Dl.vnode&&Dl.vnode(i),i}function Gl(e){return e.children}function Zl(e,t){this.props=e,this.context=t}function es(e,t){if(null==t)return e.__?es(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?es(e):null}function ts(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return ts(e)}}function ns(e){(!e.__d&&(e.__d=!0)&&Bl.push(e)&&!rs.__r++||Hl!==Dl.debounceRendering)&&((Hl=Dl.debounceRendering)||setTimeout)(rs)}function rs(){for(var e;rs.__r=Bl.length;)e=Bl.sort((function(e,t){return e.__v.__b-t.__v.__b})),Bl=[],e.some((function(e){var t,n,r,o,i,a;e.__d&&(i=(o=(t=e).__v).__e,(a=t.__P)&&(n=[],(r=Ql({},o)).__v=o.__v+1,ds(a,o,r,t.__n,void 0!==a.ownerSVGElement,null!=o.__h?[i]:null,n,null==i?es(o):i,o.__h),ps(n,o),o.__e!=i&&ts(o)))}))}function os(e,t,n,r,o,i,a,l,s,u){var c,d,p,h,f,m,g,b=r&&r.__k||ql,v=b.length;for(n.__k=[],c=0;c<t.length;c++)if(null!=(h=n.__k[c]=null==(h=t[c])||"boolean"==typeof h?null:"string"==typeof h||"number"==typeof h||"bigint"==typeof h?Yl(null,h,null,null,h):Array.isArray(h)?Yl(Gl,{children:h},null,null,null):h.__b>0?Yl(h.type,h.props,h.key,h.ref?h.ref:null,h.__v):h)){if(h.__=n,h.__b=n.__b+1,null===(p=b[c])||p&&h.key==p.key&&h.type===p.type)b[c]=void 0;else for(d=0;d<v;d++){if((p=b[d])&&h.key==p.key&&h.type===p.type){b[d]=void 0;break}p=null}ds(e,h,p=p||Wl,o,i,a,l,s,u),f=h.__e,(d=h.ref)&&p.ref!=d&&(g||(g=[]),p.ref&&g.push(p.ref,null,h),g.push(d,h.__c||f,h)),null!=f?(null==m&&(m=f),"function"==typeof h.type&&h.__k===p.__k?h.__d=s=is(h,s,e):s=as(e,h,p,b,f,s),"function"==typeof n.type&&(n.__d=s)):s&&p.__e==s&&s.parentNode!=e&&(s=es(p))}for(n.__e=m,c=v;c--;)null!=b[c]&&fs(b[c],b[c]);if(g)for(c=0;c<g.length;c++)hs(g[c],g[++c],g[++c])}function is(e,t,n){for(var r,o=e.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=e,t="function"==typeof r.type?is(r,t,n):as(n,r,r,o,r.__e,t));return t}function as(e,t,n,r,o,i){var a,l,s;if(void 0!==t.__d)a=t.__d,t.__d=void 0;else if(null==n||o!=i||null==o.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(o),a=null;else{for(l=i,s=0;(l=l.nextSibling)&&s<r.length;s+=1)if(l==o)break e;e.insertBefore(o,i),a=i}return void 0!==a?a:o.nextSibling}function ls(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||Kl.test(t)?n:n+"px"}function ss(e,t,n,r,o){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||ls(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||ls(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?cs:us,i):e.removeEventListener(t,i?cs:us,i);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||!1===n&&-1==t.indexOf("-")?e.removeAttribute(t):e.setAttribute(t,n))}}function us(e){this.l[e.type+!1](Dl.event?Dl.event(e):e)}function cs(e){this.l[e.type+!0](Dl.event?Dl.event(e):e)}function ds(e,t,n,r,o,i,a,l,s){var u,c,d,p,h,f,m,g,b,v,y,w,_,x,k,S=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(s=n.__h,l=t.__e=n.__e,t.__h=null,i=[l]),(u=Dl.__b)&&u(t);try{e:if("function"==typeof S){if(g=t.props,b=(u=S.contextType)&&r[u.__c],v=u?b?b.props.value:u.__:r,n.__c?m=(c=t.__c=n.__c).__=c.__E:("prototype"in S&&S.prototype.render?t.__c=c=new S(g,v):(t.__c=c=new Zl(g,v),c.constructor=S,c.render=ms),b&&b.sub(c),c.props=g,c.state||(c.state={}),c.context=v,c.__n=r,d=c.__d=!0,c.__h=[],c._sb=[]),null==c.__s&&(c.__s=c.state),null!=S.getDerivedStateFromProps&&(c.__s==c.state&&(c.__s=Ql({},c.__s)),Ql(c.__s,S.getDerivedStateFromProps(g,c.__s))),p=c.props,h=c.state,d)null==S.getDerivedStateFromProps&&null!=c.componentWillMount&&c.componentWillMount(),null!=c.componentDidMount&&c.__h.push(c.componentDidMount);else{if(null==S.getDerivedStateFromProps&&g!==p&&null!=c.componentWillReceiveProps&&c.componentWillReceiveProps(g,v),!c.__e&&null!=c.shouldComponentUpdate&&!1===c.shouldComponentUpdate(g,c.__s,v)||t.__v===n.__v){for(c.props=g,c.state=c.__s,t.__v!==n.__v&&(c.__d=!1),c.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),y=0;y<c._sb.length;y++)c.__h.push(c._sb[y]);c._sb=[],c.__h.length&&a.push(c);break e}null!=c.componentWillUpdate&&c.componentWillUpdate(g,c.__s,v),null!=c.componentDidUpdate&&c.__h.push((function(){c.componentDidUpdate(p,h,f)}))}if(c.context=v,c.props=g,c.__v=t,c.__P=e,w=Dl.__r,_=0,"prototype"in S&&S.prototype.render){for(c.state=c.__s,c.__d=!1,w&&w(t),u=c.render(c.props,c.state,c.context),x=0;x<c._sb.length;x++)c.__h.push(c._sb[x]);c._sb=[]}else do{c.__d=!1,w&&w(t),u=c.render(c.props,c.state,c.context),c.state=c.__s}while(c.__d&&++_<25);c.state=c.__s,null!=c.getChildContext&&(r=Ql(Ql({},r),c.getChildContext())),d||null==c.getSnapshotBeforeUpdate||(f=c.getSnapshotBeforeUpdate(p,h)),k=null!=u&&u.type===Gl&&null==u.key?u.props.children:u,os(e,Array.isArray(k)?k:[k],t,n,r,o,i,a,l,s),c.base=t.__e,t.__h=null,c.__h.length&&a.push(c),m&&(c.__E=c.__=null),c.__e=!1}else null==i&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=function(e,t,n,r,o,i,a,l){var s,u,c,d=n.props,p=t.props,h=t.type,f=0;if("svg"===h&&(o=!0),null!=i)for(;f<i.length;f++)if((s=i[f])&&"setAttribute"in s==!!h&&(h?s.localName===h:3===s.nodeType)){e=s,i[f]=null;break}if(null==e){if(null===h)return document.createTextNode(p);e=o?document.createElementNS("http://www.w3.org/2000/svg",h):document.createElement(h,p.is&&p),i=null,l=!1}if(null===h)d===p||l&&e.data===p||(e.data=p);else{if(i=i&&Ul.call(e.childNodes),u=(d=n.props||Wl).dangerouslySetInnerHTML,c=p.dangerouslySetInnerHTML,!l){if(null!=i)for(d={},f=0;f<e.attributes.length;f++)d[e.attributes[f].name]=e.attributes[f].value;(c||u)&&(c&&(u&&c.__html==u.__html||c.__html===e.innerHTML)||(e.innerHTML=c&&c.__html||""))}if(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||ss(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||ss(e,i,t[i],n[i],r)}(e,p,d,o,l),c)t.__k=[];else if(f=t.props.children,os(e,Array.isArray(f)?f:[f],t,n,r,o&&"foreignObject"!==h,i,a,i?i[0]:n.__k&&es(n,0),l),null!=i)for(f=i.length;f--;)null!=i[f]&&Jl(i[f]);l||("value"in p&&void 0!==(f=p.value)&&(f!==e.value||"progress"===h&&!f||"option"===h&&f!==d.value)&&ss(e,"value",f,d.value,!1),"checked"in p&&void 0!==(f=p.checked)&&f!==e.checked&&ss(e,"checked",f,d.checked,!1))}return e}(n.__e,t,n,r,o,i,a,s);(u=Dl.diffed)&&u(t)}catch(e){t.__v=null,(s||null!=i)&&(t.__e=l,t.__h=!!s,i[i.indexOf(l)]=null),Dl.__e(e,t,n)}}function ps(e,t){Dl.__c&&Dl.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){Dl.__e(e,t.__v)}}))}function hs(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){Dl.__e(e,n)}}function fs(e,t,n){var r,o;if(Dl.unmount&&Dl.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||hs(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){Dl.__e(e,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&fs(r[o],t,n||"function"!=typeof e.type);n||null==e.__e||Jl(e.__e),e.__=e.__e=e.__d=void 0}function ms(e,t,n){return this.constructor(e,n)}function gs(e,t,n){var r,o,i;Dl.__&&Dl.__(e,t),o=(r="function"==typeof n)?null:n&&n.__k||t.__k,i=[],ds(t,e=(!r&&n||t).__k=Xl(Gl,null,[e]),o||Wl,Wl,void 0!==t.ownerSVGElement,!r&&n?[n]:o?null:t.firstChild?Ul.call(t.childNodes):null,i,!r&&n?n:o?o.__e:t.firstChild,r),ps(i,e)}function bs(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))}Ul=ql.slice,Dl={__e:function(e,t,n,r){for(var o,i,a;t=t.__;)if((o=t.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),a=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),a=o.__d),a)return o.__E=o}catch(t){e=t}throw e}},Ml=0,Il=function(e){return null!=e&&void 0===e.constructor},Zl.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=Ql({},this.state),"function"==typeof e&&(e=e(Ql({},n),this.props)),e&&Ql(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),ns(this))},Zl.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ns(this))},Zl.prototype.render=Gl,Bl=[],rs.__r=0,Vl=0;var vs=function(){function e(e){this._id=void 0,this._id=e||bs()}return Pl(e,[{key:"id",get:function(){return this._id}}]),e}();function ys(e){return Xl(e.parentElement||"span",{dangerouslySetInnerHTML:{__html:e.content}})}function ws(e,t){return Xl(ys,{content:e,parentElement:t})}var _s,xs=function(e){function t(t){var n;return(n=e.call(this)||this).data=void 0,n.update(t),n}Rl(t,e);var n=t.prototype;return n.cast=function(e){return e instanceof HTMLElement?ws(e.outerHTML):e},n.update=function(e){return this.data=this.cast(e),this},t}(vs),ks=function(e){function t(t){var n;return(n=e.call(this)||this)._cells=void 0,n.cells=t||[],n}Rl(t,e);var n=t.prototype;return n.cell=function(e){return this._cells[e]},n.toArray=function(){return this.cells.map((function(e){return e.data}))},t.fromCells=function(e){return new t(e.map((function(e){return new xs(e.data)})))},Pl(t,[{key:"cells",get:function(){return this._cells},set:function(e){this._cells=e}},{key:"length",get:function(){return this.cells.length}}]),t}(vs),Ss=function(e){function t(t){var n;return(n=e.call(this)||this)._rows=void 0,n._length=void 0,n.rows=t instanceof Array?t:t instanceof ks?[t]:[],n}return Rl(t,e),t.prototype.toArray=function(){return this.rows.map((function(e){return e.toArray()}))},t.fromRows=function(e){return new t(e.map((function(e){return ks.fromCells(e.cells)})))},t.fromArray=function(e){return new t((e=function(e){return!e[0]||e[0]instanceof Array?e:[e]}(e)).map((function(e){return new ks(e.map((function(e){return new xs(e)})))})))},Pl(t,[{key:"rows",get:function(){return this._rows},set:function(e){this._rows=e}},{key:"length",get:function(){return this._length||this.rows.length},set:function(e){this._length=e}}]),t}(vs),Cs=function(){function e(){this.callbacks=void 0}var t=e.prototype;return t.init=function(e){this.callbacks||(this.callbacks={}),e&&!this.callbacks[e]&&(this.callbacks[e]=[])},t.listeners=function(){return this.callbacks},t.on=function(e,t){return this.init(e),this.callbacks[e].push(t),this},t.off=function(e,t){var n=e;return this.init(),this.callbacks[n]&&0!==this.callbacks[n].length?(this.callbacks[n]=this.callbacks[n].filter((function(e){return e!=t})),this):this},t.emit=function(e){var t=arguments,n=e;return this.init(n),this.callbacks[n].length>0&&(this.callbacks[n].forEach((function(e){return e.apply(void 0,[].slice.call(t,1))})),!0)},e}();function Es(e,t){if(typeof e!=typeof t)return!1;if(null===e&&null===t)return!0;if("object"!=typeof e)return e===t;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!Es(e[n],t[n]))return!1;return!0}if(e.hasOwnProperty("constructor")&&t.hasOwnProperty("constructor")&&e.hasOwnProperty("props")&&t.hasOwnProperty("props")&&e.hasOwnProperty("key")&&t.hasOwnProperty("key")&&e.hasOwnProperty("ref")&&t.hasOwnProperty("ref")&&e.hasOwnProperty("type")&&t.hasOwnProperty("type"))return Es(e.props,t.props);var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(var i=0,a=r;i<a.length;i++){var l=a[i];if(!t.hasOwnProperty(l)||!Es(e[l],t[l]))return!1}return!0}!function(e){e[e.Initiator=0]="Initiator",e[e.ServerFilter=1]="ServerFilter",e[e.ServerSort=2]="ServerSort",e[e.ServerLimit=3]="ServerLimit",e[e.Extractor=4]="Extractor",e[e.Transformer=5]="Transformer",e[e.Filter=6]="Filter",e[e.Sort=7]="Sort",e[e.Limit=8]="Limit"}(_s||(_s={}));var Ns=function(e){function t(t){var n;return(n=e.call(this)||this).id=void 0,n._props=void 0,n._props={},n.id=bs(),t&&n.setProps(t),n}Rl(t,e);var n=t.prototype;return n.process=function(){var e=[].slice.call(arguments);this.validateProps instanceof Function&&this.validateProps.apply(this,e),this.emit.apply(this,["beforeProcess"].concat(e));var t=this._process.apply(this,e);return this.emit.apply(this,["afterProcess"].concat(e)),t},n.setProps=function(e){var t=$l({},this._props,e);return Es(t,this._props)||(this._props=t,this.emit("propsUpdated",this)),this},Pl(t,[{key:"props",get:function(){return this._props}}]),t}(Cs),As=function(e){function t(){return e.apply(this,arguments)||this}return Rl(t,e),t.prototype._process=function(e){return this.props.keyword?(t=String(this.props.keyword).trim(),n=this.props.columns,r=this.props.ignoreHiddenColumns,o=e,i=this.props.selector,t=t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),new Ss(o.rows.filter((function(e,o){return e.cells.some((function(e,a){if(!e)return!1;if(r&&n&&n[a]&&"object"==typeof n[a]&&n[a].hidden)return!1;var l="";if("function"==typeof i)l=i(e.data,o,a);else if("object"==typeof e.data){var s=e.data;s&&s.props&&s.props.content&&(l=s.props.content)}else l=String(e.data);return new RegExp(t,"gi").test(l)}))})))):e;var t,n,r,o,i},Pl(t,[{key:"type",get:function(){return _s.Filter}}]),t}(Ns);function Ts(){return"gridjs"+[].slice.call(arguments).reduce((function(e,t){return e+"-"+t}),"")}function Ps(){return[].slice.call(arguments).map((function(e){return e?e.toString():""})).filter((function(e){return e})).reduce((function(e,t){return(e||"")+" "+t}),"").trim()}var $s,Rs,js,Os,zs=function(e){function t(){return e.apply(this,arguments)||this}return Rl(t,e),t.prototype._process=function(e){if(!this.props.keyword)return e;var t={};return this.props.url&&(t.url=this.props.url(e.url,this.props.keyword)),this.props.body&&(t.body=this.props.body(e.body,this.props.keyword)),$l({},e,t)},Pl(t,[{key:"type",get:function(){return _s.ServerFilter}}]),t}(Ns),Ls=0,Fs=[],Us=[],Ds=Dl.__b,Ms=Dl.__r,Is=Dl.diffed,Bs=Dl.__c,Hs=Dl.unmount;function Vs(e,t){Dl.__h&&Dl.__h(Rs,e,Ls||t),Ls=0;var n=Rs.__H||(Rs.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:Us}),n.__[e]}function Ws(e){return Ls=1,function(e,t){var n=Vs($s++,2);if(n.t=e,!n.__c&&(n.__=[tu(void 0,t),function(e){var t=n.__N?n.__N[0]:n.__[0],r=n.t(t,e);t!==r&&(n.__N=[r,n.__[1]],n.__c.setState({}))}],n.__c=Rs,!Rs.u)){Rs.u=!0;var r=Rs.shouldComponentUpdate;Rs.shouldComponentUpdate=function(e,t,o){if(!n.__c.__H)return!0;var i=n.__c.__H.__.filter((function(e){return e.__c}));if(i.every((function(e){return!e.__N})))return!r||r.call(this,e,t,o);var a=!1;return i.forEach((function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(a=!0)}})),!(!a&&n.__c.props===e)&&(!r||r.call(this,e,t,o))}}return n.__N||n.__}(tu,e)}function qs(e,t){var n=Vs($s++,3);!Dl.__s&&eu(n.__H,t)&&(n.__=e,n.i=t,Rs.__H.__h.push(n))}function Ks(e){return Ls=5,Qs((function(){return{current:e}}),[])}function Qs(e,t){var n=Vs($s++,7);return eu(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function Js(){for(var e;e=Fs.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Gs),e.__H.__h.forEach(Zs),e.__H.__h=[]}catch(yt){e.__H.__h=[],Dl.__e(yt,e.__v)}}Dl.__b=function(e){Rs=null,Ds&&Ds(e)},Dl.__r=function(e){Ms&&Ms(e),$s=0;var t=(Rs=e.__c).__H;t&&(js===Rs?(t.__h=[],Rs.__h=[],t.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=Us,e.__N=e.i=void 0}))):(t.__h.forEach(Gs),t.__h.forEach(Zs),t.__h=[])),js=Rs},Dl.diffed=function(e){Is&&Is(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(1!==Fs.push(t)&&Os===Dl.requestAnimationFrame||((Os=Dl.requestAnimationFrame)||Ys)(Js)),t.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==Us&&(e.__=e.__V),e.i=void 0,e.__V=Us}))),js=Rs=null},Dl.__c=function(e,t){t.some((function(e){try{e.__h.forEach(Gs),e.__h=e.__h.filter((function(e){return!e.__||Zs(e)}))}catch(gt){t.some((function(e){e.__h&&(e.__h=[])})),t=[],Dl.__e(gt,e.__v)}})),Bs&&Bs(e,t)},Dl.unmount=function(e){Hs&&Hs(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach((function(e){try{Gs(e)}catch(e){t=e}})),n.__H=void 0,t&&Dl.__e(t,n.__v))};var Xs="function"==typeof requestAnimationFrame;function Ys(e){var t,n=function(){clearTimeout(r),Xs&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);Xs&&(t=requestAnimationFrame(n))}function Gs(e){var t=Rs,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),Rs=t}function Zs(e){var t=Rs;e.__c=e.__(),Rs=t}function eu(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function tu(e,t){return"function"==typeof t?t(e):t}function nu(){return function(e){var t=Rs.context[e.__c],n=Vs($s++,9);return n.c=e,t?(null==n.__&&(n.__=!0,t.sub(Rs)),t.props.value):e.__}(Fu)}var ru={search:{placeholder:"Type a keyword..."},sort:{sortAsc:"Sort column ascending",sortDesc:"Sort column descending"},pagination:{previous:"Previous",next:"Next",navigate:function(e,t){return"Page "+e+" of "+t},page:function(e){return"Page "+e},showing:"Showing",of:"of",to:"to",results:"results"},loading:"Loading...",noRecordsFound:"No matching records found",error:"An error happened while fetching the data"},ou=function(){function e(e){this._language=void 0,this._defaultLanguage=void 0,this._language=e,this._defaultLanguage=ru}var t=e.prototype;return t.getString=function(e,t){if(!t||!e)return null;var n=e.split("."),r=n[0];if(t[r]){var o=t[r];return"string"==typeof o?function(){return o}:"function"==typeof o?o:this.getString(n.slice(1).join("."),o)}return null},t.translate=function(e){var t;return(t=this.getString(e,this._language)||this.getString(e,this._defaultLanguage))?t.apply(void 0,[].slice.call(arguments,1)):e},e}();function iu(){var e=nu();return function(t){var n;return(n=e.translator).translate.apply(n,[t].concat([].slice.call(arguments,1)))}}var au=function(e){return function(t){return $l({},t,{search:{keyword:e}})}};function lu(){return nu().store}function su(e){var t=lu(),n=Ws(e(t.getState())),r=n[0],o=n[1];return qs((function(){return t.subscribe((function(){var n=e(t.getState());r!==n&&o(n)}))}),[]),r}function uu(){var e,t=Ws(void 0),n=t[0],r=t[1],o=nu(),i=o.search,a=iu(),l=lu().dispatch,s=su((function(e){return e.search}));qs((function(){n&&n.setProps({keyword:null==s?void 0:s.keyword})}),[s,n]),qs((function(){r(i.server?new zs({keyword:i.keyword,url:i.server.url,body:i.server.body}):new As({keyword:i.keyword,columns:o.header&&o.header.columns,ignoreHiddenColumns:i.ignoreHiddenColumns||void 0===i.ignoreHiddenColumns,selector:i.selector})),i.keyword&&l(au(i.keyword))}),[i]),qs((function(){if(n)return o.pipeline.register(n),function(){return o.pipeline.unregister(n)}}),[o,n]);var u,c,d,p=function(e,t){return Ls=8,Qs((function(){return e}),t)}((u=function(e){e.target instanceof HTMLInputElement&&l(au(e.target.value))},c=n instanceof zs?i.debounceTimeout||250:0,function(){var e=arguments;return new Promise((function(t){d&&clearTimeout(d),d=setTimeout((function(){return t(u.apply(void 0,[].slice.call(e)))}),c)}))}),[i,n]);return Xl("div",{className:Ts(Ps("search",null==(e=o.className)?void 0:e.search))},Xl("input",{type:"search",placeholder:a("search.placeholder"),"aria-label":a("search.placeholder"),onInput:p,className:Ps(Ts("input"),Ts("search","input")),defaultValue:(null==s?void 0:s.keyword)||""}))}var cu=function(e){function t(){return e.apply(this,arguments)||this}Rl(t,e);var n=t.prototype;return n.validateProps=function(){if(isNaN(Number(this.props.limit))||isNaN(Number(this.props.page)))throw Error("Invalid parameters passed")},n._process=function(e){var t=this.props.page;return new Ss(e.rows.slice(t*this.props.limit,(t+1)*this.props.limit))},Pl(t,[{key:"type",get:function(){return _s.Limit}}]),t}(Ns),du=function(e){function t(){return e.apply(this,arguments)||this}return Rl(t,e),t.prototype._process=function(e){var t={};return this.props.url&&(t.url=this.props.url(e.url,this.props.page,this.props.limit)),this.props.body&&(t.body=this.props.body(e.body,this.props.page,this.props.limit)),$l({},e,t)},Pl(t,[{key:"type",get:function(){return _s.ServerLimit}}]),t}(Ns);function pu(){var e=nu(),t=e.pagination,n=t.server,r=t.summary,o=void 0===r||r,i=t.nextButton,a=void 0===i||i,l=t.prevButton,s=void 0===l||l,u=t.buttonsCount,c=void 0===u?3:u,d=t.limit,p=void 0===d?10:d,h=t.page,f=void 0===h?0:h,m=t.resetPageOnUpdate,g=void 0===m||m,b=Ks(null),v=Ws(f),y=v[0],w=v[1],_=Ws(0),x=_[0],k=_[1],S=iu();qs((function(){return n?(b.current=new du({limit:p,page:y,url:n.url,body:n.body}),e.pipeline.register(b.current)):(b.current=new cu({limit:p,page:y}),e.pipeline.register(b.current)),b.current instanceof du?e.pipeline.on("afterProcess",(function(e){return k(e.length)})):b.current instanceof cu&&b.current.on("beforeProcess",(function(e){return k(e.length)})),e.pipeline.on("updated",C),e.pipeline.on("error",(function(){k(0),w(0)})),function(){e.pipeline.unregister(b.current),e.pipeline.off("updated",C)}}),[]);var C=function(e){g&&e!==b.current&&(w(0),0!==b.current.props.page&&b.current.setProps({page:0}))},E=function(){return Math.ceil(x/p)},N=function(e){if(e>=E()||e<0||e===y)return null;w(e),b.current.setProps({page:e})};return Xl("div",{className:Ps(Ts("pagination"),e.className.pagination)},Xl(Gl,null,o&&x>0&&Xl("div",{role:"status","aria-live":"polite",className:Ps(Ts("summary"),e.className.paginationSummary),title:S("pagination.navigate",y+1,E())},S("pagination.showing")," ",Xl("b",null,S(""+(y*p+1)))," ",S("pagination.to")," ",Xl("b",null,S(""+Math.min((y+1)*p,x)))," ",S("pagination.of")," ",Xl("b",null,S(""+x))," ",S("pagination.results"))),Xl("div",{className:Ts("pages")},s&&Xl("button",{tabIndex:0,role:"button",disabled:0===y,onClick:function(){return N(y-1)},title:S("pagination.previous"),"aria-label":S("pagination.previous"),className:Ps(e.className.paginationButton,e.className.paginationButtonPrev)},S("pagination.previous")),function(){if(c<=0)return null;var t=Math.min(E(),c),n=Math.min(y,Math.floor(t/2));return y+Math.floor(t/2)>=E()&&(n=t-(E()-y)),Xl(Gl,null,E()>t&&y-n>0&&Xl(Gl,null,Xl("button",{tabIndex:0,role:"button",onClick:function(){return N(0)},title:S("pagination.firstPage"),"aria-label":S("pagination.firstPage"),className:e.className.paginationButton},S("1")),Xl("button",{tabIndex:-1,className:Ps(Ts("spread"),e.className.paginationButton)},"...")),Array.from(Array(t).keys()).map((function(e){return y+(e-n)})).map((function(t){return Xl("button",{tabIndex:0,role:"button",onClick:function(){return N(t)},className:Ps(y===t?Ps(Ts("currentPage"),e.className.paginationButtonCurrent):null,e.className.paginationButton),title:S("pagination.page",t+1),"aria-label":S("pagination.page",t+1)},S(""+(t+1)))})),E()>t&&E()>y+n+1&&Xl(Gl,null,Xl("button",{tabIndex:-1,className:Ps(Ts("spread"),e.className.paginationButton)},"..."),Xl("button",{tabIndex:0,role:"button",onClick:function(){return N(E()-1)},title:S("pagination.page",E()),"aria-label":S("pagination.page",E()),className:e.className.paginationButton},S(""+E()))))}(),a&&Xl("button",{tabIndex:0,role:"button",disabled:E()===y+1||0===E(),onClick:function(){return N(y+1)},title:S("pagination.next"),"aria-label":S("pagination.next"),className:Ps(e.className.paginationButton,e.className.paginationButtonNext)},S("pagination.next"))))}function hu(e,t){return"string"==typeof e?e.indexOf("%")>-1?t/100*parseInt(e,10):parseInt(e,10):e}function fu(e){return e?Math.floor(e)+"px":""}function mu(e){var t=e.tableRef.cloneNode(!0);return t.style.position="absolute",t.style.width="100%",t.style.zIndex="-2147483640",t.style.visibility="hidden",Xl("div",{ref:function(e){e&&e.appendChild(t)}})}function gu(e){if(!e)return"";var t=e.split(" ");return 1===t.length&&/([a-z][A-Z])+/g.test(e)?e:t.map((function(e,t){return 0==t?e.toLowerCase():e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()})).join("")}var bu,vu=new(function(){function e(){}var t=e.prototype;return t.format=function(e,t){return"[Grid.js] ["+t.toUpperCase()+"]: "+e},t.error=function(e,t){void 0===t&&(t=!1);var n=this.format(e,"error");if(t)throw Error(n);console.error(n)},t.warn=function(e){console.warn(this.format(e,"warn"))},t.info=function(e){console.info(this.format(e,"info"))},e}());!function(e){e[e.Header=0]="Header",e[e.Footer=1]="Footer",e[e.Cell=2]="Cell"}(bu||(bu={}));var yu=function(){function e(){this.plugins=void 0,this.plugins=[]}var t=e.prototype;return t.get=function(e){return this.plugins.find((function(t){return t.id===e}))},t.add=function(e){return e.id?this.get(e.id)?(vu.error("Duplicate plugin ID: "+e.id),this):(this.plugins.push(e),this):(vu.error("Plugin ID cannot be empty"),this)},t.remove=function(e){var t=this.get(e);return t&&this.plugins.splice(this.plugins.indexOf(t),1),this},t.list=function(e){return(null!=e||null!=e?this.plugins.filter((function(t){return t.position===e})):this.plugins).sort((function(e,t){return e.order&&t.order?e.order-t.order:1}))},e}();function wu(e){var t=this,n=nu();if(e.pluginId){var r=n.plugin.get(e.pluginId);return r?Xl(Gl,{},Xl(r.component,$l({plugin:r},e.props))):null}return void 0!==e.position?Xl(Gl,{},n.plugin.list(e.position).map((function(e){return Xl(e.component,$l({plugin:e},t.props.props))}))):null}var _u=function(e){function t(){var t;return(t=e.call(this)||this)._columns=void 0,t._columns=[],t}Rl(t,e);var n=t.prototype;return n.adjustWidth=function(e,n,r){var o=e.container,i=e.autoWidth;if(!o)return this;var a=o.clientWidth,l={};n.current&&i&&(gs(Xl(mu,{tableRef:n.current}),r.current),l=function(e){var t=e.querySelector("table");if(!t)return{};var n=t.className,r=t.style.cssText;t.className=n+" "+Ts("shadowTable"),t.style.tableLayout="auto",t.style.width="auto",t.style.padding="0",t.style.margin="0",t.style.border="none",t.style.outline="none";var o=Array.from(t.parentNode.querySelectorAll("thead th")).reduce((function(e,t){var n;return t.style.width=t.clientWidth+"px",$l(((n={})[t.getAttribute("data-column-id")]={minWidth:t.clientWidth},n),e)}),{});return t.className=n,t.style.cssText=r,t.style.tableLayout="auto",Array.from(t.parentNode.querySelectorAll("thead th")).reduce((function(e,t){return e[t.getAttribute("data-column-id")].width=t.clientWidth,e}),o)}(r.current));for(var s,u=Ll(t.tabularFormat(this.columns).reduce((function(e,t){return e.concat(t)}),[]));!(s=u()).done;){var c=s.value;c.columns&&c.columns.length>0||(!c.width&&i?c.id in l&&(c.width=fu(l[c.id].width),c.minWidth=fu(l[c.id].minWidth)):c.width=fu(hu(c.width,a)))}return n.current&&i&&gs(null,r.current),this},n.setSort=function(e,t){for(var n,r=Ll(t||this.columns||[]);!(n=r()).done;){var o=n.value;o.columns&&o.columns.length>0?o.sort=void 0:void 0===o.sort&&e?o.sort={}:o.sort?"object"==typeof o.sort&&(o.sort=$l({},o.sort)):o.sort=void 0,o.columns&&this.setSort(e,o.columns)}},n.setResizable=function(e,t){for(var n,r=Ll(t||this.columns||[]);!(n=r()).done;){var o=n.value;void 0===o.resizable&&(o.resizable=e),o.columns&&this.setResizable(e,o.columns)}},n.setID=function(e){for(var t,n=Ll(e||this.columns||[]);!(t=n()).done;){var r=t.value;r.id||"string"!=typeof r.name||(r.id=gu(r.name)),r.id||vu.error('Could not find a valid ID for one of the columns. Make sure a valid "id" is set for all columns.'),r.columns&&this.setID(r.columns)}},n.populatePlugins=function(e,t){for(var n,r=Ll(t);!(n=r()).done;){var o=n.value;void 0!==o.plugin&&e.add($l({id:o.id},o.plugin,{position:bu.Cell}))}},t.fromColumns=function(e){for(var n,r=new t,o=Ll(e);!(n=o()).done;){var i=n.value;if("string"==typeof i||Il(i))r.columns.push({name:i});else if("object"==typeof i){var a=i;a.columns&&(a.columns=t.fromColumns(a.columns).columns),"object"==typeof a.plugin&&void 0===a.data&&(a.data=null),r.columns.push(i)}}return r},t.createFromConfig=function(e){var n=new t;return e.from?n.columns=t.fromHTMLTable(e.from).columns:e.columns?n.columns=t.fromColumns(e.columns).columns:!e.data||"object"!=typeof e.data[0]||e.data[0]instanceof Array||(n.columns=Object.keys(e.data[0]).map((function(e){return{name:e}}))),n.columns.length?(n.setID(),n.setSort(e.sort),n.setResizable(e.resizable),n.populatePlugins(e.plugin,n.columns),n):null},t.fromHTMLTable=function(e){for(var n,r=new t,o=Ll(e.querySelector("thead").querySelectorAll("th"));!(n=o()).done;){var i=n.value;r.columns.push({name:i.innerHTML,width:i.width})}return r},t.tabularFormat=function(e){var t=[],n=e||[],r=[];if(n&&n.length){t.push(n);for(var o,i=Ll(n);!(o=i()).done;){var a=o.value;a.columns&&a.columns.length&&(r=r.concat(a.columns))}r.length&&(t=t.concat(this.tabularFormat(r)))}return t},t.leafColumns=function(e){var t=[],n=e||[];if(n&&n.length)for(var r,o=Ll(n);!(r=o()).done;){var i=r.value;i.columns&&0!==i.columns.length||t.push(i),i.columns&&(t=t.concat(this.leafColumns(i.columns)))}return t},t.maximumDepth=function(e){return this.tabularFormat([e]).length-1},Pl(t,[{key:"columns",get:function(){return this._columns},set:function(e){this._columns=e}},{key:"visibleColumns",get:function(){return this._columns.filter((function(e){return!e.hidden}))}}]),t}(vs),xu=function(){},ku=function(e){function t(t){var n;return(n=e.call(this)||this).data=void 0,n.set(t),n}Rl(t,e);var n=t.prototype;return n.get=function(){try{return Promise.resolve(this.data()).then((function(e){return{data:e,total:e.length}}))}catch(e){return Promise.reject(e)}},n.set=function(e){return e instanceof Array?this.data=function(){return e}:e instanceof Function&&(this.data=e),this},t}(xu),Su=function(e){function t(t){var n;return(n=e.call(this)||this).options=void 0,n.options=t,n}Rl(t,e);var n=t.prototype;return n.handler=function(e){return"function"==typeof this.options.handle?this.options.handle(e):e.ok?e.json():(vu.error("Could not fetch data: "+e.status+" - "+e.statusText,!0),null)},n.get=function(e){var t=$l({},this.options,e);return"function"==typeof t.data?t.data(t):fetch(t.url,t).then(this.handler.bind(this)).then((function(e){return{data:t.then(e),total:"function"==typeof t.total?t.total(e):void 0}}))},t}(xu),Cu=function(){function e(){}return e.createFromConfig=function(e){var t=null;return e.data&&(t=new ku(e.data)),e.from&&(t=new ku(this.tableElementToArray(e.from)),e.from.style.display="none"),e.server&&(t=new Su(e.server)),t||vu.error("Could not determine the storage type",!0),t},e.tableElementToArray=function(e){for(var t,n,r=[],o=Ll(e.querySelector("tbody").querySelectorAll("tr"));!(t=o()).done;){for(var i,a=[],l=Ll(t.value.querySelectorAll("td"));!(i=l()).done;){var s=i.value;1===s.childNodes.length&&s.childNodes[0].nodeType===Node.TEXT_NODE?a.push((n=s.innerHTML,(new DOMParser).parseFromString(n,"text/html").documentElement.textContent)):a.push(ws(s.innerHTML))}r.push(a)}return r},e}(),Eu="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function Nu(e,t,n){if(!e.s){if(n instanceof Au){if(!n.s)return void(n.o=Nu.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(Nu.bind(null,e,t),Nu.bind(null,e,2));e.s=t,e.v=n;var r=e.o;r&&r(e)}}var Au=function(){function e(){}return e.prototype.then=function(t,n){var r=new e,o=this.s;if(o){var i=1&o?t:n;if(i){try{Nu(r,1,i(this.v))}catch(e){Nu(r,2,e)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?Nu(r,1,t?t(o):o):n?Nu(r,1,n(o)):Nu(r,2,o)}catch(e){Nu(r,2,e)}},r},e}();function Tu(e){return e instanceof Au&&1&e.s}var Pu=function(e){function t(t){var n;return(n=e.call(this)||this)._steps=new Map,n.cache=new Map,n.lastProcessorIndexUpdated=-1,t&&t.forEach((function(e){return n.register(e)})),n}Rl(t,e);var n=t.prototype;return n.clearCache=function(){this.cache=new Map,this.lastProcessorIndexUpdated=-1},n.register=function(e,t){if(void 0===t&&(t=null),!e)throw Error("Processor is not defined");if(null===e.type)throw Error("Processor type is not defined");if(this.findProcessorIndexByID(e.id)>-1)throw Error("Processor ID "+e.id+" is already defined");return e.on("propsUpdated",this.processorPropsUpdated.bind(this)),this.addProcessorByPriority(e,t),this.afterRegistered(e),e},n.tryRegister=function(e,t){void 0===t&&(t=null);try{return this.register(e,t)}catch(e){}},n.unregister=function(e){if(e&&-1!==this.findProcessorIndexByID(e.id)){var t=this._steps.get(e.type);t&&t.length&&(this._steps.set(e.type,t.filter((function(t){return t!=e}))),this.emit("updated",e))}},n.addProcessorByPriority=function(e,t){var n=this._steps.get(e.type);if(!n){var r=[];this._steps.set(e.type,r),n=r}if(null===t||t<0)n.push(e);else if(n[t]){var o=n.slice(0,t-1),i=n.slice(t+1);this._steps.set(e.type,o.concat(e).concat(i))}else n[t]=e},n.getStepsByType=function(e){return this.steps.filter((function(t){return t.type===e}))},n.getSortedProcessorTypes=function(){return Object.keys(_s).filter((function(e){return!isNaN(Number(e))})).map((function(e){return Number(e)}))},n.process=function(e){try{var t=function(e){return n.lastProcessorIndexUpdated=o.length,n.emit("afterProcess",i),i},n=this,r=n.lastProcessorIndexUpdated,o=n.steps,i=e,a=function(e,t){try{var a=function(e,t){if("function"==typeof e[Eu]){var n,r,o,i=e[Eu]();if(function e(a){try{for(;!(n=i.next()).done;)if((a=t(n.value))&&a.then){if(!Tu(a))return void a.then(e,o||(o=Nu.bind(null,r=new Au,2)));a=a.v}r?Nu(r,1,a):r=a}catch(e){Nu(r||(r=new Au),2,e)}}(),i.return){var a=function(e){try{n.done||i.return()}catch(e){}return e};if(r&&r.then)return r.then(a,(function(e){throw a(e)}));a()}return r}if(!("length"in e))throw new TypeError("Object is not iterable");for(var l=[],s=0;s<e.length;s++)l.push(e[s]);return function(e,t){var n,r,o=-1;return function i(a){try{for(;++o<e.length;)if((a=t(o))&&a.then){if(!Tu(a))return void a.then(i,r||(r=Nu.bind(null,n=new Au,2)));a=a.v}n?Nu(n,1,a):n=a}catch(e){Nu(n||(n=new Au),2,e)}}(),n}(l,(function(e){return t(l[e])}))}(o,(function(e){var t=n.findProcessorIndexByID(e.id),o=function(){if(t>=r)return Promise.resolve(e.process(i)).then((function(t){n.cache.set(e.id,i=t)}));i=n.cache.get(e.id)}();if(o&&o.then)return o.then((function(){}))}))}catch(e){return t(e)}return a&&a.then?a.then(void 0,t):a}(0,(function(e){throw vu.error(e),n.emit("error",i),e}));return Promise.resolve(a&&a.then?a.then(t):t())}catch(e){return Promise.reject(e)}},n.findProcessorIndexByID=function(e){return this.steps.findIndex((function(t){return t.id==e}))},n.setLastProcessorIndex=function(e){var t=this.findProcessorIndexByID(e.id);this.lastProcessorIndexUpdated>t&&(this.lastProcessorIndexUpdated=t)},n.processorPropsUpdated=function(e){this.setLastProcessorIndex(e),this.emit("propsUpdated"),this.emit("updated",e)},n.afterRegistered=function(e){this.setLastProcessorIndex(e),this.emit("afterRegister"),this.emit("updated",e)},Pl(t,[{key:"steps",get:function(){for(var e,t=[],n=Ll(this.getSortedProcessorTypes());!(e=n()).done;){var r=this._steps.get(e.value);r&&r.length&&(t=t.concat(r))}return t.filter((function(e){return e}))}}]),t}(Cs),$u=function(e){function t(){return e.apply(this,arguments)||this}return Rl(t,e),t.prototype._process=function(e){try{return Promise.resolve(this.props.storage.get(e))}catch(e){return Promise.reject(e)}},Pl(t,[{key:"type",get:function(){return _s.Extractor}}]),t}(Ns),Ru=function(e){function t(){return e.apply(this,arguments)||this}return Rl(t,e),t.prototype._process=function(e){var t=Ss.fromArray(e.data);return t.length=e.total,t},Pl(t,[{key:"type",get:function(){return _s.Transformer}}]),t}(Ns),ju=function(e){function t(){return e.apply(this,arguments)||this}return Rl(t,e),t.prototype._process=function(){return Object.entries(this.props.serverStorageOptions).filter((function(e){return"function"!=typeof e[1]})).reduce((function(e,t){var n;return $l({},e,((n={})[t[0]]=t[1],n))}),{})},Pl(t,[{key:"type",get:function(){return _s.Initiator}}]),t}(Ns),Ou=function(e){function t(){return e.apply(this,arguments)||this}Rl(t,e);var n=t.prototype;return n.castData=function(e){if(!e||!e.length)return[];if(!this.props.header||!this.props.header.columns)return e;var t=_u.leafColumns(this.props.header.columns);return e[0]instanceof Array?e.map((function(e){var n=0;return t.map((function(t,r){return void 0!==t.data?(n++,"function"==typeof t.data?t.data(e):t.data):e[r-n]}))})):"object"!=typeof e[0]||e[0]instanceof Array?[]:e.map((function(e){return t.map((function(t,n){return void 0!==t.data?"function"==typeof t.data?t.data(e):t.data:t.id?e[t.id]:(vu.error("Could not find the correct cell for column at position "+n+".\n                          Make sure either 'id' or 'selector' is defined for all columns."),null)}))}))},n._process=function(e){return{data:this.castData(e.data),total:e.total}},Pl(t,[{key:"type",get:function(){return _s.Transformer}}]),t}(Ns),zu=function(){function e(){}return e.createFromConfig=function(e){var t=new Pu;return e.storage instanceof Su&&t.register(new ju({serverStorageOptions:e.server})),t.register(new $u({storage:e.storage})),t.register(new Ou({header:e.header})),t.register(new Ru),t},e}(),Lu=function(e){var t=this;this.state=void 0,this.listeners=[],this.isDispatching=!1,this.getState=function(){return t.state},this.getListeners=function(){return t.listeners},this.dispatch=function(e){if("function"!=typeof e)throw new Error("Reducer is not a function");if(t.isDispatching)throw new Error("Reducers may not dispatch actions");t.isDispatching=!0;var n=t.state;try{t.state=e(t.state)}finally{t.isDispatching=!1}for(var r,o=Ll(t.listeners);!(r=o()).done;)(0,r.value)(t.state,n);return t.state},this.subscribe=function(e){if("function"!=typeof e)throw new Error("Listener is not a function");return t.listeners=[].concat(t.listeners,[e]),function(){return t.listeners=t.listeners.filter((function(t){return t!==e}))}},this.state=e},Fu=function(e,t){var n={__c:t="__cC"+Vl++,__:null,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(ns)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}(),Uu=function(){function e(){Object.assign(this,e.defaultConfig())}var t=e.prototype;return t.assign=function(e){return Object.assign(this,e)},t.update=function(t){return t?(this.assign(e.fromPartialConfig($l({},this,t))),this):this},e.defaultConfig=function(){return{store:new Lu({status:Fl.Init,header:void 0,data:null}),plugin:new yu,tableRef:{current:null},width:"100%",height:"auto",processingThrottleMs:100,autoWidth:!0,style:{},className:{}}},e.fromPartialConfig=function(t){var n=(new e).assign(t);return"boolean"==typeof t.sort&&t.sort&&n.assign({sort:{multiColumn:!0}}),n.assign({header:_u.createFromConfig(n)}),n.assign({storage:Cu.createFromConfig(n)}),n.assign({pipeline:zu.createFromConfig(n)}),n.assign({translator:new ou(n.language)}),n.plugin=new yu,n.search&&n.plugin.add({id:"search",position:bu.Header,component:uu}),n.pagination&&n.plugin.add({id:"pagination",position:bu.Footer,component:pu}),n.plugins&&n.plugins.forEach((function(e){return n.plugin.add(e)})),n},e}();function Du(e){var t,n=nu();return Xl("td",$l({role:e.role,colSpan:e.colSpan,"data-column-id":e.column&&e.column.id,className:Ps(Ts("td"),e.className,n.className.td),style:$l({},e.style,n.style.td),onClick:function(t){e.messageCell||n.eventEmitter.emit("cellClick",t,e.cell,e.column,e.row)}},(t=e.column)?"function"==typeof t.attributes?t.attributes(e.cell.data,e.row,e.column):t.attributes:{}),e.column&&"function"==typeof e.column.formatter?e.column.formatter(e.cell.data,e.row,e.column):e.column&&e.column.plugin?Xl(wu,{pluginId:e.column.id,props:{column:e.column,cell:e.cell,row:e.row}}):e.cell.data)}function Mu(e){var t=nu(),n=su((function(e){return e.header}));return Xl("tr",{className:Ps(Ts("tr"),t.className.tr),onClick:function(n){e.messageRow||t.eventEmitter.emit("rowClick",n,e.row)}},e.children?e.children:e.row.cells.map((function(t,r){var o=function(e){if(n){var t=_u.leafColumns(n.columns);if(t)return t[e]}return null}(r);return o&&o.hidden?null:Xl(Du,{key:t.id,cell:t,row:e.row,column:o})})))}function Iu(e){return Xl(Mu,{messageRow:!0},Xl(Du,{role:"alert",colSpan:e.colSpan,messageCell:!0,cell:new xs(e.message),className:Ps(Ts("message"),e.className?e.className:null)}))}function Bu(){var e=nu(),t=su((function(e){return e.data})),n=su((function(e){return e.status})),r=su((function(e){return e.header})),o=iu(),i=function(){return r?r.visibleColumns.length:0};return Xl("tbody",{className:Ps(Ts("tbody"),e.className.tbody)},t&&t.rows.map((function(e){return Xl(Mu,{key:e.id,row:e})})),n===Fl.Loading&&(!t||0===t.length)&&Xl(Iu,{message:o("loading"),colSpan:i(),className:Ps(Ts("loading"),e.className.loading)}),n===Fl.Rendered&&t&&0===t.length&&Xl(Iu,{message:o("noRecordsFound"),colSpan:i(),className:Ps(Ts("notfound"),e.className.notfound)}),n===Fl.Error&&Xl(Iu,{message:o("error"),colSpan:i(),className:Ps(Ts("error"),e.className.error)}))}var Hu=function(e){function t(){return e.apply(this,arguments)||this}Rl(t,e);var n=t.prototype;return n.validateProps=function(){for(var e,t=Ll(this.props.columns);!(e=t()).done;){var n=e.value;void 0===n.direction&&(n.direction=1),1!==n.direction&&-1!==n.direction&&vu.error("Invalid sort direction "+n.direction)}},n.compare=function(e,t){return e>t?1:e<t?-1:0},n.compareWrapper=function(e,t){for(var n,r=0,o=Ll(this.props.columns);!(n=o()).done;){var i=n.value;if(0!==r)break;var a=e.cells[i.index].data,l=t.cells[i.index].data;r|="function"==typeof i.compare?i.compare(a,l)*i.direction:this.compare(a,l)*i.direction}return r},n._process=function(e){var t=[].concat(e.rows);t.sort(this.compareWrapper.bind(this));var n=new Ss(t);return n.length=e.length,n},Pl(t,[{key:"type",get:function(){return _s.Sort}}]),t}(Ns),Vu=function(e,t,n,r){return function(o){var i,a=null!=(i=o.sort)&&i.columns?o.sort.columns.map((function(e){return $l({},e)})):[],l=a.length,s=a.find((function(t){return t.index===e})),u=!1,c=!1,d=!1,p=!1;if(void 0!==s?n?-1===s.direction?d=!0:p=!0:1===l?p=!0:l>1&&(c=!0,u=!0):0===l?u=!0:l>0&&!n?(u=!0,c=!0):l>0&&n&&(u=!0),c&&(a=[]),u)a.push({index:e,direction:t,compare:r});else if(p){var h=a.indexOf(s);a[h].direction=t}else if(d){var f=a.indexOf(s);a.splice(f,1)}return $l({},o,{sort:{columns:a}})}},Wu=function(e,t,n){return function(r){var o=(r.sort?[].concat(r.sort.columns):[]).find((function(t){return t.index===e}));return $l({},r,o?Vu(e,1===o.direction?-1:1,t,n)(r):Vu(e,1,t,n)(r))}},qu=function(e){function t(){return e.apply(this,arguments)||this}return Rl(t,e),t.prototype._process=function(e){var t={};return this.props.url&&(t.url=this.props.url(e.url,this.props.columns)),this.props.body&&(t.body=this.props.body(e.body,this.props.columns)),$l({},e,t)},Pl(t,[{key:"type",get:function(){return _s.ServerSort}}]),t}(Ns);function Ku(e){var t=nu(),n=lu().dispatch,r=iu(),o=Ws(0),i=o[0],a=o[1],l=t.sort,s=su((function(e){return e.sort})),u="object"==typeof(null==l?void 0:l.server)?_s.ServerSort:_s.Sort,c=function(){var e=t.pipeline.getStepsByType(u);if(e.length)return e[0]};return qs((function(){var e=c()||(u===_s.ServerSort?new qu($l({columns:s?s.columns:[]},l.server)):new Hu({columns:s?s.columns:[]}));return t.pipeline.tryRegister(e),function(){return t.pipeline.unregister(e)}}),[t]),qs((function(){if(s){var t,n=s.columns.find((function(t){return t.index===e.index}));n?(0===i&&(n.direction=null!=(t=e.direction)?t:1),a(n.direction)):a(0)}}),[s]),qs((function(){var e=c();e&&s&&e.setProps({columns:s.columns})}),[s]),Xl("button",{tabIndex:-1,"aria-label":r("sort.sort"+(1===i?"Desc":"Asc")),title:r("sort.sort"+(1===i?"Desc":"Asc")),className:Ps(Ts("sort"),Ts("sort",function(e){return 1===e?"asc":-1===e?"desc":"neutral"}(i)),t.className.sort),onClick:function(t){t.preventDefault(),t.stopPropagation(),n(Wu(e.index,!0===t.shiftKey&&l.multiColumn,e.compare))}})}var Qu=function(e,t){var n;void 0===t&&(t=100);var r=Date.now(),o=function(){r=Date.now(),e.apply(void 0,[].slice.call(arguments))};return function(){var e=[].slice.call(arguments),i=Date.now()-r;i>=t?o.apply(void 0,e):(n&&clearTimeout(n),n=setTimeout((function(){o.apply(void 0,e),n=null}),t-i))}};function Ju(e){var t,n=function(e){return e instanceof MouseEvent?Math.floor(e.pageX):Math.floor(e.changedTouches[0].pageX)},r=function(r){r.stopPropagation();var a=parseInt(e.thRef.current.style.width,10)-n(r);t=Qu((function(e){return o(e,a)}),10),document.addEventListener("mouseup",i),document.addEventListener("touchend",i),document.addEventListener("mousemove",t),document.addEventListener("touchmove",t)},o=function(t,r){t.stopPropagation();var o=e.thRef.current;r+n(t)>=parseInt(o.style.minWidth,10)&&(o.style.width=r+n(t)+"px")},i=function e(n){n.stopPropagation(),document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",t),document.removeEventListener("touchmove",t),document.removeEventListener("touchend",e)};return Xl("div",{className:Ps(Ts("th"),Ts("resizable")),onMouseDown:r,onTouchStart:r,onClick:function(e){return e.stopPropagation()}})}function Xu(e){var t=nu(),n=Ks(null),r=Ws({}),o=r[0],i=r[1],a=lu().dispatch;qs((function(){if(t.fixedHeader&&n.current){var e=n.current.offsetTop;"number"==typeof e&&i({top:e})}}),[n]);var l,s=function(){return null!=e.column.sort},u=function(n){n.stopPropagation(),s()&&a(Wu(e.index,!0===n.shiftKey&&t.sort.multiColumn,e.column.sort.compare))};return Xl("th",$l({ref:n,"data-column-id":e.column&&e.column.id,className:Ps(Ts("th"),s()?Ts("th","sort"):null,t.fixedHeader?Ts("th","fixed"):null,t.className.th),onClick:u,style:$l({},t.style.th,{minWidth:e.column.minWidth,width:e.column.width},o,e.style),onKeyDown:function(e){s()&&13===e.which&&u(e)},rowSpan:e.rowSpan>1?e.rowSpan:void 0,colSpan:e.colSpan>1?e.colSpan:void 0},(l=e.column)?"function"==typeof l.attributes?l.attributes(null,null,e.column):l.attributes:{},s()?{tabIndex:0}:{}),Xl("div",{className:Ts("th","content")},void 0!==e.column.name?e.column.name:void 0!==e.column.plugin?Xl(wu,{pluginId:e.column.plugin.id,props:{column:e.column}}):null),s()&&Xl(Ku,$l({index:e.index},e.column.sort)),e.column.resizable&&e.index<t.header.visibleColumns.length-1&&Xl(Ju,{column:e.column,thRef:n}))}function Yu(){var e,t=nu(),n=su((function(e){return e.header}));return n?Xl("thead",{key:n.id,className:Ps(Ts("thead"),t.className.thead)},(e=_u.tabularFormat(n.columns)).map((function(t,r){return function(e,t,r){var o=_u.leafColumns(n.columns);return Xl(Mu,null,e.map((function(e){return e.hidden?null:function(e,t,n,r){var o=function(e,t,n){var r=_u.maximumDepth(e),o=n-t;return{rowSpan:Math.floor(o-r-r/o),colSpan:e.columns&&e.columns.length||1}}(e,t,r);return Xl(Xu,{column:e,index:n,colSpan:o.colSpan,rowSpan:o.rowSpan})}(e,t,o.indexOf(e),r)})))}(t,r,e.length)}))):null}var Gu=function(e){return function(t){return $l({},t,{header:e})}};function Zu(){var e=nu(),t=Ks(null),n=lu().dispatch;return qs((function(){t&&n(function(e){return function(t){return $l({},t,{tableRef:e})}}(t))}),[t]),Xl("table",{ref:t,role:"grid",className:Ps(Ts("table"),e.className.table),style:$l({},e.style.table,{height:e.height})},Xl(Yu,null),Xl(Bu,null))}function ec(){var e=Ws(!0),t=e[0],n=e[1],r=Ks(null),o=nu();return qs((function(){0===r.current.children.length&&n(!1)}),[r]),t?Xl("div",{ref:r,className:Ps(Ts("head"),o.className.header),style:$l({},o.style.header)},Xl(wu,{position:bu.Header})):null}function tc(){var e=Ks(null),t=Ws(!0),n=t[0],r=t[1],o=nu();return qs((function(){0===e.current.children.length&&r(!1)}),[e]),n?Xl("div",{ref:e,className:Ps(Ts("footer"),o.className.footer),style:$l({},o.style.footer)},Xl(wu,{position:bu.Footer})):null}function nc(){var e=nu(),t=lu().dispatch,n=su((function(e){return e.status})),r=su((function(e){return e.data})),o=su((function(e){return e.tableRef})),i={current:null},a=Qu((function(){try{t((function(e){return $l({},e,{status:Fl.Loading})}));var n=function(n,r){try{var o=Promise.resolve(e.pipeline.process()).then((function(e){t(function(e){return function(t){return e?$l({},t,{data:e,status:Fl.Loaded}):t}}(e)),setTimeout((function(){t((function(e){return e.status===Fl.Loaded?$l({},e,{status:Fl.Rendered}):e}))}),0)}))}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,(function(e){vu.error(e),t((function(e){return $l({},e,{data:null,status:Fl.Error})}))}));return Promise.resolve(n&&n.then?n.then((function(){})):void 0)}catch(e){return Promise.reject(e)}}),e.processingThrottleMs);return qs((function(){return t(Gu(e.header)),a(),e.pipeline.on("updated",a),function(){return e.pipeline.off("updated",a)}}),[]),qs((function(){e.header&&n===Fl.Loaded&&null!=r&&r.length&&t(Gu(e.header.adjustWidth(e,o,i)))}),[r,e,i]),Xl("div",{role:"complementary",className:Ps("gridjs",Ts("container"),n===Fl.Loading?Ts("loading"):null,e.className.container),style:$l({},e.style.container,{width:e.width})},n===Fl.Loading&&Xl("div",{className:Ts("loading-bar")}),Xl(ec,null),Xl("div",{className:Ts("wrapper"),style:{height:e.height}},Xl(Zu,null)),Xl(tc,null),Xl("div",{ref:i,id:"gridjs-temp",className:Ts("temp")}))}var rc=function(e){function t(t){var n;return(n=e.call(this)||this).config=void 0,n.plugin=void 0,n.config=(new Uu).assign({instance:Ol(n),eventEmitter:Ol(n)}).update(t),n.plugin=n.config.plugin,n}Rl(t,e);var n=t.prototype;return n.updateConfig=function(e){return this.config.update(e),this},n.createElement=function(){return Xl(Fu.Provider,{value:this.config,children:Xl(nc,{})})},n.forceRender=function(){return this.config&&this.config.container||vu.error("Container is empty. Make sure you call render() before forceRender()",!0),this.destroy(),gs(this.createElement(),this.config.container),this},n.destroy=function(){this.config.pipeline.clearCache(),gs(null,this.config.container)},n.render=function(e){return e||vu.error("Container element cannot be null",!0),e.childNodes.length>0?(vu.error("The container element "+e+" is not empty. Make sure the container is empty and call render() again"),this):(this.config.container=e,gs(this.createElement(),e),this)},t}(Cs);let oc;const ic=function(e){const t=(0,o.useRef)(null);return(0,o.useEffect)((()=>{if(console.log("useEffect"),console.log(e.data),console.log(oc),console.log(e.data),e.data&&e.data.length>0){new rc({columns:["Title","Description","Recurring","Date","Unit"],data:e.data}).render(t.current)}})),console.log(e.data),(0,Do.jsxs)("div",{children:[(0,Do.jsx)("h3",{children:"Overview"}),(0,Do.jsx)("div",{ref:t,id:"example-table"}),(0,Do.jsx)("style",{children:"\n\n"})]})};const ac=function(e){const[t,n]=(0,o.useState)(!1);return console.log(e.input),(0,Do.jsx)("div",{children:(0,Do.jsx)("style",{children:"\n    sl-dialog {\n        --width: 75rem;\n    }\n    .form-content {\n        text-align: left;\n    }\n    small, sl-input, sl-textarea, sl-checkbox {\n        margin: 25px 0px;\n        display: block;\n    }\n \n"})})};const lc=function(){const[e,t]=(0,o.useState)([]),[n,r]=(0,o.useState)(!1),i=async()=>{try{const e=await tl.get("http://localhost:5000/api/tasks");console.log(e),t(e.data)}catch(e){console.error("Error fetching items:",e)}};(0,o.useEffect)((()=>{i()}),[]);const[a,l]=(0,o.useState)({title:"",description:"",recurring:"",date:(new Date).toLocaleDateString("en-US"),unit:""}),[s,u]=(0,o.useState)(!0),c=()=>{l({title:"",description:"",recurring:"",date:(new Date).toLocaleDateString("en-US"),unit:""}),r(!1)};return(0,Do.jsxs)("div",{className:"app",children:[(0,Do.jsxs)(Ro,{label:"New Repair",open:n,onSlAfterHide:c,children:[(0,Do.jsx)("div",{style:{padding:"0 1rem"},children:(0,Do.jsx)(Mo,{input:a,setInputs:l})}),(0,Do.jsx)(Zr,{slot:"footer",variant:"default",onClick:()=>c,children:"Cancel"}),(0,Do.jsx)(Zr,{slot:"footer",variant:"primary",onClick:async()=>{try{await tl.post("http://localhost:5000/api/tasks",a),l({title:"",description:"",recurring:"",date:(new Date).toLocaleDateString("en-US"),unit:""}),i(),r(!1)}catch(e){console.error("Error adding item:",e)}},children:"Submit"})]}),(0,Do.jsx)("header",{className:"app-header",children:(0,Do.jsx)("img",{slot:"image",src:"./images/LogoSerale.png",alt:"JADU."})}),!s&&(0,Do.jsx)(ke,{to:"/login",replace:!0}),s&&(0,Do.jsxs)("div",{className:"leftnav",children:[(0,Do.jsx)(Zr,{variant:"primary",onClick:()=>r(!0),children:"Create New Task"}),(0,Do.jsxs)(fl,{placement:"start",children:[(0,Do.jsx)(ul,{slot:"nav",panel:"tab-2",active:!0,children:"Overview Tasks"}),(0,Do.jsx)(ul,{slot:"nav",panel:"tab-4",children:"Calendar"}),(0,Do.jsx)(ul,{slot:"nav",panel:"tab-5",children:"Reports"}),(0,Do.jsx)(ul,{slot:"nav",panel:"tab-6",children:"Notifications"}),(0,Do.jsx)(ul,{slot:"nav",panel:"tab-7",children:"Help FAQ"}),(0,Do.jsx)(ul,{slot:"nav",panel:"tab-8",children:"Settings"}),(0,Do.jsx)(ul,{slot:"nav",panel:"tab-9",onClick:e=>{console.log(e),localStorage.removeItem("authToken"),u(!1)},children:"Sign Off"}),(0,Do.jsx)(wl,{name:"tab-2",children:(0,Do.jsx)(ic,{data:e})}),(0,Do.jsx)(wl,{name:"tab-4",children:(0,Do.jsx)(ac,{})}),(0,Do.jsx)(wl,{name:"tab-5",children:(0,Do.jsx)(Cl,{})}),(0,Do.jsx)(wl,{name:"tab-6",children:(0,Do.jsx)(Cl,{})}),(0,Do.jsx)(wl,{name:"tab-7",children:(0,Do.jsx)(Cl,{})}),(0,Do.jsx)(wl,{name:"tab-8",children:(0,Do.jsx)(Cl,{})}),(0,Do.jsx)(wl,{name:"tab-9",children:(0,Do.jsx)(Cl,{})})]})]}),(0,Do.jsx)("style",{children:"\n  .app {\n    text-align: center;\n    padding: 1vw;\n\n    sl-button {\n        margin: 0px 5px;\n    }\n  }\n\n  .app-header {\n    text-align: right;\n    border-bottom: 1px solid lightgray;\n  }\n\n  .app-header > img {\n    width: 188px;\n  }\n\n  sl-tab-group {\n    /* sl-button {\n      margin: 13px 0px;\n    } */\n  }\n\n  sl-tab-group::part(tabs) {\n    --track-width: 5px;\n  }\n\n  sl-tab-panel::part(base) {\n   padding: 50px;\n  }\n\n  .card-image-profile {\n    min-width: 200px;\n    padding: 20px;\n    max-width: 250px;\n    border: 2px solid var(--sl-color-gray-300);\n    margin: 1vw;\n  }\n\n\n  sl-tab {\n    text-align: left;\n    width: 200px;\n  }\n\n  sl-tab-group::part(nav) {\n  border-inline-end: solid var(--track-width) var(--track-color);\n  }\n\n  .leftnav {\n      display: flex;\n      flex-direction: column;\n      \n\n      sl-button {\n          width: 200px;\n          margin: 12px 0px;\n      }\n  }\n"})]})};wr("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.0/cdn/");const sc=function(){return(0,Do.jsx)(at,{children:(0,Do.jsxs)(Ne,{children:[(0,Do.jsx)(Ce,{path:"/",element:(0,Do.jsx)(il,{})}),(0,Do.jsx)(Ce,{path:"/propertymanagement",element:(0,Do.jsx)(Al,{children:(0,Do.jsx)(lc,{})})}),(0,Do.jsx)(Ce,{path:"/propertydevelopment",element:(0,Do.jsx)(Nl,{})}),(0,Do.jsx)(Ce,{path:"*",element:(0,Do.jsx)(ke,{to:"/"})}),(0,Do.jsx)(Ce,{path:"/login",element:(0,Do.jsx)(rl,{})})]})})},uc=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,453)).then((t=>{let{getCLS:n,getFID:r,getFCP:o,getLCP:i,getTTFB:a}=t;n(e),r(e),o(e),i(e),a(e)}))};a.createRoot(document.getElementById("root")).render((0,Do.jsx)(o.StrictMode,{children:(0,Do.jsx)(sc,{})})),uc()})();
//# sourceMappingURL=main.aaeb6ffa.js.map