import { ScrollView, View, Text, Image, StyleSheet } from "react-native";

export default function Thecrawler() {
    return (
        <ScrollView style = {estilo.background}>
            <Text style = {estilo.titulo}>The Crawler</Text>
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image source = {require('./../../assets/images/koichi.avif')} style = {estilo.img}/>
            <Text style = {estilo.text}>Koichi Haimawari, também conhecido como The Crawler, é o protagonista de My Hero Academia: 
            Vigilantes, um spin-off de My Hero Academia. Ele é um estudante universitário que atua como vigilante, ajudando 
            as pessoas sem possuir uma licença oficial de herói.
            Koichi tem uma habilidade chamada Slide and Glide, que lhe permite deslizar rapidamente pelo chão ao emitir uma
            força de repulsão de seus membros. Com o tempo, ele aprimora essa habilidade para se mover em alta velocidade e
            até repelir ataques inimigos.
            </Text>
        </View>
        </ScrollView>
    );
}

const estilo = StyleSheet.create({
    background: {
        backgroundColor: '#000088'
    },
    titulo: {
        fontSize: 48,
        marginTop: 45,
        fontWeight: 700,
        textAlign: 'center',
        color: '#FF0000'
    },
    img: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        marginTop: 15,
        marginTop: -15
    },
    text: {
        width: '85%',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'justify',
        fontSize: 18,
        marginTop: 15,
        color: '#FFF',
    }
});