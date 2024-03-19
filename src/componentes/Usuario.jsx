import { View, StyleSheet, Text, TouchableOpacity } from "react-native"


export function Usuario({nome, email, telefone, remover}){
    return(
        <View style={estilos.conteiner}>
        
            <View style={estilos.conteinerDados}>
                <Text style={estilos.texto}>{nome}</Text>
                <Text style={estilos.texto}>{email}</Text>
                <Text style={estilos.texto}>{telefone}</Text>
            </View>

            <TouchableOpacity style={estilos.botao}
                                onPress={remover}>
                <Text style={estilos.textoBotao}>-</Text>
            </TouchableOpacity>
        
        </View>
    )
}

const estilos = StyleSheet.create ({
    conteiner: {
        flexDirection: 'row',
        margin: 5
    },
    conteinerDados: {
        flex: 1,
        backgroundColor: '#e1e5f2',
        borderRadius: 5,
        padding: 5,
        paddingHorizontal: 10
    },
    texto: {
        color: '#000',
        fontSize: 16
    },
    botao: {
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginStart: 10,
        backgroundColor: '#3a506b',
        borderRadius: 5,
    },
    textoBotao: {
        fontSize: 40,
        color: '#fff'
    }
})