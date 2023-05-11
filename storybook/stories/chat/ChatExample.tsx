import React, {useState} from 'react';

import {ChatInputField, View} from '@npm/mobydick-core';

const ChatExample = () => {
  const [valueInput, setValueInput] = useState('');
  return (
    <View>
      <ChatInputField
        placeholder={'Сообщение'}
        value={valueInput}
        onChangeText={setValueInput}
      />
    </View>
  );
};

export default ChatExample;
