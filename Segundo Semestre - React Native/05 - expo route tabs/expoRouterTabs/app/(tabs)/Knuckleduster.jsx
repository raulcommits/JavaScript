import { ScrollView, View, Text, Image, StyleSheet } from "react-native";

export default function Knuckleduster() {
    return (
        <ScrollView style = {estilo.background}>
            <Text style = {estilo.titulo}>Knuckleduster</Text>
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image source = {require('./../../assets/images/knikles.webp')} style = {estilo.img}/>
            <Text style = {estilo.text}>Knuckleduster, ou Iwao Oguro, é um dos
                personagens principais de My Hero Academia: Vigilantes. Ele é um
                vigilante sem individualidade, que combate criminosos de forma 
                brutal e direta, sem seguir as regras dos heróis licenciados.
            História e Personalidade
            Antes de se tornar Knuckleduster, ele era um herói profissional conhecido
            como O'Clock, com a individualidade Overclock, que lhe permitia perceber o
            mundo em velocidade extrema.
            Sua individualidade foi roubada por All for One, tornando-o quirkless (sem
            individualidade).
            Mesmo sem poderes, ele continua lutando contra o crime usando sua força
            física e habilidades de combate.
            Ele é um mentor para Koichi (The Crawler) e Pop Step, ensinando-os a
            sobreviver como vigilantes.
            </Text>
        </View>
        </ScrollView>
    );
}

const estilo = StyleSheet.create({
    background: {
        backgroundColor: '#808080',
    },
    titulo: {
        fontSize: 48,
        marginTop: 45,
        fontWeight: 700,
        textAlign: 'center',
        color: '#000000',
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
        color: '#000',
    }
});