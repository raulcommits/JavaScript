import {ScrollView, View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {useRouter} from 'expo-router';

export default function MyHeroAcademy() {
    const router = useRouter();
    return (
        <ScrollView style = {estilo.background}>
            <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style = {estilo.titulo}>Série Principal</Text>
                <Image source={require('./../assets/images/mha.png')} style = {estilo.logo}/>
                <Image source={require('./../assets/images/mhaTeam.webp')} style = {estilo.img}/>
                <Text style = {estilo.text}>
                    Boku no Hero Academia (ou My Hero Academia) é um anime e mangá criado por Konei Horikoshi,
                    ambientado em um mundo onde 80% da população possui superpoderes chamados "individualidades".
                    a história acompanha Izuku Midoriya, um jovem que nasceu sem poderes, mas sonha em se tornar um herói.
                    Após um encontri com All Might, o maior herói de todos os tempos, Midoriya recebe a individualidade
                    One for All e entr na UA Academy, uma escola de treinamento para futuros heróis. Ao longo da série,
                    ele enfrenta vilões poderosos, desenovlve sua habilidade e descobre segredos sobre o mundo dos heróis
                    e vilões.
                </Text>
                <Pressable style = {estilo.botao} onPress={() => router.back()}>
                    <Text style = {estilo.linkTexto}>Retornar para Home</Text>
                </Pressable>

                <Text style = {{color: '#3CB371', marginTop: 35}}>.</Text>
            </View>
        </ScrollView>
    );
}

const estilo = StyleSheet.create({
    background: {
        backgroundColor: '#3CB371'
    },
    logo: {
        width: '95%',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 180,
        resizeMode: 'contain'
    },
    titulo: {
        fontSize: 30,
        marginTop: '700',
        textAlign: 'center',
        color: '#000000'
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
        textAlign: 'justify',
        fontSize: 18,
        marginTop: 15,
        color: '#000'
    },
    botao: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#00008B',
        borderRadius: 5,
        alignItems: 'center'
    },
    linkTexto: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});