import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {Button, View} from '@npm/mobydick-core';

import {IContentProps} from '../../types';
import {usePopups} from '../../hooks';
import PopupsProvider from '../PopupsProvider';

const testIdPopup = 'testIdPopup';
const testIdOpenPopup = 'testIdOpenPopup';
const testIdCloseAllPopup = 'testIdCloseAllPopup';

const Popup = ({onClose}: IContentProps) => {
  return (
    <Button testID={testIdPopup} onPress={() => onClose()} title={'title'} />
  );
};

const Example = () => {
  const popupContext = usePopups();

  return (
    <View>
      <Button
        testID={testIdOpenPopup}
        onPress={() => popupContext.openPopup({Content: Popup})}
        title={'title'}
      />
      <Button
        testID={testIdCloseAllPopup}
        onPress={() => popupContext.closeAllPopups()}
        title={'title'}
      />
    </View>
  );
};

describe('@npm/mobydick-popups/PopupsProvider', () => {
  it('should renders correctly', async () => {
    const {toJSON, getByTestId} = render(
      <PopupsProvider>
        <Example />
      </PopupsProvider>,
    );

    // Изначально попапа нет
    expect(toJSON()).toMatchSnapshot();

    // Вызвали popupContext.openPopup и он появился
    fireEvent.press(getByTestId(testIdOpenPopup));
    expect(toJSON()).toMatchSnapshot();

    // Вызвали onClose у попапа и он пропал
    fireEvent.press(getByTestId(testIdPopup));
    expect(toJSON()).toMatchSnapshot();

    // Пооткрывали много папапов и они отприсовались норм
    fireEvent.press(getByTestId(testIdOpenPopup));
    fireEvent.press(getByTestId(testIdOpenPopup));
    expect(toJSON()).toMatchSnapshot();

    // Вызвали popupContext.closeAllPopups и они все закрылись
    fireEvent.press(getByTestId(testIdCloseAllPopup));
    expect(toJSON()).toMatchSnapshot();
  });
});
