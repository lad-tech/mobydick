import {FC} from 'react';
import {View} from 'react-native';

import SimpleIcon from '../../../styles/icons/font/SimpleIcon';
import useStyles from '../../../styles/hooks/useStyles';
import {Spinner} from '../Spinner';
import {ISizeSpinner} from '../Spinner/types';
import rem from '../../../styles/utils/rem';
import Pressable from '../../../basic/components/Pressable/Pressable';

import stylesCreate from './stylesCreate';
import {PanelSpinnerProps} from './types';

const PanelSpinner: FC<PanelSpinnerProps> = props => {
  const {isLoading, duration = 2500, isError = false, onCancel} = props;
  const [styles, theme] = useStyles(stylesCreate);

  const SpinnerStatus = () => {
    return isError ? (
      <View
        style={[
          styles.insideView,
          {backgroundColor: theme.colors.BgSecondary},
        ]}>
        <SimpleIcon
          name="icon-cancel"
          size={rem(32)}
          color={theme.colors.IconMuted}
        />
      </View>
    ) : (
      <View style={styles.insideView}>
        <SimpleIcon
          name="icon-check"
          size={rem(48)}
          color={theme.colors.IconBase}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <>
          <Spinner duration={duration} size={ISizeSpinner.L} />
          {!!onCancel && (
            <Pressable
              style={[
                styles.insideView,
                {
                  position: 'absolute',
                },
              ]}
              onPress={onCancel}>
              <SimpleIcon name="icon-cancel" color={theme.colors.IconMuted} />
            </Pressable>
          )}
        </>
      ) : (
        <SpinnerStatus />
      )}
    </View>
  );
};

export default PanelSpinner;
