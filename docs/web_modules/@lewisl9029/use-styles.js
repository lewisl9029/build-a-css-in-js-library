import{r as i}from"../common/index-f6a4afc8.js";function u(o){for(var e=0,t,r=0,s=o.length;s>=4;++r,s-=4)t=o.charCodeAt(r)&255|(o.charCodeAt(++r)&255)<<8|(o.charCodeAt(++r)&255)<<16|(o.charCodeAt(++r)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,e=(t&65535)*1540483477+((t>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(s){case 3:e^=(o.charCodeAt(r+2)&255)<<16;case 2:e^=(o.charCodeAt(r+1)&255)<<8;case 1:e^=o.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}const h=/([A-Z])/g,p=/^ms-/,y=o=>o.replace(h,"-$1").toLowerCase().replace(p,"-ms-"),x=new Set(["animationIterationCount","borderImageOutset","borderImageSlice","borderImageWidth","boxFlex","boxFlexGroup","boxOrdinalGroup","columnCount","columns","flex","flexGrow","flexPositive","flexShrink","flexNegative","flexOrder","gridRow","gridRowEnd","gridRowSpan","gridRowStart","gridColumn","gridColumnEnd","gridColumnSpan","gridColumnStart","msGridRow","msGridRowSpan","msGridColumn","msGridColumnSpan","fontWeight","lineHeight","opacity","order","orphans","tabSize","widows","zIndex","zoom","WebkitLineClamp","fillOpacity","floodOpacity","stopOpacity","strokeDasharray","strokeDashoffset","strokeMiterlimit","strokeOpacity","strokeWidth"]),b=(o,e)=>e==null||typeof e=="boolean"||e===""?"":typeof e=="number"&&e!==0&&!x.has(o)?`${e}px`:String(e).trim(),f=i.createContext(void 0),g=new Set([":hover",":focus",":focus-visible",":focus-within"]),w={},S=new Set,m=({styles:o,pseudoClass:e="",cachedRules:t})=>Object.entries(o).flatMap(([r,s])=>{if(g.has(r))return m({styles:s,pseudoClass:r,cachedRules:t});const n=`${r}_${s}_${e}`;if(t[n])return t[n];const l=`r_${u(n)}`,a=y(r),c=`.${l}${e} { ${a}: ${b(r,s)}; }`;return t[n]={id:n,className:l,rule:c},t[n]}),C=({children:o,fallback:e,cachedRules:t=w,insertedRules:r=S})=>{const[s,n]=i.useState();i.useLayoutEffect(()=>{const a="useStylesStylesheet",c=window.document.getElementById(a);if(c){n(c.sheet);return}const d=window.document.createElement("style");d.id=a,window.document.head.appendChild(d),n(d.sheet)},[]);const l=!!s;return i.createElement(f.Provider,{value:{insertRule:i.useCallback(({id:a,rule:c})=>{if(!s||r.has(a))return;s.insertRule(c),r.add(a)},[s]),toRules:i.useCallback(a=>m({styles:a,cachedRules:t}),[])}},l?o:e)},k=(o,e)=>{e||console.warn("styles will be reprocessed every render if a dependencies array is not provided, pass in an empty array if styles are static");const t=i.useContext(f);if(t===void 0)throw new Error("Please ensure usages of useStyles are contained within StylesProvider");const{insertRule:r,toRules:s}=t,n=i.useMemo(()=>s(o),e),l=i.useMemo(()=>n.map(({className:a})=>a).join(" "),[n]);return i.useLayoutEffect(()=>(n.forEach(r),()=>{}),[n]),l};export{C as StylesProvider,k as useStyles};
