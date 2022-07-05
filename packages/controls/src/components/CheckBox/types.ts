import React from 'react';

import {IControlProps} from '../types';

interface ICheckBox {
  children: React.ReactNode;
}

export type TCheckBox = ICheckBox & Omit<IControlProps, 'text'>;
