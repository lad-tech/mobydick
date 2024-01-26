import {render} from '@testing-library/react-native';

import {PanelSpinner} from '../index';

describe('@lad-tech/mobydick-core/PanelSpinner', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<PanelSpinner isLoading />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly canceled', () => {
    const {toJSON} = render(
      <PanelSpinner
        isLoading
        onCancel={() => {
          console.log('renders correctly canceled');
        }}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly done', () => {
    const {toJSON} = render(<PanelSpinner isLoading={false} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly error', () => {
    const {toJSON} = render(<PanelSpinner isLoading={false} isError={true} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
