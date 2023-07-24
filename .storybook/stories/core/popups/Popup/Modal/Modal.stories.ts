import {ComponentStoryObj, Meta} from '@storybook/react-native';

import selectFont from '../../../../../utils/selectFont';

import PopupModalExample from './PopupModalExample';
import {allowAccessText} from './ExampleModal';

import {IButtonSize, IButtonTypes} from '@lad-tech/mobydick-core';

const meta: Meta<typeof PopupModalExample> = {
  title: 'Core/Popup',
  component: PopupModalExample,
};

type Story = ComponentStoryObj<typeof PopupModalExample>;

export const Modal = {
  args: {
    titleFont: 'SemiBold-Primary-L',
    descriptionFont: 'Regular-Tertiary-XS',
    showAlertCheck: true,
    showAlertWarning: false,
    showImage: false,
    showTextContent: false,
    titleText: 'Нет доступа к камере',
    descriptionText:
      'Разрешите доступ к камере в настройках, чтобы сканировать штрихкод или QR-код на картах',
    showVerticalButton: false,
    typeOneVerticalButton: IButtonTypes.primary,
    textOneVerticalButton: allowAccessText,
    typeTwoVerticalButton: IButtonTypes.destructive,
    textTwoVerticalButton: allowAccessText,
    showHorizontalButton: true,
    typeRightButton: IButtonTypes.secondary,
    textRightButton: 'Добавить',
    typeLeftButton: IButtonTypes.destructive,
    disabledLeft: false,
    disabledRight: false,
    textLeftButton: 'Отмена',
    showOneButton: false,
    typeOneButton: IButtonTypes.primary,
    textOneButton: allowAccessText,
    sizeOneButton: IButtonSize.fixed,
  },
  argTypes: {
    titleFont: {
      options: selectFont,
      control: {
        type: 'select',
      },
    },
    sizeOneButton: {
      options: Object.values(IButtonSize),
      control: {
        type: 'select',
      },
    },
    typeOneButton: {
      options: Object.values(IButtonTypes),
      control: {
        type: 'select',
      },
    },
    typeLeftButton: {
      options: Object.values(IButtonTypes),
      control: {
        type: 'select',
      },
    },
    typeRightButton: {
      options: Object.values(IButtonTypes),
      control: {
        type: 'select',
      },
    },
    typeOneVerticalButton: {
      options: Object.values(IButtonTypes),
      control: {
        type: 'select',
      },
    },
    typeTwoVerticalButton: {
      options: Object.values(IButtonTypes),
      control: {
        type: 'select',
      },
    },
    descriptionFont: {
      options: selectFont,
      control: {
        type: 'select',
      },
    },
  },
} satisfies Story;

export default meta;
