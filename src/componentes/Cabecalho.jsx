// Criação do Componente
import { StyleSheet, View, Text } from "react-native"

// criar com o mesmo nome do arquivo
export const Cabecalho = ({titulo, subtitulo}) => {
    return (
        // o compomnente view é um conteinr que aramznea os demais componentes
        <View style={estilos.conteiner}>
            <Text style={estilos.texto}>{titulo}</Text>
        </View>
    )
}

// ESTILIZAÇÃO DO COMPONENTE do Componente (antigo arquivo js)
const estilos = StyleSheet.create({
    conteiner : {
        backgroundColor: '#000',
        alignItems: 'center',
        paddingVertical: 12
    },
    texto: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '300'
    }
})

