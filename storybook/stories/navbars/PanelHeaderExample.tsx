import {iconNames, PanelHeader} from '@npm/mobydick-core';
import React from 'react';
import SimpleIcon from '@npm/mobydick-core/src/styles/icons/font/SimpleIcon';
import {select, text} from '@storybook/addon-knobs';

const PanelHeaderExample = () => {
  return (
    <PanelHeader
      title={text('title', 'Title')}
      subtitle={text('subtitle', 'Subtitle')}
      leftView={
        <SimpleIcon name={select('left Icon', iconNames, 'icon-calendar')} />
      }
      rightView={
        <SimpleIcon name={select('right Icon', iconNames, 'icon-logout')} />
      }
    />
  );
};

export default PanelHeaderExample;
