import {ICarouselAlign} from '../types';
import View from '../../../../basic/components/View/View';

const EmptyFirstItem = ({
  align,
  width,
}: {
  align: ICarouselAlign;
  width: number;
}) => {
  return align === ICarouselAlign.center ? (
    <View style={{width: width}} />
  ) : null;
};

export default EmptyFirstItem;
