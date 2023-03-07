import React from 'react';
import {ViewStyle} from 'react-native';

import {IStatusState, IStatusType} from './types';
import StatusDot from './components/StatusDot';
import StatusTag from './components/StatusTag';

type IProps =
  | {
      type: IStatusType.dot;
      state: IStatusState;
      style?: ViewStyle | ViewStyle[];
    }
  | {
      type: IStatusType.tag;
      state: IStatusState;
      text: string;
      style?: ViewStyle | ViewStyle[];
    };

const Status = (props: IProps) => {
  const {type, state, style} = props;
  return type === IStatusType.dot ? (
    <StatusDot state={state} style={style} />
  ) : (
    <StatusTag state={state} text={props.text} style={style} />
  );
};

export default Status;
