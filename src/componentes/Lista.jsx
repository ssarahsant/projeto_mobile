// importação das funcionalidades do react native
import { View, Text, StyleSheet } from "react-native"


// export (torna disponivel para os outros componente)
// função de criação do componente que deve possuir o mesmo nome do arquivo
export function Lista(){
    // cria a estrutura ao definir a posição de cada elementi 
    return(
        <View>
             <Text style={estilos.texto}>
                Lista
            </Text>
        </View>
    )
}

// estilização do componente
const estilos = StyleSheet.create ({
    texto: {
        color: '#fff',
        paddingTop: 24
    }
})