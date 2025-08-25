import { ScrollView, View, Text, Image, StyleSheet } from "react-native";

export default function Popstep() {
    return (
        <ScrollView style = {estilo.background}>
            <Text style = {estilo.titulo}>Pop Step</Text>
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image source = {require('./../../assets/images/popstep.jpg')} style = {estilo.img}/>
            <Text style = {estilo.text}>Pop Step, ou Kazuho Haneyama, é uma dos
            protagonistas de My Hero Academia: Vigilantes. Ela é uma idol
            freelancer que atua como vigilante, usando sua individualidade
            para entreter e ajudar as pessoas.
            Pop Step possui a habilidade leap, que lhe permite realizar saltos
            extraordinários e acrobacias aéreas. Ela usa essa habilidade em suas
            apresentações como idol e também para escapar de situações perigosas.
            </Text>
        </View>
        </ScrollView>
    );
}

const estilo = StyleSheet.create({
    background: {
        backgroundColor: '#4B0082',
    },
    titulo: {
        fontSize: 48,
        marginTop: 45,
        fontWeight: 700,
        textAlign: 'center',
        color: '#FF1493',
    },
    img: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
        marginTop: 15,
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