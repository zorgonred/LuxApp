import React, { Component } from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Image, Modal } from 'react-native'
import MyModal from './Modal.js' 


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        isModalVisible:false,
        choosenData: '',
    }
  }
  changeModalVisibility = (bool) => {
    this.setState({ isModalVisible: bool });
  }

  setData = (data) => {
    this.setState({choosenData: data})
  } 
   render() {
       return (
          <ImageBackground
          style={{height:'100%', width:'100%'}}
          source={require('./map.png')}
          
          >

          <View style={{flex:1}}>
            <View style={{flex:1,}}>

            <View style={{height:65, width:150, backgroundColor:'#ffc11d', borderRadius:40, alignSelf:'center', marginTop:10,}}>

<View style={{height:20, width:50, backgroundColor:'#040000', alignSelf:'center', alignItems:'center', justifyContent:'center'}}>
  <Text style={{color:'#ffc11d',}}>
    Hoje
  </Text>

  
</View>

<Text style={{fontSize:22, fontWeight:'bold', alignSelf:'center', marginTop:5,}}>
    R$ 352,92
  </Text>

</View>


            </View>
            <View style={{flex:4,}}>

            </View>
            <View style={{flex:2}}>

            <TouchableOpacity
            onPress={() => this.changeModalVisibility(true) }
             style={{height:120, width:120, backgroundColor:'#ffc11d', borderRadius:70, alignSelf:'center', marginTop:10,}}>
              <Text style={{fontSize:25,fontWeight:'bold', alignSelf:'center', marginTop:20,}}>
                Offline
              </Text>

              <Image
              style={{height:50, width:100, marginLeft:10,}}
              source={require('./road.png')}
              />

            </TouchableOpacity>

            <Modal transparent={true} visible={this.state.isModalVisible} onRequestClose={() => this.changeModalVisibility(false)}
               animationType='fade'>
                    <MyModal changeModalVisibility={this.changeModalVisibility } setData={this.setData} />
               </Modal>

              </View>
            <View style={{flex:1, backgroundColor:'#ffffff', flexDirection:'row'}}>
                <TouchableOpacity style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Image
                style={{height:40, width:40,}}
                source={require('./menu.png')}
                />
                </TouchableOpacity>
                <View style={{flex:4, alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontSize:25, fontWeight:'bold'}}>
                      Buscando Corridas...
                    </Text>
                </View>
            </View>
          </View>
           
          </ImageBackground>
        )
    }
}

export default App