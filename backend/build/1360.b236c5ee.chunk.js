"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[1360],{61360:(se,I,t)=>{t.r(I),t.d(I,{E:()=>F,a:()=>W,b:()=>Le});var e=t(19968),x=t(62552),_=t(48936),T=t(33128),K=t(89296),R=t(532),S=t(93432),b=t(75872),P=t(45412),A=t(35480),M=t(63358),B=t(38296),k=t(32568),$=t(19576),h=t(5e3),w=t(28724),y=t(70996),H=t(62492),te=t(82800),ne=t(65092),ae=t(9544),re=t(28464),Q=t(35676),oe=t(42816),ie=t(48112),j=t(16048),L=t(48632),le=t(39380),z=t(49008),V=t(10212),G=t(50040),de=t(14134),ce=t(5540),ge=t(48636),Z=t(39716),he=t(24144),X=t(53305),ue=t(64764),_e=t(15396),C=t(31812),D=t(14632),v=t(52540),Ee=t(43164),N=t(69372);const[me,Y]=(0,Ee.G)("WebhookEvent"),Me=({children:s})=>{const{formatMessage:n}=(0,D.c)(),{collectionTypes:a,isLoading:c}=(0,G.u)(),r=x.useMemo(()=>a.some(o=>o.options?.draftAndPublish===!0),[a]),d=n({id:"Settings.webhooks.form.events",defaultMessage:"Events"});return(0,e.jsx)(me,{isDraftAndPublish:r,children:(0,e.jsxs)(_.C,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(T.u,{"aria-hidden":!0,children:d}),c&&(0,e.jsx)(K.c,{children:n({id:"Settings.webhooks.events.isLoading",defaultMessage:"Events loading"})}),(0,e.jsx)(fe,{"aria-label":d,children:s})]})})},fe=(0,N.cp)(R.w)`
  tbody tr:nth-child(odd) {
    background: ${({theme:s})=>s.colors.neutral100};
  }

  thead th span {
    color: ${({theme:s})=>s.colors.neutral500};
  }

  td,
  th {
    padding-block-start: ${({theme:s})=>s.spaces[3]};
    padding-block-end: ${({theme:s})=>s.spaces[3]};
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr td:first-child {
    /**
     * Add padding to the start of the first column to avoid the checkbox appearing
     * too close to the edge of the table
     */
    padding-inline-start: ${({theme:s})=>s.spaces[2]};
  }
`,pe=s=>{const n=[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"}];return s&&(n.push({id:"app.utils.publish",defaultMessage:"Publish"}),n.push({id:"app.utils.unpublish",defaultMessage:"Unpublish"})),n},xe=({getHeaders:s=pe})=>{const{isDraftAndPublish:n}=Y("Headers"),{formatMessage:a}=(0,D.c)(),c=s(n);return(0,e.jsx)(S.Y,{children:(0,e.jsxs)(b._,{children:[(0,e.jsx)(P.d,{children:(0,e.jsx)(A.K,{children:a({id:"Settings.webhooks.event.select",defaultMessage:"Select event"})})}),c.map(r=>["app.utils.publish","app.utils.unpublish"].includes(r?.id??"")?(0,e.jsx)(P.d,{title:a({id:"Settings.webhooks.event.publish-tooltip",defaultMessage:"This event only exists for content with draft & publish enabled"}),children:(0,e.jsx)(M.O,{variant:"sigma",textColor:"neutral600",children:a(r)})},r.id):(0,e.jsx)(P.d,{children:(0,e.jsx)(M.O,{variant:"sigma",textColor:"neutral600",children:a(r)})},r.id))]})})},Ce=({providedEvents:s})=>{const{isDraftAndPublish:n}=Y("Body"),a=s||Oe(n),{values:c,handleChange:r}=(0,C.Sq)(),d="events",o=c.events,m=[],f=o.reduce((l,i)=>{const u=i.split(".")[0];return l[u]||(l[u]=[]),l[u].push(i),l},{}),g=({target:{name:l,value:i}})=>{const u=new Set(o);i?u.add(l):u.delete(l),r({target:{name:d,value:Array.from(u)}})},p=({target:{name:l,value:i}})=>{const u=new Set(o);i?a[l].forEach(O=>{m.includes(O)||u.add(O)}):a[l].forEach(O=>u.delete(O)),r({target:{name:d,value:Array.from(u)}})};return(0,e.jsx)(B.A,{children:Object.entries(a).map(([l,i])=>(0,e.jsx)(J,{disabledEvents:m,name:l,events:i,inputValue:f[l],handleSelect:g,handleSelectAll:p},l))})},Oe=s=>{const n=["entry.create","entry.update","entry.delete"];return s&&n.push("entry.publish","entry.unpublish"),{entry:n,media:["media.create","media.update","media.delete"]}},J=({disabledEvents:s=[],name:n,events:a=[],inputValue:c=[],handleSelect:r,handleSelectAll:d})=>{const{formatMessage:o}=(0,D.c)(),m=a.filter(i=>!s.includes(i)),f=c.length>0,g=c.length===m.length,p=({target:{name:i}})=>{d({target:{name:i,value:!g}})},l=5;return(0,e.jsxs)(b._,{children:[(0,e.jsx)(P.w,{children:(0,e.jsx)(k.y,{indeterminate:f&&!g,"aria-label":o({id:"global.select-all-entries",defaultMessage:"Select all entries"}),name:n,onChange:p,value:g,children:je(n)})}),a.map(i=>(0,e.jsx)(P.w,{children:(0,e.jsx)($.c,{disabled:s.includes(i),"aria-label":i,name:i,value:c.includes(i),onValueChange:u=>r({target:{name:i,value:u}})})},i)),a.length<l&&(0,e.jsx)(P.w,{colSpan:l-a.length})]})},je=s=>s.replace(/-/g," ").split(" ").map(n=>n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()).join(" "),W={Root:Me,Headers:xe,Body:Ce,Row:J},ve=()=>(0,e.jsxs)(W.Root,{children:[(0,e.jsx)(W.Headers,{}),(0,e.jsx)(W.Body,{})]}),Pe=()=>{const{formatMessage:s}=(0,D.c)(),{values:n,errors:a}=(0,C.Sq)();return(0,e.jsxs)(_.C,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(T.u,{children:s({id:"Settings.webhooks.form.headers",defaultMessage:"Headers"})}),(0,e.jsx)(h.k,{padding:8,background:"neutral100",hasRadius:!0,children:(0,e.jsx)(C.KE,{validateOnChange:!1,name:"headers",render:({push:c,remove:r})=>(0,e.jsxs)(w.y,{gap:4,children:[n.headers.map((d,o)=>{const m=a.headers?.[o],f=typeof m=="object"?m.key:void 0,g=typeof m=="object"?m.value:void 0;return(0,e.jsxs)(x.Fragment,{children:[(0,e.jsx)(y.C,{col:6,children:(0,e.jsx)(C.IN,{as:ye,name:`headers.${o}.key`,"aria-label":`row ${o+1} key`,label:s({id:"Settings.webhooks.key",defaultMessage:"Key"}),error:f})}),(0,e.jsx)(y.C,{col:6,children:(0,e.jsxs)(_.C,{alignItems:"flex-end",children:[(0,e.jsx)(h.k,{style:{flex:1},children:(0,e.jsx)(C.IN,{as:H.g,name:`headers.${o}.value`,"aria-label":`row ${o+1} value`,label:s({id:"Settings.webhooks.value",defaultMessage:"Value"}),error:g})}),(0,e.jsx)(_.C,{paddingLeft:2,style:{alignSelf:"center"},paddingTop:g?0:5,children:(0,e.jsx)(j.CA,{disabled:n.headers.length===1,onClick:()=>r(o),label:s({id:"Settings.webhooks.headers.remove",defaultMessage:"Remove header row {number}"},{number:o+1})})})]})})]},`${o}.${d.key}`)}),(0,e.jsx)(y.C,{col:12,children:(0,e.jsx)(te.c,{type:"button",onClick:()=>{c({key:"",value:""})},startIcon:(0,e.jsx)(ge.c,{}),children:s({id:"Settings.webhooks.create.header",defaultMessage:"Create new header"})})})]})})})]})},ye=({name:s,onChange:n,value:a,...c})=>{const{values:{headers:r}}=(0,C.Sq)(),[d,o]=x.useState([...q]);x.useEffect(()=>{const g=q.filter(p=>!r?.some(l=>l.key!==a&&l.key===p));o(g)},[r,a]);const m=g=>{n({target:{name:s,value:g}})},f=g=>{o(p=>[...p,g]),m(g)};return(0,e.jsx)(ne.cT,{...c,onClear:()=>m(""),onChange:m,onCreateOption:f,placeholder:"",value:a,children:d.map(g=>(0,e.jsx)(ae.m,{value:g,children:g},g))})},q=["A-IM","Accept","Accept-Charset","Accept-Encoding","Accept-Language","Accept-Datetime","Access-Control-Request-Method","Access-Control-Request-Headers","Authorization","Cache-Control","Connection","Content-Length","Content-Type","Cookie","Date","Expect","Forwarded","From","Host","If-Match","If-Modified-Since","If-None-Match","If-Range","If-Unmodified-Since","Max-Forwards","Origin","Pragma","Proxy-Authorization","Range","Referer","TE","User-Agent","Upgrade","Via","Warning"],De=({isPending:s,onCancel:n,response:a})=>{const{statusCode:c,message:r}=a??{},{formatMessage:d}=(0,D.c)();return(0,e.jsx)(h.k,{background:"neutral0",padding:5,shadow:"filterShadow",hasRadius:!0,children:(0,e.jsxs)(w.y,{gap:4,style:{alignItems:"center"},children:[(0,e.jsx)(y.C,{col:3,children:(0,e.jsx)(M.O,{children:d({id:"Settings.webhooks.trigger.test",defaultMessage:"Test-trigger"})})}),(0,e.jsx)(y.C,{col:3,children:(0,e.jsx)(be,{isPending:s,statusCode:c})}),(0,e.jsx)(y.C,{col:6,children:s?(0,e.jsx)(_.C,{justifyContent:"flex-end",children:(0,e.jsx)("button",{onClick:n,type:"button",children:(0,e.jsxs)(_.C,{gap:2,alignItems:"center",children:[(0,e.jsx)(M.O,{textColor:"neutral400",children:d({id:"Settings.webhooks.trigger.cancel",defaultMessage:"cancel"})}),(0,e.jsx)(U,{as:Z.c,color:"neutral400"})]})})}):(0,e.jsx)(Ae,{statusCode:c,message:r})})]})})},U=N.cp.svg(({theme:s,color:n})=>`
  width: ${12/16}rem;
  height: ${12/16}rem;


  ${n?(0,N.gV)`
          path {
            fill: ${s.colors[n]};
          }
        `:""}
`),be=({isPending:s,statusCode:n})=>{const{formatMessage:a}=(0,D.c)();return s||!n?(0,e.jsxs)(_.C,{gap:2,alignItems:"center",children:[(0,e.jsx)(U,{as:he.c}),(0,e.jsx)(M.O,{children:a({id:"Settings.webhooks.trigger.pending",defaultMessage:"pending"})})]}):n>=200&&n<300?(0,e.jsxs)(_.C,{gap:2,alignItems:"center",children:[(0,e.jsx)(U,{as:X.c,color:"success700"}),(0,e.jsx)(M.O,{children:a({id:"Settings.webhooks.trigger.success",defaultMessage:"success"})})]}):n>=300?(0,e.jsxs)(_.C,{gap:2,alignItems:"center",children:[(0,e.jsx)(U,{as:Z.c,color:"danger700"}),(0,e.jsxs)(M.O,{children:[a({id:"Settings.error",defaultMessage:"error"})," ",n]})]}):null},Ae=({statusCode:s,message:n})=>{const{formatMessage:a}=(0,D.c)();return s?s>=200&&s<300?(0,e.jsx)(_.C,{justifyContent:"flex-end",children:(0,e.jsx)(M.O,{textColor:"neutral600",ellipsis:!0,children:a({id:"Settings.webhooks.trigger.success.label",defaultMessage:"Trigger succeeded"})})}):s>=300?(0,e.jsx)(_.C,{justifyContent:"flex-end",children:(0,e.jsx)(_.C,{maxWidth:(0,j.W8)(250),justifyContent:"flex-end",title:n,children:(0,e.jsx)(M.O,{ellipsis:!0,textColor:"neutral600",children:n})})}):null:null},Ie=({handleSubmit:s,triggerWebhook:n,isCreating:a,isTriggering:c,triggerResponse:r,data:d})=>{const{formatMessage:o}=(0,D.c)(),[m,f]=x.useState(!1),g=(0,V.j)(ve,async()=>(await t.e(8592).then(t.bind(t,38592))).EventsTableEE),p=i=>Object.keys(i).length?Object.entries(i).map(([u,O])=>({key:u,value:O})):[{key:"",value:""}],l=(0,C.KO)({initialValues:{name:d?.name||"",url:d?.url||"",headers:p(d?.headers||{}),events:d?.events||[]},onSubmit(i,{resetForm:u,setSubmitting:O}){s(i),u({values:i}),O(!1)},validationSchema:Se({formatMessage:o}),validateOnChange:!1,validateOnBlur:!1});return g?(0,e.jsx)(C.uo,{value:l,children:(0,e.jsxs)(j.QF,{children:[(0,e.jsx)(re.a,{primaryAction:(0,e.jsxs)(_.C,{gap:2,children:[(0,e.jsx)(Q.Z,{onClick:()=>{n(),f(!0)},variant:"tertiary",startIcon:(0,e.jsx)(ue.c,{}),disabled:a||c,size:"L",children:o({id:"Settings.webhooks.trigger",defaultMessage:"Trigger"})}),(0,e.jsx)(Q.Z,{startIcon:(0,e.jsx)(X.c,{}),type:"submit",size:"L",disabled:!l.dirty,loading:l.isSubmitting,children:o({id:"global.save",defaultMessage:"Save"})})]}),title:a?o({id:"Settings.webhooks.create",defaultMessage:"Create a webhook"}):d?.name,navigationAction:(0,e.jsx)(ce.c,{as:le.Af,startIcon:(0,e.jsx)(_e.c,{}),to:"/settings/webhooks",children:o({id:"global.back",defaultMessage:"Back"})})}),(0,e.jsx)(oe.S,{children:(0,e.jsxs)(_.C,{direction:"column",alignItems:"stretch",gap:4,children:[m&&(0,e.jsx)(De,{isPending:c,response:r,onCancel:()=>f(!1)}),(0,e.jsx)(h.k,{background:"neutral0",padding:8,shadow:"filterShadow",hasRadius:!0,children:(0,e.jsxs)(_.C,{direction:"column",alignItems:"stretch",gap:6,children:[(0,e.jsxs)(w.y,{gap:6,children:[(0,e.jsx)(y.C,{col:6,children:(0,e.jsx)(C.IN,{as:H.g,name:"name",error:l.errors.name,label:o({id:"global.name",defaultMessage:"Name"}),required:!0})}),(0,e.jsx)(y.C,{col:12,children:(0,e.jsx)(C.IN,{as:H.g,name:"url",error:l.errors.url,label:o({id:"Settings.roles.form.input.url",defaultMessage:"Url"}),required:!0})})]}),(0,e.jsx)(Pe,{}),(0,e.jsx)(g,{})]})})]})})]})}):null},Te=/(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/,Re=/(^$)|((https?:\/\/.*)(d*)\/?(.*))/,Se=({formatMessage:s})=>v.kt().shape({name:v.Qb().required(s({id:"Settings.webhooks.validation.name.required",defaultMessage:"Name is required"})).matches(Te,s({id:"Settings.webhooks.validation.name.regex",defaultMessage:"The name must start with a letter and only contain letters, numbers, spaces and underscores"})),url:v.Qb().required(s({id:"Settings.webhooks.validation.url.required",defaultMessage:"Url is required"})).matches(Re,s({id:"Settings.webhooks.validation.url.regex",defaultMessage:"The value must be a valid Url"})),headers:v.Wk(n=>{const a=v.M$();if(n.length===1){const{key:c,value:r}=n[0];if(!c&&!r)return a}return a.of(v.kt().shape({key:v.Qb().required(s({id:"Settings.webhooks.validation.key",defaultMessage:"Key is required"})),value:v.Qb().required(s({id:"Settings.webhooks.validation.value",defaultMessage:"Value is required"}))}))}),events:v.M$()}),ee=s=>({...s,headers:s.headers.reduce((n,{key:a,value:c})=>(a!==""&&(n[a]=c),n),{})}),F=()=>{const n=(0,z.SU)("/settings/webhooks/:id")?.params.id,a=n==="create",{replace:c}=(0,z.Uz)(),r=(0,j.eo)(),{formatAPIError:d}=(0,j.An)(),{isLoading:o}=(0,G.u)(),{put:m,get:f,post:g}=(0,j.Qn)(),{isLoading:p,data:l,error:i,refetch:u}=(0,L.useQuery)(["webhooks",n],async()=>{const{data:{data:E}}=await f(`/admin/webhooks/${n}`);return E},{enabled:!a});x.useEffect(()=>{i&&r({type:"warning",message:d(i)})},[i,r,d]);const{isLoading:O,data:We,mutate:Ue}=(0,L.useMutation)(()=>g(`/admin/webhooks/${n}/trigger`).then(E=>E.data.data),{onError(E){r({type:"warning",message:d(E)})}}),Ke=(0,L.useMutation)(E=>g("/admin/webhooks",E),{onSuccess({data:E}){r({type:"success",message:{id:"Settings.webhooks.created"}}),c(`/settings/webhooks/${E.data.id}`)},onError(E){r({type:"warning",message:d(E)})}}),Be=(0,L.useMutation)(({id:E,body:$e})=>m(`/admin/webhooks/${E}`,$e),{onSuccess(){u(),r({type:"success",message:{id:"notification.form.success.fields"}})},onError(E){r({type:"warning",message:d(E)})}}),ke=async E=>{if(a){Ke.mutate(ee(E));return}Be.mutate({id:n,body:ee(E)})};return p||o?(0,e.jsx)(j.Wm,{}):(0,e.jsxs)(ie.G,{children:[(0,e.jsx)(j.K8,{name:"Webhooks"}),(0,e.jsx)(Ie,{data:l,handleSubmit:ke,triggerWebhook:Ue,isCreating:a,isTriggering:O,triggerResponse:We})]})},Le=Object.freeze(Object.defineProperty({__proto__:null,EditPage:F,ProtectedEditPage:()=>{const s=(0,V.f)(de.s);return(0,e.jsx)(j.rF,{permissions:s.settings?.webhooks.update,children:(0,e.jsx)(F,{})})}},Symbol.toStringTag,{value:"Module"}))},50040:(se,I,t)=>{t.d(I,{u:()=>K});var e=t(62552),x=t(16048),_=t(78164),T=t(48632);function K(){const{get:R}=(0,x.Qn)(),{formatAPIError:S}=(0,x.An)(),b=(0,x.eo)(),P=(0,T.useQueries)([{queryKey:["content-manager","components"],async queryFn(){const{data:{data:h}}=await R("/content-manager/components");return h},onError(h){h instanceof _.Uh&&b({type:"warning",message:S(h)})}},{queryKey:["content-manager","content-types"],async queryFn(){const{data:{data:h}}=await R("/content-manager/content-types");return h},onError(h){h instanceof _.Uh&&b({type:"warning",message:S(h)})}}]),[A,M]=P,B=A.isLoading||M.isLoading,k=e.useMemo(()=>(M?.data??[]).filter(h=>h.kind==="collectionType"&&h.isDisplayed),[M?.data]),$=e.useMemo(()=>(M?.data??[]).filter(h=>h.kind!=="collectionType"&&h.isDisplayed),[M?.data]);return{isLoading:B,components:e.useMemo(()=>A?.data??[],[A?.data]),collectionTypes:k,singleTypes:$}}}}]);
