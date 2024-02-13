"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[7056],{35180:(N,R,t)=>{t.d(R,{B:()=>P,D:()=>A,H:()=>T,R:()=>$});var l=t(19968),M=t(48936),s=t(63358),O=t(20596),p=t(48112),m=t(42816),f=t(28464),v=t(16048),C=t(14520),y=t(15396),I=t(14632),j=t(10212),S=t(48132),W=t(69372);const u=(0,W.cp)(M.C)`
  svg path {
    fill: ${({theme:w})=>w.colors.neutral600};
  }
`,D=({name:w})=>(0,l.jsxs)(M.C,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,v.W8)(300),children:[(0,l.jsx)(u,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6,children:(0,l.jsx)(C.c,{width:`${8/16}rem`})}),(0,l.jsx)(s.O,{fontWeight:"bold",children:w})]}),A=()=>(0,l.jsx)(j.D,{renderItem:w=>{if(w.type===S.D.STAGE)return(0,l.jsx)(D,{name:typeof w.item=="string"?w.item:null})}}),$=({children:w})=>(0,l.jsx)(O._,{children:(0,l.jsx)(p.G,{tabIndex:-1,children:(0,l.jsx)(m.S,{children:w})})}),P=({href:w})=>{const{formatMessage:Q}=(0,I.c)();return(0,l.jsx)(v.cH,{startIcon:(0,l.jsx)(y.c,{}),to:w,children:Q({id:"global.back",defaultMessage:"Back"})})},T=({title:w,subtitle:Q,navigationAction:J,primaryAction:q})=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(v.K8,{name:w}),(0,l.jsx)(f.a,{navigationAction:J,primaryAction:q,title:w,subtitle:Q})]})},8800:(N,R,t)=>{t.d(R,{a:()=>O,g:()=>s});var l=t(15520),M=t(48132);function s(p){if(!p)return null;const f=Object.entries(l.g.colors).filter(([,v])=>v.toUpperCase()===p.toUpperCase()).reduce((v,[C])=>(M.S?.[C]&&(v=C),v),null);return f?{themeColorName:f,name:M.S[f]}:null}function O(){return Object.entries(M.S).map(([p,m])=>({hex:l.g.colors[p].toUpperCase(),name:m}))}},68940:(N,R,t)=>{t.d(R,{u:()=>p});var l=t(62552),M=t(16048),s=t(14632),O=t(48632);const p=(m={},f={})=>{const{id:v="",...C}=m,{get:y}=(0,M.Qn)(),{locale:I}=(0,s.c)(),j=(0,M.In)(I,{sensitivity:"base"}),{data:S,error:W,isError:u,isLoading:D,refetch:A}=(0,O.useQuery)(["roles",v,C],async()=>{const{data:P}=await y(`/admin/roles/${v??""}`,{params:C});return P},f);return{roles:l.useMemo(()=>{let P=[];return S&&(Array.isArray(S.data)?P=S.data:P=[S.data]),[...P].sort((T,w)=>j.compare(T.name,w.name))},[S,j]),error:W,isError:u,isLoading:D,refetch:A}}},50040:(N,R,t)=>{t.d(R,{u:()=>p});var l=t(62552),M=t(16048),s=t(78164),O=t(48632);function p(){const{get:m}=(0,M.Qn)(),{formatAPIError:f}=(0,M.An)(),v=(0,M.eo)(),C=(0,O.useQueries)([{queryKey:["content-manager","components"],async queryFn(){const{data:{data:u}}=await m("/content-manager/components");return u},onError(u){u instanceof s.Uh&&v({type:"warning",message:f(u)})}},{queryKey:["content-manager","content-types"],async queryFn(){const{data:{data:u}}=await m("/content-manager/content-types");return u},onError(u){u instanceof s.Uh&&v({type:"warning",message:f(u)})}}]),[y,I]=C,j=y.isLoading||I.isLoading,S=l.useMemo(()=>(I?.data??[]).filter(u=>u.kind==="collectionType"&&u.isDisplayed),[I?.data]),W=l.useMemo(()=>(I?.data??[]).filter(u=>u.kind!=="collectionType"&&u.isDisplayed),[I?.data]);return{isLoading:j,components:l.useMemo(()=>y?.data??[],[y?.data]),collectionTypes:S,singleTypes:W}}},30320:(N,R,t)=>{t.d(R,{u:()=>O});var l=t(62552),M=t(16048),s=t(48632);function O(p={}){const{get:m}=(0,M.Qn)(),{id:f="",...v}=p,C={populate:"stages"},{data:y,isLoading:I,status:j,refetch:S}=(0,s.useQuery)(["review-workflows","workflows",f],async()=>{const{data:D}=await m(`/admin/review-workflows/workflows/${f}`,{params:{...C,...v}});return D}),W=l.useMemo(()=>{let D=[];return y?.data&&(Array.isArray(y.data)?D=y.data:D=[y.data]),D},[y]);return{meta:l.useMemo(()=>{let D;return y&&"meta"in y&&(D=y.meta),D},[y]),workflows:W,isLoading:I,status:j,refetch:S}}},69600:(N,R,t)=>{t.d(R,{S:()=>et,W:()=>at,a:()=>$e,b:()=>Ee,c:()=>fe,d:()=>ke,e:()=>Ae,f:()=>je,g:()=>be,h:()=>ge,i:()=>Be,j:()=>He,k:()=>Ne,l:()=>Te,r:()=>Re,s:()=>Qe,u:()=>Ce,v:()=>nt});var l=t(62552),M=t(10212),s=t(19968),O=t(5e3),p=t(63358),m=t(48936),f=t(5928),v=t(23264),C=t(35480),y=t(42616),I=t(34404),j=t(12248),S=t(28724),W=t(70996),u=t(62492),D=t(56104),A=t(16048),$=t(14632),P=t(70516),T=t(69372),w=t(71692),Q=t(67636),J=t(67516),q=t(32680),we=t(33104),de=t(2165),F=t(50948),H=t(31812),Oe=t(88572),i=t(48132),ee=t(8800),L=t(67432),De=t(13192),_e=t(29088),Pe=t(35184),x=t(52540);function Ce(e,a){const o=(0,M.q)();(0,l.useEffect)(()=>{o.injectReducer(e,a)},[o,e,a])}function Se(e){return{type:i.j,payload:{id:e}}}function Te({workflow:e}){return{type:i.A,payload:e}}function ke({workflows:e}){return{type:i.c,payload:e}}function Ie(e){return{type:i.k,payload:{stageId:e}}}function ge(e){return{type:i.d,payload:e}}function te(e,a){return{type:i.l,payload:{stageId:e,...a}}}function We(e){return{type:i.m,payload:e}}function xe(e,a){return{type:i.n,payload:{newIndex:a,oldIndex:e}}}function ue(e){return{type:i.i,payload:e}}function Re(){return{type:i.e}}function Ae(e){return{type:i.f,payload:e}}function je(e){return{type:i.g,payload:e}}function be(e){return{type:i.h,payload:e}}const se=(0,T.cp)(w.c)`
  > circle {
    fill: ${({theme:e})=>e.colors.neutral150};
  }
  > path {
    fill: ${({theme:e})=>e.colors.neutral600};
  }
