Author - Aleksei Smirnov
# ****DropDown правила кастомизации****

1. Процентные стили не поддерживаются!
2. Горизонтальная верстка пока не поддерживается, но можно кастомизировать пропсами
3. Лучше выбирать либо **TextStyle** либо **TextFont**
4. Для **FlatList** ширина берется от кнопки стандартно, можно передать свою
5. Для **FlatList** высота **Item** высчитывается по формуле: **Высота кнопки * 0.8 (как в дизайне)**, можно передать свою
6. Расшифровка пропсов: 
   * title?: string; - Тест в заголовке над **DropDown**
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
   * addFlatListTextStylePressed?: TextStyle; стиль текста для не выбранного элемента в списке **FlatList** - **selectedItem**
   * addFlatListTextFont?: TypographyProp; - шрифт для текста для не выбранных элементов в списке **FlatList**
   * addFlatListTextFontPressed?: TypographyProp; шрифт для текста для не выбранного элемента в списке **FlatList** - **selectedItem**
   * selectedItemColor?: string; - цвет выбранного элемента в списке при нажатии на него - подсветка **TouchableHighLight**
   * maxVisibleListLength?: number: - Максимальное количество видимых элементов в списке(Если элементов больше, вью у FlatList будет скроллится) - **по дефолту 6**