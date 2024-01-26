import {render} from '@testing-library/react-native';

import ListEmptySelector from '../ListEmptySelector';

describe('npm/mobydick-inputs/ListEmptySelector', () => {
  it('renders correctly with text and font', async () => {
    const {toJSON} = render(
      <ListEmptySelector
        listEmptyFont={'Regular-Error-L'}
        listEmptyText={'Ничего нет'}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly without text and font', async () => {
    const {toJSON} = render(<ListEmptySelector />);

    expect(toJSON()).toMatchSnapshot();
  });
});
