import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const [busca, setBusca] = useState(''); //UseState para receber dados de busca
  const [urlPesquisa, setUrlPesquisa] = useState('https://m.gettywallpapers.com/wp-content/uploads/2022/07/Marvel-Full-HD-Wallpaper.jpg');
  //useState que armazena a url

  // Função para realizar a busca
  const realizarBusca = () => {
    if (busca.trim() !== '') {
      setUrlPesquisa(`https://www.marvel.com/search?limit=20&query=${busca}`);
    }
  };

  // Função intermediária para chamada do botão
  const handleRealizarBusca = () => {
    realizarBusca();
  };

    // Função intermediária para chamada do botão
    const handleLimpa = () => {
      setUrlPesquisa('https://m.gettywallpapers.com/wp-content/uploads/2022/07/Marvel-Full-HD-Wallpaper.jpg');
    };

  return (
    <View style={estilos.container}>
      {/* Logo Marvel */}
      <Image 
        source={{ uri: 'https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-4-1.png' }} 
        style={estilos.logo} 
        resizeMode="contain"
      />
      {/* Área de busca */}
      <View style={estilos.areaBusca}>
        <TextInput
          style={estilos.campoTexto}
          placeholder="Busca por personagem Marvel em inglês"
          placeholderTextColor="white"
          value={busca}
          onChangeText={setBusca}
        />
        <TouchableOpacity style={estilos.botao} onPress={handleRealizarBusca}>
          <AntDesign name="search1" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={estilos.botao2} onPress={handleLimpa}>
          <Text>Limpar</Text>
        </TouchableOpacity>
      </View>
      {/* WebView */}
      <WebView source={{ uri: urlPesquisa }} style={estilos.webview} />
    </View>
  );
}

// Estilos
const estilos = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E62429' },
  areaBusca: { flexDirection: 'row', padding: 10, alignItems: 'center' },
  logo: { width: 150, 
    height: 50, 
    marginTop: 45, 
    alignItems:'center', 
    marginLeft: 'auto',
  marginRight: 'auto' },

  campoTexto: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'white',
    padding: 8,
    borderRadius: 8,
    color: 'white',
    marginTop: 5,
  },
  botao: {
    padding: 10,
    backgroundColor: 'transparent',
    borderRadius: 8,
    marginLeft: 10,
  },
  botao2: {
    padding: 10,
    backgroundColor: 'transparent',
    color: '#FFF',
    borderRadius: 8,
    marginLeft: 10,
  },
  webview: { flex: 1, backgroundColor: 'white' },
});