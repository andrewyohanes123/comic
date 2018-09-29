import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  flexCentered : {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBar : {
    backgroundColor: '#38ada9',
    padding: 12,
    paddingVertical: 10,
    borderBottomColor: '#38ada9',
    borderBottomWidth : 2
  },
  input : {
    padding : 8,
    borderWidth: 0.5,
    borderColor: '#c8d6e5',
    width : '100%',
    backgroundColor : 'white',
    borderRadius: 5,
    marginVertical: 8,
    elevation : 2
  },
  textCenter : {
    textAlign : 'center'
  },
  textWhite : {
    color : 'white'
  },
  text15 : {
    fontSize: 15,
  },
  text20 : {
    fontSize : 20
  },
  text25 : {
    fontSize : 25
  },
  text30 : {
    fontSize : 30
  },
  hr : {
    borderBottomWidth : 0.5,
    borderBottomColor : 'grey',
    marginVertical: 4,
  },
  textMuted : {
    color : 'grey'
  },
  recentComic : {
    padding : 8,
    backgroundColor: 'grey',
    overflow: 'hidden',
  },
  card : {
    borderRadius : 5,
    borderColor: '#c8d6e5',
    borderWidth : 0.5,
    width : (width - 50),
    height : 250,
    marginHorizontal: 4,
    overflow: 'hidden',
    flex : 1
  },
  comicWrapper : {
    flex : 1,
    width : '100%',
    maxHeight : 100,
    backgroundColor: '#f5f6fa',
    marginVertical: 4,
    borderRadius : 5,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  comicImage : {
    flex: 1,
    width : 200,
    height : 200,
    overflow : 'hidden'
  },
  comicDetail : {
    flex : 3,
    padding : 12
  }
})