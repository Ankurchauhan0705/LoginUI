import React from "react";
import {View,Text, ImageBackground,TextInput,TouchableOpacity} from 'react-native';
import img from '../../img/background.jpg';

function Register(){

  return(
    
    <ImageBackground source={img} style={{width:400,height:800,flex:1}}>
         <Text style={{color:'black',fontSize:64,textAlign:'center',marginTop:20,fontWeight:'bold'}}>Register
         </Text>
         <Text style={{color:'black',textAlign:'center',fontSize:25}}>Create a new account
         </Text>

             <View style={{backgroundColor:'white',height:670,width:400,marginTop:10,borderTopLeftRadius:150,marginLeft:10}}>
        
              <TextInput placeholder="First Name" style={{backgroundColor:'gray',width:300,height:50,margin:30,borderRadius:30,
              marginTop:70,textAlign:'center'}}>
              </TextInput>

              <TextInput placeholder="Last Name" style={{backgroundColor:'gray',width:300,height:50,margin:30,borderRadius:30,
              marginTop:-0.5,textAlign:'center'}}>
              </TextInput>

              <TextInput placeholder="Email/User Name" style={{backgroundColor:'gray',width:300,height:50,margin:30,borderRadius:30,
              marginTop:-0.5,textAlign:'center'}}>
              </TextInput>

              <TextInput placeholder="Phone Number" style={{backgroundColor:'gray',width:300,height:50,margin:30,borderRadius:30,
              marginTop:-0.5,textAlign:'center'}}>
              </TextInput>

              <TextInput placeholder="Password" style={{backgroundColor:'gray',width:300,height:50,margin:30,borderRadius:30,
              marginTop:-0.5,textAlign:'center'}}>
                </TextInput>

              <TextInput placeholder="Confrom Password" style={{backgroundColor:'gray',width:300,height:50,margin:30,borderRadius:30,
              marginTop:-0.5,textAlign:'center'}}>
                 </TextInput>
              
              <TouchableOpacity>
               <View style={{backgroundColor:'darkgreen',width:300,height:50,margin:30,borderRadius:30,marginTop:0}}>
                <Text style={{color:'white',fontWeight:'bold',marginLeft:130,marginTop:15}}>
                Signup</Text>
              </View>
              </TouchableOpacity> 
        
              <Text style={{color:'red',textAlign:'center',marginTop:-20,marginLeft:40}}> {'\n'}Already have an account ? </Text>

      <TouchableOpacity >
               <Text style={{color:'darkgreen',fontWeight:'bold',marginLeft:295,marginTop:-15}}> Login</Text>
               </TouchableOpacity>
                   
             </View>
      </ImageBackground>

      )
}

export default Register;