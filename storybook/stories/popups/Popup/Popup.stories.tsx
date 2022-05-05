import React, {useState} from 'react';
import {storiesOf} from '@storybook/react-native';
import {Button} from '@mobydick/cta';
import {PopupsProvider, usePopups} from '@mobydick/popups';

import CenterView from '../../CenterView';

const PopupExample = () => {
  const popupContext = usePopups();
  const [, setPopupCount] = useState(0);

  const onPress = () => {
    setPopupCount(count => {
      const newCount = count + 1;

      const pop = {
        title: newCount.toString(),
        children: (
          <Button
            onPress={() =>
              popupContext.openPopup({
                title: newCount + 'newNested',
                style: {width: 200, position: 'absolute', top: 5},
                children: pop['children'],
              })
            }
            text={'nested'}
          />
        ),
      };

      popupContext.openPopup(pop);

      return newCount;
    });
  };
  return <Button text={'Open Popup'} onPress={onPress} />;
};

storiesOf('Design System/Popups/Popup', module)
  .addDecorator(getStory => (
    <PopupsProvider>
      <CenterView>{getStory()}</CenterView>
    </PopupsProvider>
  ))
  .add('basic', () => <PopupExample />);
