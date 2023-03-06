import React from 'react';

import {IStatusState, IStatusType} from './types';
import StatusDot from './components/StatusDot';
import StatusTag from './components/StatusTag';

type IProps =
  | {
      type: IStatusType.dot;
      state: IStatusState;
    }
  | {type: IStatusType.tag; state: IStatusState; text: string};

const Status = (props: IProps) => {
  const {type, state} = props;
  return type === IStatusType.dot ? (
    <StatusDot state={state} />
  ) : (
    <StatusTag state={state} text={props.text} />
  );
};

export default Status;
