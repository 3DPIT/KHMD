try{
var n="storybook/outline",u="outline";var r=__REACT__,{Children:R,Component:g,Fragment:k,Profiler:I,PureComponent:P,StrictMode:B,Suspense:L,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:M,cloneElement:x,createContext:v,createElement:D,createFactory:N,createRef:H,forwardRef:K,isValidElement:Y,lazy:F,memo:m,useCallback:p,useContext:W,useDebugValue:G,useEffect:S,useImperativeHandle:w,useLayoutEffect:U,useMemo:V,useReducer:q,useRef:z,useState:Z,version:$}=__REACT__;var ee=__STORYBOOKAPI__,{ActiveTabs:te,Consumer:oe,ManagerContext:re,Provider:ae,addons:c,combineParameters:ne,controlOrMetaKey:le,controlOrMetaSymbol:se,eventMatchesShortcut:ue,eventToShortcut:ce,isMacLike:ie,isShortcutTaken:me,keyToSymbol:pe,merge:Se,mockChannel:_e,optionOrAltSymbol:de,shortcutMatchesShortcut:Te,shortcutToHumanString:Oe,types:_,useAddonState:be,useArgTypes:ye,useArgs:Ae,useChannel:fe,useGlobalTypes:he,useGlobals:d,useParameter:Ce,useSharedState:Ee,useStoryPrepared:Re,useStorybookApi:T,useStorybookState:ge}=__STORYBOOKAPI__;var Le=__STORYBOOKCOMPONENTS__,{A:Me,ActionBar:xe,AddonPanel:ve,Badge:De,Bar:Ne,Blockquote:He,Button:Ke,Code:Ye,DL:Fe,Div:We,DocumentWrapper:Ge,FlexBar:we,Form:Ue,H1:Ve,H2:qe,H3:ze,H4:Ze,H5:$e,H6:je,HR:Je,IconButton:O,IconButtonSkeleton:Qe,Icons:b,Img:Xe,LI:et,Link:tt,Loader:ot,OL:rt,P:at,Placeholder:nt,Pre:lt,ResetWrapper:st,ScrollArea:ut,Separator:ct,Spaced:it,Span:mt,StorybookIcon:pt,StorybookLogo:St,Symbols:_t,SyntaxHighlighter:dt,TT:Tt,TabBar:Ot,TabButton:bt,TabWrapper:yt,Table:At,Tabs:ft,TabsState:ht,TooltipLinkList:Ct,TooltipMessage:Et,TooltipNote:Rt,UL:gt,WithTooltip:kt,WithTooltipPure:It,Zoom:Pt,codeCommon:Bt,components:Lt,createCopyToClipboardFunction:Mt,getStoryHref:xt,interleaveSeparators:vt,nameSpaceClassNames:Dt,resetComponents:Nt,withReset:Ht}=__STORYBOOKCOMPONENTS__;var A=m(function(){let[a,y]=d(),i=T(),l=[!0,"true"].includes(a[u]),s=p(()=>y({[u]:!l}),[l]);return S(()=>{i.setAddonShortcut(n,{label:"Toggle Measure [O]",defaultShortcut:["O"],actionName:"outline",showInMenu:!1,action:s})},[s,i]),r.createElement(O,{key:"outline",active:l,title:"Apply outlines to the preview",onClick:s},r.createElement(b,{icon:"outline"}))});c.register(n,()=>{c.add(n,{title:"Outline",type:_.TOOL,match:({viewMode:a})=>!!(a&&a.match(/^(story|docs)$/)),render:()=>r.createElement(A,null)})});
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
//# sourceMappingURL=manager-bundle.mjs.map
