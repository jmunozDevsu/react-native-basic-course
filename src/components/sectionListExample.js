import React from 'react';
import { SectionList, Text } from 'react-native';

function SectionListExample() {
  const sections = [
    {
      title: 'Section 1',
      data: [],
    },
    {
      title: 'Section 2',
      data: [],
    },
  ];

  for (let i = 1; i <= 25; i++) {
    sections[0].data.push(`Item ${i}`);
  }

  for (let i = 1; i <= 25; i++) {
    sections[1].data.push(Math.random() * i);
  }

  return (
    <SectionList
      data={[...sections]}
      keyExtractor={(item, index) => {
        console.log(item);
        return `${item}${index}`;
      }}
      renderItem={({ item }) => {
        console.log(item);
        return (
          <Text>
            {`${item}`}
          </Text>
        );
      }}
    />
  );
}

export default SectionListExample;
