import {StyleSheet, ViewStyle} from 'react-native';
import {useSafeAreaFrame} from 'react-native-safe-area-context';

import {
  BORDER_BUTTON_WIDTH,
  DEFAULT_DROP_DOWN_WIDTH,
  LIST_MAX_HEIGHT,
} from '../constants';
import {getDropDownDimensions} from '../utils/getDropDownDimensions';
import {IDropDownMultiSelectProps, IDropDownProps, IListItem} from '../types';
import {IPopupProps} from '../../../../popups/components/PopupBase/types';
import TouchableHighlight from '../../../../basic/components/TouchableHighlight/TouchableHighlight';
import {TypographyLegacy} from '../../../../typography/components/TypographyLegacy/TypographyLegacy';
import useStyles from '../../../../styles/hooks/useStyles';
import PopupBase from '../../../../popups/components/PopupBase/PopupBase';
import View from '../../../../basic/components/View/View';
import FlatList from '../../../../basic/components/FlatList/FlatList';

import stylesCreate from './stylesCreate';
import ListEmptySelector from './ListEmptySelector';

const keyExtractor = (item: string, index: number) =>
  index.toString() + item.toString();

type IFieldsToSelect =
  | 'navBarHeight'
  | 'selectedItem'
  | 'selectedItemColor'
  | 'buttonStyle'
  | 'flatListStyle'
  | 'flatListItemStyle'
  | 'flatListTextStyle'
  | 'flatListTextFont'
  | 'flatListTextFontPressed'
  | 'flatListTextStylePressed'
  | 'listEmptyText'
  | 'listEmptyFont';

interface IItemsProps<T extends IListItem>
  extends IPopupProps,
    Pick<IDropDownProps<T> | IDropDownMultiSelectProps<T>, IFieldsToSelect> {
  list: IListItem[];
  pageY: number;
  dropDownHeight: number;
  renderItemOnPress: (item: T) => void;
}

interface IRenderItemProps<T extends IListItem>
  extends Pick<
    IItemsProps<T>,
    | 'renderItemOnPress'
    | 'selectedItem'
    | 'selectedItemColor'
    | 'flatListItemStyle'
    | 'flatListTextStylePressed'
    | 'flatListTextFontPressed'
    | 'flatListTextStyle'
    | 'flatListTextFont'
  > {
  styles: StyleSheet.NamedStyles<{dropDownItem: ViewStyle}>;
  theme: ReturnType<typeof useStyles>[1];
}

function renderItem<T extends IListItem>(props: IRenderItemProps<T>) {
  return ({item}: {item: T}) => {
    const {
      renderItemOnPress,

      styles,
      theme,
      selectedItemColor,
      selectedItem,

      flatListItemStyle,
      flatListTextStylePressed,
      flatListTextStyle,
      flatListTextFontPressed,
      flatListTextFont,
    } = props;

    const isSelected = () => {
      if (Array.isArray(selectedItem)) {
        return selectedItem.length === 0
          ? false
          : selectedItem.some(it => it.value === item.value);
      }

      return item.value === selectedItem;
    };

    const getFont = () => {
      if (isSelected()) {
        return flatListTextFontPressed || 'Medium-Primary-M';
      }
      return flatListTextFont || 'Regular-Secondary-M';
    };

    const backgroundColorItem = selectedItemColor
      ? {backgroundColor: selectedItemColor}
      : {backgroundColor: theme.colors.BgAccentSoft};

    return (
      <TouchableHighlight
        accessibilityLabel={item.label}
        style={[
          styles.dropDownItem,
          flatListItemStyle,
          isSelected() ? backgroundColorItem : null,
        ]}
        onPress={() => renderItemOnPress(item)}
        underlayColor={
          selectedItemColor ? selectedItemColor : theme.colors.BgAccentSoft
        }>
        <TypographyLegacy
          style={isSelected() ? flatListTextStylePressed : flatListTextStyle}
          font={getFont()}>
          {item.label}
        </TypographyLegacy>
      </TouchableHighlight>
    );
  };
}

function Selector<T extends IListItem>(props: IItemsProps<T>) {
  const {
    list,
    pageY,
    navBarHeight = 50,

    renderItemOnPress,

    selectedItem,
    selectedItemColor,

    buttonStyle,
    flatListStyle,
    flatListTextFont,
    flatListItemStyle,
    flatListTextStyle,
    flatListTextStylePressed,
    flatListTextFontPressed,
    listEmptyText,
    listEmptyFont,
    dropDownHeight,
  } = props;
  const [styles, theme] = useStyles(stylesCreate);
  const {height} = useSafeAreaFrame();

  const {aboveDropDownPos, underDropDownPos, isAboveDropDown} =
    getDropDownDimensions({
      pageY,
      navBarHeight,
      dropDownHeight,
      dropDownBorderWidth: buttonStyle?.borderWidth || BORDER_BUTTON_WIDTH,
      listLength: list.length,
      height,
    });

  const styleWidth = flatListStyle?.width || buttonStyle?.width;

  return (
    <PopupBase
      onClose={props.onClose}
      overlayStyle={{backgroundColor: 'transparent'}}>
      <View
        style={[
          styles.flatList,
          flatListStyle,
          {
            width: styleWidth || DEFAULT_DROP_DOWN_WIDTH,
          },
          isAboveDropDown
            ? {
                bottom: aboveDropDownPos,
              }
            : {
                top: underDropDownPos,
              },
          {
            maxHeight: LIST_MAX_HEIGHT,
          },
        ]}>
        <FlatList
          bounces={false}
          data={list}
          renderItem={renderItem({
            renderItemOnPress,
            selectedItemColor,

            selectedItem,
            styles,
            theme,
            flatListItemStyle: flatListItemStyle,
            flatListTextFont: flatListTextFont,
            flatListTextStyle: flatListTextStyle,
            flatListTextStylePressed: flatListTextStylePressed,
            flatListTextFontPressed: flatListTextFontPressed,
          })}
          keyExtractor={keyExtractor}
          ListEmptyComponent={
            <ListEmptySelector
              listEmptyText={listEmptyText}
              listEmptyFont={listEmptyFont}
            />
          }
        />
      </View>
    </PopupBase>
  );
}

export default Selector;