`,Le=(0,T.cp)(O.k)`
  border-radius: 26px;

  svg {
    height: ${({theme:e})=>e.spaces[6]};
    width: ${({theme:e})=>e.spaces[6]};

    > path {
      fill: ${({theme:e})=>e.colors.neutral600};
    }
  }

  &:hover {
    color: ${({theme:e})=>e.colors.primary600} !important;
    ${p.O} {
      color: ${({theme:e})=>e.colors.primary600} !important;
    }

    ${se} {
      > circle {
        fill: ${({theme:e})=>e.colors.primary600};
      }
      > path {
        fill: ${({theme:e})=>e.colors.neutral100};
      }
    }
  }

  &:active {
    ${p.O} {
      color: ${({theme:e})=>e.colors.primary600};
    }

    ${se} {
      > circle {
        fill: ${({theme:e})=>e.colors.primary600};
      }
      > path {
        fill: ${({theme:e})=>e.colors.neutral100};
      }
    }
  }
`,pe=({children:e,...a})=>(0,s.jsx)(Le,{as:"button",background:"neutral0",border:"neutral150",paddingBottom:3,paddingLeft:4,paddingRight:4,paddingTop:3,shadow:"filterShadow",...a,children:(0,s.jsxs)(m.C,{gap:2,children:[(0,s.jsx)(se,{"aria-hidden":!0}),(0,s.jsx)(p.O,{variant:"pi",fontWeight:"bold",textColor:"neutral500",children:e})]})});pe.propTypes={children:we.node.isRequired};const V={serverState:{contentTypes:{collectionTypes:[],singleTypes:[]},roles:[],workflow:null,workflows:[]},clientState:{currentWorkflow:{data:{name:"",contentTypes:[],stages:[],permissions:void 0}},isLoading:!0}};function Be(e=V,a){return(0,_e.Ut)(e,o=>{const{payload:d}=a;switch(a.type){case i.f:{o.serverState.contentTypes=d;break}case i.h:{o.clientState.isLoading=d;break}case i.g:{o.serverState.roles=d;break}case i.A:{const n=d;n&&(o.serverState.workflow=n,o.clientState.currentWorkflow.data={...n,stages:n.stages.map(c=>({...c,color:c?.color??i.b}))});break}case i.c:{o.serverState.workflows=d;break}case i.e:{o.clientState=V.clientState,o.serverState=(0,_e.eQ)(V.serverState);break}case i.k:{const{stageId:n}=d,{currentWorkflow:c}=e.clientState;o.clientState.currentWorkflow.data.stages=c.data.stages?.filter(E=>(E?.id??E.__temp_key__)!==n);break}case i.d:{const{currentWorkflow:n}=e.clientState;n.data||(o.clientState.currentWorkflow.data={stages:[]});const c=me(o.clientState.currentWorkflow.data.stages);o.clientState.currentWorkflow.data.stages?.push({...d,color:d?.color??i.b,__temp_key__:c});break}case i.j:{const{currentWorkflow:n}=e.clientState,{id:c}=d,E=n.data.stages?.findIndex(h=>(h?.id??h?.__temp_key__)===c);if(E!==void 0&&E!==-1){const h=n.data.stages?.[E];o.clientState.currentWorkflow.data.stages?.splice(E+1,0,{...h,id:void 0,__temp_key__:me(o.clientState.currentWorkflow.data.stages)})}break}case i.l:{const{currentWorkflow:n}=e.clientState,{stageId:c,...E}=d;o.clientState.currentWorkflow.data.stages=n.data.stages?.map(h=>(h.id??h.__temp_key__)===c?{...h,...E}:h);break}case i.m:{const{currentWorkflow:n}=e.clientState;o.clientState.currentWorkflow.data.stages=n.data.stages?.map(c=>({...c,...d}));break}case i.n:{const{currentWorkflow:{data:{stages:n}}}=e.clientState,{newIndex:c,oldIndex:E}=d;if(n&&c>=0&&c<n.length){const h=n[E],b=[...n];b.splice(E,1),b.splice(c,0,h),o.clientState.currentWorkflow.data.stages=b}break}case i.i:{o.clientState.currentWorkflow.data={...o.clientState.currentWorkflow.data,...d};break}}})}const me=(e=[])=>{const a=e.map(o=>Number(o.id??o.__temp_key__));return Math.max(...a,-1)+1},B=e=>e[i.R]??V,Ke=(0,L.M3)(B,({serverState:{contentTypes:e}})=>e),fe=(0,L.M3)(B,({serverState:{roles:e}})=>e),Ee=(0,L.M3)(B,({clientState:{currentWorkflow:e}})=>e.data),Ue=(0,L.M3)(B,({serverState:{workflows:e}})=>e),$e=(0,L.M3)(B,({serverState:e,clientState:{currentWorkflow:a}})=>!De(e.workflow,a.data)),Ne=(0,L.M3)(B,({serverState:e,clientState:{currentWorkflow:a}})=>!(e.workflow?.stages??[]).every(o=>!!a.data.stages?.find(({id:d})=>d===o.id))),Qe=(0,L.M3)(B,({clientState:{isLoading:e}})=>e),He=(0,L.M3)(B,({serverState:e})=>e),ze=(0,T.cp)(f.eI)`
  padding-left: ${({theme:e})=>e.spaces[7]};
