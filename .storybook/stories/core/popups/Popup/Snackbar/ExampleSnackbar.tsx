import React, {FC} from 'react';

import {
  IContentProps,
  IPosition,
  rem,
  SimpleIcon,
  SnackbarBase,
  TouchableOpacity,
  Typography,
  TypographyProp,
  useTheme,
} from '@lad-tech/mobydick-core';

export interface IExampleSnackbarStoryProps {
  showIcon: boolean;
  title: string;
  snackbarFont: TypographyProp;
  textButton: string;
  showRightButton: boolean;
  position: IPosition;
}
const ExampleSnackbar: FC<
  IContentProps & IExampleSnackbarStoryProps
> = props => {
  const {colors} = useTheme();
  const {
    onClose,
    showIcon,
    position,
    showRightButton,
    textButton,
    title,
    snackbarFont,
  } = props;

  return (
    <SnackbarBase {...props} position={position} timeShow={2000}>
      {showIcon && (
        <SimpleIcon
          name={'icon-check'}
          color={colors.IconAdditional}
          style={{
            paddingRight: rem(8),
          }}
        />
      )}
      <SnackbarBase.Title title={title} titleFont={snackbarFont} />
      {showRightButton && (
        <TouchableOpacity onPress={onClose}>
          <Typography font={'Medium-AccentContrast-XS'}>
            {textButton}
          </Typography>
        </TouchableOpacity>
      )}
    </SnackbarBase>
  );
};

export default ExampleSnackbar;
