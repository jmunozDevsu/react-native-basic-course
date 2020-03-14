import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 10,
  },
  item: {
    marginBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  banner: {
    marginVertical: 20,
    maxHeight: 80,
    maxWidth: '100%',
  },
  age: {
    alignSelf: 'center',
  },
});
