import{s as l}from"./index-d475d2ea.js";import"./index-d41df442.js";import"./toString-95bf956b.js";import"./_commonjsHelpers-042e6b4d.js";module&&module.hot&&module.hot.decline&&module.hot.decline();var _="links";const{addons:a,makeDecorator:d}=__STORYBOOK_MODULE_PREVIEW_API__,{STORY_CHANGED:c,SELECT_STORY:E}=__STORYBOOK_MODULE_CORE_EVENTS__;var{document:i,HTMLElement:O}=l,p=e=>a.getChannel().emit(E,e),s=e=>{let{target:t}=e;if(!(t instanceof O))return;let m=t,{sbKind:o,sbStory:r}=m.dataset;(o||r)&&(e.preventDefault(),p({kind:o,story:r}))},n=!1,L=()=>{n||(n=!0,i.addEventListener("click",s))},v=()=>{n&&(n=!1,i.removeEventListener("click",s))},h=d({name:"withLinks",parameterName:_,wrapper:(e,t)=>(L(),a.getChannel().once(c,v),e(t))}),T=[h];export{T as decorators};
//# sourceMappingURL=preview-6b4a0b2b.js.map
