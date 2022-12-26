import React from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import {useSafeAreaFrame} from 'react-native-safe-area-context';

import {
  BORDER_BUTTON_WIDTH,
  DEFAULT_DROP_DOWN_HEIGHT,
  DEFAULT_DROP_DOWN_WIDTH,
  LIST_MAX_HEIGHT,
} from '../constants';
import {getDropDownDimensions} from '../utils/getDropDownDimensions';
import {IDropDownProps, IItemValue, IListItem} from '../types';
import {IPopupProps} from '../../../../popups/components/PopupBase/types';
import TouchableHighlight from '../../../../basic/components/TouchableHighlight/TouchableHighlight';
import {Typography} from '../../../../typography/components/Typography/Typography';
import useStyles from '../../../../styles/theme/hooks/useStyles';
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

interface IItemsProps<T extends IListItem<S> | string, S extends IItemValue>
  extends IPopupProps,
    Pick<IDropDownProps<T, S>, IFieldsToSelect> {
  list: IListItem<S>[];
  pageY: number;
  renderItemOnPress: (item: T) => void;
}

interface IRenderItemProps<T extends IListItem<S>, S extends IItemValue>
  extends Pick<
    IItemsProps<T, S>,
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

function renderItem<T extends IListItem<S>, S extends IItemValue>(
  props: IRenderItemProps<T, S>,
) {
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

    const getFont = () => {
      if (item.value === selectedItem) {
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
          item.value === selectedItem ? backgroundColorItem : null,
        ]}
        onPress={() => renderItemOnPress(item)}
        underlayColor={
          selectedItemColor ? selectedItemColor : theme.colors.BgAccentSoft
        }>
        <Typography
          style={
            item.value === selectedItem
              ? flatListTextStylePressed
              : flatListTextStyle
          }
          font={getFont()}>
          {item.label}
        </Typography>
      </TouchableHighlight>
    );
  };
}

function Selector<T extends IListItem<S>, S extends IItemValue>(
  props: IItemsProps<T, S>,
) {
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
  } = props;
  const [styles, theme] = useStyles(stylesCreate);
  const {height} = useSafeAreaFrame();

  const {aboveDropDownPos, underDropDownPos, isAboveDropDown} =
    getDropDownDimensions({
      pageY,
      navBarHeight,
      dropDownHeight: buttonStyle?.height
        ? +buttonStyle.height
        : DEFAULT_DROP_DOWN_HEIGHT,
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
