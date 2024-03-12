import { View, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native"
import { useState } from "react"

// recuperando a props da tela usuários para passar a função que irá adicionar o usuário na coleção
export function Formulario({adicionar}){

    // states armazena dados que interage com a renderização do componete
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

    return(
        // TextInput serve para o input de dados no aplicativo
        // os componentes serão vuinculadores atrves de duas propriedades onchage e value
        // on é executado a acada aletação dentro do input (evento) pegando a informação e armazendo no state atraves do set (respoonsavel pela alteração)
        // value é o state do input é a informação que esta sendo apresentada no input é a forma de leitura
        // aletrações do state aletra o input e vise versa
        <View  style={estilos.conteiner}>
            <TextInput
            style={estilos.campo}
            keyboardType='default'
            placeholder="Nome"
            placeholderTextColor= '#000'
            onChangeText={setNome}
            value={nome}>
            </TextInput>

            <TextInput
            style={estilos.campo}
            keyboardType='email-address'
            placeholder="E-mail"
            placeholderTextColor= '#000'
            onChangeText={setEmail}
            value={email}>
            </TextInput>

            <TextInput
            style={estilos.campo}
            placeholder="Telefone"
            keyboardType='phone-pad'
            placeholderTextColor= '#000'
            onChangeText={setTelefone}
            value={telefone}>
            </TextInput>

            <TouchableOpacity
             style={estilos.botao}
             onPress={() => adicionar(nome, email, telefone)
             
             }>
                <Text>
                    Adicionar
                </Text>
            </TouchableOpacity>
        </View>
        // definição do tipo de dado que o input recebe keyboardtypoe
        // place holde isnere uma mensgaem no input
        // style atribui o estilo
        // ON PRESS (QUANDO O BOTÃO for clicado) 
        //executa a função que adiciona o usuário localizada na tela usuário 
        // que foi passado para o formulário atraves de props na nomecatura adicionar
    )
}

// padding horizontal = padding left e righ
// padding vertical = padding bottom e top
const estilos = StyleSheet.create ({
    conteiner: {
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginVertical: 10,
        backgroundColor: '#000'
    },

    campo: {
        height: 50,
        backgroundColor: '#fff',
        marginVertical: 5,
        color: '#000',
        padding: 10,
        borderRadius: 5,
        fontSize: 16
    },

    botao: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#fff',
        marginVertical: 5,
        color: '#fff',
        padding: 10,
        borderRadius: 5,
        fontSize: 16
    }
})