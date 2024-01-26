import {forwardRef} from 'react';
import {Text as DefaultText} from 'react-native';

import {getConfig} from '../../config';

import {IText, ITextProps} from './types';

const Text = forwardRef<IText, ITextProps>((props, ref) => {
  return (
    <DefaultText
      ref={ref}
      allowFontScaling={getConfig().allowFontScaling}
      {...props}
    />
  );
});
export default Text;
