import {fireEvent, render} from '@testing-library/react-native';

import {IContentProps} from '../../types';
import ButtonWrapper from '../../../basic/components/Button/ButtonWrapper';
import View from '../../../basic/components/View/View';
import PopupsProvider from '../../context/PopupsProvider';
import MobyDickPopup from '../MobyDickPopup';

const testIdPopup = 'testIdPopup';
const testIdOpenPopup = 'testIdOpenPopup';
const testIdCloseAllPopup = 'testIdCloseAllPopup';

const Popup = ({onClose}: IContentProps) => {
  return (
    <ButtonWrapper testID={testIdPopup} onPress={onClose} title={'title'} />
  );
};

const Example = () => {
  return (
    <View>
      <ButtonWrapper
        testID={testIdOpenPopup}
        onPress={() => {
          const id = MobyDickPopup.openPopup({
            Content: Popup,
            props: {
              onClose: () => {
                MobyDickPopup.closePopup(id);
              },
            },
          });
        }}
        title={'title'}
      />
      <ButtonWrapper
        testID={testIdCloseAllPopup}
        onPress={() => MobyDickPopup.closeAllPopups()}
        title={'title'}
      />
    </View>
  );
};

describe('@lad-tech/mobydick-core/MobyDickPopup', () => {
  it('should renders correctly', async () => {
    const {toJSON, getByTestId} = render(
      <PopupsProvider>
        <Example />
      </PopupsProvider>,
    );

    // Изначально попапа нет
    expect(toJSON()).toMatchSnapshot();

    // Вызвали openPopup и он появился
    fireEvent.press(getByTestId(testIdOpenPopup));
    expect(toJSON()).toMatchSnapshot();

    // Вызвали onClose у попапа и он пропал
    fireEvent.press(getByTestId(testIdPopup));
    expect(toJSON()).toMatchSnapshot();

    // Пооткрывали много папапов и они отприсовались норм
    fireEvent.press(getByTestId(testIdOpenPopup));
    fireEvent.press(getByTestId(testIdOpenPopup));
    expect(toJSON()).toMatchSnapshot();

    // Вызвали closeAllPopups и они все закрылись
    fireEvent.press(getByTestId(testIdCloseAllPopup));
    expect(toJSON()).toMatchSnapshot();
  });
});
