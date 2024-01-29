import {useCallback, useMemo} from 'react';
import {TextStyle} from 'react-native';

import Text from '../../../basic/components/Text/Text';
import useTheme from '../../hooks/useTheme';
import rem from '../../utils/rem';

import glyphMap from './unicodesMap.json';

interface IProps {
  name: SimpleIconName;
  color?: string | undefined;
  size?: number;
  style?: TextStyle;
}

const SimpleIcon = ({
  size = rem(24),
  name,
  style,
  color,
}: IProps): JSX.Element => {
  const {colors} = useTheme();
  const resolveGlyph = useCallback((iconName: SimpleIconName): string => {
    const glyph = glyphMap[iconName];
    return String.fromCodePoint(glyph);
  }, []);

  const icon = useMemo(() => resolveGlyph(name), [name]);

  const textStyle = {
    fontSize: size,
    fontFamily: 'Neotis',
    color: color ?? colors.IconNeutral,
    ...style,
  };
  return <Text style={textStyle}>{icon}</Text>;
};

export type SimpleIconName = keyof typeof glyphMap;

export const iconNames = Object.keys(glyphMap) as SimpleIconName[];

export default SimpleIcon;
