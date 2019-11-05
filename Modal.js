import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, ImageBackground, TouchableOpacity } from 'react-native'
 
class Conformation extends Component {

    constructor(props){
        super(props);
        this.state = {
            width: Dimensions.get('window').width, 
        };
        Dimensions.addEventListener('change', (e) => {
            this.setState(e.window);
        });
    }

    closeModal = (data) => {
        this.props.changeModalVisibility(false);
        this.props.setData(data)
    }

   render() {
       return (
           <View style={styles.container}>
               <View 
               style={[styles.modal, {width: this.state.width - 80}]}>

                    <Image
                    style={{height:100, width:100, borderRadius:70, paddingTop:50,}}
                    source={require('./user.jpg')}
                    />

                    <Text style={{fontWeight:'bold', color:'white', marginTop:5}}>
                        Fulanilson de Souza
                    </Text>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1,}}>
                            <Image
                            style={{height:20, width:20, marginLeft:140, marginTop:5,}}
                            source={require('./star.png')}
                            />
                        </View>
                        <View style={{flex:1,}}>
                        <Text style={{fontWeight:'bold', color:'white', marginTop:5}}>
                        0,01
                    </Text>
                        </View>
                    </View>

                    <View style={{height:160, width:250, backgroundColor:'#747273', alignItems:'center'}}>
                        <Text style={{color:'#ffff01', marginTop:10,}}>
                            Origem:
                        </Text>

                        <Text style={{color:'white', marginTop:5,}}>
                            Casa da mae Joana
                        </Text>

                        <Text style={{color:'#ffff01', marginTop:10,}}>
                            Destino:
                        </Text>

                        <Text style={{color:'white', marginTop:5,}}>
                            Groelandia
                        </Text>

                        <Text style={{color:'white', marginTop:15, fontSize:25,}}>
                            5 min
                        </Text>

                    </View>
                   
                   <TouchableOpacity style={{height:60, width:332, alignSelf:'center', marginTop:15, backgroundColor:'#feff01', alignItems:'center', justifyContent:'center'}} 
                   onPress={() => this.closeModal('Cancel')}
                   >
                        {/* <Image 
                        style={{height:60, width:165,}}
                        source={require('../src/Close.png')}
                        
                        /> */}

                        <Text style={{fontSize:25, fontWeight:'bold'}}>
                            Aceitar corrida
                        </Text>
                        
                   </TouchableOpacity>

                   <Text style={{color:'white', marginTop:10, fontSize:20,}}>
                            Corrida no Dlnhero
                        </Text>
                    

                     
               </View>
           </View>
        )
    }
}

export default Conformation

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    modal:{
        height:450,
        paddingTop:10,
        alignSelf:'center',
        alignItems:'center',
        textAlign:'center',
        backgroundColor:'#413f40',
        borderRadius:20,
        
        
     },  
     image:{
         height:400,
         width:340,
     }
})