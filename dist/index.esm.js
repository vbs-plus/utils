var t=t=>Object.prototype.toString.call(t).replace(/^\[object (\w+)\]$/,"$1").toLowerCase(),e=e=>{const r=t(e);return("string"===r||"number"===r)&&/^[1-9][0-9]{4,9}$/.test(String(e))},r=e=>{const r=t(e);return("string"===r||"number"===r)&&/^1[3456789]\d{9}$/.test(String(e))},n=e=>"string"===t(e)&&/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e),o=e=>"string"===t(e)&&/^[.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(e),s=e=>{const r=t(e);return("string"===r||"number"===r)&&/^\d{16,20}$/.test(String(e))},i=e=>{if("string"!==t(e))return null;const r=e.split(",");if(!r[0]||!r[1])return null;const n=window.atob(r[1]),o=r[0].match(/:(.*?);/);if(!o)return null;let s=n.length;const i=o[1];if(!i)return null;const a=new Uint8Array(s);for(;s--;)a[s]=n.charCodeAt(s);return new Blob([a],{type:i})},a=(e,r)=>{const n=t(e),o=t(r);if("string"!==n||"string"!==o)return null;const s=i(e);return s?new window.File([s],r,{type:s.type,lastModified:+new Date}):null},c=(e,r=1)=>new Promise(((n,o)=>{const s=t(e);if("file"!==s)return o(new Error(`Expected parameter type is file, You passed in ${s}`));if(-1===e.type.indexOf("image"))return n(e);const i=new FileReader;i.onload=()=>{const t=new Image;t.src=i.result,t.onload=()=>{const{width:s,height:i}=t,c=window.document.createElement("canvas"),l=c.getContext("2d");c.width=s,c.height=i,l.drawImage(t,0,0,s,i);const u=c.toDataURL(e.type,r),d=a(u,e.name);if(!d)return o(new Error("compress error"));n(d)},t.onerror=t=>o(t)},i.onerror=t=>o(t),i.readAsDataURL(e)})),l=e=>{t(e);const r={},n=/(([^:]+:)\/\/(([^:/?#]+)(:\d+)?))(\/[^?#]*)?(\?[^#]*)?(#.*)?/.exec(e);return n?(["href","origin","protocol","host","hostname","port","pathname","search","hash"].forEach(((t,e)=>r[t]=n[e]||"")),r):null};export{c as compressImage,i as dataURLtoBlob,a as dataURLtoFile,t as getType,s as isBankCard,n as isCard,o as isEmail,r as isPhone,e as isQQ,l as parseUrl};
