## @npm/mobydick-inputs

Author - Aleksei Smirnov
# ****DropDown правила кастомизации****

1. Процентные стили не поддерживаются!
2. Горизонтальная верстка пока не поддерживается, но можно кастомизировать пропсами
3. Лучше выбирать либо **TextStyle** либо **TextFont**
4. Для **FlatList** ширина берется от кнопки стандартно, можно передать свою
5. Расшифровка пропсов: 
   * label?: string; - Тест в заголовке над **DropDown**
   * rightIcon?: ReactElement; - Иконка для **DropDown**
   * placeholder: string; - Дефолтный текст в **DropDown**
   * list: ListItem; - Массив элементов для списка **DropDown**
   * onPress: (item: ListItem) => void; - Функция по нажатию на элемент массива
   * selectedItem?: ListItem; - Текущий выбранный элемент для окраски оного в DropDown
   * navBarHeight?: number; - Высота навигационного бара для правильной позиции, чтобы **DropDown** не заезжал под навигацию
   * buttonStyle?: ViewStyle; - Кастомный стиль для кнопки - если передать только его, **item** в списке будут считать высоту по **"высота кнопки * 0.8"**
   * flatListStyle?: ViewStyle; - Кастомный стиль для вьюшки **FlatList**. Стандартно ширина берется от кнопки, высота высчитывается в функции
   * flatListItemStyle?: ViewStyle; - Кастомный стиль для RenderItem у **FlatList**
   * labelStyle?: TextStyle; - кастомный стиль для **label**, рекомендуется не использовать отступы
   * labelFont?: TypographyProp; - кастомный шрифт из дизайн системы для **label**
   * buttonTextStyle?: TextStyle; - кастомный стиль текста для кнопки с дефолтным **Placeholder**
   * buttonTextStyleChosen?: TextStyle; - кастомный стиль текста для кнопки с выбранным элементом - **selectedItem**
   * buttonTextFont?: TypographyProp; - кастомный шрифт для текста кнопки с дефолтным **Placeholder**
   * buttonTextFontChosen?: TypographyProp; - кастомный шрифт для текста кнопки при выбранном элементе - **selectedItem**
   * flatListTextStyle?: TextStyle; - стиль текста для не выбранных элементов в списке **FlatList** 
   * flatListTextStylePressed?: TextStyle; стиль текста для выбранного элемента в списке **FlatList** - **selectedItem**
   * flatListTextFont?: TypographyProp; - шрифт для текста для не выбранных элементов в списке **FlatList**
   * flatListTextFontPressed?: TypographyProp; шрифт для текста для не выбранного элемента в списке **FlatList** - **selectedItem**
   * selectedItemColor?: string; - цвет выбранного элемента в списке при нажатии на него - подсветка **TouchableHighLight**
   * maxVisibleListLength?: number: - Максимальное количество видимых элементов в списке(Если элементов больше, вью у FlatList будет скроллится) - **по дефолту 6** 
   
6. Массив элементов: можно передать массив объектов ввида {label: string; value: unknown}, либо передать массив строк, который преобразуется в вид {label: string; value: unknown}.