import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 20,
    backgroundColor: '#f5f5f5', // Cor de fundo leve
  },
  input: {
    width: '30%',
    marginBottom: 15,
    backgroundColor: '#fff', // Fundo branco para campos de entrada
  },
  button: {
    width: '15%',
    marginTop: 20,
    //paddingVertical: 10,
    //borderRadius: 5, // Canto arredondado para botões
    backgroundColor: '#64009e',
  },
  header: {
    backgroundColor: '#64009e',
    //backgroundColor: '#6200ee', // Cor de fundo da barra superior
  },
  title: {
    color: '#fff', // Cor do texto da barra superior
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  photoContainer: {
    //background: url(/assets/splash.png),
    marginBottom: 20,
    alignItems: 'center',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50, // Foto circular
    backgroundColor: '#ddd', // Cor de fundo para área de foto
  },
});

