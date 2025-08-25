import { StyleSheet } from "react-native";
import { frases } from "./Frases";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        verticalAlign: 'top'
    },
    foto: {
        width: 150,
        height: 150,
        borderRadius: 30,
        alignSelf: 'center',
        resizeMode: 'cover'
    },
    logo: {
        width: '90%',
        height: 150,
        alignSelf: 'center',
        resizeMode: 'cover',
        marginTop: 65
    },
    frase: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 20,
        textAlign: 'center'
    },
    autor: {
        fontSize: 24,
        margin: 20,
        textAlign: 'center'
    },
    botao: {
        width: '50%',
        margin: 20
    }
});

export default styles;