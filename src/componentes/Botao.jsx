import { StyleSheet, TouchableOpacity, Text } from "react-native"

// importação do state (elemento HOOKS encontrado no react)
import {useState} from 'react'

// CRIAÇÃO DE COMPONENTE
// Um conteiner pode ser qualquer componente que envolta os demais, como ocorre abaixo

// A função que cria os componentes possui parametros e um deles  é o 
// props (objetivo padrão do jsx) que passa informações para o componente
// Para que cada botão receba um valor diferente
// No arquivo da página deve-se inserir o valor que será recuperado dentro 
// desse função que cria o componente
export const Botao = ({texto}) => {
    // STATE (ATUALIZA NA INTERFACE AUTOMATIAMENTE)
    // declaração do state
    // é criado um array com com duas funcionalidades get e set)
    // atributo da função que acessa com uma função de leitura e a outra para alteração
    // no parentes está o valor inical
    const [cliques, setCliques] = useState(0)

    // criação de função
    const contarCliques = () => {
        // print o resultado no cmd de forma incrementada
        // a cada clique sioma mais 1
        // console.log(cliques++)
        // chama a função set clique que soma + 1 na variavel
        setCliques(cliques + 1)
    }


    // no local desejado para receber o valor recebebido
    // usando {props.nome_do valor_da_pagina}
    // return é a parte que está sendo rendriza que monta  o componente
    // ligação do evento com o componente do botão através do onPress
    return(
        <TouchableOpacity style={estilos.conteiner}
        onPress={contarCliques}
        >

            <Text style={estilos.texto}> {texto} {cliques}</Text>
        </TouchableOpacity>
    )
}

// ESTILIZAÇÃO
const estilos = StyleSheet.create({
    conteiner : {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 120,
        marginTop: 24,
        marginStart: 24,
        borderRadius: 12,
        borderColor: 'fff',
        borderWidth: 1,
    },
    texto: {
        color: '#000',
        fontSize: 20
    }
})

