import {useRef} from 'react';

import {
  Button,
  createStyles,
  IPlacement,
  IPosition,
  TooltipBase,
  TypographyLegacy,
  usePopups,
  useStyles,
  View,
} from '@shared/ui';

export const TooltipWidget = () => {
  const ref = useRef(null);
  const [styles] = useStyles(styleFn);
  const {openPopup} = usePopups();

  return (
    <View style={styles.container}>
      <TypographyLegacy font={'Regular-Primary-H5'}>Tooltip</TypographyLegacy>
      <View ref={ref} style={styles.ref}>
        <TypographyLegacy>Ref component</TypographyLegacy>
      </View>
      <Button
        text={'Tooltip'}
        onPress={() =>
          openPopup({
            Content: props => (
              <TooltipBase
                position={IPosition.bottom}
                placement={IPlacement.center}
                refCurrent={ref}
                {...props}>
                <TooltipBase.Title title={'Tooltip title'} />
                <TooltipBase.DescriptionText
                  descriptionText={'Tooltip descriptionText'}
                />
                <TooltipBase.Arrow
                  position={IPosition.bottom}
                  placement={IPlacement.center}
                />
                <TooltipBase.LeftButton text={'Left button'} />
              </TooltipBase>
            ),
          })
        }
      />
    </View>
  );
};

const styleFn = createStyles(({spaces, colors}) => ({
  container: {gap: spaces.Space8},
  ref: {
    alignItems: 'center',
    padding: spaces.Space8,
    backgroundColor: colors.BgAccent,
  },
}));
