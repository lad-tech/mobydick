"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7955],{3175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=n(5893),s=n(1151),r=n(474);const i={},c=void 0,l={id:"components/core/popups/tooltip/DescriptionText",title:"DescriptionText",description:"Reusable DescriptionText component for Tooltip",source:"@site/docs/components/core/popups/tooltip/DescriptionText.mdx",sourceDirName:"components/core/popups/tooltip",slug:"/components/core/popups/tooltip/DescriptionText",permalink:"/mobydick/docs/components/core/popups/tooltip/DescriptionText",draft:!1,unlisted:!1,editUrl:"https://github.com/lad-tech/mobydick/tree/main/docs/docs/components/core/popups/tooltip/DescriptionText.mdx",tags:[],version:"current",frontMatter:{},sidebar:"componentsSidebar",previous:{title:"Arrow",permalink:"/mobydick/docs/components/core/popups/tooltip/Arrow"},next:{title:"LeftButton",permalink:"/mobydick/docs/components/core/popups/tooltip/LeftButton"}},p={},d=[{value:"Example",id:"example",level:2},{value:"<code>Props</code>",id:"props",level:2},{value:'<div class="label required basic">Required</div><strong><code>descriptionText</code></strong>',id:"requireddescriptiontext",level:3},{value:"<code>descriptionStyles</code>",id:"descriptionstyles",level:3},{value:"<code>descriptionFont</code>",id:"descriptionfont",level:3}];function a(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("img",{src:r.Z,width:"50%"}),"\n",(0,o.jsx)(t.p,{children:"Reusable DescriptionText component for Tooltip"}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import {useRef} from 'react';\n\nimport {\n  Button,\n  createStyles,\n  IPlacement,\n  IPosition,\n  TooltipBase,\n  Typography,\n  usePopups,\n  useStyles,\n  View,\n} from '@lad-tech/mobydick-core';\n\nexport const TooltipWidget = () => {\n  const ref = useRef(null);\n  const [styles] = useStyles(styleFn);\n  const {openPopup} = usePopups();\n\n  return (\n    <View style={styles.container}>\n      <Typography font={'Regular-Primary-H5'}>Tooltip</Typography>\n      <View ref={ref} style={styles.ref}>\n        <Typography>Ref component</Typography>\n      </View>\n      <Button\n        text={'Tooltip'}\n        onPress={() =>\n          openPopup({\n            Content: props => (\n              <TooltipBase\n                position={IPosition.bottom}\n                placement={IPlacement.center}\n                refCurrent={ref}\n                {...props}>\n                <TooltipBase.DescriptionText\n                  descriptionText={'Tooltip descriptionText'}\n                />\n              </TooltipBase>\n            ),\n          })\n        }\n      />\n    </View>\n  );\n};\n\nconst styleFn = createStyles(({spaces, colors}) => ({\n  container: {gap: spaces.Space8},\n  ref: {\n    alignItems: 'center',\n    padding: spaces.Space8,\n    backgroundColor: colors.BgAccent,\n  },\n}));\n"})}),"\n",(0,o.jsx)(t.h2,{id:"props",children:(0,o.jsx)(t.code,{children:"Props"})}),"\n",(0,o.jsxs)(t.h3,{id:"requireddescriptiontext",children:[(0,o.jsx)("div",{class:"label required basic",children:"Required"}),(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"descriptionText"})})]}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsx)(t.tr,{children:(0,o.jsx)(t.th,{style:{textAlign:"left"},children:"TYPE"})})}),(0,o.jsx)(t.tbody,{children:(0,o.jsx)(t.tr,{children:(0,o.jsx)(t.td,{style:{textAlign:"left"},children:"string"})})})]}),"\n",(0,o.jsx)(t.p,{children:"DescriptionText for tooltip"}),"\n",(0,o.jsx)(t.h3,{id:"descriptionstyles",children:(0,o.jsx)(t.code,{children:"descriptionStyles"})}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsx)(t.tr,{children:(0,o.jsx)(t.th,{style:{textAlign:"left"},children:"TYPE"})})}),(0,o.jsx)(t.tbody,{children:(0,o.jsx)(t.tr,{children:(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.a,{href:"https://reactnative.dev/docs/text-style-props",children:"TextStyle"})})})})]}),"\n",(0,o.jsx)(t.p,{children:"Custom styles for container"}),"\n",(0,o.jsx)(t.h3,{id:"descriptionfont",children:(0,o.jsx)(t.code,{children:"descriptionFont"})}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,o.jsx)(t.th,{style:{textAlign:"left"},children:"DEFAULT"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.a,{href:"https://github.com/lad-tech/mobydick/blob/main/packages/core/src/typography/types.ts#L49",children:"TypographyProp"})}),(0,o.jsx)(t.td,{style:{textAlign:"left"},children:"'SemiBold-Secondary-M'"})]})})]}),"\n",(0,o.jsx)(t.p,{children:"Font for descriptionText"})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},474:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Tooltip-035d34ef910cd6a8e53c2e136a44281f.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>i});var o=n(7294);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);