import {render} from '@testing-library/react-native';

import CrossedText from '../CrossedText';

describe('CrossedText', () => {
  test('render crossed text default', () => {
    const {toJSON} = render(<CrossedText lineColor={'#000'} />);
    expect(toJSON()).toMatchSnapshot();
  });
  test('render crossed text with lineHeight', () => {
    const {toJSON} = render(<CrossedText lineColor={'#000'} lineHeight={2} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
