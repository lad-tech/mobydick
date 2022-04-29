import {TextInputProps} from '@mobydick/core';
import {FC, ReactElement} from 'react';

interface IInputFieldsProps {
  title?: string;
  subtitle?: FC | string;
  rightIcon?: ReactElement;
  type?: ITypes;
  disabled?: boolean;
}

export enum ITypes {
  default = 'default',
  valid = 'valid',
  wrong = 'wrong',
  disabled = 'disabled',
}
export type InputFieldProps = TextInputProps & IInputFieldsProps;