`,Fe=(0,T.cp)(m.C)`
  > * {
    flex-grow: 1;
  }
`,Ve=(0,T.cp)(de.IP)`
  color: ${({theme:e})=>e.colors.danger600};
`,Ge=(0,T.cp)(F.mf)`
  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral100};
  }

  > span {
    font-size: 0;
  }
`,Ye=(0,T.cp)(v.w)`
  align-items: center;
  border-radius: ${({theme:e})=>e.borderRadius};
  display: flex;
  justify-content: center;

  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral100};
  }

  svg {
    height: auto;
    width: ${({theme:e})=>e.spaces[3]}};
  }
`,Xe=(0,ee.a)(),Ze=()=>(0,s.jsx)(O.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",display:"block",hasRadius:!0,padding:6,shadow:"tableShadow"}),Je=({id:e,index:a,canDelete:o,canReorder:d,canUpdate:n,isOpen:c=!1,stagesCount:E})=>{const h=r=>`${r+1} of ${E}`,b=r=>{_(g({id:"dnd.grab-item",defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:K.value,position:h(r)}))},ae=r=>{_(g({id:"dnd.drop-item",defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:K.value,position:h(r)}))},G=()=>{_(g({id:"dnd.cancel-item",defaultMessage:"{item}, dropped. Re-order cancelled."},{item:K.value}))},ne=(r,U)=>{_(g({id:"dnd.reorder",defaultMessage:"{item}, moved. New position in list: {position}."},{item:K.value,position:h(r)})),k(xe(U,r))},oe=()=>{ie(!0)},[Y,_]=l.useState(null),{formatMessage:g}=(0,$.c)(),{trackUsage:re}=(0,A.m4)(),k=(0,P.OY)(),ot=(0,A.eo)(),[le,rt]=l.useState(c),[lt,ie]=l.useState(!1),[K,he,it]=(0,H.m4)(`stages.${a}.name`),[X,Me,ct]=(0,H.m4)(`stages.${a}.color`),[z,ve,dt]=(0,H.m4)(`stages.${a}.permissions`),_t=(0,P.w1)(fe),[{handlerId:gt,isDragging:ut,handleKeyDown:pt},mt,ft,Et,ye]=(0,M.r)(d,{index:a,item:{index:a,name:K.value},onGrabItem:b,onDropItem:ae,onMoveItem:ne,onCancel:G,type:i.D.STAGE}),ht=(0,M.t)(mt,ft),Mt=Xe.map(({hex:r,name:U})=>({value:r,label:g({id:"Settings.review-workflows.stage.color.name",defaultMessage:"{name}"},{name:U}),color:r})),{themeColorName:vt}=(0,ee.g)(X.value)??{},ce=_t?.filter(r=>r.code!=="strapi-super-admin");return l.useEffect(()=>{ye((0,Oe.sf)(),{captureDraggingState:!1})},[ye,a]),(0,s.jsxs)(O.k,{ref:r=>ht(r),children:[Y&&(0,s.jsx)(C.K,{"aria-live":"assertive",children:Y}),ut?(0,s.jsx)(Ze,{}):(0,s.jsxs)(y.G,{size:"S",variant:"primary",onToggle:()=>{rt(!le),le||re("willEditStage")},expanded:le,shadow:"tableShadow",error:he.error??Me?.error??ve?.error,hasErrorMessage:!1,children:[(0,s.jsx)(I.M,{title:K.value,togglePosition:"left",action:(o||n)&&(0,s.jsxs)(m.C,{children:[(0,s.jsxs)(F.Ss,{children:[(0,s.jsxs)(Ge,{size:"S",endIcon:null,paddingLeft:2,paddingRight:2,children:[(0,s.jsx)(Q.c,{"aria-hidden":!0,focusable:!1}),(0,s.jsx)(C.K,{as:"span",children:g({id:"[tbdb].components.DynamicZone.more-actions",defaultMessage:"More actions"})})]}),(0,s.jsx)(F.kP,{popoverPlacement:"bottom-end",zIndex:2,children:(0,s.jsxs)(F.gN,{children:[n&&(0,s.jsx)(de.IP,{onClick:()=>k(Se(e)),children:g({id:"Settings.review-workflows.stage.delete",defaultMessage:"Duplicate stage"})}),o&&(0,s.jsx)(Ve,{onClick:()=>k(Ie(e)),children:g({id:"Settings.review-workflows.stage.delete",defaultMessage:"Delete"})})]})})]}),n&&(0,s.jsx)(Ye,{background:"transparent",forwardedAs:"div",hasRadius:!0,role:"button",noBorder:!0,tabIndex:0,"data-handler-id":gt,ref:Et,label:g({id:"Settings.review-workflows.stage.drag",defaultMessage:"Drag"}),onClick:r=>r.stopPropagation(),onKeyDown:pt,children:(0,s.jsx)(J.c,{})})]})}),(0,s.jsx)(j.u,{padding:6,background:"neutral0",hasRadius:!0,children:(0,s.jsxs)(S.y,{gap:4,children:[(0,s.jsx)(W.C,{col:6,children:(0,s.jsx)(u.g,{...K,id:K.name,disabled:!n,label:g({id:"Settings.review-workflows.stage.name.label",defaultMessage:"Stage name"}),error:he.error??!1,onChange:r=>{it.setValue(r.target.value),k(te(e,{name:r.target.value}))},required:!0})}),(0,s.jsx)(W.C,{col:6,children:(0,s.jsx)(D.K_,{disabled:!n,error:Me?.error??!1,id:X.name,required:!0,label:g({id:"content-manager.reviewWorkflows.stage.color",defaultMessage:"Color"}),onChange:r=>{ct.setValue(r),k(te(e,{color:String(r)}))},value:X.value.toUpperCase(),startIcon:(0,s.jsx)(m.C,{as:"span",height:2,background:X.value,borderColor:vt==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),children:Mt.map(({value:r,label:U,color:Z})=>{const{themeColorName:yt}=(0,ee.g)(Z)||{};return(0,s.jsx)(D.kH,{value:r,startIcon:(0,s.jsx)(m.C,{as:"span",height:2,background:Z,borderColor:yt==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),children:U},r)})})}),(0,s.jsx)(W.C,{col:6,children:ce?.length===0?(0,s.jsx)(A.Q$,{description:{id:"Settings.review-workflows.stage.permissions.noPermissions.description",defaultMessage:"You don\u2019t have the permission to see roles"},intlLabel:{id:"Settings.review-workflows.stage.permissions.label",defaultMessage:"Roles that can change this stage"},name:z.name}):(0,s.jsxs)(m.C,{alignItems:"flex-end",gap:3,children:[(0,s.jsx)(Fe,{grow:1,children:(0,s.jsx)(f.e,{...z,disabled:!n,error:ve.error??!1,id:z.name,label:g({id:"Settings.review-workflows.stage.permissions.label",defaultMessage:"Roles that can change this stage"}),onChange:r=>{const U=r.map(Z=>({role:parseInt(Z,10),action:"admin::review-workflows.stage.transition"}));dt.setValue(U),k(te(e,{permissions:U}))},placeholder:g({id:"Settings.review-workflows.stage.permissions.placeholder",defaultMessage:"Select a role"}),required:!0,value:(z.value??[]).map(r=>`${r.role}`),withTags:!0,children:(0,s.jsx)(f.OK,{label:g({id:"Settings.review-workflows.stage.permissions.allRoles.label",defaultMessage:"All roles"}),values:ce?.map(r=>`${r.id}`),children:ce?.map(r=>(0,s.jsx)(ze,{value:`${r.id}`,children:r.name},r.id))})})}),(0,s.jsx)(v.w,{disabled:!n,icon:(0,s.jsx)(q.c,{}),label:g({id:"Settings.review-workflows.stage.permissions.apply.label",defaultMessage:"Apply to all stages"}),size:"L",variant:"secondary",onClick:()=>oe()})]})})]})})]}),(0,s.jsx)(A.cz.Root,{iconRightButton:null,isOpen:lt,onToggleDialog:()=>ie(!1),onConfirm:()=>{k(We({permissions:z.value})),ie(!1),ot({type:"success",message:g({id:"Settings.review-workflows.page.edit.confirm.stages.permissions.copy.success",defaultMessage:"Applied roles to all other stages of the workflow"})})},variantRightButton:"default",children:(0,s.jsx)(A.cz.Body,{children:(0,s.jsx)(p.O,{textAlign:"center",variant:"omega",children:g({id:"Settings.review-workflows.page.edit.confirm.stages.permissions.copy",defaultMessage:"Roles that can change that stage will be applied to all the other stages."})})})})]})},qe=(0,T.cp)(O.k)`
  transform: translateX(-50%);
