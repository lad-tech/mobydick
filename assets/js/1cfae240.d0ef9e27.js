"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4677],{8947:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>h,toc:()=>x});var n=t(5893),d=t(1151),s=t(8216),c=t(2004),i=t.n(c);const a={},r=void 0,h={id:"components/calendar/Calendar",title:"Calendar",description:"Reusable Calendar",source:"@site/docs/components/calendar/Calendar.mdx",sourceDirName:"components/calendar",slug:"/components/calendar/",permalink:"/mobydick/docs/components/calendar/",draft:!1,unlisted:!1,editUrl:"https://github.com/lad-tech/mobydick/tree/main/docs/docs/components/calendar/Calendar.mdx",tags:[],version:"current",frontMatter:{},sidebar:"componentsSidebar",previous:{title:"Calendar",permalink:"/mobydick/docs/category/calendar-1"},next:{title:"ModalCalendar",permalink:"/mobydick/docs/components/calendar/ModalCalendar"}},o={},x=[{value:"Example",id:"example",level:2},{value:"<code>Props</code>",id:"props",level:2},{value:"<code>CalendarProps</code>",id:"calendarprops",level:3},{value:"<code>onDateRangeChange</code>",id:"ondaterangechange",level:3},{value:"<code>bottomView</code>",id:"bottomview",level:3},{value:"<code>defaultLocale</code>",id:"defaultlocale",level:3},{value:"<code>isClear</code>",id:"isclear",level:3},{value:"<code>isShowToday</code>",id:"isshowtoday",level:3},{value:"<code>localeConfig</code>",id:"localeconfig",level:3},{value:"<code>isPeriod</code>",id:"isperiod",level:3},{value:"<code>initialRange</code>",id:"initialrange",level:3},{value:"<code>dottedDates</code>",id:"dotteddates",level:3},{value:"<code>maxLengthDateRange</code>",id:"maxlengthdaterange",level:3}];function j(e){const l={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i(),{playing:!0,controls:!0,url:s.Z}),"\n",(0,n.jsx)(l.p,{children:"Reusable Calendar"}),"\n",(0,n.jsx)(l.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import {Calendar, createStyles, useStyles, View} from '@lad-tech/mobydick-calendar';\n\nexport const CalendarWidget = () => {\n  const [styles] = useStyles(stylesFn);\n\n  return (\n    <View style={styles.container}>\n      <Calendar />\n    </View>\n  );\n};\n\nconst stylesFn = createStyles(({spaces}) => ({\n  container: {\n    gap: spaces.Space16,\n    alignItems: 'center',\n  },\n}));\n"})}),"\n",(0,n.jsx)(l.h2,{id:"props",children:(0,n.jsx)(l.code,{children:"Props"})}),"\n",(0,n.jsx)(l.h3,{id:"calendarprops",children:(0,n.jsx)(l.a,{href:"https://wix.github.io/react-native-calendars/docs/Components/Calendar#theme",children:(0,n.jsx)(l.code,{children:"CalendarProps"})})}),"\n",(0,n.jsxs)(l.p,{children:["Inherits ",(0,n.jsx)(l.a,{href:"https://wix.github.io/react-native-calendars/docs/Components/Calendar#theme",children:"CalendarProps"}),"."]}),"\n",(0,n.jsx)(l.h3,{id:"ondaterangechange",children:(0,n.jsx)(l.code,{children:"onDateRangeChange"})}),"\n",(0,n.jsxs)(l.table,{children:[(0,n.jsx)(l.thead,{children:(0,n.jsx)(l.tr,{children:(0,n.jsx)(l.th,{style:{textAlign:"left"},children:"Type"})})}),(0,n.jsx)(l.tbody,{children:(0,n.jsx)(l.tr,{children:(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["(dateRange: ",(0,n.jsx)(l.a,{href:"https://github.com/lad-tech/mobydick/blob/main/packages/calendar/src/Calendar/types.ts#L27",children:"IDateRange"}),") => void"]})})})]}),"\n",(0,n.jsxs)(l.p,{children:["Works by clicking ",(0,n.jsx)(l.code,{children:"Apply"})," and ",(0,n.jsx)(l.code,{children:"Cancel"}),", if you need to record that you, for example, canceled the selected dates;"]}),"\n",(0,n.jsx)(l.h3,{id:"bottomview",children:(0,n.jsx)(l.code,{children:"bottomView"})}),"\n",(0,n.jsxs)(l.table,{children:[(0,n.jsx)(l.thead,{children:(0,n.jsx)(l.tr,{children:(0,n.jsx)(l.th,{style:{textAlign:"left"},children:"Type"})})}),(0,n.jsx)(l.tbody,{children:(0,n.jsx)(l.tr,{children:(0,n.jsx)(l.td,{style:{textAlign:"left"},children:"ReactElement"})})})]}),"\n",(0,n.jsx)(l.h3,{id:"defaultlocale",children:(0,n.jsx)(l.code,{children:"defaultLocale"})}),"\n",(0,n.jsxs)(l.table,{children:[(0,n.jsx)(l.thead,{children:(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.th,{style:{textAlign:"left"},children:"TYPE"}),(0,n.jsx)(l.th,{style:{textAlign:"left"},children:"DEFAULT"})]})}),(0,n.jsx)(l.tbody,{children:(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:"string"}),(0,n.jsx)(l.td,{style:{textAlign:"left"},children:"'ru'"})]})})]}),"\n",(0,n.jsx)(l.h3,{id:"isclear",children:(0,n.jsx)(l.code,{children:"isClear"})}),"\n",(0,n.jsxs)(l.table,{children:[(0,n.jsx)(l.thead,{children:(0,n.jsx)(l.tr,{children:(0,n.jsx)(l.th,{style:{textAlign:"left"},children:"Type"})})}),(0,n.jsx)(l.tbody,{children:(0,n.jsx)(l.tr,{children:(0,n.jsx)(l.td,{style:{textAlign:"left"},children:"boolean"})})})]}),"\n",(0,n.jsx)(l.h3,{id:"isshowtoday",children:(0,n.jsx)(l.code,{children:"isShowToday"})}),"\n",(0,n.jsxs)(l.table,{children:[(0,n.jsx)(l.thead,{children:(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.th,{style:{textAlign:"left"},children:"TYPE"}),(0,n.jsx)(l.th,{style:{textAlign:"left"},children:"DEFAULT"})]})}),(0,n.jsx)(l.tbody,{children:(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:"boolean"}),(0,n.jsx)(l.td,{style:{textAlign:"left"},children:"true"})]})})]}),"\n",(0,n.jsx)(l.h3,{id:"localeconfig",children:(0,n.jsx)(l.code,{children:"localeConfig"})}),"\n",(0,n.jsxs)(l.table,{children:[(0,n.jsx)(l.thead,{children:(0,n.jsx)(l.tr,{children:(0,n.jsx)(l.th,{style:{textAlign:"left"},children:"Type"})})}),(0,n.jsx)(l.tbody,{children:(0,n.jsx)(l.tr,{children:(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.a,{href:"https://github.com/lad-tech/mobydick/blob/main/packages/calendar/src/Calendar/types.ts#L65",children:"ILocaleConfig"})})})})]}),"\n",(0,n.jsx)(l.h3,{id:"isperiod",children:(0,n.jsx)(l.code,{children:"isPeriod"})}),"\n",(0,n.jsxs)(l.table,{children:[(0,n.jsx)(l.thead,{children:(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.th,{style:{textAlign:"left"},children:"TYPE"}),(0,n.jsx)(l.th,{style:{textAlign:"left"},children:"DEFAULT"})]})}),(0,n.jsx)(l.tbody,{children:(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:"boolean"}),(0,n.jsx)(l.td,{style:{textAlign:"left"},children:"false"})]})})]}),"\n",(0,n.jsx)(l.h3,{id:"initialrange",children:(0,n.jsx)(l.code,{children:"initialRange"})}),"\n",(0,n.jsxs)(l.table,{children:[(0,n.jsx)(l.thead,{children:(0,n.jsx)(l.tr,{children:(0,n.jsx)(l.th,{style:{textAlign:"left"},children:"Type"})})}),(0,n.jsx)(l.tbody,{children:(0,n.jsx)(l.tr,{children:(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.a,{href:"https://github.com/lad-tech/mobydick/blob/main/packages/calendar/src/Calendar/types.ts#L38",children:"IInitialDate"})})})})]}),"\n",(0,n.jsx)(l.h3,{id:"dotteddates",children:(0,n.jsx)(l.code,{children:"dottedDates"})}),"\n",(0,n.jsxs)(l.table,{children:[(0,n.jsx)(l.thead,{children:(0,n.jsx)(l.tr,{children:(0,n.jsx)(l.th,{style:{textAlign:"left"},children:"Type"})})}),(0,n.jsx)(l.tbody,{children:(0,n.jsx)(l.tr,{children:(0,n.jsx)(l.td,{style:{textAlign:"left"},children:"Date[]"})})})]}),"\n",(0,n.jsx)(l.h3,{id:"maxlengthdaterange",children:(0,n.jsx)(l.code,{children:"maxLengthDateRange"})}),"\n",(0,n.jsxs)(l.table,{children:[(0,n.jsx)(l.thead,{children:(0,n.jsx)(l.tr,{children:(0,n.jsx)(l.th,{style:{textAlign:"left"},children:"Type"})})}),(0,n.jsx)(l.tbody,{children:(0,n.jsx)(l.tr,{children:(0,n.jsx)(l.td,{style:{textAlign:"left"},children:"number"})})})]})]})}function p(e={}){const{wrapper:l}={...(0,d.a)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}},8216:(e,l,t)=>{t.d(l,{Z:()=>n});const n=t.p+"assets/medias/Calendar-6a5829d863f81c992ab70bd52cc7daea.mov"}}]);