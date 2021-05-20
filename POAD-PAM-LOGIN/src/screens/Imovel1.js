import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class Imovel1 extends React.Component {
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center'}}> 

      <ScrollView>
        
        <View style={{margin:10}}>
          <Image 
            source={require('../images/Casa.png')} 
            style={styles.logo}
          /> 
        </View>
        
        <View style={styles.container}>      
          <Text style={{fontWeight: "bold"}}>
            Casa à venda em Sorocaba !
            {"\n"}{"\n"}
          </Text>
          <Text>
            Casa na cidade, com 415 m² , com 2 dormitório, sala, banheiro, cozinha e área de serviço. Possui uma garagem coberta para um carro.
            {"\n"}{"\n"}
            Localização: Rua Dom Pedro II - Centro - Sorocaba/SP, Casa charmosa, perto do centro e arborizado em meio a cidade. 
            {"\n"}{"\n"} 
            Estrutura: 5 quartos, 2 suítes, 5 banheiros e 2 vagas para veículos.
            {"\n"}{"\n"}
            Valor: R$ 50.000.00.         
            {"\n"}{"\n"}
            Telefone para contato: (15) 99832-2651.
          </Text>

          <Button
            title="Voltar."
            onPress={() =>
              this.props.navigation.navigate('Home')
            } 
          />
        </View>
      
      </ScrollView>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fffs',
      alignItems: 'stretch',
      justifyContent: 'space-between',
      margin:20,
      height:400,
    },
    logo:{
      width: 335,
      height:100,
      resizeMode:'contain',
    }
  });

export default Imovel1;