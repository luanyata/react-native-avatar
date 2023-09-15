import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { Avatar } from 'react-native-avatar';

export default function App() {
  return (
    <View style={styles.container}>
      <Avatar userName="Luan Lima" active rounded />
      <Avatar
        userName="Luan "
        size={100}
        backgroundColor={'#ff0000'}
        backgroundColors={['#ff0000', '#00ff00', '#0000ff']}
        active
      />
      <Avatar userName="Luan Lima" size={100} rounded />
      <Avatar
        userName="Luan Lima"
        size={100}
        rounded
        src="https://avatars.githubusercontent.com/u/17828287?v=4"
      />
      <Avatar
        userName="Luan Lima"
        size={100}
        rounded
        src="https://github.com/luanyata.png"
        active
      />
      <Avatar
        userName="Luan Lima"
        size={100}
        rounded
        src="https://avatars.githubusercontent.com/u/17828287?v=4"
        active
        activeCircleColor="red"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 100,
    gap: 20,
    alignItems: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
