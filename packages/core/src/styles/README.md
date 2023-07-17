# @lad-tech/mobydick-core/styles

Пакет, который отвечает за стили, темы и иконки.

Чтобы использовать шрифтовые иконки, необходимо установить шрифт. Для этого в `react-native.config.js` необходимо добавить в `assets` путь к нему:

```
module.exports = {
  project: {
    ios: {},
    android: {},
  },
    assets: [
    'node_modules/@lad-tech/mobydick-core/src/styles/icons/font/assets/fonts/', // <--- добавить эту строчку
  ], 
};
```

и выполнить команду `npx react-native-asset`.



