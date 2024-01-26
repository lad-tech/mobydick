import {render} from '@testing-library/react-native';

import VerticalButtonsView from '../VerticalButtonsView';
import VerticalButton from '../VerticalButton';
import {IButtonTypes} from '../../../../cta/components/Button/types';

describe('@lad-tech/mobydick-core/modalBase', () => {
  it('should renders correctly VerticalButtonsView one button', () => {
    const {toJSON} = render(
      <VerticalButtonsView>
        <VerticalButton
          type={IButtonTypes.destructive}
          onPress={() => console.log('onPress')}
          text={'text'}
        />
      </VerticalButtonsView>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
