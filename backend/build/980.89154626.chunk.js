"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[980],{35180:(L,c,s)=>{s.d(c,{B:()=>U,D:()=>B,H:()=>K,R:()=>I});var t=s(19968),l=s(48936),E=s(63358),g=s(20596),m=s(48112),P=s(42816),O=s(28464),d=s(16048),r=s(14520),n=s(15396),M=s(14632),v=s(10212),C=s(48132),o=s(69372);const e=(0,o.cp)(l.C)`
  svg path {
    fill: ${({theme:i})=>i.colors.neutral600};
  }
`,D=({name:i})=>(0,t.jsxs)(l.C,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,d.W8)(300),children:[(0,t.jsx)(e,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6,children:(0,t.jsx)(r.c,{width:`${8/16}rem`})}),(0,t.jsx)(E.O,{fontWeight:"bold",children:i})]}),B=()=>(0,t.jsx)(v.D,{renderItem:i=>{if(i.type===C.D.STAGE)return(0,t.jsx)(D,{name:typeof i.item=="string"?i.item:null})}}),I=({children:i})=>(0,t.jsx)(g._,{children:(0,t.jsx)(m.G,{tabIndex:-1,children:(0,t.jsx)(P.S,{children:i})})}),U=({href:i})=>{const{formatMessage:h}=(0,M.c)();return(0,t.jsx)(d.cH,{startIcon:(0,t.jsx)(n.c,{}),to:i,children:h({id:"global.back",defaultMessage:"Back"})})},K=({title:i,subtitle:h,navigationAction:y,primaryAction:u})=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.K8,{name:i}),(0,t.jsx)(O.a,{navigationAction:y,primaryAction:u,title:i,subtitle:h})]})},30980:(L,c,s)=>{s.d(c,{ProtectedReviewWorkflowsPage:()=>k});var t=s(19968),l=s(62552),E=s(48936),g=s(89296),m=s(42848),P=s(89616),O=s(20464),d=s(76512),r=s(9752),n=s(63358),M=s(35480),v=s(48744),C=s(23264),o=s(16048),e=s(48636),D=s(89940),B=s(71324),I=s(78164),U=s(14632),K=s(48632),i=s(70516),h=s(49008),y=s(69372),u=s(50040),S=s(14134),V=s(17072),$=s(35180),j=s(74556),Y=s(48132),Z=s(30320),Os=s(17892),Ps=s(31212),cs=s(10212),gs=s(54320),ms=s(5240),vs=s(91892),fs=s(36196),Cs=s(20880),Ts=s(21424),hs=s(31812),Ls=s(18424),Ws=s(52540),As=s(21968),Rs=s(12132),Bs=s(85676),Is=s(35184),Us=s(99568),Ks=s(96556),ys=s(13192),us=s(30840),js=s(77784),xs=s(79371),ws=s(67888),ps=s(52600),Ss=s(95752),$s=s(37388),Fs=s(61840),Ns=s(49108),Qs=s(44632),Hs=s(50840),zs=s(20252),Gs=s(86432),Vs=s(22612),Ys=s(24808),Zs=s(24024),Js=s(33656),Xs=s(43280),ks=s(79804),bs=s(19632),qs=s(29576),st=s(61152),tt=s(9589),nt=s(45488),ot=s(75516);const J=(0,y.cp)(o.cH)`
  align-items: center;
  height: ${(0,o.W8)(32)};
  display: flex;
  justify-content: center;
  padding: ${({theme:a})=>`${a.spaces[2]}}`};
  width: ${(0,o.W8)(32)};

  svg {
    height: ${(0,o.W8)(12)};
    width: ${(0,o.W8)(12)};

    path {
      fill: ${({theme:a})=>a.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:a})=>a.colors.neutral800};
      }
    }
  }
