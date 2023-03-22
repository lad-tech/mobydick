import React from 'react';

import {Collapsible, Typography, View} from '@npm/mobydick-core';

const ChildrenView = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Typography>{'one'}</Typography>
      <Typography>{'two'}</Typography>
      <Typography>{'three'}</Typography>
    </View>
  );
};
const CollapsibleExample = () => {
  return (
    <>
      <Collapsible title={'Collapsible 1'}>
        <ChildrenView />
      </Collapsible>
      <Collapsible title={'Collapsible 2'}>
        <ChildrenView />
      </Collapsible>
      <Collapsible title={'Collapsible 3'}>
        <ChildrenView />
      </Collapsible>
    </>
  );
};

export default CollapsibleExample;
