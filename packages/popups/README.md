# @npm/mobydick-popups

## **PopupsProvider**

Для того, чтобы твой компонент стал popup, нужно воспользоваться хуком `const popupContext = usePopups()`, который имеет такие методы, как:

1. `popups` 一 отдает массив твоих открытых popups;
2. `openPopup` 一 в метод ты передаешь `{Content: YourPopup}`, после чего на экране открывается `YourPopup` и в массив выше записывается `id` и `onClose`;
3. `closePopup` 一 принимает в себя `id`, после чего удаляется из массива popup и закрывается на экране; 
4. `closeAllPopups` 一 закрывает все popups на экране и очищает массив.

Когда `YourPopup` открывается через `Content`, ему автоматически передаются пропсы `id` и `onClose`.

В нашей дизайн-системе были созданы определенные `base`, которые ты можешь использовать внутри твоего `YourPopup`:
1. `PopupBase`
2. `ModalBase`
3. `ActionSheetsBase`
4. `SnackbarBase`
5. `TooltipBase`

В пакете используется либа `react-native-safe-area-context` для определения высоты экрана. Чтобы она работала, необходимо в корневом файле обернуть всё: `<SafeAreaProvider>``</SafeAreaProvider>`.

### **PopupBase**
Это обертка с дополнительным пропсом `overlayStyle`, который по дефолту занимает весь экран, вне popup действует мимоклик. Используется в каждом `base` кроме `SnackbarBase`. 

### **ModalBase**
Внутри созданы дефолтные компоненты, которые ты можешь вызвать через точку:
1. `ModalBase.Title` 一 заголовок модалки (deprecate).
2. `ModalBase.DescriptionText` 一 подзаголовок модалки (deprecate).
3. `ModalBase.CloseIcon` 一 иконка "крестик" в верхнем правом углу, закрывает модалку.
4. `ModalBase.VerticalButtonsView` 一 обертка, которая принимает в себя `Buttons` и вертикально их отображает.
5. `ModalBase.HorizontalButtonsView` 一 внутри себя содержит горизонтальное отображение двух кнопок, пропсы которым нужно передать: `textLeft`, `onPressLeft`, `textLeft`, `textRight`, `typeRight`, `onPressRight`.
6. `ModalBase.AlertContent` 一 иконка внутри круга с background. По дефолту будет отображен check-alert, но можно передать пропсы `name`, `color`, `size`, `style`, и ты получишь свою иконку алерта.
7. `ModalBase.VerticalButton` 一 кнопка, которая по дизайну используется в `VerticalButtonsView`. В неё передаются необходимые пропсы для кнопки, а в стиль передается `marginBottom: rem(12)` для того, чтобы она подвинулась от соседней кнопки.
8. `ModalBase.ImageView` 一 картинка, которая по дефолту имеет отступ и отцентрована. В нее также можно передать свой стиль.
9. `ModalBase.TextContent` 一 объединение `title` и `descriptionText`.

По краям `ModalBase` имеет отступ в 20, а между элементами 24, но как известно, все стили `containerStyle` можно передать и всё можно заменить.

### **ActionSheetsBase**
По дефолту располагается внизу экрана. Имеет также дефолтный компонент:
1. `ActionSheetBase.Item` 一 элемент, принимающий в себя `itemType`(`firstItem`, `innerItem`, `lastItem`, `singleItem`, `cancelItem`), `onPress`, `style`, `title`, `textFont`, `disabled`, `leftIcon`, `radio`, `checkboxList`. \
    У типа `cancelItem` применяется `font` 一 `disabled ? 'Medium-Muted-M' : 'Medium-Accent-M'`. У других типов `font` можно менять с помощью `textFont`.


### **SnackbarBase**
Единственный из `Base`, не использующий обертку `PopupBase`, потому что здесь мимоклик не нужен. `Snackbar` закрывается по таймеру.

Что можно передать:
1. `onClose` 一 как любому `base`;
2. `containerStyle` 一 стиль контейнеру;
3. `position` 一 расположение: либо `top`(отступ 20), либо `bottom`(отступ 10);
4. `timeShow` 一 миллисекунды, через которые необходимо, чтобы `Snackbar` закрылся (по дефолту 5000).

### **TooltipBase**

Почти все пропсы обязательные:
1. Стандартные, которые передаются всем `base` 一 `onClose`, `containerStyle` (опциональный).
2. `position` 一 расположение тултипа: либо когда стрелка располагается сверху тултипа(`top`), а значит тултип снизу, либо когда стрелка снизу тултипа(`bottom`), тултип получается сверху.
3. `placement` 一 расположение стрелки: в начале подсказки, в середине и в конце, по краю элемента, от которого доступен ref.
4. `refCurrent` 一 самое важное, ты должен отправить ref кнопки. Так мы определяем координаты кнопки и связываем тултип с ними. Кнопка должна быть обернута в `ForwardRef`.
5. `timeShow` (опциональный) 一 если отправить время, то тултип закроется по таймеру.

Созданы дефолтные компоненты:
1. `TooltipBase.Title` 一 заголовок тултипа.
2. `TooltipBase.DescriptionText` 一 подзаголовок.
3. `TooltipBase.Arrow` 一 стрелочка. На данный момент сделана острой, по дизайну закругленная (когда-нибудь возьмется в работу);
4. `TooltipBase.LeftButton` 一 дефолтная кнопка, располагающаяся слева в подсказке с отступом spaces8.
