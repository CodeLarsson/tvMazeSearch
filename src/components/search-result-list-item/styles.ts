import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  listItemWrapper: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  listItemHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    width: '100%',
  },
  listItemText: {
    fontSize: 16,
  },
  listItemBody: {
    fontSize: 14,
    flexDirection: 'column',
    flexWrap: 'wrap',
    gap: 4,
  },
  listItemGenres: {
    fontSize: 12,
    padding: 2,
    borderWidth: 1,
    borderRadius: 4,
  },
  listItemGenresView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    alignItems: 'center',
  },
  listItemFooter: {
    marginTop: 16,
    flexDirection: 'row',
    gap: 8,
  },
});
