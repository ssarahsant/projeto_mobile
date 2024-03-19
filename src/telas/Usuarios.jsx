import { useState } from "react"
import { View, StyleSheet } from "react-native"
import { Cabecalho } from '../componentes/Cabecalho'
import { Formulario } from "../componentes/Formulario"
import { Lista } from "../componentes/Lista"

// importa a biblioteca que gera id unico para cada usuário
import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid'

export function Usuarios(){
    // apresentando o array de usuários nessa tela
    // o useState serve para armazenar dados dentro de um componete  e pode interagir com os mesmo em uma renderização em tempo real
    // nesse state será armazenado um conjunto de informações, que será uma coleção de objetos
    // a função adicionarUusario cria o objeto e ele posterioemente é salvo no vertor declarado abaixo
    const [listaUsuarios, setListaUsuarios] = useState ([])


    // função para inserir usuários na lista
    // capta os valores do input com o clique do bottao
    // essa fução interage com o formulário recebendo os valoresinserido por parametro
    const adicionarUsuario = (nome, email, telefone)  =>{
        // criação de objeto
        let novoUusario = {
            // utilizaçao da biblioteca para gerar ids
            codigo: uuid(), // campo de identificação unica para cada usuário
            nome: nome, // passa para o objeto o conteudo do state para ser amaznedo nesse objeto java script
            email: email, // isso ocorre graças a propriedade de componente controlado
            telefone: telefone
        }

        // ...vetor : operador rest (pega informações e junta num arrya)
        // ex. [...vetor_x, valor_y] o vetor x será juntado com o valor de y

        // []...vetor, valor] spread (pega as informações do vetor e desmenbra - espalha)
        // pega os elementos do vetor listaUusário e separa os objetos em elements individiais
        // ex. let vetor_x = [1,2,3] esse vetor será divido em três 
        
        // o spreed será usado para inserir objetos no vetor
        // aletra as informações([abre o vetor, le o valor, passa o valor])
        // *o set é uma funcionalidade de alterações que recupera o state (super variavel acessada somente via função de leitura e operação)
        setListaUsuarios([...listaUsuarios, novoUusario])

    }// para execução desse função ela será será vinculada ao botao do formulario


    // função para remover usuários
    const removerUsuario = codigo => {
        // usa o fiter para selecionar o codigo do usuário desejado
        // essa função gera um novo array a ártir da regra, 
        // ele percorre a coleção a cada posição, 
        //e manda para um novo array de acordo com a logica

        // essa função busca um codigo especifc passado por parameto e quando encontra 
        // colocando o codigo desejado em um novo vetor e 
        //manter na lista todos que forem diferentes do codigo buscado pelo filter
        setListaUsuarios(
            // percorre a lista de usuário, verificando cada posição para ver se o codigo é diferente e assim manda para um novo vetor
            // se for a pessoa desejada para excluir manda para o novo vetor
            // desse modo mantem na lista aqueles que não possui o codigo desejado
            listaUsuarios.filter( usuario => usuario.codigo !== codigo)
        )
       

    } // essa vai ser disparada em cada um do usuário, para exclusão do seu codigo


    // tela composta por três componentes: cabeçalho, formulário e a lista de usuário
    // o componente formlário é reponsavel por alimentar o array e fornecer os parametro para a função
    // por isso se utiliza uma props que vai fazer essa transmissão de informações através da função
    return(
        <View style={estilos.conteiner}>
            <Cabecalho titulo="Usuários"/>
            <Formulario adicionar={adicionarUsuario}/>
            <Lista colecao={listaUsuarios}
                    remover={removerUsuario}/>
        </View>
    )
}

const estilos = StyleSheet.create ({
    conteiner: {
        felix: 1,
        backgroundColor: '#e1e5f2'
    }
})