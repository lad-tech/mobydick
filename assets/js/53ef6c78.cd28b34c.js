"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[103],{7741:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var s=n(5893),l=n(1151);const o=n.p+"assets/images/AlertContent-64d1a6dba506f636685b0791e5e3a80c.png",r={},c=void 0,d={id:"components/core/popups/modalBase/AlertContent",title:"AlertContent",description:"Reusable AlertContent component for ModalBase",source:"@site/docs/components/core/popups/modalBase/AlertContent.mdx",sourceDirName:"components/core/popups/modalBase",slug:"/components/core/popups/modalBase/AlertContent",permalink:"/mobydick/docs/components/core/popups/modalBase/AlertContent",draft:!1,unlisted:!1,editUrl:"https://github.com/lad-tech/mobydick/tree/main/docs/docs/components/core/popups/modalBase/AlertContent.mdx",tags:[],version:"current",frontMatter:{},sidebar:"componentsSidebar",previous:{title:"ModalBase",permalink:"/mobydick/docs/category/modalbase"},next:{title:"CloseIcon",permalink:"/mobydick/docs/components/core/popups/modalBase/CloseIcon"}},i={},a=[{value:"Example",id:"example",level:2},{value:"<code>Props</code>",id:"props",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"<code>color</code>",id:"color",level:3},{value:"<code>size</code>",id:"size",level:3},{value:"<code>style</code>",id:"style",level:3}];function p(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{src:o,width:"50%"}),"\n",(0,s.jsx)(t.p,{children:"Reusable AlertContent component for ModalBase"}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import {\n  Button,\n  createStyles,\n  ModalBase,\n  Typography,\n  usePopups,\n  useStyles,\n  View,\n} from '@lad-tech/mobydick-core';\n\nexport const ModalWidget = () => {\n  const [styles] = useStyles(styleFn);\n  const {openPopup} = usePopups();\n\n  return (\n    <View style={styles.container}>\n      <Typography font={'Regular-Primary-H5'}>Modal</Typography>\n      <Button\n        text={'ModalBase'}\n        onPress={() =>\n          openPopup({\n            Content: props => (\n              <ModalBase {...props}>\n                <ModalBase.AlertContent />\n              </ModalBase>\n            ),\n          })\n        }\n      />\n    </View>\n  );\n};\n\nconst styleFn = createStyles(({spaces}) => ({\n  container: {\n    gap: spaces.Space8,\n  },\n}));\n"})}),"\n",(0,s.jsx)(t.h2,{id:"props",children:(0,s.jsx)(t.code,{children:"Props"})}),"\n",(0,s.jsx)(t.h3,{id:"name",children:(0,s.jsx)(t.code,{children:"name"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"TYPE"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"DEFAULT"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"https://github.com/lad-tech/mobydick/blob/main/packages/core/src/styles/icons/font/SimpleIcon.tsx#L40",children:"SimpleIconName"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"'icon-check'"})]})})]}),"\n",(0,s.jsx)(t.p,{children:"Predefined name for AlertContent"}),"\n",(0,s.jsx)(t.h3,{id:"color",children:(0,s.jsx)(t.code,{children:"color"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"TYPE"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"DEFAULT"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"colors.IconBase"})]})})]}),"\n",(0,s.jsx)(t.p,{children:"Predefined color for AlertContent"}),"\n",(0,s.jsx)(t.h3,{id:"size",children:(0,s.jsx)(t.code,{children:"size"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"TYPE"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"DEFAULT"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"number"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"rem(36)"})]})})]}),"\n",(0,s.jsx)(t.p,{children:"Predefined size for AlertContent"}),"\n",(0,s.jsx)(t.h3,{id:"style",children:(0,s.jsx)(t.code,{children:"style"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"TYPE"})})}),(0,s.jsx)(t.tbody,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"https://reactnative.dev/docs/view-style-props#props",children:"ViewStyle"})})})})]})]})}function h(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var s=n(7294);const l={},o=s.createContext(l);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);