import{h as c,L as d,g as p,i as n}from"./runtime.CbXl_vXQ.js";function h(r,s,o,i){var f=r.__attributes??(r.__attributes={});c&&(f[s]=r.getAttribute(s),s==="src"||s==="srcset"||s==="href"&&r.nodeName==="LINK")||f[s]!==(f[s]=o)&&(s==="style"&&"__styles"in r&&(r.__styles={}),s==="loading"&&(r[d]=o),o==null?r.removeAttribute(s):typeof o!="string"&&t(r).includes(s)?r[s]=o:r.setAttribute(s,o))}var g=new Map;function t(r){var s=g.get(r.nodeName);if(s)return s;g.set(r.nodeName,s=[]);for(var o,i=p(r),f=Element.prototype;f!==i;){o=n(i);for(var _ in o)o[_].set&&s.push(_);i=p(i)}return s}export{h as s};
