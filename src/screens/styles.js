/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontWeight: 'bold',
    fontSize:50,
    color:'#2BBDC4',
    marginBottom: 40,
  },
  inputView:{
    width:'80%',
    backgroundColor:'#fff',
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:'center',
    padding:20,
    elevation: 10,
    shadowColor: '#2BBDC4',
  },
  inputText:{
  height:50,
  },
  invalidInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
  },
  loginBtn:{
    width:'80%',
    backgroundColor:'#2BBDC4',
    borderRadius:25,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    marginTop:40,
    marginBottom:10,
    },
  textBtn:{
    fontWeight: 'bold',
    fontSize:20,
    color:'#fff',
  },
  textRead: {
    color:'#2BBDC4',
  },
  container2: {
    flex: 0.5,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  img: {
    width: 120,
    height: 100,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop:5,
    marginBottom:5,
    textAlign:'center',
  },
  card:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
   imageCard: {
    width: 150,
    height: 150,
    resizeMode: 'contain',  // Adjust this as needed
  },
  textCard: {
    textAlign: 'center',
    fontSize: 20,
  },
  buttonCard: {
    fontWeight: 'bold',
    fontSize:20,
    color:'#2BBDC4',
    textAlign: 'center',
  },
});

export default styles;
