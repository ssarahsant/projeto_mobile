import { View, StyleSheet, Text, TouchableOpacity } from "react-native"


export function Usuario({nome, email, telefone}){
    return(
        <View style={estilos.conteiner}>
        
            <View style={estilos.conteinerDados}>
                <Text style={estilos.texto}>{nome}</Text>
                <Text style={estilos.texto}>{email}</Text>
                <Text style={estilos.texto}>{telefone}</Text>
            </View>

            <TouchableOpacity style={estilos.botao}>
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
        backgroundColor: '#fff',
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
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    textoBotao: {
        fontSize: 30
    }
})