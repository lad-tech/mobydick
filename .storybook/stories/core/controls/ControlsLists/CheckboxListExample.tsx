import React, {useState} from 'react';

import {
  font,
  numberOfLines,
  optionFour,
  optionOne,
  optionThree,
  optionTwo,
} from '../constants';
import stylesCreate from '../stylesCreate';

import {
  CheckBox,
  ControlsList,
  Typography,
  useStyles,
} from '@lad-tech/mobydick-core';

const CheckboxListExample = ({
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
  const [values, setValues] = useState([optionOne, optionFour]);

  return (
    <ControlsList
      single={single}
      disabled={disabled}
      onChange={setValues}
      values={values}
      listStyles={styles.listStyle}>
      <CheckBox value={''} containerStyle={styles.containerStyle}>
        <Typography
          font={font}
          numberOfLines={numberOfLines}
          style={styles.typographyStyle}>
          {textOne}
        </Typography>
      </CheckBox>
      <CheckBox value={optionTwo} containerStyle={styles.containerStyle}>
        <Typography
          font={font}
          numberOfLines={numberOfLines}
          style={styles.typographyStyle}>
          {textTwo}
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
          {textThree}
        </Typography>
      </CheckBox>
      <CheckBox value={optionFour} containerStyle={styles.containerStyle}>
        <Typography
          font={font}
          numberOfLines={numberOfLines}
          style={styles.typographyStyle}>
          {textFour}
        </Typography>
      </CheckBox>
    </ControlsList>
  );
};

export default CheckboxListExample;
