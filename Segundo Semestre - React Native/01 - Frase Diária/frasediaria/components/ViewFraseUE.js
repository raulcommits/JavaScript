import React, { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import { frases } from "./Frases";
import styles from './Styles';

export default function ViewFraseUE() {
    const [fraseIndex, setFraseIndex] = useState(0);

    const MostrarFoto = ({ caminho }) => (
        <Image source = {caminho} style = {styles.foto}/>
    );

    const sorteioAleatorioIndex = () => {
        return Math.floor(Math.random() * frases.length);
    };

    const geradorFraseAleatorio = () => {
        setFraseIndex(sorteioAleatorioIndex());
    };

    useEffect(() => {
        geradorFraseAleatorio();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            geradorFraseAleatorio();
        }, 10000);

        return () => clearTimeout(timer);
    }, [fraseIndex]);

    return (
        <View style = {styles.container}>
            <MostrarFoto caminho = {frases[fraseIndex].foto}></MostrarFoto>
            <Text style = {styles.frase}>
                "{frases[fraseIndex].frase}"
            </Text>
            <Text style = {styles.autor}>
                - {frases[fraseIndex].autor} -
            </Text>
        </View>
    );
}