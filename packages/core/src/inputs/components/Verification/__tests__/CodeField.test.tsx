import {act, render} from '@testing-library/react-native';

import CodeField from '../CodeField';
import {LABELS} from '../../../../other';

describe('@lad-tech/mobydick-core/CodeField', () => {
  test('render correctly with value focus', () => {
    const {toJSON, getByLabelText} = render(<CodeField />);
    expect(toJSON()).toMatchSnapshot();

    const codeField = getByLabelText(LABELS.codeField);
    act(() => codeField.props.onFocus());
  });
  test('render correctly with value blur', () => {
    const onChangeText = jest.fn();
    const {toJSON, getByLabelText} = render(
      <CodeField
        onBackKeyPress={() => console.log('onBackKeyPress')}
        onChangeText={onChangeText}
        fontStyleCodeField={'Regular-Primary-XL'}
      />,
    );

    const codeField = getByLabelText(LABELS.codeField);
    act(() => codeField.props.onBlur());

    expect(toJSON()).toMatchSnapshot();
    act(() => codeField.props.onKeyPress({nativeEvent: {key: 'cancel'}}));
  });
  test('render correctly with value onKeyPress', () => {
    const onChangeText = jest.fn();
    const {toJSON, getByLabelText} = render(
      <CodeField
        onBackKeyPress={() => console.log('onBackKeyPress')}
        onChangeText={onChangeText}
      />,
    );

    const codeField = getByLabelText(LABELS.codeField);

    act(() => codeField.props.onKeyPress({nativeEvent: {key: 'Backspace'}}));
    expect(toJSON()).toMatchSnapshot();
  });
});
