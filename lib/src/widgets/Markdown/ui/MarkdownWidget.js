"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownWidget = void 0;
const ui_1 = require("@shared/ui");
const MarkdownWidget = () => {
    const [styles] = (0, ui_1.useStyles)(stylesFn);
    return (<ui_1.ScrollView style={styles.container}>
      <ui_1.Markdown>{markdown}</ui_1.Markdown>
      <ui_1.View style={styles.footer}/>
    </ui_1.ScrollView>);
};
exports.MarkdownWidget = MarkdownWidget;
const markdown = `
# MobyDick

Библиотека компонентов для мобильной разработки.

# Содержание
1. [О проекте](#1-о-проекте)
2. [Разработка](#2-разработка)
    - [Локальный запуск](#локальный-запуск)
        - [Подготовка](#подготовка)
        - [Установка](#установка)
        - [Как запустить проект](#как-запустить-проект)
    - [Code style](#code-style)
    - [Процесс сборки приложения для релиза](#процесс-сборки-приложения-для-релиза)
3. [Тесты](#3-тесты)
4. [База знаний](#4-база-знаний)

# 1. О проекте
Легковесная библиотека компонентов для разработки мобильных приложений. См. также [дизайн-систему в Figma](https://www.figma.com/file/O1ISmXoYQaYPfDZDBsme10/%E2%9D%96-Neotis--%C2%B7--Design-system?node-id=3%3A130).

Чтобы не тянуть все зависимости, которые могут не пригодиться, либу разделили на модули:


- [@lad-tech/mobydick-core](./packages/core/README.md)
- [@lad-tech/mobydick-utils](./packages/utils/README.md)
- [@lad-tech/mobydick-calendar](./packages/calendar/README.md)

# 2. Разработка
## Локальный запуск
### Подготовка
- **Пакетный менеджер** [\`yarn\`](https://yarnpkg.com/getting-started/install), так как он быстрый.
- Конфигурацию ESlint. Информация о ней находится в [отдельном репозитории](https://github.com/lad-tech/eslint-config), чтобы использовать ее на смежных проектах.

Чтобы установить все пакеты, нужно установить ассоциации для нашего gitlab registry и закрепить accessToken. Для этого изучи пункты 1 и 2 в инструкции [“Как скачать наш пакет”](https://glab.lad24.ru/npm/registry#%D0%BA%D0%B0%D0%BA-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%BD%D0%B0%D1%88-%D0%BF%D0%B0%D0%BA%D0%B5%D1%82).

### Установка
1. Сначала прочитай [инструкцию](https://reactnative.dev/docs/environment-setup).
2. Установить Android SDK можно через [Android Studio](https://developer.android.com/studio) (самый простой способ) или через [IDEA](https://www.jetbrains.com/ru-ru/idea/), прописав нужные переменные для \`.bashrc\` или аналоги:

   \`\`\`bash
   export ANDROID_HOME=$HOME/Android/Sdk
   export PATH=$PATH:$ANDROID_HOME/emulator
   export PATH=$PATH:$ANDROID_HOME/tools
   export PATH=$PATH:$ANDROID_HOME/tools/bin
   export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
   export ANDROID_SDK_ROOT=$ANDROID_HOME
   export PATH=$PATH:$ANDROID_SDK_ROOT/cmdline-tools/latest/bin:$ANDROID_SDK_ROOT/cmdline-tools/tools/bin
   export PATH=$PATH:$ANDROID_SDK_ROOT/emulator #регистируем новый Path
   export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64/
   \`\`\`

3. Чтобы установить пакеты, лучше использовать команду \`yarn install --frozen-lockfile\`.


### Как запустить проект
Чтобы запустить проект локально, используй:

- \`yarn start\`
- \`yarn android\` или \`yarn ios\`
- \`yarn storybook\`

### Для debugging
Чтобы пользоваться React Native Debugger нужно добавить patch для StyleSheet у React Native
\`\`\`bash
702 bytes
diff --git a/node_modules/react-native/Libraries/StyleSheet/StyleSheet.js b/node_modules/react-native/Libraries/StyleSheet/StyleSheet.js
index 785fbfe..1d3b93c 100644
--- a/node_modules/react-native/Libraries/StyleSheet/StyleSheet.js
+++ b/node_modules/react-native/Libraries/StyleSheet/StyleSheet.js
@@ -360,13 +360,6 @@ module.exports = {
     // TODO: This should return S as the return type. But first,
     // we need to codemod all the callsites that are typing this
     // return value as a number (even though it was opaque).
-    if (__DEV__) {
-      for (const key in obj) {
-        if (obj[key]) {
-          Object.freeze(obj[key]);
-        }
-      }
-    }
     return obj;
   },
 };
\`\`\`

## Code style
1. Константы
   \`CAPS_SNAKE_CASE\`
2. Функции
   \`camelCase\`
3. Классы
   \`PascalCase\`
4. Enum
   \`PascalCaseEnum.camelCase\`
5. Типы
   \`PascalCaseType\`
6. Интерфейсы
   \`PascalCase\`
7. Переменные внутри функций
   \`camelCase\`
8. Названия файлов
    - Если внутри файлов \`default export Class\`, то
      \`PascalCase\`
    - В любом другом случае (функции / константы / etc)
      \`camelCase\`

## Процесс сборки приложения для релиза

Запустить скрипт в \`scripts/publish\`

# 3. Тесты

Чтобы запустить тесты, используй команду \`yarn run test\`.

# 4. База знаний

**Несколько простых правил для readme**
1. Основная структура readme-файла нерушима.
2. Технические писатели обеспечивают структуру и читаемость.
3. Если ты считаешь, что твоей команде не хватает какой-то информации, пиши в #docs.
4. Для каждой новой темы используй новый заголовок. Максимальный уровень вложенности заголовков равен 3.
5. Если на чём-то нужно заострить внимание, пиши полужирным “важно” и “примечание”.
`;
const stylesFn = (0, ui_1.createStyles)(({ spaces }) => ({
    container: {
        flex: 1,
        paddingHorizontal: spaces.Space10,
    },
    footer: {
        height: spaces.Space32,
    },
}));
