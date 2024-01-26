Пакет, который отвечает за стили, темы и иконки.

Чтобы использовать шрифтовые иконки, необходимо установить шрифт. Для этого в `react-native.config.js` необходимо добавить в `assets` путь к нему:

```js
module.exports = {
  project: {
    ios: {},
    android: {},
  },
    assets: [
      // highlight-next-line
      'node_modules/@lad-tech/mobydick-core/src/styles/icons/font/assets/fonts/',
  ], 
};
```

и выполнить команду `npx react-native-asset`.



