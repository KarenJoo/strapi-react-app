"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[3484],{85332:(U,D,_)=>{_.d(D,{S:()=>A});var s=_(19968),l=_(28724),n=_(70996),a=_(70544),d=_(48936),h=_(63358),C=_(14632),v=_(39380),i=_(69372);const A=({providers:E,displayAllProviders:r})=>{const{formatMessage:o}=(0,C.c)();return r?(0,s.jsx)(l.y,{gap:4,children:E.map(t=>(0,s.jsx)(n.C,{col:4,children:(0,s.jsx)(M,{provider:t})},t.uid))}):E.length>2&&!r?(0,s.jsxs)(l.y,{gap:4,children:[E.slice(0,2).map(t=>(0,s.jsx)(n.C,{col:4,children:(0,s.jsx)(M,{provider:t})},t.uid)),(0,s.jsx)(n.C,{col:4,children:(0,s.jsx)(a.o,{label:o({id:"global.see-more"}),children:(0,s.jsx)(P,{as:v.cH,to:"/auth/providers",children:(0,s.jsx)("span",{"aria-hidden":!0,children:"\u2022\u2022\u2022"})})})})]}):(0,s.jsx)(B,{justifyContent:"center",children:E.map(t=>(0,s.jsx)(M,{provider:t},t.uid))})},B=(0,i.cp)(d.C)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:E})=>E.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:E})=>E.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:E})=>E.spaces[2]};
  }
`,M=({provider:E})=>(0,s.jsx)(a.o,{label:E.displayName,children:(0,s.jsx)(P,{href:`${window.strapi.backendURL}/admin/connect/${E.uid}`,children:E.icon?(0,s.jsx)("img",{src:E.icon,"aria-hidden":!0,alt:"",height:"32px"}):(0,s.jsx)(h.O,{children:E.displayName})})}),P=i.cp.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:E})=>E.colors.neutral150};
  border-radius: ${({theme:E})=>E.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:E})=>E.colors.neutral600};
`},53484:(U,D,_)=>{_.r(D),_.d(D,{FORMS:()=>W});var s=_(19968),l=_(48112),n=_(5e3),a=_(63358),d=_(48936),h=_(89296),C=_(35676),v=_(6912),i=_(5540),A=_(16048),B=_(14632),M=_(48632),P=_(49008),E=_(39380),r=_(69372),o=_(10212),t=_(85332),x=_(54320),j=_(5240),f=_(91892),y=_(36196),S=_(20880),e=_(21424),$=_(62552),u=_(70516),F=_(31812),N=_(18424),z=_(52540),Q=_(21968),G=_(12132),H=_(85676),J=_(35184),Y=_(99568),Z=_(96556),V=_(13192),X=_(30840),p=_(77784),k=_(79371),w=_(67888),b=_(52600),q=_(95752),__=_(37388),s_=_(61840),E_=_(49108),t_=_(44632),n_=_(50840),a_=_(20252),d_=_(86432),o_=_(22612),O_=_(24808),M_=_(24024),P_=_(33656),D_=_(43280),l_=_(79804),i_=_(19632),r_=_(29576),h_=_(61152),C_=_(9589),v_=_(45488),A_=_(75516);const T=()=>{const{push:I}=(0,P.Uz)(),{formatMessage:O}=(0,B.c)(),{get:K}=(0,A.Qn)(),{isLoading:L,data:m=[]}=(0,M.useQuery)(["ee","providers"],async()=>{const{data:c}=await K("/admin/providers");return c},{enabled:window.strapi.features.isEnabled(window.strapi.features.SSO)}),g=()=>{I("/auth/login")};return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!L&&m.length===0?(0,s.jsx)(P.YJ,{to:"/auth/login"}):(0,s.jsx)(o.U,{children:(0,s.jsxs)(l.G,{children:[(0,s.jsxs)(o.d,{children:[(0,s.jsxs)(o.C,{children:[(0,s.jsx)(o.e,{}),(0,s.jsx)(n.k,{paddingTop:6,paddingBottom:1,children:(0,s.jsx)(a.O,{as:"h1",variant:"alpha",children:O({id:"Auth.form.welcome.title"})})}),(0,s.jsx)(n.k,{paddingBottom:7,children:(0,s.jsx)(a.O,{variant:"epsilon",textColor:"neutral600",children:O({id:"Auth.login.sso.subtitle"})})})]}),(0,s.jsxs)(d.C,{direction:"column",alignItems:"stretch",gap:7,children:[L?(0,s.jsx)(d.C,{justifyContent:"center",children:(0,s.jsx)(h.c,{children:O({id:"Auth.login.sso.loading"})})}):(0,s.jsx)(t.S,{providers:m}),(0,s.jsxs)(d.C,{children:[(0,s.jsx)(R,{}),(0,s.jsx)(n.k,{paddingLeft:3,paddingRight:3,children:(0,s.jsx)(a.O,{variant:"sigma",textColor:"neutral600",children:O({id:"or"})})}),(0,s.jsx)(R,{})]}),(0,s.jsx)(C.Z,{fullWidth:!0,size:"L",onClick:g,children:O({id:"Auth.form.button.login.strapi"})})]})]}),(0,s.jsx)(d.C,{justifyContent:"center",children:(0,s.jsx)(n.k,{paddingTop:4,children:(0,s.jsx)(i.c,{as:E.Af,to:"/auth/forgot-password",children:(0,s.jsx)(a.O,{variant:"pi",children:O({id:"Auth.link.forgot-password"})})})})})]})})},R=(0,r.cp)(v.c)`
  flex: 1;
`,W={providers:T}}}]);
