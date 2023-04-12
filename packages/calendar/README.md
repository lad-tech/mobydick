## @npm/mobydick-calendar

Для использования календаря, необходимо создать вот такой patch:
```
diff --git a/node_modules/react-native-calendars/src/calendar/day/period/style.js b/node_modules/react-native-calendars/src/calendar/day/period/style.js
index bbbdc78..6a4e66e 100644
--- a/node_modules/react-native-calendars/src/calendar/day/period/style.js
+++ b/node_modules/react-native-calendars/src/calendar/day/period/style.js
@@ -7,7 +7,6 @@ export default function styleConstructor(theme = {}) {
         wrapper: {
             alignItems: 'center',
             alignSelf: 'stretch',
-            marginLeft: -1
         },
         base: {
             width: 38,

```

## ***ModalCalendar***
`onDateRangeChange` – работает при нажатии `Применить` и `Отменить`, если вам нужно зафиксировать, что вы, например, отменили выбранные даты;
`onAcceptDateRangeChange` – работает при нажатии `Применить`;
