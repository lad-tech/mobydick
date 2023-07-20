import {boolean, text} from '@storybook/addon-knobs';
import React, {useState} from 'react';

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

import {
  ControlsList,
  Radio,
  useStyles,
  Typography,
} from '@lad-tech/mobydick-core';

const RadioListExample = () => {
  const [styles] = useStyles(stylesCreate);
  const [values, setValues] = useState([optionOne]);

  return (
    <ControlsList
      single={boolean('single', true)}
      disabled={boolean('disabled', false)}
      onChange={setValues}
      values={values}
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
