import {ScrollView, View, Text, Image, StyleSheet, Pressable, TouchableOpacity} from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
    return (
        <ScrollView style = {estilo.background}>
            <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./../../assets/images/logo.png')} style = {estilo.logo}/>
                <Image source={require('./../../assets/images/team6.jpg')} style = {estilo.img}/>
                <Text style = {estilo.text}>
                    "My Hero Academia: Vigilantes" é um spin-off da série principal, que se passa antes dos eventos que
                    levaram Midoriya para a escola de heróis U.A. A história acompanha Koichi Haimawari, Kazuho Haneyama e 
                    Iwao Oguro, que, apesar de não terem licença de herói, usam suas individualidades para ajudar os outros 
                    e se tornam uma equipe de vigilantes ilegais.
                </Text>
                <Pressable style = {estilo.botaoOriginal}>
                    <Link href="">
                        <Text style = {estilo.linkTexto2}>Conheça a série principal</Text>
                    </Link>
                </Pressable>
                <Text>O link acima não faz parte da {tabs}</Text>
                <Pressable style = {estilo.botaoTheCrawler}>
                    <Link href="">
                        <Text style = {estilo.thecrawlerBTN}>The Crawler</Text>
                    </Link>
                </Pressable>
                <TouchableOpacity style = {estilo.botaoPopStep}>
                    <Link href="../Popstep">
                        <Text style = {estilo.popstepBTN}>Pop Step</Text>
                    </Link>
                </TouchableOpacity>
                <Link style = {estilo.knuckledusterBTN}>
                    <Text style = {estilo.knuckledusterBTN}>knuckleduster</Text>
                </Link>
                <Pressable style = {estilo.botaoLinkQuebrado}>
                    <Link href="../LinkQuebrado" style = {estilo.linkTexto3}>
                        <Text style = {estilo.linkTexto3}>Link Quebrado</Text>
                    </Link>
                </Pressable>
                <Text>O link acima está quebrado e leva para uma página padrão
                quando não é encontrada a rota</Text>
            </View>
        </ScrollView>
    )
}

const estilo = StyleSheet.create({
    background: {
        backgroundColor: '#C0C0C0',
    },
    logo: {
        width: '95%',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 180,
        resizeMode: 'contain',
        marginTop: 15,
    },
    img: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        marginTop: 15,
    },
    text: {
        width: '85%',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'justify',
        fontSize: 18,
        marginTop: 15,
    },
    botaoOriginal: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#00008B',
        borderRadius: 5,
        alignItems: 'center',
    },
    botaoTheCrawler: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#00008B",
        borderRadius: 5,
        alignItems: 'center',
    },
    botaoPopStep: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#4B0082",
        borderRadius: 15,
        alignItems: 'center',
    },
    linkTexto: {
        color: '#FFF',
    },
    thecrawlerBTN: {
        color: '#FF0000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    popstepBTN: {
        color: '#FF1493',
        fontSize: 16,
        fontWeight: 'bold',
    },
    knuckledusterBTN: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 15,
    },
    botaoLinkQuebrado: {
        backgroundColor: '#AAA',
        padding: 15,
    },
    linkTexto2: {
        fontSize: 18,
        fontWeight: '700',
        color: '#FFF',
    },
    linkTexto3: {
        fontSize: 16,
        fontWeight: '700',
    },
});