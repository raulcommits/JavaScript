import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function NotFoundScreen() {
  const router = useRouter();
  return (
    <View>
        <Text style={estilo.titulo}>Você não deveria estar aqui!</Text>
        <Image source = {require('./../assets/images/erro.avif')} style = {estilo.img}/>
        <Text style = {estilo.titulo}>Erro 404: Page not found</Text>
        <Text style = {estilo.text}>Você acessou um link quebrado e por isso está vendo essa mensagem.</Text>
          <Pressable style={estilo.botao} onPress = {() => router.back()}>
            <Text style={estilo.linkTexto}>Voltar para Home</Text>
          </Pressable>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#000'
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFF'
  },
  botao: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#00008B",
    borderRadius: 5,
    alignItems: 'center'
  },
  linkTexto: {
    fontSize: 14,
    color: '#2e78b7',
  },
  img: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginTop: 15
  },
  text: {
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 15,
    color: '#FFF',
  }
});
