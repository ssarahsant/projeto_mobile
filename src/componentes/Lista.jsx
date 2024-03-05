// importação das funcionalidades do react native
import { View, StyleSheet, FlatList } from "react-native"
import { Usuario } from "./Usuario"


// export (torna disponivel para os outros componente)
// função de criação do componente que deve possuir o mesmo nome do arquivo
export function Lista(){
     // criação de um vetor fixo de objetos

     // esse vetor de objetos contém três (objetos) com a estrutura de cadastro do usuário
     // esse vetor simula a apresentação dos usuários cadastrados
     // uma lista de dados, igual a essa são comuns na estrutura de dados. isso porque os objetos em js é semelhante ao json
     const listaUsuarios = [
        {
            // o campo de codigo serve para identificar unicamente cada usuário cadastrado
            codigo: '1',
            nome: 'Sarah', 
            email: 'sarah@gmail.com', 
            telefone: '(19) 12345-6789'
        },

        {
            codigo: '2',
            nome: 'Marlene', 
            email: 'marlene@gmail.com', 
            telefone: '(19) 98765-4321'
        },

        {

            codigo: '3',
            nome: 'Manuella', 
            email: 'manuella@gmail.com', 
            telefone: '(19) 9876-6789'
        }
     ]
   
    // cria a estrutura ao definir a posição de cada elemento
    // criação da lista, atraves de um compoente propicio para isso
    // o flat list tem três propriedades obrigatorios para seu funcionamento:
    // data: como o nome do seu parametros diz se refere a origem dos daods (fonte de dados)
    // uma lista de objetivos dentro do flatlist ela desmenbrada (uma espece de for que percorre uma lista e executa )
    // key: executa uma  arrrow function no objeto
    // nesse caso esta buscando um indice para rendirizar a lista (a cada vez que roda pega o indice de um objeto do vetor para ser manipulado posteriomente com cada um dos dados
    // renderItem: executa uma  arrrow function no objeto (item é cada posição do vetor)
    // nesse exemplo ira desestrurar o objeto para acessar cada campo separadamente, passando dentro dessa propriedade estara correndo uma lista
    // esta executando uma função dentro de uma propridade, por isso nessa função se usa o parenteses para delimitar
    
    // base de dados
    // key: busca o indice
    //render: renderiza para cada posição o indice do array
    // <> = 
    // para fazer a renderização os componentes precisam estar envolvidos por um componente unico, normalmente se usa uma view, mas pode ser utilizados so as tags para envolver
    return(
        <View>
            <FlatList
                data={listaUsuarios}
                keyExtractor={(item) => {item.codigo}}
                renderItem={({item}) => (
                    <Usuario
                    nome={item.nome}
                    email={item.email}
                    telefone={item.telefone}
                    />
                )}
            />
        </View>
    )

}

// estilização do componente
const estilos = StyleSheet.create ({
    texto: {
        color: '#fff',
        paddingTop: 24
    }, 
    item: {
        color: '#fff'
    }
})