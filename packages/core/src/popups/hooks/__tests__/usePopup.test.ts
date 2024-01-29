import {renderHook} from '@testing-library/react-hooks';
import {FC} from 'react';
import {act} from '@testing-library/react-native';

import usePopup from '../usePopup';
import {PopupsProvider} from '../../context';
import {MobyDickPopup} from '../../MobyDickPopup';
import {IContentProps} from '../../types';

describe('@lad-tech/mobydick-core/usePopup', () => {
  const fakeComponent: FC<{title: string} & IContentProps> = () => null;
  beforeEach(jest.clearAllMocks);

  it('use case', () => {
    const openPopup = jest.spyOn(MobyDickPopup, 'openPopup');
    const closePopup = jest.spyOn(MobyDickPopup, 'closePopup');
    const closeAllPopups = jest.spyOn(MobyDickPopup, 'closeAllPopups');
    const props = {title: 'test'};

    const {result} = renderHook(() => usePopup(fakeComponent), {
      wrapper: PopupsProvider,
    });

    act(() => {
      result.current.open({title: 'test'});
    });
    expect(openPopup).toHaveBeenCalledWith({Content: fakeComponent, props});

    act(() => {
      result.current.close();
    });
    expect(closePopup).toHaveBeenCalledWith('1');

    act(() => {
      result.current.closeAll();
    });
    expect(closeAllPopups).toHaveBeenCalled();
  });

  it('close before open', () => {
    const closePopup = jest.spyOn(MobyDickPopup, 'closePopup');

    const {result} = renderHook(() => usePopup(fakeComponent), {
      wrapper: PopupsProvider,
    });

    act(() => {
      result.current.close();
    });
    expect(closePopup).not.toHaveBeenCalled();
  });

  it('open without props', () => {
    const component: FC = () => null;
    const openPopup = jest.spyOn(MobyDickPopup, 'openPopup');

    const {result} = renderHook(() => usePopup(component), {
      wrapper: PopupsProvider,
    });
    act(() => {
      result.current.open();
    });
    expect(openPopup).toHaveBeenCalledWith({Content: component, props: {}});
  });
});
