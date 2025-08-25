import React, {useState} from "react";
import { View, Text, TextInput, Button, Image, ScrollView } from "react-native";
import axios from "axios";
import styles from './Styles';

export default function App() {
  const [cep, setCep] = useState('');
  const [data, setData] = useState(null);

  const consumirAPI = async () => {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    setData(response.data);
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.logoArea}>
      <Image source={{uri:'https://viacep.com.br/estatico/images/viacep.png.pagespeed.ce.180LiA6qpr.png'}} style={styles.logo}/>
      </View>
      <TextInput
        value={cep}
        onChangeText={setCep}
        placeholder="Digite o CEP"
        style={styles.inputCep}
      />
      <Button title="Enviar" onPress={consumirAPI} color={'orange'} style={styles.btn}/>
    
    {data && (
      <View style={styles.viewArea}>
        <Text>CEP: {data.cep}</Text>
        <Text>Logradouro: {data.logradouro}</Text>
        <Text>Complemento: {data.complemento}</Text>
        <Text>Bairro: {data.bairro}</Text>
        <Text>Localidade: {data.localidade}</Text>
        <Text>UF: {data.uf}</Text>
        <Text>IBGE: {data.ibge}</Text>
        <Text>GIA: {data.gia}</Text>
        <Text>DDD: {data.ddd}</Text>
        <Text>SIAFI: {data.siafi}</Text>
        <Text style={styles.subText}>1- Guia de Informação e Apuração do ICMS, ou apenas GIA, é um documento fiscal obrigatório que deve ser. 2- Sistema Integrado de Administração Financeira do Governo Federal - SIAFI é um sistema contábil que tem por finalidade realizar to</Text>
      </View>
    )}

    </View>
    </ScrollView>
  );
}