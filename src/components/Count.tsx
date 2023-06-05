/* eslint-disable react/react-in-jsx-scope */
import {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Fab} from './Fab';

export const Count = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 0) {
      return setCount(0);
    }
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {count}</Text>
      <Fab
        handleCount={() => setCount(count + 1)}
        title={'+'}
        position="right"
      />
      <Fab
        handleCount={() => setCount(count - 1)}
        title={'-'}
        position="left"
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
  },
});
