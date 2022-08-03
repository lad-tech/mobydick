## @npm/mobydick-inputs

Author - Aleksei Smirnov
# ****DropDown правила кастомизации****

1. Процентные стили не поддерживаются!
2. Необходимо поставить [React-Native-Device-Info](https://github.com/react-native-device-info/react-native-device-info)
3. Горизонтальная верстка пока не поддерживается, но можно кастомизировать пропсами
4. Лучше выбирать либо **TextStyle** либо **TextFont**
5. Для **FlatList** ширина берется от кнопки стандартно, можно передать свою
6. Для **FlatList** высота **Item** высчитывается по формуле: **Высота кнопки * 0.8 (как в дизайне)**, можно передать свою
7. Что за функция такая **getIosSafeAreaHeights** и зачем она такая нужна:
   * У всех устройств есть **Status Bar**, у iPhone начиная с версии iPhone X есть еще **Bottom Line**,
   Для определения кнопки в пространстве используется ее **ref** и функция для получения позиции на экране **ref.current.measure**.
   iPhone возвращает позицию **pageY** учитывая высоты **Status Bar** и **Bottom line** в отличие от Android, поэтому приходится принудительно в функции **getDropDownDimensions** 
   добавлять значения отступов. Мы получаем модель телефона через **getModel** (react-native-device-info) и пробрасываем его в функцию **getIosSafeAreaHeights**.
   Для этой функции создан enum **IPhoneModelEnum** и функция после перебора возвращает для определенных моделей iPhone заранее записанные значения отступов.

      `!!В дальнейшем, для поддержания актуальности библиотеки, нужно будет
      актуализировать enum IPhoneModelEnum и функцию getIosSafeAreaHeights!!`

8. Расшифровка пропсов: 
   * label?: string; - Тест в заголовке над **DropDown**
   * rightIcon?: ReactElement; - Иконка для **DropDown**
   * placeholder: string; - Дефолтный текст в **DropDown**
   * list: string[]; - Массив элементов для списка **DropDown**
   * onPress: (item: string) => void; - Функция по нажатию на элемент массива
   * selectedItem?: string; - Текущий выбранный элемент для окраски оного в DropDown
   * navBarHeight?: number; - Высота навигационного бара для правильной позиции, чтобы **DropDown** не заезжал под навигацию
   * addButtonStyle?: ViewStyle; - Кастомный стиль для кнопки - если передать только его, **item** в списке будут считать высоту по **"высота кнопки * 0.8"**
   * addFlatListStyle?: ViewStyle; - Кастомный стиль для вьюшки **FlatList**. Стандартно ширина берется от кнопки, высота высчитывается в функции
   * addFlatListItemStyle?: ViewStyle; - Кастомный стиль для RenderItem у **FlatList**
   * addLabelStyle?: TextStyle; - кастомный стиль для **label**, рекомендуется не использовать отступы
   * addLabelFont?: TypographyProp; - кастомный шрифт из дизайн системы для **label**
   * addButtonTextStyle?: TextStyle; - кастомный стиль текста для кнопки с дефолтным **Placeholder**
   * addButtonTextStyleChosen?: TextStyle; - кастомный стиль текста для кнопки с выбранным элементом - **selectedItem**
   * addButtonTextFont?: TypographyProp; - кастомный шрифт для текста кнопки с дефолтным **Placeholder**
   * addButtonTextFontChosen?: TypographyProp; - кастомный шрифт для текста кнопки при выбранном элементе - **selectedItem**
   * addFlatListTextStyle?: TextStyle; - стиль текста для не выбранных элементов в списке **FlatList** 
   * addFlatListTextStylePressed?: TextStyle; стиль текста для выбранного элемента в списке **FlatList** - **selectedItem**
   * addFlatListTextFont?: TypographyProp; - шрифт для текста для не выбранных элементов в списке **FlatList**
   * addFlatListTextFontPressed?: TypographyProp; шрифт для текста для не выбранного элемента в списке **FlatList** - **selectedItem**
   * selectedItemColor?: string; - цвет выбранного элемента в списке при нажатии на него - подсветка **TouchableHighLight**
   * maxVisibleListLength?: number: - Максимальное количество видимых элементов в списке(Если элементов больше, вью у FlatList будет скроллится) - **по дефолту 6** 