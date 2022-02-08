!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).VUtils={})}(this,(function(e){"use strict";var t=e=>Object.prototype.toString.call(e).replace(/^\[object (\w+)\]$/,"$1").toLowerCase();e.compressImage=(e,r=1)=>new Promise(((n,o)=>{const s=t(e);if("file"!==s)return o(new Error(`Expected parameter type is file, You passed in ${s}`));if(-1===e.type.indexOf("image"))return e;const i=new FileReader;i.readAsDataURL(e),i.onload=()=>{const t=new Image;t.src=i.result,t.onload=()=>{const{width:o,height:s}=t,i=window.document.createElement("canvas"),a=i.getContext("2d");i.width=o,i.height=s,a.drawImage(t,0,0,o,s),i.toBlob((t=>n(new window.File([t],e.name,{type:e.type}))),"image/webp",r)}}})),e.getType=t,e.isCard=e=>{const r=t(e);if("string"!==r)throw new Error(`Expected parameter type is string, You passed in ${r}`);return/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(String(e))},e.isEmail=e=>/^[.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(e),e.isPhone=e=>{const r=t(e);return("string"===r||"number"===r)&&/^1[3456789]\d{9}$/.test(String(e))},e.isQQ=e=>{const r=t(e);return("string"===r||"number"===r)&&/^[1-9][0-9]{4,9}$/.test(String(e))},e.parseUrl=e=>{const r=t(e);if("string"!==r)throw new Error(`Expected parameter type is string, You passed in ${r}`);const n={},o=/(([^:]+:)\/\/(([^:/?#]+)(:\d+)?))(\/[^?#]*)?(\?[^#]*)?(#.*)?/.exec(e);return o?(["href","origin","protocol","host","hostname","port","pathname","search","hash"].forEach(((e,t)=>n[e]=o[t]||"")),n):null},Object.defineProperty(e,"__esModule",{value:!0})}));
