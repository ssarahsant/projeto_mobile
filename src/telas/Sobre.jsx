import { Cabecalho } from "../componentes/Cabecalho";

import { StyleSheet, View } from "react-native"

export function Sobre () {
    return (
        <View style={estilos.conteiner}>
            <Cabecalho titulo="Sobre">
            </Cabecalho>
        </View>
    )
}

const estilos = StyleSheet.create ({
    conteiner : {
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginVertical: 10,
        backgroundColor: '#e1e5f2'
    }
})