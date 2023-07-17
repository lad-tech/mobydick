import {isValidMessageTime} from '../isValidMessageTime';

describe('@lad-tech/mobydick-core/Chat/isValidMessageTime', () => {
  it('08:11', () => {
    const res = isValidMessageTime('08:11');
    expect(res).toBeTruthy();
  });
  it('00:00', () => {
    const res = isValidMessageTime('00:00');
    expect(res).toBeTruthy();
  });
  it('11:11', () => {
    const res = isValidMessageTime('11:11');
    expect(res).toBeTruthy();
  });
  it('23:59', () => {
    const res = isValidMessageTime('23:59');
    expect(res).toBeTruthy();
  });
  it('test', () => {
    const res = isValidMessageTime('test');
    expect(res).toBeFalsy();
  });
  it('88:11', () => {
    const res = isValidMessageTime('88:11');
    expect(res).toBeFalsy();
  });
  it('00:61', () => {
    const res = isValidMessageTime('00:61');
    expect(res).toBeFalsy();
  });
});
