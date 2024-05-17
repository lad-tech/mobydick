import px from '../utils/px';

export const defaultSpaces: IDefaultSpaces = {
  Space1: px(1),
  Space2: px(2),
  Space4: px(4),
  Space6: px(6),
  Space8: px(8),
  Space10: px(10),
  Space12: px(12),
  Space16: px(16),
  Space20: px(20),
  Space24: px(24),
  Space32: px(32),
  Space40: px(40),
  Space48: px(48),
  Space64: px(64),
};

export type IDefaultSpaces = {
  Space1: number;
  Space2: number;
  Space4: number;
  Space6: number;
  Space8: number;
  Space10: number;
  Space12: number;
  Space16: number;
  Space20: number;
  Space24: number;
  Space32: number;
  Space40: number;
  Space48: number;
  Space64: number;
};
