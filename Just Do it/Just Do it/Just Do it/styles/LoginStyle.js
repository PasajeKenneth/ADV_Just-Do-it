// LoginStyle.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    flex: 0,
    backgroundColor: 'rgba(255, 255, 255,255)',
    borderRadius: 20,
    padding: 20,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderColor: 'rgb(135, 206, 235)',
    borderWidth: 2,
  },
  input: {
    borderColor: '#6C3428',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#FAEED1',
    marginBottom: 10,
    width: '100%',
    fontWeight: 'bold',
  },
  inputCard: {
    marginBottom: 0,
    width: '100%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    elevation: 3,
    backgroundColor: 'rgb(135, 206, 235)',
    width: '80%',
    borderColor: 'rgb(135, 150, 235)',
    borderWidth: 2,
    marginTop: 20,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  labelText: {
    color: 'black',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  signUpText: {
    color: 'black',
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
