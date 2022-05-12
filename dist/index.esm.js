var r=function(r){return Object.prototype.toString.call(r).replace(/^\[object (\w+)\]$/,"$1").toLowerCase()},t=function(t){var n=r(t);return("string"===n||"number"===n)&&/^[1-9][0-9]{4,9}$/.test(String(t))},n=function(t){var n=r(t);return("string"===n||"number"===n)&&/^1[3456789]\d{9}$/.test(String(t))},e=function(t){return"string"===r(t)&&/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(t)},a=function(t){return"string"===r(t)&&/^[.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(t)},o=function(t){var n=r(t);return("string"===n||"number"===n)&&/^\d{16,19}$/.test(String(t))},i=function(t){if("string"!==r(t))return null;var n=t.split(",");if(!n[0]||!n[1])return null;var e=window.atob(n[1]),a=n[0].match(/:(.*?);/);if(!a)return null;var o=e.length,i=a[1];if(!i)return null;for(var u=new Uint8Array(o);o--;)u[o]=e.charCodeAt(o);return new Blob([u],{type:i})},u=function(t,n){var e=r(t),a=r(n);if("string"!==e||"string"!==a)return null;var o=i(t);return o?new window.File([o],n,{type:o.type,lastModified:+new Date}):null},c=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return new Promise((function(e,a){var o=r(t);if("file"!==o)return a(new Error("Expected parameter type is file, You passed in ".concat(o)));if(-1===t.type.indexOf("image"))return e(t);var i=new FileReader;i.onload=function(){var r=new Image;r.src=i.result,r.onload=function(){var o=r.width,i=r.height,c=window.document.createElement("canvas"),f=c.getContext("2d");c.width=o,c.height=i,f.drawImage(r,0,0,o,i);var l=c.toDataURL(t.type,n),s=u(l,t.name);if(!s)return a(new Error("compress error"));e(s)},r.onerror=function(r){return a(r)}},i.onerror=function(r){return a(r)},i.readAsDataURL(t)}))},f=function(t){r(t);var n={},e=/(([^:]+:)\/\/(([^:/?#]+)(:\d+)?))(\/[^?#]*)?(\?[^#]*)?(#.*)?/.exec(t);return e?(["href","origin","protocol","host","hostname","port","pathname","search","hash"].forEach((function(r,t){return n[r]=e[t]||""})),n):null},l=function t(n){var e=r(n);if("array"!==e&&"object"!==e)return n;var a="array"===e?[]:{};for(var o in n)if(Object.prototype.hasOwnProperty.call(n,o)){var i=n[o],u=r(i);a[o]="array"!==u&&"object"!==u?i:t(i)}return a};export{l as cloneDeep,c as compressImage,i as dataURLtoBlob,u as dataURLtoFile,r as getType,o as isBankCard,a as isEmail,e as isIDCard,n as isPhone,t as isQQ,f as parseUrl};