`,et=({canDelete:e=!0,canUpdate:a=!0,stages:o=[]})=>{const{formatMessage:d}=(0,$.c)(),n=(0,P.OY)(),{trackUsage:c}=(0,A.m4)();return(0,s.jsxs)(m.C,{direction:"column",gap:6,width:"100%",children:[(0,s.jsxs)(O.k,{position:"relative",width:"100%",children:[(0,s.jsx)(qe,{background:"neutral200",height:"100%",left:"50%",position:"absolute",top:"0",width:2,zIndex:1}),(0,s.jsx)(m.C,{direction:"column",alignItems:"stretch",gap:6,zIndex:2,position:"relative",as:"ol",children:o.map((E,h)=>{const b=Number(E?.id??E.__temp_key__);return(0,s.jsx)(O.k,{as:"li",children:(0,s.jsx)(Je,{id:b,index:h,isOpen:!E.id,canDelete:o.length>1&&e,canReorder:o.length>1,canUpdate:a,stagesCount:o.length})},`stage-${b}`)})})]}),a&&(0,s.jsx)(pe,{type:"button",onClick:()=>{n(ge({name:""})),c("willCreateStage")},children:d({id:"Settings.review-workflows.stage.add",defaultMessage:"Add new stage"})})]})},tt=(0,T.cp)(f.eI)`
  padding-left: ${({theme:e})=>e.spaces[7]};
