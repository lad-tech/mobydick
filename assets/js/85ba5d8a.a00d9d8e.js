"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3079],{8358:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var n=s(5893),o=s(1151);const a={},c=void 0,r={id:"API/utils/useLatest",title:"useLatest",description:"React state hook that returns the latest state as described in the React hooks FAQ.",source:"@site/docs/API/utils/useLatest.mdx",sourceDirName:"API/utils",slug:"/API/utils/useLatest",permalink:"/mobydick/docs/API/utils/useLatest",draft:!1,unlisted:!1,editUrl:"https://github.com/lad-tech/mobydick/tree/main/docs/docs/API/utils/useLatest.mdx",tags:[],version:"current",frontMatter:{},sidebar:"APISidebar",previous:{title:"useIsForeground",permalink:"/mobydick/docs/API/utils/useIsForeground"},next:{title:"useThrottle",permalink:"/mobydick/docs/API/utils/useThrottle"}},i={},u=[{value:"Example",id:"example",level:2}];function l(t){const e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.p,{children:["React state hook that returns the latest state as described in the ",(0,n.jsx)(e.a,{href:"https://legacy.reactjs.org/docs/hooks-faq.html#why-am-i-seeing-stale-props-or-state-inside-my-function",children:"React hooks FAQ"}),"."]}),"\n",(0,n.jsx)(e.p,{children:"This is mostly useful to get access to the latest value of some props or state inside an asynchronous callback,\ninstead of that value at the time the callback was created from."}),"\n",(0,n.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:'import {useLatest} from "@lad-tech/mobydick-utils";\nimport {Button, Text, View} from "@lad-tech/mobydick-core";\nimport {Alert} from "react-native";\n\nconst Demo = () => {\n  const [count, setCount] = React.useState(0);\n  const latestCount = useLatest(count);\n\n  const handleAlertClick = () => {\n    setTimeout(() => {\n      Alert.alert(`Latest count value: ${latestCount.current}`);\n    }, 3000);\n  }\n\n  return (\n    <View>\n      <Text>You clicked {count} times</Text>\n      <Button onPress={() => setCount(count + 1)}>Click me</Button>\n      <Button onPress={handleAlertClick}>Show alert</Button>\n    </View>\n  );\n};\n'})})]})}function d(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(l,{...t})}):l(t)}},1151:(t,e,s)=>{s.d(e,{Z:()=>r,a:()=>c});var n=s(7294);const o={},a=n.createContext(o);function c(t){const e=n.useContext(a);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:c(t.components),n.createElement(a.Provider,{value:e},t.children)}}}]);