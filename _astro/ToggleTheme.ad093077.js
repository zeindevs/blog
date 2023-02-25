import{r as a}from"./index.45a47ed6.js";var i={},d={get exports(){return i},set exports(r){i=r}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=a,f=Symbol.for("react.element"),p=Symbol.for("react.fragment"),_=Object.prototype.hasOwnProperty,g=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function u(r,e,o){var t,n={},l=null,m=null;o!==void 0&&(l=""+o),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(m=e.ref);for(t in e)_.call(e,t)&&!h.hasOwnProperty(t)&&(n[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)n[t]===void 0&&(n[t]=e[t]);return{$$typeof:f,type:r,key:l,ref:m,props:n,_owner:g.current}}s.Fragment=p;s.jsx=u;s.jsxs=u;(function(r){r.exports=s})(d);function x({children:r}){const[e,o]=a.useState(localStorage.getItem("theme")??"light"),t=()=>{o(e==="light"?"dark":"light")};return a.useEffect(()=>{e==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),localStorage.setItem("theme",e)},[e]),i.jsx("button",{"aria-label":"Toggle Theme",className:"p-1 flex gap-1 items-center justify-center rounded-full border border-gray-400 dark:border-white dark:bg-white",onClick:t,children:r})}export{x as default};
