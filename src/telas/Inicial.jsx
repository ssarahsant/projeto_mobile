// IMPORTAÇÕES 
// todos componetes que forem usados na tea deverão ser importados 
// o componete view é um container/div que possui os demais componentes
// dentro do return tem a função que rerona os componentes
import { StyleSheet, View, Text } from "react-native"


import { Cabecalho } from "../componentes/Cabecalho"
import { Botao } from "../componentes/Botao"


// COMPONENTE (criação da tela)
export function Inicial () {
    return (
        // passagem de propriedades semelhantes com text que será 
        //inserida na função de criação do componente
        <View style={estilos.conteiner}>
            <Cabecalho 
            titulo="Senai Roberto Mange"
            subtitulo="2° DS"/>
            <Botao texto="Usuários"/>
            <Botao texto="Sensores"/>
            <Botao texto="Sobre"/>
        </View>
    )
}

// ESTILIZAÇÃO DO COMPONENTE (antigo arquivo js)
// declaração de uma constante para receber o objeto com as classes de estilização 
// que posteriomenete serão aplicados nos componentes
const estilos = StyleSheet.create({
    conteiner : {
        flex: 1,
        backgroundColor: '#000',
    },
})

