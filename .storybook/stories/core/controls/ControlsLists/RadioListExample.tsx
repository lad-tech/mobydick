import React, {useState} from 'react';

import stylesCreate from '../stylesCreate';
import {
  font,
  numberOfLines,
  optionFour,
  optionOne,
  optionThree,
  optionTwo,
} from '../constants';

import {
  ControlsList,
  Radio,
  Typography,
  useStyles,
} from '@lad-tech/mobydick-core';

const RadioListExample = ({
  single,
  disabled,
  textOne,
  textTwo,
  textThree,
  textFour,
}: {
  single: boolean;
  disabled: boolean;
  textOne: string;
  textTwo: string;
  textThree: string;
  textFour: string;
}) => {
  const [styles] = useStyles(stylesCreate);
  const [values, setValues] = useState([optionOne]);

  return (
    <ControlsList
      single={single}
      disabled={disabled}
      onChange={setValues}
      values={values}
      listStyles={styles.listStyle}>
      <Radio value={optionOne} containerStyle={styles.containerStyle}>
        <Typography
          font={font}
          numberOfLines={numberOfLines}
          style={styles.typographyStyle}>
          {textOne}
        </Typography>
      </Radio>
      <Radio value={optionTwo} containerStyle={styles.containerStyle}>
        <Typography
          font={font}
          numberOfLines={numberOfLines}
          style={styles.typographyStyle}>
          {textTwo}
        </Typography>
      </Radio>
      <Radio value={optionThree} containerStyle={styles.containerStyle}>
        <Typography
          font={font}
          numberOfLines={numberOfLines}
          style={styles.typographyStyle}>
          {textThree}
        </Typography>
      </Radio>
      <Radio value={optionFour} containerStyle={styles.containerStyle}>
        <Typography
          font={font}
          numberOfLines={numberOfLines}
          style={styles.typographyStyle}>
          {textFour}
        </Typography>
      </Radio>
    </ControlsList>
  );
};

export default RadioListExample;
