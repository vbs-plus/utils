var e=e=>Object.prototype.toString.call(e).replace(/^\[object (\w+)\]$/,"$1").toLowerCase(),t=t=>{const r=e(t);return("string"===r||"number"===r)&&/^[1-9][0-9]{4,9}$/.test(String(t))},r=t=>{const r=e(t);return("string"===r||"number"===r)&&/^1[3456789]\d{9}$/.test(String(t))},n=t=>"string"===e(t)&&/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(t),o=t=>"string"===e(t)&&/^[.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(t),a=(t,r=1)=>new Promise(((n,o)=>{const a=e(t);if("file"!==a)return o(new Error(`Expected parameter type is file, You passed in ${a}`));if(-1===t.type.indexOf("image"))return t;const s=new FileReader;s.readAsDataURL(t),s.onload=()=>{const e=new Image;e.src=s.result,e.onload=()=>{const{width:o,height:a}=e,s=window.document.createElement("canvas"),i=s.getContext("2d");s.width=o,s.height=a,i.drawImage(e,0,0,o,a),s.toBlob((e=>n(new window.File([e],t.name,{type:t.type}))),"image/webp",r)}}})),s=t=>{const r=e(t);if("string"!==r)throw new Error(`Expected parameter type is string, You passed in ${r}`);const n={},o=/(([^:]+:)\/\/(([^:/?#]+)(:\d+)?))(\/[^?#]*)?(\?[^#]*)?(#.*)?/.exec(t);return o?(["href","origin","protocol","host","hostname","port","pathname","search","hash"].forEach(((e,t)=>n[e]=o[t]||"")),n):null};export{a as compressImage,e as getType,n as isCard,o as isEmail,r as isPhone,t as isQQ,s as parseUrl};
