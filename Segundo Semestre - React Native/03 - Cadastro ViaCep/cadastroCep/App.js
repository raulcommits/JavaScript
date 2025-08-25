import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Alert } from "react-native";
import axios from "axios";
import styles from './Styles';

export default function App() {
  const [formData, setFormData] = useState({
    nome: '',
    celular: '',
    email: '',
    cep: '',
    logradouro: '',
    bairro: '',
    cidade: '',
    uf: '',
    numero: '',
    complemento: '',
  });

  const [cadastros, setCadastros] = useState([]);

  const buscarCep = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${formData.cep}/json/`);

      if (response.data.erro) {
        Alert.alert('Erro', 'O CEP informado não retornou dados. Insira os dados manualmente.');
        setFormData({ ...formData, logradouro: '', bairro: '', cidade: '', uf: '' });
      } else {
        setFormData({
          ...formData,
          logradouro: response.data.logradouro,
          bairro: response.data.bairro,
          cidade: response.data.cidade,
          uf: response.data.uf,
        });
      }
    } catch (error) {
      Alert.alert('Erro', 'Falha ao busca o CEP');
    }
  };

  const inserirCadastro = () => {
    if (!formData.nome || !formData.celular || !formData.email || !formData.cep || !formData.numero) {
      Alert.alert('Erro', 'Todos os campos obrigatórios devem ser preenchidos.');
      return;
    }

    setCadastros([...cadastros, formData]);

    setFormData({
      nome: '',
      celular: '',
      email: '',
      cep: '',
      logradouro: '',
      bairro: '',
      cidade: '',
      uf: '',
      numero: '',
      complemento: '',
    });
  };

  return (
    <ScrollView style = {styles.scroll}>
      <View style = {styles.container}>
        <View style = {styles.logoArea}>
          <Image source={{uri: 'https://lojavirtual.compesa.com.br:8443/gsan/imagens/portal/icons/icone_novo_cliente.png' }} style = {styles.logo}/>
        </View>

        <TextInput placeholder="Nome" value={formData.nome} onChangeText={(text) => setFormData({...formData, nome: text})} style = {styles.input}/>
        <TextInput placeholder="Celular" value={formData.celular} onChangeText={(text) => setFormData({...formData, celular: text})} style = {styles.input} keyboardType="phone-pad"/>
        <TextInput placeholder="Email" value={formData.email} onChangeText={(text) => setFormData({...formData, email: text})} style = {styles.input} keyboardType="email-address"/>
        <TextInput placeholder="CEP" value={formData.cep} onChangeText={(text) => setFormData({...formData, cep: text})} style = {styles.input} keyboardType="numeric" onBlur={buscarCep}/>
        <TextInput placeholder="Logradouro" value={formData.logradouro} onChangeText={(text) => setFormData({...formData, logradouro: text})} style = {styles.input}/>
        <TextInput placeholder="Bairro" value={formData.bairro} onChangeText={(text) => setFormData({...formData, bairro: text})} style = {styles.input}/>
        <TextInput placeholder="Cidade" value={formData.cidade} onChangeText={(text) => setFormData({...formData, cidade: text})} style = {styles.input}/>
        <TextInput placeholder="UF" value={formData.uf} onChangeText={(text) => setFormData({...formData, uf: text})} style = {styles.input}/>
        <TextInput placeholder="Número" value={formData.numero} onChangeText={(text) => setFormData({...formData, numero: text})} style = {styles.input} keyboardType="numeric"/>
        <TextInput placeholder="Complemento" value={formData.complemento} onChangeText={(text) => setFormData({...formData, complemento: text})} style = {styles.input}/>

          <TouchableOpacity style = {styles.button} onPress={inserirCadastro}>
        <Text style = {styles.buttonText}>Inserir</Text>
      </TouchableOpacity>

  <View style = {styles.viewArea}>
    {cadastros.map((cadastro, index) => (
      <View key={index} style={styles.card}>
        <Text><Text style={{ fontWeight: 'bold' }}>Nome: </Text> {cadastro.nome} </Text>
        <Text><Text style={{ fontWeight: 'bold' }}>Celular: </Text> {cadastro.celular} </Text>
        <Text><Text style={{ fontWeight: 'bold' }}>Email: </Text> {cadastro.email} </Text>
        <Text><Text style={{ fontWeight: 'bold' }}>CEP: </Text> {cadastro.cep} </Text>
        <Text><Text style={{ fontWeight: 'bold' }}>Logradouro: </Text> {cadastro.logradouro} </Text>
        <Text><Text style={{ fontWeight: 'bold' }}>Bairro: </Text> {cadastro.bairro} </Text>
        <Text><Text style={{ fontWeight: 'bold' }}>Cidade: </Text> {cadastro.cidade} </Text>
        <Text><Text style={{ fontWeight: 'bold' }}>UF: </Text> {cadastro.uf} </Text>
        <Text><Text style={{ fontWeight: 'bold' }}>Número: </Text> {cadastro.numero} </Text>
        <Text><Text style={{ fontWeight: 'bold' }}>Complemento: </Text> {cadastro.complemento} </Text>
      </View>
    ))};
  </View>

      </View>
    </ScrollView>
  );
}