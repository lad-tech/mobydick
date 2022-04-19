import {TextInputProps} from '@mobydick/core';

interface IInputFieldsProps {
  title?: string;
  underInputText?: string;
}
export type InputFieldProps = TextInputProps & IInputFieldsProps;
