// Importações
// para reconhecer a estilização usar o status bar do expo ao inves do react 
import { StyleSheet, StatusBar, Text, View } from 'react-native';
// importa a aplicação construida na pasta src
import { Inicial } from './src/telas/Inicial';
import { Usuarios } from './src/telas/Usuarios';
import { Login } from './src/telas/Login';
import { Cadastro } from './src/telas/Cadastro';
import { Sobre } from './src/telas/Sobre';

// ESTRUTURAÇÃO
// Função (deve possuir o mesmo nome do arquivo)
// comando export ascrecenta um componente (tela), ou seja, tudo que será 
//usado no compenente (tela) deve ser expostado da impotação que ocorreu acima
// a maioria das expostações é fonte do react native
export default function App() {
  return (
    // Texto da tela inicial
    // renderiza rtela criada na outra pasta atraves de um componente sem fechamento 
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Inicial/>
    </View>
  );
}
// na função que gera um componente o return será responsavel por retornar componete jsx 
// (estrutura do react que possui um arquivo jsx é uma mescla entre java script e componetes baseado em html e css) 
// que retorna um conteiner com texto e status
// trocar status bar para linha superior e aletra o comando entre as aspas para "ligth-contente"
// os comandos do view possuem estruturas de html para desevolver e manipular
// o conteudo esta dentro de um view, porém deve sermpe ser envolvido por um unico contennier


// ESTILIZAÇÃO
// componete stylesheet possueim um componente que usa as classe de estilização baseado no css dentro do java script
// a diferença está na sintaxe, que não possui hifens e desfruta do camelCase  
// flex: 1 - o componete ocupa todo o espaço disponivel
// o array de estilização é um objeto que possui uma função
// os tamanhos não são iguais da web, existe outas definições de dimensão
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e5f2'
  },
});
// esse conjunto de estilos estão sendo aplicados na função app na primiera linha do view aatravés do comando
// style = {objeto.classe do html (texto, container, entre outros)}
