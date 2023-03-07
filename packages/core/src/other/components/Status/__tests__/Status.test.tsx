import {render} from '@testing-library/react-native';
import React from 'react';

import Status from '../Status';
import {IStatusState, IStatusType} from '../types';

describe('Status', () => {
  it('render type dot green', () => {
    const {toJSON} = render(
      <Status
        type={IStatusType.dot}
        state={IStatusState.green}
        style={{flex: 1}}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('render type dot red', () => {
    const {toJSON} = render(
      <Status type={IStatusType.dot} state={IStatusState.red} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('render type dot blue', () => {
    const {toJSON} = render(
      <Status type={IStatusType.dot} state={IStatusState.blue} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('render type dot gray', () => {
    const {toJSON} = render(
      <Status type={IStatusType.dot} state={IStatusState.gray} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('render type dot orange', () => {
    const {toJSON} = render(
      <Status type={IStatusType.dot} state={IStatusState.orange} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('render type tag green', () => {
    const {toJSON} = render(
      <Status
        type={IStatusType.tag}
        state={IStatusState.green}
        text={'text'}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('render type tag blue', () => {
    const {toJSON} = render(
      <Status
        type={IStatusType.tag}
        state={IStatusState.blue}
        text={'text'}
        style={{flex: 1}}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('render type tag red', () => {
    const {toJSON} = render(
      <Status type={IStatusType.tag} state={IStatusState.red} text={'text'} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('render type tag gray', () => {
    const {toJSON} = render(
      <Status type={IStatusType.tag} state={IStatusState.gray} text={'text'} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('render type tag orange', () => {
    const {toJSON} = render(
      <Status
        type={IStatusType.tag}
        state={IStatusState.orange}
        text={'text'}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('render not state', () => {
    const {toJSON} = render(
      <Status
        type={IStatusType.tag}
        state={'yellow' as IStatusState}
        text={'text'}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
