import {ControlsList, Radio, useStyles, Typography} from '@npm/mobydick-core';
import {boolean, text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import React from 'react';

import stylesCreate from '../stylesCreate';
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

const RadioListExample = () => {
  const [styles] = useStyles(stylesCreate);

  return (
    <ControlsList
      single={boolean('single', false)}
      disabled={boolean('disabled', false)}
      onChange={action('pressed')}
      initialValues={[optionOne]}
      listStyles={styles.listStyle}>
      <Radio value={optionOne} containerStyle={styles.containerStyle}>
        <Typography
          font={font}
          numberOfLines={numberOfLines}
          style={styles.typographyStyle}>
          {text(textOne, optionOne)}
        </Typography>
      </Radio>
      <Radio value={optionTwo} containerStyle={styles.containerStyle}>
        <Typography
          font={font}
          numberOfLines={numberOfLines}
          style={styles.typographyStyle}>
          {text(textTwo, optionTwo)}
        </Typography>
      </Radio>
      <Radio value={optionThree} containerStyle={styles.containerStyle}>
        <Typography
          font={font}
          numberOfLines={numberOfLines}
          style={styles.typographyStyle}>
          {text(textThree, optionThree)}
        </Typography>
      </Radio>
      <Radio value={optionFour} containerStyle={styles.containerStyle}>
        <Typography
          font={font}
          numberOfLines={numberOfLines}
          style={styles.typographyStyle}>
          {text(textFour, optionFour)}
        </Typography>
      </Radio>
    </ControlsList>
  );
};

export default RadioListExample;
