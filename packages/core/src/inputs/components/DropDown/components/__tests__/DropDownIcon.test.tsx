import {render} from '@testing-library/react-native';

import DropDownIcon from '../DropDownIcon';
import SimpleIcon from '../../../../../styles/icons/font/SimpleIcon';

describe('@lad-tech/mobydick-core/DropDownIcon', () => {
  it('renders correctly standart open', () => {
    const {toJSON} = render(<DropDownIcon isOpen={true} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly standart close', () => {
    const {toJSON} = render(<DropDownIcon isOpen={false} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly custom open', () => {
    const {toJSON} = render(
      <DropDownIcon
        isOpen={true}
        rightIcon={<SimpleIcon name={'icon-calendar'} />}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly custom close', () => {
    const {toJSON} = render(
      <DropDownIcon
        isOpen={false}
        rightIcon={<SimpleIcon name={'icon-calendar'} />}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
