import {IStatusProps, IStatusType} from './types';
import StatusDot from './components/StatusDot';
import StatusTag from './components/StatusTag';

const Status = (props: IStatusProps) => {
  const {type, state, style} = props;
  return type === IStatusType.dot ? (
    <StatusDot state={state} style={style} />
  ) : (
    <StatusTag state={state} text={props.text} style={style} />
  );
};

export default Status;
