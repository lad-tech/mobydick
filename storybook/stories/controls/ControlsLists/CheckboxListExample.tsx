import {boolean, text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import React from 'react';

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

import {
  CheckBox,
  ControlsList,
  useStyles,
  Typography,
} from '@npm/mobydick-core';

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