`,st=(0,T.cp)(p.O)`
  font-style: italic;
`,at=({canUpdate:e=!0})=>{const{formatMessage:a,locale:o}=(0,$.c)(),d=(0,P.OY)(),n=(0,P.w1)(Ke),c=(0,P.w1)(Ee),E=(0,P.w1)(Ue),[h,b,ae]=(0,H.m4)("name"),[G,ne,oe]=(0,H.m4)("contentTypes"),Y=(0,A.In)(o,{sensitivity:"base"});return(0,s.jsxs)(S.y,{background:"neutral0",hasRadius:!0,gap:4,padding:6,shadow:"tableShadow",children:[(0,s.jsx)(W.C,{col:6,children:(0,s.jsx)(u.g,{...h,id:h.name,disabled:!e,label:a({id:"Settings.review-workflows.workflow.name.label",defaultMessage:"Workflow Name"}),error:b.error??!1,onChange:_=>{d(ue({name:_.target.value})),ae.setValue(_.target.value)},required:!0})}),n&&(0,s.jsx)(W.C,{col:6,children:(0,s.jsx)(f.e,{...G,customizeContent:_=>a({id:"Settings.review-workflows.workflow.contentTypes.displayValue",defaultMessage:"{count} {count, plural, one {content type} other {content types}} selected"},{count:_?.length}),disabled:!e,error:ne.error??!1,id:G.name,label:a({id:"Settings.review-workflows.workflow.contentTypes.label",defaultMessage:"Associated to"}),onChange:_=>{d(ue({contentTypes:_})),oe.setValue(_)},placeholder:a({id:"Settings.review-workflows.workflow.contentTypes.placeholder",defaultMessage:"Select"}),children:[...n.collectionTypes.length>0?[{label:a({id:"Settings.review-workflows.workflow.contentTypes.collectionTypes.label",defaultMessage:"Collection Types"}),children:[...n.collectionTypes].sort((_,g)=>Y.compare(_.info.displayName,g.info.displayName)).map(_=>({label:_.info.displayName,value:_.uid}))}]:[],...n.singleTypes.length>0?[{label:a({id:"Settings.review-workflows.workflow.contentTypes.singleTypes.label",defaultMessage:"Single Types"}),children:[...n.singleTypes].map(_=>({label:_.info.displayName,value:_.uid}))}]:[]].map(_=>{if("children"in _)return(0,s.jsx)(f.OK,{label:_.label,values:_.children.map(g=>g.value.toString()),children:_.children.map(g=>{const{name:re}=E?.find(k=>(c&&k.id!==c.id||!c)&&k.contentTypes.includes(g.value))??{};return(0,s.jsx)(tt,{value:g.value,children:(0,s.jsx)(p.O,{children:a({id:"Settings.review-workflows.workflow.contentTypes.assigned.notice",defaultMessage:"{label} {name, select, undefined {} other {<i>(assigned to <em>{name}</em> workflow)</i>}}"},{label:g.label,name:re,em:(...k)=>(0,s.jsx)(p.O,{as:"em",fontWeight:"bold",children:k}),i:(...k)=>(0,s.jsx)(st,{children:k})})})},g.value)})},_.label)})})})]})};async function nt({values:e,formatMessage:a}){const o=x.kt({contentTypes:x.M$().of(x.Qb()),name:x.Qb().max(255,a({id:"Settings.review-workflows.validation.name.max-length",defaultMessage:"Name can not be longer than 255 characters"})).required(),stages:x.M$().of(x.kt().shape({name:x.Qb().required(a({id:"Settings.review-workflows.validation.stage.name",defaultMessage:"Name is required"})).max(255,a({id:"Settings.review-workflows.validation.stage.max-length",defaultMessage:"Name can not be longer than 255 characters"})).test("unique-name",a({id:"Settings.review-workflows.validation.stage.duplicate",defaultMessage:"Stage name must be unique"}),function(d){const{options:{context:n}}=this;return n?.stages.filter(c=>c.name===d).length===1}),color:x.Qb().required(a({id:"Settings.review-workflows.validation.stage.color",defaultMessage:"Color is required"})).matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/i),permissions:x.M$(x.kt({role:x.CQ().strict().typeError(a({id:"Settings.review-workflows.validation.stage.permissions.role.number",defaultMessage:"Role must be of type number"})).required(),action:x.Qb().required({id:"Settings.review-workflows.validation.stage.permissions.action.required",defaultMessage:"Action is a required argument"})})).strict()})).min(1)});try{return await o.validate(e,{abortEarly:!1,context:e}),!0}catch(d){const n={};return d instanceof x.$D&&d.inner.forEach(c=>{c.path&&Pe(n,c.path,c.message)}),n}}}}]);
