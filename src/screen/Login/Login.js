import React from "react";
import {View,Text, ImageBackground,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import img from '../../img/background.jpg';

function Login(){

  return(
    
     
    <ImageBackground source={img} style={{width:400,height:800,flex:1}}>
      <ScrollView>
         <Text style={{color:'black',fontSize:64,textAlign:'center',marginTop:20,fontWeight:'bold'}}>Login</Text>
             <View style={{backgroundColor:'white',height:650,width:400,marginTop:50,borderTopLeftRadius:150,marginLeft:10}}>
              <Text style={{color:'darkgreen',fontSize:50,fontWeight:'600',fontFamily:'Roboto',textAlign:'center',marginTop:80}}>
                Welcome Back </Text>
              <Text style={{fontSize:20,textAlign:'center',color:'black'}}>Login to your account{'\n'}</Text>

              <TextInput placeholder="Username/Email" style={{textAlign:'center',fontSize:20,backgroundColor:'gray',width:300,height:50,margin:30,borderRadius:30}}>
               </TextInput>
              
              <TextInput placeholder="Password" style={{textAlign:'center',fontSize:20, backgroundColor:'gray',width:300,height:50,margin:30,borderRadius:30,marginTop:-0.5}}>
                  </TextInput>

              <TouchableOpacity>
               <Text style={{color:'darkgreen',textAlign:'right',marginRight:50,fontWeight:'bold',marginTop:5,}}>
                Forget Password?</Text> 
                </TouchableOpacity>

                <TouchableOpacity>
             <View style={{backgroundColor:'darkgreen',width:300,height:50,margin:40,borderRadius:30,marginTop:20}}>
                <Text style={{color:'white',fontWeight:'bold',fontSize:20,textAlign:'center',marginTop:10}}>
                Login</Text>
              </View>

              </TouchableOpacity>
              <Text style={{color:'red',textAlign:'center'}}>Don't have an account ?</Text>
              <TouchableOpacity >
               <Text style={{color:'darkgreen',marginLeft:270,marginTop:-15}}>Signup</Text>
               </TouchableOpacity>
             </View>
             </ScrollView>
      </ImageBackground> 
  )
}

export default Login;