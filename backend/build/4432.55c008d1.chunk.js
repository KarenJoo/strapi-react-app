"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[4432],{4432:(q,S,t)=>{t.d(S,{ProtectedListPage:()=>gt});var s=t(19968),c=t(62552),j=t(3400),E=t(20596),L=t(48112),D=t(28464),O=t(52051),h=t(63358),y=t(35676),l=t(42816),M=t(5e3),$=t(42848),_=t(89616),tt=t(20464),N=t(76512),d=t(9752),p=t(19576),st=t(35480),ot=t(48744),B=t(48936),z=t(69372);const P=z.cp.div`
  background: ${({theme:a})=>a.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:a})=>a?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:a})=>a.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:a})=>a.spaces[1]};
    top: ${({theme:a})=>a.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,nt=z.cp.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${P} {
    background: ${({theme:a})=>a.colors.success500};
  }

  &[aria-checked='true'] ${P}:before {
    transform: translateX(1rem);
  }
`,at=c.forwardRef(({label:a,onChange:g,onLabel:v="On",offLabel:r="Off",selected:f,visibleLabels:n=!1,...m},x)=>(0,s.jsx)(nt,{ref:x,role:"switch","aria-checked":f,"aria-label":a,onClick:g,visibleLabels:n,type:"button",...m,children:(0,s.jsxs)(B.C,{children:[(0,s.jsxs)(P,{children:[(0,s.jsx)("span",{children:v}),(0,s.jsx)("span",{children:r})]}),n&&(0,s.jsx)(M.k,{as:"span","aria-hidden":!0,paddingLeft:2,color:f?"success600":"danger600",children:f?v:r})]})}));var G=t(23264),et=t(36132),dt=t(26272),i=t(16048),b=t(48636),H=t(71324),lt=t(89940),it=t(79848),rt=t(14632),A=t(48632),V=t(70516),Q=t(49008),ht=t(39380),Z=t(14134),Et=t(17892),Lt=t(31212),Dt=t(10212),Ot=t(54320),$t=t(5240),Bt=t(91892),Pt=t(36196),bt=t(20880),At=t(21424),Wt=t(31812),It=t(18424),Ut=t(52540),Rt=t(21968),Ft=t(12132),Kt=t(85676),Nt=t(35184),pt=t(99568),zt=t(96556),Gt=t(13192),Ht=t(30840),Vt=t(77784),Qt=t(79371),Zt=t(67888),Xt=t(52600),Jt=t(95752),Yt=t(37388),kt=t(61840),wt=t(49108),qt=t(44632),_t=t(50840),ts=t(20252),ss=t(86432),os=t(22612),ns=t(24808),as=t(24024),es=t(33656),ds=t(43280),ls=t(79804),is=t(19632),rs=t(29576),hs=t(61152),cs=t(9589),gs=t(45488),vs=t(75516);const ct=()=>{const[a,g]=c.useState(!1),[v,r]=c.useState([]),f=(0,V.w1)(Z.s),{formatMessage:n}=(0,rt.c)(),{formatAPIError:m}=(0,i.An)(),x=(0,i.eo)();(0,i.G0)();const{push:vt}=(0,Q.Uz)(),{pathname:X}=(0,Q.IT)(),{isLoading:mt,allowedActions:{canCreate:W,canUpdate:I,canDelete:J}}=(0,i.aU)(f.settings?.webhooks??{}),{get:xt,post:jt,put:ft}=(0,i.Qn)(),{notifyStatus:Y}=(0,j.O)(),{isLoading:ut,data:u=[],error:U,refetch:k}=(0,A.useQuery)("webhooks",async()=>{const{data:{data:o}}=await xt("/admin/webhooks");return o});c.useEffect(()=>{if(U){x({type:"warning",message:m(U)});return}u&&Y(n({id:"Settings.webhooks.list.loading.success",defaultMessage:"Webhooks have been loaded"}))},[u,U,x,n,Y,m]);const w=(0,A.useMutation)(()=>jt("/admin/webhooks/batch-delete",{ids:v}),{onError(o){x({type:"warning",message:m(o)}),g(!1)},onSuccess(){r([]),g(!1),k()}}),Ct=(0,A.useMutation)(({id:o,...e})=>ft(`/admin/webhooks/${o}`,e),{onError(o){x({type:"warning",message:m(o)})},onSuccess(){k()}}),yt=()=>w.mutate(),Mt=o=>r(o?u.map(e=>e.id):[]),Tt=(o,e)=>r(o?K=>[...K,e]:K=>K.filter(St=>St!==e)),R=o=>()=>vt(`${X}/${o}`),F=mt||ut,T=u?.length??0,C=v.length;return(0,s.jsxs)(E._,{children:[(0,s.jsx)(i.K8,{name:"Webhooks"}),(0,s.jsxs)(L.G,{"aria-busy":F,children:[(0,s.jsx)(D.a,{title:n({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:n({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:W&&!F&&(0,s.jsx)(dt.E,{as:ht.Af,startIcon:(0,s.jsx)(b.c,{}),variant:"default",to:`${X}/create`,size:"S",children:n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})}),C>0&&J&&(0,s.jsx)(O.U,{startActions:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(h.O,{variant:"epsilon",textColor:"neutral600",children:n({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"},{webhooksToDeleteLength:C})}),(0,s.jsx)(y.Z,{onClick:()=>g(!0),startIcon:(0,s.jsx)(H.c,{}),size:"L",variant:"danger-light",children:n({id:"global.delete",defaultMessage:"Delete"})})]})}),(0,s.jsx)(l.S,{children:F?(0,s.jsx)(M.k,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,s.jsx)(i.Wm,{})}):T>0?(0,s.jsxs)($.o,{colCount:5,rowCount:T+1,footer:(0,s.jsx)(_.U,{onClick:W?R("create"):void 0,icon:(0,s.jsx)(b.c,{}),children:n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})}),children:[(0,s.jsx)(tt.o,{children:(0,s.jsxs)(N.Tr,{children:[(0,s.jsx)(d.Th,{children:(0,s.jsx)(p.c,{"aria-label":n({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:C>0&&C<T,value:C===T,onValueChange:Mt})}),(0,s.jsx)(d.Th,{width:"20%",children:(0,s.jsx)(h.O,{variant:"sigma",textColor:"neutral600",children:n({id:"global.name",defaultMessage:"Name"})})}),(0,s.jsx)(d.Th,{width:"60%",children:(0,s.jsx)(h.O,{variant:"sigma",textColor:"neutral600",children:n({id:"Settings.webhooks.form.url",defaultMessage:"URL"})})}),(0,s.jsx)(d.Th,{width:"20%",children:(0,s.jsx)(h.O,{variant:"sigma",textColor:"neutral600",children:n({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})})}),(0,s.jsx)(d.Th,{children:(0,s.jsx)(st.K,{children:n({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"})})})]})}),(0,s.jsx)(ot.K,{children:u.map(o=>(0,s.jsxs)(N.Tr,{onClick:I?R(o.id):void 0,style:{cursor:I?"pointer":"default"},children:[(0,s.jsx)(d.Td,{onClick:e=>e.stopPropagation(),children:(0,s.jsx)(p.c,{"aria-label":`${n({id:"global.select",defaultMessage:"Select"})} ${o.name}`,value:v?.includes(o.id),onValueChange:e=>Tt(e,o.id),name:"select"})}),(0,s.jsx)(d.Td,{children:(0,s.jsx)(h.O,{fontWeight:"semiBold",textColor:"neutral800",children:o.name})}),(0,s.jsx)(d.Td,{children:(0,s.jsx)(h.O,{textColor:"neutral800",children:o.url})}),(0,s.jsx)(d.Td,{children:(0,s.jsx)(B.C,{children:(0,s.jsx)(at,{onLabel:n({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:n({id:"global.disabled",defaultMessage:"Disabled"}),label:`${o.name} ${n({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:o.isEnabled,onChange:e=>{e.stopPropagation(),Ct.mutate({...o,isEnabled:!o.isEnabled})},visibleLabels:!0})})}),(0,s.jsx)(d.Td,{children:(0,s.jsxs)(B.C,{gap:1,children:[I&&(0,s.jsx)(G.w,{label:n({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:(0,s.jsx)(lt.c,{}),noBorder:!0}),J&&(0,s.jsx)(G.w,{onClick:e=>{e.stopPropagation(),r([o.id]),g(!0)},label:n({id:"Settings.webhooks.events.delete",defaultMessage:"Delete webhook"}),icon:(0,s.jsx)(H.c,{}),noBorder:!0})]})})]},o.id))})]}):(0,s.jsx)(et.S,{icon:(0,s.jsx)(it.c,{width:"160px"}),content:n({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:(0,s.jsx)(y.Z,{variant:"secondary",startIcon:(0,s.jsx)(b.c,{}),onClick:()=>W?R("create"):{},children:n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})})})]}),(0,s.jsx)(i.cz,{isOpen:a,onToggleDialog:()=>g(o=>!o),onConfirm:yt,isConfirmButtonLoading:w.isLoading})]})},gt=()=>{const a=(0,V.w1)(Z.s);return(0,s.jsx)(i.rF,{permissions:a.settings?.webhooks.main,children:(0,s.jsx)(ct,{})})}},89616:(q,S,t)=>{t.d(S,{U:()=>y});var s=t(19968),c=t(69372),j=t(5e3),E=t(6912),L=t(48936),D=t(63358);const O=(0,c.cp)(j.k)`
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
    fill: ${({theme:l})=>l.colors.primary600};
  }
`,h=(0,c.cp)(j.k)`
  border-radius: 0 0 ${({theme:l})=>l.borderRadius} ${({theme:l})=>l.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,y=({children:l,icon:M,...$})=>(0,s.jsxs)("div",{children:[(0,s.jsx)(E.c,{}),(0,s.jsx)(h,{as:"button",background:"primary100",padding:5,...$,children:(0,s.jsxs)(L.C,{children:[(0,s.jsx)(O,{"aria-hidden":!0,background:"primary200",children:M}),(0,s.jsx)(j.k,{paddingLeft:3,children:(0,s.jsx)(D.O,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:l})})]})})]})}}]);