`,X=()=>{const{formatMessage:a}=(0,U.c)(),{push:F}=(0,h.Uz)(),{trackUsage:N}=(0,o.m4)(),[x,w]=l.useState(null),[b,W]=l.useState(!1),{collectionTypes:q,singleTypes:ss,isLoading:ts}=(0,u.u)(),{meta:f,workflows:Q,isLoading:p,refetch:ns}=(0,Z.u)(),{del:os}=(0,o.Qn)(),{formatAPIError:es}=(0,o.An)(),H=(0,o.eo)(),{getFeature:as,isLoading:z}=(0,V.u)(),_s=(0,i.w1)(S.s),{allowedActions:{canCreate:G,canDelete:is}}=(0,o.aU)(_s.settings?.["review-workflows"]),T=as("review-workflows")?.[Y.C],{mutateAsync:ls,isLoading:rs}=(0,K.useMutation)(async({workflowId:_,stages:A})=>{const{data:{data:R}}=await os(`/admin/review-workflows/workflows/${_}`,{data:A});return R},{onSuccess(){H({type:"success",message:{id:"notification.success.deleted",defaultMessage:"Deleted"}})}}),Es=_=>[...q,...ss].find(R=>R.uid===_)?.info.displayName,ds=_=>{w(_)},Ms=()=>{w(null)},Ds=async()=>{if(x)try{const _=await ls({workflowId:x});return await ns(),w(null),_}catch(_){return _ instanceof I.Uh&&H({type:"warning",message:es(_)}),null}};return l.useEffect(()=>{!p&&!z&&T&&f&&f?.workflowCount>parseInt(T,10)&&W(!0)},[z,p,f,f?.workflowCount,T]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)($.H,{primaryAction:G&&(0,t.jsx)(o.EZ,{startIcon:(0,t.jsx)(e.c,{}),size:"S",to:"/settings/review-workflows/create",onClick:_=>{T&&f&&f?.workflowCount>=parseInt(T,10)?(_.preventDefault(),W(!0)):N("willCreateWorkflow")},children:a({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}),subtitle:a({id:"Settings.review-workflows.list.page.subtitle",defaultMessage:"Manage your content review process"}),title:a({id:"Settings.review-workflows.list.page.title",defaultMessage:"Review Workflows"})}),(0,t.jsxs)($.R,{children:[p||ts?(0,t.jsx)(E.C,{justifyContent:"center",children:(0,t.jsx)(g.c,{children:a({id:"Settings.review-workflows.page.list.isLoading",defaultMessage:"Workflows are loading"})})}):(0,t.jsxs)(m.o,{colCount:3,footer:G&&(0,t.jsx)(P.U,{icon:(0,t.jsx)(e.c,{}),onClick:()=>{T&&f&&f?.workflowCount>=parseInt(T,10)?W(!0):(F("/settings/review-workflows/create"),N("willCreateWorkflow"))},children:a({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}),rowCount:1,children:[(0,t.jsx)(O.o,{children:(0,t.jsxs)(d.Tr,{children:[(0,t.jsx)(r.Th,{children:(0,t.jsx)(n.O,{variant:"sigma",children:a({id:"Settings.review-workflows.list.page.list.column.name.title",defaultMessage:"Name"})})}),(0,t.jsx)(r.Th,{children:(0,t.jsx)(n.O,{variant:"sigma",children:a({id:"Settings.review-workflows.list.page.list.column.stages.title",defaultMessage:"Stages"})})}),(0,t.jsx)(r.Th,{children:(0,t.jsx)(n.O,{variant:"sigma",children:a({id:"Settings.review-workflows.list.page.list.column.contentTypes.title",defaultMessage:"Content Types"})})}),(0,t.jsx)(r.Th,{children:(0,t.jsx)(M.K,{children:a({id:"Settings.review-workflows.list.page.list.column.actions.title",defaultMessage:"Actions"})})})]})}),(0,t.jsx)(v.K,{children:Q?.map(_=>(0,l.createElement)(d.Tr,{...(0,o.on)({fn(A){A.target.nodeName!=="BUTTON"&&F(`/settings/review-workflows/${_.id}`)}}),key:`workflow-${_.id}`},(0,t.jsx)(r.Td,{width:(0,o.W8)(250),children:(0,t.jsx)(n.O,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:_.name})}),(0,t.jsx)(r.Td,{children:(0,t.jsx)(n.O,{textColor:"neutral800",children:_.stages.length})}),(0,t.jsx)(r.Td,{children:(0,t.jsx)(n.O,{textColor:"neutral800",children:(_?.contentTypes??[]).map(Es).join(", ")})}),(0,t.jsx)(r.Td,{children:(0,t.jsxs)(E.C,{alignItems:"center",justifyContent:"end",children:[(0,t.jsx)(J,{to:`/settings/review-workflows/${_.id}`,"aria-label":a({id:"Settings.review-workflows.list.page.list.column.actions.edit.label",defaultMessage:"Edit {name}"},{name:_.name}),children:(0,t.jsx)(D.c,{})}),Q.length>1&&is&&(0,t.jsx)(C.w,{"aria-label":a({id:"Settings.review-workflows.list.page.list.column.actions.delete.label",defaultMessage:"Delete {name}"},{name:"Default workflow"}),icon:(0,t.jsx)(B.c,{}),noBorder:!0,onClick:()=>{ds(String(_.id))}})]})})))})]}),(0,t.jsx)(o.cz,{bodyText:{id:"Settings.review-workflows.list.page.delete.confirm.body",defaultMessage:"If you remove this worfklow, all stage-related information will be removed for this content-type. Are you sure you want to remove it?"},isConfirmButtonLoading:rs,isOpen:!!x,onToggleDialog:Ms,onConfirm:Ds}),(0,t.jsxs)(j.L.Root,{isOpen:b,onClose:()=>W(!1),children:[(0,t.jsx)(j.L.Title,{children:a({id:"Settings.review-workflows.list.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,t.jsx)(j.L.Body,{children:a({id:"Settings.review-workflows.list.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]})]})]})},k=()=>{const a=(0,i.w1)(S.s);return(0,t.jsx)(o.rF,{permissions:a.settings?.["review-workflows"]?.main,children:(0,t.jsx)(X,{})})}},50040:(L,c,s)=>{s.d(c,{u:()=>m});var t=s(62552),l=s(16048),E=s(78164),g=s(48632);function m(){const{get:P}=(0,l.Qn)(),{formatAPIError:O}=(0,l.An)(),d=(0,l.eo)(),r=(0,g.useQueries)([{queryKey:["content-manager","components"],async queryFn(){const{data:{data:e}}=await P("/content-manager/components");return e},onError(e){e instanceof E.Uh&&d({type:"warning",message:O(e)})}},{queryKey:["content-manager","content-types"],async queryFn(){const{data:{data:e}}=await P("/content-manager/content-types");return e},onError(e){e instanceof E.Uh&&d({type:"warning",message:O(e)})}}]),[n,M]=r,v=n.isLoading||M.isLoading,C=t.useMemo(()=>(M?.data??[]).filter(e=>e.kind==="collectionType"&&e.isDisplayed),[M?.data]),o=t.useMemo(()=>(M?.data??[]).filter(e=>e.kind!=="collectionType"&&e.isDisplayed),[M?.data]);return{isLoading:v,components:t.useMemo(()=>n?.data??[],[n?.data]),collectionTypes:C,singleTypes:o}}},30320:(L,c,s)=>{s.d(c,{u:()=>g});var t=s(62552),l=s(16048),E=s(48632);function g(m={}){const{get:P}=(0,l.Qn)(),{id:O="",...d}=m,r={populate:"stages"},{data:n,isLoading:M,status:v,refetch:C}=(0,E.useQuery)(["review-workflows","workflows",O],async()=>{const{data:D}=await P(`/admin/review-workflows/workflows/${O}`,{params:{...r,...d}});return D}),o=t.useMemo(()=>{let D=[];return n?.data&&(Array.isArray(n.data)?D=n.data:D=[n.data]),D},[n]);return{meta:t.useMemo(()=>{let D;return n&&"meta"in n&&(D=n.meta),D},[n]),workflows:o,isLoading:M,status:v,refetch:C}}},89616:(L,c,s)=>{s.d(c,{U:()=>r});var t=s(19968),l=s(69372),E=s(5e3),g=s(6912),m=s(48936),P=s(63358);const O=(0,l.cp)(E.k)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:n})=>n.colors.primary600};
  }
`,d=(0,l.cp)(E.k)`
  border-radius: 0 0 ${({theme:n})=>n.borderRadius} ${({theme:n})=>n.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,r=({children:n,icon:M,...v})=>(0,t.jsxs)("div",{children:[(0,t.jsx)(g.c,{}),(0,t.jsx)(d,{as:"button",background:"primary100",padding:5,...v,children:(0,t.jsxs)(m.C,{children:[(0,t.jsx)(O,{"aria-hidden":!0,background:"primary200",children:M}),(0,t.jsx)(E.k,{paddingLeft:3,children:(0,t.jsx)(P.O,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:n})})]})})]})}}]);
