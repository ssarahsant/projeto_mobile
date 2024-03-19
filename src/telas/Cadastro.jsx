import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Cabecalho } from "../componentes/Cabecalho";
import { useState } from "react";

export function Cadastro () {
    // states armazena dados que interage com a renderização do componete
    const [nome, setNome] = useState('')
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <View style={estilos.conteiner}>

           <Cabecalho titulo="Cadastro"></Cabecalho> 

            <TextInput
            style={estilos.campo}
            keyboardType="default"
            placeholder="Nome"
            placeholderTextColor="#fff"
            onChangeText={setNome}
            value={nome}>
            </TextInput>

            <TextInput
            style={estilos.campo}
            keyboardType="default"
            placeholder="Usuário"
            placeholderTextColor="#fff"
            onChangeText={setUsuario}
            value={usuario}>
            </TextInput>

            <TextInput
            style={estilos.campo}
            keyboardType="default"
            placeholder="Senha"
            placeholderTextColor="#fff"
            onChangeText={setSenha}
            value={senha}>
            </TextInput>


            <TouchableOpacity
            style={estilos.botao}>

                <Text style={estilos.texto}>
                    Cadastrar
                </Text>

            </TouchableOpacity>


        </View>
    )
}

const estilos = StyleSheet.create ({
    conteiner: {
        flex: 1, 
        justifyContent: 'center',
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginVertical: 10,
        backgroundColor: '#e1e5f2'
    },

    campo: {
        height: 50,
        backgroundColor: '#7389ae',
        marginVertical: 5,
        color: '#fff',
        padding: 10,
        borderRadius: 5,
        fontSize: 16
    },

    botao: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#3a506b',
        marginVertical: 5,
        padding: 1,
        borderRadius: 5,
    },
    
    texto: {
        color: '#fff',
        fontSize: 16
    }
})