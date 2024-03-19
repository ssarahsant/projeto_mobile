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
        backgroundColor: '#e1e5f2',
        alignItems: 'center',
        paddingVertical: 12
    },
    texto: {
        color: '#2b2d42',
        fontSize: 24,
        fontWeight: '300'
    }
})

