!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="./",t(t.s=0)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.postModuleMessage=function(e,n){var t=e.id,r=e.message;l({id:t,message:r},{postMessage:n})};var r=t(1);"undefined"!=typeof onconnect&&(onconnect=function(e){var n=e.ports[0];n.onmessage=function(e){l(e.data,n)}});var o={},i=null,u=Promise.resolve();function s(){var e=(0,r.create)();i=e,setTimeout(function(){return e.reject(new Error("Timed out"))},1e4)}function c(e){null!=i&&i.resolve(e)}function f(){return null==i?Promise.reject(new Error("???")):i.promise}function a(e){var n=u.then(function(){return e()});u=n.catch(function(){})}function l(e,n){var t=e.id,r=e.message;if("acquire-intent"===r.type){var i=r.path,u=r.checkPrevious,l=r.previous;a(function(){return function(e,n,t,r,i){var u=!1;if(n){var c=o[e];u=null==c?null!=t:t!==c}return u?(y({type:"wrong-previous-session"},r,i),Promise.resolve()):(s(),y({type:"ok"},r,i),f().then(function(n){if(n.good){var t=(++v).toString();o[e]=t,y({type:"session-number",number:t},n.id,i)}else y({type:"ok"},n.id,i)}))}(i,u,l,t,n)})}if("acquire-done"===r.type&&function(e){c({good:!0,id:e})}(t),"acquire-failed"===r.type&&function(e){c({good:!1,id:e})}(t),"get-sessions"===r.type&&a(function(){return d(t,n)}),"get-sessions-and-disconnect"===r.type){var m=r.devices;a(function(){return d(t,n,m)})}if("release-onclose"===r.type){var g=r.session;a(function(){return function(e){var n=null;if(Object.keys(o).forEach(function(t){o[t]===e&&(n=t)}),null==n)return Promise.resolve();return delete o[n],Promise.resolve()}(g)})}if("release-intent"===r.type){var P=r.session;a(function(){return function(e,n,t){var r=null;if(Object.keys(o).forEach(function(n){o[n]===e&&(r=n)}),null==r)return y({type:"double-release"},n,t),Promise.resolve();var i=r;return s(),y({type:"path",path:i},n,t),f().then(function(e){delete o[i],y({type:"ok"},e.id,t)})}(P,t,n)})}"release-done"===r.type&&p(t),"enumerate-intent"===r.type&&a(function(){return function(e,n){return s(),y({type:"ok"},e,n),f().then(function(e){y({type:"ok"},e.id,n)})}(t,n)}),"enumerate-done"===r.type&&p(t)}function p(e){c({id:e})}function d(e,n,t){if(null!=t){var r={};t.forEach(function(e){r[e.path]=!0}),Object.keys(o).forEach(function(e){r[e]||delete o[e]})}return y({type:"sessions",sessions:o},e,n),Promise.resolve()}var v=0;function y(e,n,t){t.postMessage({id:n,message:e})}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.create=function(){var e=function(e){},n=function(e){},t=new Promise(function(t,r){e=t,n=r}),r=t.then(function(){throw new Error("Promise is always rejecting")});return r.catch(function(){}),{resolve:e,reject:n,promise:t,rejectingPromise:r}},n.resolveTimeoutPromise=function(e,n){return new Promise(function(t){setTimeout(function(){t(n)},e)})},n.rejectTimeoutPromise=function(e,n){return new Promise(function(t,r){setTimeout(function(){r(n)},e)})}}]);