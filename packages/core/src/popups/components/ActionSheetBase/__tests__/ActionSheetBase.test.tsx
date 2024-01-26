import {render} from '@testing-library/react-native';

import ActionSheetBase from '../ActionSheetBase';
import {IItemType} from '../types';

describe('@lad-tech/mobydick-core/ActionSheetBase', () => {
  it('should renders correctly', () => {
    const {toJSON} = render(
      <ActionSheetBase id={'id'} onClose={() => null}>
        <></>
      </ActionSheetBase>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly with item', () => {
    const {toJSON} = render(
      <ActionSheetBase id={'id'} onClose={() => null}>
        <ActionSheetBase.Item
          textFont={'Regular-White-S'}
          itemType={IItemType.innerItem}
          title={'title'}
        />
      </ActionSheetBase>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
