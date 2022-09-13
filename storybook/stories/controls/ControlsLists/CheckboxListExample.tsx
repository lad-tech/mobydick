import {CheckBox, ControlsList} from '@npm/mobydick-controls';
import {boolean, text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {Typography} from '@npm/mobydick-typography';
import React from 'react';
import {useStyles} from '@npm/mobydick-styles';

import {
  font,
  numberOfLines,
  optionFour,
  optionOne,
  optionThree,
  optionTwo,
  textFour,
  textOne,
  textThree,
  textTwo,
} from '../constants';
import stylesCreate from '../stylesCreate';

const CheckboxListExample = () => {
  const [styles] = useStyles(stylesCreate);

  return (
    <ControlsList
      single={boolean('single', false)}
      disabled={boolean('disabled', false)}
      onChange={action('pressed')}
      initialValues={[optionOne, optionFour]}
      listStyles={styles.listStyle}>
      <CheckBox value={''} containerStyle={styles.containerStyle}>
        <Typography
          font={font}
          numberOfLines={numberOfLines}
          style={styles.typographyStyle}>
          {text(textOne, optionOne)}
        </Typography>
      </CheckBox>
      <CheckBox value={optionTwo} containerStyle={styles.containerStyle}>
        <Typography
          font={font}
          numberOfLines={numberOfLines}
          style={styles.typographyStyle}>
          {text(textTwo, optionTwo)}
        </Typography>
      </CheckBox>
      <CheckBox
        value={optionThree}
        containerStyle={styles.containerStyle}
        selected={true}>
        <Typography
          font={font}
          numberOfLines={numberOfLines}
          style={styles.typographyStyle}>
          {text(textThree, optionThree)}
        </Typography>
      </CheckBox>
      <CheckBox value={optionFour} containerStyle={styles.containerStyle}>
        <Typography
          font={font}
          numberOfLines={numberOfLines}
          style={styles.typographyStyle}>
          {text(textFour, optionFour)}
        </Typography>
      </CheckBox>
    </ControlsList>
  );
};

export default CheckboxListExample;