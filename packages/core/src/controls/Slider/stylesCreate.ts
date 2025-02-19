import {I18nManager, StyleSheet} from 'react-native';

import {createStyles} from '../../styles';

const stylesCreate = createStyles(({spaces, colors}) => ({
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: I18nManager.isRTL ? 'flex-end' : 'flex-start',
    alignItems: 'center',
    minHeight: spaces.Space32,
  },
  rail: {
    flex: 1,
    height: spaces.Space4,
    borderRadius: spaces.Space64,
    backgroundColor: colors.BorderSoft,
  },
  selectedRailContainer: {
    position: 'absolute',
  },
  selectedRail: {
    height: spaces.Space4,
    backgroundColor: colors.BorderExtra,
    borderRadius: spaces.Space2,
  },
  highThumbContainer: {
    position: 'absolute',
  },
  railsContainer: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    alignItems: 'center',
  },
  touchableArea: {
    ...StyleSheet.absoluteFillObject,
  },
}));

export default stylesCreate;
