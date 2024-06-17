import {render} from '@testing-library/react-native';

import {TypographyLegacy} from '../TypographyLegacy';

describe('@lad-tech/mobydick-core/TypographyLegacy', () => {
  it('renders default correctly', () => {
    const {toJSON} = render(<TypographyLegacy>My Text</TypographyLegacy>);
    expect(toJSON()).toMatchSnapshot();
  });
});
