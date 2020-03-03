import React from 'react';
import { FlatList, Text } from 'react-native';

function FlatListExample() {
  const data = [];

  for (let i = 1; i <= 50; i++) {
    data.push(`Item ${i}`);
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Text>
          {item}
        </Text>
      )}
    />
  );
}

export default FlatListExample;
