"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9720],{3672:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var o=t(5893),s=t(1151),c=t(7105);const a={},r=void 0,p={id:"components/core/popups/modalBase/VerticalButtonsView",title:"VerticalButtonsView",description:"Reusable VerticalButtonsView component for ModalBase",source:"@site/docs/components/core/popups/modalBase/VerticalButtonsView.mdx",sourceDirName:"components/core/popups/modalBase",slug:"/components/core/popups/modalBase/VerticalButtonsView",permalink:"/mobydick/docs/components/core/popups/modalBase/VerticalButtonsView",draft:!1,unlisted:!1,editUrl:"https://github.com/lad-tech/mobydick/tree/main/docs/docs/components/core/popups/modalBase/VerticalButtonsView.mdx",tags:[],version:"current",frontMatter:{},sidebar:"componentsSidebar",previous:{title:"VerticalButton",permalink:"/mobydick/docs/components/core/popups/modalBase/VerticalButton"},next:{title:"Modals",permalink:"/mobydick/docs/category/modals"}},i={},l=[{value:"Example",id:"example",level:2},{value:"<code>Props</code>",id:"props",level:2},{value:"<code>View Props</code>",id:"view-props",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("img",{src:c.Z,width:"50%"}),"\n",(0,o.jsx)(n.p,{children:"Reusable VerticalButtonsView component for ModalBase"}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import {\n  Button,\n  createStyles,\n  ModalBase,\n  Typography,\n  usePopups,\n  useStyles,\n  View,\n} from '@lad-tech/mobydick-core';\n\nexport const ModalWidget = () => {\n  const [styles] = useStyles(styleFn);\n  const {openPopup} = usePopups();\n\n  return (\n    <View style={styles.container}>\n      <Typography font={'Regular-Primary-H5'}>Modal</Typography>\n      <Button\n        text={'ModalBase'}\n        onPress={() =>\n          openPopup({\n            Content: props => (\n              <ModalBase {...props}>\n                <ModalBase.VerticalButtonsView>\n                  <ModalBase.VerticalButton text={'VerticalButton'} />\n                </ModalBase.VerticalButtonsView>\n              </ModalBase>\n            ),\n          })\n        }\n      />\n    </View>\n  );\n};\n\nconst styleFn = createStyles(({spaces}) => ({\n  container: {\n    gap: spaces.Space8,\n  },\n}));\n"})}),"\n",(0,o.jsx)(n.h2,{id:"props",children:(0,o.jsx)(n.code,{children:"Props"})}),"\n",(0,o.jsx)(n.h3,{id:"view-props",children:(0,o.jsx)(n.a,{href:"https://reactnative.dev/docs/textinput#props",children:(0,o.jsx)(n.code,{children:"View Props"})})}),"\n",(0,o.jsxs)(n.p,{children:["Inherits ",(0,o.jsx)(n.a,{href:"https://reactnative.dev/docs/view#props",children:"View Props"})]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},7105:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/VerticalButtonsView-9bd4c661326120c32183a06d9e24fd4b.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var o=t(7294);const s={},c=o.createContext(s);function a(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);