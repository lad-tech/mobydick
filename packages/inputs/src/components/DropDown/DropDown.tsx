import {
  View,
  TouchableHighlight,
  TouchableOpacity,
  ITouchableOpacity,
  FlatList,
} from '@npm/mobydick-core';
import React, {FC, useRef, useState} from 'react';
import {Arrow, useStyles} from '@npm/mobydick-styles';
import {Typography} from '@npm/mobydick-typography';
import {PopupBase, usePopups} from '@npm/mobydick-popups';

import {DropDownProps, ITypes} from './types';
import stylesCreate from './stylesCreate';
import {height} from './constants';

const Icon = ({open}: {open: ITypes}) => {
  return open !== ITypes.closed ? (
    <Arrow style={{transform: [{rotateX: '180deg'}]}} />
  ) : (
    <Arrow />
  );
};

const DropDown: FC<DropDownProps> = props => {
  const {title, placeholder, list, selectedItem, onPress, rightIcon} = props;
  const [styles, theme] = useStyles(stylesCreate);
  const [chosen, setChosen] = useState('');
  const [pressedItem, setPressedItem] = useState('');
  const dropDownRef = useRef<ITouchableOpacity>(null);
  const [open, setOpen] = useState<ITypes>(ITypes.closed);
  const popupContext = usePopups();

  const checkPosition = () => {
    if (dropDownRef.current) {
      dropDownRef.current.measure((_x, _y, _width, _height, _pageX, pageY) => {
        openPopup(pageY);
        setOpen(ITypes.top);
      });
    }
  };

  const openPopup = (pageY: number) => {
    const listUnderPosition = styles.button.height + 4 + pageY;
    const listAbovePosition =
      height - (pageY + styles.button.height + 4 + styles.button.marginTop);
    const lengthOfListView =
      list.length > 6
        ? styles.dropDownItem.height * 6 + styles.flatList.paddingVertical * 2
        : list.length * styles.dropDownItem.height +
          styles.flatList.paddingVertical * 2;
    const expectedEndPosition =
      // Считаем конечную позицию FlatList по высоте Y
      styles.button.height +
      styles.button.marginTop +
      4 +
      lengthOfListView +
      pageY +
      // Высота навбара, нужно подумать как заменить
      50;
    popupContext.openPopup({
      id: 'DropDownPopup',
      Content: props => {
        return (
          <PopupBase
            onClose={() => {
              setOpen(ITypes.bottom);
              props.onClose();
            }}
            overlayStyle={{backgroundColor: 'transparent'}}>
            <FlatList
              bounces={false}
              style={[
                styles.flatList,
                {
                  width: styles.button.width,
                },
                expectedEndPosition > height
                  ? {bottom: listAbovePosition}
                  : {top: listUnderPosition},
              ]}
              data={list}
              renderItem={renderItem}
              keyExtractor={(item: string, index: number) =>
                index.toString() + item.toString()
              }
            />
          </PopupBase>
        );
      },
    });
  };

  const renderItem = ({item}: {item: string}) => {
    return (
      <TouchableHighlight
        style={[styles.dropDownItem]}
        onPress={() => {
          setPressedItem(item);
          setOpen(ITypes.closed);
          setChosen(item);
          popupContext.closePopup('DropDownPopup');
        }}
        underlayColor={theme.colors.BgAccentSoft}>
        <Typography
          font={
            item === pressedItem ? 'Medium-Primary-M' : 'Regular-Secondary-M'
          }>
          {item}
        </Typography>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.container}>
      {Boolean(title) && (
        <Typography font={'Medium-Tertiary-XS'}>{title}</Typography>
      )}
      <View style={{position: 'relative'}}>
        <TouchableOpacity
          style={styles.button}
          onPress={checkPosition}
          ref={dropDownRef}>
          <Typography
            font={chosen ? 'Regular-Primary-M' : 'Regular-Muted-M'}
            numberOfLines={1}>
            {chosen ? chosen : placeholder}
          </Typography>
          <Icon open={open} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DropDown;
