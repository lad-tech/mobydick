import {
  iconNames,
  PanelHeader,
  TouchableOpacity,
  Typography,
} from '@npm/mobydick-core';
import React from 'react';
import SimpleIcon from '@npm/mobydick-core/src/styles/icons/font/SimpleIcon';
import {select, text} from '@storybook/addon-knobs';

enum IPanelHeader {
  icon = 'icon',
  text = 'text',
}
const PanelHeaderExample = () => {
  switch (select('panelHeader', IPanelHeader, IPanelHeader.icon)) {
    case IPanelHeader.icon:
    default:
      return (
        <PanelHeader
          title={text('title', 'Title')}
          subtitle={text('subtitle', 'Subtitle')}
          leftView={
            <SimpleIcon
              name={select('left Icon', iconNames, 'icon-calendar')}
            />
          }
          rightView={
            <SimpleIcon name={select('right Icon', iconNames, 'icon-logout')} />
          }
        />
      );
    case IPanelHeader.text:
      return (
        <PanelHeader
          title={text('title', 'Title')}
          subtitle={text('subtitle', 'Subtitle')}
          leftView={
            <TouchableOpacity>
              <Typography font={'Regular-Accent-XS'}>{'Отменить'}</Typography>
            </TouchableOpacity>
          }
          rightView={
            <Typography font={'Regular-Accent-XS'}>{'Изменить'}</Typography>
          }
        />
      );
  }
};

export default PanelHeaderExample;
