import {Tooltip} from '@npm/mobydick-popups/src/components/Tooltip';
import React from 'react';
import {boolean, number, text} from '@storybook/addon-knobs';
import {Button} from '@npm/mobydick-cta';
import {usePopups} from '@npm/mobydick-popups';
import {useStyles} from '@npm/mobydick-styles';
import stylesCreate from '@npm/mobydick-popups/src/components/Tooltip/stylesCreate';

const TooltipExample = () => {
  const popupContext = usePopups();
  const [styles] = useStyles(stylesCreate);

  return (
    <>
      <Button
        text={'What is it?'}
        onPress={() =>
          popupContext.openPopup({
            overlayStyle: styles.overlayStyle,
            children: (
              <Tooltip
                message={text('Message', 'This is tooltip!')}
                isArrow={boolean('Arrow', true)}
                position={{top: number('Position top tooltip', 300)}}
                arrowStyle={{right: number('Position right arrow', 50)}}
              />
            ),
          })
        }
      />
    </>
  );
};

export default TooltipExample;
