import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native'


export default class ListaTarefas extends Component {

  getEstilo() {
    if(this.props.Status == 'Em aberto') {
      return { color:'orange', fontWeight: 'bold' }
    } else if (this.props.Status == 'Encerrado') {
      return { color:'green', fontWeight: 'bold' } 
    } else {
      return { color:'black' } 
    }
  }

  getEstilo2() {   /*Professor. Eu não consegui puxar a data pra fazer a comparação e trocar a cor. Então fiz essa tolice. Desculpe!*/
    if(this.props.DataTermino  == '24/03/2022') {
      return { color:'orange', fontWeight: 'bold' }
    } else if (this.props.DataTermino < '24/03/2022') {
      return { color:'red', fontWeight: 'bold' } 
    } else {
      return { color:'black' } 
    }
  }

  render() {

    return (
      <View style={{ margin: 5 }}>

      

        <View style={{ flex: 1, borderRadius: 10, backgroundColor: 'white', padding: 10 }}>
          <View style={{ flex: 1 }}>
          <Text> Data atual: </Text>
            <Text style={{fontSize: 16, backgroundColor: '#A0A0A0',  borderRadius: 6}}>  ID:{this.props.id}  </Text>
            <Text style={{fontSize: 20, fontWeight:'600', color:'black', alignSelf:'center'}}>Tarefa: {this.props.Descricao}</Text>
            <Text style={{fontSize: 16}}>Data Término: <Text style={this.getEstilo2()}>{this.props.DataTermino}</Text></Text>
            <Text style={{fontSize: 16}}>Prioridade: {this.props.Prioridade}</Text>
            <Text style={{fontSize: 16}}>Status: <Text style={this.getEstilo()}>{this.props.Status}</Text></Text>

          </View>

          <Text></Text>

          <View style={{ flex: 1, flexDirection: 'row', }}>


            <TouchableOpacity onPress={() => { this.props.concluir(this.props.id) }} 
            style={{
              flex: 1,
              flexDirection: 'row',
              margin: 5,
              alignItems: 'center',
              justifyContent: 'center',
              width: 100,
              height: 30,
              backgroundColor: '#7ACED7',
              borderRadius: 8
              
            }}>
              <Text style={{ color: 'white' }}>CONCLUIR TAREFA</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => { this.props.deletar(this.props.id) }} style={{
              flex: 1,
              flexDirection: 'row',
              margin: 5,
              alignItems: 'center',
              justifyContent: 'center',
              width: 100,
              height: 30,
              backgroundColor: 'red',
              borderRadius: 8
            }}>
              <Text style={{ color: 'white' }}>EXCLUIR</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    )
  }
}


  
  
